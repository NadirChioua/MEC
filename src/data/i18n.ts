import { pageEntries } from "./i18n-pages";

export type Locale = "fr" | "ar" | "en" | "nl" | "es";

export const locales: Array<{ code: Locale; label: string; nativeLabel: string; dir: "ltr" | "rtl" }> = [
  { code: "fr", label: "Francais", nativeLabel: "FR", dir: "ltr" },
  { code: "ar", label: "Arabe", nativeLabel: "AR", dir: "rtl" },
  { code: "en", label: "English", nativeLabel: "EN", dir: "ltr" },
  { code: "nl", label: "Nederlands", nativeLabel: "NL", dir: "ltr" },
  { code: "es", label: "Espanol", nativeLabel: "ES", dir: "ltr" }
];

export type TranslationMap = Record<Locale, string>;

const entries: TranslationMap[] = [
  {
    fr: "Notre équipe",
    ar: "فريقنا",
    en: "Our team",
    nl: "Ons team",
    es: "Nuestro equipo"
  },
  {
    fr: "Accueil",
    ar: "الرئيسية",
    en: "Home",
    nl: "Home",
    es: "Inicio"
  },
  {
    fr: "À propos",
    ar: "من نحن",
    en: "About",
    nl: "Over ons",
    es: "Acerca de"
  },
  {
    fr: "Services",
    ar: "الخدمات",
    en: "Services",
    nl: "Diensten",
    es: "Servicios"
  },
  {
    fr: "Ressources",
    ar: "الموارد",
    en: "Resources",
    nl: "Resources",
    es: "Recursos"
  },
  {
    fr: "Contact",
    ar: "اتصل بنا",
    en: "Contact",
    nl: "Contact",
    es: "Contacto"
  },
  {
    fr: "Admin",
    ar: "المسؤول",
    en: "Admin",
    nl: "Admin",
    es: "Admin"
  },
  {
    fr: "Tous les services",
    ar: "كل الخدمات",
    en: "All services",
    nl: "Alle diensten",
    es: "Todos los servicios"
  },
  {
    fr: "Consultation confidentielle",
    ar: "استشارة سرية",
    en: "Confidential consultation",
    nl: "Vertrouwelijk advies",
    es: "Consulta confidencial"
  },
  {
    fr: "Explorer les services",
    ar: "استكشف الخدمات",
    en: "Explore services",
    nl: "Bekijk diensten",
    es: "Explorar servicios"
  },
  {
    fr: "Cabinet de conseil premium — Maroc & Europe",
    ar: "مكتب استشارات راقٍ — المغرب وأوروبا",
    en: "Premium consulting firm — Morocco & Europe",
    nl: "Premium advieskantoor — Marokko & Europa",
    es: "Firma de consultoria premium — Marruecos y Europa"
  },
  {
    fr: "L’excellence au service de votre entreprise.",
    ar: "التميز في خدمة شركتكم.",
    en: "Excellence in service of your business.",
    nl: "Excellentie ten dienste van uw onderneming.",
    es: "La excelencia al servicio de su empresa."
  },
  {
    fr: "Morocco Europe Consulting accompagne les entreprises marocaines et les sociétés internationales implantées ou souhaitant s’implanter au Maroc dans leur gestion comptable, financière, fiscale et administrative. Nous conseillons également les dirigeants dans leurs décisions stratégiques afin de soutenir durablement la croissance de leur activité.",
    ar: "تواكب Morocco Europe Consulting الشركات المغربية والشركات الدولية القائمة أو الراغبة في الاستثمار بالمغرب في تدبيرها المحاسبي والمالي والضريبي والإداري. كما نساعد المسيرين في قراراتهم الاستراتيجية لدعم نمو نشاطهم بشكل مستدام.",
    en: "Morocco Europe Consulting supports Moroccan companies and international firms established or wishing to establish themselves in Morocco with accounting, financial, tax and administrative management. We also advise executives on strategic decisions to sustainably support business growth.",
    nl: "Morocco Europe Consulting begeleidt Marokkaanse ondernemingen en internationale bedrijven die in Marokko gevestigd zijn of zich er willen vestigen bij hun boekhoudkundige, financiele, fiscale en administratieve beheer. Wij adviseren ook bestuurders bij strategische beslissingen om duurzame groei te ondersteunen.",
    es: "Morocco Europe Consulting acompaña a empresas marroquies y sociedades internacionales implantadas o que desean implantarse en Marruecos en su gestion contable, financiera, fiscal y administrativa. Tambien asesoramos a los dirigentes en sus decisiones estrategicas para sostener el crecimiento de su actividad."
  },
  {
    fr: "Votre partenaire stratégique pour réussir au Maroc",
    ar: "شريككم الاستراتيجي للنجاح في المغرب",
    en: "Your strategic partner for success in Morocco",
    nl: "Uw strategische partner voor succes in Marokko",
    es: "Su socio estrategico para triunfar en Marruecos"
  },
  {
    fr: "Morocco Europe Consulting accompagne les entreprises marocaines et internationales dans leur création, leur développement et leur transformation. Nous mettons notre expertise au service des dirigeants en les accompagnant dans la comptabilité, la gestion administrative, les obligations fiscales et juridiques, ainsi que dans l’optimisation de leur organisation et de leurs performances.",
    ar: "تواكب Morocco Europe Consulting الشركات المغربية والدولية في تأسيسها وتطويرها وتحولها. نضع خبرتنا في خدمة المسيرين عبر مواكبتهم في المحاسبة، والتدبير الإداري، والالتزامات الضريبية والقانونية، وتحسين التنظيم والأداء.",
    en: "Morocco Europe Consulting supports Moroccan and international companies in their creation, development and transformation. We put our expertise at the service of executives through accounting, administrative management, tax and legal obligations, and optimization of organization and performance.",
    nl: "Morocco Europe Consulting begeleidt Marokkaanse en internationale ondernemingen bij hun oprichting, ontwikkeling en transformatie. Wij ondersteunen leidinggevenden met boekhouding, administratie, fiscale en juridische verplichtingen en optimalisatie van organisatie en prestaties.",
    es: "Morocco Europe Consulting acompaña a empresas marroquies e internacionales en su creacion, desarrollo y transformacion. Ponemos nuestra experiencia al servicio de los dirigentes en contabilidad, gestion administrativa, obligaciones fiscales y juridicas, y optimizacion de organizacion y rendimiento."
  },
  {
    fr: "Nous accompagnons également les entrepreneurs et investisseurs étrangers souhaitant s’implanter au Maroc. De la création de leur société aux démarches administratives, fiscales et comptables, nous les guidons à chaque étape de leur installation afin de leur offrir un parcours simple, sécurisé et conforme à la réglementation marocaine.",
    ar: "كما نواكب المقاولين والمستثمرين الأجانب الراغبين في الاستثمار بالمغرب. من تأسيس الشركة إلى الإجراءات الإدارية والضريبية والمحاسبية، نرشدهم في كل مرحلة لضمان مسار بسيط وآمن ومتوافق مع التشريع المغربي.",
    en: "We also support foreign entrepreneurs and investors wishing to establish themselves in Morocco. From company creation to administrative, tax and accounting procedures, we guide them at every stage for a simple, secure and compliant process.",
    nl: "Wij ondersteunen ook buitenlandse ondernemers en investeerders die zich in Marokko willen vestigen. Van de oprichting van hun vennootschap tot administratieve, fiscale en boekhoudkundige procedures begeleiden wij hen in elke stap.",
    es: "Tambien acompanamos a emprendedores e inversores extranjeros que desean implantarse en Marruecos. Desde la creacion de la sociedad hasta los tramites administrativos, fiscales y contables, los guiamos en cada etapa."
  },
  {
    fr: "Notre ambition est de permettre à chaque entreprise de se développer en toute sérénité, en bénéficiant d’un accompagnement personnalisé, rigoureux et confidentiel. Chez Morocco Europe Consulting, nous transformons les défis en opportunités et bâtissons des solutions durables pour assurer la réussite de nos clients.",
    ar: "طموحنا هو تمكين كل شركة من النمو بثقة واطمئنان، من خلال مواكبة شخصية ودقيقة وسرية. في Morocco Europe Consulting نحول التحديات إلى فرص ونبني حلولاً مستدامة لضمان نجاح عملائنا.",
    en: "Our ambition is to enable every company to grow with confidence through personalized, rigorous and confidential support. At Morocco Europe Consulting, we turn challenges into opportunities and build lasting solutions for our clients’ success.",
    nl: "Onze ambitie is elk bedrijf met vertrouwen te laten groeien dankzij persoonlijke, zorgvuldige en vertrouwelijke begeleiding. Bij Morocco Europe Consulting zetten we uitdagingen om in kansen en bouwen we duurzame oplossingen.",
    es: "Nuestra ambicion es permitir que cada empresa se desarrolle con serenidad mediante un acompanamiento personalizado, riguroso y confidencial. En Morocco Europe Consulting transformamos desafios en oportunidades y construimos soluciones duraderas."
  },
  {
    fr: "Notre mission est simple : offrir à nos clients un partenaire de confiance, capable de sécuriser leurs projets, d’optimiser leur gestion et de favoriser leur réussite au Maroc.",
    ar: "مهمتنا بسيطة: أن نوفر لعملائنا شريكاً موثوقاً قادراً على تأمين مشاريعهم، وتحسين تدبيرهم، وتعزيز نجاحهم في المغرب.",
    en: "Our mission is simple: to offer our clients a trusted partner able to secure their projects, optimize their management and support their success in Morocco.",
    nl: "Onze missie is eenvoudig: klanten een betrouwbare partner bieden die projecten beveiligt, beheer optimaliseert en succes in Marokko bevordert.",
    es: "Nuestra mision es simple: ofrecer a nuestros clientes un socio de confianza capaz de asegurar sus proyectos, optimizar su gestion y favorecer su exito en Marruecos."
  },
  {
    fr: "Finance & reporting",
    ar: "المالية والتقارير",
    en: "Finance & reporting",
    nl: "Financien & reporting",
    es: "Finanzas e informes"
  },
  {
    fr: "Conseil Financier",
    ar: "استشارات مالية",
    en: "Financial advisory",
    nl: "Financieel advies",
    es: "Asesoría financiera"
  },
  {
    fr: "Comptabilite",
    ar: "المحاسبة",
    en: "Accounting",
    nl: "Boekhouding",
    es: "Contabilidad"
  },
  {
    fr: "Gestion d'Entreprise",
    ar: "تدبير الشركات",
    en: "Business management",
    nl: "Bedrijfsbeheer",
    es: "Gestión empresarial"
  },
  {
    fr: "Implantation Internationale",
    ar: "التأسيس الدولي",
    en: "International establishment",
    nl: "Internationale vestiging",
    es: "Implantación internacional"
  },
  {
    fr: "Audit & Controle",
    ar: "التدقيق والمراقبة",
    en: "Audit & control",
    nl: "Audit & controle",
    es: "Auditoría y control"
  },
  {
    fr: "Accompagnement Personnalise",
    ar: "مواكبة مخصصة",
    en: "Personalized support",
    nl: "Persoonlijke begeleiding",
    es: "Acompañamiento personalizado"
  },
  {
    fr: "Commerce Maroc-Europe",
    ar: "تجارة المغرب وأوروبا",
    en: "Morocco-Europe trade",
    nl: "Marokko-Europa handel",
    es: "Comercio Marruecos-Europa"
  },
  {
    fr: "Audit & contrôle",
    ar: "التدقيق والمراقبة",
    en: "Audit & control",
    nl: "Audit & controle",
    es: "Auditoria y control"
  },
  {
    fr: "Maroc-Europe",
    ar: "المغرب وأوروبا",
    en: "Morocco-Europe",
    nl: "Marokko-Europa",
    es: "Marruecos-Europa"
  },
  {
    fr: "Ressources & insights",
    ar: "الموارد والرؤى",
    en: "Resources & insights",
    nl: "Resources & inzichten",
    es: "Recursos e insights"
  },
  {
    fr: "Des reperes utiles pour vos decisions",
    ar: "مرجعيات مفيدة لقراراتكم",
    en: "Useful guidance for your decisions",
    nl: "Nuttige inzichten voor uw beslissingen",
    es: "Referencias utiles para sus decisiones"
  },
  {
    fr: "Consulter",
    ar: "اطّلع",
    en: "View",
    nl: "Bekijken",
    es: "Consultar"
  },
  {
    fr: "Lire la suite",
    ar: "اقرأ المزيد",
    en: "Read more",
    nl: "Lees verder",
    es: "Leer mas"
  },
  {
    fr: "Liens rapides",
    ar: "روابط سريعة",
    en: "Quick links",
    nl: "Snelle links",
    es: "Enlaces rapidos"
  },
  {
    fr: "Tous droits reserves.",
    ar: "جميع الحقوق محفوظة.",
    en: "All rights reserved.",
    nl: "Alle rechten voorbehouden.",
    es: "Todos los derechos reservados."
  },
  {
    fr: "Dashboard administrateur",
    ar: "لوحة تحكم المسؤول",
    en: "Admin dashboard",
    nl: "Admin dashboard",
    es: "Panel de administrador"
  },
  {
    fr: "Centre de pilotage Morocco Europe Consulting",
    ar: "مركز قيادة Morocco Europe Consulting",
    en: "Morocco Europe Consulting control center",
    nl: "Morocco Europe Consulting controlecentrum",
    es: "Centro de control de Morocco Europe Consulting"
  },
  {
    fr: "Gestion du site",
    ar: "إدارة الموقع",
    en: "Website management",
    nl: "Websitebeheer",
    es: "Gestión del sitio"
  },
  {
    fr: "Modifier le contenu principal",
    ar: "تعديل المحتوى الرئيسي",
    en: "Edit main content",
    nl: "Hoofdinhoud bewerken",
    es: "Editar contenido principal"
  },
  {
    fr: "Gestion des images",
    ar: "إدارة الصور",
    en: "Image management",
    nl: "Afbeeldingenbeheer",
    es: "Gestión de imágenes"
  },
  {
    fr: "Clients & prospects",
    ar: "العملاء والفرص",
    en: "Clients & prospects",
    nl: "Klanten & prospects",
    es: "Clientes y prospectos"
  },
  {
    fr: "Tâches administrateur",
    ar: "مهام المسؤول",
    en: "Admin tasks",
    nl: "Admin taken",
    es: "Tareas del administrador"
  }
];

