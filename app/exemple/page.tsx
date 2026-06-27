import Link from 'next/link';

const keyMetrics = [
  ['Temps administratif répétitif', '79 h / mois'],
  ['Coût mensuel estimé', '2 373 €'],
  ['Coût annuel estimé', '28 476 €'],
  ['Temps potentiellement récupérable', '26 à 43 h / mois'],
  ['Priorité principale', 'Devis simples'],
  ['Premier agent recommandé', 'Agent IA devis supervisé'],
];

const taskBreakdown = [
  ['Devis simples et demandes entrantes', '24 h / mois', 'Très élevé'],
  ['Relances clients / documents manquants', '18 h / mois', 'Élevé'],
  ['Classement documents / pièces jointes', '15 h / mois', 'Élevé'],
  ['Factures / suivi administratif', '12 h / mois', 'Moyen'],
  ['Reporting / synthèses internes', '10 h / mois', 'Moyen'],
];

const matrix = [
  ['Devis simples', 'Élevé', 'Élevée', 'Moyen', 'Bonne', 'Tester en premier'],
  ['Relances clients', 'Moyen', 'Élevée', 'Faible', 'Très bonne', 'Tester ensuite'],
  ['Documents entrants', 'Moyen', 'Élevée', 'Faible', 'Bonne', 'Automatisable partiellement'],
  ['Factures', 'Moyen', 'Moyenne', 'Élevé', 'Moyenne', 'Prudence'],
  ['Reporting', 'Faible', 'Moyenne', 'Faible', 'Bonne', 'Non prioritaire'],
];

const testPlan = [
  ['Jours 1 à 2', 'Sélectionner 10 à 20 demandes de devis simples déjà traitées.'],
  ['Jours 3 à 5', 'Tester l’agent IA sur ces demandes et comparer avec les réponses réellement envoyées.'],
  ['Jours 6 à 10', 'Utiliser l’agent sur de nouvelles demandes, uniquement en préparation interne.'],
  ['Jours 11 à 14', 'Mesurer le temps gagné, les erreurs, les corrections nécessaires et décider si le test mérite d’être prolongé.'],
];

export const metadata = {
  title: 'Exemple de rapport ScanAdmin | Diagnostic IA administratif PME',
  description: 'Exemple de rapport ScanAdmin : coût administratif, priorités, matrice de décision, agent IA recommandé et plan de test supervisé.',
};

