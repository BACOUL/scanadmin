# ScanAdmin — configuration Stripe Checkout

## Objectif

Le tunnel de commande doit être propre dès le départ :

```txt
/analyse
→ création du lead
→ création d’une session Stripe Checkout
→ paiement de l’analyse à 200 €
→ page de confirmation
→ webhook Stripe
→ notification interne
→ production de l’analyse
```

## Variables d’environnement obligatoires

À ajouter dans Vercel avant lancement :

```env
NEXT_PUBLIC_SITE_URL="https://scanadmin.fr"
STRIPE_SECRET_KEY="sk_live_..."
STRIPE_ANALYSIS_PRICE_ID="price_..."
STRIPE_WEBHOOK_SECRET="whsec_..."
```

## Variables recommandées pour les notifications paiement

Les paiements confirmés peuvent être envoyés vers un webhook ou par email.

### Webhook

```env
SCANADMIN_PAYMENTS_WEBHOOK_URL="https://votre-webhook..."
SCANADMIN_PAYMENTS_WEBHOOK_SECRET="secret-optionnel"
```

Si ces variables ne sont pas définies, le webhook de paiement réutilise les variables leads si elles existent :

```env
SCANADMIN_LEADS_WEBHOOK_URL="https://votre-webhook..."
SCANADMIN_LEADS_WEBHOOK_SECRET="secret-optionnel"
```

### Email via Resend

```env
RESEND_API_KEY="re_..."
SCANADMIN_PAYMENTS_TO_EMAIL="contact@scanadmin.fr"
SCANADMIN_PAYMENTS_FROM_EMAIL="ScanAdmin <paiements@scanadmin.fr>"
```

Si ces variables ne sont pas définies, le webhook de paiement réutilise les variables leads :

```env
SCANADMIN_LEADS_TO_EMAIL="contact@scanadmin.fr"
SCANADMIN_LEADS_FROM_EMAIL="ScanAdmin <leads@scanadmin.fr>"
```

## Configuration Stripe

### Produit

Créer un produit Stripe :

```txt
Analyse personnalisée ScanAdmin
```

### Prix

Créer un prix unique :

```txt
200 €
Paiement unique
EUR
```

Copier l’identifiant du prix dans :

```env
STRIPE_ANALYSIS_PRICE_ID="price_..."
```

## Webhook Stripe

Créer un endpoint webhook Stripe :

```txt
https://scanadmin.fr/api/stripe/webhook
```

Événement minimum à écouter :

```txt
checkout.session.completed
```

Copier le secret webhook dans :

```env
STRIPE_WEBHOOK_SECRET="whsec_..."
```

## Pages ajoutées

- `/paiement/succes` : page de confirmation après paiement.
- `/paiement/retour` : page de retour si l’utilisateur ne finalise pas Checkout.

Ces pages sont en noindex.

## Routes API ajoutées

### `POST /api/checkout`

Crée une session Stripe Checkout.

Payload attendu :

```json
{
  "leadId": "lead_...",
  "email": "client@example.com",
  "company": "Entreprise",
  "firstName": "Jean",
  "lastName": "Dupont",
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

### `POST /api/stripe/webhook`

Valide la signature Stripe et traite uniquement :

```txt
checkout.session.completed
```

Si le paiement est confirmé, l’API notifie ScanAdmin par webhook, email ou logs serveur.

## Test complet à faire le 9 juillet

1. Ajouter les variables Vercel.
2. Déployer `main`.
3. Faire un scan.
4. Aller sur `/analyse`.
5. Remplir le formulaire.
6. Vérifier la création du lead.
7. Vérifier la redirection Stripe Checkout.
8. Payer en mode test.
9. Vérifier `/paiement/succes`.
10. Vérifier l’événement Stripe `checkout.session.completed`.
11. Vérifier la notification paiement.
12. Vérifier les logs Vercel.

## Règle business

L’analyse personnalisée ne doit être produite qu’après paiement confirmé.

Le lead seul ne déclenche pas la production. Il déclenche seulement la création de la commande et l’accès au paiement.
