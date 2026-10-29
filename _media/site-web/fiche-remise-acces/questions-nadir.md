# Questions pour Nadir (champs « À compléter »)

## 1. Informations générales
1. Quelle date de mise en ligne officielle mettre ? (domaine créé le 23/07/2026, commit de lancement le 27/07/2026)
2. Quel téléphone de Future Glow mettre comme contact technique ? Et garde-t-on chioua65@gmail.com ou une adresse de l'agence ?

## 2. Administration du site
3. Le compte admin du dashboard (/admin) est à ton Gmail. Veux-tu que je crée un compte admin au nom du client (par exemple contact@mecfinance.ma) avant la remise ? Il faut ton accord : cela écrit dans la base Supabase de production.

## 3. Nom de domaine
4. Le domaine a été acheté où, et sous quel compte (Hostinger hPanel ? identifiant, e-mail de récupération) ?
5. Prix annuel du renouvellement et renouvellement automatique : oui ou non ?
6. Le WHOIS indique ton Gmail comme contact administratif et technique. Faut-il le remplacer par l'e-mail du client avant la remise ?

## 4. Hébergement (Vercel)
7. Sous quel compte Vercel est le projet « mec-comz » (identifiant), quel plan (Hobby gratuit ou Pro) et qui paie ? Le client aura-t-il son propre compte Vercel (transfert du projet) ?
8. Si payant : prix, périodicité, date de renouvellement et renouvellement automatique.

## 5 et 7. Base de données et sauvegardes
9. Le projet Supabase est sur quel compte et quel plan (Free ou Pro) ? Cela fixe les sauvegardes de la base et leur durée de conservation.
10. La double authentification est-elle activée sur Vercel, Supabase, GitHub et Hostinger ?

## 6. Messagerie (Hostinger)
11. Compte Hostinger de la messagerie : identifiant, e-mail de récupération, nombre d'adresses incluses, stockage par adresse, prix et date du prochain renouvellement ?
12. Existe-t-il d'autres adresses que contact@mecfinance.ma ? Lesquelles ?

## 8. Maintenance
13. Un contrat de maintenance est-il prévu avec MEC ? Si oui : dates de début et fin, prix, prestations, heures d'assistance, délai d'intervention, coût d'une intervention en plus, conditions de résiliation, contact et téléphone d'urgence.

## 9. Licences
14. Qui est propriétaire du code et du design (cession complète à MEC ou licence d'utilisation) ?
15. Search Console : sous quel compte Google est la propriété mecfinance.ma ? Le client sera-t-il ajouté comme propriétaire ?

## 10. Documents remis (cases laissées vides)
16. Faut-il préparer et remettre : une copie de la base de données, un manuel d'utilisation du site (le guide docs/DASHBOARD.md couvre seulement le dashboard), un manuel de gestion des e-mails, les factures de renouvellement, le contrat de maintenance ? La case « Tous les accès administrateur » sera cochée quand tous les accès auront été transmis.

## 11. Validation
17. Quelle est la date de remise prévue ?

## Remarque technique (hors fiche)
- Le sous-domaine send.mecfinance.ma (expéditeur Resend du formulaire de contact) n'a aucun enregistrement DNS, et la clé Resend est vide en local. Je n'ai pas pu vérifier la configuration de production : vérifie que le formulaire de contact envoie bien les messages (sinon l'envoi de secours Formspree doit être configuré).
