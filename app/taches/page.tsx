import Link from 'next/link';

const tasks = [
  {
    title: 'Préparation de devis simples',
    href: '/taches/devis',
    status: 'Disponible',
    description: 'Préparer une première version de devis à partir d’une demande client, sans fixer seul le prix ni envoyer automatiquement.',
  },
  {
    title: 'Relances clients et prospects',
    href: '/taches/relances-clients',
    status: 'Disponible',
    description: 'Préparer des relances pour devis en attente, documents manquants ou retours clients, avec validation humaine.',
  },
  {
    title: 'Emails administratifs',
    href: '/taches/emails-administratifs',
    status: 'Disponible',
    description: 'Résumer, classer et préparer des réponses aux emails répétitifs sans envoi autonome.',
  },
  {
    title: 'Documents entrants',
    href: '/taches/documents-entrants',
    status: 'Disponible',
    description: 'Aider à trier les pièces jointes, documents chantier, bons de commande et demandes entrantes.',
  },
  {
    title: 'Reporting et synthèses',
    href: '/taches/reporting',
    status: 'À venir',
    description: 'Préparer des synthèses internes, tableaux de suivi et comptes rendus à partir de données fournies.',
  },
  {
    title: 'Factures et règlements',
    href: '/taches/factures',
    status: 'Prudence',
    description: 'Cas sensible : l’IA peut préparer, mais la validation humaine doit rester stricte.',
  },
];

const criteria = [
  ['Fréquence', 'La tâche revient-elle souvent chaque semaine ou chaque mois ?'],
  ['Temps perdu', 'Le dirigeant ou l’équipe y consacre-t-il un temps significatif ?'],
  ['Répétition', 'La tâche suit-elle toujours à peu près la même structure ?'],
  ['Risque', 'Une erreur peut-elle engager l’entreprise ou créer un litige ?'],
  ['Contrôle', 'Une personne peut-elle relire rapidement avant toute action externe ?'],
];

export const metadata = {
  title: 'Tâches administratives à automatiser avec l’IA | ScanAdmin',
  description: 'Quelles tâches administratives une PME peut-elle préparer avec l’IA ? Devis, relances, emails, documents, reporting : méthode, risques et validation humaine.',
};

export default function TasksHubPage() {
  return (
    <main>
      <section className="premium-hero">
        <div className="container hero-shell">
          <div className="hero-copy">
            <p className="badge">Tâches administratives IA</p>
            <h1>Quelles tâches administratives automatiser avec l’IA en premier ?</h1>
            <p className="hero-subtitle">Toutes les tâches ne doivent pas être automatisées. ScanAdmin aide les PME à identifier les tâches répétitives que l’IA peut préparer, avec validation humaine obligatoire.</p>
            <div className="hero-actions">
              <Link className="button" href="/scan">Estimer mon coût administratif</Link>
              <Link className="ghost-button" href="/exemple">Voir un exemple de livrable</Link>
            </div>
            <p className="hero-note">Principe central : l’IA prépare, l’humain valide.</p>
          </div>

          <div className="report-preview">
            <div className="report-topline"><span>Méthode</span><strong>Priorisation</strong></div>
            <div className="report-metric-main"><span>Premier filtre</span><strong>Risque + répétition</strong></div>
            <div className="metric-grid">
              <div><span>Départ</span><strong>Scan</strong></div>
              <div><span>Suite</span><strong>Test 14j</strong></div>
            </div>
            <div className="priority-list">
              <p>Bon premier cas</p>
              <span>Fréquent</span>
              <span>Répétitif</span>
              <span>Facile à vérifier</span>
            </div>
          </div>
        </div>
      </section>

      <section className="container premium-section split-section">
        <div>
          <p className="section-kicker">Réponse courte</p>
          <h2>La meilleure tâche à traiter en premier est fréquente, coûteuse en temps et vérifiable.</h2>
        </div>
        <div className="text-stack">
          <p>Une PME ne doit pas commencer par automatiser une décision sensible. Elle doit commencer par une tâche répétitive que l’IA peut préparer et qu’un humain peut relire rapidement.</p>
          <p>Les devis simples, les relances clients, les emails administratifs et les documents entrants sont souvent de bons premiers candidats.</p>
          <p>Les factures, règlements, décisions commerciales ou engagements contractuels doivent rester sous contrôle humain strict.</p>
        </div>
      </section>

      <section className="container premium-section comparison-section">
        <div className="section-heading">
          <p className="section-kicker">Pages tâches</p>
          <h2>Cas d’usage administratifs à analyser.</h2>
        </div>
        <div className="comparison-grid">
          {tasks.map((task) => (
            <div key={task.title} className={task.status === 'Disponible' ? 'comparison-card highlight-card' : 'comparison-card muted-card'}>
              <p className="section-kicker">{task.status}</p>
              <h3>{task.title}</h3>
              <p>{task.description}</p>
              {task.status === 'Disponible' ? <Link className="ghost-button" href={task.href}>Lire la page</Link> : null}
            </div>
          ))}
        </div>
      </section>

      <section className="container premium-section">
        <div className="section-heading">
          <p className="section-kicker">Méthode de choix</p>
          <h2>Les 5 critères pour choisir une tâche IA.</h2>
        </div>
        <div className="card content-card" style={{ overflowX: 'auto' }}>
          <table className="premium-table">
            <thead><tr><th>Critère</th><th>Question à poser</th></tr></thead>
            <tbody>
              {criteria.map(([label, text]) => (
                <tr key={label}><td><strong>{label}</strong></td><td>{text}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="container premium-section split-section reversed">
        <div className="deliverable-preview">
          <div className="deliverable-header"><span>Règle ScanAdmin</span><strong>Supervision</strong></div>
          <div className="deliverable-row"><strong>IA</strong><span>prépare, résume, structure et signale les points manquants.</span></div>
          <div className="deliverable-row"><strong>Humain</strong><span>valide les prix, délais, décisions, engagements et messages externes.</span></div>
          <div className="deliverable-row"><strong>Test</strong><span>mesurer 7 à 14 jours avant généralisation.</span></div>
        </div>
        <div>
          <p className="section-kicker">Limites</p>
          <h2>Une tâche automatisable n’est pas forcément une tâche à déléguer entièrement.</h2>
          <p className="section-text">Le bon niveau d’automatisation dépend du risque. Une tâche peut être excellente pour une préparation par IA, mais mauvaise pour une exécution autonome.</p>
        </div>
      </section>

      <section className="container premium-final-cta">
        <p className="section-kicker">Diagnostic</p>
        <h2>Vous ne savez pas quelle tâche traiter en premier ?</h2>
        <p>Le scan gratuit estime le coût de vos tâches administratives répétitives et aide à identifier le premier cas d’usage IA à tester.</p>
        <div className="hero-actions center-actions">
          <Link className="button" href="/scan">Lancer mon scan gratuit</Link>
          <Link className="ghost-button" href="/analyse-personnalisee">Voir l’analyse personnalisée</Link>
        </div>
      </section>
    </main>
  );
}
