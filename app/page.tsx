import Link from 'next/link';

const proofPoints = [
  ['Méthode prudente', 'Mesurer avant de recommander'],
  ['Analyse à 200 €', 'Prix normal prévu : 490 €'],
  ['Agents supervisés', 'L’IA prépare, l’humain valide'],
  ['PME terrain', 'BTP, transport, nettoyage, services'],
];

const process = [
  ['01', 'Scanner', 'Vous renseignez vos volumes administratifs : mails, devis, relances, documents, factures, planning et reporting.'],
  ['02', 'Chiffrer', 'ScanAdmin estime le temps mensuel, le coût annuel et les familles de tâches qui méritent une analyse.'],
  ['03', 'Prioriser', 'L’analyse personnalisée classe les tâches selon coût, répétition, risque et facilité de contrôle.'],
  ['04', 'Tester', 'Vous repartez avec le premier agent IA supervisé à tester et un plan simple sur 7 à 14 jours.'],
];

const deliverables = [
  ['Diagnostic chiffré', 'temps mensuel, coût mensuel, coût annuel'],
  ['Matrice priorités', 'volume, coût, risque, contrôle humain'],
  ['Top 3 actions', 'quoi traiter en premier et pourquoi'],
  ['Agent recommandé', 'rôle, limites et validation humaine'],
];

const sectors = [
  ['BTP', '/secteurs/btp'],
  ['Transport', '/secteurs/transport-logistique'],
  ['Nettoyage', '/secteurs/nettoyage-professionnel'],
  ['Immobilier', '/secteurs/immobilier'],
];

export const metadata = {
  title: 'ScanAdmin | Diagnostic IA administratif pour PME',
  description: 'Mesurez le coût de vos tâches administratives répétitives, priorisez les bons cas d’usage et identifiez les agents IA supervisés à tester en premier.',
};

