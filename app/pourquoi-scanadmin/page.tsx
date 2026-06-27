import Link from 'next/link';

export const metadata = {
  title: 'Pourquoi ScanAdmin | Mesurer avant d’automatiser',
  description: 'Pourquoi utiliser ScanAdmin avant de choisir un outil IA ou un agent IA administratif pour PME.',
};

export default function WhyPage() {
  return (
    <main className="container page-section">
      <p style={{ color: '#0f766e', fontWeight: 800 }}>Pourquoi ScanAdmin</p>
      <h1 className="page-title">Ne choisissez pas un agent IA avant d’avoir mesuré le problème</h1>
      <p className="page-lead">Un outil IA peut être inutile si la tâche ciblée n’est pas assez fréquente, pas assez coûteuse ou trop risquée à automatiser.</p>

      <div className="grid grid-3" style={{ marginTop: 28 }}>
        <section className="card content-card"><h2>1. Chiffrer</h2><p>ScanAdmin estime le temps administratif mensuel et le coût associé.</p></section>
        <section className="card content-card"><h2>2. Prioriser</h2><p>Le scan identifie les familles de tâches qui méritent une analyse plus sérieuse.</p></section>
        <section className="card content-card"><h2>3. Tester</h2><p>Un agent IA supervisé doit être testé sur une tâche prioritaire, vérifiable et utile.</p></section>
      </div>

      <section className="card content-card" style={{ marginTop: 28 }}>
        <h2>Ce que ScanAdmin évite</h2>
        <ul>
          <li>acheter un outil IA sans savoir quoi automatiser ;</li>
          <li>automatiser une tâche qui coûte peu de temps ;</li>
          <li>confier trop vite une décision sensible à l’IA ;</li>
          <li>confondre gain potentiel et gain réellement obtenu.</li>
        </ul>
        <Link className="button" href="/method">Voir la méthode</Link>
      </section>
    </main>
  );
}
