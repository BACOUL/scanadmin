import Link from 'next/link';

const canDo = [
  'Préparer une synthèse des contraintes de planning.',
  'Repérer les informations manquantes avant organisation.',
  'Transformer des demandes en liste d’actions à planifier.',
  'Préparer un brouillon de message de confirmation.',
  'Aider à comparer plusieurs demandes simples.',
];

const mustNotDo = [
  'Modifier seul un planning validé.',
  'Confirmer une intervention ou un rendez-vous sans validation.',
  'Promettre un horaire, une disponibilité ou une ressource.',
  'Ignorer les contraintes humaines, terrain ou contractuelles.',
  'Remplacer le responsable opérationnel du planning.',
];

const testSteps = [
  ['Jour 1', 'Choisir 10 demandes de planning simples ou récurrentes.'],
  ['Jours 2 à 4', 'Définir les contraintes à vérifier : date, durée, personne, lieu, priorité, confirmation client.'],
  ['Jours 5 à 10', 'Faire préparer les synthèses par l’IA, puis valider chaque proposition.'],
  ['Jours 11 à 14', 'Mesurer le temps gagné et les erreurs évitées avant toute généralisation.'],
];

const faq = [
  ['L’IA peut-elle gérer un planning seule ?', 'Non. Elle peut préparer une synthèse ou une proposition, mais la validation doit rester humaine.'],
  ['Quels plannings tester en premier ?', 'Les demandes simples, répétitives et faciles à vérifier : rendez-vous, interventions courtes, confirmations ou contraintes à résumer.'],
  ['Quel est le risque principal ?', 'Confirmer une disponibilité ou une intervention alors qu’une contrainte terrain n’a pas été prise en compte.'],
  ['Pourquoi rester prudent ?', 'Le planning touche aux personnes, aux clients, aux délais et parfois aux engagements opérationnels.'],
];

export const metadata = {
  title: 'Agent IA pour planning : préparer sans confirmer seul | ScanAdmin',
  description: 'Comment utiliser un agent IA pour préparer des tâches de planning en PME : contraintes, synthèse, messages de confirmation et validation humaine.',
};

export default function PlanningTaskPage() {
  return (
    <main>
      <section className="premium-hero">
        <div className="container hero-shell">
          <div className="hero-copy">
            <p className="badge">Tâche administrative IA</p>
            <h1>Agent IA pour planning : préparer les contraintes sans confirmer seul.</h1>
            <p className="hero-subtitle">Le planning peut vite consommer du temps. L’IA peut résumer les demandes et préparer une proposition, mais une personne doit valider les disponibilités, priorités et engagements.</p>
            <div className="hero-actions">
              <Link className="button" href="/scan">Estimer mon coût administratif</Link>
              <Link className="ghost-button" href="/taches">Voir toutes les tâches</Link>
            </div>
            <p className="hero-note">Bon usage : aide à la préparation, pas validation automatique du planning.</p>
          </div>

          <div className="report-preview">
            <div className="report-topline"><span>Cas d’usage</span><strong>Planning</strong></div>
            <div className="report-metric-main"><span>Premier test</span><strong>10 demandes</strong></div>
            <div className="metric-grid">
              <div><span>Risque</span><strong>Moyen</strong></div>
              <div><span>Contrôle</span><strong>Opérationnel</strong></div>
            </div>
            <div className="priority-list">
              <p>À retenir</p>
              <span>Résumer les contraintes</span>
              <span>Préparer une proposition</span>
              <span>Valider avant confirmation</span>
            </div>
          </div>
        </div>
      </section>

      <section className="container premium-section split-section">
        <div>
          <p className="section-kicker">Réponse courte</p>
          <h2>L’IA peut aider au planning, mais elle ne doit pas confirmer une disponibilité seule.</h2>
        </div>
        <div className="text-stack">
          <p>Les demandes de planning contiennent souvent des contraintes simples : date, lieu, durée, personne disponible, priorité ou confirmation client.</p>
          <p>L’IA peut aider à extraire ces éléments et préparer une proposition de réponse ou de synthèse.</p>
          <p>Mais elle ne connaît pas toujours les contraintes terrain. La validation opérationnelle reste indispensable.</p>
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
          <h2>Tester un agent IA planning pendant 14 jours.</h2>
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
          <h2>Questions fréquentes sur le planning avec IA.</h2>
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
        <h2>Votre planning vous coûte-t-il trop de temps administratif ?</h2>
        <p>Le scan gratuit aide à comparer le planning avec d’autres tâches répétitives : relances, emails, documents ou devis.</p>
        <div className="hero-actions center-actions">
          <Link className="button" href="/scan">Lancer mon scan gratuit</Link>
          <Link className="ghost-button" href="/taches">Retour aux tâches</Link>
        </div>
      </section>
    </main>
  );
}
