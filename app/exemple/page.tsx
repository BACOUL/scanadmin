import Link from 'next/link';

const metrics = [
  ['Entreprise fictive', 'PME BTP'],
  ['Temps administratif estimé', '46 h / mois'],
  ['Coût mensuel estimé', '1 380 €'],
  ['Temps récupérable estimé', '10 à 16 h / mois'],
  ['Priorité recommandée', 'Devis simples'],
  ['Agent conseillé', 'Agent IA devis supervisé'],
];

const sections = [
  ['1. Contexte', 'Entreprise fictive de rénovation second œuvre avec 6 personnes, un dirigeant et une assistante à temps partiel.'],
  ['2. Diagnostic', 'Le temps administratif répétitif vient surtout des devis simples, des relances prospects et des documents chantier.'],
  ['3. Priorité', 'Commencer par la préparation de devis simples, car la tâche est fréquente, coûteuse en temps et vérifiable.'],
  ['4. Agent IA recommandé', 'Un agent IA devis supervisé peut préparer une première version, mais la validation humaine reste obligatoire.'],
  ['5. Plan de test', 'Tester pendant 14 jours sur des demandes simples, puis mesurer le temps réellement gagné.'],
  ['6. Limites', 'Le rapport donne une estimation et une méthode. Il ne garantit pas un gain réel sans test.'],
];

export const metadata = {
  title: 'Exemple de rapport ScanAdmin | Analyse IA administrative PME',
  description: 'Exemple fictif de livrable ScanAdmin avec diagnostic, priorités, agent IA recommandé et plan de test.',
};

export default function Page() {
  return (
    <main>
      <section className="premium-hero">
        <div className="container hero-shell">
          <div className="hero-copy">
            <p className="badge">Exemple de livrable</p>
            <h1>Voici ce qu’un client peut recevoir après une analyse ScanAdmin.</h1>
            <p className="hero-subtitle">Cet exemple fictif montre le type de document livré : chiffres du scan, priorités, agent IA recommandé, limites et plan de test supervisé.</p>
            <div className="hero-actions">
              <Link className="button" href="/scan">Lancer mon scan gratuit</Link>
              <Link className="ghost-button" href="/analyse-personnalisee">Voir l’analyse personnalisée</Link>
            </div>
            <p className="hero-note">Exemple fictif. Aucun client réel. Aucun gain garanti.</p>
          </div>

          <div className="report-preview">
            <div className="report-topline"><span>PME BTP</span><strong>Exemple</strong></div>
            <div className="report-metric-main"><span>Charge répétitive</span><strong>46 h/mois</strong></div>
            <div className="metric-grid">
              <div><span>Coût estimé</span><strong>1 380 €</strong></div>
              <div><span>Priorité</span><strong>Devis</strong></div>
            </div>
            <div className="priority-list">
              <p>Recommandations</p>
              <span>1. Tester un agent IA devis</span>
              <span>2. Standardiser les relances</span>
              <span>3. Cadrer les documents chantier</span>
            </div>
          </div>
        </div>
      </section>

      <section className="container premium-section">
        <div className="section-heading">
          <p className="section-kicker">Chiffres exemple</p>
          <h2>Le livrable rend le problème visible et actionnable.</h2>
        </div>
        <div className="trust-strip" style={{ marginTop: 24 }}>
          {metrics.map(([label, value]) => (
            <div key={label}><strong>{value}</strong><span>{label}</span></div>
          ))}
        </div>
      </section>

      <section className="container premium-section">
        <div className="section-heading">
          <p className="section-kicker">Structure du livrable</p>
          <h2>Un rapport court, concret et utilisable.</h2>
        </div>
        <div className="comparison-grid">
          {sections.map(([title, text]) => (
            <div key={title} className="comparison-card muted-card">
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container premium-section comparison-section">
        <div className="section-heading">
          <p className="section-kicker">Tâches reliées</p>
          <h2>Voir les tâches administratives qui peuvent être préparées par IA.</h2>
          <p>L’exemple BTP recommande les devis simples, mais ScanAdmin analyse aussi les relances, les emails, les documents entrants et les tâches plus sensibles.</p>
        </div>
        <div className="comparison-grid">
          <div className="comparison-card highlight-card">
            <h3>Tâches administratives</h3>
            <p>Comprendre quelles tâches traiter en premier avec l’IA, selon la fréquence, le risque et la facilité de validation.</p>
            <Link className="ghost-button" href="/taches">Voir les tâches</Link>
          </div>
          <div className="comparison-card muted-card">
            <h3>Page devis</h3>
            <p>Voir pourquoi la préparation de devis simples est souvent un bon premier test IA supervisé.</p>
            <Link className="ghost-button" href="/taches/devis">Lire la page devis</Link>
          </div>
        </div>
      </section>

      <section className="container premium-section split-section reversed">
        <div className="deliverable-preview">
          <div className="deliverable-header"><span>Agent recommandé</span><strong>Devis supervisé</strong></div>
          <div className="deliverable-row"><strong>Peut faire</strong><span>préparer une première version de devis simple.</span></div>
          <div className="deliverable-row"><strong>Ne doit pas faire</strong><span>envoyer seul ou décider seul.</span></div>
          <div className="deliverable-row"><strong>Validation</strong><span>l’humain vérifie avant toute utilisation externe.</span></div>
        </div>
        <div>
          <p className="section-kicker">Supervision</p>
          <h2>L’IA prépare, l’humain valide.</h2>
          <p className="section-text">Le premier test doit rester limité, mesurable et supervisé. L’objectif est de vérifier le gain réel avant de généraliser.</p>
        </div>
      </section>

      <section className="container premium-final-cta">
        <p className="section-kicker">Votre analyse</p>
        <h2>Vous voulez obtenir votre propre livrable ?</h2>
        <p>Commencez par le scan gratuit. Si le potentiel semble réel, demandez ensuite une analyse personnalisée avec priorités et plan de test.</p>
        <div className="hero-actions center-actions">
          <Link className="button" href="/scan">Lancer mon scan gratuit</Link>
          <Link className="ghost-button" href="/analyse-personnalisee">Voir l’offre</Link>
        </div>
      </section>
    </main>
  );
}
