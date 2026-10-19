# MEC Finance — Ad 01 « Site showcase » — Voice-over scripts FR + NL

Status: **scripts only. No Remotion code until the ElevenLabs audio is delivered.**
Site read on 30 Sept 2026 (live www.mecfinance.ma + repo `src/data/*`, `report-source-fr.md`).
Format: 1080×1920 (9:16), 30 fps, 45 s, burned-in subtitles, navy `#001f3f` / `#02162b` + gold `#d4af37` (final brand tokens in `src/app/globals.css`), Inter.

---

## 0. Read first — where the brief and the live site disagree

The script below only says what the site says. Four points of the brief had to be adjusted:

| Brief asks | What the live site actually says | What the script does |
|---|---|---|
| "Each service states **what is done, in what order, and what is expected from the client**" | The 7 service pages list **what is done** ("Ce que nous faisons"). Only the 3 parcours pages (`/creation-entreprise-maroc`, `/implantation-entreprise-maroc`, `/cabinet-comptable-tanger`) show **the order** (Méthode MEC, Étapes 1–4). **No page has a "what we expect from you" section.** The closest thing is the article `/resources/creer-societe-maroc-depuis-europe`: "Préparez une liste de noms, les justificatifs des associés et dirigeants, l'adresse du siège…" | Says "chaque parcours" (not "chaque service") and "ce qu'il faut préparer" (sourced from the article), not "ce qu'on attend de vous". **If you want the stronger claim, add a "Ce que nous attendons de vous" block to the 3 parcours pages and deploy it before we film.** |
| Contact form: "we tell you **whether it is feasible** and how" | The site never promises a feasibility verdict. It says: "Planifiez une première consultation pour cadrer vos priorités et identifier les prochaines étapes" and "première consultation gratuite sans engagement". | FR: "cadre vos priorités et les prochaines étapes". NL: "vrijblijvend … volgende stappen". |
| Pillar 2: "tax and administrative **problems**" | The site talks about **obligations**: "obligations fiscales et juridiques", "gestion administrative", "obligations déclaratives", "suivi des échéances". Nothing about disputes, tax audits or regularisation. | Says "obligations fiscales et administratives". |
| NL: "Moroccan diaspora who want to invest back home" | The site covers **creating and running a company** (from Europe too). **Nothing about property, land or personal investment.** MEC's office is Tangier. The site does **not** mention a Belgian office or Dutch-speaking staff. | NL talks about "je zaak / je vennootschap", never property. It says nothing about language or a Belgian presence, and uses the real Tangier address as a trust signal. |

**Also kept off screen and out of the voice-over:**
- **All figures**: 98 %, 15+, 300+, 2 continents (homepage), and 20+ years (`/notre-equipe`, which contradicts the 15+ elsewhere). None of them has a dated source.
- **"Réactivité garantie"** (homepage, *Pourquoi nous choisir* block). It's a guarantee, so no shot frames that block.
- **The header logo and the WhatsApp bubble**: hidden in every capture (logo only at the end, one CTA).
- **MEC does not replace the notary or lawyer.** The site says so explicitly in the FAQ on `/creation-entreprise-maroc`. Both scripts say MEC *works with* them for legal acts.

**NL screen caveat:** the site's NL switch only translates the nav, the service cards and the CTA band. Landing pages, the contact form, `/notre-equipe` and the homepage hero stay in French. In the NL cut the Dutch subtitles carry the meaning, and I use the translated elements where they exist (e.g. "Een vaste contactpersoon in elke fase van uw ontwikkeling", "Adviesgesprek aanvragen").

---

## 1. Claim → source map (both versions)

