import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  Globe2,
  Sparkles,
  Send,
  MessageSquare,
  Calendar,
  ShieldCheck,
  MonitorSmartphone,
  PhoneCall,
  FileText,
  Rocket,
  Clock,
} from 'lucide-react';
import { QRCodeSVG } from 'qrcode.react';
import { SEOHelper } from '../components/SEOHelper';
import { VCFDownloadButton } from '../components/VCFDownloadButton';
import { SITE_URL, PERSONAL_INFO } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';
import { Language } from '../types';

type IndustryKey = 'restaurant' | 'salon' | 'clinic' | 'retail';

interface Industry {
  label: string;
  title: string;
  problem: string;
  solution: string;
  roi: string;
}

interface ServicesCopy {
  badge: string;
  title: string;
  subtitle: string;
  ctaWhatsapp: string;
  ctaQuote: string;
  notice: string;
  regionsTitle: string;
  regions: string[];
  industriesTitle: string;
  industriesSub: string;
  challenge: string;
  impact: string;
  industries: Record<IndustryKey, Industry>;
  offers: Array<{ title: string; desc: string }>;
  stepsTitle: string;
  steps: Array<{ title: string; desc: string }>;
  pricingTitle: string;
  pricingDesc: string;
  pricingBtn: string;
  qrBadge: string;
  qrTitle: string;
  qrDesc: string;
}

