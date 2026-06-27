import Link from 'next/link';
import { ScanForm } from '../../components/ScanForm';

export default function ScanPage() {
  return (
    <main className="container scan-page">
      <Link href="/" className="back-link">← Accueil</Link>
      <section className="scan-hero card">
        <p className="eyebrow">Scan gratuit</p>
        <h1>Lancer le scan administratif</h1>
        <p>
          Répondez aux questions principales. En quelques minutes, vous obtenez une estimation du temps perdu, du coût mensuel et des agents IA à prioriser.
        </p>
      </section>
      <ScanForm />
    </main>
  );
}
