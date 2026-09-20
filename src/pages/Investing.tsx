import React from 'react';
import { TrendingUp, ShieldCheck, AlertCircle, PieChart as PieChartIcon, CheckCircle2 } from 'lucide-react';
import { SEOHelper } from '../components/SEOHelper';
import { OrbitChart } from '../components/OrbitChart';
import { INVESTMENTS, PERSONAL_INFO } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';

export const InvestingPage: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      <SEOHelper
        title="Ethical Equity Investing Portfolio | Jasurbek Azizov"
        description="Sharia-compliant long-term equity portfolio managed by Jasurbek Azizov — SPUS S&P 500 Sharia ETF, SPRE Real Estate ETF, and RELX PLC."
      />

      {/* Header */}
      <div className="space-y-3 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold uppercase tracking-wider">
          <TrendingUp className="w-3.5 h-3.5" />
          <span>Capital Allocation & Financial Literacy</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-100 dark:text-slate-100 light:text-slate-900">
          {t.investing.title}
        </h1>
        <p className="text-sm sm:text-base text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed">
          {t.investing.subtitle}
        </p>
      </div>

      {/* Sharia Compliance Notice Banner */}
      <div className="p-5 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-start gap-4 text-xs text-emerald-300 leading-relaxed">
        <ShieldCheck className="w-6 h-6 text-emerald-400 shrink-0 mt-0.5" />
        <div className="space-y-1">
          <h4 className="font-bold text-slate-100 text-sm">{t.investing.shariaNotice}</h4>
          <p className="text-emerald-200/80">{t.investing.disclaimer}</p>
        </div>
      </div>

      {/* Allocation Chart & Strategy Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Animated Rotating Orbit Donut Chart */}
        <div className="p-8 rounded-2xl bg-slate-900/60 dark:bg-slate-900/60 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-200 backdrop-blur-xl shadow-xl flex flex-col items-center justify-center space-y-4">
          <div className="flex items-center gap-2 text-slate-100 font-bold text-lg">
            <PieChartIcon className="w-5 h-5 text-cyan-400" />
            <span>{t.investing.breakdownTitle}</span>
          </div>

          <OrbitChart />

          <p className="text-[11px] text-center text-slate-400 italic">
            Continuous slow orbital rotation signals live portfolio tracking & asset balance.
          </p>
        </div>

        {/* Strategy Description */}
        <div className="p-8 rounded-2xl bg-slate-900/60 dark:bg-slate-900/60 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-200 backdrop-blur-xl shadow-xl space-y-6">
          <h3 className="text-xl font-bold text-slate-100 dark:text-slate-100 light:text-slate-900">
            {t.investing.strategyTitle}
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed">
            {t.investing.strategyDesc}
          </p>

          <div className="space-y-3 pt-2">
            <div className="flex items-center gap-2.5 text-xs text-slate-200">
              <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
              <span><strong>SPUS (55%)</strong> — S&P 500 Sharia Index tracking high-margin technology & healthcare giants.</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs text-slate-200">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span><strong>SPRE (30%)</strong> — Global Sharia Real Estate Investment Trusts providing defensive dividend yields.</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs text-slate-200">
              <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0" />
              <span><strong>RELX (15%)</strong> — NYSE-listed global risk analytics & scientific decision platform.</span>
            </div>
          </div>
        </div>
      </div>

      {/* Individual Position Cards */}
      <div className="space-y-6">
        <h3 className="text-2xl font-extrabold text-slate-100 dark:text-slate-100 light:text-slate-900">
          {t.investing.holdingsTitle}
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {INVESTMENTS.map((inv) => (
            <div
              key={inv.ticker}
              className="p-6 rounded-2xl bg-slate-900/60 dark:bg-slate-900/60 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-200 backdrop-blur-xl shadow-xl space-y-4 hover:border-cyan-500/50 transition-all group"
            >
              <div className="flex items-center justify-between">
                <span className="text-2xl font-black font-mono text-cyan-400 group-hover:scale-105 transition-transform">
                  {inv.ticker}
                </span>
                <span className="px-2.5 py-1 rounded-md text-[10px] font-mono font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                  {inv.allocationPercent}% Weight
                </span>
              </div>

              <div>
                <h4 className="text-sm font-bold text-slate-100 dark:text-slate-100 light:text-slate-900">
                  {inv.name}
                </h4>
                <p className="text-[11px] text-slate-400 font-mono mt-0.5">
                  Market: {inv.market} · Type: {inv.type}
                </p>
              </div>

              <p className="text-xs text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed">
                {inv.description[language]}
              </p>

              <div className="pt-3 border-t border-slate-800/60 text-[11px] text-slate-400">
                <span className="font-semibold text-slate-300">Top Holdings:</span> {inv.holdingsSummary}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
