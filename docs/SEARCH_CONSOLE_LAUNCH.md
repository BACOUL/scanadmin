# ScanAdmin — procédure Search Console lancement

## Objectif

Mettre `scanadmin.fr` en condition d’indexation propre dès la mise en ligne.

La stratégie officielle est :

```txt
SEO long terme
AI-first
pages utiles et citables
sitemap soumis
suivi des impressions
amélioration selon les requêtes réelles
```

Ce document ne sert pas à forcer des ventes immédiates. Il sert à vérifier que Google découvre correctement ScanAdmin, ses pages piliers et son cocon `/taches`.

---

## Sources de référence

Documentation Google à consulter si l’interface change :

```txt
Ajouter une propriété Search Console
https://support.google.com/webmasters/answer/34592?hl=fr

Valider la propriété du site
https://support.google.com/webmasters/answer/9008080?hl=fr

Gérer les sitemaps
https://support.google.com/webmasters/answer/7451001?hl=fr

Outil d’inspection d’URL
https://support.google.com/webmasters/answer/9012289?hl=fr
```

---

## 1. Préconditions avant Search Console

Ne pas commencer Search Console tant que ces points ne sont pas vérifiés :

- [ ] Le domaine `scanadmin.fr` pointe bien vers Vercel.
- [ ] Le site répond en HTTPS.
- [ ] La page d’accueil répond en HTTP 200.
- [ ] `https://scanadmin.fr/sitemap.xml` est accessible.
- [ ] `https://scanadmin.fr/robots.txt` est accessible.
- [ ] Les pages principales répondent en 200.
- [ ] Les pages tunnel ne sont pas dans le sitemap.
- [ ] Les pages tunnel restent en noindex ou non proposées à l’indexation.

Pages tunnel à ne pas pousser :

```txt
/result
/analyse
/paiement/succes
/paiement/retour
/api/*
```

---

## 2. Ajouter la propriété Search Console

### Option recommandée

Créer une propriété de domaine :

```txt
scanadmin.fr
```

Avantage : elle couvre normalement les variantes du domaine et protocoles associés.

### Étapes

1. Aller sur Google Search Console.
2. Cliquer sur `Ajouter une propriété`.
3. Choisir `Domaine`.
4. Entrer uniquement :

```txt
scanadmin.fr
```

5. Copier l’enregistrement DNS TXT fourni par Google.
6. Ajouter cet enregistrement TXT chez le registrar DNS.
7. Attendre la propagation DNS.
8. Cliquer sur `Valider`.

### Si la validation DNS bloque

Créer temporairement une propriété avec préfixe d’URL :

```txt
https://scanadmin.fr/
```

Mais la propriété domaine reste préférable à terme.

---

## 3. Contrôles techniques immédiats

Après validation de la propriété :

- [ ] Inspecter `https://scanadmin.fr/`.
- [ ] Vérifier que Google peut récupérer la page.
- [ ] Vérifier que la page n’est pas bloquée par robots.txt.
- [ ] Vérifier qu’il n’y a pas de noindex sur la page d’accueil.
- [ ] Inspecter `https://scanadmin.fr/sitemap.xml`.
- [ ] Vérifier que le sitemap est récupérable.
- [ ] Inspecter `https://scanadmin.fr/robots.txt`.
- [ ] Vérifier que les pages publiques sont autorisées.

---

## 4. Soumettre le sitemap

URL du sitemap :

```txt
https://scanadmin.fr/sitemap.xml
```

Étapes :

1. Dans Search Console, ouvrir la propriété `scanadmin.fr`.
2. Aller dans `Sitemaps`.
3. Entrer :

```txt
sitemap.xml
```

4. Cliquer sur `Envoyer`.
5. Vérifier le statut après traitement.

Statut attendu :

```txt
Opération effectuée
```

Si erreur :

- vérifier que `https://scanadmin.fr/sitemap.xml` s’ouvre dans un navigateur ;
- vérifier qu’il n’y a pas de redirection étrange ;
- vérifier que le sitemap contient bien des URLs absolues ;
- vérifier que les URLs correspondent au bon domaine ;
- vérifier que le sitemap n’est pas bloqué par robots.txt.

---

## 5. URLs à demander en indexation prioritaire

Ne pas demander l’indexation de tout le site d’un coup.

Commencer par les pages piliers.

### Lot 1 — cœur du site

```txt
https://scanadmin.fr/
https://scanadmin.fr/scan
https://scanadmin.fr/analyse-personnalisee
https://scanadmin.fr/exemple
https://scanadmin.fr/tarifs
```

### Lot 2 — cocon tâches

```txt
https://scanadmin.fr/taches
https://scanadmin.fr/taches/devis
https://scanadmin.fr/taches/relances-clients
https://scanadmin.fr/taches/emails-administratifs
https://scanadmin.fr/taches/documents-entrants
https://scanadmin.fr/taches/dossiers-clients
https://scanadmin.fr/taches/planning
https://scanadmin.fr/taches/reporting
https://scanadmin.fr/taches/factures
```

### Lot 3 — guides prioritaires

