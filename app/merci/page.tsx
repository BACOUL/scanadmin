import Link from 'next/link';

export default function MerciPage() {
  return (
    <main className="container" style={{ padding: '32px 0 56px' }}>
      <div className="card content-card">
        <p style={{ marginTop: 0, color: '#0f766e', fontWeight: 800 }}>Demande reçue</p>
        <h1 className="page-title">Votre demande d’analyse est enregistrée.</h1>
        <p className="page-lead">
          Vos résultats ScanAdmin vont servir de base pour vérifier les tâches administratives à traiter en priorité.
        </p>
        <div className="grid grid-2" style={{ marginTop: 24 }}>
          <div className="card mini-card" style={{ boxShadow: 'none' }}>
            <strong>1. Vérification</strong>
            <p style={{ color: '#5d6b7a' }}>Vos réponses et vos chiffres sont relus.</p>
          </div>
          <div className="card mini-card" style={{ boxShadow: 'none' }}>
            <strong>2. Priorisation</strong>
            <p style={{ color: '#5d6b7a' }}>Les tâches et agents IA les plus utiles sont identifiés.</p>
          </div>
        </div>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 26 }}>
          <Link className="button" href="/scan">Faire un nouveau scan</Link>
          <Link className="button" style={{ background: '#102033' }} href="/">Retour à l’accueil</Link>
        </div>
      </div>
    </main>
  );
}
