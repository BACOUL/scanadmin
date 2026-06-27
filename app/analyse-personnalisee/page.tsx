import Link from 'next/link';

const deliverables = [
  ['Diagnostic chiffré', 'Temps mensuel, coût mensuel, coût annuel et lecture des tâches les plus coûteuses.'],
  ['Matrice de priorisation', 'Classement des tâches selon coût, répétition, risque, données disponibles et contrôle humain.'],
  ['Top 3 actions', 'Les trois actions à traiter en premier avec une justification claire et exploitable.'],
  ['Agent IA recommandé', 'Le premier agent IA supervisé à tester, son rôle exact, ses limites et les validations nécessaires.'],
  ['Plan de test 7 à 14 jours', 'Un plan concret pour tester sans perturber l’équipe ni automatiser trop vite.'],
  ['Synthèse dirigeant', 'Une conclusion courte : quoi faire, quoi éviter et pourquoi cette priorité est retenue.'],
];

const methodSteps = [
  ['01', 'Lecture du scan', 'Analyse des réponses, volumes déclarés, familles de tâches et cohérence générale du résultat.'],
  ['02', 'Vérification des chiffres', 'Contrôle des ordres de grandeur : temps mensuel, coût horaire, coût annuel et potentiel récupérable.'],
  ['03', 'Priorisation', 'Classement des tâches selon leur valeur réelle, pas seulement selon leur visibilité.'],
  ['04', 'Recommandation', 'Choix du premier cas d’usage IA à tester, avec limites et niveau de supervision humaine.'],
  ['05', 'Plan de test', 'Construction d’un test simple sur 7 à 14 jours avec critères de décision.'],
];

const included = [
  'Analyse du résultat ScanAdmin',
  'Diagnostic administratif chiffré',
  'Identification des tâches prioritaires',
  'Recommandation d’un premier agent IA supervisé',
  'Plan de test court et actionnable',
  'Synthèse lisible pour dirigeant de PME',
];

const notIncluded = [
  'Pas de promesse de gain garanti',
  'Pas de déploiement technique complet',
  'Pas de paramétrage d’outil externe',
  'Pas d’automatisation sans validation humaine',
  'Pas d’accès à vos données internes sans accord',
  'Pas de remplacement d’un audit organisationnel complet',
];

const objections = [
  ['Pourquoi payer après un scan gratuit ?', 'Le scan donne une première estimation. L’analyse transforme cette estimation en décision : quoi traiter, quoi éviter, quel agent tester et comment vérifier le résultat.'],
  ['Pourquoi 490 € comme prix normal ?', 'Parce que l’analyse demande une vraie lecture du contexte, des volumes, des risques et des priorités. Ce n’est pas une réponse automatique générique.'],
  ['Pourquoi l’offre de lancement est à 200 € ?', 'Le tarif de lancement permet de construire les premiers cas clients et d’améliorer la méthode ScanAdmin, tout en gardant un livrable sérieux.'],
  ['Est-ce adapté à une petite PME ?', 'Oui, si l’entreprise a des tâches administratives répétitives : devis, relances, documents, factures, dossiers clients, mails ou reporting.'],
];

export const metadata = {
  title: 'Analyse personnalisée ScanAdmin | Audit IA administratif PME',
  description: 'Analyse personnalisée ScanAdmin : diagnostic chiffré, priorités, agent IA recommandé et plan de test. Prix normal 490 €, offre de lancement 200 €.',
};

