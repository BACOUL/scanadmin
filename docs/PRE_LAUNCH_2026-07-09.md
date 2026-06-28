# ScanAdmin — checklist pré-lancement 9 juillet 2026

## Objectif

Préparer ScanAdmin pour un lancement propre dès que Vercel peut être réactivé.

Cette checklist sert de document unique avant mise en ligne publique.

## Statut actuel

- Site premium en place.
- Positionnement IA-first clarifié.
- Pages de conversion refaites.
- Pages de confiance refaites.
- Pages SEO guides et secteurs refaites.
- Navigation corrigée.
- Redirections corrigées.
- Sitemap et robots préparés pour `scanadmin.fr`.
- API leads renforcée.
- Stripe Checkout intégré dans le tunnel d’analyse.
- Webhook Stripe ajouté.
- Pages paiement ajoutées.
- Page CGV ajoutée.
- Acceptation CGV ajoutée au formulaire de commande.
- Demande d’exécution après paiement ajoutée au formulaire.
- Page confidentialité mise à jour avec Stripe, Resend, webhook et commande d’analyse.
- Modèle de livrable d’analyse créé.
- Déploiement Vercel non vérifié tant que la connexion/build Vercel n’est pas disponible.

## 1. Vercel — actions obligatoires

### À faire le 9 juillet ou dès réactivation

- [ ] Reconnecter le projet GitHub `BACOUL/scanadmin` à Vercel si nécessaire.
- [ ] Lancer un déploiement de `main`.
- [ ] Vérifier que le build passe sans erreur.
- [ ] Vérifier l’URL temporaire Vercel.
- [ ] Vérifier le domaine final : `scanadmin.fr`.
- [ ] Vérifier que les redirections fonctionnent.
- [ ] Vérifier que le sitemap est accessible.
- [ ] Vérifier que `robots.txt` est accessible.
- [ ] Vérifier que les headers noindex fonctionnent sur les pages tunnel.

## 2. Variables d’environnement obligatoires

### Domaine

```env
NEXT_PUBLIC_SITE_URL="https://scanadmin.fr"
```

### Stripe Checkout

```env
STRIPE_SECRET_KEY="sk_live_..."
STRIPE_ANALYSIS_PRICE_ID="price_..."
STRIPE_WEBHOOK_SECRET="whsec_..."
```

### Capture de leads — webhook ou email

Au moins une destination fiable doit être configurée.

Webhook :

```env
SCANADMIN_LEADS_WEBHOOK_URL="https://votre-webhook..."
SCANADMIN_LEADS_WEBHOOK_SECRET="secret-optionnel"
```

Email via Resend :

```env
RESEND_API_KEY="re_xxxxxxxxx"
SCANADMIN_LEADS_TO_EMAIL="contact@scanadmin.fr"
SCANADMIN_LEADS_FROM_EMAIL="ScanAdmin <leads@scanadmin.fr>"
```

### Notification paiements Stripe

Recommandé :

```env
SCANADMIN_PAYMENTS_TO_EMAIL="contact@scanadmin.fr"
SCANADMIN_PAYMENTS_FROM_EMAIL="ScanAdmin <paiements@scanadmin.fr>"
```

Option webhook paiements :

```env
SCANADMIN_PAYMENTS_WEBHOOK_URL="https://votre-webhook..."
SCANADMIN_PAYMENTS_WEBHOOK_SECRET="secret-optionnel"
```

### Règle de lancement

- [ ] Ne pas lancer publiquement sans destination fiable pour les leads.
- [ ] Ne pas lancer publiquement sans paiement Stripe testé.
- [ ] Ne pas utiliser le fallback logs serveur comme configuration finale.

## 3. Configuration Stripe

### Produit Stripe

Créer un produit :

```txt
Analyse personnalisée ScanAdmin
```

### Prix Stripe

Créer un prix unique :

```txt
200 €
Paiement unique
EUR
```

Copier le `price_...` dans :

```env
STRIPE_ANALYSIS_PRICE_ID="price_..."
```

### Webhook Stripe

Créer un endpoint :

