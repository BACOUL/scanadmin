'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

type ScanSummary = {
  totalMonthlyHours?: number;
  monthlyCost?: number;
  annualCost?: number;
  lowRecoverableHours?: number;
  highRecoverableHours?: number;
};

type SavedInput = {
  sector?: unknown;
};

type LeadForm = {
  firstName: string;
  lastName: string;
  company: string;
  email: string;
  phone: string;
  sector: string;
  message: string;
  consent: boolean;
  termsAccepted: boolean;
  immediateExecution: boolean;
};

type LeadResponse = {
  ok: boolean;
  leadId?: string;
  error?: string;
};

type CheckoutResponse = {
  ok: boolean;
  url?: string;
  sessionId?: string;
  error?: string;
};

const initialForm: LeadForm = {
  firstName: '',
  lastName: '',
  company: '',
  email: '',
  phone: '',
  sector: '',
  message: '',
  consent: false,
  termsAccepted: false,
  immediateExecution: false,
};

function isNumber(value: unknown): value is number {
  return typeof value === 'number' && Number.isFinite(value);
}

function isScanSummary(value: unknown): value is ScanSummary {
  if (!value || typeof value !== 'object') return false;

  const candidate = value as ScanSummary;

  return (
    isNumber(candidate.totalMonthlyHours) &&
    isNumber(candidate.monthlyCost) &&
    isNumber(candidate.annualCost) &&
    isNumber(candidate.lowRecoverableHours) &&
    isNumber(candidate.highRecoverableHours)
  );
}

function parseLocalJson<T>(key: string) {
  const saved = localStorage.getItem(key);
  if (!saved) return null;

  try {
    return JSON.parse(saved) as T;
  } catch {
    localStorage.removeItem(key);
    return null;
  }
}

function readSavedResult() {
  const parsed = parseLocalJson<unknown>('scanadmin:lastResult');
  if (!parsed) return null;

  if (isScanSummary(parsed)) return parsed;

  localStorage.removeItem('scanadmin:lastResult');
  return null;
}

function readSavedInputSector() {
  const parsed = parseLocalJson<SavedInput>('scanadmin:lastInput');
  if (!parsed || typeof parsed !== 'object') return '';

  if (typeof parsed.sector === 'string') return parsed.sector;

  return '';
}

