import Link from 'next/link';

const sections = [
  {
    title: '1. Objet',
    body: [
      'Les présentes conditions générales de vente encadrent la commande et la fourniture de l’analyse personnalisée ScanAdmin.',
      'ScanAdmin propose un diagnostic administratif indicatif destiné à aider une entreprise à identifier des tâches répétitives, prioriser des cas d’usage et préparer un test d’agent IA supervisé.',
      'Le service ne constitue pas un conseil juridique, comptable, fiscal, financier ou organisationnel complet.',
    ],
  },
  {
    title: '2. Éditeur et vendeur',
    body: [
      'ScanAdmin est édité par Jeason BACOUL. Les informations administratives complètes de l’éditeur doivent être vérifiées et complétées avant lancement commercial : statut juridique, adresse, numéro d’immatriculation, informations fiscales et TVA si applicables.',
      'Contact : contact@scanadmin.fr.',
    ],
  },
  {
    title: '3. Client concerné',
    body: [
      'Le service s’adresse principalement aux professionnels, dirigeants, indépendants, TPE et PME souhaitant analyser leurs tâches administratives répétitives.',
      'Le client déclare fournir des informations exactes, utiles et non sensibles dans le cadre de sa demande d’analyse.',
    ],
  },
  {
    title: '4. Service vendu',
    body: [
      'L’analyse personnalisée ScanAdmin comprend la lecture du scan, une vérification de cohérence, une priorisation des tâches administratives, une recommandation de premier agent IA supervisé et un plan de test court.',
      'Le livrable peut être transmis sous forme de document numérique, PDF, email structuré ou lien de consultation.',
      'Le livrable reste une aide à la décision. Il ne garantit pas un gain réel, un résultat financier, une réduction certaine de coûts ou la réussite d’un projet IA.',
    ],
  },
  {
    title: '5. Prix',
    body: [
      'Le prix normal prévu de l’analyse personnalisée est de 490 €.',
      'Pendant la phase de lancement, l’analyse personnalisée peut être proposée au prix de 200 €.',
      'Le prix affiché au moment de la commande fait foi. La mention HT ou TTC doit être vérifiée selon le statut juridique et fiscal de l’éditeur avant lancement commercial.',
    ],
  },
  {
    title: '6. Commande et paiement',
    body: [
      'La commande s’effectue depuis le formulaire d’analyse ScanAdmin.',
      'Après validation du formulaire, le client est redirigé vers Stripe Checkout pour régler l’analyse personnalisée.',
      'La commande n’est considérée comme confirmée qu’après paiement accepté par Stripe.',
      'ScanAdmin ne stocke pas directement les informations complètes de carte bancaire. Le paiement est traité par Stripe.',
    ],
  },
  {
    title: '7. Délais de traitement',
    body: [
      'Le délai cible de livraison est de 48 à 72 heures ouvrées après confirmation du paiement et réception des informations nécessaires.',
      'Si les informations fournies sont insuffisantes ou incohérentes, ScanAdmin peut demander des éléments complémentaires avant de finaliser l’analyse.',
      'Le délai peut être prolongé en cas de difficulté technique, d’informations manquantes ou de volume inhabituel de demandes.',
    ],
  },
  {
    title: '8. Droit de rétractation et exécution du service',
    body: [
      'Lorsque le client bénéficie légalement d’un droit de rétractation, il dispose en principe d’un délai de 14 jours pour l’exercer dans les conditions prévues par la réglementation applicable.',
      'Si le client demande expressément que l’analyse commence avant la fin de ce délai, il accepte que le service puisse être exécuté avant l’expiration du délai de rétractation.',
      'Si l’analyse est pleinement exécutée avant la fin du délai, les conséquences sur le droit de rétractation doivent être appréciées selon le statut du client et la réglementation applicable.',
      'Cette section doit être validée juridiquement avant lancement public, notamment selon que le service est vendu uniquement à des professionnels ou également à des consommateurs.',
    ],
  },
  {
    title: '9. Annulation, remboursement et absence de garantie de résultat',
    body: [
      'Aucun remboursement automatique n’est dû lorsque l’analyse a été produite et livrée conformément à la commande.',
      'Une demande de remboursement peut être étudiée au cas par cas si le service n’a pas encore commencé, si le paiement a été réalisé par erreur ou si un incident technique empêche la livraison.',
      'ScanAdmin ne garantit aucun gain de temps réel, aucun retour sur investissement, aucune économie certaine et aucune mise en production automatique d’agent IA.',
    ],
  },
  {
    title: '10. Responsabilité',
    body: [
      'Le client reste seul responsable de ses décisions, de ses outils internes, de ses données, de ses validations et de la mise en œuvre éventuelle d’un agent IA.',
      'ScanAdmin fournit une analyse indicative basée sur les informations transmises par le client.',
      'L’IA peut préparer des tâches, mais toute décision commerciale, comptable, contractuelle, juridique ou sensible doit être validée par un humain compétent.',
    ],
  },
  {
    title: '11. Données personnelles',
    body: [
      'Les données transmises dans le formulaire sont utilisées pour traiter la demande, créer la commande, recevoir le paiement, produire l’analyse et assurer le suivi client.',
      'Le traitement des données est détaillé dans la politique de confidentialité.',
      'Le client doit éviter de transmettre des données sensibles ou confidentielles non nécessaires à l’analyse.',
    ],
  },
  {
    title: '12. Propriété du livrable',
    body: [
      'Le client peut utiliser le livrable pour ses besoins internes.',
      'La méthode, la structure d’analyse, les modèles et la présentation ScanAdmin restent la propriété de ScanAdmin, sauf accord écrit contraire.',
      'Le client ne doit pas revendre le livrable comme une prestation concurrente ou le présenter comme sa propre méthodologie commerciale.',
    ],
  },
  {
    title: '13. Litiges',
    body: [
      'En cas de difficulté, le client est invité à contacter ScanAdmin à l’adresse contact@scanadmin.fr afin de rechercher une solution amiable.',
      'Le droit applicable, la juridiction compétente et les éventuelles modalités de médiation doivent être vérifiés et complétés avant lancement commercial.',
    ],
  },
];

