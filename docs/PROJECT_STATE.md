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
- composants de résultat ;
- formulaire de scan côté client.

## Branche principale

La branche `main` contient maintenant la base initiale du projet.

La première branche de travail historique était :

```txt
init-mvp
```

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
- `lib/calculations.ts` : calcul du temps et du coût administratif.
- `lib/agents.ts` : catalogue des agents IA.

## Ce qu'il reste à faire immédiatement

1. Améliorer la page résultat pour expliquer ce que signifient les chiffres.
2. Ajouter une vraie capture de lead à la place du lien mailto.
3. Ajouter une page de confirmation `/merci`.
4. Ajouter les métadonnées SEO.
5. Connecter le domaine `scanadmin.fr`.
6. Ajouter un avertissement visible : estimation non garantie.
7. Tester le scan avec 5 PME.
8. Créer un exemple de rapport PDF.

## Décision stratégique

Le projet ne doit pas être vendu comme une agence IA généraliste. Le bon angle est :

> mesurer d'abord les pertes de temps administratives, puis recommander les agents IA vraiment rentables.
