# Cahier de charges Codex - Refonte du site Morocco Europe Consulting

## 1. Objectif du projet

Développer une nouvelle version du site **Morocco Europe Consulting**, aussi appelé **MEC**, en utilisant :

- Le site modèle comme base d'inspiration pour la structure, la mise en page et l'organisation des pages : `https://ncn.ma/beta/public/`
- La version actuelle du site MEC comme source principale pour l'identité, le contenu, le positionnement, les services et les informations de contact : `https://mo-eu-consulting.com/`

Le résultat attendu est un site professionnel, moderne, corporate et crédible pour un cabinet de conseil financier, comptable et stratégique opérant entre le Maroc et l'Europe.

> Important : ne pas copier l'identité de Neo Compta Du Nord. Utiliser le site NCN uniquement comme modèle de structure et d'expérience utilisateur. La nouvelle version doit rester clairement un site Morocco Europe Consulting.

---

## 2. Sources à utiliser

### 2.1 Site modèle à suivre pour le design et la structure

URL : `https://ncn.ma/beta/public/`

Ce site sert de référence pour :

- La structure générale des pages
- La navigation principale avec menu déroulant des services
- Le hero section
- Les blocs d'introduction
- Les cartes de services
- La page À propos
- La page Services
- La page Contact
- Le footer complet
- La présentation corporate avec une sensation cabinet/conseil/professionnel

### 2.2 Site actuel MEC à utiliser pour le branding et le contenu

URL : `https://mo-eu-consulting.com/`

Ce site sert de source pour :

- Nom de l'entreprise
- Abréviation MEC
- Positionnement Maroc-Europe
- Services principaux
- Ton de communication
- Arguments de crédibilité
- Informations de contact actuelles
- Orientation multilingue
- Ressource Loi de Finances Maroc 2026

---

## 3. Identité du projet

### 3.1 Nom de l'entreprise

**Morocco Europe Consulting**

### 3.2 Nom court / logo textuel

**MEC**

### 3.3 Localisation

Tanger, Maroc

### 3.4 Positionnement

Cabinet de conseil entre le Maroc et l'Europe, spécialisé dans :

- Conseil financier
- Comptabilité
- Gestion d'entreprise
- Implantation internationale
- Fiscalité transfrontalière
- Audit et contrôle
- Accompagnement personnalisé des entreprises

### 3.5 Promesse principale

**L'excellence financière, à votre service.**

### 3.6 Message principal

Morocco Europe Consulting accompagne les entreprises dans la gestion financière, la comptabilité et le conseil stratégique pour faire croître leurs activités des deux côtés de la Méditerranée.

### 3.7 Ton de marque

- Professionnel
- Premium
- Sérieux
- Clair
- Fiable
- International
- Orienté résultats
- Proche des dirigeants et entreprises

---

## 4. Direction design

### 4.1 Principe général

Créer une version MEC inspirée de la structure du site NCN, mais avec le branding et l'identité MEC.

Le site doit donner une impression de :

- Cabinet sérieux
- Conseil haut niveau
- Expertise Maroc-Europe
- Confiance financière
- Accompagnement stratégique
- Proximité avec les entreprises

### 4.2 À reprendre du site modèle NCN

Reprendre l'organisation générale suivante :

1. Barre supérieure avec téléphone, adresse, email, horaires
2. Header avec logo et navigation
3. Menu Services avec dropdown
4. Hero section avec titre, sous-titre, points de valeur et bouton CTA
5. Bloc contact rapide ou appel direct
6. Section À propos avec image et texte
7. Section Solutions / domaines d'intervention
8. Section Services avec cartes cliquables
9. Section équipe ou bloc confiance, uniquement si contenu MEC disponible
10. Section partenaires/références, uniquement si contenu réel disponible
11. Section Ressources ou Actualités
12. Footer complet avec liens, services et coordonnées
13. Page À propos complète
14. Page Services complète
15. Pages de détails pour chaque service
16. Page Contact avec formulaire et checkbox RGPD / loi 09-08

