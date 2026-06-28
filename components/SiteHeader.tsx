import Link from 'next/link';
import { Logo } from './Logo';
import styles from './SiteHeader.module.css';

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className={`container header-inner ${styles.wrap}`}>
        <Link href="/" className={styles.logo} aria-label="Accueil ScanAdmin"><Logo compact /></Link>

        <nav className="header-nav" aria-label="Navigation principale">
          <Link href="/scan">Scan</Link>
          <Link href="/method">Méthode</Link>
          <Link href="/catalogue">Agents IA</Link>
          <Link href="/taches">Tâches</Link>
          <Link href="/guides">Guides</Link>
          <Link href="/secteurs">Secteurs</Link>
          <Link href="/tarifs">Tarifs</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        <Link className={`button ${styles.desktopCta}`} href="/scan">Lancer mon scan gratuit</Link>

        <details className={styles.menu}>
          <summary className={styles.button} aria-label="Ouvrir le menu">
            <span></span>
            <span></span>
            <span></span>
          </summary>
          <div className={styles.panel}>
            <Link href="/">Accueil</Link>
            <Link href="/scan">Scan</Link>
            <Link href="/method">Méthode</Link>
            <Link href="/catalogue">Agents IA</Link>
            <Link href="/taches">Tâches administratives</Link>
            <Link href="/cas-usages">Cas d’usage</Link>
            <Link href="/guides">Guides</Link>
            <Link href="/secteurs">Secteurs</Link>
            <Link href="/comparatif">Comparatif</Link>
            <Link href="/pourquoi-scanadmin">Pourquoi ScanAdmin</Link>
            <Link href="/tarifs">Tarifs</Link>
            <Link href="/contact">Contact</Link>
            <Link className={`button ${styles.cta}`} href="/scan">Lancer mon scan gratuit</Link>
          </div>
        </details>
      </div>
    </header>
  );
}
