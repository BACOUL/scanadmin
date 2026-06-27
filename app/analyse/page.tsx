import Link from 'next/link';
import { AnalysisForm } from '../../components/AnalysisForm';
import styles from './AnalysePage.module.css';

export default function AnalysePage() {
  return (
    <main className={`container ${styles.page}`}>
      <Link href="/result" className={styles.back}>← Retour au résultat</Link>
      <section className={`card ${styles.hero}`}>
        <h1>Recevoir une analyse personnalisée</h1>
        <p>Vos résultats donnent une première estimation. L’analyse personnalisée permet de vérifier vos réponses, préciser les tâches et identifier l’agent IA supervisé le plus rentable à tester.</p>
      </section>
      <AnalysisForm />
    </main>
  );
}
