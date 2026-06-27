# ScanAdmin — configuration capture de leads

## Objectif

Le formulaire d’analyse personnalisée envoie les demandes vers `POST /api/leads`.

L’API valide les champs obligatoires, crée un lead structuré, puis tente de l’envoyer vers une ou plusieurs destinations configurées.

## Champs obligatoires

- `firstName`
- `lastName`
- `company`
- `email`
- `consent: true`

Les champs `phone`, `sector`, `message` et `scanResult` sont optionnels.

## Variables d’environnement recommandées

### Option 1 — Webhook

À utiliser avec Zapier, Make, n8n, Google Sheets via webhook, Airtable ou un CRM.

```env
SCANADMIN_LEADS_WEBHOOK_URL="https://votre-webhook.example.com"
SCANADMIN_LEADS_WEBHOOK_SECRET="secret-optionnel"
```

Si `SCANADMIN_LEADS_WEBHOOK_SECRET` est défini, l’API ajoute l’en-tête :

```txt
Authorization: Bearer <secret>
```

### Option 2 — Email via Resend

À utiliser pour recevoir chaque demande par email.

```env
RESEND_API_KEY="re_xxxxxxxxx"
SCANADMIN_LEADS_TO_EMAIL="contact@scanadmin.fr"
SCANADMIN_LEADS_FROM_EMAIL="ScanAdmin <leads@scanadmin.fr>"
```

`SCANADMIN_LEADS_FROM_EMAIL` doit correspondre à un domaine autorisé dans Resend.

## Fallback si aucune intégration n’est configurée

Si aucun webhook et aucun email ne sont configurés, l’API accepte le lead et l’écrit dans les logs serveur Vercel avec le marqueur :

```txt
SCANADMIN_LEAD_LOG_FALLBACK
```

Ce fallback est utile temporairement, mais il ne doit pas être la configuration finale de production.

## Réponse API

Succès :

```json
{
  "ok": true,
  "leadId": "lead_...",
  "deliveries": ["webhook", "email"]
}
```

Fallback logs :

```json
{
  "ok": true,
  "leadId": "lead_...",
  "deliveries": ["server_log_fallback"]
}
```

Erreur validation :

```json
{
  "ok": false,
  "error": "invalid_lead"
}
```

Erreur livraison :

```json
{
  "ok": false,
  "error": "delivery_failed",
  "leadId": "lead_..."
}
```

## À faire avant lancement public

1. Créer l’adresse email officielle `contact@scanadmin.fr` ou décider d’une adresse réelle.
2. Configurer au minimum une destination fiable : webhook ou Resend.
3. Tester un envoi depuis `/analyse-personnalisee`.
4. Vérifier que le lead arrive bien dans l’outil choisi.
5. Vérifier les logs Vercel pour confirmer qu’il n’y a pas d’erreur `SCANADMIN_LEAD_DELIVERY_FAILED`.
6. Mettre à jour la page confidentialité si une solution CRM, tableur ou outil d’emailing est ajoutée.
