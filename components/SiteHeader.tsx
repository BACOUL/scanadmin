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
        <Link className="button header-cta" href="/scan">Scan gratuit</Link>
      </div>
    </header>
  );
}
