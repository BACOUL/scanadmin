import Link from 'next/link';

const useCases = [
  {
    title: 'Traiter les mails entrants répétitifs',
    context: 'Demandes clients, fournisseurs, messages internes, informations manquantes ou questions récurrentes.',
    pain: 'Les mails s’accumulent, les réponses prennent du temps et les demandes importantes peuvent être noyées dans le flux.',
    agent: 'Agent IA mails',
    preparation: ['résumer les échanges', 'classer les demandes par priorité', 'préparer une réponse', 'signaler les informations manquantes'],
    humanCheck: 'Validation du ton, du fond et des engagements avant envoi.',
    risk: 'Faible à moyen',
  },
  {
    title: 'Préparer les devis simples',
    context: 'Demandes de prix, travaux récurrents, prestations similaires, demandes entrantes partiellement standardisées.',
    pain: 'Le dirigeant ou l’équipe commerciale répète souvent les mêmes étapes pour structurer la demande et préparer une première réponse.',
    agent: 'Agent IA devis',
    preparation: ['résumer la demande client', 'identifier les points à confirmer', 'préparer une trame de devis', 'proposer une réponse de suivi'],
    humanCheck: 'Validation obligatoire du prix, des conditions, des délais et de l’engagement commercial.',
    risk: 'Moyen',
  },
  {
    title: 'Relancer les clients et documents manquants',
    context: 'Relances de devis, pièces absentes, validations en attente, documents administratifs ou retours fournisseurs.',
    pain: 'Les relances sont simples mais nombreuses. Elles prennent du temps et sont souvent repoussées.',
    agent: 'Agent IA relance',
    preparation: ['préparer un message court', 'adapter le ton', 'rappeler les éléments attendus', 'proposer une relance claire'],
    humanCheck: 'Vérification du contexte et de la relation client avant envoi.',
    risk: 'Faible',
  },
  {
    title: 'Classer les documents entrants',
    context: 'Pièces jointes, bons de commande, justificatifs, dossiers clients, documents techniques ou administratifs.',
    pain: 'Les documents arrivent dans plusieurs canaux et demandent du temps pour être triés, lus et retrouvés.',
    agent: 'Agent IA documents',
    preparation: ['identifier le type de document', 'résumer le contenu', 'extraire les informations utiles', 'proposer un classement'],
    humanCheck: 'Contrôle du classement et des informations importantes avant archivage ou décision.',
    risk: 'Faible à moyen',
  },
  {
    title: 'Préparer le contrôle des factures',
    context: 'Factures fournisseurs, montants à vérifier, informations manquantes, rapprochements administratifs simples.',
    pain: 'La lecture et le pré-tri des factures prennent du temps, mais les erreurs peuvent avoir un impact financier.',
    agent: 'Agent IA factures',
    preparation: ['repérer fournisseur, date et montant', 'signaler les champs manquants', 'préparer une synthèse de contrôle', 'classer par statut'],
    humanCheck: 'Validation comptable et humaine indispensable avant toute décision ou paiement.',
    risk: 'Moyen à élevé',
  },
  {
    title: 'Suivre les dossiers clients',
    context: 'Dossiers avec plusieurs pièces, échanges, étapes, informations à compléter et actions à suivre.',
    pain: 'Le temps se perd à retrouver l’historique, savoir ce qui manque et préparer les prochaines actions.',
    agent: 'Agent IA dossiers clients',
    preparation: ['résumer le dossier', 'lister les pièces manquantes', 'préparer une fiche de suivi', 'mettre en évidence les prochaines actions'],
    humanCheck: 'Validation de la complétude et des décisions liées au dossier.',
    risk: 'Moyen',
  },
  {
    title: 'Produire des synthèses et reportings simples',
    context: 'Suivi d’activité, comptes rendus, synthèses internes, points hebdomadaires ou tableaux simples.',
    pain: 'Le reporting revient souvent, mais la préparation manuelle consomme du temps et retarde la décision.',
    agent: 'Agent IA reporting',
    preparation: ['structurer une synthèse', 'faire ressortir les points importants', 'préparer un compte rendu', 'lister les sujets à suivre'],
    humanCheck: 'Contrôle des chiffres, du contexte et de l’interprétation avant diffusion.',
    risk: 'Faible à moyen',
  },
];