export default function HomePage() {
  return (
    <main className="premium-home">
      <section className="premium-hero">
        <div className="container hero-shell">
          <div className="hero-copy">
            <p className="badge">Diagnostic IA administratif pour PME</p>
            <h1>Arrêtez de chercher un outil IA. Commencez par mesurer ce qui vous coûte vraiment.</h1>
            <p className="hero-subtitle">ScanAdmin chiffre vos tâches administratives répétitives, identifie les priorités et transforme le résultat en plan d’action pour tester un agent IA supervisé sans automatiser au hasard.</p>
            <div className="hero-actions">
              <Link className="button" href="/scan">Lancer mon scan gratuit</Link>
              <Link className="ghost-button" href="/analyse-personnalisee">Voir l’analyse à 200 €</Link>
            </div>
            <p className="hero-note">Résultats indicatifs. Prix normal de l’analyse : 490 €. Offre de lancement : 200 €.</p>
          </div>

          <div className="report-preview">
            <div className="report-topline">
              <span>Extrait de diagnostic</span>
              <strong>ScanAdmin</strong>
            </div>
            <div className="report-metric-main">
              <span>Charge administrative estimée</span>
              <strong>79 h/mois</strong>
            </div>
            <div className="metric-grid">
              <div><span>Coût mensuel</span><strong>2 373 €</strong></div>
              <div><span>Potentiel récupérable</span><strong>26 à 43 h</strong></div>
            </div>
            <div className="priority-list">
              <p>Priorités détectées</p>
              <span>1. Devis récurrents</span>
              <span>2. Relances clients</span>
              <span>3. Documents entrants</span>
            </div>
          </div>
        </div>
      </section>

      <section className="container trust-strip">
        {proofPoints.map(([title, text]) => (
          <div key={title}>
            <strong>{title}</strong>
            <span>{text}</span>
          </div>
        ))}
      </section>

      <section className="container premium-section split-section">
        <div>
          <p className="section-kicker">Le vrai problème</p>
          <h2>La plupart des projets IA commencent trop tard dans la réflexion.</h2>
        </div>
        <div className="text-stack">
          <p>Beaucoup d’entreprises commencent par comparer des outils, installer une automatisation ou demander “quel agent IA utiliser ?”. C’est souvent la mauvaise première question.</p>
          <p>La bonne question est plus simple : quelles tâches administratives coûtent réellement du temps, sont assez répétitives, et peuvent être vérifiées par un humain ?</p>
          <p>ScanAdmin se positionne avant l’achat d’un outil : il aide à choisir le bon combat.</p>
        </div>
      </section>

      <section className="container premium-section">
        <div className="section-heading">
          <p className="section-kicker">Méthode</p>
          <h2>Une méthode en 4 étapes pour passer du flou à une décision.</h2>
          <p>Le but n’est pas de promettre un gain magique. Le but est de réduire l’incertitude avant de dépenser du temps ou de l’argent dans une automatisation.</p>
        </div>
        <div className="process-grid">
          {process.map(([number, title, text]) => (
            <div key={number} className="process-card">
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container premium-section split-section reversed">
        <div className="deliverable-preview">
          <div className="deliverable-header">
            <span>Livrable analyse</span>
            <strong>200 € lancement</strong>
          </div>
          {deliverables.map(([title, text]) => (
            <div key={title} className="deliverable-row">
              <strong>{title}</strong>
              <span>{text}</span>
            </div>
          ))}
        </div>
        <div>
          <p className="section-kicker">Ce que vous achetez vraiment</p>
          <h2>Pas un PDF décoratif. Une décision plus claire.</h2>
          <p className="section-text">L’analyse personnalisée sert à transformer un résultat automatique en recommandation exploitable : ce qu’il faut traiter, ce qu’il faut éviter, quel agent tester, et où l’humain doit valider.</p>
          <Link className="button" href="/analyse-personnalisee">Voir le détail de l’analyse</Link>
        </div>
      </section>

      <section className="container premium-section comparison-section">
        <div className="section-heading">
          <p className="section-kicker">Différenciation</p>
          <h2>ScanAdmin n’est pas “encore un outil IA”.</h2>
        </div>
        <div className="comparison-grid">
          <div className="comparison-card muted-card">
            <h3>Simple outil IA</h3>
            <p>Produit du texte, automatise ponctuellement, mais ne dit pas quelle tâche vaut vraiment le coût d’être automatisée.</p>
          </div>
          <div className="comparison-card highlight-card">
            <h3>ScanAdmin</h3>
            <p>Mesure le coût administratif, classe les priorités et recommande un agent IA supervisé seulement si le cas semble cohérent.</p>
          </div>
          <div className="comparison-card muted-card">
            <h3>Audit IA lourd</h3>
            <p>Plus complet, mais souvent trop long ou trop cher pour une PME qui veut simplement savoir par où commencer.</p>
          </div>
        </div>
      </section>

      <section className="container premium-section split-section">
        <div>
          <p className="section-kicker">Secteurs</p>
          <h2>Conçu pour les PME avec de vraies tâches administratives.</h2>
          <p className="section-text">Les premiers cas d’usage sont simples : devis, relances, documents, factures, reporting, dossiers clients. Pas besoin de vendre une transformation IA totale pour créer de la valeur.</p>
          <Link className="ghost-button dark" href="/secteurs">Voir toutes les pages secteurs</Link>
        </div>
        <div className="sector-grid">
          {sectors.map(([name, href]) => (
            <Link key={name} href={href} className="sector-tile">
              <strong>{name}</strong>
              <span>cas d’usage IA administrative</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="container premium-final-cta">
        <p className="section-kicker">Commencer</p>
        <h2>Avant d’automatiser, mesurez.</h2>
        <p>Le scan gratuit vous donne une première estimation. L’analyse personnalisée transforme ensuite le résultat en plan d’action professionnel.</p>
        <div className="hero-actions center-actions">
          <Link className="button" href="/scan">Lancer mon scan gratuit</Link>
          <Link className="ghost-button" href="/exemple">Voir un rapport exemple</Link>
        </div>
      </section>
    </main>
  );
}