const COPY: Record<Language, ServicesCopy> = {
  en: {
    badge: 'Software for businesses · Worldwide',
    title: 'Digital Solutions for Growing Businesses — Worldwide',
    subtitle:
      'AI review replies, online booking and fast, modern websites for restaurants, salons, clinics and shops — delivered remotely to clients across Europe, the USA and Uzbekistan.',
    ctaWhatsapp: 'WhatsApp Me',
    ctaQuote: 'Request a Free Quote',
    notice: 'Based in Tashkent, Uzbekistan (UTC+5). Remote meetings via Zoom or Google Meet — replies within 24 hours.',
    regionsTitle: 'Where I work',
    regions: ['Europe', 'United States', 'Uzbekistan & Central Asia', 'Remote — anywhere'],
    industriesTitle: 'Tailored Solutions by Industry',
    industriesSub: 'Select your business type to see the problem it solves and the expected impact:',
    challenge: 'Challenge addressed:',
    impact: 'Expected business impact',
    industries: {
      restaurant: {
        label: 'Restaurants & Cafés',
        title: 'Restaurants & Cafés',
        problem: 'Dozens of Google reviews a week in several languages, and no time to answer them all.',
        solution: 'Mehrly drafts a personal, on-brand reply to every review in the guest’s language.',
        roi: 'Reply time from 48 hours to under 30 seconds',
      },
      salon: {
        label: 'Barbershops & Salons',
        title: 'Barbershops & Beauty Salons',
        problem: 'Phone interruptions during appointments and revenue lost to last-minute no-shows.',
        solution: '24/7 online booking with automatic WhatsApp and email reminders.',
        roi: 'Up to 80% fewer no-shows',
      },
      clinic: {
        label: 'Clinics',
        title: 'Dental & Private Clinics',
        problem: 'Staff spend hours confirming appointments and answering the same questions.',
        solution: 'Automated appointment workflow with patient email/SMS notifications.',
        roi: 'Saves 10+ hours of admin work every week',
      },
      retail: {
        label: 'Shops & Boutiques',
        title: 'Local Shops & Boutiques',
        problem: 'Low visibility on Google next to large chains and online marketplaces.',
        solution: 'A fast website, local SEO and AI review replies that keep your Google profile active.',
        roi: 'More visibility in local search',
      },
    },
    offers: [
      {
        title: 'AI Google Review Replies (Mehrly)',
        desc: 'Every review gets a polite, personal reply in the guest’s language — good ones in one click, bad ones always wait for you.',
      },
      {
        title: 'Smart Booking & Appointments',
        desc: 'Clients book 24/7 on the web or WhatsApp, with automatic reminders that cut no-shows.',
      },
      {
        title: 'Websites & Landing Pages',
        desc: 'Fast, mobile-first, multilingual websites with SEO built in — like this portfolio.',
      },
    ],
    stepsTitle: 'How we work together',
    steps: [
      { title: 'Free 15-min call', desc: 'Tell me about your business and what slows you down.' },
      { title: 'Clear quote in 24h', desc: 'A fixed scope and price, with no hidden monthly fees.' },
      { title: 'Build & launch', desc: 'I build, test and launch it, then support you after go-live.' },
    ],
    pricingTitle: 'Pricing',
    pricingDesc:
      'Every business is different, so every project gets its own fixed quote — fair for small businesses, with no long contracts. Ask for a free quote and get an answer within 24 hours.',
    pricingBtn: 'Get My Free Quote',
    qrBadge: 'Printable business card QR code',
    qrTitle: 'Share This Page Instantly',
    qrDesc: 'This QR code opens this page. Print it on your business card or show it on your phone — clients scan it and see the services right away.',
  },
  fr: {
    badge: 'Logiciels pour entreprises · Monde entier',
    title: 'Solutions digitales pour entreprises en croissance — partout dans le monde',
    subtitle:
      'Réponses IA aux avis, réservation en ligne et sites web rapides pour restaurants, salons, cliniques et commerces — livrés à distance en Europe, aux États-Unis et en Ouzbékistan.',
    ctaWhatsapp: 'M’écrire sur WhatsApp',
    ctaQuote: 'Demander un devis gratuit',
    notice: 'Basé à Tachkent, Ouzbékistan (UTC+5). Réunions à distance via Zoom ou Google Meet — réponse sous 24 heures.',
    regionsTitle: 'Où je travaille',
    regions: ['Europe', 'États-Unis', 'Ouzbékistan & Asie centrale', 'À distance — partout'],
    industriesTitle: 'Solutions adaptées à votre secteur',
    industriesSub: 'Choisissez votre type d’activité pour voir le problème résolu et l’impact attendu :',
    challenge: 'Problème résolu :',
    impact: 'Impact attendu',
    industries: {
      restaurant: {
        label: 'Restaurants & cafés',
        title: 'Restaurants & cafés',
        problem: 'Des dizaines d’avis Google par semaine, en plusieurs langues, et pas le temps d’y répondre.',
        solution: 'Mehrly rédige une réponse personnalisée à chaque avis, dans la langue du client.',
        roi: 'Délai de réponse : de 48 h à moins de 30 secondes',
      },
      salon: {
        label: 'Barbiers & salons',
        title: 'Barbiers & salons de beauté',
        problem: 'Appels pendant les rendez-vous et chiffre d’affaires perdu à cause des absences.',
        solution: 'Réservation en ligne 24h/24 avec rappels automatiques WhatsApp et e-mail.',
        roi: 'Jusqu’à 80 % d’absences en moins',
      },
      clinic: {
        label: 'Cliniques',
        title: 'Cabinets dentaires & cliniques privées',
        problem: 'Des heures passées à confirmer les rendez-vous et à répondre aux mêmes questions.',
        solution: 'Gestion automatisée des rendez-vous avec notifications e-mail/SMS aux patients.',
        roi: 'Plus de 10 heures d’administratif économisées par semaine',
      },
      retail: {
        label: 'Boutiques',
        title: 'Commerces & boutiques',
        problem: 'Peu de visibilité sur Google face aux grandes chaînes et aux marketplaces.',
        solution: 'Un site rapide, du SEO local et des réponses IA qui gardent votre profil Google actif.',
        roi: 'Plus de visibilité dans les recherches locales',
      },
    },
    offers: [
      {
        title: 'Réponses IA aux avis Google (Mehrly)',
        desc: 'Chaque avis reçoit une réponse polie et personnelle dans la langue du client — les bons en un clic, les mauvais vous attendent toujours.',
      },
      {
        title: 'Réservation intelligente',
        desc: 'Vos clients réservent 24h/24 sur le web ou WhatsApp, avec des rappels automatiques contre les absences.',
      },
      {
        title: 'Sites web & landing pages',
        desc: 'Sites rapides, pensés mobile, multilingues et optimisés SEO — comme ce portfolio.',
      },
    ],
    stepsTitle: 'Comment nous travaillons',
    steps: [
      { title: 'Appel gratuit de 15 min', desc: 'Parlez-moi de votre activité et de ce qui vous ralentit.' },
      { title: 'Devis clair sous 24 h', desc: 'Un périmètre et un prix fixes, sans frais mensuels cachés.' },
      { title: 'Création & lancement', desc: 'Je développe, teste et lance, puis je vous accompagne après la mise en ligne.' },
    ],
    pricingTitle: 'Tarifs',
    pricingDesc:
      'Chaque entreprise est différente : chaque projet reçoit un devis fixe, adapté aux petites entreprises, sans engagement long. Demandez un devis gratuit et recevez une réponse sous 24 heures.',
    pricingBtn: 'Obtenir mon devis gratuit',
    qrBadge: 'QR code pour carte de visite',
    qrTitle: 'Partagez cette page en un instant',
    qrDesc: 'Ce QR code ouvre cette page. Imprimez-le sur votre carte de visite ou montrez-le sur votre téléphone.',
  },
  ru: {
    badge: 'Софт для бизнеса · По всему миру',
    title: 'Цифровые решения для растущего бизнеса — по всему миру',
    subtitle:
      'ИИ-ответы на отзывы, онлайн-запись и быстрые современные сайты для ресторанов, салонов, клиник и магазинов — удалённо для клиентов из Европы, США и Узбекистана.',
    ctaWhatsapp: 'Написать в WhatsApp',
    ctaQuote: 'Бесплатная оценка проекта',
    notice: 'Нахожусь в Ташкенте, Узбекистан (UTC+5). Онлайн-встречи в Zoom или Google Meet — отвечаю в течение 24 часов.',
    regionsTitle: 'Где я работаю',
    regions: ['Европа', 'США', 'Узбекистан и Центральная Азия', 'Удалённо — из любой точки'],
    industriesTitle: 'Решения для вашей сферы',
    industriesSub: 'Выберите тип бизнеса, чтобы увидеть, какую проблему решает продукт и какой будет эффект:',
    challenge: 'Какую проблему решает:',
    impact: 'Ожидаемый эффект',
    industries: {
      restaurant: {
        label: 'Рестораны и кафе',
        title: 'Рестораны и кафе',
        problem: 'Десятки отзывов Google в неделю на разных языках и нет времени отвечать на все.',
        solution: 'Mehrly пишет персональный ответ на каждый отзыв на языке гостя.',
        roi: 'Время ответа: с 48 часов до 30 секунд',
      },
      salon: {
        label: 'Барбершопы и салоны',
        title: 'Барбершопы и салоны красоты',
        problem: 'Звонки во время работы и потерянная выручка из-за неявок.',
        solution: 'Онлайн-запись 24/7 с автоматическими напоминаниями в WhatsApp и по e-mail.',
        roi: 'До 80% меньше неявок',
      },
      clinic: {
        label: 'Клиники',
        title: 'Стоматологии и частные клиники',
        problem: 'Сотрудники часами подтверждают записи и отвечают на одни и те же вопросы.',
        solution: 'Автоматическая запись с уведомлениями пациентам по e-mail/SMS.',
        roi: 'Экономия 10+ часов администрирования в неделю',
      },
      retail: {
        label: 'Магазины',
        title: 'Магазины и бутики',
        problem: 'Мало видимости в Google на фоне крупных сетей и маркетплейсов.',
        solution: 'Быстрый сайт, локальное SEO и ИИ-ответы, которые держат профиль Google активным.',
        roi: 'Больше видимости в локальном поиске',
      },
    },
    offers: [
      {
        title: 'ИИ-ответы на отзывы Google (Mehrly)',
        desc: 'Каждый отзыв получает вежливый персональный ответ на языке гостя — хорошие в один клик, плохие всегда ждут вас.',
      },
      {
        title: 'Умная онлайн-запись',
        desc: 'Клиенты записываются 24/7 на сайте или в WhatsApp, а напоминания сокращают неявки.',
      },
      {
        title: 'Сайты и лендинги',
        desc: 'Быстрые мультиязычные сайты под мобильные устройства со встроенным SEO — как это портфолио.',
      },
    ],
    stepsTitle: 'Как мы работаем',
    steps: [
      { title: 'Бесплатный звонок 15 мин', desc: 'Расскажите о бизнесе и о том, что мешает расти.' },
      { title: 'Чёткая оценка за 24 часа', desc: 'Фиксированный объём и цена, без скрытых ежемесячных платежей.' },
      { title: 'Разработка и запуск', desc: 'Разрабатываю, тестирую, запускаю и поддерживаю после запуска.' },
    ],
    pricingTitle: 'Стоимость',
    pricingDesc:
      'Каждый бизнес уникален, поэтому для каждого проекта — своя фиксированная цена, доступная для малого бизнеса и без долгих контрактов. Запросите бесплатную оценку и получите ответ в течение 24 часов.',
    pricingBtn: 'Получить бесплатную оценку',
    qrBadge: 'QR-код для визитки',
    qrTitle: 'Поделитесь этой страницей за секунду',
    qrDesc: 'Этот QR-код открывает эту страницу. Напечатайте его на визитке или покажите с телефона.',
  },
  es: {
    badge: 'Software para empresas · Todo el mundo',
    title: 'Soluciones digitales para negocios en crecimiento — en todo el mundo',
    subtitle:
      'Respuestas con IA a reseñas, reservas online y webs rápidas y modernas para restaurantes, salones, clínicas y tiendas — en remoto para clientes de Europa, EE. UU. y Uzbekistán.',
    ctaWhatsapp: 'Escríbeme por WhatsApp',
    ctaQuote: 'Pedir presupuesto gratis',
    notice: 'Desde Taskent, Uzbekistán (UTC+5). Reuniones en remoto por Zoom o Google Meet — respuesta en menos de 24 horas.',
    regionsTitle: 'Dónde trabajo',
    regions: ['Europa', 'Estados Unidos', 'Uzbekistán y Asia Central', 'En remoto — desde cualquier lugar'],
    industriesTitle: 'Soluciones según tu sector',
    industriesSub: 'Elige tu tipo de negocio para ver qué problema resuelve y el impacto esperado:',
    challenge: 'Problema que resuelve:',
    impact: 'Impacto esperado',
    industries: {
      restaurant: {
        label: 'Restaurantes y cafés',
        title: 'Restaurantes y cafés',
        problem: 'Decenas de reseñas de Google por semana en varios idiomas y sin tiempo para responderlas.',
        solution: 'Mehrly redacta una respuesta personal a cada reseña en el idioma del cliente.',
        roi: 'Tiempo de respuesta: de 48 horas a menos de 30 segundos',
      },
      salon: {
        label: 'Barberías y salones',
        title: 'Barberías y salones de belleza',
        problem: 'Llamadas durante las citas e ingresos perdidos por clientes que no se presentan.',
        solution: 'Reservas online 24/7 con recordatorios automáticos por WhatsApp y e-mail.',
        roi: 'Hasta un 80 % menos de ausencias',
      },
      clinic: {
        label: 'Clínicas',
        title: 'Clínicas dentales y privadas',
        problem: 'El personal dedica horas a confirmar citas y responder las mismas preguntas.',
        solution: 'Gestión automática de citas con avisos a pacientes por e-mail/SMS.',
        roi: 'Más de 10 horas de gestión ahorradas cada semana',
      },
      retail: {
        label: 'Tiendas',
        title: 'Tiendas y boutiques',
        problem: 'Poca visibilidad en Google frente a grandes cadenas y marketplaces.',
        solution: 'Una web rápida, SEO local y respuestas con IA que mantienen activo tu perfil de Google.',
        roi: 'Más visibilidad en búsquedas locales',
      },
    },
    offers: [
      {
        title: 'Respuestas con IA a reseñas de Google (Mehrly)',
        desc: 'Cada reseña recibe una respuesta amable y personal en el idioma del cliente — las buenas en un clic, las malas siempre te esperan.',
      },
      {
        title: 'Reservas y citas inteligentes',
        desc: 'Tus clientes reservan 24/7 en la web o por WhatsApp, con recordatorios que reducen las ausencias.',
      },
      {
        title: 'Webs y landing pages',
        desc: 'Webs rápidas, multilingües y pensadas para móvil, con SEO incluido — como este portfolio.',
      },
    ],
    stepsTitle: 'Cómo trabajamos',
    steps: [
      { title: 'Llamada gratis de 15 min', desc: 'Cuéntame sobre tu negocio y qué te frena.' },
      { title: 'Presupuesto claro en 24 h', desc: 'Alcance y precio cerrados, sin cuotas mensuales ocultas.' },
      { title: 'Desarrollo y lanzamiento', desc: 'Lo construyo, lo pruebo, lo lanzo y te doy soporte después.' },
    ],
    pricingTitle: 'Precios',
    pricingDesc:
      'Cada negocio es distinto, así que cada proyecto tiene su propio presupuesto cerrado — justo para pequeñas empresas y sin contratos largos. Pide un presupuesto gratis y recibe respuesta en 24 horas.',
    pricingBtn: 'Quiero mi presupuesto gratis',
    qrBadge: 'Código QR para tarjeta de visita',
    qrTitle: 'Comparte esta página al instante',
    qrDesc: 'Este código QR abre esta página. Imprímelo en tu tarjeta de visita o muéstralo desde tu móvil.',
  },
};

