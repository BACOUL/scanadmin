import Link from 'next/link';

const offers = [
  {
    name: 'Scan gratuit',
    label: 'Première étape',
    price: '0 €',
    description: 'Mesurer rapidement le temps administratif répétitif, le coût mensuel estimé et les premières familles de tâches à analyser.',
    cta: 'Lancer le scan',
    href: '/scan',
    featured: false,
    items: ['Estimation immédiate', 'Coût mensuel et annuel', 'Premiers agents potentiels', 'Sans engagement'],
  },
  {
    name: 'Analyse personnalisée',
    label: 'Offre de lancement',
    price: '200 €',
    normalPrice: 'Prix normal prévu : 490 €',
    description: 'Transformer le résultat du scan en diagnostic chiffré, priorités, agent IA recommandé et plan de test supervisé.',
    cta: 'Voir l’analyse',
    href: '/analyse-personnalisee',
    featured: true,
    items: ['Diagnostic chiffré', 'Matrice de priorisation', 'Top 3 actions', 'Agent IA recommandé', 'Plan de test 7 à 14 jours', 'Synthèse dirigeant'],
  },
  {
    name: 'Agent IA supervisé',
    label: 'Après validation',
    price: 'Sur devis',
    description: 'Mise en place progressive d’un agent IA sur une tâche prioritaire, uniquement si le cas d’usage est clair et contrôlable.',
    cta: 'Voir les agents',
    href: '/catalogue',
    featured: false,
    items: ['Périmètre défini', 'Validation humaine', 'Test progressif', 'Pas d’automatisation aveugle'],
  },
];

const comparison = [
  ['Objectif', 'Estimer', 'Décider', 'Mettre en place'],
  ['Niveau de détail', 'Automatique', 'Personnalisé', 'Opérationnel'],
  ['Livrable', 'Résultat du scan', 'Diagnostic + plan', 'Agent supervisé'],
  ['Risque', 'Très faible', 'Faible', 'Selon périmètre'],
  ['Engagement', 'Aucun', 'Prestation courte', 'Sur devis'],
];

const faq = [
  ['Pourquoi le scan est gratuit ?', 'Parce que la première étape doit être simple : mesurer le potentiel avant de vendre une analyse ou une mise en place.'],
  ['Pourquoi l’analyse vaut 490 € en prix normal ?', 'Parce qu’elle transforme un résultat brut en décision : chiffres vérifiés, priorités, agent recommandé, limites et plan de test.'],
  ['Pourquoi l’offre de lancement est à 200 € ?', 'Pour obtenir les premiers retours clients et améliorer la méthode ScanAdmin sans dévaloriser la valeur normale de l’analyse.'],
  ['Est-ce qu’un agent IA est inclus dans l’analyse ?', 'Non. L’analyse recommande le premier agent à tester, mais la mise en place technique est une étape séparée.'],
  ['Y a-t-il une garantie de gain ?', 'Non. ScanAdmin fournit une estimation et une méthode prudente. Le gain réel doit être vérifié en contexte.'],
  ['Quand passer à la mise en place ?', 'Seulement si le scan et l’analyse montrent une tâche assez fréquente, coûteuse, répétitive et facilement contrôlable.'],
];

export const metadata = {
  title: 'Tarifs ScanAdmin | Scan IA administratif, analyse PME et agents IA',
  description: 'Tarifs ScanAdmin : scan gratuit, analyse personnalisée 490 € avec offre de lancement à 200 €, et mise en place d’agents IA supervisés sur devis.',
};

