import Link from 'next/link';

const limits = [
  ['Pas de gain garanti', 'Le scan estime un potentiel. Le gain réel dépend de l’organisation, des outils utilisés, de la qualité des données et du temps de validation humaine.'],
  ['Pas d’automatisation totale', 'ScanAdmin ne recommande pas de confier toute l’administration à l’IA. Les agents doivent rester limités, testés et supervisés.'],
  ['Pas de remplacement humain', 'L’IA peut préparer ou structurer le travail, mais elle ne remplace pas la responsabilité du dirigeant ou de l’équipe.'],
  ['Pas d’audit complet', 'Le scan est un diagnostic de première intention. Il ne remplace pas un audit organisationnel, juridique, comptable ou technique complet.'],
  ['Pas de décision sensible automatique', 'Prix, paiement, facture, conformité, contrat ou engagement client doivent rester validés par une personne compétente.'],
  ['Pas de résultat fiable avec des données incohérentes', 'Si les volumes, temps ou tâches déclarés sont trop approximatifs, le résultat doit être lu comme une hypothèse à vérifier.'],
];

const whyUseful = [
  ['Rassurer', 'Une promesse réaliste inspire plus confiance qu’une promesse trop large.'],
  ['Prioriser', 'Les limites aident à choisir les cas d’usage les plus simples et les plus vérifiables.'],
  ['Éviter les erreurs', 'Elles empêchent de lancer une IA sur une tâche trop sensible ou mal cadrée.'],
  ['Décider mieux', 'Elles rappellent que le scan aide à décider, mais ne remplace pas le jugement humain.'],
];

const examples = [
  ['Relances simples', 'Risque limité, contrôle facile', 'Bon premier test si le volume est suffisant.'],
  ['Devis', 'Risque commercial', 'L’IA peut préparer, mais le prix et les conditions doivent être validés.'],
  ['Factures', 'Risque financier', 'À traiter avec prudence, sans validation ou paiement automatique.'],
  ['Documents', 'Risque variable', 'Classement ou résumé possible, mais conformité à vérifier humainement.'],
];

const readResults = [
  ['Temps estimé', 'Ordre de grandeur basé sur les informations déclarées.'],
  ['Coût estimé', 'Approximation utile pour prioriser, pas une donnée comptable officielle.'],
  ['Potentiel récupérable', 'Hypothèse de travail à tester, pas une promesse de gain.'],
  ['Agent recommandé', 'Piste de test supervisé, pas une obligation de déploiement.'],
];

export const metadata = {
  title: 'Limites ScanAdmin | Résultats indicatifs et IA supervisée',
  description: 'Comprendre les limites de ScanAdmin : estimations indicatives, absence de garantie de gain, agents IA supervisés, validation humaine et besoin d’analyse.',
};

