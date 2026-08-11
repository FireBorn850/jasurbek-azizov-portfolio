import React, { useState } from 'react';
import { QrCode, Sparkles, Send, CheckCircle2, MessageSquare, Utensils, Calendar, ShieldCheck, MapPin, ExternalLink } from 'lucide-react';
import { SEOHelper } from '../components/SEOHelper';
import { VCFDownloadButton } from '../components/VCFDownloadButton';
import { PERSONAL_INFO } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';

export const GenevaCardPage: React.FC = () => {
  const { t } = useLanguage();
  const [selectedIndustry, setSelectedIndustry] = useState<'restaurant' | 'salon' | 'clinic' | 'retail'>('restaurant');

  const industryDetails = {
    restaurant: {
      title: 'Restaurants & Cafes in Geneva',
      problem: 'Paper menus are costly to translate into French/English/German and do not convert happy diners into Google Reviews.',
      solution: 'Sub-second QR Digital Menu with automated Google Review prompt for 5-star feedback.',
      roi: '+3.5x Google Map Reviews in 30 days',
    },
    salon: {
      title: 'Barbershops & Beauty Salons',
      problem: 'Phone interruptions during cuts/treatments and revenue lost from last-minute no-shows.',
      solution: '24/7 automated booking web app with instant WhatsApp confirmation reminders.',
      roi: '80% reduction in client no-shows',
    },
    clinic: {
      title: 'Dental & Private Clinics',
      problem: 'Administrative workload manually confirming patient appointments and answering routine inquiries.',
      solution: 'Automated appointment workflow with patient email/SMS notifications.',
      roi: 'Saves 10+ hours of admin work weekly',
    },
    retail: {
      title: 'Local Boutiques & Specialty Shops',
      problem: 'Limited local online search visibility against large Swiss retail chains.',
      solution: 'Local SEO optimization & AI review auto-responder keeping local Google profile active.',
      roi: '+40% local foot traffic engagement',
    },
  };

  const currentSiteUrl = window.location.origin || 'https://jasurbekazizov.com';
  const qrCodeImageUrl = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(
    `${currentSiteUrl}/geneva-card`
  )}&color=0f172a&bgcolor=ffffff`;

  return (
    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      <SEOHelper
        title="Geneva Business Software Solutions | Jasurbek Azizov"
        description="Digital software solutions for local business owners in Geneva, Switzerland. AI Google Review Auto-Responder, Smart Booking Engines, and QR Menus."
      />

      {/* Header Banner */}
      <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-slate-900 via-slate-900 to-slate-950 border border-emerald-500/30 backdrop-blur-xl shadow-2xl relative overflow-hidden space-y-6">
        <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
          <QrCode className="w-96 h-96 text-emerald-400" />
        </div>

        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-xs font-bold uppercase tracking-wider">
          <MapPin className="w-3.5 h-3.5" />
          <span>{t.geneva.badge} · Geneva & Vaud Region</span>
        </div>

        <div className="space-y-3 max-w-3xl">
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-100 tracking-tight leading-tight">
            {t.geneva.title}
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            {t.geneva.subtitle}
          </p>
        </div>

        {/* Primary CTAs */}
        <div className="flex flex-wrap items-center gap-4 pt-2">
          <a
            href={PERSONAL_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-sm shadow-xl shadow-emerald-500/20 flex items-center gap-2.5 transition-all"
          >
            <Send className="w-4 h-4" />
            <span>{t.geneva.directWhatsappBtn}</span>
          </a>

          <a
            href={`mailto:${PERSONAL_INFO.emailPrimary}?subject=Geneva%20Software%20Pitch%20Meeting`}
            className="px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-100 border border-slate-700 font-bold text-sm flex items-center gap-2 transition-all"
          >
            <Calendar className="w-4 h-4 text-cyan-400" />
            <span>{t.geneva.bookPitchBtn}</span>
          </a>

          <VCFDownloadButton variant="outline" />
        </div>

        <div className="text-xs text-slate-400 flex items-center gap-2 pt-2">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>{t.geneva.swissNotice}</span>
        </div>
      </div>

      {/* Industry Solutions Selector */}
      <div className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl font-extrabold text-slate-100 dark:text-slate-100 light:text-slate-900">
            Tailored Solutions by Geneva Industry
          </h2>
          <p className="text-xs text-slate-400">Select your business type to view direct ROI & software mechanics:</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <button
            onClick={() => setSelectedIndustry('restaurant')}
            className={`p-4 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              selectedIndustry === 'restaurant'
                ? 'bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/20'
                : 'bg-slate-900 text-slate-300 border border-slate-800 hover:border-slate-700'
            }`}
          >
            Utensils · Restaurants
          </button>
          <button
            onClick={() => setSelectedIndustry('salon')}
            className={`p-4 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              selectedIndustry === 'salon'
                ? 'bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/20'
                : 'bg-slate-900 text-slate-300 border border-slate-800 hover:border-slate-700'
            }`}
          >
            Scissors · Salons
          </button>
          <button
            onClick={() => setSelectedIndustry('clinic')}
            className={`p-4 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              selectedIndustry === 'clinic'
                ? 'bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/20'
                : 'bg-slate-900 text-slate-300 border border-slate-800 hover:border-slate-700'
            }`}
          >
            Heart · Clinics
          </button>
          <button
            onClick={() => setSelectedIndustry('retail')}
            className={`p-4 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              selectedIndustry === 'retail'
                ? 'bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/20'
                : 'bg-slate-900 text-slate-300 border border-slate-800 hover:border-slate-700'
            }`}
          >
            Shopping · Boutiques
          </button>
        </div>

        {/* Selected Industry Detail Box */}
        <div className="p-8 rounded-2xl bg-slate-900/60 dark:bg-slate-900/60 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-200 backdrop-blur-xl shadow-xl grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          <div className="md:col-span-2 space-y-3">
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
              {industryDetails[selectedIndustry].title}
            </span>
            <h3 className="text-xl font-bold text-slate-100 dark:text-slate-100 light:text-slate-900">
              {industryDetails[selectedIndustry].solution}
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              <strong>Challenge Addressed:</strong> {industryDetails[selectedIndustry].problem}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-950 border border-emerald-500/30 space-y-2 text-center">
            <Sparkles className="w-6 h-6 text-emerald-400 mx-auto" />
            <h4 className="text-xs font-mono font-bold uppercase text-slate-400">Expected Business Impact</h4>
            <p className="text-sm font-extrabold text-emerald-400">
              {industryDetails[selectedIndustry].roi}
            </p>
          </div>
        </div>
      </div>

      {/* 3 Core Offers */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-8 rounded-2xl bg-slate-900/60 dark:bg-slate-900/60 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-200 backdrop-blur-xl shadow-xl space-y-4 hover:border-emerald-500/50 transition-all">
          <div className="p-3.5 rounded-xl bg-emerald-500/10 text-emerald-400 w-fit">
            <MessageSquare className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-slate-100 dark:text-slate-100 light:text-slate-900">
            {t.geneva.offer1Title}
          </h3>
          <p className="text-xs text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed">
            {t.geneva.offer1Desc}
          </p>
        </div>

        <div className="p-8 rounded-2xl bg-slate-900/60 dark:bg-slate-900/60 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-200 backdrop-blur-xl shadow-xl space-y-4 hover:border-emerald-500/50 transition-all">
          <div className="p-3.5 rounded-xl bg-cyan-500/10 text-cyan-400 w-fit">
            <Calendar className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-slate-100 dark:text-slate-100 light:text-slate-900">
            {t.geneva.offer2Title}
          </h3>
          <p className="text-xs text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed">
            {t.geneva.offer2Desc}
          </p>
        </div>

        <div className="p-8 rounded-2xl bg-slate-900/60 dark:bg-slate-900/60 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-200 backdrop-blur-xl shadow-xl space-y-4 hover:border-emerald-500/50 transition-all">
          <div className="p-3.5 rounded-xl bg-purple-500/10 text-purple-400 w-fit">
            <Utensils className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-slate-100 dark:text-slate-100 light:text-slate-900">
            {t.geneva.offer3Title}
          </h3>
          <p className="text-xs text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed">
            {t.geneva.offer3Desc}
          </p>
        </div>
      </div>

      {/* QR Code Pitch Card */}
      <div className="p-8 rounded-2xl bg-slate-900/60 dark:bg-slate-900/60 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-200 backdrop-blur-xl shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="space-y-3 max-w-xl">
          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
            Printable Business Card QR Code
          </span>
          <h3 className="text-2xl font-bold text-slate-100 dark:text-slate-100 light:text-slate-900">
            Instant Access to Geneva Business Pitch Portal
          </h3>
          <p className="text-xs text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed">
            This QR code connects directly to this page. Hand your printed business card to local Geneva merchants, let them scan, and view your interactive software pitch on their phones.
          </p>
          <div className="pt-2">
            <VCFDownloadButton variant="primary" />
          </div>
        </div>

        <div className="p-4 bg-white rounded-2xl border-4 border-slate-800 shadow-2xl shrink-0">
          <img
            src={qrCodeImageUrl}
            alt="Geneva Digital Business Card QR Code"
            className="w-44 h-44 object-contain"
          />
        </div>
      </div>
    </div>
  );
};
