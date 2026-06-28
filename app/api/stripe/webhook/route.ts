import Stripe from 'stripe';
import { getStripe } from '../../../../lib/stripe';

export const runtime = 'nodejs';

type PaymentNotification = {
  eventType: string;
  sessionId: string;
  paymentStatus: string | null;
  customerEmail: string | null;
  amountTotal: number | null;
  currency: string | null;
  leadId: string;
  company: string;
  firstName: string;
  lastName: string;
  sector: string;
  createdAt: string;
};

function formatPaymentText(notification: PaymentNotification) {
  return [
    'Paiement ScanAdmin reçu',
    `Type: ${notification.eventType}`,
    `Session Stripe: ${notification.sessionId}`,
    `Statut: ${notification.paymentStatus ?? 'Non disponible'}`,
    `Lead ID: ${notification.leadId || 'Non disponible'}`,
    `Entreprise: ${notification.company || 'Non renseignée'}`,
    `Nom: ${notification.firstName} ${notification.lastName}`.trim(),
    `Email: ${notification.customerEmail ?? 'Non disponible'}`,
    `Secteur: ${notification.sector || 'Non renseigné'}`,
    `Montant: ${notification.amountTotal !== null ? `${notification.amountTotal / 100} ${notification.currency?.toUpperCase() ?? ''}` : 'Non disponible'}`,
    `Date: ${notification.createdAt}`,
  ].join('\n');
}

function escapeHtml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

async function notifyPayment(notification: PaymentNotification) {
  const deliveries: string[] = [];
  const webhookUrl = process.env.SCANADMIN_PAYMENTS_WEBHOOK_URL || process.env.SCANADMIN_LEADS_WEBHOOK_URL;

  if (webhookUrl) {
    const headers: Record<string, string> = { 'Content-Type': 'application/json' };
    const secret = process.env.SCANADMIN_PAYMENTS_WEBHOOK_SECRET || process.env.SCANADMIN_LEADS_WEBHOOK_SECRET;
    if (secret) headers.Authorization = `Bearer ${secret}`;

    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers,
      body: JSON.stringify({ type: 'scanadmin.payment_succeeded', payment: notification }),
    });

    if (!response.ok) {
      throw new Error(`Payment webhook delivery failed with status ${response.status}`);
    }

    deliveries.push('webhook');
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.SCANADMIN_PAYMENTS_TO_EMAIL || process.env.SCANADMIN_LEADS_TO_EMAIL;

  if (apiKey && toEmail) {
    const fromEmail = process.env.SCANADMIN_PAYMENTS_FROM_EMAIL || process.env.SCANADMIN_LEADS_FROM_EMAIL || 'ScanAdmin <onboarding@resend.dev>';
    const text = formatPaymentText(notification);

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        subject: `Paiement ScanAdmin reçu — ${notification.company || notification.leadId}`,
        text,
        html: `<pre style="font-family: Arial, sans-serif; white-space: pre-wrap; line-height: 1.5;">${escapeHtml(text)}</pre>`,
      }),
    });

    if (!response.ok) {
      throw new Error(`Payment email delivery failed with status ${response.status}`);
    }

    deliveries.push('email');
  }

  if (deliveries.length === 0) {
    console.warn('SCANADMIN_PAYMENT_LOG_FALLBACK', notification);
    deliveries.push('server_log_fallback');
  }

  return deliveries;
}

export async function POST(request: Request) {
  const signature = request.headers.get('stripe-signature');
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  if (!signature || !webhookSecret) {
    return Response.json({ ok: false, error: 'missing_webhook_signature_or_secret' }, { status: 400 });
  }

  const rawBody = await request.text();
  const stripe = getStripe();
  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(rawBody, signature, webhookSecret);
  } catch (error) {
    console.error('SCANADMIN_STRIPE_WEBHOOK_SIGNATURE_FAILED', error);
    return Response.json({ ok: false, error: 'invalid_signature' }, { status: 400 });
  }

  if (event.type !== 'checkout.session.completed') {
    return Response.json({ ok: true, ignored: true });
  }

  const session = event.data.object as Stripe.Checkout.Session;

  if (session.payment_status !== 'paid') {
    return Response.json({ ok: true, ignored: true, reason: 'not_paid' });
  }

  const notification: PaymentNotification = {
    eventType: event.type,
    sessionId: session.id,
    paymentStatus: session.payment_status,
    customerEmail: session.customer_details?.email ?? session.customer_email ?? null,
    amountTotal: session.amount_total,
    currency: session.currency,
    leadId: session.metadata?.leadId ?? session.client_reference_id ?? '',
    company: session.metadata?.company ?? '',
    firstName: session.metadata?.firstName ?? '',
    lastName: session.metadata?.lastName ?? '',
    sector: session.metadata?.sector ?? '',
    createdAt: new Date().toISOString(),
  };

  try {
    const deliveries = await notifyPayment(notification);
    return Response.json({ ok: true, deliveries });
  } catch (error) {
    console.error('SCANADMIN_PAYMENT_NOTIFICATION_FAILED', { sessionId: session.id, error });
    return Response.json({ ok: false, error: 'payment_notification_failed' }, { status: 502 });
  }
}
