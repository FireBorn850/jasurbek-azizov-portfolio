import React, { useState } from 'react';
import { ExternalLink, Github, Sparkles, CheckCircle2, AlertCircle } from 'lucide-react';
import { Project } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { language, t } = useLanguage();
  const [activeTab, setActiveTab] = useState<'solution' | 'problem'>('solution');

  return (
    <div className="group relative rounded-2xl bg-slate-900/70 dark:bg-slate-900/70 light:bg-white/90 border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 backdrop-blur-xl overflow-hidden shadow-2xl hover:border-cyan-500/50 transition-all duration-300 flex flex-col justify-between">
      {/* Top Glow Accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div>
        {/* Project Image Banner */}
        <div className="relative h-48 overflow-hidden bg-slate-950">
          <img
            src={project.image}
            alt={project.title[language]}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

          {/* Badge */}
          <div className="absolute top-3 left-3 px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 backdrop-blur-md">
            {project.category.toUpperCase()}
          </div>

          {/* Live Link Button */}
          <a
            href={project.liveDemoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-3 right-3 p-2 rounded-full bg-slate-900/80 text-cyan-400 border border-cyan-500/30 hover:bg-cyan-500 hover:text-slate-950 transition-all"
            title={t.projects.liveDemo}
          >
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* Card Body */}
        <div className="p-6 space-y-4">
          <div>
            <h3 className="text-xl font-bold text-slate-100 dark:text-slate-100 light:text-slate-900 group-hover:text-cyan-400 transition-colors">
              {project.title[language]}
            </h3>
            <p className="mt-1 text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 line-clamp-2">
              {project.subtitle[language]}
            </p>
          </div>

          {/* Problem vs Solution Toggle */}
          <div className="space-y-2">
            <div className="flex gap-2 p-1 rounded-xl bg-slate-950/60 border border-slate-800">
              <button
                onClick={() => setActiveTab('solution')}
                className={`flex-1 py-1.5 px-3 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                  activeTab === 'solution'
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 shadow'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                <span>{t.projects.solutionTitle}</span>
              </button>
              <button
                onClick={() => setActiveTab('problem')}
                className={`flex-1 py-1.5 px-3 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                  activeTab === 'problem'
                    ? 'bg-rose-500/20 text-rose-300 border border-rose-500/30 shadow'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <AlertCircle className="w-3.5 h-3.5 text-rose-400" />
                <span>{t.projects.problemTitle}</span>
              </button>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-950/40 border border-slate-800/60 min-h-[85px] text-xs text-slate-300 leading-relaxed">
              {activeTab === 'solution' ? (
                <p className="text-cyan-100/90">{project.solution[language]}</p>
              ) : (
                <p className="text-slate-300">{project.problem[language]}</p>
              )}
            </div>
          </div>

          {/* Metrics if available */}
          {project.metrics && (
            <div className="flex items-center gap-2 p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-[11px] font-medium">
              <Sparkles className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>{project.metrics[language]}</span>
            </div>
          )}

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap gap-1.5 pt-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-md text-[10px] font-mono font-medium bg-slate-800/80 dark:bg-slate-800/80 light:bg-slate-100 text-slate-300 dark:text-slate-300 light:text-slate-700 border border-slate-700/50"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Footer CTA buttons */}
      <div className="p-6 pt-0 flex items-center justify-between gap-3">
        <a
          href={project.liveDemoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-2.5 px-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-md shadow-cyan-500/20"
        >
          <span>{t.projects.liveDemo}</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition-all"
            title={t.projects.viewCode}
          >
            <Github className="w-4 h-4" />
          </a>
        )}
      </div>
    </div>
  );
};