| Claim in VO | Source on the live site |
|---|---|
| Cabinet de conseil financier et comptable à Tanger | Homepage eyebrow "CABINET DE CONSEIL FINANCIER ET COMPTABLE À TANGER" |
| Structure vos décisions, prépare le calendrier | `/creation-entreprise-maroc`: "MEC structure ces décisions, prépare le calendrier…" |
| Banque, TVA, paie avant la première facture (FR hook) | `/creation-entreprise-maroc` bloc 02: "Préparer les décisions avant la première facture — La banque, la TVA, la paie…" |
| Créer la société | `/creation-entreprise-maroc`; `/about`: "De la création de leur société aux démarches administratives, fiscales et comptables" |
| Obligations fiscales et administratives | `/about`: "la gestion administrative, les obligations fiscales et juridiques"; `/services/comptabilite`: "Suivi des échéances" |
| Notaire ou avocat pour les actes juridiques | `/creation-entreprise-maroc` bloc 03: "nous travaillons avec le notaire ou l'avocat compétent"; `/notre-equipe`: "réseau de notaires et d'avocats reconnus" |
| Un seul dossier | `/creation-entreprise-maroc`: "dossier cohérent", "avec un suivi global du projet" |
| Un interlocuteur dédié / een vaste contactpersoon | `/services/accompagnement-personnalise`: "Un interlocuteur dédié à chaque étape…" (NL site: "Een vaste contactpersoon in elke fase…") |
| Étape par étape, dans quel ordre | "Méthode MEC — Étape 1…4" on the 3 parcours pages |
| Ce qu'il faut préparer / wat jij moet voorzien | `/resources/creer-societe-maroc-depuis-europe` §2: "Préparez une liste de noms, les justificatifs…" |
| Adresse, sur rendez-vous (NL) | `/contact`: "Notre équipe vous accueille sur rendez-vous au centre de Tanger" |
| Premier échange: priorités, prochaines étapes | Service pages: "…cadrer vos priorités et identifier les prochaines étapes" |
| Vrijblijvend (NL) | `/contact`: "première consultation gratuite sans engagement" |

---

## 2. FRENCH version — entreprises françaises et marocaines

Angle: séquencement et exécution. Ton: précis, opérationnel, sobre. Débit cible ≈ 2,5 mots/s.

### 2.1 Voice-over with timecodes

| # | Time | Segment | Text | Words | Target read |
|---|---|---|---|---|---|
| 1 | 00.0–04.0 | Hook | Société créée. Première facture demain. Banque, TVA, paie : rien n'est prêt. | 12 | 3.8 s |
| 2 | 04.0–11.0 | Qui | Morocco Europe Consulting, cabinet de conseil financier et comptable à Tanger, structure vos décisions et prépare le calendrier. | 18 | 6.5 s |
| 3 | 11.0–22.0 | Piliers | Trois chantiers. Créer la société. Tenir les obligations fiscales et administratives. Pour les actes juridiques, travailler avec le notaire ou l'avocat. Un seul dossier. Un interlocuteur dédié. | 27 | 10.5 s |
| 4 | 22.0–32.0 | Méthode | Sur le site, chaque parcours est décrit étape par étape : ce qui est fait, dans quel ordre, ce qu'il faut préparer. Une méthode, pas une promesse. | 26 | 9.5 s |
| 5 | 32.0–38.0 | Contact | Décrivez votre situation dans le formulaire. Le premier échange cadre vos priorités et les prochaines étapes. | 16 | 5.8 s |
| 6 | 38.0–45.0 | CTA | Morocco Europe Consulting. M.E.C. finance point M.A. | 7 | 3.5 s + 3.5 s silence under the end card |
| | | | **Total** | **106** | ≈ 40 s of speech |

### 2.2 Paste into ElevenLabs (FR)

One continuous file. The line breaks mark where the breaths go; ElevenLabs reads them as short pauses.

```
Société créée. Première facture demain.
Banque, TVA, paie : rien n'est prêt.

Morocco Europe Consulting, cabinet de conseil financier et comptable à Tanger, structure vos décisions et prépare le calendrier.

Trois chantiers.
Créer la société.
Tenir les obligations fiscales et administratives.
Pour les actes juridiques, travailler avec le notaire ou l'avocat.
Un seul dossier. Un interlocuteur dédié.

Sur le site, chaque parcours est décrit étape par étape : ce qui est fait, dans quel ordre, ce qu'il faut préparer.
Une méthode, pas une promesse.

Décrivez votre situation dans le formulaire.
Le premier échange cadre vos priorités et les prochaines étapes.

Morocco Europe Consulting.
M.E.C. finance point M.A.
```

Pronunciation: said as a word, « MEC » sounds like the French slang *mec*. That's why the script spells it: « M.E.C. finance point M.A. ». If the voice still runs the letters together, write « emme-euh-cé finance, point, emme-a ». Tell me if you'd rather have it said as one word.

### 2.3 Burned-in subtitles (FR)

Rules: at most 2 lines and 30 characters per line, Inter 700 at 52 px, white on a navy band, and the keyword of each cue in gold. The timings below are estimates. **They will be re-timed to the word timestamps of your audio.**

