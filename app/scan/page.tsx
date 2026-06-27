import Link from 'next/link';
import { ScanForm } from '../../components/ScanForm';
import styles from './ScanPage.module.css';

export default function ScanPage() {
  return (
    <main className={`container ${styles.page}`}>
      <Link href="/" className={styles.back}>← Accueil</Link>
      <section className={`card ${styles.hero}`}>
        <p className={styles.eyebrow}>Scan gratuit</p>
        <h1>Lancer le scan administratif</h1>
        <p>
          Répondez aux questions principales. En quelques minutes, vous obtenez une estimation du temps perdu, du coût mensuel et des agents IA à prioriser.
        </p>
      </section>
      <ScanForm />
    </main>
  );
}