const sectors = [
  ['BTP', 'devis travaux, pièces chantier, relances clients, dossiers administratifs'],
  ['Transport', 'documents de livraison, demandes clients, reporting, factures'],
  ['Nettoyage', 'planning, relances, devis récurrents, fiches client'],
  ['Immobilier', 'dossiers, documents entrants, relances, synthèses client'],
  ['Services B2B', 'mails, devis, suivi client, reporting interne'],
  ['Formation', 'dossiers apprenants, documents, relances, synthèses administratives'],
];

const decisionRules = [
  ['Bon cas d’usage', 'fréquent, répétitif, vérifiable, avec données disponibles et risque maîtrisé'],
  ['Cas à analyser', 'tâche utile mais avec exceptions, données incomplètes ou validation importante'],
  ['Cas à éviter au départ', 'décision sensible, fort risque financier ou juridique, faible volume ou contrôle difficile'],
];

export const metadata = {
  title: 'Cas d’usage IA administrative pour PME | ScanAdmin',
  description: 'Découvrez les cas d’usage IA administrative pour PME : mails, devis, relances, documents, factures, dossiers clients et reporting avec validation humaine.',
};

export default function UseCasesPage() {
  return (
    <main>
      <section className="premium-hero">
        <div className="container hero-shell">
          <div className="hero-copy">
            <p className="badge">Cas d’usage IA administrative</p>
            <h1>Les meilleurs cas d’usage IA sont ceux que l’humain peut contrôler.</h1>
            <p className="hero-subtitle">ScanAdmin aide les PME à repérer les tâches administratives qui méritent vraiment un test IA : fréquentes, répétitives, coûteuses et vérifiables.</p>
            <div className="hero-actions">
              <Link className="button" href="/scan">Identifier mes cas d’usage</Link>
              <Link className="ghost-button" href="/catalogue">Voir les agents IA</Link>
            </div>
            <p className="hero-note">Objectif : commencer par le cas le plus simple à tester, pas par l’automatisation la plus spectaculaire.</p>
          </div>

          <div className="report-preview">
            <div className="report-topline"><span>Cas d’usage</span><strong>PME</strong></div>
            <div className="report-metric-main"><span>Priorité</span><strong style={{ fontSize: 34 }}>Fréquent + vérifiable</strong></div>
            <div className="metric-grid">
              <div><span>Exemples</span><strong>Devis</strong></div>
              <div><span>Validation</span><strong>Humaine</strong></div>
            </div>
            <div className="priority-list">
              <p>Cas fréquents</p>
              <span>Mails entrants</span>
              <span>Relances clients</span>
              <span>Documents et dossiers</span>
            </div>
          </div>
        </div>
      </section>

      <section className="container premium-section split-section">
        <div>
          <p className="section-kicker">Principe</p>
          <h2>Un bon cas d’usage n’est pas seulement automatisable. Il doit être rentable et contrôlable.</h2>
        </div>
        <div className="text-stack">
          <p>Une tâche peut sembler pénible sans être prioritaire. À l’inverse, une tâche simple, répétée tous les jours, peut coûter beaucoup plus cher qu’on ne l’imagine.</p>
          <p>ScanAdmin classe les cas d’usage selon leur volume, leur coût, leur niveau de répétition, leur risque et la facilité à vérifier ce que l’IA prépare.</p>
          <p>Le but est de trouver le premier test réaliste : une action courte, utile, mesurable et supervisée.</p>
        </div>
      </section>

      <section className="container premium-section">
        <div className="section-heading">
          <p className="section-kicker">Cas concrets</p>
          <h2>Les cas d’usage administratifs les plus adaptés aux PME.</h2>
          <p>Chaque cas ci-dessous indique le problème, l’agent adapté, ce que l’IA peut préparer et ce qui doit rester validé par l’humain.</p>
        </div>

        <div className="grid" style={{ marginTop: 26 }}>
          {useCases.map((item) => (
            <article key={item.title} className="card content-card">
              <div className="split-section" style={{ padding: 0 }}>
                <div>
                  <p className="section-kicker">{item.risk}</p>
                  <h2>{item.title}</h2>
                  <p><strong>Contexte :</strong> {item.context}</p>
                  <p><strong>Problème :</strong> {item.pain}</p>
                  <p><strong>Agent adapté :</strong> {item.agent}</p>
                  <p><strong>Validation humaine :</strong> {item.humanCheck}</p>
                </div>
                <div className="deliverable-preview" style={{ boxShadow: 'none' }}>
                  <div className="deliverable-header"><span>Ce que l’IA prépare</span><strong>Supervisé</strong></div>
                  {item.preparation.map((task) => (
                    <div key={task} className="deliverable-row"><span>{task}</span></div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="container premium-section">
        <div className="section-heading">
          <p className="section-kicker">Par secteur</p>
          <h2>Les cas d’usage varient selon le métier.</h2>
          <p>Une PME terrain n’a pas les mêmes tâches administratives qu’un cabinet de conseil ou une agence. C’est pour cela que ScanAdmin relie les agents aux usages réels.</p>
        </div>
        <div className="comparison-grid">
          {sectors.map(([sector, text]) => (
            <div key={sector} className="comparison-card muted-card">
              <h3>{sector}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container premium-section split-section reversed">
        <div className="deliverable-preview">
          <div className="deliverable-header"><span>Règles de décision</span><strong>ScanAdmin</strong></div>
          {decisionRules.map(([title, text]) => (
            <div key={title} className="deliverable-row">
              <strong>{title}</strong>
              <span>{text}</span>
            </div>
          ))}
        </div>
        <div>
          <p className="section-kicker">Priorisation</p>
          <h2>Le premier cas d’usage doit être choisi avec prudence.</h2>
          <p className="section-text">Un agent IA peut être impressionnant en démonstration, mais inutile en production si la tâche est trop rare, trop risquée ou impossible à vérifier rapidement.</p>
          <p className="section-text">ScanAdmin privilégie les cas où l’IA prépare un travail clair et où une personne peut valider sans perdre plus de temps qu’elle n’en gagne.</p>
        </div>
      </section>

      <section className="container premium-section comparison-section">
        <div className="section-heading">
          <p className="section-kicker">Différence</p>
          <h2>Ce que ScanAdmin évite.</h2>
        </div>
        <div className="comparison-grid">
          <div className="comparison-card muted-card"><h3>Automatiser trop tôt</h3><p>Lancer un outil avant d’avoir identifié le vrai coût administratif et le niveau de risque.</p></div>
          <div className="comparison-card highlight-card"><h3>Choisir le bon test</h3><p>Commencer par une tâche répétitive, mesurable, vérifiable et suffisamment coûteuse pour créer de la valeur.</p></div>
          <div className="comparison-card muted-card"><h3>Confondre préparation et décision</h3><p>L’IA peut préparer, classer ou résumer. La décision finale doit rester humaine.</p></div>
        </div>
      </section>

      <section className="container premium-final-cta">
        <p className="section-kicker">Votre cas d’usage</p>
        <h2>Quel cas d’usage IA mérite vraiment d’être testé chez vous ?</h2>
        <p>Le scan gratuit mesure vos tâches administratives répétitives et vous aide à repérer les cas d’usage qui valent une analyse.</p>
        <div className="hero-actions center-actions">
          <Link className="button" href="/scan">Lancer mon scan gratuit</Link>
          <Link className="ghost-button" href="/analyse-personnalisee">Voir l’analyse personnalisée</Link>
        </div>
      </section>
    </main>
  );
}
