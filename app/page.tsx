import Link from 'next/link';

const tasks = ['Mails', 'Devis', 'Relances', 'Factures', 'Documents', 'Dossiers clients'];
const agents = ['Agent mails', 'Agent devis', 'Agent relance', 'Agent documents'];
const faqs = [
  ['Est-ce que les gains sont garantis ?', 'Non. Le scan donne une estimation pour prioriser les tâches à analyser.'],
  ['Est-ce que les agents sont autonomes ?', 'Ils sont supervisés : l’IA prépare, l’humain valide.'],
  ['Combien de temps dure le scan ?', 'Environ 5 minutes avec des questions simples.'],
];

export default function HomePage() {
  return (
    <main>
      <section className="container" style={{ padding: '64px 0 32px' }}>
        <div className="card" style={{ padding: 34, overflow: 'hidden' }}>
          <div className="grid grid-2" style={{ alignItems: 'center' }}>
            <div>
              <p style={{ marginTop: 0, color: '#0f766e', fontWeight: 800 }}>Scan IA Administratif pour PME</p>
              <h1 style={{ fontSize: 58, lineHeight: 1.02, margin: '0 0 18px', letterSpacing: -2 }}>
                Combien votre administratif vous coûte-t-il chaque mois ?
              </h1>
              <p style={{ fontSize: 20, lineHeight: 1.55, color: '#5d6b7a', maxWidth: 760 }}>
                Faites le scan en 5 minutes : mails, devis, relances, factures, documents et dossiers clients. Obtenez une estimation du temps perdu, du coût mensuel et des agents IA supervisés les plus rentables à tester.
              </p>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 28 }}>
                <Link className="button" href="/scan">Lancer mon scan gratuit</Link>
                <Link className="button" style={{ background: '#102033' }} href="/method">Voir la méthode</Link>
              </div>
              <p style={{ color: '#5d6b7a', marginTop: 18 }}>Résultats indicatifs. L’IA prépare, l’humain valide.</p>
            </div>
            <div className="card" style={{ padding: 24, background: '#e9fbf7', boxShadow: 'none' }}>
              <p style={{ color: '#0f766e', fontWeight: 800, marginTop: 0 }}>Exemple de résultat</p>
              <h2 style={{ fontSize: 42, margin: '8px 0' }}>79 h/mois</h2>
              <p style={{ color: '#5d6b7a' }}>de tâches administratives répétitives estimées</p>
              <div className="grid" style={{ marginTop: 18 }}>
                <div className="card" style={{ padding: 18, boxShadow: 'none' }}><strong>2 373 € / mois</strong><p style={{ color: '#5d6b7a', marginBottom: 0 }}>coût estimé</p></div>
                <div className="card" style={{ padding: 18, boxShadow: 'none' }}><strong>26 à 43 h / mois</strong><p style={{ color: '#5d6b7a', marginBottom: 0 }}>potentiellement récupérables</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container page-section">
        <div className="grid grid-3">
          <div className="card" style={{ padding: 24 }}><h2>1. Mesurez</h2><p style={{ color: '#5d6b7a' }}>Répondez à des questions simples sur vos tâches administratives répétitives.</p></div>
          <div className="card" style={{ padding: 24 }}><h2>2. Chiffrez</h2><p style={{ color: '#5d6b7a' }}>Découvrez le temps perdu, le coût mensuel et le coût annuel estimé.</p></div>
          <div className="card" style={{ padding: 24 }}><h2>3. Priorisez</h2><p style={{ color: '#5d6b7a' }}>Recevez les agents IA supervisés les plus utiles à tester en priorité.</p></div>
        </div>
      </section>

      <section className="container page-section">
        <p style={{ color: '#0f766e', fontWeight: 800 }}>Tâches analysées</p>
        <h2 className="page-title">Tout l’administratif répétitif qui ralentit une PME</h2>
        <div className="grid grid-3">
          {tasks.map((task) => <div key={task} className="card" style={{ padding: 22 }}><strong>{task}</strong><p style={{ color: '#5d6b7a' }}>Temps, fréquence et coût estimés.</p></div>)}
        </div>
      </section>

      <section className="container page-section">
        <div className="card content-card">
          <p style={{ color: '#0f766e', fontWeight: 800 }}>Agents IA supervisés</p>
          <h2 className="page-title">L’IA prépare. Vous gardez la validation.</h2>
          <p className="page-lead">ScanAdmin ne recommande pas de remplacer vos équipes. Le but est d’identifier les tâches répétitives que des agents IA peuvent préparer, classer, résumer ou relancer sous contrôle humain.</p>
          <div className="grid grid-2" style={{ marginTop: 22 }}>
            {agents.map((agent) => <div key={agent} className="card" style={{ padding: 20, boxShadow: 'none' }}><strong>{agent}</strong><p style={{ color: '#5d6b7a' }}>Recommandé seulement si le scan détecte un potentiel suffisant.</p></div>)}
          </div>
        </div>
      </section>

      <section className="container page-section">
        <div className="grid grid-3">
          <div className="card content-card"><h2>Scan gratuit</h2><p>Une première estimation immédiate pour comprendre où part votre temps administratif.</p><strong>0 €</strong></div>
          <div className="card content-card"><h2>Analyse personnalisée</h2><p>Vérification des réponses, priorisation des tâches et recommandation d’agent IA.</p><strong>290 à 490 €</strong></div>
          <div className="card content-card"><h2>Agent supervisé</h2><p>Mise en place d’un premier agent IA sur une tâche prioritaire et utile.</p><strong>Sur devis</strong></div>
        </div>
      </section>

      <section className="container page-section">
        <h2 className="page-title">Questions fréquentes</h2>
        <div className="grid">
          {faqs.map(([q, a]) => <div key={q} className="card" style={{ padding: 24 }}><h3>{q}</h3><p style={{ color: '#5d6b7a' }}>{a}</p></div>)}
        </div>
      </section>

      <section className="container" style={{ padding: '24px 0 72px' }}>
        <div className="card" style={{ padding: 32, textAlign: 'center' }}>
          <h2 style={{ fontSize: 38, marginTop: 0 }}>Prêt à chiffrer votre administratif ?</h2>
          <p style={{ color: '#5d6b7a', fontSize: 18 }}>Le scan est gratuit, rapide et sans engagement.</p>
          <Link className="button" href="/scan">Lancer mon scan gratuit</Link>
        </div>
      </section>
    </main>
  );
}
