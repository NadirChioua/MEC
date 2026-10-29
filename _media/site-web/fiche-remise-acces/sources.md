# Fiche de remise des accès MEC : sources des valeurs

Vérifications faites le 26/10/2026, en lecture seule (aucune connexion à un panneau, aucun réglage modifié).
Abréviations des sources :
- **site.ts** : `src/data/site.ts` (configuration du site dans le code)
- **.env** : `.env.example` et noms de variables de `.env.local` (valeurs secrètes non recopiées)
- **WHOIS** : `whois.registre.ma`, requête du 26/10/2026 00:17 UTC
- **DNS** : résolveur public Google (dns.google), 26/10/2026
- **HTTP/SSL** : en-têtes et certificat de https://www.mecfinance.ma, 26/10/2026
- **Git** : historique et remote du dépôt du projet

## 1. Informations générales
| Champ | Valeur | Source |
|---|---|---|
| Nom de l'entreprise | Morocco Europe Consulting (MEC) - site mecfinance.ma | site.ts (`name`, `shortName`) ; WHOIS (titulaire « Morocco Europe consulting Jeoual »). « MEC Finance » n'apparaît que dans le nom de domaine, pas comme raison sociale. |
| URL | https://www.mecfinance.ma | site.ts (`url`) ; HTTP : mecfinance.ma redirige (308) vers www |
| Date de mise en ligne | À compléter | Indices seulement : domaine créé le 23/07/2026 (WHOIS), commit « Prepare MEC site for production launch » du 27/07/2026 (Git) |
| Société ayant créé le site | Future Glow (agence web, Tanger) | Brief de la tâche ; auteur de tous les commits (Git) |
| Responsable technique | Nadir Chioua - Future Glow | Git (auteur) ; WHOIS (contact technique) |
| Téléphone | À compléter | Non trouvé (le +212 6 14 47 49 36 du WHOIS est le numéro du client, cf. site.ts) |
| E-mail | chioua65@gmail.com | WHOIS (Tech Email) ; compte Git |

## 2. Administration du site
| Champ | Valeur | Source |
|---|---|---|
| Technologie | Next.js 16 / React 19 sur mesure, sans CMS ; dashboard Supabase | `package.json` ; `docs/DASHBOARD.md` |
| Adresse admin | https://www.mecfinance.ma/admin (login : /admin/login) | Code `src/app/(admin)/admin/` ; HTTP : /admin redirige (307) vers /admin/login, qui répond 200 |
| Identifiant admin | chioua65@gmail.com (compte du prestataire) | `.env.local` variable `ADMIN_EMAIL` (utilisée par `npm run create-admin`) |
| Mot de passe | Transmis séparément par canal sécurisé | Consigne de la tâche |
| E-mail lié | chioua65@gmail.com | Idem |
| Réinitialisation | Pas de lien « mot de passe oublié » ; via Supabase Authentication > Users | Code de la page de login (aucune fonction de réinitialisation) ; `scripts/create-admin.ts` ; `docs/DASHBOARD.md` |

## 3. Nom de domaine
| Champ | Valeur | Source |
|---|---|---|
| Nom de domaine | mecfinance.ma | WHOIS |
| Titulaire | Morocco Europe consulting Jeoual | WHOIS (Registrant Name) |
| Registrar | GENIOUS COMMUNICATIONS (Marrakech) - contact@genious.net | WHOIS (Registrar, Registrar Email) |
| Adresse de connexion / Identifiant / E-mail de récupération | À compléter | Non vérifiable sans connexion. Les serveurs DNS `dns-parking.com` sont ceux de Hostinger, ce qui suggère un achat via Hostinger (non confirmé) |
| Mot de passe | Transmis séparément | Consigne |
| Date d'enregistrement | 23/07/2026 | WHOIS (Creation Date 2026-07-23T16:06:42Z) |
| Date d'expiration | 23/07/2027 | WHOIS (Registry Expiry Date) |
| Prix du renouvellement / Renouvellement auto | À compléter | Non visible publiquement |
| Code EPP | À demander au registrar | Code secret, jamais publié |
| Protection contre le transfert | Oui | WHOIS (Domain Status clientTransferProhibited) |

## 4. Hébergement
| Champ | Valeur | Source |
|---|---|---|
| Hébergeur | Vercel Inc., projet « mec-comz » | HTTP (`Server: Vercel`) ; DNS (A 76.76.21.21, www CNAME cname.vercel-dns.com) ; `.vercel/project.json` (projectName) ; `vercel.json` |
| Type | Plateforme cloud serverless Next.js + CDN | Nature du service Vercel |
| Espace client | https://vercel.com/login | Adresse publique de Vercel |
| Panneau | Tableau de bord Vercel | Idem |
| Adresse IP | 76.76.21.21 ; www : cname.vercel-dns.com | DNS |
| Stockage | Sans objet (serverless) | Fonctionnement de Vercel |
| Identifiant, expiration, prix, renouvellement auto, titulaire de facturation | À compléter | La lecture de l'API Vercel a été bloquée par la politique de sécurité de l'agent ; `docs/DASHBOARD.md` prévoit le plan Hobby gratuit, mais le plan réel n'est pas confirmé |