const extendedEntries: TranslationMap[] = [
  {
    fr: "Nos services",
    ar: "خدماتنا",
    en: "Our services",
    nl: "Onze diensten",
    es: "Nuestros servicios"
  },
  {
    fr: "Des solutions fiables pour votre développement",
    ar: "حلول موثوقة لتطوير شركتكم",
    en: "Reliable solutions for your development",
    nl: "Betrouwbare oplossingen voor uw ontwikkeling",
    es: "Soluciones fiables para su desarrollo"
  },
  {
    fr: "Finance, comptabilité, gestion et implantation internationale : MEC structure vos décisions avec une vision Maroc-Europe.",
    ar: "المالية والمحاسبة والتدبير والتأسيس الدولي: تساعد MEC على هيكلة قراراتكم برؤية مغرب-أوروبا.",
    en: "Finance, accounting, management and international establishment: MEC structures your decisions with a Morocco-Europe perspective.",
    nl: "Financiën, boekhouding, beheer en internationale vestiging: MEC structureert uw beslissingen met een Marokko-Europa visie.",
    es: "Finanzas, contabilidad, gestión e implantación internacional: MEC estructura sus decisiones con una visión Marruecos-Europa."
  },
  {
    fr: "Découvrir le service",
    ar: "اكتشف الخدمة",
    en: "Discover the service",
    nl: "Ontdek de dienst",
    es: "Descubrir el servicio"
  },
  {
    fr: "Expertise stratégique",
    ar: "خبرة استراتيجية",
    en: "Strategic expertise",
    nl: "Strategische expertise",
    es: "Experiencia estratégica"
  },
  {
    fr: "Des décisions financières mieux cadrées.",
    ar: "قرارات مالية أكثر وضوحاً وتنظيماً.",
    en: "Better framed financial decisions.",
    nl: "Beter gekaderde financiële beslissingen.",
    es: "Decisiones financieras mejor estructuradas."
  },
  {
    fr: "Accompagnement personnalisé",
    ar: "مواكبة مخصصة",
    en: "Personalized support",
    nl: "Persoonlijke begeleiding",
    es: "Acompañamiento personalizado"
  },
  {
    fr: "Un suivi adapté à chaque dirigeant.",
    ar: "متابعة مناسبة لكل مسير.",
    en: "Support adapted to each executive.",
    nl: "Begeleiding aangepast aan elke bestuurder.",
    es: "Seguimiento adaptado a cada dirigente."
  },
  {
    fr: "Vision internationale",
    ar: "رؤية دولية",
    en: "International vision",
    nl: "Internationale visie",
    es: "Visión internacional"
  },
  {
    fr: "Une lecture Maroc-Europe de vos enjeux.",
    ar: "قراءة مغرب-أوروبا لتحدياتكم.",
    en: "A Morocco-Europe reading of your challenges.",
    nl: "Een Marokko-Europa blik op uw uitdagingen.",
    es: "Una lectura Marruecos-Europa de sus retos."
  },
  {
    fr: "Solutions adaptées",
    ar: "حلول ملائمة",
    en: "Tailored solutions",
    nl: "Aangepaste oplossingen",
    es: "Soluciones adaptadas"
  },
  {
    fr: "Rigueur, confidentialité et conformité.",
    ar: "دقة وسرية وامتثال.",
    en: "Rigor, confidentiality and compliance.",
    nl: "Zorgvuldigheid, vertrouwelijkheid en compliance.",
    es: "Rigor, confidencialidad y conformidad."
  },
  {
    fr: "Pourquoi nous choisir",
    ar: "لماذا تختاروننا",
    en: "Why choose us",
    nl: "Waarom voor ons kiezen",
    es: "Por qué elegirnos"
  },
  {
    fr: "Une expertise bi-continentale unique",
    ar: "خبرة فريدة بين قارتين",
    en: "Unique bi-continental expertise",
    nl: "Unieke bi-continentale expertise",
    es: "Experiencia bicontinental única"
  },
  {
    fr: "Avec une présence au Maroc et en Europe, nous maîtrisons les environnements réglementaires des deux côtés de la Méditerranée.",
    ar: "بفضل حضورنا في المغرب وأوروبا، نتمكن من فهم البيئات التنظيمية على ضفتي المتوسط.",
    en: "With a presence in Morocco and Europe, we understand the regulatory environments on both sides of the Mediterranean.",
    nl: "Met aanwezigheid in Marokko en Europa beheersen wij de regelgevende omgevingen aan beide zijden van de Middellandse Zee.",
    es: "Con presencia en Marruecos y Europa, dominamos los entornos regulatorios de ambos lados del Mediterráneo."
  },
  {
    fr: "Double expertise réglementaire",
    ar: "خبرة تنظيمية مزدوجة",
    en: "Dual regulatory expertise",
    nl: "Dubbele regelgevende expertise",
    es: "Doble experiencia regulatoria"
  },
  {
    fr: "Normes IFRS, droit fiscal marocain et européen.",
    ar: "معايير IFRS والقانون الضريبي المغربي والأوروبي.",
    en: "IFRS standards, Moroccan and European tax law.",
    nl: "IFRS-normen, Marokkaans en Europees fiscaal recht.",
    es: "Normas IFRS, derecho fiscal marroquí y europeo."
  },
  {
    fr: "Approche sur-mesure",
    ar: "نهج مخصص",
    en: "Tailored approach",
    nl: "Maatwerkaanpak",
    es: "Enfoque a medida"
  },
  {
    fr: "Suivi personnalisé adapté à chaque client.",
    ar: "متابعة مخصصة تناسب كل عميل.",
    en: "Personalized follow-up adapted to each client.",
    nl: "Persoonlijke opvolging aangepast aan elke klant.",
    es: "Seguimiento personalizado adaptado a cada cliente."
  },
  {
    fr: "Confidentialité absolue",
    ar: "سرية كاملة",
    en: "Absolute confidentiality",
    nl: "Absolute vertrouwelijkheid",
    es: "Confidencialidad absoluta"
  },
  {
    fr: "Données traitées avec la plus stricte confidentialité.",
    ar: "تتم معالجة البيانات بأقصى درجات السرية.",
    en: "Data handled with the strictest confidentiality.",
    nl: "Gegevens worden met de strengste vertrouwelijkheid behandeld.",
    es: "Datos tratados con la más estricta confidencialidad."
  },
  {
    fr: "Réactivité garantie",
    ar: "استجابة مضمونة",
    en: "Guaranteed responsiveness",
    nl: "Gegarandeerde responsiviteit",
    es: "Reactividad garantizada"
  },
  {
    fr: "Cabinet disponible pour tous vos besoins.",
    ar: "مكتب متاح لكل احتياجاتكم.",
    en: "A firm available for all your needs.",
    nl: "Een kantoor beschikbaar voor al uw behoeften.",
    es: "Un despacho disponible para todas sus necesidades."
  },
  {
    fr: "Notre approche",
    ar: "منهجيتنا",
    en: "Our approach",
    nl: "Onze aanpak",
    es: "Nuestro enfoque"
  },
  {
    fr: "Notre approche, votre réussite",
    ar: "منهجيتنا، نجاحكم",
    en: "Our approach, your success",
    nl: "Onze aanpak, uw succes",
    es: "Nuestro enfoque, su éxito"
  },
  {
    fr: "Chez MEC, nous transformons la complexité en opportunités. Notre mission : vous accompagner avec rigueur, proximité et expertise pour atteindre vos objectifs en toute sérénité.",
    ar: "في MEC نحول التعقيد إلى فرص. مهمتنا هي مواكبتكم بدقة وقرب وخبرة لتحقيق أهدافكم بثقة.",
    en: "At MEC, we turn complexity into opportunities. Our mission: to support you with rigor, proximity and expertise so you can reach your goals with confidence.",
    nl: "Bij MEC zetten we complexiteit om in kansen. Onze missie: u begeleiden met zorgvuldigheid, nabijheid en expertise.",
    es: "En MEC transformamos la complejidad en oportunidades. Nuestra misión: acompañarle con rigor, cercanía y experiencia."
  },
  {
    fr: "Accompagnement sur mesure",
    ar: "مواكبة حسب الحاجة",
    en: "Tailored support",
    nl: "Ondersteuning op maat",
    es: "Acompañamiento a medida"
  },
  {
    fr: "Nous adaptons nos solutions à vos enjeux spécifiques pour un accompagnement efficace et personnalisé.",
    ar: "نكيّف حلولنا مع تحدياتكم الخاصة لضمان مواكبة فعالة ومخصصة.",
    en: "We adapt our solutions to your specific challenges for effective, personalized support.",
    nl: "Wij passen onze oplossingen aan uw specifieke uitdagingen aan voor effectieve begeleiding.",
    es: "Adaptamos nuestras soluciones a sus retos específicos para un acompañamiento eficaz."
  },
  {
    fr: "Expertise locale et internationale",
    ar: "خبرة محلية ودولية",
    en: "Local and international expertise",
    nl: "Lokale en internationale expertise",
    es: "Experiencia local e internacional"
  },
  {
    fr: "Une parfaite maîtrise des environnements marocain et européen pour vous ouvrir les meilleures opportunités.",
    ar: "إلمام قوي بالبيئتين المغربية والأوروبية لفتح أفضل الفرص أمامكم.",
    en: "Strong command of Moroccan and European environments to open the best opportunities.",
    nl: "Sterke kennis van Marokkaanse en Europese omgevingen voor de beste kansen.",
    es: "Dominio de los entornos marroquí y europeo para abrir las mejores oportunidades."
  },
  {
    fr: "Rigueur & confiance",
    ar: "الدقة والثقة",
    en: "Rigor & trust",
    nl: "Zorgvuldigheid & vertrouwen",
    es: "Rigor y confianza"
  },
  {
    fr: "Nous plaçons la qualité, la confidentialité et l’éthique au cœur de chaque mission.",
    ar: "نضع الجودة والسرية والأخلاقيات في قلب كل مهمة.",
    en: "We place quality, confidentiality and ethics at the heart of every mission.",
    nl: "Wij plaatsen kwaliteit, vertrouwelijkheid en ethiek centraal in elke opdracht.",
    es: "Situamos la calidad, la confidencialidad y la ética en el centro de cada misión."
  },
  {
    fr: "Création de valeur durable",
    ar: "خلق قيمة مستدامة",
    en: "Sustainable value creation",
    nl: "Duurzame waardecreatie",
    es: "Creación de valor sostenible"
  },
  {
    fr: "Nous vous aidons à structurer, optimiser et développer votre activité pour une croissance pérenne.",
    ar: "نساعدكم على هيكلة نشاطكم وتحسينه وتطويره من أجل نمو مستدام.",
    en: "We help you structure, optimize and develop your business for lasting growth.",
    nl: "Wij helpen uw activiteit structureren, optimaliseren en ontwikkelen voor duurzame groei.",
    es: "Le ayudamos a estructurar, optimizar y desarrollar su actividad para un crecimiento duradero."
  },
  {
    fr: "Consultation gratuite",
    ar: "استشارة مجانية",
    en: "Free consultation",
    nl: "Gratis adviesgesprek",
    es: "Consulta gratuita"
  },
  {
    fr: "Parlons de vos enjeux financiers et de développement.",
    ar: "لنتحدث عن تحدياتكم المالية والتنموية.",
    en: "Let’s discuss your financial and development challenges.",
    nl: "Laten we uw financiële en ontwikkelingsuitdagingen bespreken.",
    es: "Hablemos de sus retos financieros y de desarrollo."
  },
  {
    fr: "Téléphone",
    ar: "الهاتف",
    en: "Phone",
    nl: "Telefoon",
    es: "Teléfono"
  },
  {
    fr: "Contacter MEC",
    ar: "اتصل بـ MEC",
    en: "Contact MEC",
    nl: "Contacteer MEC",
    es: "Contactar MEC"
  },
  {
    fr: "Première consultation",
    ar: "الاستشارة الأولى",
    en: "First consultation",
    nl: "Eerste adviesgesprek",
    es: "Primera consulta"
  },
  {
    fr: "Parlons de vos décisions les plus importantes.",
    ar: "لنتحدث عن أهم قراراتكم.",
    en: "Let’s discuss your most important decisions.",
    nl: "Laten we uw belangrijkste beslissingen bespreken.",
    es: "Hablemos de sus decisiones más importantes."
  },
  {
    fr: "Un échange confidentiel pour cadrer vos priorités financières, comptables, d’audit ou de développement entre le Maroc et l’Europe.",
    ar: "تبادل سري لتحديد أولوياتكم المالية والمحاسبية والتدقيقية والتنموية بين المغرب وأوروبا.",
    en: "A confidential exchange to frame your financial, accounting, audit or development priorities between Morocco and Europe.",
    nl: "Een vertrouwelijk gesprek om uw financiële, boekhoudkundige, audit- of ontwikkelingsprioriteiten tussen Marokko en Europa te kaderen.",
    es: "Un intercambio confidencial para encuadrar sus prioridades financieras, contables, de auditoría o de desarrollo entre Marruecos y Europa."
  },
  {
    fr: "Demander une consultation",
    ar: "طلب استشارة",
    en: "Request a consultation",
    nl: "Adviesgesprek aanvragen",
    es: "Solicitar una consulta"
  },
  {
    fr: "Nom complet",
    ar: "الاسم الكامل",
    en: "Full name",
    nl: "Volledige naam",
    es: "Nombre completo"
  },
  {
    fr: "Votre nom",
    ar: "اسمكم",
    en: "Your name",
    nl: "Uw naam",
    es: "Su nombre"
  },
  {
    fr: "Entreprise",
    ar: "الشركة",
    en: "Company",
    nl: "Bedrijf",
    es: "Empresa"
  },
  {
    fr: "Nom de l’entreprise",
    ar: "اسم الشركة",
    en: "Company name",
    nl: "Bedrijfsnaam",
    es: "Nombre de la empresa"
  },
  {
    fr: "Service souhaité",
    ar: "الخدمة المطلوبة",
    en: "Requested service",
    nl: "Gewenste dienst",
    es: "Servicio deseado"
  },
  {
    fr: "Choisir un service",
    ar: "اختيار خدمة",
    en: "Choose a service",
    nl: "Kies een dienst",
    es: "Elegir un servicio"
  },
  {
    fr: "Message",
    ar: "الرسالة",
    en: "Message",
    nl: "Bericht",
    es: "Mensaje"
  },
  {
    fr: "Expliquez brièvement votre besoin",
    ar: "اشرحوا حاجتكم باختصار",
    en: "Briefly explain your need",
    nl: "Leg kort uw behoefte uit",
    es: "Explique brevemente su necesidad"
  },
  {
    fr: "Envoyer ma demande",
    ar: "إرسال الطلب",
    en: "Send my request",
    nl: "Mijn aanvraag verzenden",
    es: "Enviar mi solicitud"
  }
];

