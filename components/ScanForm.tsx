'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { calculateScan, ScanInput } from '../lib/calculations';

const initialInput: ScanInput = {
  sector: 'Services',
  employees: 5,
  hourlyCost: 30,
  emailsPerDay: 25,
  minutesPerEmail: 3,
  quotesPerWeek: 8,
  minutesPerQuote: 20,
  followUpsPerWeek: 15,
  minutesPerFollowUp: 5,
  invoiceHoursPerWeek: 2,
  documentHoursPerWeek: 3,
  clientFilesPerMonth: 10,
  minutesPerClientFile: 15,
  planningHoursPerWeek: 2,
  reportingHoursPerWeek: 1,
};

export function ScanForm() {
  const router = useRouter();
  const [input, setInput] = useState<ScanInput>(initialInput);

  function updateNumber(key: keyof ScanInput, value: string) {
    setInput((current) => ({ ...current, [key]: Number(value) || 0 }));
  }

  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const result = calculateScan(input);
    localStorage.setItem('scanadmin:lastInput', JSON.stringify(input));
    localStorage.setItem('scanadmin:lastResult', JSON.stringify(result));
    router.push('/result');
  }

  return (
    <form onSubmit={submit} className="card scan-form">
      <div className="scan-section">
        <h2>1. Votre entreprise</h2>
        <div className="grid grid-2">
          <label>Secteur<input className="input" value={input.sector} onChange={(e) => setInput({ ...input, sector: e.target.value })} /></label>
          <label>Coût horaire estimé (€)<input className="input" type="number" inputMode="decimal" value={input.hourlyCost} onChange={(e) => updateNumber('hourlyCost', e.target.value)} /></label>
        </div>
      </div>

      <div className="scan-section">
        <h2>2. Mails, devis et relances</h2>
        <div className="grid grid-2">
          <label>Mails importants / jour<input className="input" type="number" inputMode="numeric" value={input.emailsPerDay} onChange={(e) => updateNumber('emailsPerDay', e.target.value)} /></label>
          <label>Minutes par mail<input className="input" type="number" inputMode="numeric" value={input.minutesPerEmail} onChange={(e) => updateNumber('minutesPerEmail', e.target.value)} /></label>
          <label>Devis / semaine<input className="input" type="number" inputMode="numeric" value={input.quotesPerWeek} onChange={(e) => updateNumber('quotesPerWeek', e.target.value)} /></label>
          <label>Minutes par devis<input className="input" type="number" inputMode="numeric" value={input.minutesPerQuote} onChange={(e) => updateNumber('minutesPerQuote', e.target.value)} /></label>
          <label>Relances / semaine<input className="input" type="number" inputMode="numeric" value={input.followUpsPerWeek} onChange={(e) => updateNumber('followUpsPerWeek', e.target.value)} /></label>
          <label>Minutes par relance<input className="input" type="number" inputMode="numeric" value={input.minutesPerFollowUp} onChange={(e) => updateNumber('minutesPerFollowUp', e.target.value)} /></label>
        </div>
      </div>

      <div className="scan-section">
        <h2>3. Documents et dossiers</h2>
        <div className="grid grid-2">
          <label>Heures factures / semaine<input className="input" type="number" inputMode="decimal" value={input.invoiceHoursPerWeek} onChange={(e) => updateNumber('invoiceHoursPerWeek', e.target.value)} /></label>
          <label>Heures documents / semaine<input className="input" type="number" inputMode="decimal" value={input.documentHoursPerWeek} onChange={(e) => updateNumber('documentHoursPerWeek', e.target.value)} /></label>
          <label>Dossiers clients / mois<input className="input" type="number" inputMode="numeric" value={input.clientFilesPerMonth} onChange={(e) => updateNumber('clientFilesPerMonth', e.target.value)} /></label>
          <label>Minutes par dossier<input className="input" type="number" inputMode="numeric" value={input.minutesPerClientFile} onChange={(e) => updateNumber('minutesPerClientFile', e.target.value)} /></label>
        </div>
      </div>

      <div className="scan-section">
        <h2>4. Organisation</h2>
        <div className="grid grid-2">
          <label>Heures planning / semaine<input className="input" type="number" inputMode="decimal" value={input.planningHoursPerWeek} onChange={(e) => updateNumber('planningHoursPerWeek', e.target.value)} /></label>
          <label>Heures reporting / semaine<input className="input" type="number" inputMode="decimal" value={input.reportingHoursPerWeek} onChange={(e) => updateNumber('reportingHoursPerWeek', e.target.value)} /></label>
        </div>
      </div>

      <div className="scan-submit">
        <p>Vos données restent dans votre navigateur pour cette estimation.</p>
        <button className="button" type="submit">Voir mon résultat</button>
      </div>
    </form>
  );
}
