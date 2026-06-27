import Link from 'next/link';

export const metadata = {
  title: 'Comparatif audit IA, outil IA et ScanAdmin',
  description: 'Comparer ScanAdmin, un audit IA classique et un simple outil IA pour PME.',
};

export default function ComparisonPage() {
  return (
    <main className="container page-section">
      <p style={{ color: '#0f766e', fontWeight: 800 }}>Comparatif</p>
      <h1 className="page-title">ScanAdmin, audit IA ou simple outil IA ?</h1>
      <p className="page-lead">Les trois approches ne répondent pas au même besoin. ScanAdmin se place au début : mesurer rapidement avant de décider.</p>

      <div className="grid grid-3" style={{ marginTop: 28 }}>
        <section className="card content-card">
          <h2>Simple outil IA</h2>
          <p>Utile pour produire du texte ou aider ponctuellement, mais ne dit pas quelles tâches coûtent réellement du temps.</p>
          <p><strong>Risque :</strong> utiliser l’IA au hasard.</p>
        </section>
        <section className="card content-card">
          <h2>Audit IA complet</h2>
          <p>Plus approfondi, mais souvent plus long, plus cher et parfois trop lourd pour une première décision PME.</p>
          <p><strong>Risque :</strong> démarrer trop gros.</p>
        </section>
        <section className="card content-card">
          <h2>ScanAdmin</h2>
          <p>Premier diagnostic rapide pour estimer le coût administratif et prioriser les agents IA supervisés à tester.</p>
          <p><strong>Objectif :</strong> décider plus simplement.</p>
        </section>
      </div>

      <section className="card content-card" style={{ marginTop: 28 }}>
        <h2>Quand choisir ScanAdmin ?</h2>
        <p>Quand vous voulez savoir si votre administratif répétitif coûte assez de temps pour justifier une analyse ou un premier agent IA supervisé.</p>
        <Link className="button" href="/scan">Commencer par le scan</Link>
      </section>
    </main>
  );
}
