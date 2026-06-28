import { getAnalysisPriceId, getSiteUrl, getStripe } from '../../../lib/stripe';

type CheckoutPayload = {
  leadId?: unknown;
  email?: unknown;
  company?: unknown;
  firstName?: unknown;
  lastName?: unknown;
  sector?: unknown;
};

function clean(value: unknown, maxLength: number) {
  if (typeof value !== 'string') return '';
  return value.trim().slice(0, maxLength);
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  let payload: CheckoutPayload;

  try {
    payload = await request.json();
  } catch {
    return Response.json({ ok: false, error: 'invalid_json' }, { status: 400 });
  }

  const email = clean(payload.email, 180).toLowerCase();
  const company = clean(payload.company, 140);
  const firstName = clean(payload.firstName, 80);
  const lastName = clean(payload.lastName, 80);
  const sector = clean(payload.sector, 120);
  const leadId = clean(payload.leadId, 80);

  if (!leadId || !email || !isValidEmail(email) || !company) {
    return Response.json({ ok: false, error: 'invalid_checkout_payload' }, { status: 400 });
  }

  try {
    const siteUrl = getSiteUrl();
    const stripe = getStripe();
    const priceId = getAnalysisPriceId();

    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      customer_email: email,
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: `${siteUrl}/paiement/succes?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${siteUrl}/paiement/retour?lead_id=${encodeURIComponent(leadId)}`,
      client_reference_id: leadId,
      metadata: {
        leadId,
        company,
        firstName,
        lastName,
        sector,
        offer: 'analysis_launch_200',
      },
      payment_intent_data: {
        metadata: {
          leadId,
          company,
          offer: 'analysis_launch_200',
        },
      },
      allow_promotion_codes: false,
    });

    if (!session.url) {
      return Response.json({ ok: false, error: 'missing_checkout_url' }, { status: 502 });
    }

    return Response.json({ ok: true, url: session.url, sessionId: session.id });
  } catch (error) {
    console.error('SCANADMIN_CHECKOUT_FAILED', { leadId, error });
    return Response.json({ ok: false, error: 'checkout_failed' }, { status: 500 });
  }
}
