import Link from 'next/link';

const canDo = [
  'Résumer l’historique d’un dossier client.',
  'Lister les pièces ou informations manquantes.',
  'Préparer une fiche de suivi simple.',
  'Mettre en évidence les prochaines actions à vérifier.',
  'Regrouper les échanges importants dans une synthèse lisible.',
];

const mustNotDo = [
  'Décider qu’un dossier est complet sans contrôle humain.',
  'Modifier une obligation client ou contractuelle.',
  'Envoyer une décision sensible sans validation.',
  'Remplacer la personne responsable du dossier.',
  'Inventer une pièce, une date ou une information absente.',
];

const testSteps = [
  ['Jour 1', 'Choisir 10 dossiers simples avec plusieurs échanges ou pièces à suivre.'],
  ['Jours 2 à 4', 'Définir les rubriques fixes : contexte, pièces reçues, pièces manquantes, prochaine action.'],
  ['Jours 5 à 10', 'Faire préparer les fiches de suivi par l’IA, puis contrôler chaque information.'],
  ['Jours 11 à 14', 'Comparer le temps gagné, les oublis évités et le temps de relecture nécessaire.'],
];

const faq = [
  ['L’IA peut-elle gérer un dossier client seule ?', 'Non. Elle peut préparer une synthèse ou une fiche de suivi, mais une personne doit valider les informations et les décisions.'],
  ['Quels dossiers tester en premier ?', 'Les dossiers simples, répétitifs, avec des pièces clairement identifiables et peu de décisions sensibles.'],
  ['Quel est le risque principal ?', 'Croire qu’un dossier est complet alors qu’une pièce, une validation ou une information importante manque encore.'],
  ['Comment mesurer le gain ?', 'Comparer le temps passé à retrouver les informations avant et après IA, en ajoutant le temps de contrôle humain.'],
];

export const metadata = {
  title: 'Agent IA pour dossiers clients : suivre sans décider seul | ScanAdmin',
  description: 'Comment utiliser un agent IA pour préparer le suivi de dossiers clients en PME : synthèse, pièces manquantes, prochaines actions et validation humaine.',
};

export default function DossiersClientsTaskPage() {
  return (
    <main>
      <section className="premium-hero">
        <div className="container hero-shell">
          <div className="hero-copy">
            <p className="badge">Tâche administrative IA</p>
            <h1>Agent IA pour dossiers clients : retrouver l’essentiel sans perdre le contrôle.</h1>
            <p className="hero-subtitle">Les dossiers clients accumulent échanges, documents, validations et prochaines actions. L’IA peut préparer une synthèse, mais la complétude et les décisions doivent rester humaines.</p>
            <div className="hero-actions">
              <Link className="button" href="/scan">Estimer mon coût administratif</Link>
              <Link className="ghost-button" href="/taches">Voir toutes les tâches</Link>
            </div>
            <p className="hero-note">Bon usage : fiche de suivi supervisée, pas décision autonome.</p>
          </div>

          <div className="report-preview">
            <div className="report-topline"><span>Cas d’usage</span><strong>Dossiers clients</strong></div>
            <div className="report-metric-main"><span>Premier test</span><strong>10 dossiers</strong></div>
            <div className="metric-grid">
              <div><span>Risque</span><strong>Moyen</strong></div>
              <div><span>Contrôle</span><strong>Complétude</strong></div>
            </div>
            <div className="priority-list">
              <p>À retenir</p>
              <span>Résumer</span>
              <span>Lister les manques</span>
              <span>Valider humainement</span>
            </div>
          </div>
        </div>
      </section>

      <section className="container premium-section split-section">
        <div>
          <p className="section-kicker">Réponse courte</p>
          <h2>Oui, l’IA peut aider au suivi de dossiers si elle reste une aide à la synthèse.</h2>
        </div>
        <div className="text-stack">
          <p>Un dossier client demande souvent de retrouver rapidement l’historique, les pièces reçues, les éléments manquants et la prochaine action.</p>
          <p>L’IA peut réduire le temps de lecture et préparer une fiche claire, surtout quand les dossiers suivent une structure répétitive.</p>
          <p>Mais elle ne doit pas conclure seule qu’un dossier est complet ou qu’une décision peut être prise.</p>
        </div>
      </section>

      <section className="container premium-section comparison-section">
        <div className="section-heading">
          <p className="section-kicker">Garde-fous</p>
          <h2>Ce que l’agent IA peut faire, et ce qu’il ne doit pas faire.</h2>
        </div>
        <div className="comparison-grid">
          <div className="comparison-card highlight-card">
            <h3>Peut faire</h3>
            {canDo.map((item) => <p key={item}>• {item}</p>)}
          </div>
          <div className="comparison-card muted-card">
            <h3>Ne doit pas faire</h3>
            {mustNotDo.map((item) => <p key={item}>• {item}</p>)}
          </div>
        </div>
      </section>

      <section className="container premium-section">
        <div className="section-heading">
          <p className="section-kicker">Plan de test</p>
          <h2>Tester un agent IA dossiers clients pendant 14 jours.</h2>
        </div>
        <div className="process-grid">
          {testSteps.map(([period, text]) => (
            <div key={period} className="process-card"><span>{period}</span><p>{text}</p></div>
          ))}
        </div>
      </section>

      <section className="container premium-section">
        <div className="section-heading">
          <p className="section-kicker">FAQ</p>
          <h2>Questions fréquentes sur les dossiers clients avec IA.</h2>
        </div>
        <div className="comparison-grid">
          {faq.map(([question, answer]) => (
            <div key={question} className="comparison-card muted-card">
              <h3>{question}</h3>
              <p>{answer}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container premium-final-cta">
        <p className="section-kicker">Diagnostic ScanAdmin</p>
        <h2>Vos dossiers clients prennent-ils trop de temps à suivre ?</h2>
        <p>Le scan gratuit estime le poids de vos tâches de suivi et aide à décider si ce cas mérite un test IA supervisé.</p>
        <div className="hero-actions center-actions">
          <Link className="button" href="/scan">Lancer mon scan gratuit</Link>
          <Link className="ghost-button" href="/taches">Retour aux tâches</Link>
        </div>
      </section>
    </main>
  );
}
