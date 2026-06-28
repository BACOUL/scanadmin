import Link from 'next/link';

export const metadata = {
  title: 'Retour commande | ScanAdmin',
  robots: { index: false, follow: false },
};

export default function PaymentReturnPage() {
  return (
    <main className="container page-section">
      <section className="card content-card">
        <p style={{ marginTop: 0, color: '#9a3412', fontWeight: 800 }}>Retour commande</p>
        <h1 className="page-title">Votre analyse n’est pas encore confirmée.</h1>
        <p className="page-lead">Vous pouvez revenir au formulaire d’analyse ou consulter l’exemple de rapport ScanAdmin.</p>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 26 }}>
          <Link className="button" href="/analyse">Retour au formulaire</Link>
          <Link className="button" style={{ background: '#102033' }} href="/exemple">Voir un rapport exemple</Link>
        </div>
      </section>
    </main>
  );
}
