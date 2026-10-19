import type { HrefLang } from "@/lib/seo";

/** Interface strings of the landing-page template, per language. */
export type LandingLabels = {
  home: string;
  breadcrumb: string;
  ctaPrimary: string;
  ctaWhatsapp: string;
  methodEyebrow: string;
  methodTitle: string;
  step: string;
  faqEyebrow: string;
  faqTitle: string;
  faqLead: string;
  relatedEyebrow: string;
  discover: string;
  ctaBandEyebrow: string;
  ctaBandTitle: string;
  ctaBandText: string;
  ctaEmail: string;
  languageName: string;
};

export const landingLabels: Record<HrefLang, LandingLabels> = {
  fr: {
    home: "Accueil",
    breadcrumb: "Fil d’Ariane",
    ctaPrimary: "Demander un diagnostic",
    ctaWhatsapp: "Échanger sur WhatsApp",
    methodEyebrow: "Méthode MEC",
    methodTitle: "Un parcours clair, de l’analyse au pilotage",
    step: "Étape",
    faqEyebrow: "Questions fréquentes",
    faqTitle: "Les réponses avant de démarrer",
    faqLead: "Des repères clairs pour préparer votre premier échange avec notre équipe.",
    relatedEyebrow: "Expertises liées",
    discover: "Découvrir",
    ctaBandEyebrow: "Première consultation",
    ctaBandTitle: "Parlons de votre projet.",
    ctaBandText: "Décrivez votre situation : un premier échange confidentiel permet de cadrer vos priorités et les prochaines étapes.",
    ctaEmail: "Écrire un e-mail",
    languageName: "Français"
  },
  nl: {
    home: "Home",
    breadcrumb: "Kruimelpad",
    ctaPrimary: "Contactformulier",
    ctaWhatsapp: "Stuur ons een bericht op WhatsApp",
    methodEyebrow: "Methode MEC",
    methodTitle: "Een duidelijk traject, van analyse tot opvolging",
    step: "Stap",
    faqEyebrow: "Veelgestelde vragen",
    faqTitle: "De antwoorden voor je start",
    faqLead: "Duidelijke houvast om je eerste gesprek met ons team voor te bereiden.",
    relatedEyebrow: "Meer over MEC",
    discover: "Bekijk",
    ctaBandEyebrow: "Eerste gesprek",
    ctaBandTitle: "Vertel ons over je project.",
    ctaBandText: "Beschrijf je situatie. Een eerste, vrijblijvend en vertrouwelijk gesprek zet je prioriteiten en volgende stappen op een rij.",
    ctaEmail: "Stuur een e-mail",
    languageName: "Nederlands"
  },
  en: {
    home: "Home",
    breadcrumb: "Breadcrumb",
    ctaPrimary: "Contact form",
    ctaWhatsapp: "Message us on WhatsApp",
    methodEyebrow: "The MEC method",
    methodTitle: "A clear path, from analysis to follow-up",
    step: "Step",
    faqEyebrow: "Frequently asked questions",
    faqTitle: "Answers before you start",
    faqLead: "Clear guidance to prepare your first conversation with our team.",
    relatedEyebrow: "More from MEC",
    discover: "Read more",
    ctaBandEyebrow: "First consultation",
    ctaBandTitle: "Tell us about your project.",
    ctaBandText: "Describe your situation. A first, free and confidential conversation sets your priorities and next steps.",
    ctaEmail: "Send an email",
    languageName: "English"
  },
  es: {
    home: "Inicio",
    breadcrumb: "Ruta de navegación",
    ctaPrimary: "Formulario de contacto",
    ctaWhatsapp: "Escríbanos por WhatsApp",
    methodEyebrow: "Método MEC",
    methodTitle: "Un recorrido claro, del análisis al seguimiento",
    step: "Etapa",
    faqEyebrow: "Preguntas frecuentes",
    faqTitle: "Las respuestas antes de empezar",
    faqLead: "Referencias claras para preparar su primera conversación con nuestro equipo.",
    relatedEyebrow: "Más sobre MEC",
    discover: "Ver más",
    ctaBandEyebrow: "Primera consulta",
    ctaBandTitle: "Hablemos de su proyecto.",
    ctaBandText: "Describa su situación. Una primera conversación gratuita y confidencial define sus prioridades y los próximos pasos.",
    ctaEmail: "Enviar un correo",
    languageName: "Español"
  },
  ar: {
    home: "الرئيسية",
    breadcrumb: "مسار التصفح",
    ctaPrimary: "استمارة الاتصال",
    ctaWhatsapp: "راسلنا عبر واتساب",
    methodEyebrow: "منهجية MEC",
    methodTitle: "مسار واضح، من التحليل إلى التتبّع",
    step: "المرحلة",
    faqEyebrow: "أسئلة شائعة",
    faqTitle: "أجوبة قبل الانطلاق",
    faqLead: "معطيات واضحة لتحضير لقائك الأول مع فريقنا.",
    relatedEyebrow: "المزيد عن MEC",
    discover: "اكتشف",
    ctaBandEyebrow: "الاستشارة الأولى",
    ctaBandTitle: "حدّثنا عن مشروعك.",
    ctaBandText: "صف وضعيتك. لقاء أول مجاني وسرّي يحدد أولوياتك والخطوات المقبلة.",
    ctaEmail: "راسلنا بالبريد الإلكتروني",
    languageName: "العربية"
  }
};
