import Link from 'next/link';

const options = [
  ['Outil IA générique', 'Produire du texte, résumer, aider ponctuellement', 'Ne dit pas quelle tâche administrative coûte vraiment du temps', 'Quand le besoin est déjà très clair'],
  ['Agent IA autonome', 'Automatiser une action ou une chaîne de tâches', 'Risque de déléguer trop vite une décision sensible', 'Quand le processus est stable, documenté et contrôlable'],
  ['Automatisation no-code', 'Connecter des outils et déclencher des actions', 'Peut automatiser un mauvais processus si le problème est mal mesuré', 'Quand les étapes sont déjà bien définies'],
  ['Consultant classique', 'Analyser l’organisation de manière large', 'Peut être plus long, plus coûteux et moins orienté premier test IA', 'Quand l’entreprise veut une transformation complète'],
  ['Audit IA complet', 'Cartographier les usages, données, outils et risques', 'Souvent trop lourd pour une première décision PME', 'Quand l’entreprise a déjà un budget et un projet IA structuré'],
  ['ScanAdmin', 'Mesurer la charge administrative et prioriser le premier agent IA supervisé', 'Ne remplace pas un audit complet ou un déploiement technique', 'Quand il faut décider par où commencer'],
];

const scanadminAdvantages = [
  ['Point d’entrée', 'ScanAdmin intervient avant le choix d’un outil, d’un agent ou d’une automatisation.'],
  ['Mesure concrète', 'Le scan traduit les tâches administratives en temps, coût et priorité.'],
  ['IA-first mais prudente', 'La logique vise les agents IA, mais avec validation humaine et limites claires.'],
  ['Décision rapide', 'Une PME peut obtenir une première lecture sans lancer un audit lourd.'],
  ['Orientation action', 'L’analyse personnalisée transforme le résultat en premier plan de test.'],
  ['Pas de promesse excessive', 'ScanAdmin assume que le gain réel doit être testé et mesuré.'],
];

const useCases = [
  ['Vous ne savez pas quoi automatiser', 'ScanAdmin', 'Mesurer les tâches avant de choisir un agent.'],
  ['Vous avez déjà choisi un outil', 'Outil IA ou intégrateur', 'ScanAdmin peut rester utile pour prioriser les tâches, mais l’outil est déjà identifié.'],
  ['Vous voulez transformer toute l’organisation', 'Audit complet ou cabinet conseil', 'ScanAdmin peut servir d’entrée, mais ne remplace pas un accompagnement global.'],
  ['Vous avez une tâche répétitive précise', 'ScanAdmin puis test agent IA', 'Le scan vérifie si le volume justifie l’effort.'],
  ['Vous voulez connecter plusieurs logiciels', 'No-code ou intégration', 'À faire seulement si le processus est clair et stable.'],
];

const decisionPath = [
  ['01', 'Mesurer', 'Combien de temps part dans les tâches administratives répétitives ?'],
  ['02', 'Prioriser', 'Quelle tâche est assez fréquente, coûteuse et vérifiable ?'],
  ['03', 'Choisir', 'Quel agent IA supervisé peut préparer le travail ?'],
  ['04', 'Tester', 'Le gain est-il réel après validation humaine ?'],
];

const comparisonCriteria = [
  ['Rapidité de première décision', 'Forte', 'Variable', 'Variable', 'Moyenne à faible'],
  ['Mesure du coût administratif', 'Cœur du produit', 'Rarement incluse', 'Non incluse', 'Possible mais plus lourd'],
  ['Choix du premier agent IA', 'Priorité', 'À la charge de l’utilisateur', 'Possible si déjà cadré', 'Possible mais plus large'],
  ['Risque de sur-automatisation', 'Réduit par la méthode', 'Possible', 'Élevé si mal cadré', 'Réduit mais plus coûteux'],
  ['Adapté PME au départ', 'Oui', 'Oui si besoin simple', 'Oui si processus clair', 'Oui si budget suffisant'],
];

export const metadata = {
  title: 'Comparatif ScanAdmin | Audit IA, outil IA, agent IA ou automatisation',
  description: 'Comparer ScanAdmin avec les outils IA génériques, agents IA autonomes, automatisations no-code, consultants et audits IA complets pour PME.',
};

