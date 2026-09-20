import React from 'react';
import { X, Award, ExternalLink, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { Certificate } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface CertificateModalProps {
  certificate: Certificate | null;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({ certificate, onClose }) => {
  const { language, t } = useLanguage();

  if (!certificate) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl overflow-hidden p-6 space-y-6">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-start gap-4 pr-8">
          <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
            <Award className="w-8 h-8" />
          </div>
          <div>
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
              {certificate.badgeText}
            </span>
            <h3 className="text-xl font-extrabold text-slate-100 mt-1">
              {certificate.title[language]}
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">
              {certificate.issuer} · Issued {certificate.date}
            </p>
          </div>
        </div>

        {/* Image Preview if available */}
        {certificate.image && (
          <div className="relative h-48 rounded-xl overflow-hidden bg-slate-950 border border-slate-800">
            <img
              src={certificate.image}
              alt={certificate.title[language]}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
            <div className="absolute bottom-3 left-3 flex items-center gap-2 px-3 py-1 rounded-lg bg-slate-900/90 border border-slate-700 text-xs text-emerald-400 font-medium">
              <ShieldCheck className="w-4 h-4" />
              <span>Verified Authenticity</span>
            </div>
          </div>
        )}

        {/* Description & ID */}
        <div className="space-y-3 text-xs text-slate-300 leading-relaxed">
          <p>{certificate.description[language]}</p>

          {certificate.credentialId && (
            <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800 flex items-center justify-between">
              <div>
                <p className="text-[10px] uppercase font-bold text-slate-500">{t.certificates.credentialId}</p>
                <p className="font-mono text-cyan-400 font-bold">{certificate.credentialId}</p>
              </div>
              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
            </div>
          )}
        </div>

        {/* Action Button */}
        <div className="pt-2 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs transition-all"
          >
            Close Details
          </button>
        </div>
      </div>
    </div>
  );
};
