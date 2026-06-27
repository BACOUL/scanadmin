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
- API leads renforcée.
- Déploiement Vercel non vérifié tant que la connexion/build Vercel n’est pas disponible.

## 1. Vercel — actions obligatoires

### À faire le 9 juillet ou dès réactivation

- [ ] Reconnecter le projet GitHub `BACOUL/scanadmin` à Vercel si nécessaire.
- [ ] Lancer un déploiement de `main`.
- [ ] Vérifier que le build passe sans erreur.
- [ ] Vérifier l’URL temporaire Vercel.
- [ ] Vérifier le domaine final si configuré : `scanadmin.fr`.
- [ ] Vérifier que les redirections fonctionnent.
- [ ] Vérifier que le sitemap est accessible.
- [ ] Vérifier que `robots.txt` est accessible.

## 2. Variables d’environnement

### Capture de leads — option webhook

À configurer si les leads partent vers Make, Zapier, n8n, Airtable, Google Sheets ou un CRM.

```env
SCANADMIN_LEADS_WEBHOOK_URL="https://votre-webhook..."
SCANADMIN_LEADS_WEBHOOK_SECRET="secret-optionnel"
```

### Capture de leads — option email Resend

À configurer si les leads doivent arriver par email.

```env
RESEND_API_KEY="re_xxxxxxxxx"
SCANADMIN_LEADS_TO_EMAIL="contact@scanadmin.fr"
SCANADMIN_LEADS_FROM_EMAIL="ScanAdmin <leads@scanadmin.fr>"
```

### Règle de lancement

- [ ] Ne pas lancer publiquement sans au moins une destination de lead fiable.
- [ ] Le fallback logs serveur est acceptable pour test, mais pas comme configuration finale.

## 3. Email officiel

- [ ] Créer ou vérifier l’adresse `contact@scanadmin.fr`.
- [ ] Vérifier que cette adresse reçoit bien les emails.
- [ ] Si Resend est utilisé, vérifier le domaine d’envoi.
- [ ] Remplacer l’adresse dans le site si une autre adresse est choisie.

Pages concernées :

- `/contact`
- `/legal`
- `/confidentialite`
- `docs/LEAD_CAPTURE_PRODUCTION.md`

## 4. Tests formulaire

### Test scan gratuit

- [ ] Aller sur `/scan`.
- [ ] Remplir le scan avec des données réalistes.
- [ ] Vérifier l’arrivée sur `/result`.
- [ ] Vérifier que les estimations s’affichent.
- [ ] Vérifier le CTA vers l’analyse personnalisée.

### Test analyse personnalisée

- [ ] Aller sur `/analyse-personnalisee` après un scan.
- [ ] Vérifier que le résultat du scan est joint.
- [ ] Remplir le formulaire.
- [ ] Cocher le consentement.
- [ ] Envoyer la demande.
- [ ] Vérifier la redirection vers `/merci`.
- [ ] Vérifier que le lead arrive par webhook ou email.
- [ ] Vérifier les logs Vercel pour confirmer qu’il n’y a pas d’erreur `SCANADMIN_LEAD_DELIVERY_FAILED`.

## 5. Tests API leads

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

## 6. Tests navigation

Pages principales à vérifier :

- [ ] `/`
- [ ] `/scan`
- [ ] `/result`
- [ ] `/analyse`
- [ ] `/analyse-personnalisee`
- [ ] `/merci`
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
- [ ] `/confidentialite`

Redirections à vérifier :

- [ ] `/methodologie` → `/method`
- [ ] `/mentions-legales` → `/legal`
- [ ] `/agents` → `/catalogue`
- [ ] `/rapport-exemple` → `/exemple`
- [ ] `/rapport` → `/exemple`
- [ ] `/pricing` → `/tarifs`

## 7. Tests mobile

- [ ] Header visible.
- [ ] Menu mobile ouvert correctement.
- [ ] CTA scan visible.
- [ ] Formulaire scan utilisable.
- [ ] Formulaire analyse utilisable.
- [ ] Pages longues lisibles.
- [ ] Tableaux lisibles avec scroll horizontal.
- [ ] Footer lisible.

Point connu : le menu mobile utilise encore `<details>` et ne se ferme pas automatiquement au clic. Ce n’est pas bloquant, mais améliorable.

## 8. SEO technique

- [ ] Vérifier les titres de pages.
- [ ] Vérifier les descriptions meta.
- [ ] Vérifier le sitemap.
- [ ] Vérifier `robots.txt`.
- [ ] Vérifier que les pages guides sont indexables.
- [ ] Vérifier que les pages secteurs sont indexables.
- [ ] Ajouter le domaine dans Google Search Console.
- [ ] Soumettre le sitemap.

Sitemap attendu :

```txt
/sitemap.xml
```

## 9. SEO contenu prioritaire

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

## 10. Juridique / confiance

À vérifier avant lancement commercial :

- [ ] Statut juridique exact.
- [ ] Adresse de l’éditeur si nécessaire.
- [ ] Numéro d’immatriculation si applicable.
- [ ] Informations fiscales si applicables.
- [ ] Adresse email officielle.
- [ ] Hébergeur.
- [ ] Politique de confidentialité cohérente avec les outils réellement branchés.
- [ ] Si paiement ajouté plus tard : créer CGV complètes.

Pages concernées :

- `/legal`
- `/confidentialite`
- `/tarifs`
- `/contact`

## 11. Prix et offre

Prix actuellement affichés :

- Scan gratuit : 0 €.
- Analyse personnalisée : prix normal 490 €.
- Offre de lancement : 200 €.
- Agent IA supervisé : sur devis.

À vérifier avant lancement :

- [ ] Prix cohérents sur `/tarifs`.
- [ ] Prix cohérents sur `/analyse-personnalisee`.
- [ ] Message clair : 200 € = offre de lancement.
- [ ] Pas de paiement automatique tant que Stripe n’est pas prêt.

## 12. Tracking et analytics

Non obligatoire au premier lancement, mais recommandé.

- [ ] Ajouter un outil analytics léger si souhaité.
- [ ] Ne pas ajouter de tracking sans mettre à jour la confidentialité si nécessaire.
- [ ] Suivre au minimum : visites, scans lancés, scans terminés, clic analyse, formulaires envoyés.

## 13. Checklist finale de lancement

Le site peut être lancé publiquement seulement si :

- [ ] Le build Vercel passe.
- [ ] Le domaine fonctionne.
- [ ] Le formulaire de lead envoie réellement les demandes.
- [ ] Les pages principales répondent en 200.
- [ ] Les redirections principales fonctionnent.
- [ ] Les pages légales sont cohérentes.
- [ ] L’adresse de contact fonctionne.
- [ ] Le sitemap est accessible.
- [ ] Le scan gratuit fonctionne sur mobile.

## 14. Priorités après lancement

Après mise en ligne :

1. Tester 10 scans réels.
2. Obtenir 3 à 5 demandes d’analyse.
3. Appeler ou contacter chaque lead manuellement.
4. Noter les objections.
5. Améliorer les pages selon les objections réelles.
6. Créer les premiers cas clients anonymisés.
7. Ajouter Stripe uniquement quand l’offre est confirmée.

## 15. Décision importante

ScanAdmin ne doit pas être lancé comme un simple site vitrine.

Le lancement doit vérifier une chose :

```txt
Est-ce que des PME comprennent le problème, lancent le scan, puis demandent une analyse ?
```

C’est le vrai signal de départ.
