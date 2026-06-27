# Lead Capture — ScanAdmin

## Objectif

Transformer la page résultat en prospect exploitable.

Le parcours cible est :

```txt
/result → /analyse → /merci
```

## Pages ajoutées

### `/analyse`

Page de demande d'analyse personnalisée.

Elle récupère le dernier résultat de scan depuis le navigateur et l'affiche dans le formulaire.

Champs :

- prénom ;
- nom ;
- entreprise ;
- email ;
- téléphone ;
- secteur ;
- message optionnel ;
- consentement de contact.

### `/merci`

Page de confirmation après envoi de la demande.

### `/api/leads`

Endpoint de réception de formulaire.

Statut actuel : première version technique. Elle valide les champs requis et confirme la réception.

## Limite actuelle

L'endpoint `/api/leads` ne stocke pas encore les leads et n'envoie pas encore d'email réel.

À faire ensuite : connecter un vrai service :

- email transactionnel ;
- base de données ;
- Google Sheet ;
- CRM ;
- outil d'automatisation.

## Recommandation pratique

Pour une V2 rapide, connecter les leads vers :

1. Email à Jeason.
2. Google Sheet de suivi.
3. Notification simple.

## Règle RGPD

Avant acquisition réelle, ajouter :

- politique de confidentialité ;
- durée de conservation ;
- finalité du traitement ;
- contact pour suppression des données.
