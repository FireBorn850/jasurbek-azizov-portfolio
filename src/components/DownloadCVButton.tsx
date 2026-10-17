import React from 'react';
import { FileDown } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const LABEL = { en: 'Download CV', fr: 'Télécharger le CV', ru: 'Скачать CV', es: 'Descargar CV' } as const;

export const CV_URL = '/Jasurbek_Azizov_CV.pdf';

export const DownloadCVButton: React.FC<{ className?: string }> = ({ className = '' }) => {
  const { language } = useLanguage();
  return (
    <a
      href={CV_URL}
      download="Jasurbek_Azizov_CV.pdf"
      className={`px-5 py-3.5 rounded-xl bg-slate-900 light:bg-white border border-cyan-500/40 text-cyan-300 light:text-cyan-700 hover:border-cyan-400 hover:bg-cyan-500/10 font-bold text-sm flex items-center gap-2 transition-all ${className}`}
    >
      <FileDown className="w-4 h-4" />
      <span>{LABEL[language] ?? LABEL.en}</span>
    </a>
  );
};