### 4.3 À éviter

- Ne pas garder le nom Neo Compta Du Nord
- Ne pas garder les contacts NCN
- Ne pas garder les noms de l'équipe NCN
- Ne pas garder les logos partenaires du template si ce ne sont pas de vrais partenaires MEC
- Ne pas utiliser de textes Lorem Ipsum
- Ne pas afficher des statistiques à `0+`
- Ne pas copier le design pixel-perfect d'un autre site si les droits ne sont pas fournis
- Ne pas livrer une seule landing page si le modèle contient plusieurs pages

### 4.4 Couleurs et branding

Codex doit extraire les couleurs réelles depuis le site actuel MEC, depuis les fichiers CSS ou depuis les assets disponibles.

Si les couleurs exactes ne sont pas accessibles, créer des variables CSS clairement modifiables :

```css
:root {
  --color-primary: /* couleur principale MEC */;
  --color-secondary: /* couleur secondaire MEC */;
  --color-accent: /* couleur CTA */;
  --color-background: /* fond principal */;
  --color-surface: /* cartes */;
  --color-text: /* texte principal */;
  --color-muted: /* texte secondaire */;
}
```

Ne pas inventer une identité radicalement différente. Préserver la logique visuelle de MEC : corporate, internationale, sobre et premium.

### 4.5 Typographie

Utiliser une typographie professionnelle et lisible.

Si le site actuel contient déjà une police, la récupérer. Sinon utiliser une combinaison moderne, par exemple :

- Titres : Inter, Manrope, Plus Jakarta Sans ou équivalent
- Texte : Inter, Arial, system-ui ou équivalent

---

## 5. Architecture du site

### 5.1 Pages obligatoires

Créer au minimum les pages suivantes :

```txt
/
/about
/services
/services/conseil-financier
/services/comptabilite
/services/gestion-entreprise
/services/implantation-internationale
/services/audit-controle
/services/accompagnement-personnalise
/services/commerce-maroc-europe
/resources
/contact
/legal/mentions-legales
/legal/confidentialite
```

### 5.2 Navigation principale

Header recommandé :

```txt
Accueil
À propos
Services
  - Conseil Financier
  - Comptabilité
  - Gestion d'Entreprise
  - Implantation Internationale
  - Audit & Contrôle
  - Accompagnement Personnalisé
  - Commerce Maroc-Europe
Ressources
Contact
```

Ajouter un bouton CTA visible :

```txt
Consultation gratuite
```

### 5.3 Sélecteur de langue

Le site actuel affiche :

```txt
FR AR EN NL ES
```

Implémenter le sélecteur de langue de façon propre.

Deux options possibles :

1. Si les contenus traduits sont disponibles, activer les pages multilingues.
2. Si les traductions ne sont pas disponibles, afficher le sélecteur mais garder les langues non disponibles désactivées ou préparées techniquement pour une future traduction.

Ne pas générer de traductions approximatives sans validation.

---

## 6. Contenu principal à utiliser

### 6.1 Hero section

Badge / surtitre :

```txt
Cabinet de conseil — Maroc & Europe
```

Titre :

```txt
L'excellence financière, à votre service.
```

Texte :

```txt
Morocco Europe Consulting vous accompagne dans la gestion financière, la comptabilité et le conseil stratégique pour faire croître votre entreprise des deux côtés de la Méditerranée.
```

CTA principal :

```txt
Prendre rendez-vous
```

CTA secondaire :

```txt
Nos services
```

Élément de contexte à intégrer visuellement si possible :

```txt
Port Tanger Med — 1er port d'Afrique et de Méditerranée
```

### 6.2 Statistiques

Ne pas utiliser les valeurs `0+` visibles dans la première version.

Utiliser seulement les statistiques crédibles présentes dans la version actuelle :

```txt
98% Satisfaction client
15+ Ans d'expertise
300+ Dossiers traités
2 Continents couverts
```

