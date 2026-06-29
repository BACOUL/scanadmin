import Link from 'next/link';

const agents = [
  {
    name: 'Agent IA mails',
    level: 'Risque faible à moyen',
    bestFor: 'PME qui reçoivent beaucoup de demandes clients, fournisseurs ou internes.',
    role: 'Résumer les messages, préparer des réponses, détecter les demandes importantes et organiser les informations à traiter.',
    canDo: ['résumer une conversation', 'préparer une réponse', 'identifier les informations manquantes', 'classer les messages par priorité'],
    cannotDo: ['répondre seul à un client sensible', 'prendre un engagement commercial', 'modifier une condition contractuelle'],
    beforeTest: 'À tester si les mails répétitifs prennent plusieurs heures par semaine et si une personne peut valider les réponses avant envoi.',
    taskHref: '/taches/emails-administratifs',
    taskLabel: 'Voir la page emails',
  },
  {
    name: 'Agent IA devis',
    level: 'Risque moyen',
    bestFor: 'Entreprises avec demandes de devis fréquentes, similaires ou partiellement standardisées.',
    role: 'Préparer une base de devis, structurer la demande, repérer les informations manquantes et proposer une réponse commerciale à valider.',
    canDo: ['résumer la demande client', 'préparer une trame de devis', 'lister les points à vérifier', 'préparer une réponse de suivi'],
    cannotDo: ['fixer seul le prix final', 'envoyer le devis sans validation', 'prendre une décision commerciale'],
    beforeTest: 'À tester seulement si les demandes sont assez répétitives et si le dirigeant ou l’équipe commerciale conserve la validation finale.',
    taskHref: '/taches/devis',
    taskLabel: 'Voir la page devis',
  },
  {
    name: 'Agent IA relance',
    level: 'Risque faible',
    bestFor: 'PME qui perdent du temps à relancer clients, fournisseurs, documents manquants ou validations en attente.',
    role: 'Préparer des relances claires, polies et contextualisées pour réduire les oublis et accélérer les retours.',
    canDo: ['préparer une relance client', 'adapter le ton', 'rappeler les pièces manquantes', 'proposer un message court'],
    cannotDo: ['harceler un client', 'envoyer automatiquement sans contrôle', 'modifier une échéance ou un accord'],
    beforeTest: 'Souvent un bon premier agent car le risque est limité et la vérification humaine est simple.',
    taskHref: '/taches/relances-clients',
    taskLabel: 'Voir la page relances',
  },
  {
    name: 'Agent IA documents',
    level: 'Risque faible à moyen',
    bestFor: 'Entreprises qui reçoivent beaucoup de pièces jointes, bons de commande, dossiers, justificatifs ou documents administratifs.',
    role: 'Aider à classer, résumer et retrouver les informations importantes dans les documents entrants.',
    canDo: ['identifier le type de document', 'résumer le contenu', 'extraire les points utiles', 'proposer un classement'],
    cannotDo: ['certifier la conformité', 'valider juridiquement un document', 'remplacer une revue humaine'],
    beforeTest: 'À tester si le classement ou la recherche d’informations prend du temps et si les documents peuvent être vérifiés facilement.',
    taskHref: '/taches/documents-entrants',
    taskLabel: 'Voir la page documents',
  },
  {
    name: 'Agent IA factures',
    level: 'Risque moyen à élevé',
    bestFor: 'PME avec beaucoup de factures entrantes ou de contrôles administratifs répétitifs.',
    role: 'Préparer le pré-tri, repérer les informations importantes et signaler les incohérences à vérifier.',
    canDo: ['repérer fournisseur, date, montant', 'signaler une information manquante', 'préparer une synthèse de contrôle', 'classer par statut'],
    cannotDo: ['valider seul une facture', 'déclencher un paiement', 'remplacer le contrôle comptable'],
    beforeTest: 'À tester avec prudence, car les erreurs peuvent avoir un impact comptable ou financier.',
    taskHref: '/taches/factures',
    taskLabel: 'Voir la page factures',
  },
  {
    name: 'Agent IA dossiers clients',
    level: 'Risque moyen',
    bestFor: 'Entreprises qui doivent suivre des dossiers, demandes, pièces, échanges et étapes administratives.',
    role: 'Préparer des fiches de suivi, résumer l’historique et signaler ce qui reste à traiter.',
    canDo: ['résumer un dossier', 'lister les éléments manquants', 'préparer une fiche client', 'mettre en évidence les prochaines actions'],
    cannotDo: ['prendre une décision client', 'modifier une obligation', 'garantir que le dossier est complet'],
    beforeTest: 'À tester si les dossiers sont nombreux, répétitifs et suffisamment structurés pour être relus rapidement.',
    taskHref: '/taches/dossiers-clients',
    taskLabel: 'Voir la page dossiers',
  },
  {
    name: 'Agent IA reporting',
    level: 'Risque faible à moyen',
    bestFor: 'Dirigeants ou équipes qui préparent régulièrement des synthèses, tableaux de suivi ou comptes rendus.',
    role: 'Transformer des informations disponibles en synthèse lisible, points d’attention et suivi d’activité.',
    canDo: ['préparer une synthèse', 'faire ressortir les points importants', 'structurer un compte rendu', 'aider à préparer un reporting simple'],
    cannotDo: ['inventer des chiffres', 'corriger une donnée source fausse', 'remplacer une analyse financière'],
    beforeTest: 'À tester si les données sont disponibles et si le besoin revient souvent.',
    taskHref: '/taches/reporting',
    taskLabel: 'Voir la page reporting',
  },
];

