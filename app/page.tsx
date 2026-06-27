import Link from 'next/link';

const taskGroups = [
  ['Communication', 'Mails, relances, demandes clients'],
  ['Commercial', 'Devis, retours clients, dossiers entrants'],
  ['Gestion', 'Factures, documents, planning, reporting'],
];

const sectors = [
  ['BTP', '/secteurs/btp'],
  ['Transport', '/secteurs/transport-logistique'],
  ['Nettoyage', '/secteurs/nettoyage-professionnel'],
  ['Immobilier', '/secteurs/immobilier'],
];

const resources = [
  ['Audit IA PME', '/guides/audit-ia-pme'],
  ['Agent IA administratif', '/guides/agent-ia-administratif'],
  ['Automatiser les tâches administratives', '/guides/automatiser-taches-administratives'],
];

export const metadata = {
  title: 'ScanAdmin | Scan IA administratif pour PME',
  description: 'Mesurez le coût de vos tâches administratives répétitives et identifiez les agents IA supervisés les plus utiles pour votre PME.',
};

export default function HomePage() {
  return (
    <main>
      <section className="container" style={{ padding: '28px 0 18px' }}>
        <div className="card hero-card" style={{ overflow: 'hidden' }}>
          <div className="grid grid-2" style={{ alignItems: 'center' }}>
            <div>
              <p style={{ marginTop: 0, color: '#0f766e', fontWeight: 800 }}>Scan IA administratif pour PME</p>
              <h1 className="hero-title" style={{ margin: '0 0 16px' }}>Combien votre administratif vous coûte-t-il chaque mois ?</h1>
              <p className="hero-lead" style={{ color: '#5d6b7a', maxWidth: 760 }}>
                ScanAdmin mesure vos tâches répétitives, estime leur coût mensuel et vous indique quels agents IA supervisés méritent vraiment d’être testés.
              </p>
              <div className="mobile-cta-row" style={{ marginTop: 22 }}>
                <Link className="button" href="/scan">Lancer mon scan gratuit</Link>
                <Link className="button" style={{ background: '#102033' }} href="/exemple">Voir un rapport exemple</Link>
              </div>
              <p style={{ color: '#5d6b7a', marginTop: 16 }}>Résultats indicatifs. L’IA prépare, l’humain valide.</p>
            </div>
            <div className="card hero-result mobile-compact" style={{ background: '#e9fbf7', boxShadow: 'none' }}>
              <p style={{ color: '#0f766e', fontWeight: 800, marginTop: 0 }}>Exemple de lecture</p>
              <h2 className="hero-result-title" style={{ margin: '8px 0' }}>79 h/mois</h2>
              <p style={{ color: '#5d6b7a' }}>de tâches administratives répétitives estimées</p>
              <div className="grid" style={{ marginTop: 14 }}>
                <div className="card mini-card" style={{ boxShadow: 'none' }}><strong>2 373 € / mois</strong><p style={{ color: '#5d6b7a', marginBottom: 0 }}>coût estimé</p></div>
                <div className="card mini-card" style={{ boxShadow: 'none' }}><strong>26 à 43 h / mois</strong><p style={{ color: '#5d6b7a', marginBottom: 0 }}>fourchette récupérable</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container page-section">
        <div className="card content-card">
          <p style={{ color: '#0f766e', fontWeight: 800 }}>Pourquoi ScanAdmin</p>
          <h2 className="home-section-title">Mesurer avant d’automatiser</h2>
          <p className="page-lead">Beaucoup de PME veulent utiliser l’IA, mais ne savent pas par où commencer. ScanAdmin évite de choisir un outil au hasard : on commence par le coût réel des tâches administratives.</p>
          <div className="grid grid-3" style={{ marginTop: 22 }}>
            <div><strong>1. Temps</strong><p style={{ color: '#5d6b7a' }}>Combien d’heures sont perdues chaque mois ?</p></div>
            <div><strong>2. Coût</strong><p style={{ color: '#5d6b7a' }}>Combien cela représente en euros ?</p></div>
            <div><strong>3. Priorité</strong><p style={{ color: '#5d6b7a' }}>Quel agent IA tester en premier ?</p></div>
          </div>
        </div>
      </section>

      <section className="container page-section">
        <div className="grid grid-2" style={{ alignItems: 'start' }}>
          <div>
            <p style={{ color: '#0f766e', fontWeight: 800 }}>Tâches analysées</p>
            <h2 className="home-section-title">Toute la charge administrative n’a pas la même valeur</h2>
            <p className="page-lead">La home n’a pas besoin de lister chaque tâche une par une. ScanAdmin regroupe les familles importantes pour comprendre rapidement où se cache le temps perdu.</p>
          </div>
          <div className="grid">
            {taskGroups.map(([title, text]) => (
              <div key={title} className="card mini-card">
                <strong>{title}</strong>
                <p style={{ color: '#5d6b7a', marginBottom: 0 }}>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container page-section">
        <div className="card content-card" style={{ background: '#102033', color: '#fff' }}>
          <p style={{ color: '#5eead4', fontWeight: 800 }}>Agents IA supervisés</p>
          <h2 className="home-section-title" style={{ color: '#fff' }}>L’IA prépare. Vous gardez la validation.</h2>
          <p style={{ color: '#d8e3ee', fontSize: 18, lineHeight: 1.65, maxWidth: 900 }}>
            Les agents IA ne sont pas proposés comme une solution magique. ScanAdmin recommande seulement les agents cohérents avec votre volume de tâches : mails, devis, relances, documents, factures ou reporting.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 22 }}>
            <Link className="button" href="/catalogue">Voir les agents IA</Link>
            <Link className="button" style={{ background: '#0f766e' }} href="/method">Comprendre la méthode</Link>
          </div>
        </div>
      </section>

      <section className="container page-section">
        <p style={{ color: '#0f766e', fontWeight: 800 }}>Ce que vous obtenez</p>
        <h2 className="home-section-title">Un résultat exploitable, pas un simple score</h2>
        <div className="grid grid-3" style={{ marginTop: 22 }}>
          <div className="card content-card"><h2>Coût administratif</h2><p>Une estimation mensuelle et annuelle du temps passé sur les tâches répétitives.</p></div>
          <div className="card content-card"><h2>Priorités</h2><p>Les familles de tâches qui semblent coûter le plus de temps à votre entreprise.</p></div>
          <div className="card content-card"><h2>Agents à tester</h2><p>Des recommandations prudentes d’agents IA supervisés à tester en premier.</p></div>
        </div>
      </section>

      <section className="container page-section">
        <div className="grid grid-2" style={{ alignItems: 'start' }}>
          <div className="card content-card">
            <p style={{ color: '#0f766e', fontWeight: 800 }}>Secteurs</p>
            <h2>Adapté aux PME terrain</h2>
            <p>Les tâches administratives ne se présentent pas de la même façon dans le BTP, le transport, le nettoyage ou l’immobilier. Les pages secteur expliquent les cas d’usage concrets.</p>
            <Link className="button" href="/secteurs">Voir les secteurs</Link>
          </div>
          <div className="grid grid-2">
            {sectors.map(([name, href]) => (
              <Link key={name} href={href} className="card mini-card"><strong>{name}</strong><p style={{ color: '#5d6b7a', marginBottom: 0 }}>Cas d’usage IA administrative</p></Link>
            ))}
          </div>
        </div>
      </section>

      <section className="container page-section">
        <div className="card content-card">
          <p style={{ color: '#0f766e', fontWeight: 800 }}>Ressources</p>
          <h2 className="home-section-title">Comprendre avant de décider</h2>
          <p className="page-lead">ScanAdmin construit une base de contenus utiles pour les PME qui veulent utiliser l’IA de manière prudente et rentable.</p>
          <div className="grid grid-3" style={{ marginTop: 22 }}>
            {resources.map(([title, href]) => (
              <Link key={title} href={href} className="card mini-card" style={{ boxShadow: 'none' }}><strong>{title}</strong><p style={{ color: '#5d6b7a', marginBottom: 0 }}>Lire le guide</p></Link>
            ))}
          </div>
        </div>
      </section>

      <section className="container" style={{ padding: '18px 0 54px' }}>
        <div className="card content-card" style={{ textAlign: 'center' }}>
          <h2 className="home-section-title" style={{ marginTop: 0 }}>Commencez par chiffrer votre administratif</h2>
          <p style={{ color: '#5d6b7a', fontSize: 18 }}>Le scan est gratuit, rapide et sans engagement.</p>
          <Link className="button" href="/scan">Lancer mon scan gratuit</Link>
        </div>
      </section>
    </main>
  );
}