Si le client n'a pas validé ces chiffres, les placer dans un fichier de configuration pour pouvoir les modifier facilement.

### 6.3 Services principaux

#### 1. Conseil Financier

```txt
Stratégie financière, optimisation de trésorerie et analyse des investissements.
```

#### 2. Comptabilité

```txt
Tenue de comptabilité, bilans, liasses fiscales et reporting financier.
```

#### 3. Gestion d'Entreprise

```txt
Structuration, gestion opérationnelle et pilotage de performance.
```

#### 4. Implantation Internationale

```txt
Fiscalité transfrontalière, conformité réglementaire et structuration juridique.
```

#### 5. Audit & Contrôle

```txt
Audit interne, contrôle de gestion et tableaux de bord financiers.
```

#### 6. Accompagnement Personnalisé

```txt
Un interlocuteur dédié à chaque étape de votre développement.
```

#### 7. Commerce Maroc — Europe

```txt
Nous accompagnons vos flux internationaux avec expertise et rigueur.
```

### 6.4 Section Pourquoi nous choisir

Titre :

```txt
Une expertise bi-continentale unique
```

Texte :

```txt
Avec une présence au Maroc et en Europe, nous maîtrisons les environnements réglementaires des deux côtés de la Méditerranée.
```

Points à afficher :

```txt
Double expertise réglementaire
Normes IFRS, droit fiscal marocain et européen.

Approche sur-mesure
Suivi personnalisé adapté à chaque client.

Confidentialité absolue
Données traitées avec la plus stricte confidentialité.

Réactivité garantie
Cabinet disponible pour tous vos besoins.
```

### 6.5 Section Approche

Titre :

```txt
Notre approche, votre réussite
```

Intro :

```txt
Chez MEC, nous transformons la complexité en opportunités. Notre mission : vous accompagner avec rigueur, proximité et expertise pour atteindre vos objectifs en toute sérénité.
```

Cartes :

```txt
Accompagnement sur mesure
Nous adaptons nos solutions à vos enjeux spécifiques pour un accompagnement efficace et personnalisé.

Expertise locale et internationale
Une parfaite maîtrise des environnements marocain et européen pour vous ouvrir les meilleures opportunités.

Rigueur & confiance
Nous plaçons la qualité, la confidentialité et l'éthique au cœur de chaque mission.

Création de valeur durable
Nous vous aidons à structurer, optimiser et développer votre activité pour une croissance pérenne.
```

### 6.6 Section Ressource

Titre :

```txt
Ressource à votre disposition
```

Ressource affichée :

```txt
Loi de Finances Maroc 2026 : les mesures clés à connaître
```

Texte :

```txt
Téléchargez le document officiel et restez informé.
```

Bouton :

```txt
Télécharger le guide 2026
```

Lien actuel :

```txt
https://www.finances.gov.ma
```

Créer cette section sous forme de bloc ressource propre, inspiré de la section blog/actualités du template NCN.

---

## 7. Détail des pages

## 7.1 Page Accueil `/`

Structure recommandée :

1. Top bar
2. Header/navigation
3. Hero premium avec CTA
4. Bloc appel rapide / consultation gratuite
5. Section À propos courte
6. Section domaines d'expertise
7. Section Services en grille
8. Section Pourquoi nous choisir
9. Section Approche
10. Section Ressource / guide 2026
11. CTA final vers contact
12. Footer

La page d'accueil doit reprendre la richesse structurelle du template NCN, mais avec le contenu MEC.

---

## 7.2 Page À propos `/about`

S'inspirer de la page `https://ncn.ma/beta/public/about`.

Structure :

1. Breadcrumb : Accueil > À propos
2. Titre de page : À propos
3. Bloc image + expérience
4. Présentation MEC
5. Mission
6. Services résumés
7. Approche
8. Valeurs : expertise, rigueur, transparence, confidentialité
9. CTA vers contact

Texte de base à utiliser :

