import Link from 'next/link';

const canDo = [
  'Résumer un échange email long ou répétitif.',
  'Classer les demandes par priorité ou par type.',
  'Préparer une réponse claire à partir du contexte fourni.',
  'Signaler les informations manquantes avant réponse.',
  'Transformer un email brouillon en message professionnel.',
];

const mustNotDo = [
  'Envoyer un email externe sans validation.',
  'Prendre une décision commerciale ou juridique.',
  'Répondre à un sujet sensible sans contexte complet.',
  'Inventer une information absente du dossier.',
  'S’engager sur un prix, un délai ou une condition non validée.',
];

const testSteps = [
  ['Jour 1', 'Repérer les 20 emails répétitifs les plus fréquents.'],
  ['Jours 2 à 4', 'Créer des catégories : demande simple, urgence, document manquant, réponse commerciale.'],
  ['Jours 5 à 10', 'Faire préparer les réponses par l’IA, puis relire avant envoi.'],
  ['Jours 11 à 14', 'Comparer le temps gagné, les corrections nécessaires et les erreurs évitées.'],
];

const faq = [
  ['L’IA peut-elle gérer une boîte mail seule ?', 'Non au départ. Elle peut aider à trier, résumer et préparer, mais la validation humaine reste nécessaire.'],
  ['Quels emails tester en premier ?', 'Les demandes répétitives, les réponses standards, les demandes de document et les messages faciles à vérifier.'],
  ['Quel est le risque principal ?', 'Répondre trop vite avec une information incomplète, un mauvais ton ou un engagement non validé.'],
  ['Comment éviter les erreurs ?', 'Limiter le test aux emails simples, relire chaque réponse et conserver une règle claire : aucune décision autonome.'],
];

export const metadata = {
  title: 'Agent IA pour emails administratifs : trier et répondre avec contrôle | ScanAdmin',
  description: 'Comment utiliser un agent IA pour résumer, classer et préparer des réponses aux emails administratifs en PME, sans envoi autonome.',
};

export default function EmailsAdministratifsTaskPage() {
  return (
    <main>
      <section className="premium-hero">
        <div className="container hero-shell">
          <div className="hero-copy">
            <p className="badge">Tâche administrative IA</p>
            <h1>Agent IA pour emails administratifs : traiter plus vite sans répondre à l’aveugle.</h1>
            <p className="hero-subtitle">L’IA peut aider à résumer, classer et préparer des réponses aux emails répétitifs. Mais les messages externes doivent rester validés par une personne.</p>
            <div className="hero-actions">
              <Link className="button" href="/scan">Estimer mon coût administratif</Link>
              <Link className="ghost-button" href="/taches">Voir toutes les tâches</Link>
            </div>
            <p className="hero-note">Bon usage : assistance à la préparation, pas boîte mail autonome.</p>
          </div>

          <div className="report-preview">
            <div className="report-topline"><span>Cas d’usage</span><strong>Emails</strong></div>
            <div className="report-metric-main"><span>Premier filtre</span><strong>Répétitif</strong></div>
            <div className="metric-grid">
              <div><span>Risque</span><strong>Moyen</strong></div>
              <div><span>Contrôle</span><strong>Relecture</strong></div>
            </div>
            <div className="priority-list">
              <p>À retenir</p>
              <span>Résumer</span>
              <span>Classer</span>
              <span>Préparer la réponse</span>
            </div>
          </div>
        </div>
      </section>

      <section className="container premium-section split-section">
        <div>
          <p className="section-kicker">Réponse courte</p>
          <h2>Les emails administratifs sont un bon cas IA quand ils sont fréquents et faciles à vérifier.</h2>
        </div>
        <div className="text-stack">
          <p>Dans beaucoup de PME, une partie de la charge administrative vient des emails : demandes clients, pièces manquantes, questions fournisseurs, relances internes ou informations à reformuler.</p>
          <p>L’IA peut réduire le temps de lecture et de rédaction, surtout quand les réponses suivent souvent la même logique.</p>
          <p>Le risque apparaît quand l’IA répond sans connaître le contexte complet. La supervision humaine reste donc indispensable.</p>
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
          <h2>Tester un agent IA email pendant 14 jours.</h2>
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
          <h2>Questions fréquentes sur les emails avec IA.</h2>
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
        <h2>Votre boîte mail cache-t-elle du temps administratif perdu ?</h2>
        <p>Le scan gratuit estime le poids des emails répétitifs dans votre charge administrative et indique si ce cas mérite un test IA.</p>
        <div className="hero-actions center-actions">
          <Link className="button" href="/scan">Lancer mon scan gratuit</Link>
          <Link className="ghost-button" href="/taches">Retour aux tâches</Link>
        </div>
      </section>
    </main>
  );
}
