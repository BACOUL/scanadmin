import Link from 'next/link';

export const metadata = {
  title: 'Commande confirmée | ScanAdmin',
  robots: { index: false, follow: false },
};

export default function PaymentSuccessPage() {
  return (
    <main className="container page-section">
      <section className="card content-card">
        <p style={{ marginTop: 0, color: '#0f766e', fontWeight: 800 }}>Commande confirmée</p>
        <h1 className="page-title">Votre analyse ScanAdmin est commandée.</h1>
        <p className="page-lead">Votre demande peut maintenant être traitée avec les éléments de votre scan. Vous serez recontacté si une information complémentaire est nécessaire.</p>
        <div className="grid grid-2" style={{ marginTop: 24 }}>
          <div className="card mini-card" style={{ boxShadow: 'none' }}>
            <strong>1. Vérification du scan</strong>
            <p style={{ color: '#5d6b7a' }}>Les chiffres et les tâches déclarées sont relus.</p>
          </div>
          <div className="card mini-card" style={{ boxShadow: 'none' }}>
            <strong>2. Livraison de l’analyse</strong>
            <p style={{ color: '#5d6b7a' }}>Délai cible : 48 à 72 h ouvrées après réception des informations nécessaires.</p>
          </div>
        </div>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 26 }}>
          <Link className="button" href="/exemple">Voir un rapport exemple</Link>
          <Link className="button" style={{ background: '#102033' }} href="/">Retour à l’accueil</Link>
        </div>
      </section>
    </main>
  );
}
