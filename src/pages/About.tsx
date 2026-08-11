import React from 'react';
import { Mail, GraduationCap, Award, Trophy, Music, Sparkles, BookOpen, ShieldCheck } from 'lucide-react';
import { SEOHelper } from '../components/SEOHelper';
import { LANGUAGES_SPOKEN, PERSONAL_HIGHLIGHTS, PERSONAL_INFO } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';

export const About: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      <SEOHelper
        title="About Jasurbek Azizov | Economics & Full-Stack Development"
        description="Learn about Jasurbek Azizov: Webster University Geneva economics student, certified Python/Django developer, multilingual communicator, chess medalist, and violinist."
      />

      {/* Page Header */}
      <div className="space-y-3 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-bold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Professional Background & Personal Dimensions</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-100 dark:text-slate-100 light:text-slate-900">
          {t.about.title}
        </h1>
        <p className="text-base sm:text-lg text-slate-400 dark:text-slate-400 light:text-slate-600 leading-relaxed">
          {t.about.subtitle}
        </p>
      </div>

      {/* Main Bio & Academic Background */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Bio Text Column */}
        <div className="lg:col-span-2 space-y-6">
          <div className="p-8 rounded-2xl bg-slate-900/60 dark:bg-slate-900/60 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-200 backdrop-blur-xl shadow-xl space-y-4">
            <h2 className="text-2xl font-bold text-slate-100 dark:text-slate-100 light:text-slate-900">
              Biography & Mission
            </h2>
            <p className="text-sm text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed">
              {t.about.bioParagraph1}
            </p>
            <p className="text-sm text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed">
              {t.about.bioParagraph2}
            </p>

            {/* Academic Credibility & References Banner */}
            <div className="mt-6 pt-6 border-t border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-slate-950/40 p-4 rounded-xl border border-slate-800/60">
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-8 h-8 text-cyan-400 shrink-0" />
                <div>
                  <h4 className="text-xs font-bold text-slate-200 dark:text-slate-200 light:text-slate-800">
                    {t.about.recommendationsTitle}
                  </h4>
                  <p className="text-[11px] text-slate-400">
                    {t.about.recommendationsDesc}
                  </p>
                </div>
              </div>
              <a
                href={`mailto:${PERSONAL_INFO.emailPrimary}?subject=Request%20Academic%20Reference%20Letters`}
                className="px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs shrink-0 transition-all shadow-md shadow-cyan-500/20"
              >
                {t.about.requestRefBtn}
              </a>
            </div>
          </div>

          {/* Education Card */}
          <div className="p-8 rounded-2xl bg-slate-900/60 dark:bg-slate-900/60 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-200 backdrop-blur-xl shadow-xl space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-slate-100 dark:text-slate-100 light:text-slate-900">
                {t.about.educationTitle}
              </h2>
            </div>
            <div className="p-4 rounded-xl bg-slate-950/50 border border-slate-800/80 space-y-2">
              <div className="flex items-center justify-between text-xs font-mono text-cyan-400">
                <span>Webster University</span>
                <span>2024 – Present</span>
              </div>
              <h3 className="text-base font-bold text-slate-200">
                {t.about.websterDegree}
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                {t.about.websterDetails}
              </p>
            </div>
          </div>
        </div>

        {/* Languages & Quick Facts Sidebar */}
        <div className="space-y-6">
          <div className="p-6 rounded-2xl bg-slate-900/60 dark:bg-slate-900/60 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-200 backdrop-blur-xl shadow-xl space-y-4">
            <div className="flex items-center gap-2 text-slate-100 dark:text-slate-100 light:text-slate-900 font-bold text-lg">
              <BookOpen className="w-5 h-5 text-cyan-400" />
              <span>{t.about.languagesTitle}</span>
            </div>

            <div className="space-y-3">
              {LANGUAGES_SPOKEN.map((lang) => (
                <div key={lang.code} className="space-y-1">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-medium text-slate-200 flex items-center gap-1.5">
                      <span>{lang.flag}</span>
                      <span>{lang.name[language]}</span>
                    </span>
                    <span className="text-[11px] text-cyan-400 font-mono font-semibold">
                      {lang.nativeName}
                    </span>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-slate-800 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full transition-all duration-1000"
                      style={{ width: `${lang.percent}%` }}
                    />
                  </div>
                  <p className="text-[10px] text-slate-400">{lang.level[language]}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Outside The Code - Personal Dimension (Chess & Violin) */}
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400">
            <Trophy className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-2xl font-extrabold text-slate-100 dark:text-slate-100 light:text-slate-900">
              {t.about.outsideCodeTitle}
            </h2>
            <p className="text-xs text-slate-400">
              Personal disciplines that sharpen focus, tactical precision, and creative execution.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Chess Highlight Card */}
          <div className="p-6 rounded-2xl bg-slate-900/60 dark:bg-slate-900/60 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-200 backdrop-blur-xl shadow-xl space-y-4 hover:border-amber-500/50 transition-all">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400">
                  <Trophy className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-100 dark:text-slate-100 light:text-slate-900">
                    {t.about.chessTitle}
                  </h3>
                  <p className="text-xs text-amber-400 font-mono font-semibold">Trophies, Medals & Regional Honors</p>
                </div>
              </div>
            </div>
            <p className="text-xs text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed">
              {t.about.chessDesc}
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="px-2.5 py-1 rounded-md text-[10px] font-bold uppercase bg-amber-500/10 text-amber-300 border border-amber-500/30">
                Strategic Foresight
              </span>
              <span className="px-2.5 py-1 rounded-md text-[10px] font-bold uppercase bg-amber-500/10 text-amber-300 border border-amber-500/30">
                Tactical Risk Control
              </span>
            </div>
          </div>

          {/* Violin Highlight Card */}
          <div className="p-6 rounded-2xl bg-slate-900/60 dark:bg-slate-900/60 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-200 backdrop-blur-xl shadow-xl space-y-4 hover:border-purple-500/50 transition-all">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400">
                  <Music className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-100 dark:text-slate-100 light:text-slate-900">
                    {t.about.violinTitle}
                  </h3>
                  <p className="text-xs text-purple-400 font-mono font-semibold">7 Years Formal Academy Graduate</p>
                </div>
              </div>
            </div>
            <p className="text-xs text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed">
              {t.about.violinDesc}
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="px-2.5 py-1 rounded-md text-[10px] font-bold uppercase bg-purple-500/10 text-purple-300 border border-purple-500/30">
                Public Concert Performer
              </span>
              <span className="px-2.5 py-1 rounded-md text-[10px] font-bold uppercase bg-purple-500/10 text-purple-300 border border-purple-500/30">
                Ear for Harmony
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
