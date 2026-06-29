import Link from 'next/link';

const editorFields = [
  ['Service commercial', 'ScanAdmin'],
  ['Exploitation', 'ScanAdmin est un service / une branche commerciale exploitée par TimeProofs.'],
  ['Entreprise', 'TimeProofs — Jeason Alexandre Bacoul, entrepreneur individuel'],
  ['SIREN', '999 356 439'],
  ['Adresse', '3 rue de l’Église de Louppy, 55000 Les Hauts-de-Chée, France'],
  ['Régime TVA', 'Franchise en base — TVA non applicable, art. 293 B du CGI'],
  ['Contact ScanAdmin', 'contact@scanadmin.fr'],
  ['Contact éditeur', 'contact@timeproofs.io'],
  ['Directeur de la publication', 'Jeason Alexandre Bacoul'],
  ['Activité', 'Diagnostic administratif, estimation de charge administrative et recommandation d’agents IA supervisés pour PME'],
];

const hostFields = [
  ['Hébergeur technique', 'Vercel Inc.'],
  ['Adresse', '440 N Barranca Ave #4133, Covina, CA 91723, États-Unis'],
  ['Site web', 'vercel.com'],
  ['Rôle', 'Hébergement et déploiement technique du site ScanAdmin'],
];

const responsibilities = [
  ['Résultats indicatifs', 'Les résultats du scan et de l’analyse sont des estimations destinées à prioriser une décision. Ils ne constituent pas une garantie de gain réel.'],
  ['Pas de conseil réglementé', 'ScanAdmin ne remplace pas un conseil juridique, comptable, fiscal, social, financier ou organisationnel complet.'],
  ['Validation humaine', 'Les agents IA éventuellement recommandés doivent préparer le travail, pas décider seuls.'],
  ['Service distinct d’une mise en place IA', 'L’analyse à 200 € ne comprend pas le développement, le paramétrage ou le déploiement complet d’un agent IA.'],
];

const aiLimits = [
  ['L’IA peut aider à préparer', 'résumer, classer, structurer, proposer un brouillon ou signaler des points à vérifier'],
  ['L’IA ne doit pas décider seule', 'prix final, engagement commercial, paiement, conformité, décision contractuelle ou action sensible'],
  ['L’humain reste responsable', 'le dirigeant ou l’équipe garde la validation finale avant toute utilisation externe'],
  ['Mise en place séparée', 'toute demande de création ou configuration d’un agent IA fait l’objet d’un cadrage et d’un devis distinct'],
];

export const metadata = {
  title: 'Mentions légales ScanAdmin | TimeProofs',
  description: 'Mentions légales ScanAdmin : service exploité par TimeProofs, entrepreneur individuel Jeason Alexandre Bacoul, SIREN, contact, hébergement et limites du service.',
};

