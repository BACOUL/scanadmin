import Link from 'next/link';

const deliverables = [
  ['Diagnostic chiffré', 'Relecture du résultat ScanAdmin, estimation du temps mensuel, du coût mensuel et du coût annuel.'],
  ['Matrice des priorités', 'Classement des tâches selon volume, coût, répétition, risque et facilité de vérification.'],
  ['Top 3 actions', 'Les trois tâches à traiter en premier avec une justification claire et exploitable.'],
  ['Agent IA recommandé', 'Le premier agent IA supervisé à tester, son rôle, ses limites et son mode de validation humaine.'],
  ['Plan de mise en place', 'Un plan simple sur 7 à 14 jours pour tester sans perturber l’organisation.'],
  ['Synthèse dirigeant', 'Une conclusion courte : quoi faire, quoi éviter, et combien le problème coûte probablement.'],
];

const notIncluded = [
  'Pas de promesse de gain garanti.',
  'Pas de déploiement technique complet inclus.',
  'Pas de décision automatique confiée à l’IA.',
  'Pas d’accès à vos données internes sans votre accord.',
];

export const metadata = {
  title: 'Analyse personnalisée ScanAdmin à 200 € | Diagnostic IA administratif PME',
  description: 'Ce que contient l’analyse personnalisée ScanAdmin : diagnostic chiffré, priorités, agent IA recommandé et plan d’action pour PME.',
};

export default function AnalysePersonnaliseePage() {
  return (
    <main className="container page-section">
      <p style={{ color: '#0f766e', fontWeight: 800 }}>Analyse personnalisée</p>
      <h1 className="page-title">Transformez votre scan en plan d’action concret</h1>
      <p className="page-lead">Le scan gratuit donne une première estimation. L’analyse personnalisée à 200 € sert à vérifier les chiffres, classer les priorités et définir le premier agent IA supervisé à tester.</p>

      <section className="card content-card" style={{ marginTop: 28, background: '#102033', color: '#fff' }}>
        <p style={{ color: '#5eead4', fontWeight: 800, marginTop: 0 }}>Offre de lancement</p>
        <h2 style={{ color: '#fff', fontSize: 38, marginBottom: 8 }}>200 €</h2>
        <p style={{ color: '#d8e3ee', fontSize: 18, lineHeight: 1.65 }}>Une analyse claire, lisible et orientée décision pour savoir si votre administratif répétitif mérite un agent IA supervisé.</p>
        <Link className="button" href="/analyse">Demander mon analyse</Link>
      </section>

      <section className="page-section">
        <p style={{ color: '#0f766e', fontWeight: 800 }}>Ce que vous recevez</p>
        <h2 className="home-section-title">Un livrable utile pour décider, pas un simple résumé automatique</h2>
        <div className="grid grid-3" style={{ marginTop: 24 }}>
          {deliverables.map(([title, text]) => (
            <div key={title} className="card content-card">
              <h2>{title}</h2>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="card content-card">
        <h2>Pourquoi cela vaut 200 € ?</h2>
        <p>Parce que le problème n’est pas de trouver une IA. Le vrai problème est de savoir quelle tâche automatiser en premier sans perdre du temps, de l’argent ou du contrôle.</p>
        <p>Une mauvaise automatisation peut coûter plus cher que la tâche elle-même : mauvais outil, mauvais processus, trop de risques, trop peu de volume. L’analyse sert à éviter cette erreur.</p>
        <div className="grid grid-3" style={{ marginTop: 22 }}>
          <div><strong>Éviter</strong><p style={{ color: '#5d6b7a' }}>un outil IA inutile ou mal ciblé.</p></div>
          <div><strong>Prioriser</strong><p style={{ color: '#5d6b7a' }}>la tâche qui coûte vraiment du temps.</p></div>
          <div><strong>Décider</strong><p style={{ color: '#5d6b7a' }}>avec une méthode claire et prudente.</p></div>
        </div>
      </section>

      <section className="page-section">
        <div className="grid grid-2">
          <div className="card content-card">
            <h2>Pour qui c’est fait ?</h2>
            <ul>
              <li>PME avec tâches administratives répétitives ;</li>
              <li>dirigeant qui veut utiliser l’IA sans acheter un outil au hasard ;</li>
              <li>entreprise qui veut commencer par un premier cas d’usage simple ;</li>
              <li>équipe qui veut garder une validation humaine.</li>
            </ul>
          </div>
          <div className="card content-card">
            <h2>Ce qui n’est pas inclus</h2>
            <ul>
              {notIncluded.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <section className="card content-card">
        <h2>La méthode d’analyse</h2>
        <p>L’analyse reprend les résultats du scan, vérifie la cohérence des volumes, compare les tâches entre elles, puis sélectionne les priorités selon cinq critères : coût, fréquence, répétition, risque et facilité de contrôle.</p>
        <p>La recommandation finale ne dit pas seulement “utilisez l’IA”. Elle précise quelle tâche tester, quel agent utiliser, ce qu’il doit préparer, ce qu’il ne doit pas faire et où l’humain doit valider.</p>
      </section>

      <section className="card content-card" style={{ marginTop: 28, textAlign: 'center' }}>
        <h2 className="home-section-title" style={{ marginTop: 0 }}>Vous avez déjà fait le scan ?</h2>
        <p className="page-lead" style={{ margin: '0 auto 22px' }}>Passez à l’étape utile : transformer le résultat en décision claire.</p>
        <Link className="button" href="/analyse">Demander mon analyse personnalisée</Link>
      </section>
    </main>
  );
}