export default function ComparisonPage() {
  return (
    <main>
      <section className="premium-hero">
        <div className="container hero-shell">
          <div className="hero-copy">
            <p className="badge">Comparatif IA PME</p>
            <h1>ScanAdmin, outil IA, agent autonome ou audit IA : quelle approche choisir ?</h1>
            <p className="hero-subtitle">ScanAdmin se place avant le choix de l’outil. Son rôle est de mesurer vos tâches administratives, prioriser les cas d’usage et identifier le premier agent IA supervisé à tester.</p>
            <div className="hero-actions">
              <Link className="button" href="/scan">Commencer par le scan</Link>
              <Link className="ghost-button" href="/method">Voir la méthode</Link>
            </div>
            <p className="hero-note">Positionnement : IA-first, mais mesurée, progressive et supervisée.</p>
          </div>

          <div className="report-preview">
            <div className="report-topline"><span>Comparatif</span><strong>Avant décision</strong></div>
            <div className="report-metric-main"><span>Question</span><strong style={{ fontSize: 34 }}>Par où commencer ?</strong></div>
            <div className="metric-grid">
              <div><span>Scan</span><strong>Diagnostic</strong></div>
              <div><span>Agent</span><strong>Après mesure</strong></div>
            </div>
            <div className="priority-list">
              <p>Alternatives comparées</p>
              <span>Outils IA</span>
              <span>Agents autonomes</span>
              <span>Audits IA</span>
            </div>
          </div>
        </div>
      </section>

      <section className="container premium-section split-section">
        <div>
          <p className="section-kicker">Positionnement</p>
          <h2>ScanAdmin ne remplace pas tous les outils IA. Il aide à choisir le bon point de départ.</h2>
        </div>
        <div className="text-stack">
          <p>Une PME peut utiliser un outil IA, acheter un agent, lancer une automatisation no-code ou faire appel à un consultant. Mais si elle ne sait pas quelle tâche administrative lui coûte vraiment du temps, le risque est de commencer au mauvais endroit.</p>
          <p>ScanAdmin répond à ce problème précis : mesurer la charge administrative, estimer le coût, prioriser les tâches et cadrer le premier test IA supervisé.</p>
          <p>C’est donc un point d’entrée IA-first, pas une promesse d’automatisation totale.</p>
        </div>
      </section>

      <section className="container premium-section">
        <div className="section-heading">
          <p className="section-kicker">Comparaison rapide</p>
          <h2>Les principales options pour une PME.</h2>
        </div>
        <div className="card content-card" style={{ overflowX: 'auto' }}>
          <table className="premium-table">
            <thead><tr><th>Approche</th><th>Rôle principal</th><th>Limite</th><th>Quand l’utiliser</th></tr></thead>
            <tbody>
              {options.map(([name, role, limit, when]) => (
                <tr key={name}><td>{name}</td><td>{role}</td><td>{limit}</td><td>{when}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="container premium-section">
        <div className="section-heading">
          <p className="section-kicker">Pourquoi ScanAdmin</p>
          <h2>Ce que ScanAdmin apporte avant le choix d’un outil IA.</h2>
        </div>
        <div className="comparison-grid">
          {scanadminAdvantages.map(([title, text]) => (
            <div key={title} className="comparison-card muted-card">
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container premium-section split-section reversed">
        <div className="deliverable-preview">
          <div className="deliverable-header"><span>Décision recommandée</span><strong>Selon le besoin</strong></div>
          {useCases.map(([situation, choice, reason]) => (
            <div key={situation} className="deliverable-row">
              <strong>{situation}</strong>
              <span>{choice} — {reason}</span>
            </div>
          ))}
        </div>
        <div>
          <p className="section-kicker">Choisir intelligemment</p>
          <h2>La bonne solution dépend de votre niveau de clarté.</h2>
          <p className="section-text">Si le besoin est déjà précis, un outil ou une automatisation peut suffire. Mais si vous ne savez pas quelle tâche prioriser, ScanAdmin est plus logique.</p>
          <p className="section-text">Le scan évite de transformer une intuition en dépense inutile.</p>
        </div>
      </section>

      <section className="container premium-section">
        <div className="section-heading">
          <p className="section-kicker">Critères</p>
          <h2>ScanAdmin face aux autres approches.</h2>
        </div>
        <div className="card content-card" style={{ overflowX: 'auto' }}>
          <table className="premium-table">
            <thead><tr><th>Critère</th><th>ScanAdmin</th><th>Outil IA</th><th>No-code</th><th>Audit complet</th></tr></thead>
            <tbody>
              {comparisonCriteria.map(([criterion, scanadmin, tool, nocode, audit]) => (
                <tr key={criterion}><td>{criterion}</td><td>{scanadmin}</td><td>{tool}</td><td>{nocode}</td><td>{audit}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="container premium-section">
        <div className="section-heading">
          <p className="section-kicker">Parcours ScanAdmin</p>
          <h2>Une approche progressive plutôt qu’un déploiement immédiat.</h2>
        </div>
        <div className="process-grid">
          {decisionPath.map(([number, title, text]) => (
            <div key={number} className="process-card">
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container premium-section comparison-section">
        <div className="section-heading">
          <p className="section-kicker">À retenir</p>
          <h2>ScanAdmin est utile quand la première question n’est pas “quel outil ?”, mais “quel problème ?”.</h2>
        </div>
        <div className="comparison-grid">
          <div className="comparison-card muted-card"><h3>Outil IA</h3><p>Utile si vous savez déjà exactement quoi faire avec l’IA.</p></div>
          <div className="comparison-card highlight-card"><h3>ScanAdmin</h3><p>Utile si vous devez d’abord mesurer et prioriser vos tâches administratives.</p></div>
          <div className="comparison-card muted-card"><h3>Audit complet</h3><p>Utile si vous avez déjà un projet global, un budget et un besoin d’accompagnement large.</p></div>
        </div>
      </section>

      <section className="container premium-section split-section">
        <div>
          <p className="section-kicker">Limites</p>
          <h2>ScanAdmin ne prétend pas remplacer les autres solutions.</h2>
        </div>
        <div className="card content-card">
          <h2>Le rôle exact</h2>
          <p>ScanAdmin intervient au début du parcours. Il aide à savoir si une analyse personnalisée ou un premier agent IA mérite d’être testé.</p>
          <p>Ensuite, selon le cas, une automatisation no-code, un outil IA, un consultant ou un développement spécifique peut devenir pertinent.</p>
          <Link className="button" href="/limites">Voir les limites</Link>
        </div>
      </section>

      <section className="container premium-final-cta">
        <p className="section-kicker">Décision simple</p>
        <h2>Avant de choisir un outil IA, mesurez votre administratif.</h2>
        <p>Le scan gratuit permet de savoir si vos tâches répétitives justifient une analyse ou un premier agent IA supervisé.</p>
        <div className="hero-actions center-actions">
          <Link className="button" href="/scan">Commencer par le scan</Link>
          <Link className="ghost-button" href="/analyse-personnalisee">Voir l’analyse personnalisée</Link>
        </div>
      </section>
    </main>
  );
}
