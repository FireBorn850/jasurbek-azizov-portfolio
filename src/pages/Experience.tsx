import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { SEOHelper } from '../components/SEOHelper';
import { EXPERIENCES } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';

export const ExperiencePage: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      <SEOHelper
        title="Experience | Jasurbek Azizov"
        description="Professional experience timeline of Jasurbek Azizov: Business Analyst at JvEdtech, Logistics Operations Coordinator at Barr Transit / Myle (NYC), and Retail Sales Associate."
      />

      {/* Header */}
      <div className="space-y-3 text-center sm:text-left max-w-2xl">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-bold uppercase tracking-wider">
          <Briefcase className="w-3.5 h-3.5" />
          <span>Professional Timeline</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-100 dark:text-slate-100 light:text-slate-900">
          {t.experience.title}
        </h1>
        <p className="text-sm sm:text-base text-slate-400 dark:text-slate-400 light:text-slate-600">
          {t.experience.subtitle}
        </p>
      </div>

      {/* Vertical Animated Timeline */}
      <div className="relative border-l-2 border-slate-800 dark:border-slate-800 light:border-slate-300 ml-4 sm:ml-8 space-y-12 pl-6 sm:pl-10">
        {EXPERIENCES.map((exp, index) => (
          <div key={exp.id} className="relative group">
            {/* Timeline Circle Bullet */}
            <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-6 h-6 rounded-full bg-slate-950 border-2 border-cyan-400 flex items-center justify-center group-hover:scale-125 group-hover:bg-cyan-400 transition-all duration-300">
              <div className="w-2 h-2 rounded-full bg-cyan-400 group-hover:bg-slate-950" />
            </div>

            {/* Experience Card */}
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/60 dark:bg-slate-900/60 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-200 backdrop-blur-xl shadow-xl hover:border-cyan-500/50 transition-all space-y-4">
              {/* Header Info */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-800/60">
                <div>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                    {exp.type[language]}
                  </span>
                  <h3 className="text-xl font-extrabold text-slate-100 dark:text-slate-100 light:text-slate-900 mt-1">
                    {exp.role[language]}
                  </h3>
                  <p className="text-sm font-semibold text-cyan-400">{exp.company}</p>
                </div>

                <div className="space-y-1 text-xs text-slate-400 font-medium">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-slate-500" />
                    <span>{exp.location[language]}</span>
                  </div>
                </div>
              </div>

              {/* Bullet Points */}
              <ul className="space-y-2.5 text-xs text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed">
                {exp.highlights[language].map((bullet, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-2 pt-2">
                {exp.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 rounded-md text-[10px] font-mono font-medium bg-slate-800/80 dark:bg-slate-800/80 light:bg-slate-100 text-slate-300 dark:text-slate-300 light:text-slate-700 border border-slate-700/50"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