export function AnalysisForm() {
  const [form, setForm] = useState<LeadForm>(initialForm);
  const [scanResult, setScanResult] = useState<ScanSummary | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const savedResult = readSavedResult();
    const savedSector = readSavedInputSector();

    if (savedResult) {
      setScanResult(savedResult);
    }

    if (savedSector) {
      setForm((current) => ({ ...current, sector: savedSector }));
    }
  }, []);

  function updateField(key: keyof LeadForm, value: string | boolean) {
    setForm((current) => ({ ...current, [key]: value }));
  }

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError('');

    if (!form.consent) {
      setError('Vous devez accepter d’être recontacté pour recevoir votre analyse.');
      return;
    }

    if (!form.termsAccepted) {
      setError('Vous devez accepter les conditions générales de vente avant de commander.');
      return;
    }

    if (!form.immediateExecution) {
      setError('Vous devez demander l’exécution de l’analyse après paiement pour lancer la commande.');
      return;
    }

    setIsSubmitting(true);

    try {
      const leadResponse = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, scanResult }),
      });

      const leadData = (await leadResponse.json()) as LeadResponse;

      if (!leadResponse.ok || !leadData.ok || !leadData.leadId) {
        throw new Error(leadData.error || 'Lead submission failed');
      }

      localStorage.setItem('scanadmin:lastLead', JSON.stringify({ ...form, scanResult, leadId: leadData.leadId, createdAt: new Date().toISOString() }));

      const checkoutResponse = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          leadId: leadData.leadId,
          email: form.email,
          company: form.company,
          firstName: form.firstName,
          lastName: form.lastName,
          sector: form.sector,
        }),
      });

      const checkoutData = (await checkoutResponse.json()) as CheckoutResponse;

      if (!checkoutResponse.ok || !checkoutData.ok || !checkoutData.url) {
        throw new Error(checkoutData.error || 'Checkout creation failed');
      }

      window.location.href = checkoutData.url;
    } catch {
      setError('Impossible de lancer le paiement pour le moment. Vérifiez vos informations puis réessayez.');
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={submit} className="card" style={{ padding: 24 }}>
      {scanResult ? (
        <div style={{ background: '#e9fbf7', borderRadius: 18, padding: 18, marginBottom: 22 }}>
          <p style={{ marginTop: 0, color: '#0f766e', fontWeight: 700 }}>Votre scan sera joint à la commande</p>
          <p style={{ marginBottom: 0, color: '#102033' }}>
            {scanResult.totalMonthlyHours} h/mois estimées, {scanResult.monthlyCost?.toLocaleString('fr-FR')} € / mois, {scanResult.lowRecoverableHours} à {scanResult.highRecoverableHours} h/mois récupérables.
          </p>
        </div>
      ) : (
        <div style={{ background: '#fff7ed', borderRadius: 18, padding: 18, marginBottom: 22 }}>
          <p style={{ margin: 0, color: '#9a3412' }}>Aucun résultat de scan détecté. Vous pouvez quand même commander une analyse.</p>
        </div>
      )}

      <div className="grid grid-2">
        <label>Prénom<input className="input" required value={form.firstName} onChange={(e) => updateField('firstName', e.target.value)} /></label>
        <label>Nom<input className="input" required value={form.lastName} onChange={(e) => updateField('lastName', e.target.value)} /></label>
        <label>Entreprise<input className="input" required value={form.company} onChange={(e) => updateField('company', e.target.value)} /></label>
        <label>Email<input className="input" required type="email" value={form.email} onChange={(e) => updateField('email', e.target.value)} /></label>
        <label>Téléphone<input className="input" value={form.phone} onChange={(e) => updateField('phone', e.target.value)} /></label>
        <label>Secteur<input className="input" value={form.sector} onChange={(e) => updateField('sector', e.target.value)} /></label>
      </div>

      <label style={{ display: 'block', marginTop: 18 }}>Message optionnel<textarea className="input" rows={5} value={form.message} onChange={(e) => updateField('message', e.target.value)} /></label>

      <label style={{ display: 'flex', gap: 12, marginTop: 18, color: '#5d6b7a' }}>
        <input type="checkbox" checked={form.consent} onChange={(e) => updateField('consent', e.target.checked)} />
        <span>J’accepte d’être recontacté au sujet de mon analyse ScanAdmin. Les résultats sont indicatifs et ne garantissent pas un gain réel sans audit personnalisé.</span>
      </label>

      <label style={{ display: 'flex', gap: 12, marginTop: 18, color: '#5d6b7a' }}>
        <input type="checkbox" checked={form.termsAccepted} onChange={(e) => updateField('termsAccepted', e.target.checked)} />
        <span>J’accepte les <Link href="/cgv" target="_blank" style={{ color: '#0f766e', fontWeight: 800 }}>conditions générales de vente</Link> de ScanAdmin.</span>
      </label>

      <label style={{ display: 'flex', gap: 12, marginTop: 18, color: '#5d6b7a' }}>
        <input type="checkbox" checked={form.immediateExecution} onChange={(e) => updateField('immediateExecution', e.target.checked)} />
        <span>Je demande que l’analyse personnalisée puisse commencer après paiement, sans attendre un délai supplémentaire.</span>
      </label>

      {error ? <p style={{ color: '#b91c1c', fontWeight: 700 }}>{error}</p> : null}

      <button className="button" style={{ marginTop: 24 }} type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Redirection vers le paiement...' : 'Commander mon analyse — 200 €'}
      </button>
    </form>
  );
}
