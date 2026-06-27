import Link from 'next/link';
import { ScanForm } from '../../components/ScanForm';

export default function ScanPage() {
  return (
    <main className="container" style={{ padding: '40px 0 64px' }}>
      <Link href="/" style={{ color: '#0f766e', fontWeight: 700 }}>← Retour</Link>
      <h1 style={{ fontSize: 40, marginBottom: 12 }}>Lancer le scan administratif</h1>
      <p style={{ color: '#5d6b7a', maxWidth: 760 }}>
        Remplissez les informations principales. Le résultat est une estimation rapide destinée à identifier les tâches administratives les plus coûteuses.
      </p>
      <ScanForm />
    </main>
  );
}
