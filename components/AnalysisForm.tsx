'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

type ScanSummary = {
  totalMonthlyHours?: number;
  monthlyCost?: number;
  annualCost?: number;
  lowRecoverableHours?: number;
  highRecoverableHours?: number;
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
};

export function AnalysisForm() {
  const router = useRouter();
  const [form, setForm] = useState<LeadForm>(initialForm);
  const [scanResult, setScanResult] = useState<ScanSummary | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const savedResult = localStorage.getItem('scanadmin:lastResult');
    const savedInput = localStorage.getItem('scanadmin:lastInput');

    if (savedResult) {
      setScanResult(JSON.parse(savedResult));
    }

    if (savedInput) {
      const input = JSON.parse(savedInput);
      if (input.sector) {
        setForm((current) => ({ ...current, sector: input.sector }));
      }
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

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, scanResult }),
      });

      if (!response.ok) {
        throw new Error('Lead submission failed');
      }

      localStorage.setItem('scanadmin:lastLead', JSON.stringify({ ...form, scanResult, createdAt: new Date().toISOString() }));
      router.push('/merci');
    } catch {
      setError('Impossible d’envoyer votre demande pour le moment. Réessayez dans quelques instants.');
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={submit} className="card" style={{ padding: 24 }}>
      {scanResult ? (
        <div style={{ background: '#e9fbf7', borderRadius: 18, padding: 18, marginBottom: 22 }}>
          <p style={{ marginTop: 0, color: '#0f766e', fontWeight: 700 }}>Votre scan sera joint à la demande</p>
          <p style={{ marginBottom: 0, color: '#102033' }}>
            {scanResult.totalMonthlyHours} h/mois estimées, {scanResult.monthlyCost?.toLocaleString('fr-FR')} € / mois, {scanResult.lowRecoverableHours} à {scanResult.highRecoverableHours} h/mois récupérables.
          </p>
        </div>
      ) : (
        <div style={{ background: '#fff7ed', borderRadius: 18, padding: 18, marginBottom: 22 }}>
          <p style={{ margin: 0, color: '#9a3412' }}>Aucun résultat de scan détecté. Vous pouvez quand même demander une analyse.</p>
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

      {error ? <p style={{ color: '#b91c1c', fontWeight: 700 }}>{error}</p> : null}

      <button className="button" style={{ marginTop: 24 }} type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Envoi en cours...' : 'Recevoir mon analyse personnalisée'}
      </button>
    </form>
  );
}
