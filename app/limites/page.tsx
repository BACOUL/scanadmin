import Link from 'next/link';

export const metadata = {
  title: 'Limites de ScanAdmin | Résultats indicatifs',
  description: 'Comprendre les limites de ScanAdmin : estimations, absence de garantie de gain et nécessité d’une analyse personnalisée.',
};

export default function LimitsPage() {
  return (
    <main className="container page-section">
      <p style={{ color: '#0f766e', fontWeight: 800 }}>Limites</p>
      <h1 className="page-title">Ce que ScanAdmin ne promet pas</h1>
      <p className="page-lead">Un site premium doit être clair sur ses limites. ScanAdmin donne une estimation utile, mais ne remplace pas une analyse terrain complète.</p>

      <div className="grid grid-2" style={{ marginTop: 28 }}>
        <section className="card content-card">
          <h2>Pas une garantie de gain</h2>
          <p>Le temps récupérable affiché est une fourchette indicative. Le gain réel dépend de l’organisation, des outils, des données et de la qualité du processus.</p>
          <h2>Pas une décision automatique</h2>
          <p>ScanAdmin ne décide pas à la place du dirigeant. Il aide à prioriser les tâches à vérifier.</p>
        </section>
        <section className="card content-card">
          <h2>Pas un audit complet</h2>
          <p>Le scan est un premier diagnostic. Une analyse personnalisée reste nécessaire pour confirmer les hypothèses et définir une mise en place fiable.</p>
          <h2>Pas une automatisation totale</h2>
          <p>Les agents IA proposés doivent rester supervisés. L’humain garde la validation finale.</p>
        </section>
      </div>

      <section className="card content-card" style={{ marginTop: 28 }}>
        <h2>Pourquoi afficher ces limites ?</h2>
        <p>Parce que la confiance se construit avec une promesse réaliste. ScanAdmin préfère une recommandation prudente à une promesse commerciale exagérée.</p>
        <Link className="button" href="/scan">Lancer mon scan gratuit</Link>
      </section>
    </main>
  );
}