```txt
https://scanadmin.fr/api/stripe/webhook
```

Événement obligatoire :

```txt
checkout.session.completed
```

Copier le secret dans :

```env
STRIPE_WEBHOOK_SECRET="whsec_..."
```

## 4. Email officiel

- [ ] Créer ou vérifier l’adresse `contact@scanadmin.fr`.
- [ ] Vérifier que cette adresse reçoit bien les emails.
- [ ] Si Resend est utilisé, vérifier le domaine d’envoi.
- [ ] Créer ou vérifier l’adresse d’envoi `paiements@scanadmin.fr` si utilisée.
- [ ] Remplacer l’adresse dans le site si une autre adresse est choisie.

Pages / docs concernées :

- `/contact`
- `/legal`
- `/cgv`
- `/confidentialite`
- `docs/LEAD_CAPTURE_PRODUCTION.md`
- `docs/STRIPE_CHECKOUT_SETUP.md`

## 5. Tests formulaire et tunnel complet

### Test scan gratuit

- [ ] Aller sur `/scan`.
- [ ] Remplir le scan avec des données réalistes.
- [ ] Vérifier l’arrivée sur `/result`.
- [ ] Vérifier que les estimations s’affichent.
- [ ] Vérifier le CTA vers l’analyse personnalisée.

### Test commande analyse payante

- [ ] Aller sur `/analyse` après un scan.
- [ ] Vérifier que le résultat du scan est joint à la commande.
- [ ] Remplir le formulaire.
- [ ] Cocher le consentement de contact.
- [ ] Cocher l’acceptation des CGV.
- [ ] Cocher la demande d’exécution de l’analyse après paiement.
- [ ] Cliquer sur `Commander mon analyse — 200 €`.
- [ ] Vérifier que le lead est créé avec `termsAccepted: true`.
- [ ] Vérifier que le lead est créé avec `immediateExecution: true`.
- [ ] Vérifier la redirection vers Stripe Checkout.
- [ ] Faire un paiement test Stripe.
- [ ] Vérifier l’arrivée sur `/paiement/succes`.
- [ ] Vérifier que l’événement Stripe `checkout.session.completed` apparaît.
- [ ] Vérifier que le webhook `/api/stripe/webhook` reçoit l’événement.
- [ ] Vérifier que la notification paiement arrive par email ou webhook.
- [ ] Vérifier les logs Vercel : aucune erreur `SCANADMIN_CHECKOUT_FAILED`.
- [ ] Vérifier les logs Vercel : aucune erreur `SCANADMIN_PAYMENT_NOTIFICATION_FAILED`.

### Test retour sans paiement

- [ ] Depuis Stripe Checkout, revenir sans payer.
- [ ] Vérifier l’arrivée sur `/paiement/retour`.
- [ ] Vérifier que l’analyse n’est pas considérée comme payée.

## 6. Tests API leads

Tester manuellement `POST /api/leads` avec un payload valide.

Exemple :

```json
{
  "firstName": "Jean",
  "lastName": "Test",
  "company": "Entreprise Test",
  "email": "jean@example.com",
  "phone": "0600000000",
  "sector": "BTP",
  "message": "Je veux une analyse.",
  "consent": true,
  "termsAccepted": true,
  "immediateExecution": true,
  "scanResult": {
    "totalMonthlyHours": 42,
    "monthlyCost": 1260,
    "annualCost": 15120,
    "lowRecoverableHours": 8,
    "highRecoverableHours": 14
  }
}
```

Réponse attendue :

```json
{
  "ok": true,
  "leadId": "lead_...",
  "deliveries": ["webhook"]
}
```

ou :

```json
{
  "ok": true,
  "leadId": "lead_...",
  "deliveries": ["email"]
}
```

## 7. Tests API Checkout

Tester `POST /api/checkout` après création d’un lead.

Payload attendu :

```json
{
  "leadId": "lead_...",
  "email": "jean@example.com",
  "company": "Entreprise Test",
  "firstName": "Jean",
  "lastName": "Test",
  "sector": "BTP"
}
```

Réponse attendue :

