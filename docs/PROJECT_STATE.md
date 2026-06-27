# Project State — ScanAdmin

## État actuel

Le projet est en phase d'initialisation MVP et dispose déjà d'un premier déploiement Vercel.

URL Vercel actuelle :

```txt
https://scanadmin.vercel.app/
```

Le parcours de base a été testé sur mobile le 27 juin 2026 :

```txt
Accueil → /scan → /result
```

Résultat observé : le scan affiche correctement le temps administratif estimé, le coût mensuel, le coût annuel, le temps récupérable et les agents IA recommandés.

Le repo contient déjà :

- documentation produit ;
- modèle de calcul des pertes administratives ;
- catalogue initial des agents IA ;
- structure Next.js ;
- landing page ;
- page de scan ;
- page résultat ;
- page d'analyse personnalisée ;
- page de confirmation ;
- composants de résultat ;
- formulaire de scan côté client ;
- formulaire de demande d'analyse.

## Branche principale

La branche `main` contient la base initiale du projet.

La branche `lead-capture-v1` ajoute la première version de capture lead.

## Produit visé

ScanAdmin doit devenir un outil web simple qui permet à une PME de :

1. faire un scan rapide de ses tâches administratives ;
2. connaître le temps perdu par mois ;
3. connaître le coût mensuel et annuel estimé ;
4. voir le temps récupérable avec agents IA supervisés ;
5. recevoir les 3 agents IA recommandés ;
6. demander une analyse personnalisée.

## Domaine cible

Nom de marque : ScanAdmin.

Domaine cible : `scanadmin.fr` si réservé par Jeason.

Domaine temporaire Vercel : `https://scanadmin.vercel.app/`.

## Statut fonctionnel V1

Fonctionnalités déjà validées ou amorcées :

- `/` : landing page.
- `/scan` : formulaire de scan.
- `/result` : résultat du scan depuis localStorage.
- `/analyse` : demande d'analyse personnalisée.
- `/merci` : confirmation de demande.
- `/api/leads` : endpoint de réception de formulaire, à connecter ensuite à un vrai envoi email ou stockage.
- `lib/calculations.ts` : calcul du temps et du coût administratif.
- `lib/agents.ts` : catalogue des agents IA.

## Ce qu'il reste à faire immédiatement

1. Tester le nouveau parcours : résultat → analyse → merci.
2. Connecter `/api/leads` à un vrai service d'email ou de stockage.
3. Ajouter les métadonnées SEO.
4. Connecter le domaine `scanadmin.fr`.
5. Tester le scan avec 5 PME.
6. Créer un exemple de rapport PDF.
7. Ajouter les pages méthodologie, tarifs et agents.

## Décision stratégique

Le projet ne doit pas être vendu comme une agence IA généraliste. Le bon angle est :

> mesurer d'abord les pertes de temps administratives, puis recommander les agents IA vraiment rentables.