```txt
https://scanadmin.fr/guides/audit-ia-pme
https://scanadmin.fr/guides/agent-ia-administratif
https://scanadmin.fr/guides/automatiser-taches-administratives
https://scanadmin.fr/guides/cout-administratif-pme
https://scanadmin.fr/guides/agent-ia-devis
https://scanadmin.fr/guides/agent-ia-documents
https://scanadmin.fr/guides/agent-ia-reporting
```

### Lot 4 — secteurs prioritaires

```txt
https://scanadmin.fr/secteurs/btp
https://scanadmin.fr/secteurs/transport-logistique
https://scanadmin.fr/secteurs/nettoyage-professionnel
```

---

## 6. Méthode d’inspection URL

Pour chaque URL prioritaire :

1. Coller l’URL dans la barre d’inspection de Search Console.
2. Vérifier si l’URL est connue de Google.
3. Cliquer sur `Tester l’URL en direct`.
4. Vérifier que la récupération est réussie.
5. Vérifier que l’indexation est autorisée.
6. Demander l’indexation.

Ne pas redemander tous les jours inutilement.

---

## 7. Contrôles robots / noindex

Pages publiques à indexer :

```txt
/
/scan
/analyse-personnalisee
/exemple
/tarifs
/method
/catalogue
/cas-usages
/taches
/taches/*
/guides/*
/secteurs/*
/comparatif
/faq
```

Pages à ne pas indexer :

```txt
/result
/analyse
/paiement/succes
/paiement/retour
/api/*
```

Contrôles :

- [ ] Les pages publiques ne doivent pas avoir de noindex.
- [ ] Les pages publiques ne doivent pas être bloquées par robots.txt.
- [ ] Les pages tunnel ne doivent pas être dans le sitemap.
- [ ] Les pages paiement ne doivent pas être indexées.
- [ ] Les API ne doivent pas être indexées.

---

## 8. Suivi les 7 premiers jours

À faire chaque jour pendant 7 jours :

- [ ] Vérifier que le sitemap est toujours en statut correct.
- [ ] Vérifier les éventuelles erreurs d’indexation.
- [ ] Vérifier les pages découvertes mais non indexées.
- [ ] Vérifier les pages explorées mais non indexées.
- [ ] Vérifier les premiers signaux d’impressions.
- [ ] Vérifier que les pages `/taches` sont bien détectées.

Ne pas paniquer si aucune impression n’apparaît immédiatement. Les données peuvent prendre du temps.

---

## 9. Suivi après 14 jours

À 14 jours :

- [ ] Lister les pages avec impressions.
- [ ] Lister les requêtes qui déclenchent ScanAdmin.
- [ ] Identifier les pages sans impressions.
- [ ] Identifier les pages avec impressions mais CTR faible.
- [ ] Améliorer les titres des pages avec impressions faibles.
- [ ] Améliorer les introductions des pages avec requêtes réelles.
- [ ] Ajouter des liens internes vers les pages qui commencent à apparaître.

Priorité d’amélioration :

```txt
impressions sans clics
pages proches d’une intention d’achat
pages tâches avec signaux
pages secteurs avec signaux
```

---

## 10. Suivi après 30 jours

À 30 jours :

- [ ] Exporter les requêtes Search Console.
- [ ] Classer les requêtes par intention.
- [ ] Repérer les expressions longues.
- [ ] Créer de nouvelles pages seulement si les requêtes le justifient.
- [ ] Renforcer les pages qui commencent à capter des impressions.
- [ ] Vérifier les clics vers `/scan`.
- [ ] Vérifier les scans terminés.
- [ ] Vérifier les clics vers `/analyse-personnalisee`.
- [ ] Vérifier les paiements confirmés.

---

## 11. Pages à créer selon les requêtes futures

Ne pas créer ces pages avant d’avoir des signaux ou une logique claire.

Idées possibles :

```txt
/secteurs/immobilier
/secteurs/formation
/secteurs/securite-privee
/secteurs/espaces-verts
/guides/ia-administrative-artisan
/guides/automatiser-relances-clients
/guides/agent-ia-factures-prudence
```

Règle : chaque nouvelle page doit être reliée à une page existante et à `/scan`.

---

## 12. Indicateurs à suivre

### SEO

- impressions ;
- clics ;
- CTR ;
- position moyenne ;
- pages indexées ;
- pages découvertes mais non indexées ;
- requêtes exactes ;
- pages qui déclenchent des impressions.

### Produit

- visites sur `/scan` ;
- scans commencés ;
- scans terminés ;
- clics vers `/analyse-personnalisee` ;
- formulaires envoyés ;
- Checkout lancé ;
- paiements confirmés.

---

## 13. Règle de décision

Le signal à chercher n’est pas :

```txt
avoir 10 testeurs rapidement
```

Le signal à chercher est :

```txt
Google et les moteurs IA comprennent ScanAdmin,
les pages apparaissent sur des requêtes pertinentes,
les visiteurs qualifiés lancent le scan,
une partie va jusqu’à l’analyse personnalisée.
```

---

## 14. Résultat attendu

Après lancement propre :

```txt
site accessible
sitemap soumis
pages prioritaires inspectées
cocon /taches découvert
premières impressions suivies
améliorations guidées par données réelles
```