export default function Page() {
  return (
    <main>
      <section className="premium-hero">
        <div className="container hero-shell">
          <div className="hero-copy">
            <p className="badge">Exemple de rapport</p>
            <h1>Voici ce qu’un dirigeant doit comprendre après un scan ScanAdmin.</h1>
            <p className="hero-subtitle">Un bon rapport ne se contente pas d’afficher un score. Il doit chiffrer le problème, classer les priorités, recommander une première action et préciser les limites.</p>
            <div className="hero-actions">
              <Link className="button" href="/scan">Lancer mon scan gratuit</Link>
              <Link className="ghost-button" href="/analyse-personnalisee">Voir l’analyse personnalisée</Link>
            </div>
            <p className="hero-note">Exemple fictif basé sur une PME type. Les résultats réels dépendent de l’organisation, des réponses et de la validation humaine.</p>
          </div>

          <div className="report-preview">
            <div className="report-topline"><span>PME BTP — 12 salariés</span><strong>Exemple</strong></div>
            <div className="report-metric-main"><span>Charge administrative répétitive</span><strong>79 h/mois</strong></div>
            <div className="metric-grid">
              <div><span>Coût estimé</span><strong>2 373 €</strong></div>
              <div><span>Action prioritaire</span><strong>Devis</strong></div>
            </div>
            <div className="priority-list">
              <p>Priorités recommandées</p>
              <span>1. Tester un agent IA devis</span>
              <span>2. Standardiser les relances</span>
              <span>3. Classer les documents entrants</span>
            </div>
          </div>
        </div>
      </section>

      <section className="container premium-section split-section">
        <div>
          <p className="section-kicker">Contexte fictif</p>
          <h2>Entreprise exemple : PME BTP de 12 salariés.</h2>
        </div>
        <div className="text-stack">
          <p><strong>Activité :</strong> travaux, devis, suivi clients et dossiers administratifs.</p>
          <p><strong>Organisation :</strong> dirigeant + assistante polyvalente.</p>
          <p><strong>Objectif :</strong> réduire le temps passé sur les devis, les relances et les documents entrants sans supprimer la validation humaine.</p>
        </div>
      </section>

      <section className="container premium-section">
        <div className="section-heading">
          <p className="section-kicker">Résumé exécutif</p>
          <h2>La priorité n’est pas d’automatiser toute l’entreprise.</h2>
          <p>Le scan fait ressortir une charge administrative répétitive estimée à 79 heures par mois, soit environ 2 373 € de coût mensuel théorique. La recommandation est de commencer par les tâches simples, fréquentes et vérifiables : préparation de devis, relances clients et classement des documents entrants.</p>
        </div>
        <div className="trust-strip" style={{ marginTop: 24 }}>
          {keyMetrics.map(([label, value]) => (
            <div key={label}>
              <strong>{value}</strong>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="container premium-section">
        <div className="section-heading">
          <p className="section-kicker">Répartition</p>
          <h2>Les tâches n’ont pas toutes la même valeur.</h2>
        </div>
        <div className="card content-card" style={{ overflowX: 'auto' }}>
          <table className="premium-table">
            <thead><tr><th>Famille de tâches</th><th>Volume estimé</th><th>Niveau de priorité</th></tr></thead>
            <tbody>
              {taskBreakdown.map(([task, volume, priority]) => (
                <tr key={task}><td>{task}</td><td>{volume}</td><td>{priority}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="container premium-section">
        <div className="section-heading">
          <p className="section-kicker">Matrice de décision</p>
          <h2>Le bon cas d’usage est fréquent, coûteux et vérifiable.</h2>
        </div>
        <div className="card content-card" style={{ overflowX: 'auto' }}>
          <table className="premium-table">
            <thead><tr><th>Tâche</th><th>Coût</th><th>Répétition</th><th>Risque</th><th>Contrôle</th><th>Décision</th></tr></thead>
            <tbody>
              {matrix.map(([task, cost, repetition, risk, control, decision]) => (
                <tr key={task}><td>{task}</td><td>{cost}</td><td>{repetition}</td><td>{risk}</td><td>{control}</td><td><strong>{decision}</strong></td></tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="container premium-section comparison-section">
        <div className="section-heading">
          <p className="section-kicker">Top 3 actions</p>
          <h2>Des recommandations concrètes, pas une liste d’outils.</h2>
        </div>
        <div className="comparison-grid">
          <div className="comparison-card highlight-card"><h3>1. Agent IA devis</h3><p>Préparer une première version de devis à partir des demandes clients répétitives. L’agent ne fixe pas le prix final et n’envoie rien sans validation.</p></div>
          <div className="comparison-card muted-card"><h3>2. Relances clients</h3><p>Générer des relances claires pour documents manquants, validations en attente ou retours clients. Tâche fréquente, peu risquée et facilement vérifiable.</p></div>
          <div className="comparison-card muted-card"><h3>3. Documents entrants</h3><p>Aider à trier les pièces jointes, demandes clients, bons de commande et documents administratifs. L’humain conserve la validation finale.</p></div>
        </div>
      </section>

      <section className="container premium-section split-section reversed">
        <div className="deliverable-preview">
          <div className="deliverable-header"><span>Agent recommandé</span><strong>Devis supervisé</strong></div>
          <div className="deliverable-row"><strong>Peut faire</strong><span>résumer la demande, identifier les informations manquantes, préparer une structure de devis, signaler les points à vérifier.</span></div>
          <div className="deliverable-row"><strong>Ne doit pas faire</strong><span>fixer seul un prix final, envoyer un devis, prendre une décision commerciale ou modifier une condition contractuelle.</span></div>
          <div className="deliverable-row"><strong>Validation</strong><span>le dirigeant ou l’assistante vérifie avant toute utilisation externe.</span></div>
        </div>
        <div>
          <p className="section-kicker">Agent IA recommandé</p>
          <h2>Commencer par un agent devis, mais uniquement supervisé.</h2>
          <p className="section-text">L’objectif est de gagner du temps sur la préparation, pas de déléguer la décision commerciale. C’est cette nuance qui rend le test plus crédible et moins risqué.</p>
        </div>
      </section>

      <section className="container premium-section">
        <div className="section-heading">
          <p className="section-kicker">Plan de test</p>
          <h2>Tester sur 7 à 14 jours avant de généraliser.</h2>
        </div>
        <div className="process-grid">
          {testPlan.map(([period, text]) => (
            <div key={period} className="process-card"><span>{period}</span><p>{text}</p></div>
          ))}
        </div>
      </section>

      <section className="container premium-section split-section">
        <div>
          <p className="section-kicker">Limites</p>
          <h2>Un rapport sérieux doit aussi dire ce qu’il ne garantit pas.</h2>
        </div>
        <div className="text-stack">
          <p>Ce rapport ne garantit pas un gain réel. Il fournit une estimation et une méthode de priorisation.</p>
          <p>Le gain dépend de la qualité des données, du niveau de répétition des tâches, des outils déjà utilisés et de la capacité de l’équipe à valider correctement les propositions de l’IA.</p>
          <p>La recommandation doit toujours être confirmée par une analyse personnalisée avant mise en place.</p>
        </div>
      </section>

      <section className="container premium-final-cta">
        <p className="section-kicker">Votre diagnostic</p>
        <h2>Vous voulez obtenir votre propre rapport ?</h2>
        <p>Commencez par le scan gratuit. Si le potentiel semble réel, demandez ensuite une analyse personnalisée avec diagnostic chiffré, priorités et plan de test.</p>
        <div className="hero-actions center-actions">
          <Link className="button" href="/scan">Lancer mon scan gratuit</Link>
          <Link className="ghost-button" href="/analyse-personnalisee">Voir l’analyse personnalisée</Link>
        </div>
      </section>
    </main>
  );
}
