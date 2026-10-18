import React from 'react';
import { PROFILE } from '../data/profile';

export const SiteFooter: React.FC = () => (
  <footer className="relative z-10 border-t border-slate-800/80 light:border-slate-200 bg-slate-950 light:bg-slate-100">
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <figure className="py-10 text-center border-b border-slate-800/60 light:border-slate-200">
        <blockquote className="text-lg sm:text-xl font-semibold italic text-slate-200 light:text-slate-800">
          “Aspire to inspire before you expire.”
        </blockquote>
        <figcaption className="mt-2 text-xs font-medium tracking-wide text-cyan-400 light:text-cyan-700">— Eugene Bell Jr.</figcaption>
      </figure>
      <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400 light:text-slate-600">
        <p>© {new Date().getFullYear()} {PROFILE.name}</p>
        <p>
          <a href={`mailto:${PROFILE.email}`} className="hover:text-cyan-400 light:hover:text-cyan-700">
            {PROFILE.email}
          </a>
        </p>
      </div>
    </div>
  </footer>
);
