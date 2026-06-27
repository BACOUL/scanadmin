import Link from 'next/link';

export default function MerciPage() {
  return (
    <main className="container" style={{ padding: '56px 0 64px' }}>
      <div className="card" style={{ padding: 32 }}>
        <p style={{ marginTop: 0, color: '#0f766e', fontWeight: 700 }}>Demande reçue</p>
        <h1 style={{ fontSize: 42, marginBottom: 12 }}>Votre demande d’analyse a bien été enregistrée.</h1>
        <p style={{ color: '#5d6b7a', fontSize: 18, maxWidth: 760 }}>
          Nous allons vérifier vos résultats ScanAdmin et revenir vers vous pour préciser les tâches administratives à analyser en priorité.
        </p>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 26 }}>
          <Link className="button" href="/scan">Faire un nouveau scan</Link>
          <Link className="button" style={{ background: '#102033' }} href="/">Retour à l’accueil</Link>
        </div>
      </div>
    </main>
  );
}
