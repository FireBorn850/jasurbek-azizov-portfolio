import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Moon, Sun, Globe, Menu, X, Briefcase, User, Code2, TrendingUp, Award, Mail, QrCode } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import { Language } from '../types';

export const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: t.nav.home, icon: User },
    { path: '/about', label: t.nav.about, icon: User },
    { path: '/experience', label: t.nav.experience, icon: Briefcase },
    { path: '/projects', label: t.nav.projects, icon: Code2 },
    { path: '/investing', label: t.nav.investing, icon: TrendingUp },
    { path: '/certificates', label: t.nav.certificates, icon: Award },
    { path: '/contact', label: t.nav.contact, icon: Mail },
    { path: '/geneva-card', label: t.nav.genevaCard, icon: QrCode, badge: 'Geneva' },
  ];

  const languages: Array<{ code: Language; label: string; flag: string }> = [
    { code: 'en', label: 'English', flag: '🇬🇧' },
    { code: 'fr', label: 'Français', flag: '🇫🇷' },
    { code: 'ru', label: 'Русский', flag: '🇷🇺' },
    { code: 'es', label: 'Español', flag: '🇪🇸' },
  ];

  const handleLangSelect = (lang: Language) => {
    setLanguage(lang);
    setLangDropdownOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/80 dark:bg-slate-950/85 light:bg-white/80 border-b border-slate-800/60 dark:border-slate-800/60 light:border-slate-200 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Monogram + Brand */}
        <NavLink
          to="/"
          className="flex items-center gap-3 group focus:outline-none"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 via-blue-600 to-emerald-400 p-[1px] shadow-lg shadow-cyan-500/10 group-hover:shadow-cyan-500/25 transition-all duration-300">
            <div className="w-full h-full bg-slate-950 dark:bg-slate-950 light:bg-slate-900 rounded-[11px] flex items-center justify-center font-bold text-cyan-400 text-sm tracking-wider">
              JA
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-slate-100 dark:text-slate-100 light:text-slate-900 text-base tracking-tight group-hover:text-cyan-400 transition-colors">
              Jasurbek Azizov
            </span>
            <span className="text-[11px] text-cyan-400/80 font-medium tracking-wide">
              Global Tech & Economics
            </span>
          </div>
        </NavLink>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `relative px-3 py-2 text-xs xl:text-sm font-medium rounded-lg transition-all duration-200 flex items-center gap-1.5 ${
                    isActive
                      ? 'text-cyan-400 dark:text-cyan-400 light:text-cyan-600 font-semibold'
                      : 'text-slate-300 dark:text-slate-300 light:text-slate-600 hover:text-cyan-400 dark:hover:text-cyan-400 light:hover:text-slate-900 hover:bg-slate-800/40'
                  }`
                }
              >
                <span>{item.label}</span>
                {item.badge && (
                  <span className="px-1.5 py-0.5 text-[10px] font-bold tracking-wider uppercase rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                    {item.badge}
                  </span>
                )}
                {isActive && (
                  <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full" />
                )}
              </NavLink>
            );
          })}
        </nav>

        {/* Controls: Language + Theme Toggle */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Language Selector */}
          <div className="relative">
            <button
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-900/80 dark:bg-slate-900/80 light:bg-slate-100 border border-slate-800 dark:border-slate-800 light:border-slate-200 text-slate-200 dark:text-slate-200 light:text-slate-700 hover:border-cyan-500/50 transition-all cursor-pointer"
              title="Change Language"
            >
              <Globe className="w-3.5 h-3.5 text-cyan-400" />
              <span className="uppercase">{language}</span>
            </button>

            {langDropdownOpen && (
              <div className="absolute right-0 mt-2 w-36 rounded-xl bg-slate-900 dark:bg-slate-900 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-200 shadow-2xl py-1 z-50 backdrop-blur-xl">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => handleLangSelect(lang.code)}
                    className={`w-full text-left px-3 py-2 text-xs flex items-center justify-between hover:bg-slate-800 dark:hover:bg-slate-800 light:hover:bg-slate-100 transition-colors cursor-pointer ${
                      language === lang.code ? 'text-cyan-400 font-bold' : 'text-slate-300 dark:text-slate-300 light:text-slate-700'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <span>{lang.flag}</span>
                      <span>{lang.label}</span>
                    </span>
                    {language === lang.code && <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-slate-900/80 dark:bg-slate-900/80 light:bg-slate-100 border border-slate-800 dark:border-slate-800 light:border-slate-200 text-cyan-400 hover:text-cyan-300 hover:border-cyan-500/50 transition-all cursor-pointer"
            title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-cyan-600" />}
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-cyan-400"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-cyan-600" />}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-200"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-950 dark:bg-slate-950 light:bg-white border-b border-slate-800 px-4 pt-3 pb-6 space-y-2 animate-in slide-in-from-top duration-300">
          {/* Mobile Language Bar */}
          <div className="flex items-center justify-between pb-3 mb-2 border-b border-slate-800 dark:border-slate-800 light:border-slate-200">
            <span className="text-xs font-medium text-slate-400 flex items-center gap-1">
              <Globe className="w-3.5 h-3.5 text-cyan-400" /> Select Language:
            </span>
            <div className="flex gap-1">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => handleLangSelect(lang.code)}
                  className={`px-2 py-1 rounded text-xs font-bold ${
                    language === lang.code
                      ? 'bg-cyan-500 text-slate-950'
                      : 'bg-slate-900 text-slate-300 border border-slate-800'
                  }`}
                >
                  {lang.code.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div className="grid grid-cols-2 gap-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center gap-2 p-2.5 rounded-xl text-xs font-medium ${
                      isActive
                        ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/30'
                        : 'text-slate-300 hover:bg-slate-900'
                    }`
                  }
                >
                  <Icon className="w-4 h-4 text-cyan-400" />
                  <span>{item.label}</span>
                </NavLink>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
};
