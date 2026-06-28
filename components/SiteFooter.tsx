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
          <Link href="/analyse-personnalisee">Analyse personnalisée</Link>
          <Link href="/method">Méthode</Link>
          <Link href="/catalogue">Agents IA</Link>
          <Link href="/tarifs">Tarifs</Link>
          <Link href="/exemple">Rapport exemple</Link>
        </div>
        <div>
          <h3>Confiance</h3>
          <Link href="/qui-sommes-nous">Qui sommes-nous</Link>
          <Link href="/pourquoi-scanadmin">Pourquoi ScanAdmin</Link>
          <Link href="/securite">Sécurité</Link>
          <Link href="/limites">Limites</Link>
          <Link href="/comparatif">Comparatif</Link>
        </div>
        <div>
          <h3>Ressources</h3>
          <Link href="/guides">Guides IA PME</Link>
          <Link href="/taches">Tâches administratives</Link>
          <Link href="/secteurs">Pages secteurs</Link>
          <Link href="/cas-usages">Cas d’usage</Link>
          <Link href="/faq">FAQ</Link>
        </div>
        <div>
          <h3>Entreprise</h3>
          <Link href="/contact">Contact</Link>
          <Link href="/legal">Informations légales</Link>
          <Link href="/cgv">CGV</Link>
          <Link href="/confidentialite">Confidentialité</Link>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>ScanAdmin — résultats estimatifs, agents IA supervisés.</span>
      </div>
    </footer>
  );
}
