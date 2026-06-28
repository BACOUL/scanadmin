# ScanAdmin — commandes et contrôles du 9 juillet 2026

## Objectif

Ce document sert de procédure opérationnelle le jour où Vercel peut être réactivé.

Ne pas improviser. Suivre l’ordre.

```txt
1. récupérer le repo
2. installer
3. vérifier TypeScript
4. vérifier le build
5. tester localement
6. configurer Vercel
7. tester production
8. tester Stripe
9. décider go / no-go
```

## 0. Pré-requis

À avoir avant de commencer :

- accès GitHub au repo `BACOUL/scanadmin` ;
- accès Vercel ;
- accès Stripe ;
- accès au domaine `scanadmin.fr` ;
- adresse email opérationnelle `contact@scanadmin.fr` ou équivalent ;
- destination leads : email Resend ou webhook ;
- destination paiements : email Resend ou webhook.

## 1. Récupérer le repo

```bash
git clone https://github.com/BACOUL/scanadmin.git
cd scanadmin
git checkout main
git pull origin main
```

Si le repo existe déjà sur le PC :

```bash
cd scanadmin
git checkout main
git pull origin main
```

## 2. Installer les dépendances

```bash
npm install
```

Vérifier que Stripe est bien installé :

```bash
npm ls stripe
```

## 3. Vérification TypeScript

```bash
npm run typecheck
```

Résultat attendu :

```txt
aucune erreur TypeScript
```

Si erreur :

```txt
corriger uniquement le fichier concerné
ne pas modifier le positionnement
ne pas modifier les prix
ne pas supprimer Stripe
ne pas contourner l’erreur avec any inutile ou ts-ignore
```

## 4. Vérification build

```bash
npm run build
```

Résultat attendu :

```txt
build Next.js terminé sans erreur
```

Si erreur de build :

1. Lire le premier fichier mentionné.
2. Corriger la cause minimale.
3. Relancer :

```bash
npm run typecheck
npm run build
```

## 5. Lancer le site en local

```bash
npm run dev
```

URL locale :

```txt
http://localhost:3000
```

## 6. Variables locales minimales pour test Stripe

Créer un fichier `.env.local` uniquement sur le PC, sans le commiter.

```env
NEXT_PUBLIC_SITE_URL="http://localhost:3000"
STRIPE_SECRET_KEY="sk_test_..."
STRIPE_ANALYSIS_PRICE_ID="price_..."
STRIPE_WEBHOOK_SECRET="whsec_..."
```

Pour tester les leads par logs uniquement, il est possible de ne pas configurer Resend/webhook en local. Le fallback attendu sera alors :

```txt
SCANADMIN_LEAD_LOG_FALLBACK
```

## 7. Pages à tester en local

Ouvrir :

```txt
http://localhost:3000/
http://localhost:3000/scan
http://localhost:3000/result
http://localhost:3000/analyse
http://localhost:3000/analyse-personnalisee
http://localhost:3000/paiement/succes
http://localhost:3000/paiement/retour
http://localhost:3000/tarifs
http://localhost:3000/contact
http://localhost:3000/legal
http://localhost:3000/cgv
http://localhost:3000/confidentialite
http://localhost:3000/guides
http://localhost:3000/secteurs
```

À vérifier :

- page en 200 ;
- header visible ;
- footer visible ;
- bouton scan visible ;
- pas d’erreur console critique ;
- mobile correct dans l’inspecteur navigateur.

## 8. Test du scan complet local

1. Aller sur `/scan`.
2. Remplir un scan réaliste.
3. Vérifier la redirection vers `/result`.
4. Vérifier que les chiffres s’affichent.
5. Cliquer vers l’analyse personnalisée.
6. Vérifier que le résultat du scan est joint à la commande.

## 9. Test API leads local

```bash
curl -i -X POST http://localhost:3000/api/leads \
  -H "Content-Type: application/json" \
  -d '{"firstName":"Jean","lastName":"Test","company":"Entreprise Test","email":"jean@example.com","phone":"0600000000","sector":"BTP","message":"Je veux une analyse.","consent":true,"termsAccepted":true,"immediateExecution":true,"scanResult":{"totalMonthlyHours":42,"monthlyCost":1260,"annualCost":15120,"lowRecoverableHours":8,"highRecoverableHours":14}}'
```

Réponse attendue avec fallback local :

```json
{
  "ok": true,
  "leadId": "lead_...",
  "deliveries": ["server_log_fallback"]
}
```

