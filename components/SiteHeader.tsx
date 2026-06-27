import Link from 'next/link';
import { Logo } from './Logo';
import styles from './SiteHeader.module.css';

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className={`container header-inner ${styles.wrap}`}>
        <span className={styles.logo}><Logo compact /></span>

        <nav className="header-nav" aria-label="Navigation principale">
          <Link href="/scan">Scan</Link>
          <Link href="/methodologie">Méthodologie</Link>
          <Link href="/agents">Agents IA</Link>
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
            <Link href="/methodologie">Méthodologie</Link>
            <Link href="/agents">Agents IA</Link>
            <Link href="/tarifs">Tarifs</Link>
            <Link href="/contact">Contact</Link>
            <Link className={`button ${styles.cta}`} href="/scan">Lancer mon scan gratuit</Link>
          </div>
        </details>
      </div>
    </header>
  );
}
