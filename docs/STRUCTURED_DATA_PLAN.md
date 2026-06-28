# ScanAdmin — plan données structurées

## Objectif

Renforcer la compréhension du site par les moteurs de recherche et les moteurs IA.

ScanAdmin doit être compris comme :

```txt
un service de diagnostic IA administratif pour PME
qui chiffre les tâches répétitives
et recommande un premier agent IA supervisé à tester.
```

## Implémenté

### Global

Fichier :

```txt
components/StructuredData.tsx
```

Types JSON-LD ajoutés :

```txt
Organization
WebSite
Service
```

Rendu global dans :

```txt
app/layout.tsx
```

## Organization

But : identifier ScanAdmin comme entité.

Champs utilisés :

```txt
name
url
logo
description
```

À compléter plus tard si nécessaire :

```txt
sameAs
contactPoint
founder
address
legalName
```

Ne pas compléter avec des informations non certaines.

## WebSite

But : déclarer le site officiel.

Champs utilisés :

```txt
name
url
publisher
inLanguage
```

À ajouter plus tard si utile :

```txt
potentialAction SearchAction
```

Uniquement si le site possède une vraie recherche interne.

## Service

But : expliquer l’offre principale.

Service déclaré :

```txt
Analyse personnalisée ScanAdmin
```

Nature :

```txt
Diagnostic IA administratif pour PME
```

Offre :

```txt
200 EUR
```

Point à vérifier avant lancement :

```txt
prix TTC ou HT selon décision juridique / comptable
```

## À ajouter ensuite

### FAQPage

Priorité :

```txt
/
/analyse-personnalisee
/exemple
/guides/agent-ia-administratif
/guides/cout-administratif-pme
```

Chaque FAQPage doit correspondre aux questions réellement visibles dans la page.

Ne pas ajouter de données structurées FAQ si la FAQ n’est pas visible pour l’utilisateur.

### Article

À ajouter sur :

```txt
/guides/*
```

Champs recommandés :

```txt
headline
description
datePublished
dateModified
author
publisher
mainEntityOfPage
```

### BreadcrumbList

À ajouter sur :

```txt
/guides/*
/secteurs/*
/taches/*
/agents/*
```

### Service spécifique

À ajouter plus tard sur :

```txt
/analyse-personnalisee
```

Avec une description détaillée de l’analyse personnalisée.

## Robots IA

Fichier :

```txt
app/robots.ts
```

Crawlers explicitement autorisés sur les pages publiques :

```txt
Googlebot
Bingbot
OAI-SearchBot
ChatGPT-User
```

Pages bloquées :

```txt
/result
/analyse
/merci
/paiement/
/api/
```

Objectif : rendre les pages publiques découvrables, mais garder le tunnel, les paiements et l’API hors indexation.

## Règle qualité

Ne pas faire de données structurées artificielles.

Chaque bloc JSON-LD doit correspondre au contenu visible ou réel du site.

Règle :

```txt
pas de fausse note
pas de faux avis
pas de fausse organisation
pas de fausse adresse
pas de faux fondateur affiché
pas de FAQ invisible
```

## Vérification le 9 juillet

Après déploiement :

1. Ouvrir la page d’accueil.
2. Inspecter le HTML.
3. Vérifier la présence de `application/ld+json`.
4. Vérifier que `scanadmin.fr` remplace bien l’URL locale.
5. Tester robots :

```bash
curl -s https://scanadmin.fr/robots.txt
```

6. Tester sitemap :

```bash
curl -s https://scanadmin.fr/sitemap.xml | head
```

7. Vérifier dans Search Console après mise en ligne.

## Prochaine étape recommandée

Créer la première page SEO longue traîne :

```txt
/taches/devis
```

Objectif : capter les recherches concrètes autour de :

```txt
agent IA devis
automatiser devis artisan
préparer devis avec IA
IA devis PME
```
