import Link from 'next/link';

const canDo = [
  'Identifier le type d’un document entrant.',
  'Résumer le contenu utile pour l’équipe.',
  'Extraire les informations importantes à vérifier.',
  'Signaler les pièces manquantes ou incohérentes.',
  'Proposer un classement ou une prochaine action.',
];

const mustNotDo = [
  'Valider seul un document sensible.',
  'Décider qu’un dossier est complet sans contrôle.',
  'Supprimer ou archiver définitivement sans validation.',
  'Interpréter un document juridique ou financier complexe sans revue humaine.',
  'Créer une information absente du document.',
];

const testSteps = [
  ['Jour 1', 'Choisir 20 documents récents : pièces jointes, bons, justificatifs, demandes clients.'],
  ['Jours 2 à 4', 'Définir les catégories de classement et les informations à extraire.'],
  ['Jours 5 à 10', 'Faire résumer et classer les documents par l’IA avec contrôle humain.'],
  ['Jours 11 à 14', 'Mesurer le temps gagné et les erreurs de classement évitées.'],
];

const faq = [
  ['L’IA peut-elle classer tous les documents ?', 'Elle peut proposer un classement, mais une personne doit valider les documents importants ou sensibles.'],
  ['Quels documents tester en premier ?', 'Les pièces simples et fréquentes : bons de commande, justificatifs, demandes client, documents chantier ou formulaires entrants.'],
  ['Quel est le risque principal ?', 'Classer un document au mauvais endroit, oublier une information importante ou croire un dossier complet alors qu’il ne l’est pas.'],
  ['Pourquoi commencer par un test court ?', 'Parce que le gain dépend beaucoup de la qualité des documents, des catégories internes et du temps de relecture.'],
];

export const metadata = {
  title: 'Agent IA pour documents entrants : classer et résumer avec contrôle | ScanAdmin',
  description: 'Comment utiliser un agent IA pour trier, résumer et classer les documents entrants en PME, avec validation humaine et limites claires.',
};

export default function DocumentsEntrantsTaskPage() {
  return (
    <main>
      <section className="premium-hero">
        <div className="container hero-shell">
          <div className="hero-copy">
            <p className="badge">Tâche administrative IA</p>
            <h1>Agent IA pour documents entrants : trier plus vite sans perdre le contrôle.</h1>
            <p className="hero-subtitle">Pièces jointes, bons de commande, justificatifs, documents chantier : l’IA peut aider à lire, résumer et classer, mais les décisions doivent rester humaines.</p>
            <div className="hero-actions">
              <Link className="button" href="/scan">Estimer mon coût administratif</Link>
              <Link className="ghost-button" href="/taches">Voir toutes les tâches</Link>
            </div>
            <p className="hero-note">Bon usage : pré-tri et résumé, pas validation automatique.</p>
          </div>

          <div className="report-preview">
            <div className="report-topline"><span>Cas d’usage</span><strong>Documents</strong></div>
            <div className="report-metric-main"><span>Premier test</span><strong>20 pièces</strong></div>
            <div className="metric-grid">
              <div><span>Risque</span><strong>Moyen</strong></div>
              <div><span>Contrôle</span><strong>Classement</strong></div>
            </div>
            <div className="priority-list">
              <p>À retenir</p>
              <span>Identifier</span>
              <span>Résumer</span>
              <span>Signaler les manques</span>
            </div>
          </div>
        </div>
      </section>

      <section className="container premium-section split-section">
        <div>
          <p className="section-kicker">Réponse courte</p>
          <h2>Les documents entrants sont adaptés à l’IA quand le classement est clair et vérifiable.</h2>
        </div>
        <div className="text-stack">
          <p>Beaucoup de temps administratif disparaît dans la lecture des pièces jointes, le tri des documents, la recherche d’informations et le suivi des pièces manquantes.</p>
          <p>L’IA peut préparer une synthèse et proposer un classement, ce qui réduit le temps de lecture.</p>
          <p>Mais un document peut engager l’entreprise. Le classement et les décisions doivent donc être contrôlés avant utilisation.</p>
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
          <h2>Tester un agent IA documents pendant 14 jours.</h2>
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
          <h2>Questions fréquentes sur les documents avec IA.</h2>
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
        <h2>Vos documents entrants prennent-ils trop de temps à traiter ?</h2>
        <p>Le scan gratuit estime le poids de vos tâches documentaires et indique si le tri de documents mérite un test IA supervisé.</p>
        <div className="hero-actions center-actions">
          <Link className="button" href="/scan">Lancer mon scan gratuit</Link>
          <Link className="ghost-button" href="/taches">Retour aux tâches</Link>
        </div>
      </section>
    </main>
  );
}