```json
{
  "ok": true,
  "url": "https://checkout.stripe.com/...",
  "sessionId": "cs_..."
}
```

## 8. Tests navigation

Pages principales à vérifier :

- [ ] `/`
- [ ] `/scan`
- [ ] `/result`
- [ ] `/analyse`
- [ ] `/analyse-personnalisee`
- [ ] `/paiement/succes`
- [ ] `/paiement/retour`
- [ ] `/method`
- [ ] `/catalogue`
- [ ] `/cas-usages`
- [ ] `/tarifs`
- [ ] `/contact`
- [ ] `/guides`
- [ ] `/secteurs`
- [ ] `/comparatif`
- [ ] `/faq`
- [ ] `/securite`
- [ ] `/limites`
- [ ] `/legal`
- [ ] `/cgv`
- [ ] `/confidentialite`

Redirections à vérifier :

- [ ] `/methodologie` → `/method`
- [ ] `/mentions-legales` → `/legal`
- [ ] `/agents` → `/catalogue`
- [ ] `/rapport-exemple` → `/exemple`
- [ ] `/rapport` → `/exemple`
- [ ] `/pricing` → `/tarifs`

## 9. Tests mobile

- [ ] Header visible.
- [ ] Menu mobile ouvert correctement.
- [ ] CTA scan visible.
- [ ] Formulaire scan utilisable.
- [ ] Formulaire analyse utilisable.
- [ ] Cases obligatoires visibles : contact, CGV, exécution après paiement.
- [ ] Redirection Stripe Checkout utilisable sur mobile.
- [ ] Pages longues lisibles.
- [ ] Tableaux lisibles avec scroll horizontal.
- [ ] Footer lisible.

Point connu : le menu mobile utilise encore `<details>` et ne se ferme pas automatiquement au clic. Ce n’est pas bloquant, mais améliorable.

## 10. SEO technique

- [ ] Vérifier les titres de pages.
- [ ] Vérifier les descriptions meta.
- [ ] Vérifier le sitemap.
- [ ] Vérifier `robots.txt`.
- [ ] Vérifier que le sitemap utilise `https://scanadmin.fr`.
- [ ] Vérifier que `/cgv` est dans le sitemap.
- [ ] Vérifier que `/result`, `/analyse`, `/merci` ne sont pas dans le sitemap.
- [ ] Vérifier que `/paiement/succes` et `/paiement/retour` ne sont pas indexables.
- [ ] Vérifier que les pages guides sont indexables.
- [ ] Vérifier que les pages secteurs sont indexables.
- [ ] Ajouter le domaine dans Google Search Console.
- [ ] Soumettre le sitemap.

Sitemap attendu :

```txt
https://scanadmin.fr/sitemap.xml
```

## 11. SEO contenu prioritaire

Pages à pousser en priorité :

- `/guides/audit-ia-pme`
- `/guides/agent-ia-administratif`
- `/guides/automatiser-taches-administratives`
- `/guides/cout-administratif-pme`
- `/secteurs/btp`
- `/secteurs/transport-logistique`
- `/secteurs/nettoyage-professionnel`
- `/comparatif`
- `/cas-usages`

## 12. Juridique / confiance

À vérifier avant lancement commercial :

- [ ] Statut juridique exact.
- [ ] Adresse de l’éditeur si nécessaire.
- [ ] Numéro d’immatriculation si applicable.
- [ ] Informations fiscales si applicables.
- [ ] Adresse email officielle.
- [ ] Hébergeur.
- [ ] Page `/cgv` relue et complétée.
- [ ] Page `/confidentialite` relue avec les outils réellement branchés.
- [ ] Politique de confidentialité cohérente avec les outils réellement branchés : Stripe, Resend, webhook, éventuel CRM ou analytics.
- [ ] Prix 200 € clarifié : TTC ou HT selon décision juridique/comptable.
- [ ] Politique de remboursement cohérente avec le service vendu.
- [ ] Droit de rétractation / exécution anticipée validé selon le type de clientèle réellement visé.

Pages concernées :

