import React, { useState } from 'react';
import { Code2, Filter, Sparkles } from 'lucide-react';
import { SEOHelper } from '../components/SEOHelper';
import { ProjectCard } from '../components/ProjectCard';
import { PROJECTS } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';

export const ProjectsPage: React.FC = () => {
  const { t } = useLanguage();
  const [filter, setFilter] = useState<string>('all');

  const filteredProjects = PROJECTS.filter((proj) => {
    if (filter === 'all') return true;
    return proj.category === filter;
  });

  return (
    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      <SEOHelper
        title="Projects & SaaS Showcase | Jasurbek Azizov"
        description="Explore SaaS products built by Jasurbek Azizov: AI Google Review Auto-Responder, Smart Booking Engine, and Restaurant QR Menu Suite."
      />

      {/* Header */}
      <div className="space-y-3 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-bold uppercase tracking-wider">
          <Code2 className="w-3.5 h-3.5" />
          <span>SaaS Software Showcase</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-100 dark:text-slate-100 light:text-slate-900">
          {t.projects.title}
        </h1>
        <p className="text-sm sm:text-base text-slate-400 dark:text-slate-400 light:text-slate-600 leading-relaxed">
          {t.projects.subtitle}
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 pb-2 border-b border-slate-800/80">
        <div className="flex items-center gap-2 text-xs font-bold text-slate-500 mr-2">
          <Filter className="w-4 h-4 text-cyan-400" />
          <span>Category:</span>
        </div>

        <button
          onClick={() => setFilter('all')}
          className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
            filter === 'all'
              ? 'bg-cyan-500 text-slate-950 font-bold shadow-lg shadow-cyan-500/20'
              : 'bg-slate-900 text-slate-300 border border-slate-800 hover:border-slate-700'
          }`}
        >
          {t.projects.filterAll}
        </button>

        <button
          onClick={() => setFilter('saas')}
          className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
            filter === 'saas'
              ? 'bg-cyan-500 text-slate-950 font-bold shadow-lg shadow-cyan-500/20'
              : 'bg-slate-900 text-slate-300 border border-slate-800 hover:border-slate-700'
          }`}
        >
          {t.projects.filterSaas}
        </button>

        <button
          onClick={() => setFilter('fullstack')}
          className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
            filter === 'fullstack'
              ? 'bg-cyan-500 text-slate-950 font-bold shadow-lg shadow-cyan-500/20'
              : 'bg-slate-900 text-slate-300 border border-slate-800 hover:border-slate-700'
          }`}
        >
          {t.projects.filterFullstack}
        </button>

        <button
          onClick={() => setFilter('automation')}
          className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
            filter === 'automation'
              ? 'bg-cyan-500 text-slate-950 font-bold shadow-lg shadow-cyan-500/20'
              : 'bg-slate-900 text-slate-300 border border-slate-800 hover:border-slate-700'
          }`}
        >
          {t.projects.filterAutomation}
        </button>
      </div>

      {/* Grid of Projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((proj) => (
          <ProjectCard key={proj.id} project={proj} />
        ))}
      </div>
    </div>
  );
};
