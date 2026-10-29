import sys, re, fitz

SRC, OUT = sys.argv[1], sys.argv[2]
AC = "À compléter"
PW = "Transmis séparément par canal sécurisé"
NAVY = (0.09, 0.196, 0.302)
RED = (0.72, 0.18, 0.08)

V = {
    # 1
    "Nom de l'entreprise": "Morocco Europe Consulting (MEC) - site mecfinance.ma",
    "Adresse du site internet (URL)": "https://www.mecfinance.ma",
    "Date de mise en ligne": AC,
    "Societe ayant cree le site": "Future Glow (agence web, Tanger)",
    "Responsable technique": "Nadir Chioua - Future Glow",
    "Telephone": AC,
    "E-mail": "chioua65@gmail.com",
    # 2
    "Technologie utilisee (WordPress, Odoo, autre)": "Site sur mesure Next.js 16 / React 19 (sans CMS). Tableau de bord statistiques : Supabase",
    "Adresse de connexion administrateur": "https://www.mecfinance.ma/admin (page de connexion : /admin/login)",
    "Identifiant administrateur principal": "chioua65@gmail.com (compte actuel du prestataire, à remplacer par un compte au nom du client)",
    "Mot de passe provisoire": PW,
    "E-mail lie au compte administrateur": "chioua65@gmail.com",
    "Procedure de reinitialisation du mot de passe": "Pas de lien « mot de passe oublié » sur /admin. Réinitialisation depuis le projet Supabase (Authentication > Users)",
    # 3
    "Nom de domaine": "mecfinance.ma",
    "Titulaire officiel du domaine": "Morocco Europe consulting Jeoual (registre .ma, WHOIS)",
    "Bureau d'enregistrement (registrar)": "GENIOUS COMMUNICATIONS (Marrakech) - contact@genious.net",
    "Adresse de connexion": AC,
    "Identifiant": AC,
    "E-mail de recuperation": AC,
    "Date d'enregistrement": "23/07/2026",
    "Date d'expiration": "23/07/2027",
    "Prix annuel du renouvellement": AC,
    # page 2
    "Renouvellement automatique (Oui/Non)": AC,
    "Code de transfert EPP/Auth": "Non inclus dans ce document : à demander au registrar au moment d'un transfert",
    "Protection contre le transfert (Oui/Non)": "Oui (statut clientTransferProhibited, WHOIS du 26/10/2026)",
    # 4
    "Nom de l'hebergeur": "Vercel Inc. (projet « mec-comz »)",
    "Type d'hebergement": "Plateforme cloud serverless pour Next.js, avec CDN mondial",
    "Adresse de l'espace client": "https://vercel.com/login",
    "Panneau de gestion (cPanel, Plesk, autre)": "Tableau de bord Vercel (pas de cPanel ni de Plesk)",
    "Identifiant du panneau": "Même compte que l'espace client Vercel",
    "Mot de passe provisoire du panneau": PW,
    "Adresse IP du serveur": "76.76.21.21 (mecfinance.ma) ; www : cname.vercel-dns.com (IP Vercel)",
    "Capacite de stockage": "Sans objet : hébergement serverless, pas d'espace disque fixe",
    "Prix et periodicite du renouvellement": AC,
    "Titulaire de la facturation": AC,
    # 5
    "Type de base de donnees": "PostgreSQL (Supabase) - statistiques de visite du tableau de bord uniquement",
    "Nom de la base de donnees": "postgres (projet Supabase amidamgntybhfjvnbbrv)",
    "Nom d'utilisateur": "postgres",
    "Serveur de base de donnees": "db.amidamgntybhfjvnbbrv.supabase.co : 5432",
    "Adresse FTP/SFTP": "Sans objet : pas de FTP chez Vercel (mise en ligne depuis le code source)",
    "Identifiant FTP/SFTP": "Sans objet",
    "Mot de passe provisoire FTP/SFTP": "Sans objet",
    "Port": "FTP : sans objet ; PostgreSQL : 5432",
    # 6
    "Fournisseur de messagerie": "Hostinger Email (serveurs MX mx1 / mx2.hostinger.com)",
    "Adresse du webmail": "https://mail.hostinger.com",
    "Adresse de l'espace administrateur": "https://hpanel.hostinger.com (rubrique E-mails)",
    "Identifiant administrateur": AC,
    "Nombre d'adresses incluses": AC,
    "Stockage par adresse": AC,
    "Prix du service": AC,
    "Date du prochain renouvellement": AC,
    "Serveur entrant IMAP et port": "imap.hostinger.com : 993 (SSL)",
    "Serveur sortant SMTP et port": "smtp.hostinger.com : 465 (SSL)",
    "Securite SSL/TLS (Oui/Non)": "Oui",
    "Adresse e-mail 1 / identifiant / mot de passe provisoire": "contact@mecfinance.ma / contact@mecfinance.ma / " + PW.lower(),
    "Adresse e-mail 2 / identifiant / mot de passe provisoire": AC,
    "Adresse e-mail 3 / identifiant / mot de passe provisoire": AC,
    # 7
    "Systeme de sauvegarde": "Code : dépôt Git (GitHub) + historique des déploiements Vercel. Base Supabase : à compléter",
    "Frequence des sauvegardes": "Code : à chaque modification (commit et déploiement). Base : à compléter",
    "Emplacement des sauvegardes": "GitHub (dépôt MEC) et Vercel ; copie locale chez Future Glow",
    "Duree de conservation": AC,
    "Procedure de restauration": "Vercel : retour instantané à un déploiement précédent (Instant Rollback) ou redéploiement depuis Git",
    "Certificat SSL et date d'expiration": "Let's Encrypt, renouvelé automatiquement par Vercel - expire le 28/12/2026",
    "Solution de securite utilisee": "HTTPS + HSTS, en-têtes de sécurité, protection réseau Vercel, accès base limité (RLS Supabase)",
    "Double authentification activee (Oui/Non)": AC,
    # 8
    "Maintenance incluse (Oui/Non)": AC,
    "Debut du contrat": AC,
    "Fin du contrat": AC,
    "Prix mensuel ou annuel": AC,
    "Prestations incluses": AC,
    "Heures d'assistance incluses": AC,
    "Delai d'intervention": AC,
    "Cout d'une intervention supplementaire": AC,
    "Conditions de resiliation": AC,
    "Contact en cas de panne": AC,
    "Telephone d'urgence": AC,
    # 9
    "Theme ou modele utilise": "Aucun thème : design et code sur mesure par Future Glow",
    "Proprietaire de la licence": AC,
    "Extensions payantes": "Aucune (bibliothèques open source gratuites : Next.js, React, Supabase, Recharts, Zod)",
    "Dates d'expiration": "Sans objet (aucune licence payante)",
    "Prix des renouvellements": "Sans objet pour les licences (domaine et services : voir sections 3, 4 et 6)",
    "Acces Google Analytics / Search Console": "Google Analytics : non utilisé (statistiques internes sur /admin). Search Console : domaine vérifié par DNS, propriétaire à compléter",
    "Autres comptes associes": "GitHub (code), Supabase (statistiques), Resend et Formspree (formulaire de contact), Hostinger (DNS et e-mail)",
    # 11
    "Nom du prestataire": "Future Glow (Tanger) - Nadir Chioua",
    "Nom du client": "Morocco Europe Consulting",
    "Date de remise": "",
}
# Labels used on several pages: value differs by section (key, page index, y range).
DUP = {
    ("Identifiant", 0): AC,              # registrar account
    ("Identifiant", 1): AC,              # hosting account
    ("Mot de passe provisoire", 0): PW,
    ("Mot de passe provisoire", 1): PW,
    ("Mot de passe provisoire", 2): PW,
    ("Date d'expiration", 0): "23/07/2027",
    ("Date d'expiration", 1): AC,        # hosting plan
    ("Renouvellement automatique (Oui/Non)", 1): AC,
    ("E-mail de recuperation", 0): AC,
    ("E-mail de recuperation", 2): AC,
}
CHECKED = {"Copie complete des fichiers du site", "Fichiers sources, logos et images"}