export const metadata = {
  title: 'Conditions générales de vente | ScanAdmin',
  description: 'Conditions générales de vente de l’analyse personnalisée ScanAdmin : commande, paiement Stripe, livraison, limites et responsabilité.',
};

export default function CGVPage() {
  return (
    <main>
      <section className="premium-hero">
        <div className="container hero-shell">
          <div className="hero-copy">
            <p className="badge">Conditions de vente</p>
            <h1>Conditions générales de vente ScanAdmin</h1>
            <p className="hero-subtitle">Ces conditions encadrent la commande de l’analyse personnalisée ScanAdmin, son paiement, sa livraison et ses limites.</p>
            <div className="hero-actions">
              <Link className="button" href="/analyse-personnalisee">Voir l’analyse personnalisée</Link>
              <Link className="ghost-button" href="/confidentialite">Confidentialité</Link>
            </div>
            <p className="hero-note">Document à compléter avec les informations juridiques exactes avant lancement commercial définitif.</p>
          </div>
          <div className="report-preview">
            <div className="report-topline"><span>Service</span><strong>Analyse</strong></div>
            <div className="report-metric-main"><span>Offre lancement</span><strong>200 €</strong></div>
            <div className="metric-grid">
              <div><span>Paiement</span><strong>Stripe</strong></div>
              <div><span>Livraison</span><strong>48-72 h</strong></div>
            </div>
            <div className="priority-list">
              <p>Principes</p>
              <span>Résultats indicatifs</span>
              <span>IA supervisée</span>
              <span>Validation humaine</span>
            </div>
          </div>
        </div>
      </section>

      <section className="container premium-section">
        <div className="section-heading">
          <p className="section-kicker">Version de travail</p>
          <h2>Base contractuelle à valider avant lancement.</h2>
          <p>Cette page doit être complétée avec les informations administratives exactes de l’éditeur et validée selon le statut juridique retenu.</p>
        </div>
        <div className="text-stack">
          {sections.map((section) => (
            <article key={section.title} className="card content-card">
              <h2>{section.title}</h2>
              {section.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