export default function LegalPage() {
  return (
    <main>
      <section className="premium-hero">
        <div className="container hero-shell">
          <div className="hero-copy">
            <p className="badge">Mentions légales</p>
            <h1>Informations légales du site ScanAdmin.</h1>
            <p className="hero-subtitle">ScanAdmin est un service exploité par TimeProofs. Cette page regroupe les informations d’identification, d’hébergement, de propriété intellectuelle et les limites d’utilisation du service.</p>
            <div className="hero-actions">
              <Link className="button" href="/contact">Contacter ScanAdmin</Link>
              <Link className="ghost-button" href="/confidentialite">Voir la confidentialité</Link>
            </div>
            <p className="hero-note">ScanAdmin est une branche commerciale / un service de TimeProofs, et non une société distincte.</p>
          </div>

          <div className="report-preview">
            <div className="report-topline"><span>Éditeur</span><strong>TimeProofs</strong></div>
            <div className="report-metric-main"><span>Service</span><strong style={{ fontSize: 34 }}>ScanAdmin</strong></div>
            <div className="metric-grid">
              <div><span>SIREN</span><strong>999 356 439</strong></div>
              <div><span>TVA</span><strong>Non applicable</strong></div>
            </div>
            <div className="priority-list">
              <p>Pages liées</p>
              <span>CGV</span>
              <span>Confidentialité</span>
              <span>Contact</span>
            </div>
          </div>
        </div>
      </section>

      <section className="container premium-section split-section">
        <div>
          <p className="section-kicker">Éditeur</p>
          <h2>Identification du site et de son responsable.</h2>
        </div>
        <div className="card content-card">
          <table className="premium-table" style={{ minWidth: 0 }}>
            <tbody>
              {editorFields.map(([label, value]) => (
                <tr key={label}><td>{label}</td><td>{value}</td></tr>
              ))}
            </tbody>
          </table>
          <p>Les commandes, paiements, factures et livrables ScanAdmin relèvent de TimeProofs, exploité par Jeason Alexandre Bacoul en entrepreneur individuel.</p>
        </div>
      </section>

      <section className="container premium-section split-section reversed">
        <div className="card content-card">
          <table className="premium-table" style={{ minWidth: 0 }}>
            <tbody>
              {hostFields.map(([label, value]) => (
                <tr key={label}><td>{label}</td><td>{value}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
        <div>
          <p className="section-kicker">Hébergement</p>
          <h2>Le site est hébergé et déployé via Vercel.</h2>
          <p className="section-text">Cette section précise l’hébergeur technique utilisé pour la mise en ligne du site. Elle devra être mise à jour si l’hébergement change.</p>
        </div>
      </section>

      <section className="container premium-section">
        <div className="section-heading">
          <p className="section-kicker">Responsabilité</p>
          <h2>Les résultats ScanAdmin sont des estimations, pas des garanties.</h2>
          <p>Le service aide à comprendre et prioriser des tâches administratives. Il ne garantit pas un retour sur investissement, une économie réelle ou une performance automatique.</p>
        </div>
        <div className="comparison-grid">
          {responsibilities.map(([title, text]) => (
            <div key={title} className="comparison-card muted-card">
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container premium-section split-section">
        <div>
          <p className="section-kicker">Usage de l’IA</p>
          <h2>ScanAdmin repose sur une logique d’IA supervisée.</h2>
        </div>
        <div className="deliverable-preview">
          <div className="deliverable-header"><span>Limites IA</span><strong>Humain responsable</strong></div>
          {aiLimits.map(([title, text]) => (
            <div key={title} className="deliverable-row">
              <strong>{title}</strong>
              <span>{text}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="container premium-section">
        <div className="grid grid-2">
          <div className="card content-card">
            <h2>Propriété intellectuelle</h2>
            <p>Les textes, structures, éléments graphiques, logos, contenus et interfaces du site ScanAdmin sont protégés. Toute reproduction ou réutilisation non autorisée est interdite, sauf autorisation écrite préalable.</p>
            <p>Les marques, services, outils ou plateformes mentionnés restent la propriété de leurs titulaires respectifs.</p>
          </div>
          <div className="card content-card">
            <h2>Données personnelles</h2>
            <p>Les informations relatives aux données personnelles, au scan, aux demandes d’analyse, aux paiements et aux droits utilisateur sont précisées dans la politique de confidentialité.</p>
            <Link className="button" href="/confidentialite">Lire la confidentialité</Link>
          </div>
        </div>
      </section>

      <section className="container premium-section split-section reversed">
        <div className="card content-card">
          <h2>Prix et offres</h2>
          <p>L’analyse personnalisée est proposée avec une offre de lancement à 200 €. Ce prix correspond à l’analyse et au livrable, pas à la création complète d’un agent IA.</p>
          <p>La mise en place d’un agent IA supervisé, si demandée après l’analyse, fait l’objet d’un cadrage et d’un devis séparé.</p>
          <Link className="button" href="/tarifs">Voir les tarifs</Link>
        </div>
        <div>
          <p className="section-kicker">Offres commerciales</p>
          <h2>Les mentions légales ne remplacent pas les CGV.</h2>
          <p className="section-text">Les conditions applicables à l’analyse personnalisée et aux éventuelles prestations complémentaires sont précisées dans les conditions générales de vente.</p>
        </div>
      </section>

      <section className="container premium-final-cta">
        <p className="section-kicker">Question légale ou administrative</p>
        <h2>Une information manque ou doit être corrigée ?</h2>
        <p>Contactez ScanAdmin pour toute demande relative aux informations légales, à la confidentialité ou à l’utilisation du service.</p>
        <div className="hero-actions center-actions">
          <Link className="button" href="/contact">Contacter ScanAdmin</Link>
          <Link className="ghost-button" href="/cgv">Voir les CGV</Link>
        </div>
      </section>
    </main>
  );
}
