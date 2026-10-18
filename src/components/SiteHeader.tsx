import React, { useState } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const LINKS = [
  { href: '#about', label: 'About' },
  { href: '#education', label: 'Education' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#certificates', label: 'Certificates' },
  { href: '#contact', label: 'Contact' },
];

export const SiteHeader: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const themeLabel = theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode';

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/85 light:bg-white/85 border-b border-slate-800/60 light:border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        <a href="/#top" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 via-blue-600 to-emerald-400 p-[1px]">
            <span className="w-full h-full rounded-[11px] bg-slate-950 flex items-center justify-center font-bold text-cyan-400 text-xs tracking-wider">
              JA
            </span>
          </span>
          <span className="font-bold text-slate-100 light:text-slate-900">Jasurbek Azizov</span>
        </a>

        <nav className="hidden md:flex items-center gap-1">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={`/${l.href}`}
              className="px-3 py-2 rounded-lg text-sm font-medium text-slate-300 light:text-slate-600 hover:text-cyan-400 light:hover:text-cyan-700 transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label={themeLabel}
            title={themeLabel}
            className="p-2 rounded-lg bg-slate-900 light:bg-slate-100 border border-slate-800 light:border-slate-200 text-cyan-400 light:text-cyan-700 cursor-pointer"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
          </button>
          <button
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className="md:hidden p-2 rounded-lg bg-slate-900 light:bg-slate-100 border border-slate-800 light:border-slate-200 text-slate-200 light:text-slate-800 cursor-pointer"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="md:hidden border-t border-slate-800 light:border-slate-200 bg-slate-950 light:bg-white px-4 py-3 grid grid-cols-2 gap-1">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={`/${l.href}`}
              onClick={() => setOpen(false)}
              className="px-3 py-2.5 rounded-lg text-sm font-medium text-slate-200 light:text-slate-700 hover:bg-slate-900 light:hover:bg-slate-100"
            >
              {l.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
};
