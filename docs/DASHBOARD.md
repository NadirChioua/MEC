# Tableau de bord analytics — Guide d'installation et d'exploitation

Ce document s'adresse à une personne qui n'a **jamais utilisé Supabase**.
Chaque étape est détaillée. Suivez-les dans l'ordre.

Durée estimée : **30 à 45 minutes** pour la première installation.

---

## Sommaire

1. [Ce que fait ce dashboard](#1-ce-que-fait-ce-dashboard)
2. [Créer le projet Supabase](#2-créer-le-projet-supabase)
3. [Exécuter les trois migrations](#3-exécuter-les-trois-migrations)
4. [Récupérer les clés Supabase](#4-récupérer-les-clés-supabase)
5. [Générer les secrets](#5-générer-les-secrets)
6. [Configurer les variables sur Vercel](#6-configurer-les-variables-sur-vercel)
7. [Créer le compte administrateur](#7-créer-le-compte-administrateur)
8. [Vérifier que tout fonctionne](#8-vérifier-que-tout-fonctionne)
9. [Le cron quotidien](#9-le-cron-quotidien)
10. [Ajouter un bouton suivi](#10-ajouter-un-bouton-suivi)
11. [Confidentialité — ce qui est stocké](#11-confidentialité--ce-qui-est-stocké)
12. [Dépannage](#12-dépannage)
13. [Annexe — liste des identifiants data-track](#annexe--liste-des-identifiants-data-track)

---

## 1. Ce que fait ce dashboard

Le site mesure lui-même sa fréquentation, sans Google Analytics, sans cookie
publicitaire et sans service payant. Les données sont stockées dans une base
Supabase gratuite, et consultables sur `/admin`.

Le dashboard affiche :

- **4 indicateurs** : visiteurs uniques, pages vues, sessions, formulaires envoyés
- **une courbe** de fréquentation jour par jour
- **les pages les plus vues**
- **les boutons les plus cliqués** — l'information la plus utile : quel appel à
  l'action fonctionne réellement
- **des répartitions** : appareils, sources, pays, langues
- **le parcours vers le contact** : visites de la page contact → formulaires
  envoyés → taux de conversion

> **Les demandes de contact elles-mêmes n'arrivent jamais dans la base.**
> Elles partent uniquement par email, comme avant. Le dashboard compte les
> envois, il ne stocke ni nom, ni email, ni message.

### Coût

Zéro. Le dispositif tient dans les offres gratuites de Vercel (Hobby) et de
Supabase (Free). L'agrégation quotidienne et la purge à 90 jours maintiennent
la base bien en dessous des limites du plan gratuit.

---

## 2. Créer le projet Supabase

1. Allez sur **https://supabase.com** et créez un compte (connexion GitHub possible).
2. Cliquez sur **New project**.
3. Remplissez :
   - **Name** : `mec-analytics`
   - **Database Password** : cliquez sur *Generate a password*, puis
     **copiez-la et rangez-la dans votre gestionnaire de mots de passe**.
     Elle ne sera plus affichée.
   - **Region** : `West EU (Ireland)` ou `Central EU (Frankfurt)` — au plus
     près du Maroc et de l'Europe.
   - **Plan** : `Free`
4. Cliquez sur **Create new project** et patientez 2 à 3 minutes.

---

## 3. Exécuter les trois migrations

Les migrations créent les tables et les fonctions. Elles se trouvent dans le
dossier `supabase/migrations/` du dépôt.

**L'ordre est important. Exécutez-les une par une.**

1. Dans Supabase, ouvrez **SQL Editor** dans le menu de gauche.
2. Cliquez sur **New query**.
3. Ouvrez le fichier `supabase/migrations/0001_analytics.sql`, copiez **tout**
   son contenu, collez-le dans l'éditeur, puis cliquez sur **Run**.
4. Vous devez voir `Success. No rows returned`.
5. Répétez pour `0002_functions.sql`, puis pour `0003_dashboard_api.sql`.

| Fichier | Rôle |
|---|---|
| `0001_analytics.sql` | Tables `analytics_events`, `analytics_daily`, `admin_users` + sécurité RLS |
| `0002_functions.sql` | Agrégation quotidienne et purge à 90 jours |
| `0003_dashboard_api.sql` | Fonctions de lecture utilisées par le dashboard |

Ces fichiers sont **idempotents** : les rejouer ne casse rien et n'efface
aucune donnée.

### Vérifier

Menu **Table Editor** : vous devez voir les trois tables. Elles sont vides,
c'est normal.

---

## 4. Récupérer les clés Supabase

Menu **Project Settings** (roue dentée) → **API**.

Trois valeurs à copier :

| Sur la page Supabase | Variable à renseigner | Nature |
|---|---|---|
| **Project URL** | `NEXT_PUBLIC_SUPABASE_URL` | Publique |
| **Publishable key** (`sb_publishable_…`) | `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` | Publique |
| **Secret key** (`sb_secret_…`) | `SUPABASE_SECRET_KEY` | **SECRÈTE** |

> **Deux générations de clés coexistent.** Les projets récents affichent des
> clés `sb_publishable_…` / `sb_secret_…`. Les plus anciens affichent `anon`
> et `service_role`. Le code accepte les deux : si votre projet utilise
> l'ancien format, renseignez `NEXT_PUBLIC_SUPABASE_ANON_KEY` et
> `SUPABASE_SERVICE_ROLE_KEY` à la place.

> ⚠️ **La clé secrète contourne toutes les protections de la base.**
> Elle ne doit jamais apparaître dans le navigateur, dans un email, dans une
> capture d'écran, ni dans un commit git. Elle n'est utilisée que par le
> serveur. Si elle fuite, régénérez-la immédiatement depuis cette même page.

---

## 5. Générer les secrets

Deux secrets restent à créer. Dans un terminal :

```bash
# Sel d'anonymisation des visiteurs
openssl rand -base64 32

# Jeton de protection du cron
openssl rand -base64 32
```

Sous Windows sans `openssl`, utilisez PowerShell :

```powershell
[Convert]::ToBase64String((1..32 | ForEach-Object { Get-Random -Max 256 }))
```

Gardez les deux valeurs de côté : la première pour `ANALYTICS_SALT`, la
seconde pour `CRON_SECRET`.

> **`ANALYTICS_SALT` ne doit plus jamais changer** une fois le site en ligne.
> Le modifier remet à zéro le calcul des visiteurs uniques : les anciens
> chiffres restent lisibles, mais ne sont plus comparables aux nouveaux.

---

## 6. Configurer les variables sur Vercel

Ouvrez votre projet sur **vercel.com** → **Settings** → **Environment Variables**.

Ajoutez ces six variables, cochez **Production**, **Preview** et **Development**
pour chacune :

| Variable | Valeur |
|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | Project URL (étape 4) |
| `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` | clé publique (étape 4) |
| `SUPABASE_SECRET_KEY` | clé secrète (étape 4) |
| `ANALYTICS_SALT` | premier secret (étape 5) |
| `CRON_SECRET` | second secret (étape 5) |
| `ADMIN_EMAIL` | votre email d'administrateur |

Puis **redéployez** : onglet *Deployments* → dernier déploiement → menu `···`
→ **Redeploy**. Les variables ne sont prises en compte qu'après un
redéploiement.

### En local

Créez un fichier `.env.local` à la racine, sur le modèle de `.env.example`.
Ce fichier est ignoré par git.

---

## 7. Créer le compte administrateur

Le dashboard n'a **pas de page d'inscription**. Le premier compte se crée en
ligne de commande.

1. Dans `.env.local`, renseignez en plus :

   ```
   ADMIN_EMAIL=votre.email@mecfinance.ma
   ADMIN_PASSWORD=un-mot-de-passe-long-et-unique
   ```

   Le mot de passe doit faire **au moins 12 caractères**. N'en réutilisez pas
   un existant.

2. Lancez :

   ```bash
   npm run create-admin
   ```

3. Vous devez voir :

   ```
   ✓ Administrateur prêt.
     Email : votre.email@mecfinance.ma
     Connectez-vous sur /admin/login
   ```

4. **Supprimez la ligne `ADMIN_PASSWORD` de votre `.env.local`.** Elle ne sert
   plus.

Le script est rejouable : relancé avec le même email, il se contente de
vérifier que le compte est bien autorisé.

### Ajouter un second administrateur plus tard

Même procédure avec un autre `ADMIN_EMAIL` / `ADMIN_PASSWORD`.

---

## 8. Vérifier que tout fonctionne

### a. La connexion

Ouvrez `https://www.mecfinance.ma/admin`. Vous devez être redirigé vers
`/admin/login`. Connectez-vous : le dashboard s'affiche.

Déconnecté, `/admin` doit **toujours** renvoyer vers la page de connexion.

### b. La première page vue

1. Ouvrez le site public dans une **fenêtre de navigation privée**
   (sinon vous risquez d'être filtré par votre propre navigateur si le
   signal « Do Not Track » est activé).
2. Visitez deux ou trois pages.
3. Dans Supabase → **Table Editor** → `analytics_events`, vous devez voir
   apparaître des lignes `pageview` dans les 5 à 10 secondes.

> Les visites de `/admin` ne sont **jamais** comptées : le back-office est
> exclu du suivi pour ne pas fausser vos propres chiffres.

### c. Le comptage des clics

Cliquez sur un bouton suivi (par exemple « Consultation confidentielle »).
Une ligne `click` doit apparaître avec le bon `element_id`.

### d. Le formulaire

Envoyez un message de test depuis `/contact`. Deux choses doivent se produire :

- l'email arrive normalement (comportement inchangé) ;
- une ligne `click` avec `element_id = contact-form-submit` apparaît.

---

## 9. Le cron quotidien

Le fichier `vercel.json` déclare une tâche quotidienne à **02:00 UTC** :

```json
{ "path": "/api/cron/rollup", "schedule": "0 2 * * *" }
```

Elle effectue trois opérations :

1. **Agrégation** de la veille dans `analytics_daily` — c'est ce qui garde la
   base petite et le dashboard rapide.
2. **Purge** des événements de plus de 90 jours (obligation de rétention).
3. **Lecture triviale** qui empêche Supabase de mettre le projet gratuit en
   pause après 7 jours sans activité.

Vercel envoie automatiquement l'en-tête `Authorization: Bearer $CRON_SECRET`.
Sans ce jeton, la route répond `401`.

> Le plan Hobby de Vercel n'autorise **qu'une exécution par jour**. Tout est
> conçu autour de cette contrainte.

### Déclencher manuellement

```bash
curl -H "Authorization: Bearer VOTRE_CRON_SECRET" \
  https://www.mecfinance.ma/api/cron/rollup
```

---

## 10. Ajouter un bouton suivi

Pour compter les clics sur un nouveau bouton, ajoutez **deux attributs**. Rien
d'autre : aucun code JavaScript à écrire, aucun import.

### Sur un lien ou un bouton classique

```tsx
<a
  href="/contact"
  data-track="offre-2026-cta"
  data-track-label="Offre 2026 — Prendre rendez-vous"
>
  Prendre rendez-vous
</a>
```

### Sur le composant `ButtonLink`

```tsx
<ButtonLink
  href="/contact"
  variant="primary"
  trackId="offre-2026-cta"
  trackLabel="Offre 2026 — Prendre rendez-vous"
>
  Prendre rendez-vous
</ButtonLink>
```

### Règles de nommage

- `data-track` : identifiant **stable**, en minuscules, mots séparés par des
  tirets. C'est la clé statistique : **ne le renommez jamais** une fois en
  production, sinon l'historique du bouton est coupé en deux.
- `data-track-label` : libellé lisible affiché dans le dashboard. Celui-ci peut
  être modifié librement.
- Structure conseillée : `zone-type-sujet`
  (`hero-cta-consultation`, `footer-service-comptabilite`).

Le clic est capté automatiquement : un seul écouteur placé sur la page
intercepte tous les éléments porteurs de `data-track`, y compris ceux ajoutés
après le chargement.

---

## 11. Confidentialité — ce qui est stocké

Ce dispositif est conçu pour être défendable devant un client et devant la
**CNDP** (loi 09-08), et compatible **RGPD** pour les visiteurs européens.

### Ce qui n'est jamais enregistré

- ❌ aucune adresse IP
- ❌ aucun nom, email, téléphone ou message
- ❌ aucun cookie publicitaire ou de suivi
- ❌ aucune donnée transmise à un tiers (pas de Google, pas de Meta)

### Ce qui est enregistré

- le chemin de la page (`/services/comptabilite`), sans les paramètres d'URL
- l'identifiant du bouton cliqué
- le type d'appareil (mobile / tablette / ordinateur)
- le pays (code à 2 lettres, fourni par Vercel — jamais déduit d'une IP stockée)
- la langue d'affichage
- le domaine référent (`google.com`), jamais l'URL complète
- un **identifiant de visiteur anonyme**

### Le point important : l'identifiant anonyme

```
visitor_hash = sha256(IP + user-agent + sel secret + date du jour)
```

L'IP sert uniquement au calcul, en mémoire vive, puis disparaît. Elle n'est
écrite nulle part.

**Le sel intègre la date du jour : le hash change donc toutes les 24 heures.**
Un même visiteur revenant le lendemain produit un identifiant totalement
différent. Il est mathématiquement impossible de reconstituer son parcours
d'un jour sur l'autre.

#### Conséquence assumée sur le KPI « Visiteurs uniques (cumul quotidien) »

Un visiteur qui revient trois jours de suite compte pour **trois** visiteurs
uniques sur la période.

Ce n'est pas un défaut de mesure : c'est la contrepartie directe — et
recherchée — de l'anonymisation. Un chiffre de visiteurs uniques « correct »
sur 30 jours exigerait de suivre chaque personne pendant 30 jours, c'est-à-dire
exactement ce que ce dispositif refuse de faire.

**Ce qu'il faut en retenir à l'usage :** les tendances et les comparaisons
entre périodes sont fiables ; le nombre absolu de personnes distinctes ne l'est
pas, et n'a jamais vocation à l'être. Pour un volume de personnes distinctes,
lisez plutôt la colonne *Sessions*.

Une bulle d'information rappelle ce point directement sur la carte du KPI.

### Signaux respectés

Le suivi est **totalement désactivé** si le navigateur envoie `Do Not Track`
ou `Global Privacy Control` — côté navigateur et côté serveur. Les robots sont
également écartés.

### Rétention

Les événements bruts sont supprimés au bout de **90 jours**. Seuls les
agrégats quotidiens, qui ne contiennent aucun identifiant, sont conservés.

---

## 12. Dépannage

### « Les statistiques ne sont pas encore disponibles »

Les migrations n'ont pas été exécutées, ou seulement en partie. Reprenez
l'[étape 3](#3-exécuter-les-trois-migrations), dans l'ordre.

### Je me connecte, mais j'obtiens « Accès refusé » (403)

Votre compte existe dans Supabase mais pas dans la liste blanche
`admin_users`. Relancez `npm run create-admin` avec le même `ADMIN_EMAIL`.

### Le dashboard reste à zéro

Vérifiez dans l'ordre :

1. Les variables sont-elles bien enregistrées sur Vercel, et le projet
   **redéployé** depuis ?
2. Votre navigateur envoie-t-il `Do Not Track` ? Testez en navigation privée
   ou avec un autre navigateur.
3. Dans Supabase → Table Editor → `analytics_events` : y a-t-il des lignes ?
   - **Des lignes, mais rien à l'écran** → problème de lecture : vérifiez
     que `0003_dashboard_api.sql` a bien été exécuté.
   - **Aucune ligne** → problème d'écriture : vérifiez `SUPABASE_SECRET_KEY`.

### Les chiffres d'hier semblent figés

Le rollup tourne à 02:00 UTC. Avant son passage, la journée de la veille est
lue depuis les événements bruts, ce qui reste correct. Vous pouvez le
déclencher à la main (voir [étape 9](#9-le-cron-quotidien)).

### Le projet Supabase est « paused »

Cela arrive après 7 jours sans activité. Réactivez-le depuis le tableau de
bord Supabase. Le cron quotidien empêche normalement ce cas.

### Note sur la limitation de débit

`/api/track` applique un plafond d'événements par visiteur, mais ce compteur
vit en mémoire sur chaque instance serveur. Vercel en exécute plusieurs en
parallèle et les recycle en permanence : le plafond réel est donc **approximatif**.

C'est un garde-fou bon marché contre un onglet qui s'emballe, **pas une
protection anti-abus**. Un vrai plafond demanderait un compteur partagé
(type Redis), donc un service payant — hors budget, et disproportionné pour le
trafic visé.

---

## Annexe — liste des identifiants `data-track`

État au 11 septembre 2026.

### Identifiants fixes

| Identifiant | Emplacement |
|---|---|
| `contact-form-submit` | Bouton d'envoi du formulaire de contact |
| `header-logo` | Logo dans l'en-tête |
| `header-cta-consultation` | Bouton « Consultation confidentielle » (en-tête) |
| `header-mobile-menu-toggle` | Ouverture du menu mobile |
| `mobile-cta-consultation` | Bouton « Consultation confidentielle » (menu mobile) |
| `mobile-nav-services-all` | « Tous les services » (menu mobile) |
| `hero-cta-consultation` | Bouton principal du hero d'accueil |
| `hero-cta-services` | Bouton secondaire du hero d'accueil |
| `final-cta-consultation` | Bloc d'appel à l'action en bas de page |
| `quick-contact-cta` | Bouton « Contacter MEC » (contact rapide) |
| `about-preview-cta` | Bouton de la section « À propos » |
| `positioning-cta-implantation` | Bouton de la section positionnement Maroc-Europe |
| `service-detail-cta-consultation` | Bouton d'une fiche service |
| `article-cta-contact` | « Demander un échange » (article) |
| `landing-cta-diagnostic` | « Demander un diagnostic » (landing SEO) |
| `landing-cta-whatsapp` | « Échanger sur WhatsApp » (landing SEO) |
| `resource-block-download` | Téléchargement du guide (bloc ressource) |
| `resources-page-download` | Téléchargement du guide (page ressources) |
| `contact-map-link` | « Voir l'adresse sur Google Maps » |
| `floating-whatsapp` | Bouton WhatsApp flottant |
| `topbar-phone` | Téléphone (barre haute) |
| `topbar-email` | Email (barre haute) |
| `footer-logo` | Logo dans le pied de page |
| `footer-phone` | Téléphone (pied de page) |
| `footer-email` | Email (pied de page) |
| `footer-nav-services` | Lien « Services » (pied de page) |
| `footer-legal-mentions` | Mentions légales |
| `footer-legal-confidentialite` | Politique de confidentialité |

### Identifiants générés

Ces identifiants sont construits automatiquement à partir des données du site.
Ajouter un service crée donc ses identifiants sans intervention.

| Modèle | Exemple | Emplacement |
|---|---|---|
| `nav-{page}` | `nav-about` | Menu principal |
| `nav-dropdown-{page}` | `nav-dropdown-services-comptabilite` | Sous-menu Services |
| `mobile-nav-{page}` | `mobile-nav-contact` | Menu mobile |
| `footer-nav-{page}` | `footer-nav-notre-equipe` | Liens rapides du pied de page |
| `footer-service-{slug}` | `footer-service-audit-controle` | Services du pied de page |
| `service-card-{slug}` | `service-card-conseil-financier` | Cartes de service |
| `language-switch-{code}` | `language-switch-en` | Sélecteur de langue |

**Slugs de service actuels :** `conseil-financier`, `comptabilite`,
`gestion-entreprise`, `implantation-internationale`, `audit-controle`,
`accompagnement-personnalise`, `commerce-maroc-europe`.

**Codes de langue :** `fr`, `ar`, `en`, `nl`, `es`.
