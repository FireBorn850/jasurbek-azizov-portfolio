import React, { useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { ArrowLeft, Compass } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const COPY = {
  en: { title: 'Page not found', body: "The page you're looking for doesn't exist or has moved.", home: 'Back to home', contact: 'Contact me' },
  fr: { title: 'Page introuvable', body: "La page que vous cherchez n'existe pas ou a été déplacée.", home: "Retour à l'accueil", contact: 'Me contacter' },
  ru: { title: 'Страница не найдена', body: 'Страница, которую вы ищете, не существует или была перемещена.', home: 'На главную', contact: 'Связаться' },
  es: { title: 'Página no encontrada', body: 'La página que buscas no existe o se ha movido.', home: 'Volver al inicio', contact: 'Contactar' },
} as const;

export const NotFoundPage: React.FC = () => {
  const { language } = useLanguage();
  const { pathname } = useLocation();
  const c = COPY[language] ?? COPY.en;

  useEffect(() => {
    document.title = `${c.title} | Jasurbek Azizov`;
    // keep search engines from indexing unknown URLs
    let robots = document.querySelector('meta[name="robots"]') as HTMLMetaElement | null;
    if (!robots) {
      robots = document.createElement('meta');
      robots.setAttribute('name', 'robots');
      document.head.appendChild(robots);
    }
    robots.setAttribute('content', 'noindex');
    return () => robots?.remove();
  }, [c.title]);

  return (
    <section className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6 py-24 text-center space-y-6">
      <div className="mx-auto w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center">
        <Compass className="w-8 h-8 text-cyan-400 light:text-cyan-700" />
      </div>
      <p className="font-mono text-sm font-bold text-cyan-400 light:text-cyan-700">404</p>
      <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-100 light:text-slate-900">{c.title}</h1>
      <p className="text-slate-400 light:text-slate-600">{c.body}</p>
      <p className="font-mono text-xs text-slate-500 break-all">{pathname}</p>
      <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
        <NavLink
          to="/"
          className="px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold text-sm flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{c.home}</span>
        </NavLink>
        <NavLink
          to="/contact"
          className="px-5 py-3 rounded-xl bg-slate-900 light:bg-white border border-slate-700 light:border-slate-300 text-slate-100 light:text-slate-800 font-bold text-sm"
        >
          {c.contact}
        </NavLink>
      </div>
    </section>
  );
};
