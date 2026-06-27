import Link from 'next/link';
import { Logo } from './Logo';

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <Logo compact />
          <p className="footer-text">Le scan IA administratif qui chiffre le coût des tâches répétitives et recommande les agents IA supervisés les plus utiles.</p>
        </div>
        <div>
          <h3>Produit</h3>
          <Link href="/scan">Lancer le scan</Link>
          <Link href="/methodologie">Méthodologie</Link>
          <Link href="/agents">Agents IA</Link>
          <Link href="/tarifs">Tarifs</Link>
        </div>
        <div>
          <h3>Entreprise</h3>
          <Link href="/contact">Contact</Link>
          <Link href="/rapport-exemple">Rapport exemple</Link>
          <Link href="/mentions-legales">Mentions légales</Link>
          <Link href="/confidentialite">Confidentialité</Link>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>ScanAdmin — résultats estimatifs, agents IA supervisés.</span>
      </div>
    </footer>
  );
}
