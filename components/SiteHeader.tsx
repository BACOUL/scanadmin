import Link from 'next/link';
import { Logo } from './Logo';

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Logo compact />

        <nav className="header-nav" aria-label="Navigation principale">
          <Link href="/scan">Scan</Link>
          <Link href="/methodologie">Méthodologie</Link>
          <Link href="/agents">Agents IA</Link>
          <Link href="/tarifs">Tarifs</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        <Link className="button header-cta" href="/scan">Lancer mon scan gratuit</Link>

        <details className="mobile-menu">
          <summary className="mobile-menu-button" aria-label="Ouvrir le menu">
            <span></span>
            <span></span>
            <span></span>
          </summary>
          <div className="mobile-menu-panel">
            <Link href="/">Accueil</Link>
            <Link href="/scan">Scan</Link>
            <Link href="/methodologie">Méthodologie</Link>
            <Link href="/agents">Agents IA</Link>
            <Link href="/tarifs">Tarifs</Link>
            <Link href="/contact">Contact</Link>
            <Link className="button mobile-menu-cta" href="/scan">Lancer mon scan gratuit</Link>
          </div>
        </details>
      </div>
    </header>
  );
}
