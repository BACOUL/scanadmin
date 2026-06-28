import Link from 'next/link';

const nextSteps = [
  ['1. Réception', 'Votre demande et les éléments du scan sont bien transmis.'],
  ['2. Vérification', 'Les chiffres, le secteur et les tâches principales sont relus avant toute recommandation.'],
  ['3. Confirmation', 'Vous recevez une réponse pour confirmer le contexte, le prix de lancement et les modalités.'],
  ['4. Analyse', 'Après validation, l’analyse personnalisée classe les priorités et propose un premier test IA supervisé.'],
];

export default function MerciPage() {
  return (
    <main>
      <section className="premium-hero">
        <div className="container hero-shell">
          <div className="hero-copy">
            <p className="badge">Demande reçue</p>
            <h1>Votre demande d’analyse est enregistrée.</h1>
            <p className="hero-subtitle">Vos résultats ScanAdmin vont servir de base pour vérifier les tâches administratives à traiter en priorité et préparer une recommandation exploitable.</p>
            <div className="hero-actions">
              <Link className="button" href="/scan">Faire un nouveau scan</Link>
              <Link className="ghost-button" href="/exemple">Voir un rapport exemple</Link>
            </div>
            <p className="hero-note">L’analyse personnalisée est actuellement proposée à 200 € en offre de lancement. Le prix normal prévu est de 490 €.</p>
          </div>

          <div className="report-preview">
            <div className="report-topline"><span>Suite</span><strong>Analyse</strong></div>
            <div className="report-metric-main"><span>Prochaine étape</span><strong style={{ fontSize: 34 }}>Vérification humaine</strong></div>
            <div className="metric-grid">
              <div><span>Offre</span><strong>200 €</strong></div>
              <div><span>IA</span><strong>Supervisée</strong></div>
            </div>
            <div className="priority-list">
              <p>Ce qui sera vérifié</p>
              <span>Temps administratif</span>
              <span>Priorités réelles</span>
              <span>Premier agent à tester</span>
            </div>
          </div>
        </div>
      </section>

      <section className="container premium-section">
        <div className="section-heading">
          <p className="section-kicker">Après votre demande</p>
          <h2>Voici la suite du process.</h2>
        </div>
        <div className="process-grid">
          {nextSteps.map(([title, text]) => (
            <div key={title} className="process-card">
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container premium-section split-section">
        <div>
          <p className="section-kicker">Important</p>
          <h2>Le scan reste une estimation. L’analyse sert à confirmer avant de décider.</h2>
        </div>
        <div className="text-stack">
          <p>ScanAdmin ne promet pas un gain automatique. L’objectif est de vérifier les chiffres, d’éviter une mauvaise automatisation et de choisir un premier cas IA simple à tester.</p>
          <p>L’IA doit préparer le travail, mais la validation finale doit rester humaine, surtout pour les devis, factures, décisions commerciales ou documents sensibles.</p>
          <p>Vous serez recontacté pour confirmer le contexte et les modalités avant la production de l’analyse personnalisée.</p>
        </div>
      </section>

      <section className="container premium-final-cta">
        <p className="section-kicker">En attendant</p>
        <h2>Vous pouvez consulter l’exemple de rapport ScanAdmin.</h2>
        <p>Il montre le type de lecture attendue : coût administratif, priorités, agent IA recommandé, limites et plan de test.</p>
        <div className="hero-actions center-actions">
          <Link className="button" href="/exemple">Voir un rapport exemple</Link>
          <Link className="ghost-button" href="/">Retour à l’accueil</Link>
        </div>
      </section>
    </main>
  );
}
