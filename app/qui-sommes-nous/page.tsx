import Link from 'next/link';

const beliefs = [
  ['Mesurer avant de vendre', 'Une PME doit comprendre où part son temps administratif avant d’acheter un outil ou un agent IA.'],
  ['Commencer petit', 'Le premier test doit être simple, vérifiable et limité à une tâche précise.'],
  ['Garder l’humain au centre', 'L’IA peut préparer, classer, résumer ou proposer, mais la validation finale doit rester humaine.'],
  ['Assumer les limites', 'Un diagnostic sérieux ne promet pas un gain garanti. Il aide à décider plus intelligemment.'],
];

const values = [
  ['Clarté', 'Des résultats compréhensibles par un dirigeant, sans jargon technique inutile.'],
  ['Prudence', 'Pas d’automatisation sensible sans validation, ni de promesse de retour sur investissement automatique.'],
  ['Utilité', 'Chaque recommandation doit être reliée à une tâche réelle, fréquente et coûteuse.'],
  ['Progression', 'Scan gratuit, analyse personnalisée, puis mise en place seulement si le potentiel est confirmé.'],
];

const roadmap = [
  ['Aujourd’hui', 'Aider les PME à mesurer leur administratif répétitif avec un scan simple et lisible.'],
  ['Étape suivante', 'Transformer les résultats en analyses personnalisées plus précises et actionnables.'],
  ['Ensuite', 'Cadrer des agents IA supervisés sur les tâches prioritaires : devis, relances, documents, mails ou reporting.'],
];

const not = [
  ['Pas un outil magique', 'ScanAdmin ne promet pas d’automatiser toute l’entreprise en quelques clics.'],
  ['Pas un cabinet traditionnel', 'Le but n’est pas de produire un audit lourd, mais de donner une première décision claire.'],
  ['Pas une IA autonome', 'La logique reste supervisée : l’IA prépare et l’humain valide.'],
];

export const metadata = {
  title: 'Qui sommes-nous | ScanAdmin, diagnostic IA administratif pour PME',
  description: 'Découvrez ScanAdmin : un projet conçu pour aider les PME à mesurer leurs tâches administratives, prioriser les cas d’usage IA et tester des agents IA supervisés.',
};