- `/legal`
- `/cgv`
- `/confidentialite`
- `/tarifs`
- `/contact`
- `/analyse-personnalisee`

## 13. Prix et offre

Prix actuellement affichés :

- Scan gratuit : 0 €.
- Analyse personnalisée : prix normal 490 €.
- Offre de lancement : 200 €.
- Agent IA supervisé : sur devis.

À vérifier avant lancement :

- [ ] Prix cohérents sur `/tarifs`.
- [ ] Prix cohérents sur `/analyse-personnalisee`.
- [ ] Prix cohérent dans Stripe : 200 € TTC ou HT selon décision juridique/comptable.
- [ ] Message clair : 200 € = offre de lancement.
- [ ] Le bouton de commande lance bien Stripe Checkout.
- [ ] Le paiement confirmé déclenche bien une notification interne.

## 14. Livrable d’analyse

Document de référence :

```txt
docs/ANALYSIS_DELIVERABLE_TEMPLATE.md
```

Avant le lancement :

- [ ] Relire le modèle de livrable.
- [ ] Vérifier que le modèle est livrable à un client réel.
- [ ] Préparer une version exemple anonymisée si besoin.
- [ ] Vérifier que le livrable ne promet aucun gain garanti.
- [ ] Vérifier que le livrable mentionne la validation humaine.
- [ ] Préparer un format de livraison : PDF, Google Docs exporté ou document envoyé par email.

## 15. Process après paiement

Document de référence :

```txt
docs/PAID_ANALYSIS_PROCESS.md
```

Process officiel :

```txt
Scan gratuit
→ demande d’analyse
→ acceptation CGV
→ demande d’exécution après paiement
→ création lead
→ paiement Stripe Checkout 200 €
→ confirmation paiement
→ production analyse
→ livraison
→ relance qualité
```

À vérifier :

- [ ] Un lead non payé ne déclenche pas la production.
- [ ] Un paiement confirmé crée une action interne claire.
- [ ] Le client sait quoi attendre après paiement.
- [ ] Le délai de livraison est cohérent.

## 16. Tracking et analytics

Non obligatoire au premier lancement, mais recommandé.

- [ ] Ajouter un outil analytics léger si souhaité.
- [ ] Ne pas ajouter de tracking sans mettre à jour la confidentialité si nécessaire.
- [ ] Suivre au minimum : visites, scans lancés, scans terminés, clic analyse, formulaires envoyés, Checkout lancé, paiement confirmé.

## 17. Checklist finale de lancement

Le site peut être lancé publiquement seulement si :

- [ ] Le build Vercel passe.
- [ ] Le domaine fonctionne.
- [ ] Le formulaire de lead envoie réellement les demandes.
- [ ] L’acceptation CGV est obligatoire avant Checkout.
- [ ] Stripe Checkout fonctionne en test.
- [ ] Le webhook Stripe fonctionne.
- [ ] Une notification paiement arrive bien.
- [ ] Les pages principales répondent en 200.
- [ ] Les redirections principales fonctionnent.
- [ ] Les pages légales sont cohérentes avec un service payant.
- [ ] L’adresse de contact fonctionne.
- [ ] Le sitemap est accessible.
- [ ] Le scan gratuit fonctionne sur mobile.
- [ ] Le livrable d’analyse est prêt à être rempli.

## 18. Priorités après lancement

Après mise en ligne :

1. Tester 10 scans réels.
2. Obtenir 3 à 5 lancements Checkout.
3. Obtenir 1 à 2 paiements à 200 €.
4. Livrer les premières analyses avec `docs/ANALYSIS_DELIVERABLE_TEMPLATE.md`.
5. Noter les objections.
6. Améliorer les pages selon les objections réelles.
7. Créer les premiers cas clients anonymisés.
8. Améliorer l’automatisation seulement après preuve de paiement.

## 19. Décision importante

ScanAdmin ne doit pas être lancé comme un simple site vitrine.

Le lancement doit vérifier une chose :

```txt
Est-ce que des PME comprennent le problème, lancent le scan, puis paient une analyse personnalisée ?
```

C’est le vrai signal de départ.