const finalEntries: TranslationMap[] = [
  {
    fr: "Mentions légales",
    ar: "الإشعارات القانونية",
    en: "Legal notice",
    nl: "Juridische vermeldingen",
    es: "Aviso legal"
  },
  {
    fr: "Éditeur du site",
    ar: "ناشر الموقع",
    en: "Site publisher",
    nl: "Website-uitgever",
    es: "Editor del sitio"
  },
  {
    fr: "Coordonnées",
    ar: "بيانات الاتصال",
    en: "Contact details",
    nl: "Contactgegevens",
    es: "Datos de contacto"
  },
  {
    fr: "Note de validation",
    ar: "ملاحظة التحقق",
    en: "Validation note",
    nl: "Validatienota",
    es: "Nota de validación"
  },
  {
    fr: "Les informations juridiques définitives devront être validées par le client avant mise en ligne.",
    ar: "يجب أن تتم المصادقة على المعلومات القانونية النهائية من طرف العميل قبل النشر.",
    en: "Final legal information must be validated by the client before publication.",
    nl: "De definitieve juridische informatie moet vóór publicatie door de klant worden gevalideerd.",
    es: "La información legal definitiva deberá ser validada por el cliente antes de la publicación."
  },
  {
    fr: "Confidentialité",
    ar: "الخصوصية",
    en: "Privacy",
    nl: "Privacy",
    es: "Privacidad"
  },
  {
    fr: "Données personnelles",
    ar: "المعطيات الشخصية",
    en: "Personal data",
    nl: "Persoonsgegevens",
    es: "Datos personales"
  },
  {
    fr: "Conservation et droits",
    ar: "الحفظ والحقوق",
    en: "Retention and rights",
    nl: "Bewaring en rechten",
    es: "Conservación y derechos"
  },
  {
    fr: "Guide officiel",
    ar: "دليل رسمي",
    en: "Official guide",
    nl: "Officiële gids",
    es: "Guía oficial"
  },
  {
    fr: "Positionnement international",
    ar: "تموقع دولي",
    en: "International positioning",
    nl: "Internationale positionering",
    es: "Posicionamiento internacional"
  },
  {
    fr: "Le pont stratégique entre le Maroc et l’Europe.",
    ar: "الجسر الاستراتيجي بين المغرب وأوروبا.",
    en: "The strategic bridge between Morocco and Europe.",
    nl: "De strategische brug tussen Marokko en Europa.",
    es: "El puente estratégico entre Marruecos y Europa."
  },
  {
    fr: "MEC aide les entreprises à transformer la complexité transfrontalière en décisions structurées : finance, audit, comptabilité, fiscalité opérationnelle et coordination des partenaires.",
    ar: "تساعد MEC الشركات على تحويل التعقيد العابر للحدود إلى قرارات منظمة: مالية، تدقيق، محاسبة، جباية تشغيلية وتنسيق الشركاء.",
    en: "MEC helps companies transform cross-border complexity into structured decisions: finance, audit, accounting, operational taxation and partner coordination.",
    nl: "MEC helpt bedrijven grensoverschrijdende complexiteit om te zetten in gestructureerde beslissingen: financiën, audit, boekhouding, operationele fiscaliteit en partnercoördinatie.",
    es: "MEC ayuda a las empresas a transformar la complejidad transfronteriza en decisiones estructuradas: finanzas, auditoría, contabilidad, fiscalidad operativa y coordinación de socios."
  },
  {
    fr: "Structuration financière et administrative des projets transfrontaliers.",
    ar: "هيكلة مالية وإدارية للمشاريع العابرة للحدود.",
    en: "Financial and administrative structuring of cross-border projects.",
    nl: "Financiële en administratieve structurering van grensoverschrijdende projecten.",
    es: "Estructuración financiera y administrativa de proyectos transfronterizos."
  },
  {
    fr: "Lecture combinée des contraintes marocaines, européennes et sectorielles.",
    ar: "قراءة مشتركة للقيود المغربية والأوروبية والقطاعية.",
    en: "Combined reading of Moroccan, European and sector-specific constraints.",
    nl: "Gecombineerde lezing van Marokkaanse, Europese en sectorspecifieke beperkingen.",
    es: "Lectura combinada de restricciones marroquíes, europeas y sectoriales."
  },
  {
    fr: "Accompagnement discret des dirigeants, investisseurs et filiales.",
    ar: "مواكبة سرية للمسيرين والمستثمرين والفروع.",
    en: "Discreet support for executives, investors and subsidiaries.",
    nl: "Discrete begeleiding van bestuurders, investeerders en filialen.",
    es: "Acompañamiento discreto de directivos, inversores y filiales."
  },
  {
    fr: "Voir l’accompagnement international",
    ar: "عرض المواكبة الدولية",
    en: "View international support",
    nl: "Bekijk internationale begeleiding",
    es: "Ver el acompañamiento internacional"
  },
  {
    fr: "Morocco-Europe advisory",
    ar: "استشارات المغرب وأوروبا",
    en: "Morocco-Europe advisory",
    nl: "Marokko-Europa advies",
    es: "Asesoría Marruecos-Europa"
  },
  {
    fr: "Retrouvez des ressources utiles pour mieux comprendre les enjeux financiers, fiscaux et réglementaires au Maroc et en Europe.",
    ar: "اكتشفوا موارد مفيدة لفهم أفضل للتحديات المالية والضريبية والتنظيمية في المغرب وأوروبا.",
    en: "Find useful resources to better understand financial, tax and regulatory challenges in Morocco and Europe.",
    nl: "Vind nuttige bronnen om financiële, fiscale en regelgevende uitdagingen in Marokko en Europa beter te begrijpen.",
    es: "Encuentre recursos útiles para comprender mejor los retos financieros, fiscales y regulatorios en Marruecos y Europa."
  },
  {
    fr: "Loi de Finances Maroc 2026 : les mesures clés à connaître",
    ar: "قانون المالية المغربي 2026: الإجراءات الأساسية التي يجب معرفتها",
    en: "Morocco Finance Law 2026: key measures to know",
    nl: "Marokkaanse Financieringswet 2026: belangrijke maatregelen om te kennen",
    es: "Ley de Finanzas de Marruecos 2026: medidas clave que debe conocer"
  },
  {
    fr: "Téléchargez le document officiel et restez informé.",
    ar: "حمّلوا الوثيقة الرسمية وابقوا على اطلاع.",
    en: "Download the official document and stay informed.",
    nl: "Download het officiële document en blijf op de hoogte.",
    es: "Descargue el documento oficial y manténgase informado."
  },
  {
    fr: "Télécharger le guide 2026",
    ar: "تحميل دليل 2026",
    en: "Download the 2026 guide",
    nl: "Download de gids 2026",
    es: "Descargar la guía 2026"
  },
  {
    fr: "Recherche",
    ar: "بحث",
    en: "Search",
    nl: "Zoeken",
    es: "Buscar"
  },
  {
    fr: "Mot-clé",
    ar: "كلمة مفتاحية",
    en: "Keyword",
    nl: "Trefwoord",
    es: "Palabra clave"
  },
  {
    fr: "Catégories",
    ar: "الفئات",
    en: "Categories",
    nl: "Categorieën",
    es: "Categorías"
  },
  {
    fr: "Dernières ressources",
    ar: "آخر الموارد",
    en: "Latest resources",
    nl: "Laatste resources",
    es: "Últimos recursos"
  },
  {
    fr: "Fiscalité",
    ar: "الجباية",
    en: "Tax",
    nl: "Fiscaliteit",
    es: "Fiscalidad"
  },
  {
    fr: "Stratégie",
    ar: "الاستراتيجية",
    en: "Strategy",
    nl: "Strategie",
    es: "Estrategia"
  },
  {
    fr: "Pilotage financier",
    ar: "القيادة المالية",
    en: "Financial steering",
    nl: "Financiële sturing",
    es: "Pilotaje financiero"
  },
  {
    fr: "Croissance",
    ar: "النمو",
    en: "Growth",
    nl: "Groei",
    es: "Crecimiento"
  },
  {
    fr: "Conformité",
    ar: "الامتثال",
    en: "Compliance",
    nl: "Compliance",
    es: "Conformidad"
  },
  {
    fr: "Vue générale",
    ar: "نظرة عامة",
    en: "Overview",
    nl: "Overzicht",
    es: "Vista general"
  },
  {
    fr: "Contenu",
    ar: "المحتوى",
    en: "Content",
    nl: "Inhoud",
    es: "Contenido"
  },
  {
    fr: "Images",
    ar: "الصور",
    en: "Images",
    nl: "Afbeeldingen",
    es: "Imágenes"
  },
  {
    fr: "Tâches",
    ar: "المهام",
    en: "Tasks",
    nl: "Taken",
    es: "Tareas"
  },
  {
    fr: "Une interface de gestion prête pour organiser le contenu, les images, les clients et les actions importantes avant publication complète.",
    ar: "واجهة إدارة جاهزة لتنظيم المحتوى والصور والعملاء والإجراءات المهمة قبل النشر الكامل.",
    en: "A management interface ready to organize content, images, clients and key actions before full publication.",
    nl: "Een beheerinterface om inhoud, afbeeldingen, klanten en belangrijke acties vóór volledige publicatie te organiseren.",
    es: "Una interfaz de gestión lista para organizar contenido, imágenes, clientes y acciones clave antes de la publicación completa."
  },
  {
    fr: "Images clés",
    ar: "الصور الأساسية",
    en: "Key images",
    nl: "Belangrijke afbeeldingen",
    es: "Imágenes clave"
  },
  {
    fr: "Titre hero",
    ar: "عنوان البطل",
    en: "Hero title",
    nl: "Hero-titel",
    es: "Título hero"
  },
  {
    fr: "Texte hero",
    ar: "نص البطل",
    en: "Hero text",
    nl: "Hero-tekst",
    es: "Texto hero"
  },
  {
    fr: "Ces champs préparent les textes clés du site pour une future sauvegarde côté serveur.",
    ar: "هذه الحقول تجهز النصوص الأساسية للموقع من أجل حفظها لاحقاً على الخادم.",
    en: "These fields prepare the site’s key texts for future server-side saving.",
    nl: "Deze velden bereiden de kernteksten van de site voor op toekomstige serveropslag.",
    es: "Estos campos preparan los textos clave del sitio para una futura copia en servidor."
  },
  {
    fr: "Inventaire des visuels actuellement disponibles pour remplacer les sections du site.",
    ar: "جرد للصور المتوفرة حالياً لاستبدال أقسام الموقع.",
    en: "Inventory of visuals currently available to replace site sections.",
    nl: "Inventaris van beschikbare visuals om sitesecties te vervangen.",
    es: "Inventario de visuales disponibles para reemplazar secciones del sitio."
  },
  {
    fr: "Aperçu image du site MEC",
    ar: "معاينة صورة من موقع MEC",
    en: "MEC site image preview",
    nl: "Voorbeeld van MEC-siteafbeelding",
    es: "Vista previa de imagen del sitio MEC"
  },
  {
    fr: "Ajouter et suivre les clients importants du cabinet.",
    ar: "إضافة وتتبع العملاء المهمين للمكتب.",
    en: "Add and track the firm’s important clients.",
    nl: "Belangrijke klanten van het kantoor toevoegen en opvolgen.",
    es: "Añadir y seguir los clientes importantes del despacho."
  },
  {
    fr: "Nom",
    ar: "الاسم",
    en: "Name",
    nl: "Naam",
    es: "Nombre"
  },
  {
    fr: "Besoin",
    ar: "الحاجة",
    en: "Need",
    nl: "Behoefte",
    es: "Necesidad"
  },
  {
    fr: "Ajouter",
    ar: "إضافة",
    en: "Add",
    nl: "Toevoegen",
    es: "Añadir"
  },
  {
    fr: "Nouveau",
    ar: "جديد",
    en: "New",
    nl: "Nieuw",
    es: "Nuevo"
  },
  {
    fr: "À qualifier",
    ar: "في مرحلة التأهيل",
    en: "To qualify",
    nl: "Te kwalificeren",
    es: "Por cualificar"
  },
  {
    fr: "En suivi",
    ar: "قيد المتابعة",
    en: "In follow-up",
    nl: "In opvolging",
    es: "En seguimiento"
  },
  {
    fr: "Validé",
    ar: "تمت المصادقة",
    en: "Validated",
    nl: "Gevalideerd",
    es: "Validado"
  },
  {
    fr: "Organisation des actions avant et après déploiement.",
    ar: "تنظيم الإجراءات قبل وبعد النشر.",
    en: "Organizing actions before and after deployment.",
    nl: "Acties organiseren vóór en na deployment.",
    es: "Organización de acciones antes y después del despliegue."
  },
  {
    fr: "Valider les images finales",
    ar: "اعتماد الصور النهائية",
    en: "Validate final images",
    nl: "Definitieve afbeeldingen valideren",
    es: "Validar imágenes finales"
  },
  {
    fr: "Préparer les contenus multilingues",
    ar: "تحضير المحتوى متعدد اللغات",
    en: "Prepare multilingual content",
    nl: "Meertalige inhoud voorbereiden",
    es: "Preparar contenidos multilingües"
  },
  {
    fr: "Contrôler les formulaires de contact",
    ar: "مراجعة نماذج الاتصال",
    en: "Check contact forms",
    nl: "Contactformulieren controleren",
    es: "Controlar formularios de contacto"
  },
  {
    fr: "Note technique : cette première version fonctionne côté interface et conserve les modifications localement. Pour une administration complète en production, il faudra connecter une authentification et une base de données.",
    ar: "ملاحظة تقنية: هذه النسخة الأولى تعمل على مستوى الواجهة وتحفظ التعديلات محلياً. للحصول على إدارة كاملة في الإنتاج، يجب ربط المصادقة وقاعدة بيانات.",
    en: "Technical note: this first version works on the interface side and stores changes locally. For full production administration, authentication and a database must be connected.",
    nl: "Technische nota: deze eerste versie werkt aan de interfacezijde en bewaart wijzigingen lokaal. Voor volledig productiebeheer zijn authenticatie en een database nodig.",
    es: "Nota técnica: esta primera versión funciona en la interfaz y conserva los cambios localmente. Para una administración completa en producción, se deberá conectar autenticación y base de datos."
  }
];

