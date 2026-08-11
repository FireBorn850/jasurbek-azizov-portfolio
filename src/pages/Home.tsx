import React from 'react';
import { NavLink } from 'react-router-dom';
import { ArrowRight, Code2, Briefcase, TrendingUp, Award, Mail, Sparkles, UserCheck, Linkedin, Send, Instagram, QrCode } from 'lucide-react';
import { SEOHelper } from '../components/SEOHelper';
import { StatCounter } from '../components/StatCounter';
import { VCFDownloadButton } from '../components/VCFDownloadButton';
import { PERSONAL_INFO, PROJECTS } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';

export const Home: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="relative z-10 space-y-24 pb-20">
      <SEOHelper
        title="Jasurbek Azizov | Entrepreneur, Full-Stack Builder & Global Business Student"
        description="Global portfolio of Jasurbek Azizov — B.A. Economics student at Webster University Geneva and Full-Stack Developer specializing in SaaS automation and digital tools."
      />

      {/* Hero Section */}
      <section className="relative pt-12 lg:pt-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="space-y-8 max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 dark:bg-cyan-500/10 light:bg-cyan-50 border border-cyan-500/30 text-cyan-400 dark:text-cyan-400 light:text-cyan-700 text-xs font-semibold tracking-wide">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            <span>{t.home.badge}</span>
          </div>

          {/* Headline & Subtagline */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-100 dark:text-slate-100 light:text-slate-900 tracking-tight leading-[1.1]">
              {t.home.headline}
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed font-normal max-w-3xl">
              {t.home.subtagline}
            </p>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <NavLink
              to="/projects"
              className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-emerald-500 hover:from-cyan-400 hover:to-emerald-400 text-slate-950 font-extrabold text-sm shadow-xl shadow-cyan-500/20 hover:shadow-cyan-500/40 flex items-center gap-2.5 transition-all duration-300 transform active:scale-95"
            >
              <span>{t.home.ctaProjects}</span>
              <ArrowRight className="w-4 h-4" />
            </NavLink>

            <NavLink
              to="/contact"
              className="px-6 py-3.5 rounded-xl bg-slate-900 dark:bg-slate-900 light:bg-white text-slate-100 dark:text-slate-100 light:text-slate-800 border border-slate-700 dark:border-slate-700 light:border-slate-300 hover:border-cyan-500/50 font-bold text-sm flex items-center gap-2 transition-all duration-300"
            >
              <Mail className="w-4 h-4 text-cyan-400" />
              <span>{t.home.ctaContact}</span>
            </NavLink>

            <NavLink
              to="/geneva-card"
              className="px-5 py-3.5 rounded-xl bg-emerald-500/10 dark:bg-emerald-500/10 light:bg-emerald-50 border border-emerald-500/30 text-emerald-400 dark:text-emerald-400 light:text-emerald-700 font-bold text-sm flex items-center gap-2 hover:bg-emerald-500/20 transition-all"
            >
              <QrCode className="w-4 h-4 text-emerald-400" />
              <span>{t.home.ctaGeneva}</span>
            </NavLink>

            <VCFDownloadButton variant="outline" />
          </div>

          {/* Contact / Social Bar with Micro-Animations */}
          <div className="pt-6 border-t border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 flex flex-wrap items-center gap-6 text-xs text-slate-300 dark:text-slate-300 light:text-slate-600">
            <a
              href={`mailto:${PERSONAL_INFO.emailPrimary}`}
              className="flex items-center gap-2 hover:text-cyan-400 transition-colors group"
            >
              <Mail className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
              <span>{PERSONAL_INFO.emailPrimary}</span>
            </a>
            <a
              href={PERSONAL_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-emerald-400 transition-colors group"
            >
              <Send className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" />
              <span>{PERSONAL_INFO.phonePrimary}</span>
            </a>
            <a
              href={PERSONAL_INFO.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-cyan-400 transition-colors group"
            >
              <Linkedin className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
              <span>LinkedIn</span>
            </a>
            <a
              href={PERSONAL_INFO.telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-cyan-400 transition-colors group"
            >
              <Send className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
              <span>Telegram (@azizovj0704)</span>
            </a>
            <a
              href={PERSONAL_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-pink-400 transition-colors group"
            >
              <Instagram className="w-4 h-4 text-pink-400 group-hover:scale-110 transition-transform" />
              <span>Instagram</span>
            </a>
          </div>
        </div>
      </section>

      {/* Snapshot Stats Counters */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <StatCounter value={3} suffix=" SaaS" label={t.home.stats.saas} />
          <StatCounter value={6} label={t.home.stats.languages} />
          <StatCounter value={9} suffix=" Mo" label={t.home.stats.cert} />
          <StatCounter value={2026} prefix="May " label={t.home.stats.investor} />
        </div>
      </section>

      {/* Featured SaaS Projects Strip Preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-100 dark:text-slate-100 light:text-slate-900">
              {t.home.projPreviewTitle}
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 dark:text-slate-400 light:text-slate-600 mt-1">
              {t.home.projPreviewDesc}
            </p>
          </div>
          <NavLink
            to="/projects"
            className="hidden sm:flex items-center gap-1.5 text-xs font-bold text-cyan-400 hover:text-cyan-300"
          >
            <span>{t.home.seeMore}</span>
            <ArrowRight className="w-4 h-4" />
          </NavLink>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PROJECTS.map((proj) => (
            <div
              key={proj.id}
              className="p-6 rounded-2xl bg-slate-900/60 dark:bg-slate-900/60 light:bg-white border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 backdrop-blur-xl shadow-xl flex flex-col justify-between hover:border-cyan-500/40 transition-all group"
            >
              <div className="space-y-3">
                <span className="px-2.5 py-1 rounded-md text-[10px] font-mono font-bold uppercase bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                  {proj.category}
                </span>
                <h3 className="text-lg font-bold text-slate-100 dark:text-slate-100 light:text-slate-900 group-hover:text-cyan-400 transition-colors">
                  {proj.title['en']}
                </h3>
                <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 leading-relaxed line-clamp-2">
                  {proj.subtitle['en']}
                </p>
              </div>
              <NavLink
                to="/projects"
                className="mt-4 pt-3 border-t border-slate-800/60 text-xs font-bold text-cyan-400 flex items-center justify-between hover:text-cyan-300"
              >
                <span>View Full Product Architecture</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </NavLink>
            </div>
          ))}
        </div>
      </section>

      {/* Pages Exploration Strips */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <h2 className="text-2xl font-extrabold text-slate-100 dark:text-slate-100 light:text-slate-900">
          Explore Portfolio Dimensions
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* About Card */}
          <NavLink
            to="/about"
            className="p-6 rounded-2xl bg-slate-900/60 dark:bg-slate-900/60 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-200 hover:border-cyan-500/50 transition-all space-y-4 group"
          >
            <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 w-fit group-hover:scale-110 transition-transform">
              <UserCheck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-100 dark:text-slate-100 light:text-slate-900 group-hover:text-cyan-400 transition-colors">
                {t.home.aboutPreviewTitle}
              </h3>
              <p className="mt-1 text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 leading-relaxed">
                {t.home.aboutPreviewDesc}
              </p>
            </div>
            <div className="text-xs font-bold text-cyan-400 flex items-center gap-1 group-hover:gap-2 transition-all">
              <span>{t.home.seeMore}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </NavLink>

          {/* Experience Card */}
          <NavLink
            to="/experience"
            className="p-6 rounded-2xl bg-slate-900/60 dark:bg-slate-900/60 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-200 hover:border-cyan-500/50 transition-all space-y-4 group"
          >
            <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400 w-fit group-hover:scale-110 transition-transform">
              <Briefcase className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-100 dark:text-slate-100 light:text-slate-900 group-hover:text-blue-400 transition-colors">
                {t.home.expPreviewTitle}
              </h3>
              <p className="mt-1 text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 leading-relaxed">
                {t.home.expPreviewDesc}
              </p>
            </div>
            <div className="text-xs font-bold text-blue-400 flex items-center gap-1 group-hover:gap-2 transition-all">
              <span>{t.home.seeMore}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </NavLink>

          {/* Investing Card */}
          <NavLink
            to="/investing"
            className="p-6 rounded-2xl bg-slate-900/60 dark:bg-slate-900/60 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-200 hover:border-emerald-500/50 transition-all space-y-4 group"
          >
            <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 w-fit group-hover:scale-110 transition-transform">
              <TrendingUp className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-100 dark:text-slate-100 light:text-slate-900 group-hover:text-emerald-400 transition-colors">
                {t.home.investPreviewTitle}
              </h3>
              <p className="mt-1 text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 leading-relaxed">
                {t.home.investPreviewDesc}
              </p>
            </div>
            <div className="text-xs font-bold text-emerald-400 flex items-center gap-1 group-hover:gap-2 transition-all">
              <span>{t.home.seeMore}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </NavLink>

          {/* Certificates Card */}
          <NavLink
            to="/certificates"
            className="p-6 rounded-2xl bg-slate-900/60 dark:bg-slate-900/60 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-200 hover:border-purple-500/50 transition-all space-y-4 group"
          >
            <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400 w-fit group-hover:scale-110 transition-transform">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-100 dark:text-slate-100 light:text-slate-900 group-hover:text-purple-400 transition-colors">
                {t.home.certPreviewTitle}
              </h3>
              <p className="mt-1 text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 leading-relaxed">
                {t.home.certPreviewDesc}
              </p>
            </div>
            <div className="text-xs font-bold text-purple-400 flex items-center gap-1 group-hover:gap-2 transition-all">
              <span>{t.home.seeMore}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </NavLink>
        </div>
      </section>
    </div>
  );
};