| In | Out | Line 1 | Line 2 | Gold word |
|---|---|---|---|---|
| 00.0 | 01.1 | Société créée. | | créée |
| 01.1 | 02.3 | Première facture demain. | | demain |
| 02.3 | 04.0 | Banque, TVA, paie : | rien n'est prêt. | rien n'est prêt |
| 04.1 | 05.7 | Morocco Europe Consulting, | | |
| 05.7 | 07.7 | cabinet de conseil | financier et comptable | |
| 07.7 | 08.5 | à Tanger, | | Tanger |
| 08.5 | 10.9 | structure vos décisions | et prépare le calendrier. | calendrier |
| 11.0 | 12.2 | Trois chantiers. | | Trois |
| 12.2 | 13.8 | Créer la société. | | |
| 13.8 | 16.6 | Tenir les obligations | fiscales et administratives. | |
| 16.6 | 18.2 | Pour les actes juridiques, | travailler avec | |
| 18.2 | 19.7 | le notaire ou l'avocat. | | notaire · avocat |
| 19.7 | 20.8 | Un seul dossier. | | seul |
| 20.8 | 22.0 | Un interlocuteur dédié. | | dédié |
| 22.1 | 23.7 | Sur le site, | chaque parcours | |
| 23.7 | 25.5 | est décrit étape par étape : | | étape par étape |
| 25.5 | 26.7 | ce qui est fait, | | fait |
| 26.7 | 27.9 | dans quel ordre, | | ordre |
| 27.9 | 29.6 | ce qu'il faut préparer. | | préparer |
| 29.6 | 31.9 | Une méthode, | pas une promesse. | méthode |
| 32.1 | 34.5 | Décrivez votre situation | dans le formulaire. | situation |
| 34.5 | 36.5 | Le premier échange | cadre vos priorités | |
| 36.5 | 38.0 | et les prochaines étapes. | | étapes |
| 38.0 | 45.0 | *(no subtitle: the end card carries the text)* | | |

### 2.4 Shot list (FR)

Capture: Playwright at a 430×932 CSS viewport, DPR 3, French locale. Injected CSS hides the top bar, the sticky header (it holds the logo) and the WhatsApp bubble, and forces `MotionObserver` reveals to visible. For each shot I export a full-page PNG plus the target element's bounding box (JSON). Remotion animates the scroll and draws the gold highlight over that box. It's a real capture of the live site, animated; no stock footage.

| Time | Page | Scroll / motion | Highlight (gold) |
|---|---|---|---|
| 00.0–04.0 | `/creation-entreprise-maroc` | Hard cut in on block **02 « Préparer les décisions avant la première facture »**, slow push-in 108 %→100 % | 01.1 s: underline sweep on the title "avant la première facture". 02.3 s: box on "La banque, la TVA, la paie" |
| 04.0–07.8 | `/` (homepage hero, **header hidden**) | Static, 3 % drift up | 04.1 s: eyebrow "CABINET DE CONSEIL FINANCIER ET COMPTABLE À TANGER" |
| 07.8–11.0 | `/creation-entreprise-maroc` intro paragraph | Scroll 220 px | 08.5 s: "MEC structure ces décisions, prépare le calendrier" |
| 11.0–13.8 | `/creation-entreprise-maroc` hero | Quick scroll to the top | 12.2 s: H1 "Création d'entreprise au Maroc" |
| 13.8–16.6 | `/services/comptabilite` | Scroll to "Ce que nous faisons" | 14.5 s: "Bilans et liasses fiscales", then 15.5 s: "Suivi des échéances" |
| 16.6–19.7 | `/notre-equipe` | Scroll to **« Réseau de partenaires »** | 18.2 s: "un réseau de notaires et d'avocats reconnus" |
| 19.7–22.0 | `/services/accompagnement-personnalise` hero | Static | 20.8 s: "Un interlocuteur dédié à chaque étape de votre développement." |
| 22.0–25.5 | `/services/implantation-internationale` | Scroll to "Ce que nous faisons" | 25.5 s: the 4-item list, lit item by item |
| 25.5–27.9 | `/creation-entreprise-maroc` | Scroll to **« Méthode MEC »** | 26.7 s: Étapes 1→4 lit in sequence, 0.3 s apart (this is "dans quel ordre") |
| 27.9–32.0 | `/resources/creer-societe-maroc-depuis-europe` | Scroll to §2 | 28.1 s: "Préparez une liste de noms, les justificatifs des associés et dirigeants, l'adresse du siège". Held under "Une méthode, pas une promesse." |
| 32.0–36.5 | `/contact` | Scroll to the form | 32.1 s: focus ring on **Message**; simulated typing *« Création d'une société à Tanger, deux associés, démarrage prévu en janvier. »* (capture only, **never submitted**, no personal data in the other fields) |
| 36.5–38.0 | `/services/implantation-internationale` CTA box | Static | "cadrer vos priorités et identifier les prochaines étapes" |
| 38.0–45.0 | End card (Remotion, no capture) | Navy `#02162b`, gold hairline | 38.3 s: logo `public/images/brand/logo-main.png` fades in. 39.5 s: **mecfinance.ma** in gold, the only CTA. Hold to 45.0 |