const serviceEntries: TranslationMap[] = [
  {
    fr: "Nos Services",
    ar: "خدماتنا",
    en: "Our Services",
    nl: "Onze diensten",
    es: "Nuestros servicios"
  },
  {
    fr: "Des services de conseil fiables et performants pour accompagner votre développement au Maroc et en Europe.",
    ar: "خدمات استشارية موثوقة وفعالة لمواكبة تطوركم في المغرب وأوروبا.",
    en: "Reliable, high-performing advisory services to support your development in Morocco and Europe.",
    nl: "Betrouwbare en performante adviesdiensten om uw ontwikkeling in Marokko en Europa te ondersteunen.",
    es: "Servicios de consultoría fiables y eficaces para acompañar su desarrollo en Marruecos y Europa."
  },
  {
    fr: "Description du service",
    ar: "وصف الخدمة",
    en: "Service description",
    nl: "Dienstbeschrijving",
    es: "Descripción del servicio"
  },
  {
    fr: "Ce que nous faisons",
    ar: "ما نقوم به",
    en: "What we do",
    nl: "Wat wij doen",
    es: "Lo que hacemos"
  },
  {
    fr: "Pour qui ?",
    ar: "لمن؟",
    en: "For whom?",
    nl: "Voor wie?",
    es: "¿Para quién?"
  },
  {
    fr: "Avantages client",
    ar: "مزايا العميل",
    en: "Client benefits",
    nl: "Klantvoordelen",
    es: "Ventajas para el cliente"
  },
  {
    fr: "Besoin d’un avis structuré ?",
    ar: "هل تحتاجون إلى رأي منظم؟",
    en: "Need a structured opinion?",
    nl: "Behoefte aan een gestructureerd advies?",
    es: "¿Necesita una opinión estructurada?"
  },
  {
    fr: "Planifiez une première consultation pour cadrer vos priorités et identifier les prochaines étapes.",
    ar: "حددوا موعد استشارة أولى لتأطير أولوياتكم وتحديد الخطوات المقبلة.",
    en: "Schedule a first consultation to frame your priorities and identify the next steps.",
    nl: "Plan een eerste gesprek om uw prioriteiten te kaderen en de volgende stappen te bepalen.",
    es: "Planifique una primera consulta para encuadrar sus prioridades e identificar los próximos pasos."
  },
  {
    fr: "Autres services",
    ar: "خدمات أخرى",
    en: "Other services",
    nl: "Andere diensten",
    es: "Otros servicios"
  },
  {
    fr: "Stratégie financière, trésorerie, investissement et lecture claire des chiffres.",
    ar: "استراتيجية مالية، خزينة، استثمار وقراءة واضحة للأرقام.",
    en: "Financial strategy, cash flow, investment and clear reading of figures.",
    nl: "Financiële strategie, cashflow, investering en heldere lezing van cijfers.",
    es: "Estrategia financiera, tesorería, inversión y lectura clara de las cifras."
  },
  {
    fr: "Analyse financière",
    ar: "تحليل مالي",
    en: "Financial analysis",
    nl: "Financiële analyse",
    es: "Análisis financiero"
  },
  {
    fr: "Morocco Europe Consulting accompagne les entreprises dans la construction d'une stratégie financière claire, l'optimisation de la trésorerie et l'analyse des investissements afin d'améliorer la performance et la prise de décision.",
    ar: "تواكب Morocco Europe Consulting الشركات في بناء استراتيجية مالية واضحة، وتحسين الخزينة، وتحليل الاستثمارات من أجل تحسين الأداء واتخاذ القرار.",
    en: "Morocco Europe Consulting supports companies in building a clear financial strategy, optimizing cash flow and analyzing investments to improve performance and decision-making.",
    nl: "Morocco Europe Consulting ondersteunt bedrijven bij het opbouwen van een duidelijke financiële strategie, cashflowoptimalisatie en investeringsanalyse.",
    es: "Morocco Europe Consulting acompaña a las empresas en la construcción de una estrategia financiera clara, la optimización de tesorería y el análisis de inversiones."
  },
  {
    fr: "Prévisions de trésorerie",
    ar: "توقعات الخزينة",
    en: "Cash flow forecasts",
    nl: "Cashflowprognoses",
    es: "Previsiones de tesorería"
  },
  {
    fr: "Analyse d'investissement",
    ar: "تحليل الاستثمار",
    en: "Investment analysis",
    nl: "Investeringsanalyse",
    es: "Análisis de inversión"
  },
  {
    fr: "Tableaux de bord de pilotage",
    ar: "لوحات قيادة للتتبع",
    en: "Management dashboards",
    nl: "Sturingsdashboards",
    es: "Cuadros de mando"
  },
  {
    fr: "Dirigeants, PME, investisseurs et entreprises en phase de structuration ou de croissance.",
    ar: "مسيرون، مقاولات صغرى ومتوسطة، مستثمرون وشركات في مرحلة الهيكلة أو النمو.",
    en: "Executives, SMEs, investors and companies in structuring or growth phases.",
    nl: "Bestuurders, kmo's, investeerders en bedrijven in structurerings- of groeifase.",
    es: "Directivos, pymes, inversores y empresas en fase de estructuración o crecimiento."
  },
  {
    fr: "Décisions plus lisibles",
    ar: "قرارات أكثر وضوحاً",
    en: "Clearer decisions",
    nl: "Duidelijkere beslissingen",
    es: "Decisiones más claras"
  },
  {
    fr: "Trésorerie mieux maîtrisée",
    ar: "خزينة أكثر تحكماً",
    en: "Better controlled cash flow",
    nl: "Beter beheerste cashflow",
    es: "Tesorería mejor controlada"
  },
  {
    fr: "Priorités d'investissement clarifiées",
    ar: "أولويات استثمار أكثر وضوحاً",
    en: "Clarified investment priorities",
    nl: "Verduidelijkte investeringsprioriteiten",
    es: "Prioridades de inversión clarificadas"
  },
  {
    fr: "Comptabilité",
    ar: "المحاسبة",
    en: "Accounting",
    nl: "Boekhouding",
    es: "Contabilidad"
  },
  {
    fr: "MEC prend en charge la comptabilité quotidienne et les obligations déclaratives avec rigueur, confidentialité et une vision utile au pilotage de l'entreprise.",
    ar: "تتكفل MEC بالمحاسبة اليومية والالتزامات التصريحية بدقة وسرية ورؤية مفيدة لتوجيه الشركة.",
    en: "MEC manages daily accounting and filing obligations with rigor, confidentiality and a useful management perspective.",
    nl: "MEC verzorgt dagelijkse boekhouding en aangifteverplichtingen met zorgvuldigheid, vertrouwelijkheid en managementinzicht.",
    es: "MEC gestiona la contabilidad diaria y las obligaciones declarativas con rigor, confidencialidad y una visión útil para la dirección."
  },
  {
    fr: "Suivi des échéances",
    ar: "تتبع الآجال",
    en: "Deadline monitoring",
    nl: "Opvolging van termijnen",
    es: "Seguimiento de vencimientos"
  },
  {
    fr: "Entreprises marocaines, filiales internationales et structures qui veulent fiabiliser leurs chiffres.",
    ar: "شركات مغربية، فروع دولية وهياكل ترغب في تعزيز موثوقية أرقامها.",
    en: "Moroccan companies, international subsidiaries and organizations seeking reliable figures.",
    nl: "Marokkaanse ondernemingen, internationale filialen en structuren die hun cijfers willen betrouwbaarder maken.",
    es: "Empresas marroquíes, filiales internacionales y estructuras que desean fiabilizar sus cifras."
  },
  {
    fr: "Conformité suivie",
    ar: "امتثال متابع",
    en: "Tracked compliance",
    nl: "Opgevolgde compliance",
    es: "Conformidad supervisada"
  },
  {
    fr: "Structuration, gestion opérationnelle et pilotage de performance.",
    ar: "هيكلة، تدبير تشغيلي وقيادة الأداء.",
    en: "Structuring, operational management and performance steering.",
    nl: "Structurering, operationeel beheer en prestatiesturing.",
    es: "Estructuración, gestión operativa y pilotaje del rendimiento."
  },
  {
    fr: "Nous aidons les dirigeants à structurer l'organisation, suivre les indicateurs clés et mettre en place des méthodes de gestion adaptées à leur réalité opérationnelle.",
    ar: "نساعد المسيرين على هيكلة التنظيم، وتتبع المؤشرات الرئيسية، ووضع أساليب تدبير ملائمة لواقعهم التشغيلي.",
    en: "We help executives structure their organization, track key indicators and implement management methods adapted to their operational reality.",
    nl: "Wij helpen bestuurders hun organisatie te structureren, kernindicatoren te volgen en passende beheermethodes te implementeren.",
    es: "Ayudamos a los directivos a estructurar la organización, seguir indicadores clave e implementar métodos de gestión adaptados a su realidad operativa."
  },
  {
    fr: "Pilotage d'activité",
    ar: "قيادة النشاط",
    en: "Activity steering",
    nl: "Activiteitssturing",
    es: "Pilotaje de actividad"
  },
  {
    fr: "Entreprises qui souhaitent professionnaliser leur gestion et gagner en visibilité.",
    ar: "شركات ترغب في احتراف تدبيرها والحصول على رؤية أوضح.",
    en: "Companies wishing to professionalize management and gain visibility.",
    nl: "Bedrijven die hun beheer willen professionaliseren en zichtbaarheid willen winnen.",
    es: "Empresas que desean profesionalizar su gestión y ganar visibilidad."
  },
  {
    fr: "Structuration financière, fiscale et administrative entre le Maroc et l'Europe.",
    ar: "هيكلة مالية وضريبية وإدارية بين المغرب وأوروبا.",
    en: "Financial, tax and administrative structuring between Morocco and Europe.",
    nl: "Financiële, fiscale en administratieve structurering tussen Marokko en Europa.",
    es: "Estructuración financiera, fiscal y administrativa entre Marruecos y Europa."
  },
  {
    fr: "MEC accompagne les projets d'implantation entre le Maroc et l'Europe, de l'analyse réglementaire à la structuration financière et juridique.",
    ar: "تواكب MEC مشاريع التأسيس بين المغرب وأوروبا، من التحليل التنظيمي إلى الهيكلة المالية والقانونية.",
    en: "MEC supports establishment projects between Morocco and Europe, from regulatory analysis to financial and legal structuring.",
    nl: "MEC begeleidt vestigingsprojecten tussen Marokko en Europa, van regelgevingsanalyse tot financiële en juridische structurering.",
    es: "MEC acompaña proyectos de implantación entre Marruecos y Europa, desde el análisis regulatorio hasta la estructuración financiera y jurídica."
  },
  {
    fr: "Analyse de faisabilité",
    ar: "تحليل الجدوى",
    en: "Feasibility analysis",
    nl: "Haalbaarheidsanalyse",
    es: "Análisis de viabilidad"
  },
  {
    fr: "Structuration transfrontalière",
    ar: "هيكلة عابرة للحدود",
    en: "Cross-border structuring",
    nl: "Grensoverschrijdende structurering",
    es: "Estructuración transfronteriza"
  },
  {
    fr: "Coordination réglementaire",
    ar: "تنسيق تنظيمي",
    en: "Regulatory coordination",
    nl: "Regelgevende coördinatie",
    es: "Coordinación regulatoria"
  },
  {
    fr: "Préparation administrative",
    ar: "تحضير إداري",
    en: "Administrative preparation",
    nl: "Administratieve voorbereiding",
    es: "Preparación administrativa"
  },
  {
    fr: "Entreprises marocaines et européennes qui se développent de part et d'autre de la Méditerranée.",
    ar: "شركات مغربية وأوروبية تتوسع على ضفتي المتوسط.",
    en: "Moroccan and European companies developing on both sides of the Mediterranean.",
    nl: "Marokkaanse en Europese bedrijven die zich aan beide zijden van de Middellandse Zee ontwikkelen.",
    es: "Empresas marroquíes y europeas que se desarrollan a ambos lados del Mediterráneo."
  },
  {
    fr: "Audit & Contrôle",
    ar: "التدقيق والمراقبة",
    en: "Audit & Control",
    nl: "Audit & controle",
    es: "Auditoría y control"
  },
  {
    fr: "Audit interne, contrôle de gestion, risques et tableaux de bord financiers.",
    ar: "تدقيق داخلي، مراقبة التدبير، مخاطر ولوحات قيادة مالية.",
    en: "Internal audit, management control, risks and financial dashboards.",
    nl: "Interne audit, managementcontrole, risico's en financiële dashboards.",
    es: "Auditoría interna, control de gestión, riesgos y cuadros financieros."
  },
  {
    fr: "Nous mettons en place des dispositifs de contrôle pour sécuriser les opérations, fiabiliser les données et renforcer la gouvernance financière.",
    ar: "نضع آليات مراقبة لتأمين العمليات، وتعزيز موثوقية البيانات، وتقوية الحكامة المالية.",
    en: "We implement control systems to secure operations, make data reliable and strengthen financial governance.",
    nl: "Wij implementeren controlesystemen om operaties te beveiligen, gegevens betrouwbaarder te maken en financiële governance te versterken.",
    es: "Implementamos dispositivos de control para asegurar operaciones, fiabilizar datos y reforzar la gobernanza financiera."
  },
  {
    fr: "Contrôle de gestion",
    ar: "مراقبة التدبير",
    en: "Management control",
    nl: "Managementcontrole",
    es: "Control de gestión"
  },
  {
    fr: "Directions qui veulent sécuriser leurs opérations et améliorer la qualité du pilotage.",
    ar: "إدارات ترغب في تأمين عملياتها وتحسين جودة القيادة.",
    en: "Management teams seeking to secure operations and improve steering quality.",
    nl: "Directies die hun operaties willen beveiligen en de kwaliteit van sturing willen verbeteren.",
    es: "Direcciones que desean asegurar sus operaciones y mejorar la calidad del pilotaje."
  },
  {
    fr: "Accompagnement Personnalisé",
    ar: "مواكبة مخصصة",
    en: "Personalized Support",
    nl: "Persoonlijke begeleiding",
    es: "Acompañamiento personalizado"
  },
  {
    fr: "Un interlocuteur dédié à chaque étape de votre développement.",
    ar: "مخاطب مخصص في كل مرحلة من تطوركم.",
    en: "A dedicated contact at every stage of your development.",
    nl: "Een vaste contactpersoon in elke fase van uw ontwikkeling.",
    es: "Un interlocutor dedicado en cada etapa de su desarrollo."
  },
  {
    fr: "Chaque mission MEC s'appuie sur une écoute précise des enjeux du client et un accompagnement progressif, lisible et confidentiel.",
    ar: "تعتمد كل مهمة لدى MEC على إنصات دقيق لتحديات العميل ومواكبة تدريجية وواضحة وسرية.",
    en: "Each MEC mission is based on precise listening to client challenges and progressive, clear and confidential support.",
    nl: "Elke MEC-opdracht steunt op nauwkeurig luisteren naar klantuitdagingen en progressieve, duidelijke en vertrouwelijke begeleiding.",
    es: "Cada misión de MEC se apoya en una escucha precisa de los retos del cliente y un acompañamiento progresivo, claro y confidencial."
  },
  {
    fr: "Plan d'action priorisé",
    ar: "خطة عمل ذات أولويات",
    en: "Prioritized action plan",
    nl: "Geprioriteerd actieplan",
    es: "Plan de acción priorizado"
  },
  {
    fr: "Suivi régulier",
    ar: "متابعة منتظمة",
    en: "Regular follow-up",
    nl: "Regelmatige opvolging",
    es: "Seguimiento regular"
  },
  {
    fr: "Coordination avec vos équipes",
    ar: "تنسيق مع فرقكم",
    en: "Coordination with your teams",
    nl: "Coördinatie met uw teams",
    es: "Coordinación con sus equipos"
  },
  {
    fr: "Dirigeants qui veulent un conseil proche, stable et adapté à leurs décisions.",
    ar: "مسيرون يريدون استشارة قريبة ومستقرة وملائمة لقراراتهم.",
    en: "Executives seeking close, stable advice adapted to their decisions.",
    nl: "Bestuurders die nabij, stabiel advies willen dat past bij hun beslissingen.",
    es: "Directivos que buscan un asesoramiento cercano, estable y adaptado a sus decisiones."
  },
  {
    fr: "Notre connaissance des échanges Maroc-Europe permet d'accompagner les entreprises dans leurs flux commerciaux, leurs obligations et leurs arbitrages financiers.",
    ar: "تتيح لنا معرفتنا بالمبادلات بين المغرب وأوروبا مواكبة الشركات في تدفقاتها التجارية والتزاماتها وقراراتها المالية.",
    en: "Our knowledge of Morocco-Europe exchanges enables us to support companies in commercial flows, obligations and financial arbitrage.",
    nl: "Onze kennis van Marokko-Europa uitwisselingen stelt ons in staat bedrijven te ondersteunen bij handelsstromen, verplichtingen en financiële keuzes.",
    es: "Nuestro conocimiento de los intercambios Marruecos-Europa nos permite acompañar a empresas en flujos comerciales, obligaciones y arbitrajes financieros."
  },
  {
    fr: "Suivi des opérations internationales",
    ar: "تتبع العمليات الدولية",
    en: "Monitoring international operations",
    nl: "Opvolging van internationale operaties",
    es: "Seguimiento de operaciones internacionales"
  },
  {
    fr: "Importateurs, exportateurs et entreprises qui opèrent entre le Maroc et l'Europe.",
    ar: "مستوردون ومصدرون وشركات تعمل بين المغرب وأوروبا.",
    en: "Importers, exporters and companies operating between Morocco and Europe.",
    nl: "Importeurs, exporteurs en bedrijven die tussen Marokko en Europa opereren.",
    es: "Importadores, exportadores y empresas que operan entre Marruecos y Europa."
  }
];