Réponse attendue avec webhook ou Resend configuré :

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

## 10. Test API checkout local

Remplacer `lead_...` par un vrai lead créé au test précédent.

```bash
curl -i -X POST http://localhost:3000/api/checkout \
  -H "Content-Type: application/json" \
  -d '{"leadId":"lead_test_123","email":"jean@example.com","company":"Entreprise Test","firstName":"Jean","lastName":"Test","sector":"BTP"}'
```

Réponse attendue si Stripe est bien configuré :

```json
{
  "ok": true,
  "url": "https://checkout.stripe.com/...",
  "sessionId": "cs_..."
}
```

Si erreur `checkout_failed`, vérifier :

- `STRIPE_SECRET_KEY` ;
- `STRIPE_ANALYSIS_PRICE_ID` ;
- existence du prix dans Stripe ;
- mode test ou live cohérent entre clé et price ID.

## 11. Test Stripe Checkout dans le navigateur

Depuis le formulaire `/analyse` :

1. Remplir le formulaire.
2. Cocher consentement contact.
3. Cocher acceptation CGV.
4. Cocher demande d’exécution après paiement.
5. Cliquer `Commander mon analyse — 200 €`.
6. Vérifier redirection Stripe Checkout.
7. Payer en mode test.
8. Vérifier retour sur `/paiement/succes`.

Carte test Stripe habituelle :

```txt
4242 4242 4242 4242
```

Utiliser une date future et un CVC quelconque en mode test.

## 12. Test webhook Stripe local

Installer ou lancer Stripe CLI si disponible.

```bash
stripe listen --forward-to localhost:3000/api/stripe/webhook
```

Copier le `whsec_...` donné par Stripe CLI dans `.env.local` :

```env
STRIPE_WEBHOOK_SECRET="whsec_..."
```

Relancer le serveur local :

```bash
npm run dev
```

Déclencher un événement test :

```bash
stripe trigger checkout.session.completed
```

Le vrai test prioritaire reste le paiement depuis Checkout, car il contient les métadonnées `leadId`, `company`, `offer`.

## 13. Configuration Vercel — variables production

Dans Vercel, ajouter :

```env
NEXT_PUBLIC_SITE_URL="https://scanadmin.fr"
STRIPE_SECRET_KEY="sk_live_..."
STRIPE_ANALYSIS_PRICE_ID="price_..."
STRIPE_WEBHOOK_SECRET="whsec_..."
```

Leads par email :

```env
RESEND_API_KEY="re_..."
SCANADMIN_LEADS_TO_EMAIL="contact@scanadmin.fr"
SCANADMIN_LEADS_FROM_EMAIL="ScanAdmin <leads@scanadmin.fr>"
```

Paiements par email :

```env
SCANADMIN_PAYMENTS_TO_EMAIL="contact@scanadmin.fr"
SCANADMIN_PAYMENTS_FROM_EMAIL="ScanAdmin <paiements@scanadmin.fr>"
```

Option webhook :

```env
SCANADMIN_LEADS_WEBHOOK_URL="https://votre-webhook..."
SCANADMIN_LEADS_WEBHOOK_SECRET="secret-optionnel"
SCANADMIN_PAYMENTS_WEBHOOK_URL="https://votre-webhook..."
SCANADMIN_PAYMENTS_WEBHOOK_SECRET="secret-optionnel"
```

## 14. Configuration Stripe production

Dans Stripe :

1. Créer produit :

```txt
Analyse personnalisée ScanAdmin
```

2. Créer prix :

```txt
200 €
Paiement unique
EUR
```

3. Copier le `price_...` dans Vercel.

4. Créer webhook :

```txt
https://scanadmin.fr/api/stripe/webhook
```

5. Événement :

```txt
checkout.session.completed
```

6. Copier le `whsec_...` dans Vercel.

## 15. Déployer sur Vercel

Depuis Vercel :

```txt
Deploy main
```

Ou depuis CLI si disponible :

```bash
vercel --prod
```

Ne pas considérer le lancement validé tant que le build Vercel n’est pas passé.

## 16. Tests production obligatoires

Remplacer par le domaine final :

```txt
https://scanadmin.fr
```

Tester :

```txt
https://scanadmin.fr/
https://scanadmin.fr/scan
https://scanadmin.fr/result
https://scanadmin.fr/analyse
https://scanadmin.fr/analyse-personnalisee
https://scanadmin.fr/paiement/succes
https://scanadmin.fr/paiement/retour
https://scanadmin.fr/tarifs
https://scanadmin.fr/contact
https://scanadmin.fr/legal
https://scanadmin.fr/cgv
https://scanadmin.fr/confidentialite
https://scanadmin.fr/sitemap.xml
https://scanadmin.fr/robots.txt
```

