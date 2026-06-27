import Link from 'next/link';
import { AnalysisForm } from '../../components/AnalysisForm';
import styles from './AnalysePage.module.css';

export default function AnalysePage() {
  return (
    <main className={`container ${styles.page}`}>
      <Link href="/result" className={styles.back}>← Retour au résultat</Link>
      <section className={`card ${styles.hero}`}>
        <p style={{ color: '#0f766e', fontWeight: 800, marginTop: 0 }}>Analyse personnalisée — lancement 200 €</p>
        <h1>Recevoir un diagnostic exploitable</h1>
        <p>Prix normal prévu : 490 €. L’offre de lancement permet d’obtenir le diagnostic à 200 € pendant la phase de construction de la méthode ScanAdmin.</p>
        <p>Vos résultats donnent une première estimation. L’analyse personnalisée vérifie les chiffres, classe vos priorités et vous indique le premier agent IA supervisé à tester.</p>
        <p><Link href="/analyse-personnalisee" style={{ color: '#0f766e', fontWeight: 800 }}>Voir ce qui est inclus dans l’analyse →</Link></p>
      </section>
      <AnalysisForm />
    </main>
  );
}
