import Link from 'next/link';

const editorFields = [
  ['Nom commercial', 'ScanAdmin'],
  ['Éditeur', 'Jeason BACOUL — informations administratives complètes à vérifier avant lancement commercial'],
  ['Contact', 'contact@scanadmin.fr'],
  ['Directeur de la publication', 'Jeason BACOUL'],
  ['Activité', 'Diagnostic administratif, estimation de charge administrative et recommandation d’agents IA supervisés pour PME'],
];

const hostFields = [
  ['Hébergeur technique', 'Vercel Inc.'],
  ['Adresse', '440 N Barranca Ave #4133, Covina, CA 91723, États-Unis'],
  ['Site web', 'vercel.com'],
  ['Rôle', 'Hébergement et déploiement technique du site ScanAdmin'],
];

const responsibilities = [
  ['Résultats indicatifs', 'Les résultats du scan sont des estimations destinées à prioriser une analyse. Ils ne constituent pas une garantie de gain réel.'],
  ['Pas de conseil juridique ou comptable', 'ScanAdmin ne remplace pas un conseil juridique, comptable, fiscal, social ou organisationnel complet.'],
  ['Validation humaine', 'Les agents IA éventuellement recommandés doivent préparer le travail, pas décider seuls.'],
  ['Évolution du service', 'Les contenus, offres, prix et fonctionnalités peuvent évoluer pendant la phase de lancement.'],
];

const aiLimits = [
  ['L’IA peut aider à préparer', 'résumer, classer, structurer, proposer un brouillon ou signaler des points à vérifier'],
  ['L’IA ne doit pas décider seule', 'prix final, engagement commercial, paiement, conformité, décision contractuelle ou action sensible'],
  ['L’humain reste responsable', 'le dirigeant ou l’équipe garde la validation finale avant toute utilisation externe'],
];

export const metadata = {
  title: 'Mentions légales ScanAdmin | Informations légales du site',
  description: 'Mentions légales ScanAdmin : éditeur, contact, hébergement, propriété intellectuelle, limites de responsabilité et usage des agents IA supervisés.',
};

export default function LegalPage() {
  return (
    <main>
      <section className="premium-hero">
        <div className="container hero-shell">
          <div className="hero-copy">
            <p className="badge">Mentions légales</p>
            <h1>Informations légales du site ScanAdmin.</h1>
            <p className="hero-subtitle">Cette page regroupe les informations d’identification, d’hébergement, de propriété intellectuelle et les limites d’utilisation du service ScanAdmin.</p>
            <div className="hero-actions">
              <Link className="button" href="/contact">Contacter ScanAdmin</Link>
              <Link className="ghost-button" href="/confidentialite">Voir la confidentialité</Link>
            </div>
            <p className="hero-note">À vérifier avant lancement commercial : statut juridique exact, adresse, numéro d’immatriculation et informations fiscales si applicables.</p>
          </div>

          <div className="report-preview">
            <div className="report-topline"><span>Cadre</span><strong>Site professionnel</strong></div>
            <div className="report-metric-main"><span>Principe</span><strong style={{ fontSize: 34 }}>Transparence</strong></div>
            <div className="metric-grid">
              <div><span>Éditeur</span><strong>À compléter</strong></div>
              <div><span>Hébergeur</span><strong>Vercel</strong></div>
            </div>
            <div className="priority-list">
              <p>Pages liées</p>
              <span>Confidentialité</span>
              <span>Contact</span>
              <span>Tarifs</span>
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
          <p>Les informations administratives complètes doivent être finalisées avant l’ouverture commerciale complète du service, notamment si ScanAdmin est exploité par une société, une micro-entreprise ou une autre structure déclarée.</p>
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
            <p>Les informations relatives aux données personnelles, au scan, aux demandes d’analyse et aux droits utilisateur sont précisées dans la politique de confidentialité.</p>
            <Link className="button" href="/confidentialite">Lire la confidentialité</Link>
          </div>
        </div>
      </section>

      <section className="container premium-section split-section reversed">
        <div className="card content-card">
          <h2>Prix et offres</h2>
          <p>Les prix affichés peuvent évoluer pendant la phase de lancement. L’analyse personnalisée est présentée avec un prix normal prévu et une offre de lancement.</p>
          <p>Les modalités commerciales détaillées devront être précisées dans des conditions de vente si la vente en ligne ou la contractualisation directe est activée.</p>
          <Link className="button" href="/tarifs">Voir les tarifs</Link>
        </div>
        <div>
          <p className="section-kicker">Offres commerciales</p>
          <h2>Les mentions légales ne remplacent pas des CGV.</h2>
          <p className="section-text">Si ScanAdmin active un paiement en ligne, un abonnement, une vente à des particuliers ou des prestations contractualisées, des conditions générales adaptées devront être ajoutées ou communiquées.</p>
        </div>
      </section>

      <section className="container premium-section comparison-section">
        <div className="section-heading">
          <p className="section-kicker">Mise à jour</p>
          <h2>Cette page doit évoluer avec le statut réel du projet.</h2>
        </div>
        <div className="comparison-grid">
          <div className="comparison-card muted-card"><h3>Avant lancement</h3><p>Compléter les informations administratives exactes : structure, adresse, immatriculation, TVA si applicable.</p></div>
          <div className="comparison-card highlight-card"><h3>Après ajout paiement</h3><p>Ajouter ou publier les conditions commerciales adaptées à l’offre vendue.</p></div>
          <div className="comparison-card muted-card"><h3>Après ajout outils</h3><p>Mettre à jour hébergement, sous-traitants, analytics, stockage ou prestataires techniques si nécessaire.</p></div>
        </div>
      </section>

      <section className="container premium-final-cta">
        <p className="section-kicker">Question légale ou administrative</p>
        <h2>Une information manque ou doit être corrigée ?</h2>
        <p>Contactez ScanAdmin pour toute demande relative aux informations légales, à la confidentialité ou à l’utilisation du service.</p>
        <div className="hero-actions center-actions">
          <Link className="button" href="/contact">Contacter ScanAdmin</Link>
          <Link className="ghost-button" href="/confidentialite">Voir la confidentialité</Link>
        </div>
      </section>
    </main>
  );
}