## 5. Base de données et fichiers
| Champ | Valeur | Source |
|---|---|---|
| Type | PostgreSQL (Supabase), statistiques du dashboard uniquement | `docs/DASHBOARD.md` ; `supabase/migrations/` |
| Nom de la base | postgres (projet amidamgntybhfjvnbbrv) | `.env.local` `NEXT_PUBLIC_SUPABASE_URL` (valeur publique) ; nom par défaut Supabase |
| Utilisateur | postgres | Utilisateur par défaut Supabase |
| Serveur | db.amidamgntybhfjvnbbrv.supabase.co : 5432 | Format de connexion directe Supabase |
| FTP/SFTP | Sans objet | Vercel ne fournit pas de FTP ; déploiement depuis le code (`.vercelignore`, commit fd78665) |

## 6. Messagerie
| Champ | Valeur | Source |
|---|---|---|
| Fournisseur | Hostinger Email | DNS : MX mx1/mx2.hostinger.com, SPF `_spf.mail.hostinger.com`, DKIM `hostingermail-a`, autodiscover.mail.hostinger.com |
| Webmail | https://mail.hostinger.com | Adresse publique Hostinger |
| Espace admin | https://hpanel.hostinger.com | Adresse publique Hostinger |
| IMAP | imap.hostinger.com : 993 SSL | Paramètres Hostinger ; connexion TLS testée le 26/10/2026 (certificat hostinger.com) |
| SMTP | smtp.hostinger.com : 465 SSL | Idem |
| SSL/TLS | Oui | Test TLS ci-dessus |
| Adresse 1 | contact@mecfinance.ma | site.ts (`contact.email`) ; `.env` `CONTACT_TO_EMAIL` |
| Identifiant admin, récupération, nombre d'adresses, stockage, prix, renouvellement, adresses 2 et 3 | À compléter | Visible seulement dans hPanel |

## 7. Sauvegardes et sécurité
| Champ | Valeur | Source |
|---|---|---|
| Système / fréquence / emplacement (code) | Git sur GitHub (dépôt NadirChioua/MEC) + déploiements Vercel ; copie locale | `git remote -v` ; dépôt local synchronisé avec origin/main |
| Sauvegarde de la base, durée de conservation | À compléter | Dépend du plan Supabase (non vérifié) |
| Restauration | Instant Rollback Vercel ou redéploiement depuis Git | Fonction standard Vercel |
| SSL | Let's Encrypt (YR2), expire le 28/12/2026, renouvelé par Vercel | Certificat de www.mecfinance.ma |
| Sécurité | HTTPS + HSTS, en-têtes de sécurité, RLS Supabase | HTTP (`Strict-Transport-Security: max-age=63072000`) ; `next.config.ts` (X-Frame-Options, nosniff, Referrer-Policy, COOP) ; `docs/DASHBOARD.md` (RLS) |
| Double authentification | À compléter | Réglage de comptes, non visible |

## 8. Maintenance
Tous les champs : À compléter (aucun contrat de maintenance dans le projet).

## 9. Licences et abonnements
| Champ | Valeur | Source |
|---|---|---|
| Thème | Aucun, design sur mesure | Code `src/` (aucun thème acheté) |
| Propriétaire de la licence | À compléter | Aucun contrat de cession dans le projet |
| Extensions payantes | Aucune | `package.json` (dépendances toutes open source) |
| Dates d'expiration / prix | Sans objet | Idem |
| Google Analytics / Search Console | GA non utilisé ; Search Console vérifié par DNS | `docs/DASHBOARD.md` ; DNS TXT `google-site-verification=...` |
| Autres comptes | GitHub, Supabase, Resend, Formspree, Hostinger | Git remote ; `.env.example` ; DNS |

## 10. Documents remis (cases cochées)
- Copie complète des fichiers du site : code complet dans le dépôt Git du projet.
- Fichiers sources, logos et images : dossiers `public/` (26 Mo) et `assets/` (3,6 Mo).
Les autres cases sont vides (voir questions-nadir.md).

## 11. Validation
Prestataire : Future Glow (Tanger) - Nadir Chioua. Client : Morocco Europe Consulting. Date de remise et signatures laissées vides.
