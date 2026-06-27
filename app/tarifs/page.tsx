import Link from 'next/link';

export const metadata = {
  title: 'Tarifs ScanAdmin | Scan administratif IA pour PME',
  description: 'Tarifs ScanAdmin : scan gratuit, analyse personnalisée à 200 € et mise en place d’agents IA supervisés pour PME.',
};

export default function Page() {
  return (
    <main className="container page-section">
      <p style={{ color: '#0f766e', fontWeight: 800 }}>Offres</p>
      <h1 className="page-title">Tarifs ScanAdmin</h1>
      <p className="page-lead">Le but n’est pas de vendre une IA tout de suite. Le but est d’abord de savoir si votre administratif répétitif coûte assez de temps pour justifier une analyse ou un premier agent IA supervisé.</p>

      <div className="grid grid-3" style={{ marginTop: 28 }}>
        <div className="card content-card">
          <h2>Scan gratuit</h2>
          <p>Estimation immédiate du temps administratif, du coût mensuel et du potentiel récupérable.</p>
          <strong style={{ fontSize: 28 }}>0 €</strong>
          <p><Link href="/scan" style={{ color: '#0f766e', fontWeight: 800 }}>Lancer le scan →</Link></p>
        </div>
        <div className="card content-card" style={{ border: '2px solid #0f766e' }}>
          <p style={{ color: '#0f766e', fontWeight: 800, marginTop: 0 }}>Offre de lancement</p>
          <h2>Analyse personnalisée</h2>
          <p>Diagnostic chiffré, matrice de priorités, top 3 actions, premier agent IA recommandé et plan de test.</p>
          <strong style={{ fontSize: 28 }}>200 €</strong>
          <p><Link href="/analyse-personnalisee" style={{ color: '#0f766e', fontWeight: 800 }}>Voir ce qui est inclus →</Link></p>
        </div>
        <div className="card content-card">
          <h2>Agent supervisé</h2>
          <p>Mise en place progressive d’un agent IA sur une tâche prioritaire, avec validation humaine et périmètre clair.</p>
          <strong style={{ fontSize: 28 }}>Sur devis</strong>
          <p><Link href="/catalogue" style={{ color: '#0f766e', fontWeight: 800 }}>Voir les agents →</Link></p>
        </div>
      </div>

      <section className="card content-card" style={{ marginTop: 28 }}>
        <h2>Pourquoi l’analyse personnalisée est l’étape la plus importante ?</h2>
        <p>Un scan gratuit donne une estimation. Mais avant de mettre en place un agent IA, il faut vérifier les volumes, comprendre les risques et choisir une seule tâche prioritaire.</p>
        <p>Les 200 € servent à transformer un résultat brut en décision claire : quoi traiter, pourquoi, avec quel agent, quelles limites et quel plan de test.</p>
        <Link className="button" href="/analyse-personnalisee">Voir l’analyse personnalisée</Link>
      </section>
    </main>
  );
}