## 17. Test headers noindex production

```bash
curl -I https://scanadmin.fr/result
curl -I https://scanadmin.fr/analyse
curl -I https://scanadmin.fr/merci
curl -I https://scanadmin.fr/paiement/succes
curl -I https://scanadmin.fr/paiement/retour
```

Attendu :

```txt
X-Robots-Tag: noindex, nofollow
```

## 18. Test sitemap production

```bash
curl -s https://scanadmin.fr/sitemap.xml | head
```

Vérifier :

```txt
contient https://scanadmin.fr
contient /cgv
ne contient pas /result
ne contient pas /analyse
ne contient pas /merci
ne contient pas /paiement/succes
ne contient pas /paiement/retour
```

## 19. Test robots production

```bash
curl -s https://scanadmin.fr/robots.txt
```

Attendu :

```txt
Allow: /
Sitemap: https://scanadmin.fr/sitemap.xml
```

## 20. Test redirections production

```bash
curl -I https://scanadmin.fr/methodologie
curl -I https://scanadmin.fr/mentions-legales
curl -I https://scanadmin.fr/agents
curl -I https://scanadmin.fr/rapport-exemple
curl -I https://scanadmin.fr/rapport
curl -I https://scanadmin.fr/pricing
```

Attendu : redirection vers :

```txt
/method
/legal
/catalogue
/exemple
/exemple
/tarifs
```

## 21. Test paiement production en mode test avant live

Avant d’utiliser les clés live, faire un test complet en mode test si possible :

```txt
sk_test_...
price_test_...
whsec_test_...
```

Valider :

- lead créé ;
- redirection Checkout ;
- paiement test ;
- page succès ;
- webhook reçu ;
- notification paiement reçue ;
- logs sans erreur.

## 22. Passage live Stripe

Seulement après test complet :

```txt
remplacer sk_test par sk_live
remplacer price_test par price live
remplacer whsec_test par webhook live
redeploy Vercel
refaire un test réel contrôlé
```

## 23. Logs Vercel à surveiller

Erreurs à chercher :

```txt
SCANADMIN_LEAD_DELIVERY_FAILED
SCANADMIN_CHECKOUT_FAILED
SCANADMIN_STRIPE_WEBHOOK_SIGNATURE_FAILED
SCANADMIN_PAYMENT_NOTIFICATION_FAILED
```

Logs fallback à éviter en production finale :

```txt
SCANADMIN_LEAD_LOG_FALLBACK
SCANADMIN_PAYMENT_LOG_FALLBACK
```

## 24. Go / no-go

### Go si tout est vrai

- [ ] `npm run typecheck` passe.
- [ ] `npm run build` passe.
- [ ] Build Vercel passe.
- [ ] Domaine `scanadmin.fr` fonctionne.
- [ ] Scan gratuit fonctionne.
- [ ] Formulaire analyse fonctionne.
- [ ] CGV obligatoires avant Checkout.
- [ ] Stripe Checkout fonctionne.
- [ ] Webhook Stripe fonctionne.
- [ ] Notification paiement reçue.
- [ ] Sitemap propre.
- [ ] Robots propre.
- [ ] Pages tunnel en noindex.
- [ ] Page confidentialité cohérente.
- [ ] Page CGV cohérente.
- [ ] Livrable d’analyse prêt.

### No-go si un seul de ces points échoue

- build Vercel échoue ;
- Stripe Checkout ne se lance pas ;
- paiement confirmé mais pas de notification ;
- webhook Stripe invalide ;
- formulaire lead ne crée pas de lead ;
- domaine final ne fonctionne pas ;
- CGV non validées ;
- prix HT/TTC non décidé.

## 25. Première journée après lancement

Objectif : ne pas optimiser trop tôt.

À faire :

```txt
1. faire 3 scans réels soi-même
2. faire 1 commande test contrôlée
3. vérifier email lead
4. vérifier email paiement
5. vérifier logs Vercel
6. envoyer le site à 5 personnes qualifiées
7. noter les objections
8. ne modifier le site qu’après observation réelle
```

Signal recherché :

```txt
Est-ce que des PME comprennent le problème, lancent le scan, puis paient une analyse personnalisée ?
```
