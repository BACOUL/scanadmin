import Link from 'next/link';

export const metadata = {
  title: 'Tarifs ScanAdmin | Scan administratif IA pour PME',
  description: 'Tarifs ScanAdmin : scan gratuit, analyse personnalisée et mise en place d’agents IA supervisés pour PME.',
};

export default function Page() {
  return (
    <main className="container page-section">
      <p style={{ color: '#0f766e', fontWeight: 800 }}>Offres</p>
      <h1 className="page-title">Tarifs ScanAdmin</h1>
      <p className="page-lead">Commencez gratuitement avec le scan. Passez ensuite à une analyse personnalisée uniquement si le potentiel administratif paraît réel.</p>

      <div className="grid grid-3" style={{ marginTop: 28 }}>
        <div className="card content-card">
          <h2>Scan gratuit</h2>
          <p>Estimation immédiate du temps administratif, du coût mensuel et du potentiel récupérable.</p>
          <strong>0 €</strong>
        </div>
        <div className="card content-card">
          <h2>Analyse personnalisée</h2>
          <p>Vérification des réponses, priorisation des tâches et recommandation du premier agent IA à tester.</p>
          <strong>290 à 490 €</strong>
        </div>
        <div className="card content-card">
          <h2>Agent supervisé</h2>
          <p>Mise en place progressive d’un agent IA sur une tâche prioritaire, avec validation humaine.</p>
          <strong>Sur devis</strong>
        </div>
      </div>

      <section className="card content-card" style={{ marginTop: 28 }}>
        <h2>Pourquoi ne pas vendre directement un agent IA ?</h2>
        <p>Parce qu’un agent IA n’est rentable que si la tâche est fréquente, coûteuse, répétitive et vérifiable. ScanAdmin commence donc par mesurer le problème avant de proposer une solution.</p>
        <Link className="button" href="/scan">Lancer mon scan gratuit</Link>
      </section>
    </main>
  );
}
