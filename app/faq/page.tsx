import Link from 'next/link';

const faqs = [
  ['ScanAdmin remplace-t-il un audit complet ?', 'Non. ScanAdmin donne une première estimation pour prioriser les tâches administratives à analyser.'],
  ['Les gains sont-ils garantis ?', 'Non. Les résultats sont indicatifs. Un gain réel dépend de l’organisation, des outils existants et de la qualité des données.'],
  ['Les agents IA sont-ils autonomes ?', 'Ils sont supervisés. L’IA prépare le travail, mais l’humain garde la validation finale.'],
  ['Combien de temps dure le scan ?', 'Le scan prend quelques minutes si vous connaissez approximativement vos volumes administratifs.'],
  ['Pour qui est fait ScanAdmin ?', 'Pour les PME, indépendants structurés et petites équipes qui veulent mesurer leur charge administrative avant d’automatiser.'],
  ['Quelles tâches sont analysées ?', 'Mails, devis, relances, factures, documents, dossiers clients, planning et reporting.'],
];

export const metadata = {
  title: 'FAQ ScanAdmin | Questions fréquentes',
  description: 'Questions fréquentes sur ScanAdmin, le scan IA administratif pour PME.',
};

export default function FaqPage() {
  return (
    <main className="container page-section">
      <p style={{ color: '#0f766e', fontWeight: 800 }}>FAQ</p>
      <h1 className="page-title">Questions fréquentes</h1>
      <p className="page-lead">Les réponses essentielles pour comprendre le rôle de ScanAdmin, ses limites et l’usage des agents IA supervisés.</p>
      <div className="grid" style={{ marginTop: 28 }}>
        {faqs.map(([q, a]) => (
          <section key={q} className="card content-card">
            <h2>{q}</h2>
            <p>{a}</p>
          </section>
        ))}
      </div>
      <section className="card content-card" style={{ marginTop: 28 }}>
        <h2>Commencer</h2>
        <p>La meilleure façon de savoir si ScanAdmin est utile pour votre entreprise est de lancer le scan gratuit.</p>
        <Link className="button" href="/scan">Lancer mon scan gratuit</Link>
      </section>
    </main>
  );
}
