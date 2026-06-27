import Link from 'next/link';
import { AnalysisForm } from '../../components/AnalysisForm';

export default function AnalysePage() {
  return (
    <main className="container" style={{ padding: '40px 0 64px' }}>
      <Link href="/result" style={{ color: '#0f766e', fontWeight: 700 }}>← Retour au résultat</Link>
      <h1 style={{ fontSize: 42, marginBottom: 12 }}>Recevoir une analyse personnalisée</h1>
      <p style={{ color: '#5d6b7a', maxWidth: 780 }}>
        Vos résultats de scan donnent une première estimation. L’analyse personnalisée permet de vérifier vos réponses, préciser les tâches et identifier l’agent IA supervisé le plus rentable à tester.
      </p>
      <AnalysisForm />
    </main>
  );
}