```txt
Morocco Europe Consulting est un cabinet de conseil basé à Tanger, spécialisé dans l'accompagnement financier, comptable et stratégique des entreprises opérant au Maroc et en Europe.

Grâce à une expertise locale et internationale, MEC accompagne les dirigeants dans la structuration, l'optimisation et le développement de leurs activités, avec une approche fondée sur la rigueur, la proximité et la confidentialité.
```

Ne pas afficher d'équipe si les noms et photos réels ne sont pas fournis.

---

## 7.3 Page Services `/services`

S'inspirer de la page `https://ncn.ma/beta/public/services`.

Structure :

1. Breadcrumb : Accueil > Services
2. Titre : Nos Services
3. Intro :

```txt
Des services de conseil fiables et performants pour accompagner votre développement au Maroc et en Europe.
```

4. Grille de cartes de services
5. Chaque carte doit être cliquable vers sa page détail
6. CTA final : Demandez une consultation gratuite

Services à afficher :

```txt
Conseil Financier
Comptabilité
Gestion d'Entreprise
Implantation Internationale
Audit & Contrôle
Accompagnement Personnalisé
Commerce Maroc-Europe
```

---

## 7.4 Pages de détails services `/services/...`

Créer une page détail pour chaque service.

Structure commune :

1. Breadcrumb
2. Titre du service
3. Hero ou bannière courte
4. Description du service
5. Ce que nous faisons
6. Pour qui ?
7. Avantages client
8. CTA contact
9. Sidebar ou section avec autres services

Exemple pour `Conseil Financier` :

```txt
Morocco Europe Consulting accompagne les entreprises dans la construction d'une stratégie financière claire, l'optimisation de la trésorerie et l'analyse des investissements afin d'améliorer la performance et la prise de décision.
```

---

## 7.5 Page Ressources `/resources`

Inspirée de la section Blog du template NCN, mais adaptée au contenu MEC.

Structure :

1. Breadcrumb : Accueil > Ressources
2. Titre : Ressources
3. Intro :

```txt
Retrouvez des ressources utiles pour mieux comprendre les enjeux financiers, fiscaux et réglementaires au Maroc et en Europe.
```

4. Carte principale : Loi de Finances Maroc 2026
5. Préparer la structure pour ajouter d'autres articles plus tard

Ne pas afficher de faux articles Lorem Ipsum.

---

## 7.6 Page Contact `/contact`

S'inspirer de la page `https://ncn.ma/beta/public/contact`.

Structure :

1. Breadcrumb : Accueil > Contact
2. Titre : Contact
3. Intro :

```txt
Vous recherchez un accompagnement fiable en conseil financier, comptabilité ou gestion d'entreprise entre le Maroc et l'Europe ? Notre équipe est disponible pour une première consultation gratuite sans engagement.
```

4. Cartes de contact : téléphone, email, adresse, horaires
5. Formulaire de contact
6. Checkbox de consentement loi 09-08 / données personnelles
7. Bouton : Envoyer ma demande
8. Map ou bloc adresse
9. CTA WhatsApp flottant

Champs du formulaire :

```txt
Nom complet
Entreprise
Email
Téléphone
Service souhaité
Message
Checkbox consentement
```

Message consentement :

```txt
J'accepte que mes données personnelles soient collectées et traitées conformément à la loi n°09-08 relative à la protection des personnes physiques à l'égard du traitement des données à caractère personnel. Les informations recueillies sont utilisées uniquement pour répondre à ma demande.
```

---

## 8. Informations de contact MEC

À utiliser depuis la version actuelle :

```txt
Adresse : 1er Étage N°3, Sis à Rue Farabi, Rsd N°18 — Tanger, Maroc
Téléphone : +212 6 00 00 00 00
Email : contact@mec-consulting.com
Horaires : Lun – Ven : 9h00 – 18h00
```

Important : le téléphone actuel semble être un placeholder. Le placer dans une variable de configuration facile à modifier.

Exemple :