export default function AboutPage() {
  return (
    <main>
      <section className="premium-hero">
        <div className="container hero-shell">
          <div className="hero-copy">
            <p className="badge">À propos de ScanAdmin</p>
            <h1>Un projet construit pour aider les PME à utiliser l’IA avec méthode.</h1>
            <p className="hero-subtitle">ScanAdmin part d’un constat simple : les PME n’ont pas besoin d’un discours magique sur l’IA. Elles ont besoin de savoir quelles tâches administratives leur coûtent vraiment du temps, et lesquelles méritent un test supervisé.</p>
            <div className="hero-actions">
              <Link className="button" href="/scan">Lancer le scan gratuit</Link>
              <Link className="ghost-button" href="/pourquoi-scanadmin">Pourquoi ScanAdmin</Link>
            </div>
            <p className="hero-note">Notre position : l’IA prépare, l’humain valide, la décision reste maîtrisée.</p>
          </div>

          <div className="report-preview">
            <div className="report-topline"><span>Vision</span><strong>PME + IA</strong></div>
            <div className="report-metric-main"><span>Mission</span><strong style={{ fontSize: 34 }}>Rendre l’IA administrative mesurable</strong></div>
            <div className="metric-grid">
              <div><span>Départ</span><strong>Temps</strong></div>
              <div><span>Décision</span><strong>Priorité</strong></div>
            </div>
            <div className="priority-list">
              <p>Principes</p>
              <span>Mesurer d’abord</span>
              <span>Tester prudemment</span>
              <span>Valider humainement</span>
            </div>
          </div>
        </div>
      </section>

      <section className="container premium-section split-section">
        <div>
          <p className="section-kicker">Notre constat</p>
          <h2>Les PME entendent parler d’IA partout, mais manquent souvent d’un point de départ concret.</h2>
        </div>
        <div className="text-stack">
          <p>Beaucoup de dirigeants savent que certaines tâches administratives leur prennent trop de temps : mails, devis, relances, documents, factures, dossiers clients, planning ou reporting.</p>
          <p>Le problème n’est pas seulement de trouver un outil IA. Le vrai sujet est de choisir la bonne tâche à traiter en premier, avec un risque maîtrisé et un résultat facilement vérifiable.</p>
          <p>ScanAdmin a été construit comme un point d’entrée simple : mesurer, prioriser, puis décider si une analyse ou un agent IA supervisé mérite d’être envisagé.</p>
        </div>
      </section>

      <section className="container premium-section">
        <div className="section-heading">
          <p className="section-kicker">Nos convictions</p>
          <h2>Ce que nous défendons.</h2>
        </div>
        <div className="comparison-grid">
          {beliefs.map(([title, text]) => (
            <div key={title} className="comparison-card muted-card">
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container premium-section split-section reversed">
        <div className="deliverable-preview">
          <div className="deliverable-header"><span>Rôle de ScanAdmin</span><strong>Point d’entrée</strong></div>
          <div className="deliverable-row"><strong>1. Scan</strong><span>estimer la charge administrative répétitive</span></div>
          <div className="deliverable-row"><strong>2. Analyse</strong><span>prioriser les tâches et clarifier les risques</span></div>
          <div className="deliverable-row"><strong>3. Agent</strong><span>tester seulement si le cas d’usage est solide</span></div>
        </div>
        <div>
          <p className="section-kicker">Notre approche</p>
          <h2>Nous ne partons pas de l’outil, mais du temps perdu.</h2>
          <p className="section-text">Un outil IA n’a de valeur que s’il traite une tâche réelle, fréquente, coûteuse et contrôlable. C’est pourquoi ScanAdmin commence par le diagnostic plutôt que par la mise en place.</p>
          <p className="section-text">Cette approche permet aux PME d’avancer sans se faire vendre une solution trop large, trop chère ou trop risquée.</p>
        </div>
      </section>

      <section className="container premium-section">
        <div className="section-heading">
          <p className="section-kicker">Nos valeurs</p>
          <h2>Un service utile doit être clair, prudent et actionnable.</h2>
        </div>
        <div className="comparison-grid">
          {values.map(([title, text]) => (
            <div key={title} className="comparison-card muted-card">
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container premium-section split-section">
        <div>
          <p className="section-kicker">Ce que nous ne sommes pas</p>
          <h2>La crédibilité vient aussi des limites assumées.</h2>
        </div>
        <div className="deliverable-preview">
          <div className="deliverable-header"><span>Limites</span><strong>Transparence</strong></div>
          {not.map(([title, text]) => (
            <div key={title} className="deliverable-row">
              <strong>{title}</strong>
              <span>{text}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="container premium-section">
        <div className="section-heading">
          <p className="section-kicker">Évolution</p>
          <h2>ScanAdmin avance par étapes.</h2>
          <p>Le projet est construit pour devenir un parcours complet : scan, analyse, puis agents IA supervisés sur les tâches les plus pertinentes.</p>
        </div>
        <div className="process-grid">
          {roadmap.map(([title, text], index) => (
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
          <p className="section-kicker">Positionnement</p>
          <h2>ScanAdmin veut rester simple à comprendre.</h2>
        </div>
        <div className="comparison-grid">
          <div className="comparison-card muted-card"><h3>Pour le dirigeant</h3><p>Comprendre combien coûtent les tâches administratives répétitives et où commencer.</p></div>
          <div className="comparison-card highlight-card"><h3>Pour la PME</h3><p>Éviter les décisions IA hasardeuses et concentrer l’effort sur un premier cas utile.</p></div>
          <div className="comparison-card muted-card"><h3>Pour l’équipe</h3><p>Utiliser l’IA comme une aide supervisée, pas comme un remplacement brutal.</p></div>
        </div>
      </section>

      <section className="container premium-final-cta">
        <p className="section-kicker">Découvrir concrètement</p>
        <h2>Le plus simple est de commencer par mesurer.</h2>
        <p>Le scan gratuit vous donne une première lecture de votre charge administrative et des cas d’usage IA potentiels.</p>
        <div className="hero-actions center-actions">
          <Link className="button" href="/scan">Lancer mon scan gratuit</Link>
          <Link className="ghost-button" href="/method">Voir la méthode</Link>
        </div>
      </section>
    </main>
  );
}
