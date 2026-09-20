import React from 'react';
import { NavLink } from 'react-router-dom';
import { ArrowUp, Linkedin, Send, Instagram, Mail, Github, Heart } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 border-t border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 bg-slate-950 dark:bg-slate-950 light:bg-slate-100 text-slate-400 py-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-slate-800/60 dark:border-slate-800/60 light:border-slate-200">
          {/* Brand & Mission */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 via-blue-600 to-emerald-400 p-[1px]">
                <div className="w-full h-full bg-slate-950 dark:bg-slate-950 light:bg-slate-900 rounded-[11px] flex items-center justify-center font-bold text-cyan-400 text-sm">
                  JA
                </div>
              </div>
              <span className="font-bold text-slate-100 dark:text-slate-100 light:text-slate-900 text-lg">
                Jasurbek Azizov
              </span>
            </div>
            <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 leading-relaxed max-w-md">
              Full-Stack Developer & Economics student at Webster University Geneva. Building production web systems, AI review platforms, and digital tools for business growth.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={PERSONAL_INFO.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-900 dark:bg-slate-900 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-300 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 transition-all"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-900 dark:bg-slate-900 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-300 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 transition-all"
                title="Telegram"
              >
                <Send className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-900 dark:bg-slate-900 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-300 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 transition-all"
                title="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.emailPrimary}`}
                className="p-2 rounded-lg bg-slate-900 dark:bg-slate-900 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-300 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 transition-all"
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-900 dark:bg-slate-900 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-300 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 transition-all"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div>
            <h4 className="text-xs font-bold text-slate-200 dark:text-slate-200 light:text-slate-900 uppercase tracking-wider mb-3">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <NavLink to="/about" className="hover:text-cyan-400 transition-colors">
                  {t.nav.about}
                </NavLink>
              </li>
              <li>
                <NavLink to="/experience" className="hover:text-cyan-400 transition-colors">
                  {t.nav.experience}
                </NavLink>
              </li>
              <li>
                <NavLink to="/projects" className="hover:text-cyan-400 transition-colors">
                  {t.nav.projects}
                </NavLink>
              </li>
              <li>
                <NavLink to="/investing" className="hover:text-cyan-400 transition-colors">
                  {t.nav.investing}
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Business & Geneva Links */}
          <div>
            <h4 className="text-xs font-bold text-slate-200 dark:text-slate-200 light:text-slate-900 uppercase tracking-wider mb-3">
              Specialized Portals
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <NavLink to="/geneva-card" className="hover:text-emerald-400 text-emerald-400/90 font-medium transition-colors">
                  {t.nav.genevaCard}
                </NavLink>
              </li>
              <li>
                <NavLink to="/certificates" className="hover:text-cyan-400 transition-colors">
                  {t.nav.certificates}
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="hover:text-cyan-400 transition-colors">
                  {t.nav.contact}
                </NavLink>
              </li>
              <li>
                <a href={PERSONAL_INFO.whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
                  WhatsApp Direct
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright & back to top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>© {new Date().getFullYear()} Jasurbek Azizov. {t.common.allRightsReserved}</p>
          <p className="flex items-center gap-1.5 text-slate-400">
            <span>{t.common.builtBy}</span>
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 dark:bg-slate-900 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-300 text-slate-300 hover:text-cyan-400 transition-all cursor-pointer"
          >
            <span>{t.common.backToTop}</span>
            <ArrowUp className="w-3.5 h-3.5 text-cyan-400" />
          </button>
        </div>
      </div>
    </footer>
  );
};
