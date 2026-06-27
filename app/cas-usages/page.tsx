import Link from 'next/link';

const cases = [
  ['Mails entrants', 'Résumer, classer et préparer des réponses aux demandes répétitives.'],
  ['Devis simples', 'Structurer une demande et préparer un brouillon de devis à valider.'],
  ['Relances', 'Préparer des relances clients, documents manquants ou retours en attente.'],
  ['Documents', 'Classer, résumer et retrouver les informations utiles.'],
  ['Reporting', 'Préparer une synthèse simple à partir des données disponibles.'],
  ['Dossiers clients', 'Suivre les pièces, demandes et informations à compléter.'],
];

export const metadata = {
  title: 'Cas d’usage IA administrative | ScanAdmin',
  description: 'Cas d’usage concrets d’agents IA administratifs supervisés pour PME.',
};

export default function UseCasesPage() {
  return (
    <main className="container page-section">
      <p style={{ color: '#0f766e', fontWeight: 800 }}>Cas d’usage</p>
      <h1 className="page-title">Ce que des agents IA administratifs peuvent préparer</h1>
      <p className="page-lead">Les meilleurs cas d’usage sont répétitifs, fréquents et vérifiables. ScanAdmin aide à repérer ceux qui méritent d’être testés en premier.</p>

      <div className="grid grid-3" style={{ marginTop: 28 }}>
        {cases.map(([title, text]) => (
          <section key={title} className="card content-card">
            <h2>{title}</h2>
            <p>{text}</p>
          </section>
        ))}
      </div>

      <section className="card content-card" style={{ marginTop: 28 }}>
        <h2>Le bon critère</h2>
        <p>Un cas d’usage est intéressant si le temps mensuel perdu est suffisant, si le résultat peut être vérifié facilement et si l’humain garde la décision finale.</p>
        <Link className="button" href="/scan">Identifier mes cas d’usage</Link>
      </section>
    </main>
  );
}