---

## 3. NEDERLANDSE versie (Vlaams) — Marokkaanse diaspora in Antwerpen en Brussel

Written natively in Dutch, not translated from the French. Angle: trusting someone you can't check on from Belgium. Ton: warm, direct, geruststellend. Belgian register: "je" (not "u", not "ge"), "voorzien" (in its Belgian sense), "opvolgen", "vennootschap", "langskomen op afspraak". Target pace ≈ 2.5 words/s.

### 3.1 Voice-over with timecodes

| # | Time | Segment | Text | Words | Target read |
|---|---|---|---|---|---|
| 1 | 00.0–04.0 | Hook | Je zaak in Marokko. Jij in België. Wie kan je daar vertrouwen? | 12 | 3.8 s |
| 2 | 04.0–11.0 | Wie | Morocco Europe Consulting: een advieskantoor voor financiën en boekhouding in Tanger. Met een adres waar je op afspraak langskomt. | 19 | 6.8 s |
| 3 | 11.0–22.0 | Pijlers | Drie dingen. Je vennootschap oprichten. Je fiscale en administratieve verplichtingen opvolgen. En voor de akten stemmen wij af met de notaris of advocaat. Eén dossier. Eén vaste contactpersoon. | 28 | 10.8 s |
| 4 | 22.0–32.0 | Methode | Op de site staat stap voor stap wat er gebeurt, in welke volgorde, en wat jij moet voorzien. Zo weet je vooraf waar je aan toe bent. | 27 | 9.8 s |
| 5 | 32.0–38.0 | Contact | Beschrijf je situatie. Een eerste gesprek, vrijblijvend, zet je volgende stappen op een rij. | 14 | 5.5 s |
| 6 | 38.0–45.0 | CTA | Morocco Europe Consulting. M.E.C. finance punt M.A. | 7 | 3.5 s + 3.5 s silence |
| | | | **Total** | **107** | ≈ 40 s |

Segment 4 carries the "a method, not a promise" idea in native terms, for the fear the brief names: at a distance, what reassures is *knowing in advance what happens*. Segment 2 uses the one concrete trust anchor the site gives: a real address you can visit by appointment.

### 3.2 Paste into ElevenLabs (NL)

**Pick a Flemish voice.** Multilingual models default to a Netherlands accent. In the Voice Library, filter Dutch → accent *Flemish / Belgian*, and check that it says "Marokko" and "Tanger" the Flemish way.

```
Je zaak in Marokko. Jij in België.
Wie kan je daar vertrouwen?

Morocco Europe Consulting: een advieskantoor voor financiën en boekhouding in Tanger.
Met een adres waar je op afspraak langskomt.

Drie dingen.
Je vennootschap oprichten.
Je fiscale en administratieve verplichtingen opvolgen.
En voor de akten stemmen wij af met de notaris of advocaat.
Eén dossier. Eén vaste contactpersoon.

Op de site staat stap voor stap wat er gebeurt, in welke volgorde, en wat jij moet voorzien.
Zo weet je vooraf waar je aan toe bent.

Beschrijf je situatie.
Een eerste gesprek, vrijblijvend, zet je volgende stappen op een rij.

Morocco Europe Consulting.
M.E.C. finance punt M.A.
```

### 3.3 Burned-in subtitles (NL)

| In | Out | Line 1 | Line 2 | Gold word |
|---|---|---|---|---|
| 00.0 | 01.3 | Je zaak in Marokko. | | Marokko |
| 01.3 | 02.3 | Jij in België. | | België |
| 02.3 | 04.0 | Wie kan je daar | vertrouwen? | vertrouwen |
| 04.1 | 05.6 | Morocco Europe Consulting: | | |
| 05.6 | 07.8 | een advieskantoor voor | financiën en boekhouding | |
| 07.8 | 08.6 | in Tanger. | | Tanger |
| 08.6 | 10.9 | Met een adres waar je | op afspraak langskomt. | adres |
| 11.0 | 12.0 | Drie dingen. | | Drie |
| 12.0 | 13.7 | Je vennootschap oprichten. | | |
| 13.7 | 16.3 | Je fiscale en administratieve | verplichtingen opvolgen. | |
| 16.3 | 17.8 | En voor de akten | stemmen wij af | |
| 17.8 | 19.5 | met de notaris of advocaat. | | notaris · advocaat |
| 19.5 | 20.6 | Eén dossier. | | Eén |
| 20.6 | 22.0 | Eén vaste contactpersoon. | | vaste |
| 22.1 | 23.8 | Op de site staat | stap voor stap | stap voor stap |
| 23.8 | 24.9 | wat er gebeurt, | | |
| 24.9 | 26.2 | in welke volgorde, | | volgorde |
| 26.2 | 28.3 | en wat jij moet voorzien. | | voorzien |
| 28.3 | 31.9 | Zo weet je vooraf | waar je aan toe bent. | vooraf |
| 32.1 | 33.5 | Beschrijf je situatie. | | situatie |
| 33.5 | 35.3 | Een eerste gesprek, | vrijblijvend, | vrijblijvend |
| 35.3 | 38.0 | zet je volgende stappen | op een rij. | stappen |
| 38.0 | 45.0 | *(no subtitle: end card)* | | |

