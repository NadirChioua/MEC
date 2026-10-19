import type { SeoLandingPage } from "./landing-pages";

/**
 * Language versions of the commercial landing pages, served under /nl, /en, /es and /ar.
 * Same facts as the French pages (nothing promised that the French site does not say),
 * written natively for each audience: Moroccan diaspora in Belgium and the Netherlands,
 * Spanish companies across the Strait, English-speaking investors, Arabic-speaking searchers.
 * Pages with the same `group` are linked together with hreflang.
 */
export const intlLandingPages: SeoLandingPage[] = [
  // ───────────────────────── NEDERLANDS (Vlaams register) ─────────────────────────
  {
    slug: "bedrijf-oprichten-marokko",
    group: "creation",
    locale: "nl",
    seoTitle: "Bedrijf oprichten in Marokko vanuit België of Nederland | MEC",
    eyebrow: "Oprichting en structuur",
    title: "Een bedrijf oprichten in Marokko, ook als je in Europa woont",
    description:
      "Je wil een zaak opstarten in Marokko? MEC, advieskantoor voor financiën en boekhouding in Tanger, zet je project stap voor stap op, documenteert je geld uit Europa en volgt je dossier ter plaatse op.",
    intro:
      "Een vennootschap oprichten in Marokko vanuit Antwerpen, Brussel of Rotterdam roept één vraag op: wie volgt je dossier daar echt op? Morocco Europe Consulting, advieskantoor voor financiën en boekhouding in Tanger, zet je project in de juiste volgorde: activiteit, vennoten, bestuur, budget en kalender. Voor akten werken we samen met de bevoegde notaris of advocaat. Je houdt één vaste contactpersoon, van het eerste gesprek tot de opstart.",
    imageSrc: "/images/generated/mec-morocco-europe-bridge.webp",
    imageAlt: "Begeleiding bij het oprichten van een bedrijf in Marokko vanuit Europa",
    outcomes: ["Eén vaste contactpersoon in Tanger", "Geld uit Europa correct gedocumenteerd", "Stappen en documenten vooraf gekend", "Notaris of advocaat voor de akten"],
    sections: [
      {
        title: "Je project voorbereiden vóór de eerste overschrijving",
        text: "Activiteit, vennoten, bestuur, budget, zetel en kalender bepalen de rechtsvorm en de volgorde van je dossier. We bekijken dat samen op afstand en leggen vast welke documenten je moet voorzien.",
        items: ["Activiteit en vennoten", "Rechtsvorm (bijvoorbeeld SARL of SARL AU)", "Opstartbudget", "Kalender van de formaliteiten"]
      },
      {
        title: "Geld uit Europa: elke overschrijving gedocumenteerd",
        text: "Bij een investering vanuit het buitenland is de traceerbaarheid van deviezen essentieel. Het circuit van de fondsen ligt vast vóór de eerste transfer (kapitaal, rekening-courant van de vennoot of een ander mechanisme) en alle bankbewijzen worden vanaf dag één bewaard.",
        items: ["Overschrijvingsopdrachten en creditberichten", "Bankattesten", "Afspraken tussen vennoten", "Latere verantwoording van inkomsten of een verkoop"]
      },
      {
        title: "Opvolging ter plaatse, zonder tussenpersonen te stapelen",
        text: "MEC stemt de informatie af tussen jou, de bank, de administratie en de juristen. Voor akten en juridisch advies werken we samen met de bevoegde notaris of advocaat. Na de oprichting kan de begeleiding doorlopen: boekhouding, aangiftes en rapportering."
      }
    ],
    process: [
      { title: "Eerste gesprek op afstand", text: "Je project, je vragen, je beperkingen." },
      { title: "Structuur", text: "Rechtsvorm, financiering, geldstromen en kalender." },
      { title: "Opvolging in Tanger", text: "Documenten, betrokkenen en formaliteiten." },
      { title: "Opstart", text: "Boekhouding, fiscaliteit, bank en dashboard." }
    ],
    faq: [
      { question: "Kan ik een bedrijf oprichten in Marokko zonder er te wonen?", answer: "Ja, dat komt vaak voor bij Marokkanen in het buitenland. Welke documenten en eventuele volmachten nodig zijn, hangt af van je situatie. We zetten ze op een rij bij de start en laten ze nakijken door de bevoegde professionals." },
      { question: "Hoe stuur ik het kapitaal vanuit België of Nederland?", answer: "Het circuit van de fondsen leggen we vast vóór de eerste overschrijving, en alles wordt gedocumenteerd: overschrijvingsopdrachten, creditberichten en bankattesten. Zo kan je de investering later altijd verantwoorden." },
      { question: "Vervangt MEC de notaris of de advocaat?", answer: "Nee. MEC neemt de financiële, boekhoudkundige en operationele kant op zich en werkt samen met de notaris of advocaat wanneer je dossier een akte of juridisch advies vraagt." },
      { question: "Moet ik naar Tanger komen?", answer: "Het eerste gesprek en een groot deel van de opvolging gebeuren op afstand. Ben je in Marokko, dan ontvangen we je op afspraak in het centrum van Tanger." }
    ],
    relatedServices: [],
    keywords: ["bedrijf oprichten Marokko", "vennootschap oprichten in Marokko", "zaak starten in Marokko vanuit België", "investeren in Marokko", "SARL oprichten Marokko"]
  },
  {
    slug: "vestiging-bedrijf-marokko",
    group: "implantation",
    locale: "nl",
    seoTitle: "Vestiging in Marokko: filiaal of bijkantoor oprichten | MEC Tanger",
    eyebrow: "Ontwikkeling Marokko-Europa",
    title: "Je bedrijf vestigen in Marokko: filiaal, bijkantoor of partnership",
    description:
      "MEC begeleidt Europese bedrijven bij de financiële, fiscale, boekhoudkundige en operationele voorbereiding van hun vestiging in Marokko, vanuit Tanger.",
    intro:
      "Een geslaagde vestiging verbindt de strategie van de groep met de Marokkaanse realiteit: structuur, financiering, geldstromen, fiscaliteit, bank, personeel en rapportering. Morocco Europe Consulting helpt Europese bedrijven die onderwerpen af te bakenen en de uitvoering in Marokko te coördineren.",
    imageSrc: "/images/generated/mec-hero-consulting-meeting.webp",
    imageAlt: "Vestiging van een Europees bedrijf in Marokko met begeleiding van MEC",
    outcomes: ["Vestigingsscenario's vergeleken", "Geldstromen Marokko-Europa in kaart", "Risico's en verplichtingen gekend", "Operationele roadmap"],
    sections: [
      {
        title: "Het juiste vestigingsmodel kiezen",
        text: "Een filiaal, een bijkantoor, een verbindingskantoor of een partnership dienen niet hetzelfde doel. De analyse houdt rekening met controle, aansprakelijkheid, lokale activiteit, facturatie, aanwervingen, financiering en groeiplannen."
      },
      {
        title: "Financiering en grensoverschrijdende stromen beveiligen",
        text: "Inbreng, leningen, intragroepsdiensten, dividenden en andere betalingen moeten gedocumenteerd zijn. Een overzicht van de geldstromen helpt de bancaire, boekhoudkundige, fiscale en reglementaire behandeling te anticiperen.",
        items: ["Kapitaal en rekening-courant", "Contracten en intragroepsfacturatie", "Thesaurie en bank", "Bewijzen van financiering in deviezen"]
      },
      {
        title: "De rapportering naar Europa opzetten",
        text: "Leg vóór de opstart het boekhoudplan, de afsluitfrequentie, de indicatoren, de verantwoordelijkheden en het rapportageformaat naar het hoofdkantoor vast. Die basis bepaalt hoe leesbaar de eerste maanden zijn."
      }
    ],
    process: [
      { title: "Haalbaarheid", text: "Doelen, activiteiten, beperkingen en scenario's." },
      { title: "Structurering", text: "Financiën, fiscaliteit, bank, bestuur en rapportering." },
      { title: "Installatie", text: "Kalender, dienstverleners, documenten en controles." },
      { title: "Opvolging", text: "Afsluiting, thesaurie, compliance en groeibeslissingen." }
    ],
    faq: [
      { question: "Hoe vestigt een Europees bedrijf zich in Marokko?", answer: "Er zijn verschillende opties, afhankelijk van de activiteit en de doelen. Een haalbaarheidsstudie vergelijkt structuur, bestuur, fiscaliteit, financiering, aanwervingen en reglementaire verplichtingen." },
      { question: "Waarom de geldstromen tussen moederbedrijf en Marokko documenteren?", answer: "Documentatie verduidelijkt de aard van de betalingen, hun boekhoudkundige en fiscale behandeling, de bankbewijzen en de verantwoordelijkheden tussen de entiteiten." },
      { question: "Ondersteunt MEC de rapportering naar het hoofdkantoor?", answer: "Ja. MEC kan de afsluiting, de dashboards en de financiële rapportering structureren, zodat de vereisten van de groep aansluiten op de cijfers van de Marokkaanse entiteit." }
    ],
    relatedServices: [],
    keywords: ["vestiging Marokko", "filiaal oprichten Marokko", "bijkantoor Marokko", "ondernemen in Marokko", "investeren in Marokko bedrijf"]
  },
  {
    slug: "boekhouder-tanger",
    group: "comptable",
    locale: "nl",
    seoTitle: "Boekhouder in Tanger: boekhouding, fiscaliteit en lonen | MEC",
    eyebrow: "Boekhouding en sturing in Tanger",
    title: "Boekhoudkantoor in Tanger voor bedrijven en investeerders",
    description:
      "MEC begeleidt bedrijven in Tanger met boekhouding, fiscaliteit, rapportering, loonadministratie, dashboards en financiële sturing.",
    intro:
      "Morocco Europe Consulting helpt bestuurders, kmo's, filialen en investeerders hun boekhouding betrouwbaar te maken, hun deadlines te halen en hun cijfers om te zetten in beslissingen. Ons team in Tanger volgt boekhouding, fiscaliteit en financiën op, helder en vertrouwelijk.",
    imageSrc: "/images/sections/finance-table.webp",
    imageAlt: "Boekhoudkantoor in Tanger voor het financieel beheer van bedrijven",
    outcomes: ["Rekeningen en deadlines onder controle", "Leesbare rapportering voor de directie", "Lokale contactpersoon in Tanger", "Afstemming Marokko-Europa"],
    sections: [
      {
        title: "Een boekhouding waar de directie iets aan heeft",
        text: "Naast het voeren van de boekhouding organiseren we de informatie zodat marge, thesaurie, afwijkingen en verplichtingen duidelijk zijn. De rapportering past bij de grootte van het bedrijf en het beslissingsritme van de bestuurder.",
        items: ["Boekhouding en nazicht", "Jaarrekening en fiscale aangifte", "Aangiftes en deadlinekalender", "Maandelijkse rapportering en dashboards"]
      },
      {
        title: "Voor kmo's, filialen en internationale projecten",
        text: "We werken voor Marokkaanse bedrijven en internationale structuren in Tanger. Opdrachten kunnen de opvolging van stromen met Europa, budgettering, kostenanalyse en afstemming met de juridische adviseurs van het bedrijf omvatten.",
        items: ["Kmo's en bestuurders", "Filialen van buitenlandse groepen", "Importeurs en exporteurs", "Bedrijven in oprichting of herstructurering"]
      },
      {
        title: "Tanger: lokaal dichtbij, internationaal bekeken",
        text: "Vanuit Tanger werken we vlot met bedrijven uit de regio Tanger-Tétouan-Al Hoceïma, met industriële en logistieke spelers en met investeerders die tussen Marokko en Europa actief zijn."
      }
    ],
    process: [
      { title: "Diagnose", text: "Organisatie, verplichtingen en prioriteiten." },
      { title: "Overnameplan", text: "Kalender, verantwoordelijkheden, documenten en rapportering." },
      { title: "Uitvoering", text: "Boekingen, controles, aangiftes en overleg met de directie." },
      { title: "Sturing", text: "Regelmatige analyse van cijfers, afwijkingen, risico's en acties." }
    ],
    faq: [
      { question: "Welke boekhouddiensten biedt MEC in Tanger aan?", answer: "Onder meer boekhouding en nazicht, jaarrekeningen, fiscale aangiftes, opvolging van deadlines, financiële rapportering en dashboards voor de directie." },
      { question: "Werken jullie met buitenlandse filialen?", answer: "Ja. MEC begeleidt Marokkaanse en internationale structuren, onder meer voor rapportering, geldstromen Marokko-Europa en administratieve, financiële en fiscale afstemming." },
      { question: "Kunnen we met een diagnose starten?", answer: "Ja. Een eerste gesprek bakent de opdracht af: beschikbare documenten, dringende punten en de juiste frequentie van opvolging." }
    ],
    relatedServices: [],
    keywords: ["boekhouder Tanger", "boekhoudkantoor Marokko", "boekhouding Marokko", "fiscaliteit Marokko bedrijf", "loonadministratie Marokko"]
  },

  // ───────────────────────── ENGLISH ─────────────────────────
  {
    slug: "company-formation-morocco",
    group: "creation",
    locale: "en",
    seoTitle: "Company Formation in Morocco: Step-by-Step Support | MEC Tangier",
    eyebrow: "Formation and structuring",
    title: "Company formation in Morocco, structured from day one",
    description:
      "Set up your company in Morocco with a financial, accounting, tax and administrative roadmap. MEC, based in Tangier, sequences each step and coordinates with notaries and lawyers.",
    intro:
      "Forming a company in Morocco means aligning business activity, shareholders, governance, funding, banking, tax and social obligations. Morocco Europe Consulting structures these decisions, prepares the timeline and works with the relevant notary or lawyer whenever a legal deed or opinion is required. Founders living abroad keep one dedicated point of contact in Tangier.",
    imageSrc: "/images/generated/mec-strategy-meeting.webp",
    imageAlt: "Professional support for company formation in Morocco",
    outcomes: ["Project scoped before filing", "Funding from abroad documented", "Clear administrative timeline", "Accounting ready at launch"],
    sections: [
      {
        title: "Turn the idea into a consistent file",
        text: "We clarify the activity, shareholders, governance, budget and expected cash flows. This groundwork lets the legal and administrative professionals prepare a file that matches how the company will actually operate.",
        items: ["Business model and budget", "Governance and signing powers", "Funding needs", "Accounting and tax set-up"]
      },
      {
        title: "Get ready before the first invoice",
        text: "Banking, VAT, payroll, contracts, supporting documents and reporting all need to be in place before you invoice. MEC builds a launch checklist and helps set up your management tools."
      },
      {
        title: "Multidisciplinary coordination",
        text: "When the file requires a legal deed or opinion, we work with the relevant notary or lawyer. Each topic goes to the right professional, with one overall follow-up of the project."
      }
    ],
    process: [
      { title: "Scoping", text: "Activity, shareholders, market, budget and timeline." },
      { title: "Structuring", text: "Governance, funding and organisation scenarios." },
      { title: "Coordination", text: "Documents, stakeholders, formalities and tracking." },
      { title: "Launch", text: "Accounting, tax, payroll, cash and dashboard." }
    ],
    faq: [
      { question: "Can a non-resident set up a company in Morocco?", answer: "Yes, it is a common situation. The exact documents and any powers of attorney depend on your case; we list them when scoping the project and have them checked by the relevant professionals." },
      { question: "What are the first decisions when forming a company in Morocco?", answer: "Clarify the activity, shareholders, governance, funding, registered office and timeline first. The legal form (often an SARL, Morocco's limited liability company) should follow from these choices." },
      { question: "Does MEC replace a lawyer or a notary?", answer: "No. MEC handles the financial, accounting and operational side and coordinates with licensed professionals for legal deeds and opinions." },
      { question: "Can you support us after incorporation?", answer: "Yes. Support can continue with bookkeeping, tax filings, cash management, reporting and performance monitoring." }
    ],
    relatedServices: [],
    keywords: ["company formation Morocco", "set up a company in Morocco", "register a business in Morocco", "SARL Morocco", "start a business in Morocco"]
  },
  {
    slug: "set-up-business-morocco",
    group: "implantation",
    locale: "en",
    seoTitle: "Setting Up a Subsidiary or Branch in Morocco | MEC Tangier",
    eyebrow: "Morocco–Europe development",
    title: "Setting up your business in Morocco: subsidiary, branch or partnership",
    description:
      "MEC helps European companies and foreign investors prepare the financial, tax, accounting and operational side of their set-up in Morocco.",
    intro:
      "A successful set-up connects group strategy with Moroccan reality: structure, funding, cash flows, tax, banking, HR and reporting. Morocco Europe Consulting helps European companies frame these topics and coordinate their execution in Morocco, from Tangier.",
    imageSrc: "/images/generated/mec-hero-consulting-meeting.webp",
    imageAlt: "European company setting up in Morocco with MEC support",
    outcomes: ["Set-up scenarios compared", "Morocco–Europe flows mapped", "Risks and obligations identified", "Operational roadmap"],
    sections: [
      {
        title: "Choose the right set-up model",
        text: "A subsidiary, a branch, a liaison office or a partnership do not serve the same goals. The analysis covers control, liability, local activity, invoicing, hiring, funding and growth plans."
      },
      {
        title: "Secure funding and cross-border flows",
        text: "Capital contributions, loans, intra-group services, dividends and other payments must be documented. A map of the flows lets you anticipate their banking, accounting, tax and regulatory treatment.",
        items: ["Capital and shareholder current accounts", "Contracts and intra-group invoicing", "Treasury and banking", "Evidence of foreign-currency funding"]
      },
      {
        title: "Build reporting back to Europe",
        text: "Before launch, define the chart of accounts, closing frequency, KPIs, responsibilities and the reporting format for headquarters. These foundations decide how readable the first months will be."
      }
    ],
    process: [
      { title: "Feasibility", text: "Goals, activities, constraints and scenarios." },
      { title: "Structuring", text: "Finance, tax, banking, governance and reporting." },
      { title: "Set-up", text: "Timeline, providers, documents and controls." },
      { title: "Follow-up", text: "Closing, treasury, compliance and growth decisions." }
    ],
    faq: [
      { question: "How can a European company set up in Morocco?", answer: "Several options exist depending on the activity and goals. A feasibility study compares structure, governance, tax, funding, hiring and regulatory obligations." },
      { question: "Why document flows between the parent company and Morocco?", answer: "Documentation clarifies the nature of each payment, its accounting and tax treatment, the banking evidence and the responsibilities between entities." },
      { question: "Does MEC support reporting to headquarters?", answer: "Yes. MEC can structure closing, dashboards and financial reporting so group requirements connect with the Moroccan entity's figures." }
    ],
    relatedServices: [],
    keywords: ["set up business in Morocco", "subsidiary in Morocco", "branch office Morocco", "invest in Morocco", "doing business in Morocco"]
  },
  {
    slug: "accountant-tangier",
    group: "comptable",
    locale: "en",
    seoTitle: "Accounting Firm in Tangier: Bookkeeping, Tax & Payroll | MEC",
    eyebrow: "Accounting and control in Tangier",
    title: "Accounting firm in Tangier for companies and investors",
    description:
      "MEC supports companies in Tangier with bookkeeping, tax filings, reporting, payroll, dashboards and financial control.",
    intro:
      "Morocco Europe Consulting helps managers, SMEs, subsidiaries and investors make their accounts reliable, meet their deadlines and turn their figures into decisions. Our Tangier-based team handles accounting, tax and financial follow-up with a clear and confidential approach.",
    imageSrc: "/images/sections/finance-table.webp",
    imageAlt: "Accounting firm in Tangier handling company finances",
    outcomes: ["Accounts and deadlines under control", "Readable reporting for management", "Local point of contact in Tangier", "Morocco–Europe coordination"],
    sections: [
      {
        title: "Accounting that management can use",
        text: "Beyond bookkeeping, we organise the information to explain margin, cash, variances and commitments. Reporting is sized to the company and to the manager's decision rhythm.",
        items: ["Bookkeeping and review", "Annual accounts and tax return", "Filings and deadline calendar", "Monthly reporting and dashboards"]
      },
      {
        title: "For SMEs, subsidiaries and international projects",
        text: "We work with Moroccan companies and international structures based in Tangier. Assignments can include flows with Europe, budgeting, cost analysis and coordination with the company's legal advisers.",
        items: ["SMEs and managers", "Subsidiaries of foreign groups", "Importers and exporters", "Companies being formed or restructured"]
      },
      {
        title: "Tangier: local presence, international view",
        text: "Being in Tangier makes it easy to work with companies across the Tanger-Tétouan-Al Hoceïma region, industrial and logistics players, and investors operating between Morocco and Europe."
      }
    ],
    process: [
      { title: "Diagnosis", text: "Your organisation, obligations and priorities." },
      { title: "Takeover plan", text: "Timeline, responsibilities, documents and reporting." },
      { title: "Execution", text: "Entries, controls, filings and management reviews." },
      { title: "Control", text: "Regular review of figures, variances, risks and actions." }
    ],
    faq: [
      { question: "What accounting services does MEC offer in Tangier?", answer: "Bookkeeping and review, annual accounts, tax returns, deadline tracking, financial reporting and management dashboards, among others." },
      { question: "Do you work with foreign subsidiaries?", answer: "Yes. MEC supports Moroccan and international structures, notably on reporting, Morocco–Europe flows and administrative, financial and tax coordination." },
      { question: "Can we start with a diagnosis?", answer: "Yes. A first conversation scopes the assignment: available documents, urgent points and the right follow-up frequency." }
    ],
    relatedServices: [],
    keywords: ["accountant Tangier", "accounting firm Tangier", "bookkeeping Morocco", "tax accountant Morocco", "payroll Morocco"]
  },

  // ───────────────────────── ESPAÑOL ─────────────────────────
  {
    slug: "crear-empresa-marruecos",
    group: "creation",
    locale: "es",
    seoTitle: "Crear una empresa en Marruecos: acompañamiento paso a paso | MEC",
    eyebrow: "Creación y estructuración",
    title: "Crear una empresa en Marruecos con un método claro",
    description:
      "Prepare la creación de su empresa en Marruecos con una hoja de ruta financiera, contable, fiscal y administrativa. MEC, en Tánger, ordena cada etapa y coordina con notarios y abogados.",
    intro:
      "Crear una empresa en Marruecos exige alinear actividad, socios, gobernanza, financiación, banco, fiscalidad y obligaciones sociales. Morocco Europe Consulting estructura estas decisiones, prepara el calendario y trabaja con el notario o el abogado competente cuando el expediente requiere un acto o un dictamen jurídico. Desde Tánger, frente al Estrecho, acompañamos los proyectos que nacen en España.",
    imageSrc: "/images/generated/mec-strategy-meeting.webp",
    imageAlt: "Acompañamiento profesional para crear una empresa en Marruecos",
    outcomes: ["Proyecto definido antes del depósito", "Financiación y flujos documentados", "Calendario administrativo claro", "Contabilidad lista desde el inicio"],
    sections: [
      {
        title: "Convertir la idea en un expediente coherente",
        text: "Aclaramos la actividad, los socios, la gobernanza, el presupuesto y los flujos previstos. Esta base permite a los profesionales jurídicos y administrativos preparar un expediente acorde con el funcionamiento real de la empresa.",
        items: ["Modelo de negocio y presupuesto", "Gobernanza y poderes", "Necesidades de financiación", "Organización contable y fiscal"]
      },
      {
        title: "Preparar las decisiones antes de la primera factura",
        text: "El banco, el IVA, las nóminas, los contratos, los justificantes y el reporting deben anticiparse. MEC organiza una lista de verificación de lanzamiento y acompaña la puesta en marcha de las herramientas de gestión."
      },
      {
        title: "Una coordinación multidisciplinar",
        text: "Cuando el expediente requiere un acto o un dictamen jurídico, trabajamos con el notario o el abogado competente. Cada tema se dirige al profesional adecuado, con un seguimiento global del proyecto."
      }
    ],
    process: [
      { title: "Definición del proyecto", text: "Actividad, socios, mercado, presupuesto y calendario." },
      { title: "Estructuración", text: "Escenarios de gobernanza, financiación y organización." },
      { title: "Coordinación", text: "Documentos, intervinientes, trámites y seguimiento." },
      { title: "Arranque", text: "Contabilidad, fiscalidad, nóminas, tesorería y cuadro de mando." }
    ],
    faq: [
      { question: "¿Puede un no residente crear una empresa en Marruecos?", answer: "Sí, es una situación frecuente. Los documentos exactos y los posibles poderes dependen de cada caso; los enumeramos al definir el proyecto y los validamos con los profesionales competentes." },
      { question: "¿Cuáles son las primeras decisiones para crear una empresa en Marruecos?", answer: "Primero hay que aclarar la actividad, los socios, la gobernanza, la financiación, el domicilio social y el calendario. La forma jurídica (a menudo una SARL, equivalente a la sociedad limitada) se deduce de esas decisiones." },
      { question: "¿MEC sustituye al abogado o al notario?", answer: "No. MEC se ocupa de los aspectos financieros, contables y operativos y coordina con los profesionales habilitados para los actos y dictámenes jurídicos." },
      { question: "¿Nos acompañan después de la creación?", answer: "Sí. El acompañamiento puede continuar con la contabilidad, las declaraciones, la tesorería, el reporting y el seguimiento de la actividad." }
    ],
    relatedServices: [],
    keywords: ["crear empresa en Marruecos", "constituir sociedad en Marruecos", "abrir empresa en Marruecos", "SARL Marruecos", "invertir en Marruecos"]
  },
  {
    slug: "implantacion-empresa-marruecos",
    group: "implantation",
    locale: "es",
    seoTitle: "Implantar su empresa en Marruecos: filial o sucursal | MEC Tánger",
    eyebrow: "Desarrollo Marruecos-Europa",
    title: "Implantar su empresa en Marruecos: filial, sucursal o alianza",
    description:
      "MEC acompaña a empresas europeas e inversores extranjeros en la preparación financiera, fiscal, contable y operativa de su implantación en Marruecos.",
    intro:
      "Una implantación exitosa conecta la estrategia del grupo con la realidad marroquí: estructura, financiación, flujos, fiscalidad, banco, recursos humanos y reporting. Morocco Europe Consulting ayuda a las empresas europeas a definir estos temas y a coordinar su ejecución en Marruecos, desde Tánger.",
    imageSrc: "/images/generated/mec-hero-consulting-meeting.webp",
    imageAlt: "Implantación de una empresa europea en Marruecos con el acompañamiento de MEC",
    outcomes: ["Escenarios de implantación comparados", "Flujos Marruecos-Europa identificados", "Riesgos y obligaciones claros", "Hoja de ruta operativa"],
    sections: [
      {
        title: "Elegir el modelo de implantación adecuado",
        text: "Una filial, una sucursal, una oficina de enlace o una alianza no responden a los mismos objetivos. El análisis integra control, responsabilidad, actividad local, facturación, contratación, financiación y perspectivas de crecimiento."
      },
      {
        title: "Asegurar la financiación y los flujos transfronterizos",
        text: "Aportaciones, préstamos, servicios intragrupo, dividendos y otros pagos deben documentarse. Un mapa de los flujos permite anticipar su tratamiento bancario, contable, fiscal y regulatorio.",
        items: ["Capital y cuentas corrientes de socios", "Contratos y facturación intragrupo", "Tesorería y banco", "Justificantes de financiación en divisas"]
      },
      {
        title: "Construir el reporting hacia Europa",
        text: "Antes del arranque, defina el plan contable, la frecuencia de cierre, los indicadores, las responsabilidades y el formato de reporting hacia la matriz. Estas bases determinan la claridad de los primeros meses."
      }
    ],
    process: [
      { title: "Viabilidad", text: "Objetivos, actividades, restricciones y escenarios." },
      { title: "Estructuración", text: "Finanzas, fiscalidad, banco, gobernanza y reporting." },
      { title: "Instalación", text: "Calendario, proveedores, documentos y controles." },
      { title: "Seguimiento", text: "Cierre, tesorería, cumplimiento y decisiones de crecimiento." }
    ],
    faq: [
      { question: "¿Cómo puede una empresa española implantarse en Marruecos?", answer: "Existen varias opciones según la actividad y los objetivos. Un estudio de viabilidad compara estructura, gobernanza, fiscalidad, financiación, contratación y obligaciones regulatorias." },
      { question: "¿Por qué documentar los flujos entre la matriz y Marruecos?", answer: "La documentación aclara la naturaleza de cada pago, su tratamiento contable y fiscal, los justificantes bancarios y las responsabilidades entre entidades." },
      { question: "¿MEC acompaña el reporting hacia la matriz?", answer: "Sí. MEC puede estructurar el cierre, los cuadros de mando y el reporting financiero para conectar las exigencias del grupo con las cifras de la entidad marroquí." }
    ],
    relatedServices: [],
    keywords: ["implantación empresa Marruecos", "filial en Marruecos", "sucursal en Marruecos", "invertir en Marruecos empresa", "empresa española en Marruecos"]
  },
  {
    slug: "asesoria-contable-tanger",
    group: "comptable",
    locale: "es",
    seoTitle: "Asesoría contable y fiscal en Tánger para empresas | MEC",
    eyebrow: "Contabilidad y control en Tánger",
    title: "Asesoría contable en Tánger para empresas e inversores",
    description:
      "MEC acompaña a las empresas en Tánger en contabilidad, fiscalidad, reporting, nóminas, cuadros de mando y control financiero.",
    intro:
      "Morocco Europe Consulting ayuda a directivos, pymes, filiales e inversores a fiabilizar su contabilidad, cumplir sus plazos y convertir sus cifras en decisiones. Nuestro equipo en Tánger coordina el seguimiento contable, fiscal y financiero con un enfoque claro y confidencial.",
    imageSrc: "/images/sections/finance-table.webp",
    imageAlt: "Asesoría contable en Tánger para la gestión financiera de empresas",
    outcomes: ["Cuentas y plazos bajo control", "Reporting claro para la dirección", "Interlocutor local en Tánger", "Coordinación Marruecos-Europa"],
    sections: [
      {
        title: "Una contabilidad útil para la dirección",
        text: "Más allá de llevar las cuentas, organizamos la información para explicar el margen, la tesorería, las desviaciones y los compromisos. El reporting se adapta al tamaño de la empresa y al ritmo de decisión del directivo.",
        items: ["Contabilidad y revisión", "Cuentas anuales y declaración fiscal", "Declaraciones y calendario de plazos", "Reporting mensual y cuadros de mando"]
      },
      {
        title: "Para pymes, filiales y proyectos internacionales",
        text: "Trabajamos con empresas marroquíes y estructuras internacionales presentes en Tánger. Las misiones pueden incluir los flujos con Europa, el presupuesto, el análisis de costes y la coordinación con los asesores jurídicos de la empresa.",
        items: ["Pymes y directivos", "Filiales de grupos extranjeros", "Importadores y exportadores", "Empresas en creación o reestructuración"]
      },
      {
        title: "Tánger: cercanía local, visión internacional",
        text: "Nuestra ubicación en Tánger facilita el trabajo con empresas de la región Tánger-Tetuán-Alhucemas, con actores industriales y logísticos y con inversores que operan entre Marruecos y Europa."
      }
    ],
    process: [
      { title: "Diagnóstico", text: "Organización, obligaciones y prioridades." },
      { title: "Plan de traspaso", text: "Calendario, responsabilidades, documentos y reporting." },
      { title: "Ejecución", text: "Registros, controles, declaraciones y revisiones con la dirección." },
      { title: "Control", text: "Revisión periódica de cifras, desviaciones, riesgos y acciones." }
    ],
    faq: [
      { question: "¿Qué servicios contables ofrece MEC en Tánger?", answer: "Entre otros, contabilidad y revisión, cuentas anuales, declaraciones fiscales, seguimiento de plazos, reporting financiero y cuadros de mando para la dirección." },
      { question: "¿Trabajan con filiales extranjeras?", answer: "Sí. MEC acompaña estructuras marroquíes e internacionales, en particular en reporting, flujos Marruecos-Europa y coordinación administrativa, financiera y fiscal." },
      { question: "¿Podemos empezar con un diagnóstico?", answer: "Sí. Una primera conversación permite definir el alcance: documentos disponibles, urgencias y la frecuencia de seguimiento adecuada." }
    ],
    relatedServices: [],
    keywords: ["asesoría contable Tánger", "gestoría Tánger", "contable en Tánger", "asesoría fiscal Marruecos", "contabilidad Marruecos"]
  },

  // ───────────────────────── العربية ─────────────────────────
  {
    slug: "تأسيس-شركة-في-المغرب",
    group: "creation",
    locale: "ar",
    seoTitle: "تأسيس شركة في المغرب: مواكبة خطوة بخطوة | MEC طنجة",
    eyebrow: "التأسيس والهيكلة",
    title: "تأسيس شركة في المغرب بمنهجية واضحة",
    description:
      "حضّر لتأسيس شركتك في المغرب بخارطة طريق مالية ومحاسبية وجبائية وإدارية. مكتب MEC بطنجة يرتّب كل مرحلة وينسّق مع الموثق أو المحامي عند الحاجة.",
    intro:
      "يتطلب تأسيس شركة في المغرب الملاءمة بين النشاط والشركاء والحكامة والتمويل والبنك والجبايات والالتزامات الاجتماعية. يتولى مكتب Morocco Europe Consulting هيكلة هذه القرارات وإعداد الجدول الزمني، ويعمل مع الموثق أو المحامي المختص كلما تطلّب الملف عقدًا أو رأيًا قانونيًا. ويحتفظ المغاربة المقيمون بالخارج بمخاطَب واحد مخصّص في طنجة.",
    imageSrc: "/images/generated/mec-strategy-meeting.webp",
    imageAlt: "مواكبة مهنية لتأسيس شركة في المغرب",
    outcomes: ["مشروع مؤطَّر قبل الإيداع", "تمويل وتدفقات موثّقة", "جدول إداري واضح", "محاسبة جاهزة منذ الانطلاق"],
    sections: [
      {
        title: "تحويل الفكرة إلى ملف متماسك",
        text: "نوضّح النشاط والشركاء والحكامة والميزانية والتدفقات المرتقبة. وتُمكّن هذه القاعدة المتدخلين القانونيين والإداريين من إعداد ملف ينسجم مع الطريقة التي ستعمل بها الشركة فعليًا.",
        items: ["النموذج الاقتصادي والميزانية", "الحكامة والصلاحيات", "حاجيات التمويل", "التنظيم المحاسبي والجبائي"]
      },
      {
        title: "تحضير القرارات قبل أول فاتورة",
        text: "ينبغي الاستعداد مسبقًا للبنك والضريبة على القيمة المضافة والأجور والعقود والوثائق المثبتة والتقارير. يُعدّ MEC قائمة مراجعة للانطلاق ويواكب وضع أدوات التسيير."
      },
      {
        title: "تنسيق متعدد التخصصات",
        text: "عندما يتطلب الملف عقدًا أو رأيًا قانونيًا، نعمل مع الموثق أو المحامي المختص. يُوجَّه كل موضوع إلى المهني المناسب، مع تتبّع شامل للمشروع."
      }
    ],
    process: [
      { title: "تأطير المشروع", text: "النشاط والشركاء والسوق والميزانية والجدول الزمني." },
      { title: "الهيكلة", text: "سيناريوهات الحكامة والتمويل والتنظيم." },
      { title: "التنسيق", text: "الوثائق والمتدخلون والإجراءات وتتبّع المراحل." },
      { title: "الانطلاق", text: "المحاسبة والجبايات والأجور والخزينة ولوحة القيادة." }
    ],
    faq: [
      { question: "هل يمكن تأسيس شركة في المغرب دون الإقامة فيه؟", answer: "نعم، وهي حالة شائعة لدى المغاربة المقيمين بالخارج. تتوقف الوثائق المطلوبة والوكالات المحتملة على وضعيتك، ونحدّدها منذ تأطير المشروع ونتحقق منها مع المهنيين المختصين." },
      { question: "ما هي القرارات الأولى لتأسيس شركة في المغرب؟", answer: "يجب أولًا توضيح النشاط والشركاء والحكامة والتمويل والمقر والجدول الزمني، ثم يُختار الشكل القانوني (غالبًا الشركة ذات المسؤولية المحدودة SARL) بناءً على هذه العناصر." },
      { question: "هل يعوّض MEC الموثق أو المحامي؟", answer: "لا. يتولى MEC الجوانب المالية والمحاسبية والتشغيلية، وينسّق مع المهنيين المؤهلين بخصوص العقود والآراء القانونية." },
      { question: "هل تواكبون الشركة بعد التأسيس؟", answer: "نعم، يمكن أن تستمر المواكبة في المحاسبة والتصريحات والخزينة والتقارير وتتبّع النشاط." }
    ],
    relatedServices: [],
    keywords: ["تأسيس شركة في المغرب", "إنشاء شركة بالمغرب", "تأسيس شركة SARL", "الاستثمار في المغرب للمغاربة المقيمين بالخارج", "مواكبة إنشاء المقاولات"]
  },
  {
    slug: "توطين-شركة-أجنبية-في-المغرب",
    group: "implantation",
    locale: "ar",
    seoTitle: "توطين شركة أجنبية في المغرب: شركة تابعة أو فرع | MEC طنجة",
    eyebrow: "التنمية بين المغرب وأوروبا",
    title: "توطين شركة أجنبية في المغرب: شركة تابعة أو فرع أو شراكة",
    description:
      "يواكب MEC الشركات الأوروبية والمستثمرين الأجانب في الإعداد المالي والجبائي والمحاسبي والتشغيلي لاستقرارهم في المغرب.",
    intro:
      "يربط التوطين الناجح استراتيجية المجموعة بالواقع المغربي: الهيكلة والتمويل والتدفقات والجبايات والبنك والموارد البشرية والتقارير. ويساعد مكتب Morocco Europe Consulting الشركات الأوروبية على تأطير هذه المواضيع وتنسيق تنفيذها في المغرب انطلاقًا من طنجة.",
    imageSrc: "/images/generated/mec-hero-consulting-meeting.webp",
    imageAlt: "توطين شركة أوروبية في المغرب بمواكبة MEC",
    outcomes: ["سيناريوهات توطين مقارنة", "تدفقات المغرب-أوروبا مرصودة", "مخاطر والتزامات محدّدة", "خارطة طريق تشغيلية"],
    sections: [
      {
        title: "اختيار نموذج التوطين المناسب",
        text: "الشركة التابعة والفرع ومكتب الاتصال والشراكة لا تخدم الأهداف نفسها. ويأخذ التحليل بعين الاعتبار المراقبة والمسؤولية والنشاط المحلي والفوترة والتوظيف والتمويل وآفاق النمو."
      },
      {
        title: "تأمين التمويل والتدفقات العابرة للحدود",
        text: "يجب توثيق المساهمات والقروض والخدمات داخل المجموعة والأرباح الموزعة وباقي الأداءات. وتتيح خريطة التدفقات استباق معالجتها البنكية والمحاسبية والجبائية والتنظيمية.",
        items: ["الرأسمال والحسابات الجارية للشركاء", "العقود والفوترة داخل المجموعة", "الخزينة والبنك", "مستندات التمويل بالعملة الأجنبية"]
      },
      {
        title: "بناء التقارير الموجّهة إلى أوروبا",
        text: "قبل الانطلاق، حدّد المخطط المحاسبي ووتيرة الإقفال والمؤشرات والمسؤوليات وشكل التقارير الموجّهة إلى الشركة الأم. فهذه الأسس هي التي تحدد وضوح الأشهر الأولى."
      }
    ],
    process: [
      { title: "دراسة الجدوى", text: "الأهداف والأنشطة والقيود والسيناريوهات." },
      { title: "الهيكلة", text: "المالية والجبايات والبنك والحكامة والتقارير." },
      { title: "الاستقرار", text: "الجدول الزمني ومقدّمو الخدمات والوثائق والمراقبة." },
      { title: "التتبّع", text: "الإقفال والخزينة والامتثال وقرارات النمو." }
    ],
    faq: [
      { question: "كيف يمكن لشركة أوروبية أن تستقر في المغرب؟", answer: "توجد عدة خيارات حسب النشاط والأهداف. وتقارن دراسة الجدوى بين الهيكلة والحكامة والجبايات والتمويل والتوظيف والالتزامات التنظيمية." },
      { question: "لماذا يجب توثيق التدفقات بين الشركة الأم والمغرب؟", answer: "يوضّح التوثيق طبيعة كل أداء ومعالجته المحاسبية والجبائية والمستندات البنكية والمسؤوليات بين الكيانات." },
      { question: "هل يواكب MEC إعداد التقارير للشركة الأم؟", answer: "نعم. يمكن لـ MEC هيكلة الإقفال ولوحات القيادة والتقارير المالية لربط متطلبات المجموعة بأرقام الكيان المغربي." }
    ],
    relatedServices: [],
    keywords: ["توطين شركة في المغرب", "إحداث فرع لشركة أجنبية بالمغرب", "الاستثمار الأجنبي في المغرب", "شركة تابعة في المغرب"]
  },
  {
    slug: "مكتب-محاسبة-طنجة",
    group: "comptable",
    locale: "ar",
    seoTitle: "مكتب محاسبة في طنجة: محاسبة وجبايات وأجور | MEC",
    eyebrow: "المحاسبة والتدبير في طنجة",
    title: "مكتب محاسبة في طنجة للشركات والمستثمرين",
    description:
      "يواكب MEC الشركات في طنجة في مسك المحاسبة والجبايات والتقارير والأجور ولوحات القيادة والتدبير المالي.",
    intro:
      "يساعد مكتب Morocco Europe Consulting المسيّرين والمقاولات الصغرى والمتوسطة والشركات التابعة والمستثمرين على ضمان موثوقية محاسبتهم واحترام آجالهم وتحويل أرقامهم إلى قرارات. ويتولى فريقنا في طنجة التتبّع المحاسبي والجبائي والمالي بأسلوب واضح وسرّي.",
    imageSrc: "/images/sections/finance-table.webp",
    imageAlt: "مكتب محاسبة في طنجة لتدبير مالية الشركات",
    outcomes: ["حسابات وآجال تحت السيطرة", "تقارير واضحة للإدارة", "مخاطَب محلي في طنجة", "تنسيق بين المغرب وأوروبا"],
    sections: [
      {
        title: "محاسبة تخدم قرارات الإدارة",
        text: "إلى جانب مسك الحسابات، ننظّم المعلومات لشرح الهامش والخزينة والفوارق والالتزامات. وتُكيَّف التقارير مع حجم المقاولة ووتيرة قرارات المسيّر.",
        items: ["مسك المحاسبة ومراجعتها", "القوائم التركيبية والإقرار الجبائي", "التصريحات وجدول الآجال", "تقارير شهرية ولوحات قيادة"]
      },
      {
        title: "للمقاولات والشركات التابعة والمشاريع الدولية",
        text: "نعمل مع مقاولات مغربية وهياكل دولية حاضرة في طنجة. وقد تشمل المهام تتبّع التدفقات مع أوروبا وإعداد الميزانيات وتحليل التكاليف والتنسيق مع المستشارين القانونيين للمقاولة.",
        items: ["المقاولات الصغرى والمتوسطة والمسيّرون", "الشركات التابعة لمجموعات أجنبية", "المستوردون والمصدّرون", "المقاولات قيد التأسيس أو إعادة الهيكلة"]
      },
      {
        title: "طنجة: قرب محلي ورؤية دولية",
        text: "يسهّل موقعنا في طنجة العمل مع مقاولات جهة طنجة-تطوان-الحسيمة والفاعلين الصناعيين واللوجستيين والمستثمرين الذين ينشطون بين المغرب وأوروبا."
      }
    ],
    process: [
      { title: "التشخيص", text: "التنظيم والالتزامات والأولويات." },
      { title: "خطة الاستلام", text: "الجدول الزمني والمسؤوليات والوثائق وطريقة التقارير." },
      { title: "التنفيذ", text: "التسجيلات والمراقبة والتصريحات والتواصل مع الإدارة." },
      { title: "القيادة", text: "مراجعة دورية للأرقام والفوارق والمخاطر والإجراءات." }
    ],
    faq: [
      { question: "ما هي الخدمات المحاسبية التي يقدمها MEC في طنجة؟", answer: "من بينها مسك المحاسبة ومراجعتها، والقوائم التركيبية، والإقرارات الجبائية، وتتبّع الآجال، والتقارير المالية، ولوحات القيادة للإدارة." },
      { question: "هل تعملون مع الشركات التابعة الأجنبية؟", answer: "نعم. يواكب MEC هياكل مغربية ودولية، خاصة في التقارير والتدفقات بين المغرب وأوروبا والتنسيق الإداري والمالي والجبائي." },
      { question: "هل يمكن البدء بتشخيص؟", answer: "نعم. يتيح لقاء أول تحديد نطاق المهمة والوثائق المتوفرة والنقاط المستعجلة ووتيرة التتبّع المناسبة." }
    ],
    relatedServices: [],
    keywords: ["مكتب محاسبة طنجة", "محاسب في طنجة", "مسك المحاسبة بالمغرب", "التصريحات الضريبية للشركات", "مكتب استشارة مالية طنجة"]
  }
];