const OFFER_ICONS = [MessageSquare, Calendar, MonitorSmartphone];
const OFFER_TONES = [
  'bg-emerald-500/10 text-emerald-400 light:text-emerald-700',
  'bg-cyan-500/10 text-cyan-400 light:text-cyan-700',
  'bg-purple-500/10 text-purple-400 light:text-purple-700',
];
const STEP_ICONS = [PhoneCall, FileText, Rocket];
const INDUSTRY_KEYS: IndustryKey[] = ['restaurant', 'salon', 'clinic', 'retail'];

const card =
  'rounded-2xl bg-slate-900/60 dark:bg-slate-900/60 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-200 backdrop-blur-xl shadow-xl';

export const ServicesPage: React.FC = () => {
  const { language } = useLanguage();
  const c = COPY[language] ?? COPY.en;
  const [selected, setSelected] = useState<IndustryKey>('restaurant');
  const industry = c.industries[selected];

  // QR code is generated in the browser and always points at the live page
  const qrValue = `${SITE_URL}/services`;

  return (
    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      <SEOHelper
        title="Software Services for Businesses Worldwide | Jasurbek Azizov"
        description="AI Google review replies (Mehrly), online booking systems and modern websites for restaurants, salons, clinics and shops — for clients across Europe, the USA and Uzbekistan."
      />

      {/* Header Banner */}
      <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-slate-900 via-slate-900 to-slate-950 light:from-white light:via-white light:to-emerald-50 border border-emerald-500/30 backdrop-blur-xl shadow-2xl relative overflow-hidden space-y-6">
        <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
          <Globe2 className="w-96 h-96 text-emerald-400 light:text-emerald-700" />
        </div>

        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 light:text-emerald-700 border border-emerald-500/30 text-xs font-bold uppercase tracking-wider">
          <Globe2 className="w-3.5 h-3.5" />
          <span>{c.badge}</span>
        </div>

        <div className="space-y-3 max-w-3xl relative">
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-100 light:text-slate-900 tracking-tight leading-tight">
            {c.title}
          </h1>
          <p className="text-base sm:text-lg text-slate-300 light:text-slate-700 leading-relaxed">{c.subtitle}</p>
        </div>

        <div className="flex flex-wrap items-center gap-4 pt-2 relative">
          <a
            href={PERSONAL_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-sm shadow-xl shadow-emerald-500/20 flex items-center gap-2.5 transition-all"
          >
            <Send className="w-4 h-4" />
            <span>{c.ctaWhatsapp}</span>
          </a>
          <NavLink
            to="/contact"
            className="px-6 py-3.5 rounded-xl bg-slate-800 light:bg-slate-100 hover:bg-slate-700 light:hover:bg-slate-200 text-slate-100 light:text-slate-900 border border-slate-700 light:border-slate-300 font-bold text-sm flex items-center gap-2 transition-all"
          >
            <FileText className="w-4 h-4 text-cyan-400 light:text-cyan-700" />
            <span>{c.ctaQuote}</span>
          </NavLink>
          <VCFDownloadButton variant="outline" />
        </div>

        <div className="text-xs text-slate-400 light:text-slate-600 flex items-center gap-2 pt-2 relative">
          <Clock className="w-4 h-4 text-emerald-400 light:text-emerald-700 shrink-0" />
          <span>{c.notice}</span>
        </div>

        <div className="flex flex-wrap items-center gap-2 relative">
          <span className="text-xs font-bold text-slate-300 light:text-slate-700 mr-1">{c.regionsTitle}:</span>
          {c.regions.map((r) => (
            <span
              key={r}
              className="px-3 py-1 rounded-full text-xs font-medium bg-slate-950/60 light:bg-white border border-slate-700 light:border-slate-200 text-slate-200 light:text-slate-700"
            >
              {r}
            </span>
          ))}
        </div>
      </div>

      {/* Industry Solutions Selector */}
      <div className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl font-extrabold text-slate-100 light:text-slate-900">{c.industriesTitle}</h2>
          <p className="text-xs text-slate-400 light:text-slate-600">{c.industriesSub}</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {INDUSTRY_KEYS.map((key) => (
            <button
              key={key}
              onClick={() => setSelected(key)}
              aria-pressed={selected === key}
              className={`p-4 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                selected === key
                  ? 'bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/20'
                  : 'bg-slate-900 light:bg-white text-slate-300 light:text-slate-700 border border-slate-800 light:border-slate-200 hover:border-slate-700 light:hover:border-slate-300'
              }`}
            >
              {c.industries[key].label}
            </button>
          ))}
        </div>

        <div className={`p-8 ${card} grid grid-cols-1 md:grid-cols-3 gap-6 items-center`}>
          <div className="md:col-span-2 space-y-3">
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase bg-emerald-500/20 text-emerald-400 light:text-emerald-700 border border-emerald-500/30">
              {industry.title}
            </span>
            <h3 className="text-xl font-bold text-slate-100 light:text-slate-900">{industry.solution}</h3>
            <p className="text-xs text-slate-400 light:text-slate-600 leading-relaxed">
              <strong>{c.challenge}</strong> {industry.problem}
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-slate-950 light:bg-slate-50 border border-emerald-500/30 space-y-2 text-center">
            <Sparkles className="w-6 h-6 text-emerald-400 light:text-emerald-700 mx-auto" />
            <h4 className="text-xs font-mono font-bold uppercase text-slate-400 light:text-slate-600">{c.impact}</h4>
            <p className="text-sm font-extrabold text-emerald-400 light:text-emerald-700">{industry.roi}</p>
          </div>
        </div>
      </div>

      {/* Core Offers */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {c.offers.map((offer, i) => {
          const Icon = OFFER_ICONS[i];
          return (
            <div key={offer.title} className={`p-8 ${card} space-y-4 hover:border-emerald-500/50 transition-all`}>
              <div className={`p-3.5 rounded-xl w-fit ${OFFER_TONES[i]}`}>
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-100 light:text-slate-900">{offer.title}</h3>
              <p className="text-xs text-slate-300 light:text-slate-600 leading-relaxed">{offer.desc}</p>
            </div>
          );
        })}
      </div>

      {/* How we work */}
      <div className="space-y-6">
        <h2 className="text-2xl font-extrabold text-slate-100 light:text-slate-900">{c.stepsTitle}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {c.steps.map((step, i) => {
            const Icon = STEP_ICONS[i];
            return (
              <div key={step.title} className={`p-6 ${card} space-y-3`}>
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-cyan-500/15 border border-cyan-500/30 text-cyan-400 light:text-cyan-700 text-sm font-extrabold flex items-center justify-center">
                    {i + 1}
                  </span>
                  <Icon className="w-5 h-5 text-cyan-400 light:text-cyan-700" />
                </div>
                <h3 className="text-base font-bold text-slate-100 light:text-slate-900">{step.title}</h3>
                <p className="text-xs text-slate-400 light:text-slate-600 leading-relaxed">{step.desc}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Pricing */}
      <div className={`p-8 ${card} flex flex-col md:flex-row md:items-center justify-between gap-6 border-emerald-500/30`}>
        <div className="space-y-2 max-w-2xl">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-emerald-400 light:text-emerald-700" />
            <h2 className="text-xl font-extrabold text-slate-100 light:text-slate-900">{c.pricingTitle}</h2>
          </div>
          <p className="text-sm text-slate-300 light:text-slate-600 leading-relaxed">{c.pricingDesc}</p>
        </div>
        <NavLink
          to="/contact"
          className="shrink-0 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-500 text-slate-950 font-extrabold text-sm shadow-xl shadow-emerald-500/20 flex items-center gap-2"
        >
          <FileText className="w-4 h-4" />
          <span>{c.pricingBtn}</span>
        </NavLink>
      </div>

      {/* QR Code Card */}
      <div className={`p-8 ${card} flex flex-col md:flex-row items-center justify-between gap-8`}>
        <div className="space-y-3 max-w-xl">
          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase bg-emerald-500/20 text-emerald-400 light:text-emerald-700 border border-emerald-500/30">
            {c.qrBadge}
          </span>
          <h3 className="text-2xl font-bold text-slate-100 light:text-slate-900">{c.qrTitle}</h3>
          <p className="text-xs text-slate-300 light:text-slate-600 leading-relaxed">{c.qrDesc}</p>
          <div className="pt-2">
            <VCFDownloadButton variant="primary" />
          </div>
        </div>
        <div className="p-4 bg-white rounded-2xl border-4 border-slate-800 light:border-slate-200 shadow-2xl shrink-0">
          <QRCodeSVG
            value={qrValue}
            size={176}
            fgColor="#0f172a"
            bgColor="#ffffff"
            level="M"
            title="Business services QR code"
            className="w-44 h-44"
          />
        </div>
      </div>
    </div>
  );
};