export default function Page() {
  return (
    <main>
      <section className="premium-hero">
        <div className="container hero-shell">
          <div className="hero-copy">
            <p className="badge">Tarifs ScanAdmin</p>
            <h1>Commencez gratuitement. Payez seulement quand le potentiel mérite une vraie analyse.</h1>
            <p className="hero-subtitle">ScanAdmin suit une logique simple : mesurer d’abord, analyser ensuite, puis mettre en place un agent IA supervisé uniquement si le cas d’usage est clair.</p>
            <div className="hero-actions">
              <Link className="button" href="/scan">Lancer le scan gratuit</Link>
              <Link className="ghost-button" href="/analyse-personnalisee">Voir l’analyse à 200 €</Link>
            </div>
            <p className="hero-note">Prix normal de l’analyse : 490 €. Offre de lancement : 200 € pour les premiers clients.</p>
          </div>

          <div className="report-preview">
            <div className="report-topline"><span>Offre principale</span><strong>Diagnostic PME</strong></div>
            <div className="report-metric-main"><span>Analyse personnalisée</span><strong>200 €</strong></div>
            <div className="metric-grid">
              <div><span>Prix normal</span><strong>490 €</strong></div>
              <div><span>Scan</span><strong>0 €</strong></div>
            </div>
            <div className="priority-list">
              <p>Logique tarifaire</p>
              <span>Mesurer gratuitement</span>
              <span>Décider avec analyse</span>
              <span>Déployer seulement si pertinent</span>
            </div>
          </div>
        </div>
      </section>

      <section className="container premium-section">
        <div className="section-heading">
          <p className="section-kicker">Offres</p>
          <h2>Trois niveaux simples, dans le bon ordre.</h2>
          <p>Le prix doit suivre le niveau d’engagement : estimation gratuite, analyse payante, puis mise en place uniquement si le besoin est confirmé.</p>
        </div>

        <div className="comparison-grid" style={{ marginTop: 26 }}>
          {offers.map((offer) => (
            <article key={offer.name} className={`comparison-card ${offer.featured ? 'highlight-card' : 'muted-card'}`}>
              <p className="section-kicker" style={{ background: offer.featured ? 'rgba(255,255,255,.12)' : undefined, color: offer.featured ? '#5eead4' : undefined }}>{offer.label}</p>
              <h3>{offer.name}</h3>
              <strong style={{ display: 'block', fontSize: 38, letterSpacing: -1, margin: '14px 0' }}>{offer.price}</strong>
              {'normalPrice' in offer && <p style={{ color: offer.featured ? '#d8fff7' : undefined }}>{offer.normalPrice}</p>}
              <p>{offer.description}</p>
              <ul style={{ paddingLeft: 18, lineHeight: 1.8 }}>
                {offer.items.map((item) => <li key={item}>{item}</li>)}
              </ul>
              <Link className={offer.featured ? 'ghost-button' : 'button'} href={offer.href}>{offer.cta}</Link>
            </article>
          ))}
        </div>
      </section>

      <section className="container premium-section split-section">
        <div>
          <p className="section-kicker">Positionnement prix</p>
          <h2>L’analyse à 200 € est une offre de lancement, pas une prestation bas de gamme.</h2>
        </div>
        <div className="text-stack">
          <p>Le prix normal prévu est 490 €, car l’analyse doit rester perçue comme une prestation professionnelle : lecture du contexte, vérification des ordres de grandeur, priorisation et recommandation du premier test IA.</p>
          <p>L’offre à 200 € permet de lancer les premiers cas clients, d’améliorer la méthode et de construire de la preuve, tout en gardant un livrable sérieux.</p>
          <p>Cette logique évite de vendre trop tôt une mise en place plus chère, avant de savoir si le cas d’usage est vraiment prioritaire.</p>
        </div>
      </section>

      <section className="container premium-section">
        <div className="section-heading">
          <p className="section-kicker">Comparaison</p>
          <h2>Chaque offre correspond à une étape différente.</h2>
        </div>
        <div className="card content-card" style={{ overflowX: 'auto' }}>
          <table className="premium-table">
            <thead><tr><th>Critère</th><th>Scan gratuit</th><th>Analyse personnalisée</th><th>Agent supervisé</th></tr></thead>
            <tbody>
              {comparison.map(([criterion, scan, analysis, agent]) => (
                <tr key={criterion}><td>{criterion}</td><td>{scan}</td><td>{analysis}</td><td>{agent}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="container premium-section comparison-section">
        <div className="section-heading">
          <p className="section-kicker">Ce que ScanAdmin évite</p>
          <h2>Ne pas payer pour une IA avant d’avoir identifié la bonne tâche.</h2>
        </div>
        <div className="comparison-grid">
          <div className="comparison-card muted-card"><h3>Acheter un outil trop tôt</h3><p>Le risque est de payer un logiciel ou une automatisation avant de savoir où se trouve vraiment le coût administratif.</p></div>
          <div className="comparison-card highlight-card"><h3>Analyser avant de déployer</h3><p>ScanAdmin commence par mesurer, puis transforme le résultat en décision avant toute mise en place.</p></div>
          <div className="comparison-card muted-card"><h3>Confondre gain estimé et gain réel</h3><p>Le gain réel doit être testé. Les chiffres du scan servent à prioriser, pas à garantir un résultat.</p></div>
        </div>
      </section>

      <section className="container premium-section">
        <div className="section-heading">
          <p className="section-kicker">FAQ tarifs</p>
          <h2>Questions fréquentes avant de commencer.</h2>
        </div>
        <div className="grid grid-2" style={{ marginTop: 24 }}>
          {faq.map(([question, answer]) => (
            <div key={question} className="card content-card">
              <h2>{question}</h2>
              <p>{answer}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container premium-final-cta">
        <p className="section-kicker">Commencer sans risque</p>
        <h2>La première étape reste gratuite.</h2>
        <p>Lancez le scan, mesurez votre administratif répétitif, puis décidez si une analyse personnalisée mérite d’être demandée.</p>
        <div className="hero-actions center-actions">
          <Link className="button" href="/scan">Lancer mon scan gratuit</Link>
          <Link className="ghost-button" href="/analyse-personnalisee">Voir l’analyse personnalisée</Link>
        </div>
      </section>
    </main>
  );
}