### 3.4 Shot list (NL)

Same capture setup as the FR version. The locale is set to `nl` (`localStorage mec-locale=nl`) so the translated blocks show in Dutch; everything else stays in French, as it is on the live site.

| Time | Page | Scroll / motion | Highlight (gold) |
|---|---|---|---|
| 00.0–04.0 | `/resources/creer-societe-maroc-depuis-europe` article hero | Slow push-in on the H1 | 01.3 s: sweep on **"depuis l'Europe"**. 02.3 s: the meta line "Par l'équipe MEC" dims out and the frame holds on the H1 (the question lands) |
| 04.0–07.8 | `/` hero (**header hidden**) | Static drift | 04.1 s: eyebrow "CABINET DE CONSEIL FINANCIER ET COMPTABLE À TANGER" |
| 07.8–11.0 | `/contact`, address card | Scroll to Adresse / "Tanger, Maroc" card | 08.6 s: "1er étage N3, Rue Farabi… Tanger". 09.6 s: "vous accueille sur rendez-vous au centre de Tanger" |
| 11.0–13.7 | `/creation-entreprise-maroc` hero | Static | 12.0 s: H1 "Création d'entreprise au Maroc" |
| 13.7–16.3 | `/services` grid (NL) | Scroll to the **"Boekhouding"** card | 14.0 s: "…fiscale aangiften, rapportage en opvolging van verplichtingen" (NL text) |
| 16.3–19.5 | `/creation-entreprise-maroc` block **03** | Scroll | 17.8 s: "nous travaillons avec le notaire ou l'avocat compétent" |
| 19.5–22.0 | `/services/accompagnement-personnalise` or the "Persoonlijke begeleiding" card (NL) | Static | 20.6 s: **"Een vaste contactpersoon in elke fase van uw ontwikkeling."** (on-site text, word for word with the VO) |
| 22.0–26.2 | `/creation-entreprise-maroc` | Scroll to **« Méthode MEC »** | 23.8 s: Étapes 1→4 lit in sequence, 0.5 s apart |
| 26.2–28.3 | `/resources/creer-societe-maroc-depuis-europe` §2 | Scroll | "Préparez une liste de noms, les justificatifs…" |
| 28.3–32.0 | `/creation-entreprise-maroc` intro badges | Scroll up 300 px | 28.8 s: **"Financement et flux documentés"**, then **"Calendrier administratif lisible"** (the "from a distance" reassurance, stated on the site) |
| 32.0–35.3 | `/contact` form | Scroll to the form | Focus on **Message**; simulated typing *« Oprichting van een SARL in Tanger vanuit Antwerpen. »* (capture only, never submitted) |
| 35.3–38.0 | CTA band (NL) | Static | **"EERSTE ADVIESGESPREK — Laten we uw belangrijkste beslissingen bespreken."** Note: the button "Adviesgesprek aanvragen" shows but gets no highlight (the only CTA is the end card) |
| 38.0–45.0 | End card | Same as FR | Logo, then **mecfinance.ma** in gold. Hold |

---

## 4. What I need from you (Step 3)

1. **Two audio files**: `mec-ad01-fr.wav` and `mec-ad01-nl.wav` (WAV or MP3 at 44.1 kHz or higher). One continuous take per language is best: it keeps the prosody natural, and I'll pull word-level timestamps from the audio to re-time every subtitle and shot. The final cut follows your audio; the numbers above are estimates.
2. **Answers to the flags in §0** that you want to change on the site before filming, especially the "Ce que nous attendons de vous" block and the feasibility wording.
3. How to say MEC: letters (M.E.C., my default) or one word.