```ts
export const contactInfo = {
  phone: '+212 6 00 00 00 00',
  email: 'contact@mec-consulting.com',
  address: '1er Étage N°3, Sis à Rue Farabi, Rsd N°18 — Tanger, Maroc',
  hours: 'Lun – Ven : 9h00 – 18h00',
};
```

---

## 9. Footer

Footer inspiré du template NCN.

Contenu recommandé :

```txt
Logo MEC / Morocco Europe Consulting
Texte : Votre partenaire en conseil financier, comptabilité et développement entre le Maroc et l'Europe.

Liens rapides :
- Accueil
- À propos
- Services
- Ressources
- Contact

Services :
- Conseil Financier
- Comptabilité
- Gestion d'Entreprise
- Implantation Internationale
- Audit & Contrôle
- Accompagnement Personnalisé

Contact :
- Téléphone
- Email
- Adresse

Légal :
- Mentions légales
- Confidentialité
```

---

## 10. Fonctionnalités obligatoires

### 10.1 Responsive design

Le site doit être optimisé pour :

```txt
Mobile : 360px+
Tablet : 768px+
Desktop : 1024px+
Large desktop : 1440px+
```

### 10.2 Header mobile

- Menu burger
- Dropdown Services accessible sur mobile
- CTA visible ou accessible
- Sélecteur de langue propre

### 10.3 Formulaire de contact

Le formulaire doit avoir :

- Validation côté client
- Messages d'erreur clairs
- Message de succès
- Protection simple contre spam si possible
- Préparation backend ou service d'envoi si le projet le contient

### 10.4 WhatsApp flottant

La version actuelle contient un assistant/WhatsApp.

Créer un bouton flottant WhatsApp :

```txt
WhatsApp
MEC Assistant
En ligne
```

Utiliser le numéro réel lorsque disponible. Sinon garder la variable `WHATSAPP_NUMBER` dans la configuration.

### 10.5 SEO

Créer les métadonnées :

```txt
Title homepage : Morocco Europe Consulting | Conseil financier Maroc-Europe
Description : Cabinet de conseil basé à Tanger, spécialisé en conseil financier, comptabilité, gestion d'entreprise et accompagnement Maroc-Europe.
```

Prévoir aussi :

- Balises title uniques par page
- Meta description unique
- Open Graph
- Sitemap
- robots.txt
- URLs propres
- Alt text sur images
- Structure H1/H2/H3 correcte

### 10.6 Performance

- Images optimisées
- Lazy loading
- Aucun asset inutile du template
- Code propre
- Pas de dépendances non nécessaires
- Score Lighthouse correct

### 10.7 Accessibilité

- Contrastes lisibles
- Boutons avec labels accessibles
- Navigation clavier
- Formulaire accessible
- Alt text pour images
- Focus visible

---

## 11. Recommandation technique pour Codex

Codex doit d'abord détecter le stack du projet existant.

Si le projet existe déjà, respecter son stack.

Si le projet doit être créé depuis zéro, utiliser de préférence :

```txt
Next.js + TypeScript + Tailwind CSS
```

Structure recommandée :

```txt
src/
  app/
    page.tsx
    about/page.tsx
    services/page.tsx
    services/[slug]/page.tsx
    resources/page.tsx
    contact/page.tsx
    legal/mentions-legales/page.tsx
    legal/confidentialite/page.tsx
  components/
    layout/
      Header.tsx
      TopBar.tsx
      Footer.tsx
      MobileMenu.tsx
    sections/
      Hero.tsx
      AboutPreview.tsx
      ServicesGrid.tsx
      WhyChooseUs.tsx
      Approach.tsx
      ResourceBlock.tsx
      ContactCTA.tsx
    ui/
      Button.tsx
      Card.tsx
      Container.tsx
      SectionTitle.tsx
  data/
    site.ts
    services.ts
    navigation.ts
    stats.ts
  styles/
    globals.css
```

---

## 12. Données à centraliser

Créer des fichiers de données pour faciliter la modification :

