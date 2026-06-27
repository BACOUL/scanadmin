type ScanResult = {
  totalMonthlyHours?: number;
  monthlyCost?: number;
  annualCost?: number;
  lowRecoverableHours?: number;
  highRecoverableHours?: number;
};

type LeadPayload = {
  firstName?: unknown;
  lastName?: unknown;
  company?: unknown;
  email?: unknown;
  phone?: unknown;
  sector?: unknown;
  message?: unknown;
  consent?: unknown;
  scanResult?: ScanResult | null;
};

type Lead = {
  id: string;
  createdAt: string;
  source: 'analysis-form';
  firstName: string;
  lastName: string;
  company: string;
  email: string;
  phone: string;
  sector: string;
  message: string;
  consent: true;
  scanResult: ScanResult | null;
  meta: {
    referrer: string;
    userAgent: string;
  };
};

const MAX_LENGTHS = {
  firstName: 80,
  lastName: 80,
  company: 140,
  email: 180,
  phone: 60,
  sector: 120,
  message: 2000,
};

function clean(value: unknown, maxLength: number) {
  if (typeof value !== 'string') return '';
  return value.trim().slice(0, maxLength);
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function createLead(payload: LeadPayload, request: Request): Lead | null {
  const firstName = clean(payload.firstName, MAX_LENGTHS.firstName);
  const lastName = clean(payload.lastName, MAX_LENGTHS.lastName);
  const company = clean(payload.company, MAX_LENGTHS.company);
  const email = clean(payload.email, MAX_LENGTHS.email).toLowerCase();
  const phone = clean(payload.phone, MAX_LENGTHS.phone);
  const sector = clean(payload.sector, MAX_LENGTHS.sector);
  const message = clean(payload.message, MAX_LENGTHS.message);

  if (!firstName || !lastName || !company || !email || !isValidEmail(email) || payload.consent !== true) {
    return null;
  }

  return {
    id: `lead_${Date.now()}_${Math.random().toString(36).slice(2, 10)}`,
    createdAt: new Date().toISOString(),
    source: 'analysis-form',
    firstName,
    lastName,
    company,
    email,
    phone,
    sector,
    message,
    consent: true,
    scanResult: payload.scanResult ?? null,
    meta: {
      referrer: request.headers.get('referer') ?? '',
      userAgent: request.headers.get('user-agent') ?? '',
    },
  };
}

function escapeHtml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function formatLeadText(lead: Lead) {
  const scan = lead.scanResult;
  return [
    `Nouveau lead ScanAdmin`,
    `ID: ${lead.id}`,
    `Date: ${lead.createdAt}`,
    `Nom: ${lead.firstName} ${lead.lastName}`,
    `Entreprise: ${lead.company}`,
    `Email: ${lead.email}`,
    `Téléphone: ${lead.phone || 'Non renseigné'}`,
    `Secteur: ${lead.sector || 'Non renseigné'}`,
    `Message: ${lead.message || 'Non renseigné'}`,
    ``,
    `Résultat scan`,
    `Heures mensuelles estimées: ${scan?.totalMonthlyHours ?? 'Non disponible'}`,
    `Coût mensuel estimé: ${scan?.monthlyCost ?? 'Non disponible'} €`,
    `Coût annuel estimé: ${scan?.annualCost ?? 'Non disponible'} €`,
    `Heures récupérables estimées: ${scan?.lowRecoverableHours ?? 'Non disponible'} à ${scan?.highRecoverableHours ?? 'Non disponible'} h/mois`,
  ].join('\n');
}

function formatLeadHtml(lead: Lead) {
  const text = formatLeadText(lead);
  return `<pre style="font-family: Arial, sans-serif; white-space: pre-wrap; line-height: 1.5;">${escapeHtml(text)}</pre>`;
}

async function sendWebhook(lead: Lead) {
  const webhookUrl = process.env.SCANADMIN_LEADS_WEBHOOK_URL;
  if (!webhookUrl) return null;

  const headers: Record<string, string> = { 'Content-Type': 'application/json' };
  const secret = process.env.SCANADMIN_LEADS_WEBHOOK_SECRET;
  if (secret) headers.Authorization = `Bearer ${secret}`;

  const response = await fetch(webhookUrl, {
    method: 'POST',
    headers,
    body: JSON.stringify(lead),
  });

  if (!response.ok) {
    throw new Error(`Webhook delivery failed with status ${response.status}`);
  }

  return 'webhook';
}

async function sendEmail(lead: Lead) {
  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.SCANADMIN_LEADS_TO_EMAIL;
  if (!apiKey || !toEmail) return null;

  const fromEmail = process.env.SCANADMIN_LEADS_FROM_EMAIL || 'ScanAdmin <onboarding@resend.dev>';

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [toEmail],
      subject: `Nouveau lead ScanAdmin — ${lead.company}`,
      text: formatLeadText(lead),
      html: formatLeadHtml(lead),
    }),
  });

  if (!response.ok) {
    throw new Error(`Email delivery failed with status ${response.status}`);
  }

  return 'email';
}

export async function POST(request: Request) {
  let payload: LeadPayload;

  try {
    payload = await request.json();
  } catch {
    return Response.json({ ok: false, error: 'invalid_json' }, { status: 400 });
  }

  const lead = createLead(payload, request);

  if (!lead) {
    return Response.json({ ok: false, error: 'invalid_lead' }, { status: 400 });
  }

  const deliveries: string[] = [];

  try {
    const webhookDelivery = await sendWebhook(lead);
    if (webhookDelivery) deliveries.push(webhookDelivery);

    const emailDelivery = await sendEmail(lead);
    if (emailDelivery) deliveries.push(emailDelivery);
  } catch (error) {
    console.error('SCANADMIN_LEAD_DELIVERY_FAILED', { leadId: lead.id, error });
    return Response.json({ ok: false, error: 'delivery_failed', leadId: lead.id }, { status: 502 });
  }

  if (deliveries.length === 0) {
    console.warn('SCANADMIN_LEAD_LOG_FALLBACK', lead);
    deliveries.push('server_log_fallback');
  }

  return Response.json({ ok: true, leadId: lead.id, deliveries });
}