const selectionCriteria = [
  ['Volume', 'L’agent devient intéressant si la tâche revient souvent et consomme assez d’heures chaque mois.'],
  ['Répétition', 'Plus la tâche suit une structure similaire, plus elle est adaptée à une préparation par IA.'],
  ['Risque', 'Les tâches commerciales, comptables ou contractuelles demandent plus de supervision humaine.'],
  ['Contrôle', 'Un bon cas d’usage doit permettre à l’humain de vérifier rapidement ce que l’IA prépare.'],
];

export const metadata = {
  title: 'Catalogue agents IA administratifs pour PME | ScanAdmin',
  description: 'Découvrez les agents IA administratifs supervisés ScanAdmin : mails, devis, relances, documents, factures, dossiers clients et reporting pour PME.',
};

export default function Page() {
  return (
    <main>
      <section className="premium-hero">
        <div className="container hero-shell">
          <div className="hero-copy">
            <p className="badge">Catalogue agents IA</p>
            <h1>Des agents IA administratifs supervisés, pas une automatisation aveugle.</h1>
            <p className="hero-subtitle">Chaque agent ScanAdmin est pensé pour préparer le travail, réduire les tâches répétitives et laisser la décision finale à l’humain. Le bon agent dépend du volume, du risque et de la facilité de contrôle.</p>
            <div className="hero-actions">
              <Link className="button" href="/scan">Trouver l’agent prioritaire</Link>
              <Link className="ghost-button" href="/method">Comprendre la méthode</Link>
            </div>
            <p className="hero-note">L’IA prépare. L’humain valide. Aucun agent n’est recommandé sans mesurer d’abord les tâches.</p>
          </div>

          <div className="report-preview">
            <div className="report-topline"><span>Catalogue</span><strong>Agents supervisés</strong></div>
            <div className="report-metric-main"><span>Objectif</span><strong style={{ fontSize: 34 }}>Choisir le bon premier test</strong></div>
            <div className="metric-grid">
              <div><span>Critère clé</span><strong>Volume</strong></div>
              <div><span>Règle</span><strong>Validation</strong></div>
            </div>
            <div className="priority-list">
              <p>Agents fréquents</p>
              <span>Mails + devis</span>
              <span>Relances + documents</span>
              <span>Factures + reporting</span>
            </div>
          </div>
        </div>
      </section>

      <section className="container premium-section split-section">
        <div>
          <p className="section-kicker">Principe</p>
          <h2>Un agent IA n’est utile que s’il traite une vraie perte de temps.</h2>
        </div>
        <div className="text-stack">
          <p>ScanAdmin ne recommande pas un agent parce qu’il semble moderne ou impressionnant. La recommandation part d’une question simple : quelle tâche administrative coûte assez cher pour mériter un test ?</p>
          <p>Un bon agent IA doit préparer, structurer ou résumer. Il ne doit pas remplacer la décision humaine, surtout lorsqu’il y a un enjeu commercial, comptable, juridique ou client.</p>
          <p>Le catalogue sert donc à comprendre les possibilités, mais le choix prioritaire doit venir du scan et de l’analyse.</p>
        </div>
      </section>

      <section className="container premium-section">
        <div className="section-heading">
          <p className="section-kicker">Agents disponibles</p>
          <h2>Les principaux agents IA administratifs pour PME.</h2>
          <p>Chaque agent ci-dessous est présenté avec son rôle, ses limites et les conditions à vérifier avant un premier test.</p>
        </div>

        <div className="grid" style={{ marginTop: 26 }}>
          {agents.map((agent) => (
            <article key={agent.name} className="card content-card">
              <div className="split-section" style={{ padding: 0 }}>
                <div>
                  <p className="section-kicker">{agent.level}</p>
                  <h2>{agent.name}</h2>
                  <p>{agent.bestFor}</p>
                  <p><strong>Rôle :</strong> {agent.role}</p>
                  <p><strong>Avant de tester :</strong> {agent.beforeTest}</p>
                  <Link className="ghost-button" href={agent.taskHref}>{agent.taskLabel}</Link>
                </div>
                <div className="grid grid-2">
                  <div className="deliverable-preview" style={{ boxShadow: 'none' }}>
                    <div className="deliverable-header"><span>Peut faire</span><strong>Préparer</strong></div>
                    {agent.canDo.map((item) => (
                      <div key={item} className="deliverable-row"><span>{item}</span></div>
                    ))}
                  </div>
                  <div className="deliverable-preview" style={{ boxShadow: 'none' }}>
                    <div className="deliverable-header"><span>Ne doit pas faire</span><strong>Décider seul</strong></div>
                    {agent.cannotDo.map((item) => (
                      <div key={item} className="deliverable-row"><span>{item}</span></div>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="container premium-section">
        <div className="section-heading">
          <p className="section-kicker">Choix du bon agent</p>
          <h2>Le meilleur agent n’est pas toujours le plus spectaculaire.</h2>
          <p>Le bon choix dépend surtout de la valeur de la tâche et de la capacité à contrôler le résultat.</p>
        </div>
        <div className="comparison-grid">
          {selectionCriteria.map(([title, text]) => (
            <div key={title} className="comparison-card muted-card">
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container premium-section comparison-section">
        <div className="section-heading">
          <p className="section-kicker">Différence</p>
          <h2>ScanAdmin ne vend pas une bibliothèque d’agents au hasard.</h2>
        </div>
        <div className="comparison-grid">
          <div className="comparison-card muted-card"><h3>Catalogue classique</h3><p>Liste des agents possibles, mais sans savoir lequel correspond vraiment à l’entreprise.</p></div>
          <div className="comparison-card highlight-card"><h3>ScanAdmin</h3><p>Mesure d’abord les tâches, puis recommande l’agent le plus cohérent avec le volume, le risque et la validation humaine.</p></div>
          <div className="comparison-card muted-card"><h3>Automatisation directe</h3><p>Peut aller trop vite si le processus n’est pas clair ou si la tâche demande trop de jugement humain.</p></div>
        </div>
      </section>

      <section className="container premium-final-cta">
        <p className="section-kicker">Prioriser</p>
        <h2>Vous ne savez pas quel agent IA tester en premier ?</h2>
        <p>Commencez par le scan gratuit. ScanAdmin mesure vos tâches administratives et identifie les agents qui méritent vraiment une analyse.</p>
        <div className="hero-actions center-actions">
          <Link className="button" href="/scan">Lancer mon scan gratuit</Link>
          <Link className="ghost-button" href="/analyse-personnalisee">Voir l’analyse personnalisée</Link>
        </div>
      </section>
    </main>
  );
}