```txt
/data/site.ts
/data/services.ts
/data/navigation.ts
/data/stats.ts
```

Ne pas disperser les textes partout dans les composants.

### Exemple `services.ts`

```ts
export const services = [
  {
    slug: 'conseil-financier',
    title: 'Conseil Financier',
    description: 'Stratégie financière, optimisation de trésorerie et analyse des investissements.',
  },
  {
    slug: 'comptabilite',
    title: 'Comptabilité',
    description: 'Tenue de comptabilité, bilans, liasses fiscales et reporting financier.',
  },
  {
    slug: 'gestion-entreprise',
    title: "Gestion d'Entreprise",
    description: 'Structuration, gestion opérationnelle et pilotage de performance.',
  },
  {
    slug: 'implantation-internationale',
    title: 'Implantation Internationale',
    description: 'Fiscalité transfrontalière, conformité réglementaire et structuration juridique.',
  },
  {
    slug: 'audit-controle',
    title: 'Audit & Contrôle',
    description: 'Audit interne, contrôle de gestion et tableaux de bord financiers.',
  },
  {
    slug: 'accompagnement-personnalise',
    title: 'Accompagnement Personnalisé',
    description: 'Un interlocuteur dédié à chaque étape de votre développement.',
  },
  {
    slug: 'commerce-maroc-europe',
    title: 'Commerce Maroc — Europe',
    description: 'Nous accompagnons vos flux internationaux avec expertise et rigueur.',
  },
];
```

---

## 13. Checklist de migration du template vers MEC

Codex doit vérifier :

- [ ] Tous les textes NCN sont supprimés
- [ ] Tous les contacts NCN sont supprimés
- [ ] Tous les logos NCN sont supprimés
- [ ] Tous les faux partenaires sont supprimés
- [ ] Tous les Lorem Ipsum sont supprimés
- [ ] Toutes les pages principales existent
- [ ] Les services MEC sont utilisés
- [ ] Le header contient le dropdown Services
- [ ] Le footer est complet
- [ ] Le formulaire contact fonctionne visuellement et techniquement
- [ ] La version mobile est propre
- [ ] Les couleurs MEC sont appliquées
- [ ] Le site ne contient pas de statistiques `0+`
- [ ] Les images sont optimisées
- [ ] Le SEO est configuré
- [ ] Le site build sans erreur

---

## 14. Résultat attendu

À la fin, Codex doit livrer :

1. Site MEC refondu
2. Design inspiré de NCN mais avec branding MEC
3. Pages complètes : Accueil, À propos, Services, détails services, Ressources, Contact
4. Design responsive
5. Contenu centralisé
6. Header/footer propres
7. SEO de base
8. Code propre et maintenable
9. Aucun contenu NCN restant

---

## 15. Prompt direct à donner à Codex

```txt
Read this file carefully before coding.

Goal:
Build the new version of Morocco Europe Consulting website.

Use https://ncn.ma/beta/public/ as the structural/design inspiration only.
Use https://mo-eu-consulting.com/ as the source of MEC branding, content, company identity, services and contact information.

Do not copy NCN identity, names, team, contact info, logos or partner logos.
Create a professional corporate consulting website for MEC with multiple pages, responsive design, clean components and SEO.

First inspect the current project structure and detect the stack.
Then implement the website according to this cahier de charges.
Centralize content inside data/config files.
Use reusable components.
Make sure the final site builds without errors.
After coding, report the changed files and any assumptions made.
```

---

## 16. Notes importantes pour validation client

Avant la mise en ligne finale, vérifier avec le client :

- Numéro de téléphone réel
- Numéro WhatsApp réel
- Email final
- Logo final
- Couleurs exactes de la marque
- Chiffres statistiques : 98%, 15+, 300+, 2 continents
- Disponibilité des traductions AR / EN / NL / ES
- Photos réelles du cabinet ou images premium autorisées
- Mentions légales et politique de confidentialité
- Destination réelle du formulaire de contact

