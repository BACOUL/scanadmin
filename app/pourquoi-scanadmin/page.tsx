import Link from 'next/link';

const problems = [
  ['Acheter un outil trop tôt', 'Beaucoup d’entreprises commencent par choisir un outil IA avant de savoir quelle tâche coûte vraiment du temps.'],
  ['Automatiser une tâche trop faible', 'Une tâche pénible n’est pas forcément prioritaire si elle ne représente pas assez d’heures ou d’argent.'],
  ['Sous-estimer le risque', 'Certaines tâches touchent au prix, au client, à la comptabilité ou au contrat. Elles demandent une validation humaine forte.'],
  ['Confondre démonstration et usage réel', 'Une IA peut sembler impressionnante en test, mais être peu utile si le processus réel est trop variable.'],
];

const method = [
  ['01', 'Mesurer', 'Identifier les tâches administratives répétitives, leur fréquence, leur temps moyen et leur coût mensuel estimé.'],
  ['02', 'Prioriser', 'Classer les tâches selon le coût, la répétition, le risque, les données disponibles et la facilité de contrôle humain.'],
  ['03', 'Recommander', 'Choisir le premier agent IA supervisé à tester, avec son rôle, ses limites et les validations nécessaires.'],
  ['04', 'Tester', 'Commencer par un test court sur 7 à 14 jours avant toute généralisation ou mise en place plus lourde.'],
];

const differences = [
  ['Un outil IA classique', 'propose une fonctionnalité', 'Vous devez deviner si elle est utile pour votre entreprise.'],
  ['Un consultant généraliste', 'analyse largement l’organisation', 'Cela peut être plus long, plus cher et moins orienté premier test IA.'],
  ['ScanAdmin', 'mesure les tâches administratives', 'Le résultat sert à choisir le premier cas d’usage IA réaliste et supervisé.'],
];

const reasons = [
  ['PME d’abord', 'ScanAdmin parle en tâches, temps, coût et priorités, pas en jargon technique.'],
  ['IA supervisée', 'L’IA prépare le travail, mais l’humain garde la décision finale.'],
  ['Décision progressive', 'Le parcours évite de vendre une mise en place avant d’avoir confirmé le potentiel.'],
  ['SEO et self-service', 'Le dirigeant peut comprendre la logique, faire un scan et demander une analyse sans rendez-vous inutile au départ.'],
  ['Prix lisible', 'Scan gratuit, analyse personnalisée, puis agent sur devis si le besoin est confirmé.'],
  ['Limites assumées', 'ScanAdmin ne promet pas un gain garanti et ne prétend pas remplacer un audit complet.'],
];

const decisionExamples = [
  ['Devis simples', 'fort volume, valeur élevée, validation humaine possible', 'Bon premier test si les demandes sont répétitives.'],
  ['Relances clients', 'risque faible, répétition forte, vérification facile', 'Souvent intéressant rapidement.'],
  ['Factures', 'enjeu financier, contrôle nécessaire, risque plus élevé', 'À traiter avec prudence.'],
  ['Reporting', 'utile si récurrent, moins prioritaire si faible volume', 'À tester si la préparation revient souvent.'],
];

export const metadata = {
  title: 'Pourquoi ScanAdmin | Mesurer avant d’automatiser avec l’IA',
  description: 'Pourquoi utiliser ScanAdmin : mesurer les tâches administratives, prioriser les cas d’usage IA et tester des agents IA supervisés pour PME.',
};

