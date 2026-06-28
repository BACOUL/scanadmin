import Link from 'next/link';

const canDo = [
  'Résumer une demande client reçue par email ou formulaire.',
  'Repérer les informations manquantes avant de préparer un devis.',
  'Préparer une première trame de devis simple.',
  'Proposer un email de réponse clair et professionnel.',
  'Classer les demandes simples, incomplètes ou à vérifier.',
];

const mustNotDo = [
  'Fixer seul un prix final.',
  'Envoyer automatiquement le devis au client.',
  'Promettre un délai d’intervention sans validation.',
  'Accepter un chantier ou engager l’entreprise.',
  'Modifier des conditions commerciales sans contrôle humain.',
];

const testSteps = [
  ['Jour 1', 'Choisir 5 anciens devis simples et noter le temps réellement passé.'],
  ['Jours 2 à 3', 'Créer une trame de demande client avec les informations obligatoires.'],
  ['Jours 4 à 10', 'Tester l’agent IA uniquement sur des devis simples et relus.'],
  ['Jours 11 à 14', 'Comparer le temps gagné, les erreurs et les corrections nécessaires.'],
];

const faq = [
  ['L’IA peut-elle faire un devis automatiquement ?', 'Elle peut préparer une première version, mais elle ne doit pas fixer seule le prix final ni envoyer le devis sans validation humaine.'],
  ['Quels devis tester en premier ?', 'Les devis simples, répétitifs, avec des informations claires et peu de risque commercial. Les gros chantiers ou dossiers complexes doivent rester hors test au départ.'],
  ['Quel est le risque principal ?', 'Le risque principal est une erreur sur le prix, le délai, le périmètre des travaux ou une formulation trop engageante pour le client.'],
  ['Comment mesurer le gain réel ?', 'Il faut comparer le temps moyen avant IA et le temps moyen avec IA plus relecture humaine, sur 10 à 15 demandes simples.'],
];

export const metadata = {
  title: 'Agent IA pour devis : automatiser la préparation sans perdre le contrôle',
  description: 'Comment utiliser un agent IA pour préparer des devis simples en PME ou artisanat, avec validation humaine, limites, risques et plan de test 14 jours.',
};

export default function DevisTaskPage() {
  return (
    <main>
      <section className="premium-hero">
        <div className="container hero-shell">
          <div className="hero-copy">
            <p className="badge">Tâche administrative IA</p>
            <h1>Agent IA pour devis : préparer plus vite, sans envoyer automatiquement.</h1>
            <p className="hero-subtitle">Un agent IA peut aider une PME ou un artisan à préparer une première version de devis simple. Mais le prix, les délais et l’envoi doivent rester validés par un humain.</p>
            <div className="hero-actions">
              <Link className="button" href="/scan">Estimer mon coût administratif</Link>
              <Link className="ghost-button" href="/exemple">Voir un exemple de livrable</Link>
            </div>
            <p className="hero-note">Principe ScanAdmin : l’IA prépare, l’humain valide. Aucun gain n’est garanti sans test réel.</p>
          </div>

          <div className="report-preview">
            <div className="report-topline"><span>Cas d’usage</span><strong>Devis</strong></div>
            <div className="report-metric-main"><span>Bon premier test</span><strong>7 à 14 jours</strong></div>
            <div className="metric-grid">
              <div><span>Risque</span><strong>Moyen</strong></div>
              <div><span>Contrôle</span><strong>Humain</strong></div>
            </div>
            <div className="priority-list">
              <p>À retenir</p>
              <span>Préparer, pas décider</span>
              <span>Relire chaque devis</span>
              <span>Mesurer avant généralisation</span>
            </div>
          </div>
        </div>
      </section>

      <section className="container premium-section split-section">
        <div>
          <p className="section-kicker">Réponse courte</p>
          <h2>Oui, l’IA peut aider à préparer des devis, mais pas remplacer la validation.</h2>
        </div>
        <div className="text-stack">
          <p>Le bon usage n’est pas de laisser l’IA vendre à votre place. Le bon usage est de lui faire préparer un brouillon structuré : résumé de la demande, points manquants, trame de devis et message de réponse.</p>
          <p>Le dirigeant, l’assistante ou la personne compétente doit ensuite vérifier le prix, la TVA, les délais, les matériaux, la marge, les conditions et le ton commercial.</p>
          <p>Cette approche permet de tester un gain de temps sans prendre le risque d’un devis faux ou trop engageant.</p>
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
          <p className="section-kicker">Matrice de décision</p>
          <h2>Quels devis tester en premier ?</h2>
        </div>
        <div className="card content-card" style={{ overflowX: 'auto' }}>
          <table className="premium-table">
            <thead><tr><th>Type de devis</th><th>Adapté au test IA ?</th><th>Pourquoi</th></tr></thead>
            <tbody>
              <tr><td>Devis simple et répétitif</td><td><strong>Oui</strong></td><td>Structure connue, risque maîtrisable, relecture rapide.</td></tr>
              <tr><td>Demande incomplète</td><td><strong>Oui, en préparation</strong></td><td>L’IA peut lister les questions à poser au client.</td></tr>
              <tr><td>Chantier complexe</td><td><strong>Non au départ</strong></td><td>Trop de paramètres techniques et commerciaux.</td></tr>
              <tr><td>Prix incertain</td><td><strong>Prudence</strong></td><td>L’humain doit décider du prix, de la marge et des conditions.</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="container premium-section">
        <div className="section-heading">
          <p className="section-kicker">Plan de test</p>
          <h2>Tester un agent IA devis pendant 14 jours.</h2>
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
          <h2>Questions fréquentes sur les devis avec IA.</h2>
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
        <h2>Vos devis vous coûtent-ils trop de temps chaque mois ?</h2>
        <p>Le scan gratuit estime le coût de vos tâches administratives répétitives et indique si la préparation de devis est une priorité à tester avec l’IA.</p>
        <div className="hero-actions center-actions">
          <Link className="button" href="/scan">Lancer mon scan gratuit</Link>
          <Link className="ghost-button" href="/analyse-personnalisee">Voir l’analyse personnalisée</Link>
        </div>
      </section>
    </main>
  );
}
