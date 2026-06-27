import Link from 'next/link';

export default function HomePage() {
  return (
    <main>
      <section className="container" style={{ padding: '56px 0' }}>
        <div className="card" style={{ padding: 32 }}>
          <p style={{ marginTop: 0, color: '#0f766e', fontWeight: 700 }}>Scan IA Administratif pour PME</p>
          <h1 style={{ fontSize: 48, lineHeight: 1.05, margin: '0 0 18px' }}>
            Combien votre administratif vous coûte-t-il chaque mois ?
          </h1>
          <p style={{ fontSize: 20, color: '#5d6b7a', maxWidth: 760 }}>
            Faites le scan en 5 minutes : mails, devis, relances, factures, documents et dossiers clients. Obtenez une estimation du temps perdu, du coût mensuel et des agents IA les plus rentables à mettre en place.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 28 }}>
            <Link className="button" href="/scan">Lancer mon scan gratuit</Link>
            <a className="button" style={{ background: '#102033' }} href="mailto:contact@scanadmin.fr">Demander une analyse</a>
          </div>
        </div>
      </section>

      <section className="container" style={{ paddingBottom: 56 }}>
        <div className="grid grid-3">
          <div className="card" style={{ padding: 22 }}>
            <h2>1. Mesurez</h2>
            <p style={{ color: '#5d6b7a' }}>Répondez à des questions simples sur vos tâches répétitives.</p>
          </div>
          <div className="card" style={{ padding: 22 }}>
            <h2>2. Chiffrez</h2>
            <p style={{ color: '#5d6b7a' }}>Découvrez le temps perdu, le coût mensuel et le coût annuel estimé.</p>
          </div>
          <div className="card" style={{ padding: 22 }}>
            <h2>3. Automatisez</h2>
            <p style={{ color: '#5d6b7a' }}>Recevez les agents IA supervisés les plus rentables à tester.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