export default function WhyPage() {
  return (
    <main>
      <section className="premium-hero">
        <div className="container hero-shell">
          <div className="hero-copy">
            <p className="badge">Pourquoi ScanAdmin</p>
            <h1>Parce qu’une PME ne doit pas choisir un agent IA au hasard.</h1>
            <p className="hero-subtitle">ScanAdmin existe pour répondre à une question simple : quelle tâche administrative mérite vraiment d’être traitée en premier avec l’IA, sans prendre de risque inutile ?</p>
            <div className="hero-actions">
              <Link className="button" href="/scan">Lancer le scan gratuit</Link>
              <Link className="ghost-button" href="/method">Voir la méthode</Link>
            </div>
            <p className="hero-note">La logique : mesurer avant de recommander, recommander avant de déployer, valider avant d’automatiser.</p>
          </div>

          <div className="report-preview">
            <div className="report-topline"><span>Différence ScanAdmin</span><strong>Mesure d’abord</strong></div>
            <div className="report-metric-main"><span>Question clé</span><strong style={{ fontSize: 34 }}>Où l’IA peut-elle vraiment aider ?</strong></div>
            <div className="metric-grid">
              <div><span>Avant</span><strong>Temps</strong></div>
              <div><span>Après</span><strong>Priorité</strong></div>
            </div>
            <div className="priority-list">
              <p>Ce que ScanAdmin évite</p>
              <span>Outil acheté trop tôt</span>
              <span>Automatisation risquée</span>
              <span>Gain supposé non vérifié</span>
            </div>
          </div>
        </div>
      </section>

      <section className="container premium-section split-section">
        <div>
          <p className="section-kicker">Constat</p>
          <h2>Le problème n’est pas le manque d’outils IA. Le problème est de savoir quoi automatiser.</h2>
        </div>
        <div className="text-stack">
          <p>Les PME voient passer des dizaines d’outils IA : assistants mails, générateurs de devis, automatisations, chatbots, agents autonomes. Mais un outil puissant ne crée pas forcément de valeur si la tâche ciblée n’est pas la bonne.</p>
          <p>ScanAdmin inverse l’ordre habituel. Au lieu de partir de l’outil, il part de la charge administrative réelle : temps perdu, coût mensuel, répétition, risque et contrôle humain.</p>
          <p>Le but n’est pas de vendre de l’IA plus vite. Le but est d’éviter une mauvaise décision IA.</p>
        </div>
      </section>

      <section className="container premium-section">
        <div className="section-heading">
          <p className="section-kicker">Erreurs fréquentes</p>
          <h2>Ce que ScanAdmin aide à éviter.</h2>
        </div>
        <div className="comparison-grid">
          {problems.map(([title, text]) => (
            <div key={title} className="comparison-card muted-card">
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container premium-section">
        <div className="section-heading">
          <p className="section-kicker">Méthode</p>
          <h2>La réponse ScanAdmin : mesurer, prioriser, recommander, tester.</h2>
          <p>Chaque étape sert à réduire le risque avant d’envisager une mise en place d’agent IA.</p>
        </div>
        <div className="process-grid">
          {method.map(([number, title, text]) => (
            <div key={number} className="process-card">
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container premium-section split-section reversed">
        <div className="card content-card" style={{ overflowX: 'auto' }}>
          <table className="premium-table">
            <thead><tr><th>Approche</th><th>Point de départ</th><th>Limite</th></tr></thead>
            <tbody>
              {differences.map(([approach, start, limit]) => (
                <tr key={approach}><td>{approach}</td><td>{start}</td><td>{limit}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
        <div>
          <p className="section-kicker">Différenciation</p>
          <h2>ScanAdmin n’est pas un catalogue d’outils IA.</h2>
          <p className="section-text">La différence principale est le point de départ. ScanAdmin ne demande pas “quel outil voulez-vous ?”, mais “quelle tâche vous coûte réellement du temps chaque mois ?”.</p>
          <p className="section-text">Cette approche rend la recommandation plus concrète, plus prudente et plus adaptée à une PME.</p>
        </div>
      </section>

      <section className="container premium-section">
        <div className="section-heading">
          <p className="section-kicker">Raisons de choisir ScanAdmin</p>
          <h2>Un positionnement pensé pour les PME qui veulent avancer sans se perdre.</h2>
        </div>
        <div className="comparison-grid">
          {reasons.map(([title, text]) => (
            <div key={title} className="comparison-card muted-card">
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container premium-section">
        <div className="section-heading">
          <p className="section-kicker">Exemples</p>
          <h2>La bonne décision dépend du contexte.</h2>
        </div>
        <div className="card content-card" style={{ overflowX: 'auto' }}>
          <table className="premium-table">
            <thead><tr><th>Tâche</th><th>Lecture ScanAdmin</th><th>Décision probable</th></tr></thead>
            <tbody>
              {decisionExamples.map(([task, reading, decision]) => (
                <tr key={task}><td>{task}</td><td>{reading}</td><td>{decision}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="container premium-section comparison-section">
        <div className="section-heading">
          <p className="section-kicker">Philosophie</p>
          <h2>L’IA doit rester utile, mesurable et supervisée.</h2>
        </div>
        <div className="comparison-grid">
          <div className="comparison-card muted-card"><h3>Utile</h3><p>Elle doit traiter une vraie charge administrative, pas seulement impressionner en démonstration.</p></div>
          <div className="comparison-card highlight-card"><h3>Mesurable</h3><p>Le temps, le coût et le potentiel doivent être estimés avant de décider.</p></div>
          <div className="comparison-card muted-card"><h3>Supervisée</h3><p>L’IA prépare, l’humain vérifie et garde la responsabilité finale.</p></div>
        </div>
      </section>

      <section className="container premium-final-cta">
        <p className="section-kicker">Décider proprement</p>
        <h2>Avant de choisir un agent IA, mesurez votre administratif.</h2>
        <p>Le scan gratuit donne une première estimation. L’analyse personnalisée transforme ensuite ce résultat en décision claire.</p>
        <div className="hero-actions center-actions">
          <Link className="button" href="/scan">Lancer mon scan gratuit</Link>
          <Link className="ghost-button" href="/analyse-personnalisee">Voir l’analyse personnalisée</Link>
        </div>
      </section>
    </main>
  );
}