export default function AnalysePersonnaliseePage() {
  return (
    <main>
      <section className="premium-hero">
        <div className="container hero-shell">
          <div className="hero-copy">
            <p className="badge">Analyse personnalisée ScanAdmin</p>
            <h1>Transformez votre scan administratif en décision claire.</h1>
            <p className="hero-subtitle">Le scan gratuit mesure un potentiel. L’analyse personnalisée vérifie les chiffres, classe les priorités et vous indique le premier agent IA supervisé à tester sans automatiser au hasard.</p>
            <div className="hero-actions">
              <Link className="button" href="/analyse">Demander mon analyse</Link>
              <Link className="ghost-button" href="/exemple">Voir un rapport exemple</Link>
            </div>
            <p className="hero-note">Prix normal prévu : 490 €. Offre de lancement : 200 € pour les premiers clients.</p>
          </div>

          <div className="report-preview">
            <div className="report-topline"><span>Offre de lancement</span><strong>Diagnostic PME</strong></div>
            <div className="report-metric-main"><span>Analyse personnalisée</span><strong>200 €</strong></div>
            <div className="metric-grid">
              <div><span>Prix normal</span><strong>490 €</strong></div>
              <div><span>Livrable</span><strong>Plan IA</strong></div>
            </div>
            <div className="priority-list">
              <p>Ce que vous obtenez</p>
              <span>Diagnostic chiffré</span>
              <span>Priorités + agent recommandé</span>
              <span>Plan de test 7 à 14 jours</span>
            </div>
          </div>
        </div>
      </section>

      <section className="container premium-section split-section">
        <div>
          <p className="section-kicker">Pourquoi cette analyse</p>
          <h2>Le risque n’est pas de ne pas utiliser l’IA. Le risque est de l’utiliser au mauvais endroit.</h2>
        </div>
        <div className="text-stack">
          <p>Une PME peut perdre beaucoup de temps sur l’administratif, mais toutes les tâches ne méritent pas d’être automatisées. Certaines sont trop faibles, trop risquées ou trop dépendantes du jugement humain.</p>
          <p>L’analyse personnalisée sert à éviter une mauvaise décision : choisir un outil IA trop vite, automatiser une tâche peu rentable ou lancer un test impossible à contrôler.</p>
          <p>Le livrable doit aider à décider simplement : quelle tâche traiter en premier, avec quel agent, quelles limites et quel test.</p>
        </div>
      </section>

      <section className="container premium-section">
        <div className="section-heading">
          <p className="section-kicker">Livrable</p>
          <h2>Ce que contient concrètement l’analyse.</h2>
          <p>Le but n’est pas de produire un document décoratif. Le but est de donner au dirigeant une lecture claire de son coût administratif et une première action réaliste.</p>
        </div>
        <div className="comparison-grid">
          {deliverables.map(([title, text]) => (
            <div key={title} className="comparison-card muted-card">
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container premium-section split-section reversed">
        <div className="deliverable-preview">
          <div className="deliverable-header"><span>Valeur commerciale</span><strong>490 € normal</strong></div>
          <div className="deliverable-row"><strong>Offre de lancement</strong><span>200 € pour les premiers clients</span></div>
          <div className="deliverable-row"><strong>Objectif</strong><span>passer d’un scan brut à une décision exploitable</span></div>
          <div className="deliverable-row"><strong>Résultat attendu</strong><span>savoir quoi tester, quoi éviter et comment contrôler l’IA</span></div>
          <div className="deliverable-row"><strong>Positionnement</strong><span>diagnostic court, sérieux, orienté action</span></div>
        </div>
        <div>
          <p className="section-kicker">Prix</p>
          <h2>Pourquoi 200 € ne doit pas être vu comme le vrai prix.</h2>
          <p className="section-text">Le prix normal prévu est 490 €, car l’analyse doit rester perçue comme une prestation professionnelle : lecture du contexte, priorisation, recommandation et plan de test.</p>
          <p className="section-text">Le tarif à 200 € est une offre de lancement. Il sert à obtenir les premiers retours clients et à améliorer la méthode, sans dévaloriser la prestation.</p>
        </div>
      </section>

      <section className="container premium-section">
        <div className="section-heading">
          <p className="section-kicker">Méthode</p>
          <h2>Comment l’analyse est réalisée.</h2>
        </div>
        <div className="process-grid">
          {methodSteps.map(([number, title, text]) => (
            <div key={number} className="process-card">
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container premium-section">
        <div className="grid grid-2">
          <div className="card content-card">
            <h2>Ce qui est inclus</h2>
            <ul>{included.map((item) => <li key={item}>{item}</li>)}</ul>
          </div>
          <div className="card content-card">
            <h2>Ce qui n’est pas inclus</h2>
            <ul>{notIncluded.map((item) => <li key={item}>{item}</li>)}</ul>
          </div>
        </div>
      </section>

      <section className="container premium-section comparison-section">
        <div className="section-heading">
          <p className="section-kicker">Positionnement</p>
          <h2>Une étape entre le scan gratuit et la mise en place d’un agent IA.</h2>
        </div>
        <div className="comparison-grid">
          <div className="comparison-card muted-card"><h3>Scan gratuit</h3><p>Première estimation du temps administratif, du coût mensuel et du potentiel de récupération.</p></div>
          <div className="comparison-card highlight-card"><h3>Analyse personnalisée</h3><p>Lecture professionnelle du résultat, priorités, agent recommandé, limites et plan de test.</p></div>
          <div className="comparison-card muted-card"><h3>Mise en place</h3><p>Déploiement progressif d’un agent IA supervisé, seulement si le cas d’usage est suffisamment clair.</p></div>
        </div>
      </section>

      <section className="container premium-section">
        <div className="section-heading">
          <p className="section-kicker">Objections</p>
          <h2>Les questions que se pose un dirigeant avant de payer.</h2>
        </div>
        <div className="grid grid-2" style={{ marginTop: 24 }}>
          {objections.map(([question, answer]) => (
            <div key={question} className="card content-card">
              <h2>{question}</h2>
              <p>{answer}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container premium-final-cta">
        <p className="section-kicker">Passer à l’étape utile</p>
        <h2>Votre scan montre un potentiel ? Faites-le analyser.</h2>
        <p>L’analyse personnalisée vous aide à choisir la première tâche à traiter, le bon agent IA à tester et les limites à respecter.</p>
        <div className="hero-actions center-actions">
          <Link className="button" href="/analyse">Demander mon analyse</Link>
          <Link className="ghost-button" href="/scan">Lancer le scan gratuit</Link>
        </div>
      </section>
    </main>
  );
}
