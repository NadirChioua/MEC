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
    seoTitle: "Company Formation & Corporate Services in Morocco | MEC Tangier",
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
    keywords: ["company formation Morocco", "corporate services Morocco", "company incorporation Morocco", "set up a company in Morocco", "SARL Morocco"]
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
    seoTitle: "Accounting & Bookkeeping Services in Morocco | MEC Tangier",
    eyebrow: "Accounting and control in Tangier",
    title: "Accounting and bookkeeping services in Morocco, from Tangier",
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
    keywords: ["accounting services Morocco", "bookkeeping Morocco", "accounting company Morocco", "accountant Tangier", "accounting firm Tangier", "payroll Morocco"]
  },

  // ───────────────────────── ESPAÑOL ─────────────────────────
  {
    slug: "crear-empresa-marruecos",
    group: "creation",
    locale: "es",
    seoTitle: "Abrir una empresa en Marruecos: constitución paso a paso | MEC",
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
    keywords: ["abrir empresa en Marruecos", "constitución de empresas en Marruecos", "crear empresa en Marruecos", "SARL Marruecos", "consultoría negocios Marruecos"]
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
  },
  // ───────────────────────── Tax advisory (group "fiscal") ─────────────────────────
  {
    slug: "tax-advisory-morocco",
    group: "fiscal",
    locale: "en",
    seoTitle: "Tax Advisory in Morocco: VAT, Corporate Tax & Compliance | MEC",
    eyebrow: "Corporate tax in Morocco",
    title: "Tax advisory and tax compliance for companies in Morocco",
    description:
      "VAT, corporate income tax, withholding taxes, payroll and Morocco–Europe flows: MEC organises your company's tax calendar in Morocco, prepares your filings and secures cross-border invoicing.",
    intro:
      "Corporate tax in Morocco is not only about filing on time. The business model and the tax treatment must stay consistent, especially when a company invoices European clients, receives services from abroad or pays a non-resident. Morocco Europe Consulting, based in Tangier, organises your deadlines, prepares your returns and alerts you before key dates.",
    imageSrc: "/images/sections/finance-table.webp",
    imageAlt: "Tax compliance and filings for a company in Morocco",
    outcomes: ["Tax calendar under control", "Returns prepared and tracked", "Morocco–Europe flows analysed", "Alerts before deadlines"],
    sections: [
      {
        title: "A filing calendar kept all year round",
        text: "VAT, corporate income tax, salary income tax, withholding taxes and the annual tax return each have their own frequency. We build your company's calendar, prepare the returns and follow the e-filings on the tax administration's (DGI) online services.",
        items: ["VAT", "Corporate income tax", "Salary tax and withholding taxes", "Annual accounts and tax return"]
      },
      {
        title: "Flows with Europe, analysed before you invoice",
        text: "A company that invoices European clients, receives intra-group services or pays a non-resident provider does not face the same issues as a purely local business. The tax treaties Morocco has signed with France, Belgium, Spain or the Netherlands must be read against the real flows. We map contracts and payments, then have the applicable treatment validated.",
        items: ["Invoicing European clients", "Intra-group services", "Payments to non-residents", "Tax treaties"]
      },
      {
        title: "Each Finance Act, translated for your business",
        text: "Morocco's annual Finance Act changes part of the rules every year. We identify the measures that actually affect your business and adapt your forecasts and organisation. Complex tax choices are validated for your situation, with licensed professionals when needed."
      }
    ],
    process: [
      { title: "Diagnosis", text: "Obligations, possible delays and risks." },
      { title: "Calendar", text: "Deadlines, owners and documents to provide." },
      { title: "Filings", text: "Preparation, review and e-filing." },
      { title: "Monitoring", text: "Finance Act updates and deadline alerts." }
    ],
    faq: [
      { question: "Which tax returns must a company file in Morocco?", answer: "Generally VAT, corporate income tax and its instalments, salary income tax, some withholding taxes and the annual tax return. The exact list and frequency depend on the company's activity and tax regime." },
      { question: "Can you take over a file with late filings?", answer: "Yes. The diagnosis starts with an inventory of filed and missing returns, then we set up a catch-up plan with priorities and the documents needed." },
      { question: "Do you support companies invoicing in Europe?", answer: "Yes. We analyse contracts and flows with Europe, including VAT, withholding taxes and the application of tax treaties, then have the sensitive points validated." }
    ],
    relatedServices: [],
    keywords: ["tax advisory Morocco", "tax compliance Morocco", "corporate tax Morocco", "VAT Morocco", "tax services Morocco"]
  },
  {
    slug: "fiscaal-advies-marokko",
    group: "fiscal",
    locale: "nl",
    seoTitle: "Fiscaal advies in Marokko: btw, vennootschapsbelasting | MEC",
    eyebrow: "Bedrijfsfiscaliteit in Marokko",
    title: "Fiscaal advies en aangiftes voor bedrijven in Marokko",
    description:
      "Btw, vennootschapsbelasting, bronheffingen, lonen en stromen met Europa: MEC organiseert de fiscale kalender van je bedrijf in Marokko en zorgt voor correcte aangiftes.",
    intro:
      "Fiscaliteit in Marokko is meer dan op tijd aangifte doen. Het commerciële model en de fiscale behandeling moeten kloppen, zeker wanneer je bedrijf Europese klanten factureert, diensten uit het buitenland ontvangt of een niet-inwoner betaalt. Morocco Europe Consulting in Tanger plant je deadlines, bereidt je aangiftes voor en waarschuwt je vóór de belangrijke data.",
    imageSrc: "/images/sections/finance-table.webp",
    imageAlt: "Fiscale aangiftes van een bedrijf in Marokko",
    outcomes: ["Fiscale kalender onder controle", "Aangiftes voorbereid en opgevolgd", "Stromen Marokko-Europa geanalyseerd", "Alerts vóór de deadlines"],
    sections: [
      {
        title: "Een aangiftekalender die het hele jaar klopt",
        text: "Btw, vennootschapsbelasting, belasting op lonen, bronheffingen en de jaarlijkse fiscale aangifte hebben elk hun eigen ritme. We stellen de kalender van je bedrijf op, bereiden de aangiftes voor en volgen de elektronische aangiftes bij de Marokkaanse belastingadministratie (DGI) op.",
        items: ["Btw", "Vennootschapsbelasting", "Belasting op lonen en bronheffingen", "Jaarrekening en fiscale aangifte"]
      },
      {
        title: "Stromen met Europa, bekeken vóór je factureert",
        text: "Een bedrijf dat Europese klanten factureert, intragroepsdiensten ontvangt of een niet-inwoner betaalt, heeft andere aandachtspunten dan een louter lokale activiteit. De belastingverdragen van Marokko met België, Nederland, Frankrijk of Spanje moeten gelezen worden in het licht van de echte stromen. We brengen contracten en betalingen in kaart en laten de toepasselijke behandeling bevestigen.",
        items: ["Facturatie aan Europese klanten", "Intragroepsdiensten", "Betalingen aan niet-inwoners", "Belastingverdragen"]
      },
      {
        title: "Elke Marokkaanse financiewet, vertaald naar je bedrijf",
        text: "De jaarlijkse financiewet wijzigt telkens een deel van de regels. We bekijken welke maatregelen je activiteit echt raken en passen je prognoses en organisatie aan. Complexe fiscale keuzes worden afgetoetst aan je situatie, waar nodig met de bevoegde professionals."
      }
    ],
    process: [
      { title: "Diagnose", text: "Verplichtingen, eventuele achterstand en risico's." },
      { title: "Kalender", text: "Deadlines, verantwoordelijken en documenten." },
      { title: "Aangiftes", text: "Voorbereiding, controle en elektronische aangifte." },
      { title: "Opvolging", text: "Financiewet en alerts vóór de deadlines." }
    ],
    faq: [
      { question: "Welke fiscale aangiftes moet een vennootschap in Marokko indienen?", answer: "Meestal de btw, de vennootschapsbelasting en de voorschotten, de belasting op lonen, bepaalde bronheffingen en de jaarlijkse fiscale aangifte. De precieze lijst en frequentie hangen af van de activiteit en het belastingstelsel van het bedrijf." },
      { question: "Kunnen jullie een dossier met achterstand overnemen?", answer: "Ja. De diagnose begint met een overzicht van de ingediende en ontbrekende aangiftes, daarna volgt een inhaalplan met prioriteiten en de nodige documenten." },
      { question: "Begeleiden jullie bedrijven die in Europa factureren?", answer: "Ja. We analyseren contracten en stromen met Europa, onder meer btw, bronheffingen en de toepassing van belastingverdragen, en laten de gevoelige punten bevestigen." }
    ],
    relatedServices: [],
    keywords: ["fiscaal advies Marokko", "btw Marokko", "vennootschapsbelasting Marokko", "boekhouder Marokko belasting", "fiscaliteit Marokko bedrijf"]
  },
  {
    slug: "asesoria-fiscal-marruecos",
    group: "fiscal",
    locale: "es",
    seoTitle: "Asesoría fiscal en Marruecos: IVA, impuesto de sociedades | MEC",
    eyebrow: "Fiscalidad de empresas en Marruecos",
    title: "Asesoría fiscal y declaraciones para empresas en Marruecos",
    description:
      "IVA, impuesto sobre sociedades, retenciones, nóminas y flujos con Europa: MEC organiza el calendario fiscal de su empresa en Marruecos y asegura sus declaraciones.",
    intro:
      "La fiscalidad de una empresa en Marruecos no se limita a declarar a tiempo. El modelo comercial y el tratamiento fiscal deben ser coherentes, sobre todo cuando la empresa factura a clientes europeos, recibe servicios del extranjero o paga a un no residente. Morocco Europe Consulting, con sede en Tánger, organiza sus plazos, prepara sus declaraciones y le avisa antes de las fechas clave.",
    imageSrc: "/images/sections/finance-table.webp",
    imageAlt: "Declaraciones fiscales de una empresa en Marruecos",
    outcomes: ["Calendario fiscal bajo control", "Declaraciones preparadas y seguidas", "Flujos Marruecos-Europa analizados", "Alertas antes de los plazos"],
    sections: [
      {
        title: "Un calendario de declaraciones al día todo el año",
        text: "IVA, impuesto sobre sociedades, impuesto sobre la renta de los asalariados, retenciones y declaración fiscal anual: cada obligación tiene su periodicidad. Elaboramos el calendario de su empresa, preparamos las declaraciones y seguimos las presentaciones telemáticas ante la administración tributaria marroquí (DGI).",
        items: ["IVA", "Impuesto sobre sociedades", "IR sobre salarios y retenciones", "Cuentas anuales y declaración fiscal"]
      },
      {
        title: "Los flujos con Europa, analizados antes de facturar",
        text: "Una sociedad que factura a clientes europeos, recibe servicios intragrupo o paga a un proveedor no residente no tiene los mismos retos que una actividad puramente local. Los convenios fiscales firmados por Marruecos con España, Francia, Bélgica o los Países Bajos deben leerse a la luz de los flujos reales. Mapeamos contratos y pagos y hacemos validar el tratamiento aplicable.",
        items: ["Facturación a clientes europeos", "Servicios intragrupo", "Pagos a no residentes", "Convenios fiscales"]
      },
      {
        title: "Cada Ley de Finanzas, traducida para su empresa",
        text: "La Ley de Finanzas anual modifica cada año parte de las reglas. Identificamos las medidas que afectan realmente a su actividad y adaptamos sus previsiones y su organización. Las decisiones fiscales complejas se validan según su situación, con los profesionales habilitados cuando es necesario."
      }
    ],
    process: [
      { title: "Diagnóstico", text: "Obligaciones, posibles retrasos y riesgos." },
      { title: "Calendario", text: "Plazos, responsables y documentos." },
      { title: "Declaraciones", text: "Preparación, control y presentación telemática." },
      { title: "Seguimiento", text: "Ley de Finanzas y alertas antes de los plazos." }
    ],
    faq: [
      { question: "¿Qué declaraciones fiscales debe presentar una sociedad en Marruecos?", answer: "Por lo general, el IVA, el impuesto sobre sociedades y sus pagos a cuenta, el impuesto sobre la renta de los asalariados, algunas retenciones y la declaración fiscal anual. La lista exacta y la periodicidad dependen de la actividad y del régimen de la empresa." },
      { question: "¿Pueden retomar un expediente con retrasos?", answer: "Sí. El diagnóstico empieza por el inventario de las declaraciones presentadas y pendientes; después establecemos un plan de regularización con prioridades y documentos." },
      { question: "¿Acompañan a empresas que facturan en Europa?", answer: "Sí. Analizamos los contratos y flujos con Europa, en particular el IVA, las retenciones y la aplicación de los convenios fiscales, y hacemos validar los puntos sensibles." }
    ],
    relatedServices: [],
    keywords: ["asesoría fiscal Marruecos", "IVA Marruecos", "impuesto de sociedades Marruecos", "asesoría internacional Marruecos", "fiscalidad empresa Marruecos"]
  },
  {
    slug: "استشارة-جبائية-في-المغرب",
    group: "fiscal",
    locale: "ar",
    seoTitle: "الاستشارة الجبائية في المغرب: الضريبة على القيمة المضافة والشركات | MEC",
    eyebrow: "جبايات المقاولات في المغرب",
    title: "الاستشارة الجبائية والتصريحات الضريبية للمقاولات في المغرب",
    description:
      "الضريبة على القيمة المضافة، الضريبة على الشركات، الاقتطاعات من المنبع، الأجور والتدفقات مع أوروبا: ينظّم MEC الجدول الجبائي لمقاولتكم في المغرب ويؤمّن تصريحاتكم.",
    intro:
      "لا تقتصر جبايات المقاولة في المغرب على التصريح في الآجال. فيجب أن يظل النموذج التجاري منسجمًا مع المعالجة الجبائية، خاصة عندما تفوتر المقاولة لزبناء أوروبيين أو تتلقى خدمات من الخارج أو تؤدي لغير مقيم. ينظّم مكتب Morocco Europe Consulting بطنجة آجالكم ويُعدّ تصريحاتكم وينبّهكم قبل التواريخ المهمة.",
    imageSrc: "/images/sections/finance-table.webp",
    imageAlt: "التصريحات الجبائية لمقاولة في المغرب",
    outcomes: ["جدول جبائي تحت السيطرة", "تصريحات محضّرة ومتابَعة", "تدفقات المغرب-أوروبا محلَّلة", "تنبيهات قبل الآجال"],
    sections: [
      {
        title: "جدول تصريحات مضبوط طوال السنة",
        text: "لكل التزام وتيرته: الضريبة على القيمة المضافة، والضريبة على الشركات، والضريبة على دخل الأجراء، والاقتطاعات من المنبع، والإقرار الجبائي السنوي. نُعدّ جدول مقاولتكم ونحضّر التصريحات ونتابع الإيداع الإلكتروني لدى المديرية العامة للضرائب.",
        items: ["الضريبة على القيمة المضافة", "الضريبة على الشركات", "الضريبة على الأجور والاقتطاعات من المنبع", "القوائم التركيبية والإقرار الجبائي"]
      },
      {
        title: "التدفقات مع أوروبا تُحلَّل قبل الفوترة",
        text: "المقاولة التي تفوتر لزبناء أوروبيين أو تتلقى خدمات داخل المجموعة أو تؤدي لمورّد غير مقيم لا تواجه نفس الرهانات التي يواجهها نشاط محلي صرف. ويجب قراءة الاتفاقيات الجبائية التي وقّعها المغرب مع فرنسا وبلجيكا وإسبانيا وهولندا في ضوء التدفقات الفعلية. نرسم خريطة العقود والأداءات ثم نتحقق من المعالجة المطبقة.",
        items: ["الفوترة لزبناء أوروبيين", "الخدمات داخل المجموعة", "الأداءات لغير المقيمين", "الاتفاقيات الجبائية"]
      },
      {
        title: "كل قانون مالية مترجَم لمقاولتكم",
        text: "يغيّر قانون المالية كل سنة جزءًا من القواعد. نحدد التدابير التي تهم نشاطكم فعلًا ونكيّف توقعاتكم وتنظيمكم. ويُتحقق من الاختيارات الجبائية المعقدة حسب وضعيتكم، مع المهنيين المؤهلين عند الحاجة."
      }
    ],
    process: [
      { title: "التشخيص", text: "الالتزامات والتأخرات المحتملة والمخاطر." },
      { title: "الجدول الزمني", text: "الآجال والمسؤولون والوثائق المطلوبة." },
      { title: "التصريحات", text: "الإعداد والمراقبة والإيداع الإلكتروني." },
      { title: "اليقظة", text: "قانون المالية والتنبيهات قبل الآجال." }
    ],
    faq: [
      { question: "ما هي التصريحات الجبائية التي يجب على الشركة إيداعها في المغرب؟", answer: "عمومًا: الضريبة على القيمة المضافة، والضريبة على الشركات وتسبيقاتها، والضريبة على دخل الأجراء، وبعض الاقتطاعات من المنبع، والإقرار الجبائي السنوي. وتتوقف اللائحة الدقيقة والوتيرة على النشاط والنظام الجبائي للمقاولة." },
      { question: "هل يمكنكم استلام ملف متأخر؟", answer: "نعم. يبدأ التشخيص بجرد التصريحات المودعة والناقصة، ثم نضع خطة تسوية بالأولويات والوثائق اللازمة." },
      { question: "هل تواكبون المقاولات التي تفوتر في أوروبا؟", answer: "نعم. نحلل العقود والتدفقات مع أوروبا، خاصة الضريبة على القيمة المضافة والاقتطاعات من المنبع وتطبيق الاتفاقيات الجبائية، ثم نتحقق من النقاط الحساسة." }
    ],
    relatedServices: [],
    keywords: ["استشارة جبائية المغرب", "الضريبة على القيمة المضافة المغرب", "الضريبة على الشركات المغرب", "التصريحات الضريبية للشركات"]
  },
  // ───────────────────────── Fiscal representation (group "representation") ─────────────────────────
  {
    slug: "fiscal-representation-morocco",
    group: "representation",
    locale: "en",
    seoTitle: "Fiscal Representation in Morocco for Non-Resident Companies | MEC",
    eyebrow: "Non-resident companies",
    title: "Fiscal representation in Morocco for foreign companies",
    description:
      "Does your foreign company carry out taxable operations in Morocco without being established there? MEC, based in Tangier, reviews your obligations and acts as your fiscal representative: VAT, returns, payments and contact with the tax administration.",
    intro:
      "A foreign company can invoice Moroccan clients, deliver a service in Morocco or perform a contract there without setting up a local company. Moroccan tax rules may then require it to appoint a fiscal representative domiciled in Morocco, in particular for VAT. Morocco Europe Consulting first checks whether your situation requires it, then handles the formalities, filings and follow-up, with one dedicated contact in Tangier.",
    imageSrc: "/images/sections/finance-table.webp",
    imageAlt: "Fiscal representation of a foreign company in Morocco",
    outcomes: ["Obligations reviewed before acting", "A representative domiciled in Morocco", "Returns and payments tracked", "One point of contact in Tangier"],
    sections: [
      {
        title: "Find out whether you need a fiscal representative",
        text: "It depends on the nature of your operations in Morocco, your clients, the length of the assignment and whether you have a permanent establishment. We review your contracts and flows and tell you clearly which obligations apply, including what happens without a representative (for example VAT or withholding borne by your Moroccan client).",
        items: ["Type of operations carried out in Morocco", "Clients and place of performance", "Permanent establishment risk", "Applicable tax treaties"]
      },
      {
        title: "Fiscal representation handled end to end",
        text: "When representation is required, MEC prepares the file with the tax administration, keeps the calendar, prepares the VAT returns, organises payments and keeps the supporting documents. You get regular updates and alerts before each deadline.",
        items: ["Accreditation file with the tax administration", "VAT returns and payments", "Withholding tax follow-up", "Document retention"]
      },
      {
        title: "Plan what comes next: one-off contract or local entity",
        text: "If your business in Morocco grows, the question of a subsidiary, a branch or a local partner arises. We compare the scenarios with you and coordinate, when needed, with the relevant notary or lawyer."
      }
    ],
    process: [
      { title: "Review", text: "Contracts, flows, clients and obligations in Morocco." },
      { title: "Appointment", text: "Representation file and formalities." },
      { title: "Filings", text: "VAT, payments and tax calendar." },
      { title: "Follow-up", text: "Reporting, alerts and business changes." }
    ],
    faq: [
      { question: "What is a fiscal representative in Morocco?", answer: "A person domiciled in Morocco appointed by a non-resident company to meet certain tax obligations on its behalf, in particular for VAT: returns, payments and contact with the tax administration." },
      { question: "Does my foreign company need a fiscal representative?", answer: "It depends on your operations, your clients and your presence in Morocco. MEC reviews your situation case by case before any step; the applicable rules are confirmed for your file." },
      { question: "Do I need to set up a company in Morocco?", answer: "Not necessarily. A one-off assignment can be performed without a local company. If the activity becomes long-term, we compare the options with you: subsidiary, branch or partnership." },
      { question: "Can everything be handled remotely?", answer: "Yes, most of the follow-up is done remotely. Our team can also meet you by appointment in central Tangier." }
    ],
    relatedServices: [],
    keywords: ["fiscal representation Morocco", "fiscal representative Morocco", "tax representative Morocco", "non-resident company VAT Morocco", "VAT representative Morocco"]
  },
  {
    slug: "fiscale-vertegenwoordiging-marokko",
    group: "representation",
    locale: "nl",
    seoTitle: "Fiscale vertegenwoordiging in Marokko voor buitenlandse bedrijven | MEC",
    eyebrow: "Niet-ingezeten bedrijven",
    title: "Fiscale vertegenwoordiging in Marokko voor buitenlandse bedrijven",
    description:
      "Voert je buitenlands bedrijf belastbare verrichtingen uit in Marokko zonder er gevestigd te zijn? MEC in Tanger bekijkt je verplichtingen en treedt op als fiscaal vertegenwoordiger: btw, aangiftes, betalingen en contact met de belastingadministratie.",
    intro:
      "Een buitenlands bedrijf kan Marokkaanse klanten factureren, er een dienst leveren of er een contract uitvoeren zonder een lokale vennootschap op te richten. De Marokkaanse fiscale regels kunnen dan een fiscaal vertegenwoordiger met woonplaats in Marokko vereisen, vooral voor de btw. Morocco Europe Consulting kijkt eerst na of jouw situatie dat vraagt en neemt daarna de formaliteiten, aangiftes en opvolging op zich, met één vaste contactpersoon in Tanger.",
    imageSrc: "/images/sections/finance-table.webp",
    imageAlt: "Fiscale vertegenwoordiging van een buitenlands bedrijf in Marokko",
    outcomes: ["Verplichtingen eerst geanalyseerd", "Een vertegenwoordiger in Marokko", "Aangiftes en betalingen opgevolgd", "Eén contactpersoon in Tanger"],
    sections: [
      {
        title: "Weten of je een fiscaal vertegenwoordiger nodig hebt",
        text: "Dat hangt af van je verrichtingen in Marokko, je klanten, de duur van de opdracht en het al dan niet bestaan van een vaste inrichting. We analyseren je contracten en stromen en zeggen je duidelijk welke verplichtingen gelden, ook wat er gebeurt zonder vertegenwoordiger (bijvoorbeeld btw of een inhouding ten laste van je Marokkaanse klant).",
        items: ["Soort verrichtingen in Marokko", "Klanten en plaats van uitvoering", "Risico op vaste inrichting", "Toepasselijke belastingverdragen"]
      },
      {
        title: "Fiscale vertegenwoordiging van begin tot eind",
        text: "Is vertegenwoordiging nodig, dan bereidt MEC het dossier voor bij de belastingadministratie, bewaakt de kalender, stelt de btw-aangiftes op, organiseert de betalingen en bewaart de bewijsstukken. Je krijgt een regelmatige opvolging en alerts vóór elke deadline.",
        items: ["Erkenningsdossier bij de administratie", "Btw-aangiftes en betalingen", "Opvolging van bronheffingen", "Bewaring van bewijsstukken"]
      },
      {
        title: "Vooruitkijken: eenmalige opdracht of vestiging",
        text: "Groeit je activiteit in Marokko, dan komt de vraag naar een filiaal, een bijkantoor of een lokale partner. We vergelijken de scenario's met jou en stemmen waar nodig af met de bevoegde notaris of advocaat."
      }
    ],
    process: [
      { title: "Analyse", text: "Contracten, stromen, klanten en verplichtingen." },
      { title: "Aanstelling", text: "Vertegenwoordigingsdossier en formaliteiten." },
      { title: "Aangiftes", text: "Btw, betalingen en fiscale kalender." },
      { title: "Opvolging", text: "Rapportering, alerts en evolutie van de activiteit." }
    ],
    faq: [
      { question: "Wat is een fiscaal vertegenwoordiger in Marokko?", answer: "Een persoon met woonplaats in Marokko die een niet-ingezeten bedrijf aanstelt om bepaalde fiscale verplichtingen in zijn naam te vervullen, vooral voor de btw: aangiftes, betalingen en contact met de administratie." },
      { question: "Moet mijn buitenlands bedrijf een fiscaal vertegenwoordiger aanstellen?", answer: "Dat hangt af van je verrichtingen, je klanten en je aanwezigheid in Marokko. MEC bekijkt je situatie geval per geval vóór elke stap; de toepasselijke regels worden voor je dossier bevestigd." },
      { question: "Moet ik een vennootschap oprichten in Marokko?", answer: "Niet noodzakelijk. Een eenmalige opdracht kan zonder lokale vennootschap. Wordt de activiteit blijvend, dan vergelijken we de opties: filiaal, bijkantoor of partnership." },
      { question: "Kan alles op afstand?", answer: "Ja, het grootste deel van de opvolging gebeurt op afstand. Op afspraak ontvangen we je ook in het centrum van Tanger." }
    ],
    relatedServices: [],
    keywords: ["fiscale vertegenwoordiging Marokko", "fiscaal vertegenwoordiger Marokko", "btw Marokko buitenlands bedrijf", "niet-ingezeten bedrijf Marokko"]
  },
  {
    slug: "representante-fiscal-marruecos",
    group: "representation",
    locale: "es",
    seoTitle: "Representante fiscal en Marruecos para empresas no residentes | MEC",
    eyebrow: "Empresas no residentes",
    title: "Representación fiscal en Marruecos para empresas extranjeras",
    description:
      "¿Su empresa extranjera realiza operaciones sujetas a impuestos en Marruecos sin estar establecida allí? MEC, en Tánger, analiza sus obligaciones y actúa como su representante fiscal: IVA, declaraciones, pagos y relación con la administración tributaria.",
    intro:
      "Una empresa extranjera puede facturar a clientes marroquíes, prestar un servicio en Marruecos o ejecutar allí un contrato sin crear una sociedad local. La normativa fiscal marroquí puede exigir entonces la designación de un representante fiscal domiciliado en Marruecos, en particular para el IVA. Morocco Europe Consulting comprueba primero si su situación lo requiere y después se ocupa de los trámites, las declaraciones y el seguimiento, con un interlocutor dedicado en Tánger.",
    imageSrc: "/images/sections/finance-table.webp",
    imageAlt: "Representación fiscal de una empresa extranjera en Marruecos",
    outcomes: ["Obligaciones analizadas antes de actuar", "Un representante domiciliado en Marruecos", "Declaraciones y pagos al día", "Un único interlocutor en Tánger"],
    sections: [
      {
        title: "Saber si debe designar un representante fiscal",
        text: "Depende de la naturaleza de sus operaciones en Marruecos, de sus clientes, de la duración de la misión y de la existencia o no de un establecimiento permanente. Analizamos sus contratos y flujos y le indicamos con claridad las obligaciones aplicables, incluidas las consecuencias de no tener representante (por ejemplo, un IVA o una retención a cargo de su cliente marroquí).",
        items: ["Naturaleza de las operaciones en Marruecos", "Clientes y lugar de ejecución", "Riesgo de establecimiento permanente", "Convenios fiscales aplicables"]
      },
      {
        title: "Una representación fiscal gestionada de principio a fin",
        text: "Cuando la representación es necesaria, MEC prepara el expediente ante la administración tributaria, controla el calendario, elabora las declaraciones de IVA, organiza los pagos y conserva los justificantes. Recibe un seguimiento regular y alertas antes de cada plazo.",
        items: ["Expediente de acreditación ante la administración", "Declaraciones y pagos de IVA", "Seguimiento de las retenciones", "Archivo de justificantes"]
      },
      {
        title: "Preparar el futuro: misión puntual o implantación",
        text: "Si su actividad en Marruecos crece, se plantea la opción de una filial, una sucursal o un socio local. Comparamos los escenarios con usted y coordinamos, cuando es necesario, con el notario o el abogado competente."
      }
    ],
    process: [
      { title: "Análisis", text: "Contratos, flujos, clientes y obligaciones." },
      { title: "Designación", text: "Expediente de representación y trámites." },
      { title: "Declaraciones", text: "IVA, pagos y calendario fiscal." },
      { title: "Seguimiento", text: "Reporting, alertas y evolución de la actividad." }
    ],
    faq: [
      { question: "¿Qué es un representante fiscal en Marruecos?", answer: "Una persona domiciliada en Marruecos designada por una empresa no residente para cumplir en su nombre determinadas obligaciones fiscales, en particular en materia de IVA: declaraciones, pagos y relación con la administración." },
      { question: "¿Mi empresa extranjera debe designar un representante fiscal?", answer: "Depende de sus operaciones, sus clientes y su presencia en Marruecos. MEC analiza su situación caso por caso antes de cualquier trámite; las normas aplicables se confirman según su expediente." },
      { question: "¿Es necesario crear una sociedad en Marruecos?", answer: "No necesariamente. Una misión puntual puede realizarse sin sociedad local. Si la actividad se vuelve duradera, comparamos las opciones: filial, sucursal o alianza." },
      { question: "¿Se puede gestionar todo a distancia?", answer: "Sí, la mayor parte del seguimiento se hace a distancia. Nuestro equipo también le recibe con cita previa en el centro de Tánger." }
    ],
    relatedServices: [],
    keywords: ["representante fiscal Marruecos", "representación fiscal Marruecos", "IVA no residente Marruecos", "empresa española Marruecos impuestos"]
  },
  {
    slug: "التمثيل-الجبائي-في-المغرب",
    group: "representation",
    locale: "ar",
    seoTitle: "التمثيل الجبائي في المغرب للشركات غير المقيمة | MEC طنجة",
    eyebrow: "الشركات غير المقيمة",
    title: "التمثيل الجبائي في المغرب للشركات الأجنبية",
    description:
      "هل تقوم شركتكم الأجنبية بعمليات خاضعة للضريبة في المغرب دون أن تكون مستقرة فيه؟ يحلّل مكتب MEC بطنجة التزاماتكم ويتولى تمثيلكم الجبائي: الضريبة على القيمة المضافة، والتصريحات، والأداءات، والتواصل مع الإدارة الجبائية.",
    intro:
      "يمكن لشركة أجنبية أن تفوتر لزبناء مغاربة أو تقدّم خدمة في المغرب أو تنفّذ فيه عقدًا دون تأسيس شركة محلية. وقد تفرض القواعد الجبائية المغربية حينها تعيين ممثل جبائي مقيم في المغرب، خاصة بالنسبة للضريبة على القيمة المضافة. يتحقق مكتب Morocco Europe Consulting أولًا مما إذا كانت وضعيتكم تستلزم ذلك، ثم يتولى الإجراءات والتصريحات والتتبّع، مع مخاطَب مخصّص في طنجة.",
    imageSrc: "/images/sections/finance-table.webp",
    imageAlt: "التمثيل الجبائي لشركة أجنبية في المغرب",
    outcomes: ["تحليل الالتزامات قبل أي إجراء", "ممثل مقيم في المغرب", "تتبّع التصريحات والأداءات", "مخاطَب واحد في طنجة"],
    sections: [
      {
        title: "معرفة ما إذا كان عليكم تعيين ممثل جبائي",
        text: "يتوقف ذلك على طبيعة عملياتكم في المغرب وزبنائكم ومدة المهمة ووجود منشأة دائمة من عدمه. نحلل عقودكم وتدفقاتكم ونوضّح لكم الالتزامات المطبقة، بما في ذلك عواقب غياب الممثل (مثل ضريبة على القيمة المضافة أو اقتطاع على عاتق زبونكم المغربي).",
        items: ["طبيعة العمليات المنجزة في المغرب", "الزبناء ومكان التنفيذ", "خطر المنشأة الدائمة", "الاتفاقيات الجبائية المطبقة"]
      },
      {
        title: "تمثيل جبائي متكامل من البداية إلى النهاية",
        text: "عندما يكون التمثيل ضروريًا، يُعدّ MEC الملف لدى الإدارة الجبائية، ويضبط الجدول الزمني، ويُعدّ تصريحات الضريبة على القيمة المضافة، وينظّم الأداءات، ويحتفظ بالوثائق المثبتة. وتتوصلون بتتبّع منتظم وتنبيهات قبل كل أجل.",
        items: ["ملف الاعتماد لدى الإدارة", "تصريحات وأداءات الضريبة على القيمة المضافة", "تتبّع الاقتطاعات من المنبع", "أرشفة الوثائق المثبتة"]
      },
      {
        title: "التحضير للمرحلة المقبلة: مهمة ظرفية أو توطين",
        text: "إذا تطوّر نشاطكم في المغرب، يُطرح خيار الشركة التابعة أو الفرع أو الشريك المحلي. نقارن السيناريوهات معكم وننسّق عند الحاجة مع الموثق أو المحامي المختص."
      }
    ],
    process: [
      { title: "التحليل", text: "العقود والتدفقات والزبناء والالتزامات." },
      { title: "التعيين", text: "ملف التمثيل والإجراءات." },
      { title: "التصريحات", text: "الضريبة على القيمة المضافة والأداءات والجدول الجبائي." },
      { title: "التتبّع", text: "التقارير والتنبيهات وتطور النشاط." }
    ],
    faq: [
      { question: "ما هو الممثل الجبائي في المغرب؟", answer: "شخص مقيم في المغرب تعيّنه شركة غير مقيمة للقيام نيابة عنها ببعض الالتزامات الجبائية، خاصة المتعلقة بالضريبة على القيمة المضافة: التصريحات والأداءات والتواصل مع الإدارة." },
      { question: "هل يجب على شركتي الأجنبية تعيين ممثل جبائي؟", answer: "يتوقف ذلك على عملياتكم وزبنائكم وحضوركم في المغرب. يدرس MEC وضعيتكم حالة بحالة قبل أي إجراء، ويُتحقق من القواعد المطبقة حسب ملفكم." },
      { question: "هل يجب تأسيس شركة في المغرب؟", answer: "ليس بالضرورة. يمكن إنجاز مهمة ظرفية دون شركة محلية. وإذا أصبح النشاط دائمًا، نقارن معكم الخيارات: شركة تابعة أو فرع أو شراكة." },
      { question: "هل يمكن إنجاز كل شيء عن بُعد؟", answer: "نعم، يتم الجزء الأكبر من التتبّع عن بُعد. ويستقبلكم فريقنا أيضًا بموعد في وسط طنجة." }
    ],
    relatedServices: [],
    keywords: ["التمثيل الجبائي في المغرب", "ممثل جبائي المغرب", "الضريبة على القيمة المضافة لغير المقيمين", "شركة أجنبية الضرائب المغرب"]
  },

  // ───────────────────────── Transaction advisory (group "transaction") ─────────────────────────
  {
    slug: "transaction-advisory-morocco",
    group: "transaction",
    locale: "en",
    seoTitle: "Transaction Advisory & Financial Due Diligence in Morocco | MEC",
    eyebrow: "Transaction advisory",
    title: "Financial due diligence and transaction advisory in Morocco",
    description:
      "Acquisition, equity stake or partnership: MEC reviews the target's accounts, cash, tax and social risks in Morocco to secure your decision and your negotiation.",
    intro:
      "Before buying a company, investing in its capital or partnering with a Moroccan business, you need to know what you are really buying. Morocco Europe Consulting performs financial due diligence focused on what changes the decision: quality of earnings, cash, debt, commitments, tax and social risks. Legal aspects are handled with the relevant lawyer or notary.",
    imageSrc: "/images/generated/mec-audit-compliance.webp",
    imageAlt: "Financial due diligence before an acquisition in Morocco",
    outcomes: ["Risks identified before signing", "Earnings and cash normalised", "Documented negotiation points", "A clear report for the decision"],
    sections: [
      {
        title: "Due diligence focused on what matters",
        text: "We start from your questions: what do you want to buy, at what price, with which acceptable risks? The scope of the review follows from them, to avoid a bulky report that does not answer the decision.",
        items: ["Quality and recurrence of earnings", "Cash, working capital and net debt", "Off-balance-sheet commitments", "Tax and social risks"]
      },
      {
        title: "Findings turned into negotiation levers",
        text: "Each finding is quantified where possible and linked to a concrete consequence: price adjustment, warranty to include, condition precedent or issue to fix before signing. You get documented arguments to negotiate.",
        items: ["Adjustments and normalisation", "Business plan review", "Points of attention for the contract", "Summary for the decision committee"]
      },
      {
        title: "After the deal: integrate and manage",
        text: "A successful acquisition is also decided after signing. MEC can set up reporting to the buyer, monthly closing, dashboards and commitment tracking, in particular for European groups taking over a company in Morocco."
      }
    ],
    process: [
      { title: "Scoping", text: "Goals, scope, timeline and data access." },
      { title: "Review", text: "Accounts, cash, tax, social and commitments." },
      { title: "Reporting", text: "Quantified findings and negotiation points." },
      { title: "Integration", text: "Reporting, closing and management after signing." }
    ],
    faq: [
      { question: "What is financial due diligence?", answer: "An in-depth review of a company's accounts and financial position before a transaction: quality of earnings, cash, debt, commitments and risks. It secures the decision and the negotiation." },
      { question: "Is legal due diligence included?", answer: "MEC covers the financial, tax and social aspects. The legal side (contracts, ownership, litigation, deeds) is handled by the relevant lawyer or notary, with whom we coordinate the timeline and findings." },
      { question: "How long does due diligence take?", answer: "It depends on the scope, the size of the target and data availability. Precise scoping at the start allows a realistic timeline." },
      { question: "Do you support foreign buyers?", answer: "Yes, in particular European companies acquiring or investing in a company in Morocco, with a report suited to their reporting requirements." }
    ],
    relatedServices: [],
    keywords: ["transaction advisory Morocco", "due diligence Morocco", "financial due diligence Morocco", "acquisition Morocco company", "M&A advisory Morocco"]
  },
  {
    slug: "due-diligence-marokko",
    group: "transaction",
    locale: "nl",
    seoTitle: "Due diligence en transactieadvies in Marokko | MEC Tanger",
    eyebrow: "Transactieadvies",
    title: "Financiële due diligence en transactieadvies in Marokko",
    description:
      "Overname, participatie of partnership: MEC analyseert de rekeningen, de thesaurie en de fiscale en sociale risico's van het doelbedrijf in Marokko om je beslissing en onderhandeling te beveiligen.",
    intro:
      "Voor je een bedrijf overneemt, instapt in het kapitaal of samenwerkt met een Marokkaanse partner, moet je weten wat je echt koopt. Morocco Europe Consulting voert financiële due diligences uit, gericht op wat de beslissing verandert: kwaliteit van de resultaten, thesaurie, schulden, verplichtingen, fiscale en sociale risico's. Juridische aspecten worden behandeld met de bevoegde advocaat of notaris.",
    imageSrc: "/images/generated/mec-audit-compliance.webp",
    imageAlt: "Financiële due diligence vóór een overname in Marokko",
    outcomes: ["Risico's gekend vóór de ondertekening", "Resultaten en thesaurie genormaliseerd", "Gedocumenteerde onderhandelingspunten", "Een helder rapport voor de beslissing"],
    sections: [
      {
        title: "Een due diligence gericht op wat telt",
        text: "We vertrekken van jouw vragen: wat wil je kopen, tegen welke prijs, met welke aanvaardbare risico's? De scope van het onderzoek volgt daaruit, zodat je geen lijvig rapport krijgt dat de beslissing niet beantwoordt.",
        items: ["Kwaliteit en terugkerend karakter van de resultaten", "Thesaurie, werkkapitaal en nettoschuld", "Buitenbalansverplichtingen", "Fiscale en sociale risico's"]
      },
      {
        title: "Vaststellingen omgezet in onderhandelingshefbomen",
        text: "Elk punt wordt waar mogelijk becijferd en gekoppeld aan een concreet gevolg: prijsaanpassing, garantie, opschortende voorwaarde of punt dat vóór de ondertekening moet worden rechtgezet. Zo heb je onderbouwde argumenten om te onderhandelen.",
        items: ["Correcties en normalisering", "Review van het businessplan", "Aandachtspunten voor het contract", "Samenvatting voor het beslissingscomité"]
      },
      {
        title: "Na de transactie: integreren en sturen",
        text: "Een geslaagde overname speelt zich ook af na de ondertekening. MEC kan de rapportering naar de koper, de maandafsluiting, het dashboard en de opvolging van verplichtingen opzetten, zeker voor Europese groepen die een bedrijf in Marokko overnemen."
      }
    ],
    process: [
      { title: "Afbakening", text: "Doelen, scope, kalender en toegang tot gegevens." },
      { title: "Onderzoek", text: "Rekeningen, thesaurie, fiscaliteit, sociaal en verplichtingen." },
      { title: "Rapport", text: "Becijferde vaststellingen en onderhandelingspunten." },
      { title: "Integratie", text: "Rapportering, afsluiting en sturing na de ondertekening." }
    ],
    faq: [
      { question: "Wat is een financiële due diligence?", answer: "Een grondig onderzoek van de rekeningen en de financiële toestand van een bedrijf vóór een transactie: kwaliteit van de resultaten, thesaurie, schulden, verplichtingen en risico's. Het beveiligt de beslissing en de onderhandeling." },
      { question: "Is de juridische due diligence inbegrepen?", answer: "MEC behandelt de financiële, fiscale en sociale kant. Het juridische luik (contracten, eigendom, geschillen, akten) gebeurt door de bevoegde advocaat of notaris, met wie we kalender en vaststellingen afstemmen." },
      { question: "Hoe lang duurt een due diligence?", answer: "Dat hangt af van de scope, de omvang van het doelbedrijf en de beschikbaarheid van gegevens. Een nauwkeurige afbakening maakt een realistische kalender mogelijk." },
      { question: "Begeleiden jullie buitenlandse kopers?", answer: "Ja, onder meer Europese bedrijven die een vennootschap in Marokko overnemen of erin investeren, met een rapport afgestemd op hun rapporteringseisen." }
    ],
    relatedServices: [],
    keywords: ["due diligence Marokko", "transactieadvies Marokko", "bedrijf overnemen Marokko", "financiële due diligence"]
  },
  {
    slug: "due-diligence-marruecos",
    group: "transaction",
    locale: "es",
    seoTitle: "Due diligence y asesoría en transacciones en Marruecos | MEC",
    eyebrow: "Asesoría en transacciones",
    title: "Due diligence financiera y asesoría en transacciones en Marruecos",
    description:
      "Compra de empresa, toma de participación o alianza: MEC analiza las cuentas, la tesorería y los riesgos fiscales y sociales de la sociedad objetivo en Marruecos para asegurar su decisión y su negociación.",
    intro:
      "Antes de comprar una sociedad, entrar en su capital o asociarse con un socio marroquí, hay que saber qué se compra realmente. Morocco Europe Consulting realiza due diligences financieras centradas en lo que cambia la decisión: calidad de los resultados, tesorería, deuda, compromisos y riesgos fiscales y sociales. Los aspectos jurídicos se tratan con el abogado o el notario competente.",
    imageSrc: "/images/generated/mec-audit-compliance.webp",
    imageAlt: "Due diligence financiera antes de una adquisición en Marruecos",
    outcomes: ["Riesgos identificados antes de firmar", "Resultados y tesorería normalizados", "Puntos de negociación documentados", "Un informe claro para decidir"],
    sections: [
      {
        title: "Una due diligence centrada en lo importante",
        text: "Partimos de sus preguntas: ¿qué quiere comprar, a qué precio y con qué riesgos aceptables? El alcance de la revisión se deriva de ellas, para evitar un informe voluminoso que no responde a la decisión.",
        items: ["Calidad y recurrencia de los resultados", "Tesorería, fondo de maniobra y deuda neta", "Compromisos fuera de balance", "Riesgos fiscales y sociales"]
      },
      {
        title: "Hallazgos convertidos en palancas de negociación",
        text: "Cada punto se cuantifica cuando es posible y se vincula a una consecuencia concreta: ajuste de precio, garantía, condición suspensiva o punto que corregir antes de la firma. Dispone así de argumentos documentados para negociar.",
        items: ["Ajustes y normalización", "Revisión del plan de negocio", "Puntos de atención para el contrato", "Síntesis para el comité de decisión"]
      },
      {
        title: "Después de la operación: integrar y controlar",
        text: "Una adquisición exitosa también se juega después de la firma. MEC puede implantar el reporting hacia el comprador, el cierre mensual, el cuadro de mando y el seguimiento de compromisos, especialmente para grupos europeos que adquieren una sociedad en Marruecos."
      }
    ],
    process: [
      { title: "Definición", text: "Objetivos, alcance, calendario y acceso a los datos." },
      { title: "Revisión", text: "Cuentas, tesorería, fiscalidad, social y compromisos." },
      { title: "Informe", text: "Hallazgos cuantificados y puntos de negociación." },
      { title: "Integración", text: "Reporting, cierre y control tras la firma." }
    ],
    faq: [
      { question: "¿Qué es una due diligence financiera?", answer: "Una revisión en profundidad de las cuentas y la situación financiera de una empresa antes de una operación: calidad de los resultados, tesorería, deudas, compromisos y riesgos. Sirve para asegurar la decisión y la negociación." },
      { question: "¿Incluye la due diligence jurídica?", answer: "MEC trata los aspectos financieros, fiscales y sociales. El aspecto jurídico (contratos, propiedad, litigios, escrituras) lo lleva el abogado o el notario competente, con quien coordinamos el calendario y los hallazgos." },
      { question: "¿Cuánto dura una due diligence?", answer: "Depende del alcance, del tamaño de la sociedad objetivo y de la disponibilidad de los datos. Un encuadre preciso al inicio permite fijar un calendario realista." },
      { question: "¿Acompañan a compradores extranjeros?", answer: "Sí, en particular a empresas españolas y europeas que adquieren o invierten en una sociedad en Marruecos, con un informe adaptado a sus exigencias de reporting." }
    ],
    relatedServices: [],
    keywords: ["due diligence Marruecos", "asesoría en transacciones Marruecos", "comprar empresa en Marruecos", "due diligence financiera"]
  },
  {
    slug: "الفحص-النافي-للجهالة-في-المغرب",
    group: "transaction",
    locale: "ar",
    seoTitle: "الفحص النافي للجهالة والاستشارة في الصفقات بالمغرب | MEC",
    eyebrow: "الاستشارة في الصفقات",
    title: "الفحص المالي النافي للجهالة والاستشارة في الصفقات بالمغرب",
    description:
      "استحواذ أو مساهمة في رأسمال أو شراكة: يحلّل MEC حسابات الشركة المستهدفة في المغرب وخزينتها ومخاطرها الجبائية والاجتماعية لتأمين قراركم وتفاوضكم.",
    intro:
      "قبل شراء شركة أو الدخول في رأسمالها أو الشراكة مع مقاولة مغربية، يجب معرفة ما تشترونه فعلًا. ينجز مكتب Morocco Europe Consulting فحوصًا مالية نافية للجهالة تركّز على ما يغيّر القرار: جودة النتائج والخزينة والديون والالتزامات والمخاطر الجبائية والاجتماعية. وتُعالَج الجوانب القانونية مع المحامي أو الموثق المختص.",
    imageSrc: "/images/generated/mec-audit-compliance.webp",
    imageAlt: "فحص مالي نافٍ للجهالة قبل استحواذ في المغرب",
    outcomes: ["مخاطر محدّدة قبل التوقيع", "نتائج وخزينة معاد معالجتها", "نقاط تفاوض موثّقة", "تقرير واضح لاتخاذ القرار"],
    sections: [
      {
        title: "فحص يركّز على ما يهم",
        text: "ننطلق من أسئلتكم: ماذا تريدون شراءه، وبأي ثمن، وما المخاطر المقبولة؟ ومنها يُحدَّد نطاق الفحص، لتفادي تقرير ضخم لا يجيب عن القرار.",
        items: ["جودة النتائج وتكرارها", "الخزينة ورأس المال العامل وصافي الديون", "الالتزامات خارج الميزانية", "المخاطر الجبائية والاجتماعية"]
      },
      {
        title: "ملاحظات تتحول إلى أوراق تفاوض",
        text: "تُقدَّر كل ملاحظة بالأرقام كلما أمكن، وتُربط بنتيجة ملموسة: تعديل الثمن، أو ضمان يجب إدراجه، أو شرط واقف، أو نقطة يجب تصحيحها قبل التوقيع. وبذلك تتوفرون على حجج موثّقة للتفاوض.",
        items: ["إعادة المعالجة والتطبيع", "مراجعة مخطط الأعمال", "نقاط اليقظة في العقد", "خلاصة للجنة القرار"]
      },
      {
        title: "بعد الصفقة: الإدماج والقيادة",
        text: "يُحسم نجاح الاستحواذ أيضًا بعد التوقيع. يمكن لـ MEC إرساء التقارير الموجّهة إلى المشتري والإقفال الشهري ولوحة القيادة وتتبّع الالتزامات، خاصة بالنسبة للمجموعات الأوروبية التي تستحوذ على شركة في المغرب."
      }
    ],
    process: [
      { title: "التأطير", text: "الأهداف والنطاق والجدول الزمني والولوج إلى المعطيات." },
      { title: "الفحص", text: "الحسابات والخزينة والجبايات والجانب الاجتماعي والالتزامات." },
      { title: "التقرير", text: "ملاحظات مقدّرة بالأرقام ونقاط تفاوض." },
      { title: "الإدماج", text: "التقارير والإقفال والقيادة بعد التوقيع." }
    ],
    faq: [
      { question: "ما هو الفحص المالي النافي للجهالة؟", answer: "مراجعة معمّقة لحسابات المقاولة ووضعيتها المالية قبل صفقة: جودة النتائج والخزينة والديون والالتزامات والمخاطر. ويهدف إلى تأمين القرار والتفاوض." },
      { question: "هل يشمل الفحص الجانب القانوني؟", answer: "يتولى MEC الجوانب المالية والجبائية والاجتماعية، أما الجانب القانوني (العقود والملكية والنزاعات والعقود الرسمية) فيتولاه المحامي أو الموثق المختص، وننسّق معه الجدول الزمني والملاحظات." },
      { question: "كم تستغرق مدة الفحص؟", answer: "تتوقف على النطاق وحجم الشركة المستهدفة وتوفر المعطيات، ويتيح التأطير الدقيق منذ البداية وضع جدول زمني واقعي." },
      { question: "هل تواكبون المشترين الأجانب؟", answer: "نعم، خاصة الشركات الأوروبية التي تستحوذ على شركة في المغرب أو تستثمر فيها، مع تقرير ملائم لمتطلباتها في التقارير." }
    ],
    relatedServices: [],
    keywords: ["الفحص النافي للجهالة المغرب", "الاستشارة في الصفقات المغرب", "شراء شركة في المغرب", "due diligence المغرب"]
  }
];
