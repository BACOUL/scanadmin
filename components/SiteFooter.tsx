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
          <Link href="/catalogue">Agents IA</Link>
          <Link href="/tarifs">Tarifs</Link>
          <Link href="/exemple">Rapport exemple</Link>
        </div>
        <div>
          <h3>Ressources</h3>
          <Link href="/guides">Guides IA PME</Link>
          <Link href="/secteurs">Pages secteurs</Link>
          <Link href="/guides/audit-ia-pme">Audit IA PME</Link>
          <Link href="/guides/agent-ia-administratif">Agent IA administratif</Link>
          <Link href="/faq">FAQ</Link>
        </div>
        <div>
          <h3>Secteurs</h3>
          <Link href="/secteurs/btp">BTP</Link>
          <Link href="/secteurs/transport-logistique">Transport</Link>
          <Link href="/secteurs/nettoyage-professionnel">Nettoyage</Link>
          <Link href="/secteurs/securite-privee">Sécurité privée</Link>
        </div>
        <div>
          <h3>Entreprise</h3>
          <Link href="/contact">Contact</Link>
          <Link href="/legal">Informations légales</Link>
          <Link href="/confidentialite">Confidentialité</Link>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>ScanAdmin — résultats estimatifs, agents IA supervisés.</span>
      </div>
    </footer>
  );
}
