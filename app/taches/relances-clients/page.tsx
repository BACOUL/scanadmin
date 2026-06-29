import Link from 'next/link';

const canDo = [
  'Préparer une relance courte après un devis sans réponse.',
  'Lister les documents ou informations manquants.',
  'Adapter le ton selon le contexte client ou prospect.',
  'Résumer l’historique avant de relancer.',
  'Proposer une relance simple à valider avant envoi.',
];

const mustNotDo = [
  'Envoyer une relance sans validation humaine.',
  'Modifier une offre commerciale sans accord.',
  'Faire une promesse de délai ou de prix.',
  'Relancer un client sensible sans contexte.',
  'Insister automatiquement si la relation commerciale demande de la prudence.',
];

const testSteps = [
  ['Jour 1', 'Choisir 10 relances types : devis en attente, documents manquants, retour client attendu.'],
  ['Jours 2 à 4', 'Créer 3 modèles de ton : neutre, cordial, urgent mais professionnel.'],
  ['Jours 5 à 10', 'Faire préparer les relances par l’IA, puis valider chaque message.'],
  ['Jours 11 à 14', 'Mesurer le temps gagné et vérifier si les réponses clients s’améliorent.'],
];

const faq = [
  ['L’IA peut-elle relancer automatiquement les clients ?', 'Non. Le bon usage est de préparer une proposition de message, puis de laisser une personne valider avant envoi.'],
  ['Quels cas tester en premier ?', 'Les relances simples : devis sans réponse, document manquant, confirmation attendue ou rendez-vous à valider.'],
  ['Quel est le risque principal ?', 'Un ton mal adapté, une relance trop insistante ou une promesse commerciale non validée.'],
  ['Comment mesurer le gain ?', 'Comparer le temps passé à préparer les relances avant et après IA, en gardant la relecture humaine.'],
];

export const metadata = {
  title: 'Agent IA pour relances clients : préparer sans envoyer seul | ScanAdmin',
  description: 'Comment utiliser un agent IA pour préparer des relances clients et prospects en PME, avec validation humaine, limites et plan de test.',
};

export default function RelancesClientsTaskPage() {
  return (
    <main>
      <section className="premium-hero">
        <div className="container hero-shell">
          <div className="hero-copy">
            <p className="badge">Tâche administrative IA</p>
            <h1>Agent IA pour relances clients : gagner du temps sans abîmer la relation.</h1>
            <p className="hero-subtitle">Les relances sont souvent simples mais nombreuses. L’IA peut préparer un message clair, mais l’humain doit valider le contexte, le ton et le moment d’envoi.</p>
            <div className="hero-actions">
              <Link className="button" href="/scan">Estimer mon coût administratif</Link>
              <Link className="ghost-button" href="/taches">Voir toutes les tâches</Link>
            </div>
            <p className="hero-note">Principe ScanAdmin : l’IA prépare, l’humain valide.</p>
          </div>

          <div className="report-preview">
            <div className="report-topline"><span>Cas d’usage</span><strong>Relances</strong></div>
            <div className="report-metric-main"><span>Bon premier test</span><strong>10 relances</strong></div>
            <div className="metric-grid">
              <div><span>Risque</span><strong>Faible</strong></div>
              <div><span>Contrôle</span><strong>Ton</strong></div>
            </div>
            <div className="priority-list">
              <p>À retenir</p>
              <span>Relire avant envoi</span>
              <span>Adapter au client</span>
              <span>Mesurer le gain réel</span>
            </div>
          </div>
        </div>
      </section>

      <section className="container premium-section split-section">
        <div>
          <p className="section-kicker">Réponse courte</p>
          <h2>Oui, l’IA est adaptée aux relances simples, si elle reste supervisée.</h2>
        </div>
        <div className="text-stack">
          <p>Une relance client est souvent répétitive : rappeler un devis, demander une pièce, confirmer une information ou relancer une réponse attendue.</p>
          <p>L’IA peut préparer une première version plus vite, mais elle ne connaît pas toujours la relation commerciale, l’urgence réelle ou la sensibilité du dossier.</p>
          <p>Le bon test consiste à faire préparer les messages, puis à valider chaque relance avant envoi.</p>
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
          <h2>Tester les relances IA pendant 14 jours.</h2>
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
          <h2>Questions fréquentes sur les relances avec IA.</h2>
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
        <h2>Vos relances vous font-elles perdre trop de temps ?</h2>
        <p>Le scan gratuit estime le coût de vos tâches répétitives et indique si les relances font partie des premiers cas IA à tester.</p>
        <div className="hero-actions center-actions">
          <Link className="button" href="/scan">Lancer mon scan gratuit</Link>
          <Link className="ghost-button" href="/taches">Retour aux tâches</Link>
        </div>
      </section>
    </main>
  );
}
