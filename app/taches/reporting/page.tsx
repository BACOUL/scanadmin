import Link from 'next/link';

const canDo = [
  'Résumer des informations déjà disponibles.',
  'Préparer un compte rendu interne structuré.',
  'Mettre en évidence les points importants à suivre.',
  'Transformer des notes brutes en synthèse claire.',
  'Préparer une trame de reporting hebdomadaire ou mensuel.',
];

const mustNotDo = [
  'Inventer des chiffres ou compléter des données absentes.',
  'Interpréter seul des résultats financiers sensibles.',
  'Diffuser un reporting externe sans validation.',
  'Remplacer le contrôle des données sources.',
  'Présenter une conclusion comme certaine si les données sont incomplètes.',
];

const testSteps = [
  ['Jour 1', 'Choisir 3 reportings ou comptes rendus récurrents.'],
  ['Jours 2 à 4', 'Définir les données sources et les rubriques obligatoires.'],
  ['Jours 5 à 10', 'Faire préparer les synthèses par l’IA puis contrôler les données.'],
  ['Jours 11 à 14', 'Comparer le temps gagné et les corrections nécessaires.'],
];

const faq = [
  ['L’IA peut-elle produire un reporting fiable ?', 'Elle peut préparer une synthèse, mais les chiffres et conclusions doivent être vérifiés par une personne.'],
  ['Quels reportings tester en premier ?', 'Les comptes rendus internes, points hebdomadaires, synthèses commerciales simples ou suivis d’activité non sensibles.'],
  ['Quel est le risque principal ?', 'Une erreur d’interprétation, une donnée inventée ou une conclusion trop forte à partir d’informations partielles.'],
  ['Comment mesurer le gain ?', 'Comparer le temps passé à structurer le reporting avant et après IA, en ajoutant le temps de contrôle humain.'],
];

export const metadata = {
  title: 'Agent IA pour reporting : préparer des synthèses sans inventer | ScanAdmin',
  description: 'Comment utiliser un agent IA pour préparer des reportings, comptes rendus et synthèses internes en PME, avec contrôle humain des données.',
};

export default function ReportingTaskPage() {
  return (
    <main>
      <section className="premium-hero">
        <div className="container hero-shell">
          <div className="hero-copy">
            <p className="badge">Tâche administrative IA</p>
            <h1>Agent IA pour reporting : préparer des synthèses plus vite, sans inventer les chiffres.</h1>
            <p className="hero-subtitle">Le reporting est un bon cas IA quand les données existent déjà. L’IA peut structurer et résumer, mais l’humain doit contrôler les sources et les conclusions.</p>
            <div className="hero-actions">
              <Link className="button" href="/scan">Estimer mon coût administratif</Link>
              <Link className="ghost-button" href="/taches">Voir toutes les tâches</Link>
            </div>
            <p className="hero-note">Bon usage : synthèse supervisée, pas analyse autonome de données sensibles.</p>
          </div>

          <div className="report-preview">
            <div className="report-topline"><span>Cas d’usage</span><strong>Reporting</strong></div>
            <div className="report-metric-main"><span>Premier test</span><strong>3 rapports</strong></div>
            <div className="metric-grid">
              <div><span>Risque</span><strong>Moyen</strong></div>
              <div><span>Contrôle</span><strong>Données</strong></div>
            </div>
            <div className="priority-list">
              <p>À retenir</p>
              <span>Sources fournies</span>
              <span>Synthèse claire</span>
              <span>Validation humaine</span>
            </div>
          </div>
        </div>
      </section>

      <section className="container premium-section split-section">
        <div>
          <p className="section-kicker">Réponse courte</p>
          <h2>Oui, l’IA peut aider au reporting si les données sont fournies et vérifiées.</h2>
        </div>
        <div className="text-stack">
          <p>Un reporting récurrent demande souvent de rassembler des informations, structurer une synthèse et faire ressortir les points à suivre.</p>
          <p>L’IA peut accélérer cette préparation quand les données sources sont claires, mais elle ne doit pas remplacer le contrôle des chiffres.</p>
          <p>Le bon test consiste à lui confier la mise en forme et la synthèse, puis à vérifier chaque donnée avant diffusion.</p>
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
          <h2>Tester un agent IA reporting pendant 14 jours.</h2>
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
          <h2>Questions fréquentes sur le reporting avec IA.</h2>
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
        <h2>Vos synthèses internes prennent-elles trop de temps ?</h2>
        <p>Le scan gratuit estime le poids de vos tâches de reporting et indique si ce cas mérite un test IA supervisé.</p>
        <div className="hero-actions center-actions">
          <Link className="button" href="/scan">Lancer mon scan gratuit</Link>
          <Link className="ghost-button" href="/taches">Retour aux tâches</Link>
        </div>
      </section>
    </main>
  );
}