def norm(s):
    return re.sub(r"\s+", " ", s).strip()

def put(page, rect, text):
    color = RED if text.startswith(AC) else NAVY
    font = "hebo" if text.startswith(AC) else "helv"
    for size in (8.5, 8, 7.5, 7, 6.5, 6):
        shape = page.new_shape()
        rc = shape.insert_textbox(rect, text, fontname=font, fontsize=size, color=color,
                                  lineheight=1.15, align=0)
        if rc >= 0:
            # vertical centring: shift by half the unused height
            dy = rc / 2  # centre vertically
            shape = page.new_shape()
            r2 = fitz.Rect(rect.x0, rect.y0 + dy, rect.x1, rect.y1 + dy)
            shape.insert_textbox(r2, text, fontname=font, fontsize=size, color=color,
                                 lineheight=1.15, align=0)
            shape.commit()
            return size
    raise SystemExit(f"OVERFLOW: {text}")

doc = fitz.open(SRC)
filled, missing = 0, []
for page in doc:
    words = page.get_text("words")
    for dr in page.get_drawings():
        f = dr.get("fill")
        r = dr["rect"]
        if not f or abs(f[0] - 0.96) > 0.01 or abs(r.x0 - 43) > 2 or r.x1 > 300:
            continue
        label = norm(" ".join(w[4] for w in words if r.contains(fitz.Point((w[0]+w[2])/2, (w[1]+w[3])/2))))
        key = (label, page.number)
        if key in DUP:
            val = DUP[key]
        elif label in V:
            val = V[label]
        else:
            missing.append((page.number, label)); continue
        if val == "":
            continue
        cell = fitz.Rect(r.x1 + 5, r.y0 + 1.5, 553 - 5, r.y1 - 1.5)
        put(page, cell, val)
        filled += 1
    # checkboxes (section 10)
    for b in page.get_text("rawdict")["blocks"]:
        for l in b.get("lines", []):
            if l["spans"][0]["font"] != "ZapfDingbats":
                continue
            item = norm("".join(c["c"] for sp in l["spans"][1:] for c in sp["chars"]))
            g = fitz.Rect(l["spans"][0]["chars"][0]["bbox"])
            page.draw_rect(fitz.Rect(g.x0 - 1, g.y0 - 1, g.x1 + 1, g.y1 + 1), color=None, fill=(1, 1, 1))
            box = fitz.Rect(g.x0 + 0.3, g.y0 + 1, g.x0 + 7.3, g.y0 + 8)
            page.draw_rect(box, color=NAVY, width=0.8)
            if item in CHECKED:
                page.insert_text((box.x0 + 0.6, box.y1 - 0.8), "4", fontname="zadb", fontsize=7.5, color=NAVY)
print("filled", filled, "missing", missing)
doc.save(OUT, garbage=3, deflate=True)
