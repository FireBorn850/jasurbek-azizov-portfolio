import React, { useState } from 'react';
import { Award, Filter, ExternalLink, ShieldCheck, Trophy, Music } from 'lucide-react';
import { SEOHelper } from '../components/SEOHelper';
import { CertificateModal } from '../components/CertificateModal';
import { CERTIFICATES, PERSONAL_HIGHLIGHTS } from '../data/portfolioData';
import { Certificate } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { NavLink } from 'react-router-dom';

export const CertificatesPage: React.FC = () => {
  const { language, t } = useLanguage();
  const [filter, setFilter] = useState<string>('all');
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  const filteredCerts = CERTIFICATES.filter((cert) => {
    if (filter === 'all') return true;
    return cert.category === filter;
  });

  return (
    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      <SEOHelper
        title="Certificates & Credentials | Jasurbek Azizov"
        description="Verified certifications of Jasurbek Azizov: 9-Month Full-Stack Diploma from Monday Training Center, IELTS Academic 6.0, UN CC:e-Learn Diplomas, and Startup Pitch Honors."
      />

      {/* Header */}
      <div className="space-y-3 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-500/10 text-purple-400 text-xs font-bold uppercase tracking-wider">
          <Award className="w-3.5 h-3.5" />
          <span>Verified Qualifications</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-100 dark:text-slate-100 light:text-slate-900">
          {t.certificates.title}
        </h1>
        <p className="text-sm sm:text-base text-slate-400 dark:text-slate-400 light:text-slate-600">
          {t.certificates.subtitle}
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 pb-2 border-b border-slate-800/80">
        <div className="flex items-center gap-2 text-xs font-bold text-slate-500 mr-2">
          <Filter className="w-4 h-4 text-purple-400" />
          <span>Filter:</span>
        </div>

        <button
          onClick={() => setFilter('all')}
          className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
            filter === 'all'
              ? 'bg-purple-500 text-slate-950 font-bold shadow-lg shadow-purple-500/20'
              : 'bg-slate-900 text-slate-300 border border-slate-800 hover:border-slate-700'
          }`}
        >
          {t.certificates.allTab}
        </button>

        <button
          onClick={() => setFilter('tech')}
          className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
            filter === 'tech'
              ? 'bg-purple-500 text-slate-950 font-bold shadow-lg shadow-purple-500/20'
              : 'bg-slate-900 text-slate-300 border border-slate-800 hover:border-slate-700'
          }`}
        >
          {t.certificates.techTab}
        </button>

        <button
          onClick={() => setFilter('academic')}
          className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
            filter === 'academic'
              ? 'bg-purple-500 text-slate-950 font-bold shadow-lg shadow-purple-500/20'
              : 'bg-slate-900 text-slate-300 border border-slate-800 hover:border-slate-700'
          }`}
        >
          {t.certificates.academicTab}
        </button>

        <button
          onClick={() => setFilter('global')}
          className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
            filter === 'global'
              ? 'bg-purple-500 text-slate-950 font-bold shadow-lg shadow-purple-500/20'
              : 'bg-slate-900 text-slate-300 border border-slate-800 hover:border-slate-700'
          }`}
        >
          {t.certificates.globalTab}
        </button>
      </div>

      {/* Grid of Certificates */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCerts.map((cert) => (
          <div
            key={cert.id}
            onClick={() => setSelectedCert(cert)}
            className="p-6 rounded-2xl bg-slate-900/60 dark:bg-slate-900/60 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-200 backdrop-blur-xl shadow-xl flex flex-col justify-between hover:border-purple-500/50 transition-all cursor-pointer group space-y-4"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase bg-purple-500/20 text-purple-300 border border-purple-500/30">
                  {cert.badgeText}
                </span>
                <span className="text-xs text-slate-400 font-mono">{cert.date}</span>
              </div>

              <h3 className="text-lg font-bold text-slate-100 dark:text-slate-100 light:text-slate-900 group-hover:text-purple-400 transition-colors">
                {cert.title[language]}
              </h3>

              <p className="text-xs text-slate-400 font-semibold">{cert.issuer}</p>

              <p className="text-xs text-slate-300 dark:text-slate-300 light:text-slate-600 line-clamp-3 leading-relaxed">
                {cert.description[language]}
              </p>
            </div>

            <div className="pt-3 border-t border-slate-800/60 flex items-center justify-between text-xs text-purple-400 font-bold group-hover:text-purple-300">
              <span>View Credential Details</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </div>
          </div>
        ))}
      </div>

      {/* Chess & Violin Badges Linking Back to About */}
      <div className="p-8 rounded-2xl bg-slate-900/60 dark:bg-slate-900/60 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-200 backdrop-blur-xl shadow-xl space-y-4">
        <h3 className="text-xl font-bold text-slate-100 dark:text-slate-100 light:text-slate-900 flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-purple-400" />
          <span>Extracurricular & Arts Achievements</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <NavLink
            to="/about"
            className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 flex items-center gap-4 hover:border-amber-500/50 transition-all group"
          >
            <div className="p-3 rounded-xl bg-amber-500/10 text-amber-400">
              <Trophy className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-200 group-hover:text-amber-400 transition-colors">
                Competitive Chess Medalist & Trophies
              </h4>
              <p className="text-xs text-slate-400">View tournament achievements on About page →</p>
            </div>
          </NavLink>

          <NavLink
            to="/about"
            className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 flex items-center gap-4 hover:border-purple-500/50 transition-all group"
          >
            <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400">
              <Music className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-200 group-hover:text-purple-400 transition-colors">
                Violin Music School Graduation Diploma
              </h4>
              <p className="text-xs text-slate-400">View 7-year graduation details on About page →</p>
            </div>
          </NavLink>
        </div>
      </div>

      {/* Credential Modal */}
      <CertificateModal
        certificate={selectedCert}
        onClose={() => setSelectedCert(null)}
      />
    </div>
  );
};