export default function LimitsPage() {
  return (
    <main>
      <section className="premium-hero">
        <div className="container hero-shell">
          <div className="hero-copy">
            <p className="badge">Limites ScanAdmin</p>
            <h1>Un bon diagnostic IA doit aussi dire ce qu’il ne peut pas promettre.</h1>
            <p className="hero-subtitle">ScanAdmin aide à mesurer, prioriser et préparer un premier test IA. Il ne garantit pas un gain, ne remplace pas un audit complet et ne recommande pas d’automatisation sans validation humaine.</p>
            <div className="hero-actions">
              <Link className="button" href="/scan">Lancer le scan gratuit</Link>
              <Link className="ghost-button" href="/securite">Voir la sécurité</Link>
            </div>
            <p className="hero-note">Les résultats doivent être lus comme des estimations utiles pour décider, pas comme des certitudes.</p>
          </div>

          <div className="report-preview">
            <div className="report-topline"><span>Promesse réaliste</span><strong>Confiance</strong></div>
            <div className="report-metric-main"><span>Principe</span><strong style={{ fontSize: 34 }}>Estimer, pas garantir</strong></div>
            <div className="metric-grid">
              <div><span>Gain</span><strong>À tester</strong></div>
              <div><span>IA</span><strong>Supervisée</strong></div>
            </div>
            <div className="priority-list">
              <p>Limites clés</p>
              <span>Pas de ROI garanti</span>
              <span>Pas d’audit complet</span>
              <span>Pas de décision seule</span>
            </div>
          </div>
        </div>
      </section>

      <section className="container premium-section split-section">
        <div>
          <p className="section-kicker">Pourquoi cette page existe</p>
          <h2>La confiance se construit avec des limites claires.</h2>
        </div>
        <div className="text-stack">
          <p>Un site IA peut perdre en crédibilité s’il promet trop : gains automatiques, remplacement humain, déploiement immédiat ou retour sur investissement garanti.</p>
          <p>ScanAdmin prend l’approche inverse : le scan donne une estimation, l’analyse confirme les priorités et l’agent IA reste supervisé.</p>
          <p>Cette prudence n’affaiblit pas le projet. Elle le rend plus sérieux pour une PME qui veut avancer sans prendre de risque inutile.</p>
        </div>
      </section>

      <section className="container premium-section">
        <div className="section-heading">
          <p className="section-kicker">Limites principales</p>
          <h2>Ce que ScanAdmin ne promet pas.</h2>
        </div>
        <div className="comparison-grid">
          {limits.map(([title, text]) => (
            <div key={title} className="comparison-card muted-card">
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container premium-section split-section reversed">
        <div className="deliverable-preview">
          <div className="deliverable-header"><span>Lecture du résultat</span><strong>Indicatif</strong></div>
          {readResults.map(([title, text]) => (
            <div key={title} className="deliverable-row">
              <strong>{title}</strong>
              <span>{text}</span>
            </div>
          ))}
        </div>
        <div>
          <p className="section-kicker">Résultat du scan</p>
          <h2>Un résultat ScanAdmin est une base de décision, pas une preuve définitive.</h2>
          <p className="section-text">Le scan sert à rendre visible une charge administrative souvent sous-estimée. Il aide à savoir si une analyse personnalisée mérite d’être demandée.</p>
          <p className="section-text">La décision finale doit tenir compte du contexte réel : organisation, outils, qualité des données, contraintes métier et niveau de risque.</p>
        </div>
      </section>

      <section className="container premium-section">
        <div className="section-heading">
          <p className="section-kicker">Cas concrets</p>
          <h2>Les limites changent selon la tâche.</h2>
        </div>
        <div className="card content-card" style={{ overflowX: 'auto' }}>
          <table className="premium-table">
            <thead><tr><th>Tâche</th><th>Point de vigilance</th><th>Lecture ScanAdmin</th></tr></thead>
            <tbody>
              {examples.map(([task, warning, reading]) => (
                <tr key={task}><td>{task}</td><td>{warning}</td><td>{reading}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="container premium-section">
        <div className="section-heading">
          <p className="section-kicker">Pourquoi ces limites sont utiles</p>
          <h2>Elles protègent la décision.</h2>
        </div>
        <div className="process-grid">
          {whyUseful.map(([title, text], index) => (
            <div key={title} className="process-card">
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container premium-section comparison-section">
        <div className="section-heading">
          <p className="section-kicker">Promesse réelle</p>
          <h2>Ce que ScanAdmin promet vraiment.</h2>
        </div>
        <div className="comparison-grid">
          <div className="comparison-card muted-card"><h3>Rendre visible</h3><p>Donner une première lecture du temps administratif et du coût associé.</p></div>
          <div className="comparison-card highlight-card"><h3>Aider à prioriser</h3><p>Identifier les tâches qui méritent une analyse plus sérieuse et un test supervisé.</p></div>
          <div className="comparison-card muted-card"><h3>Réduire le risque</h3><p>Éviter de choisir un outil IA ou un agent avant d’avoir mesuré le besoin réel.</p></div>
        </div>
      </section>

      <section className="container premium-section split-section">
        <div>
          <p className="section-kicker">Suite logique</p>
          <h2>L’analyse personnalisée sert à confirmer ou corriger les hypothèses du scan.</h2>
        </div>
        <div className="card content-card">
          <h2>Pourquoi demander une analyse ?</h2>
          <p>Parce qu’un résultat automatique ne suffit pas toujours à décider. L’analyse reprend les chiffres, compare les tâches, identifie les risques et propose un plan de test réaliste.</p>
          <Link className="button" href="/analyse-personnalisee">Voir l’analyse personnalisée</Link>
        </div>
      </section>

      <section className="container premium-final-cta">
        <p className="section-kicker">Commencer avec prudence</p>
        <h2>Le scan donne une estimation. La décision reste humaine.</h2>
        <p>C’est exactement cette logique qui permet d’utiliser l’IA administrative sans la transformer en promesse excessive.</p>
        <div className="hero-actions center-actions">
          <Link className="button" href="/scan">Lancer mon scan gratuit</Link>
          <Link className="ghost-button" href="/method">Voir la méthode</Link>
        </div>
      </section>
    </main>
  );
}