const completionEntries: TranslationMap[] = [
  {
    fr: "Des repères utiles pour vos décisions",
    ar: "معالم مفيدة لقراراتكم",
    en: "Useful reference points for your decisions",
    nl: "Nuttige ijkpunten voor uw beslissingen",
    es: "Referencias útiles para sus decisiones"
  },
  {
    fr: "Une base éditoriale prête à évoluer avec les publications validées par Morocco Europe Consulting.",
    ar: "قاعدة تحريرية جاهزة للتطور مع المنشورات المعتمدة من Morocco Europe Consulting.",
    en: "An editorial base ready to evolve with publications validated by Morocco Europe Consulting.",
    nl: "Een redactionele basis die kan meegroeien met publicaties gevalideerd door Morocco Europe Consulting.",
    es: "Una base editorial lista para evolucionar con publicaciones validadas por Morocco Europe Consulting."
  },
  {
    fr: "Fiscalité",
    ar: "الجباية",
    en: "Tax",
    nl: "Fiscaliteit",
    es: "Fiscalidad"
  },
  {
    fr: "Audit",
    ar: "التدقيق",
    en: "Audit",
    nl: "Audit",
    es: "Auditoría"
  },
  {
    fr: "Pilotage",
    ar: "القيادة",
    en: "Steering",
    nl: "Sturing",
    es: "Pilotaje"
  },
  {
    fr: "Guide",
    ar: "دليل",
    en: "Guide",
    nl: "Gids",
    es: "Guía"
  },
  {
    fr: "Stratégie",
    ar: "الاستراتيجية",
    en: "Strategy",
    nl: "Strategie",
    es: "Estrategia"
  },
  {
    fr: "À préparer",
    ar: "قيد التحضير",
    en: "To prepare",
    nl: "Voor te bereiden",
    es: "Por preparar"
  },
  {
    fr: "Fiscalité - 2026",
    ar: "الجباية - 2026",
    en: "Tax - 2026",
    nl: "Fiscaliteit - 2026",
    es: "Fiscalidad - 2026"
  },
  {
    fr: "Stratégie - À préparer",
    ar: "الاستراتيجية - قيد التحضير",
    en: "Strategy - To prepare",
    nl: "Strategie - Voor te bereiden",
    es: "Estrategia - Por preparar"
  },
  {
    fr: "Pilotage - À préparer",
    ar: "القيادة - قيد التحضير",
    en: "Steering - To prepare",
    nl: "Sturing - Voor te bereiden",
    es: "Pilotaje - Por preparar"
  },
  {
    fr: "Audit - Guide",
    ar: "التدقيق - دليل",
    en: "Audit - Guide",
    nl: "Audit - Gids",
    es: "Auditoría - Guía"
  },
  {
    fr: "Loi de Finances Maroc 2026 : les mesures clés à connaître",
    ar: "قانون المالية المغربي 2026: الإجراءات الأساسية التي يجب معرفتها",
    en: "Morocco Finance Law 2026: key measures to know",
    nl: "Marokkaanse Financieringswet 2026: belangrijke maatregelen om te kennen",
    es: "Ley de Finanzas de Marruecos 2026: medidas clave que debe conocer"
  },
  {
    fr: "Un accès direct aux ressources officielles pour suivre les nouvelles dispositions financières.",
    ar: "ولوج مباشر إلى الموارد الرسمية لمتابعة المستجدات المالية.",
    en: "Direct access to official resources to follow new financial provisions.",
    nl: "Directe toegang tot officiële bronnen om nieuwe financiële bepalingen te volgen.",
    es: "Acceso directo a recursos oficiales para seguir las nuevas disposiciones financieras."
  },
  {
    fr: "Structurer sa croissance entre le Maroc et l’Europe",
    ar: "هيكلة النمو بين المغرب وأوروبا",
    en: "Structure growth between Morocco and Europe",
    nl: "Groei structureren tussen Marokko en Europa",
    es: "Estructurar el crecimiento entre Marruecos y Europa"
  },
  {
    fr: "Un futur guide MEC pour cadrer les priorités financières, juridiques et opérationnelles.",
    ar: "دليل MEC مستقبلي لتأطير الأولويات المالية والقانونية والتشغيلية.",
    en: "A future MEC guide to frame financial, legal and operational priorities.",
    nl: "Een toekomstige MEC-gids om financiële, juridische en operationele prioriteiten te kaderen.",
    es: "Una futura guía MEC para encuadrar prioridades financieras, jurídicas y operativas."
  },
  {
    fr: "Les indicateurs financiers à suivre avant une expansion",
    ar: "المؤشرات المالية التي يجب تتبعها قبل التوسع",
    en: "Financial indicators to track before expansion",
    nl: "Financiële indicatoren om te volgen vóór uitbreiding",
    es: "Indicadores financieros que seguir antes de una expansión"
  },
  {
    fr: "Une ressource éditoriale prévue pour aider les dirigeants à lire leurs chiffres avec précision.",
    ar: "مورد تحريري مخصص لمساعدة المسيرين على قراءة أرقامهم بدقة.",
    en: "An editorial resource planned to help executives read their figures with precision.",
    nl: "Een redactionele bron om bestuurders te helpen hun cijfers nauwkeurig te lezen.",
    es: "Un recurso editorial previsto para ayudar a los directivos a leer sus cifras con precisión."
  },
  {
    fr: "Préparer un audit interne sans ralentir l’activité",
    ar: "تحضير تدقيق داخلي دون إبطاء النشاط",
    en: "Prepare an internal audit without slowing activity",
    nl: "Een interne audit voorbereiden zonder de activiteit te vertragen",
    es: "Preparar una auditoría interna sin ralentizar la actividad"
  },
  {
    fr: "Les points de contrôle essentiels pour sécuriser vos données, vos flux et vos obligations.",
    ar: "نقاط المراقبة الأساسية لتأمين بياناتكم وتدفقاتكم والتزاماتكم.",
    en: "Essential control points to secure your data, flows and obligations.",
    nl: "Essentiële controlepunten om uw gegevens, stromen en verplichtingen te beveiligen.",
    es: "Puntos de control esenciales para asegurar sus datos, flujos y obligaciones."
  },
  {
    fr: "Domaines d’intervention",
    ar: "مجالات التدخل",
    en: "Areas of intervention",
    nl: "Interventiedomeinen",
    es: "Ámbitos de intervención"
  },
  {
    fr: "Des cartes de mission lisibles pour décider plus vite",
    ar: "خرائط مهمة واضحة لاتخاذ القرار بسرعة أكبر",
    en: "Clear mission maps to decide faster",
    nl: "Heldere opdrachtkaarten om sneller te beslissen",
    es: "Mapas de misión claros para decidir más rápido"
  },
  {
    fr: "Chaque service MEC combine une lecture financière, une exigence réglementaire et une exécution opérationnelle.",
    ar: "كل خدمة من MEC تجمع بين قراءة مالية، ومتطلبات تنظيمية، وتنفيذ عملي.",
    en: "Each MEC service combines financial insight, regulatory discipline and operational execution.",
    nl: "Elke MEC-dienst combineert financieel inzicht, regelgevende discipline en operationele uitvoering.",
    es: "Cada servicio MEC combina lectura financiera, exigencia regulatoria y ejecución operativa."
  },
  {
    fr: "Accompagnement des flux internationaux, obligations et arbitrages financiers.",
    ar: "مواكبة التدفقات الدولية والالتزامات والقرارات المالية.",
    en: "Support for international flows, obligations and financial arbitrage.",
    nl: "Begeleiding van internationale stromen, verplichtingen en financiële keuzes.",
    es: "Acompañamiento de flujos internacionales, obligaciones y arbitrajes financieros."
  },
  {
    fr: "Tenue comptable, bilans, liasses fiscales, reporting et suivi des obligations.",
    ar: "مسك المحاسبة، القوائم المالية، التصريحات الضريبية، التقارير وتتبع الالتزامات.",
    en: "Bookkeeping, financial statements, tax returns, reporting and obligation monitoring.",
    nl: "Boekhouding, jaarrekeningen, fiscale aangiften, rapportage en opvolging van verplichtingen.",
    es: "Contabilidad, balances, declaraciones fiscales, reporting y seguimiento de obligaciones."
  },
  {
    fr: "Diagnostic financier",
    ar: "تشخيص مالي",
    en: "Financial diagnosis",
    nl: "Financiële diagnose",
    es: "Diagnóstico financiero"
  },
  {
    fr: "Audit interne",
    ar: "تدقيق داخلي",
    en: "Internal audit",
    nl: "Interne audit",
    es: "Auditoría interna"
  },
  {
    fr: "Conseil fiscal et financier",
    ar: "استشارة ضريبية ومالية",
    en: "Tax and financial advisory",
    nl: "Fiscaal en financieel advies",
    es: "Asesoría fiscal y financiera"
  },
  {
    fr: "Téléphone",
    ar: "الهاتف",
    en: "Phone",
    nl: "Telefoon",
    es: "Teléfono"
  },
  {
    fr: "Adresse",
    ar: "العنوان",
    en: "Address",
    nl: "Adres",
    es: "Dirección"
  },
  {
    fr: "Horaires",
    ar: "ساعات العمل",
    en: "Opening hours",
    nl: "Openingstijden",
    es: "Horarios"
  },
  {
    fr: "Tanger, Maroc",
    ar: "طنجة، المغرب",
    en: "Tangier, Morocco",
    nl: "Tanger, Marokko",
    es: "Tánger, Marruecos"
  },
  {
    fr: "Tags",
    ar: "الوسوم",
    en: "Tags",
    nl: "Tags",
    es: "Etiquetas"
  },
  {
    fr: "Europe",
    ar: "أوروبا",
    en: "Europe",
    nl: "Europa",
    es: "Europa"
  },
  {
    fr: "Maroc",
    ar: "المغرب",
    en: "Morocco",
    nl: "Marokko",
    es: "Marruecos"
  },
  {
    fr: "Finance",
    ar: "المالية",
    en: "Finance",
    nl: "Financiën",
    es: "Finanzas"
  },
  {
    fr: "Lun - Ven : 9h00 - 18h00",
    ar: "الاثنين - الجمعة: 9:00 - 18:00",
    en: "Mon - Fri: 9:00 - 18:00",
    nl: "Ma - Vr: 9:00 - 18:00",
    es: "Lun - Vie: 9:00 - 18:00"
  },
  {
    fr: "1er étage N3, Rue Farabi, Résidence N18 - Tanger, Maroc",
    ar: "الطابق الأول رقم 3، شارع الفارابي، إقامة N18 - طنجة، المغرب",
    en: "1st floor N3, Rue Farabi, Résidence N18 - Tangier, Morocco",
    nl: "1e verdieping N3, Rue Farabi, Résidence N18 - Tanger, Marokko",
    es: "1.er piso N3, Rue Farabi, Résidence N18 - Tánger, Marruecos"
  },
  {
    fr: "Bloc adresse prêt à recevoir une carte intégrée lorsque la fiche Google Maps officielle est confirmée.",
    ar: "منطقة العنوان جاهزة لاستقبال خريطة مدمجة عند تأكيد بطاقة Google Maps الرسمية.",
    en: "Address block ready to receive an embedded map once the official Google Maps listing is confirmed.",
    nl: "Adresblok klaar voor een geïntegreerde kaart zodra de officiële Google Maps-vermelding is bevestigd.",
    es: "Bloque de dirección listo para recibir un mapa integrado cuando se confirme la ficha oficial de Google Maps."
  },
  {
    fr: "Vous recherchez un accompagnement fiable en conseil financier, comptabilité ou gestion d’entreprise entre le Maroc et l’Europe ? Notre équipe est disponible pour une première consultation gratuite sans engagement.",
    ar: "هل تبحثون عن مواكبة موثوقة في الاستشارة المالية أو المحاسبة أو تدبير الشركات بين المغرب وأوروبا؟ فريقنا متاح لاستشارة أولى مجانية بدون التزام.",
    en: "Looking for reliable support in financial advisory, accounting or business management between Morocco and Europe? Our team is available for a first free, no-obligation consultation.",
    nl: "Zoekt u betrouwbare ondersteuning in financieel advies, boekhouding of bedrijfsbeheer tussen Marokko en Europa? Ons team is beschikbaar voor een eerste gratis gesprek zonder verplichting.",
    es: "¿Busca un acompañamiento fiable en asesoría financiera, contabilidad o gestión empresarial entre Marruecos y Europa? Nuestro equipo está disponible para una primera consulta gratuita sin compromiso."
  },
  {
    fr: "J’accepte que mes données personnelles soient collectées et traitées conformément à la loi n°09-08 relative à la protection des personnes physiques à l’égard du traitement des données à caractère personnel. Les informations recueillies sont utilisées uniquement pour répondre à ma demande.",
    ar: "أوافق على جمع ومعالجة بياناتي الشخصية وفقاً للقانون رقم 09-08 المتعلق بحماية الأشخاص الذاتيين تجاه معالجة المعطيات ذات الطابع الشخصي. تُستخدم المعلومات المجمعة فقط للرد على طلبي.",
    en: "I agree that my personal data may be collected and processed in accordance with Law No. 09-08 on the protection of individuals with regard to personal data processing. The information collected is used only to respond to my request.",
    nl: "Ik ga ermee akkoord dat mijn persoonsgegevens worden verzameld en verwerkt overeenkomstig wet nr. 09-08 betreffende de bescherming van personen bij de verwerking van persoonsgegevens. De verzamelde informatie wordt uitsluitend gebruikt om mijn verzoek te beantwoorden.",
    es: "Acepto que mis datos personales sean recopilados y tratados conforme a la Ley n.º 09-08 relativa a la protección de las personas físicas respecto al tratamiento de datos personales. La información recopilada se utiliza únicamente para responder a mi solicitud."
  }
];

export const translations = [...entries, ...extendedEntries, ...finalEntries, ...serviceEntries, ...completionEntries, ...pageEntries];
