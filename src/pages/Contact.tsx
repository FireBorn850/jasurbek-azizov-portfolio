import React, { useState } from 'react';
import { Mail, Phone, Send, Linkedin, Instagram, QrCode, CheckCircle2, UserCheck, MessageSquare } from 'lucide-react';
import { SEOHelper } from '../components/SEOHelper';
import { VCFDownloadButton } from '../components/VCFDownloadButton';
import { PERSONAL_INFO } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';

export const ContactPage: React.FC = () => {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Create mailto link as fallback
    const mailtoSubject = encodeURIComponent(`[Portfolio Contact] ${formData.subject || 'Inquiry'}`);
    const mailtoBody = encodeURIComponent(
      `Name: ${formData.name}\nBusiness: ${formData.businessName}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${PERSONAL_INFO.emailPrimary}?subject=${mailtoSubject}&body=${mailtoBody}`;
  };

  const currentSiteUrl = window.location.origin || 'https://jasurbekazizov.com';
  // Standard SVG/Canvas QR Code renderer or dynamic QR image URL generated for high contrast scanning
  const qrCodeImageUrl = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(
    currentSiteUrl
  )}&color=0f172a&bgcolor=ffffff`;

  return (
    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      <SEOHelper
        title="Contact & Digital Business Card | Jasurbek Azizov"
        description="Direct contact portal and digital business card for Jasurbek Azizov. Save VCF contact card, send email, or connect via WhatsApp and LinkedIn."
      />

      {/* Header */}
      <div className="space-y-3 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-bold uppercase tracking-wider">
          <Mail className="w-3.5 h-3.5" />
          <span>Direct Contact Portal</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-100 dark:text-slate-100 light:text-slate-900">
          {t.contact.title}
        </h1>
        <p className="text-sm sm:text-base text-slate-400 dark:text-slate-400 light:text-slate-600">
          {t.contact.subtitle}
        </p>
      </div>

      {/* Quick Actions & VCF Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <a
          href={PERSONAL_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="p-6 rounded-2xl bg-slate-900/60 dark:bg-slate-900/60 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-200 backdrop-blur-xl shadow-xl hover:border-emerald-500/50 transition-all group flex items-center gap-4"
        >
          <div className="p-3.5 rounded-xl bg-emerald-500/10 text-emerald-400 group-hover:scale-110 transition-transform">
            <Send className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-slate-100 dark:text-slate-100 light:text-slate-900 group-hover:text-emerald-400 transition-colors">
              {t.contact.callWhatsapp}
            </h3>
            <p className="text-xs text-slate-400 font-mono mt-0.5">{PERSONAL_INFO.phonePrimary}</p>
          </div>
        </a>

        <a
          href={`mailto:${PERSONAL_INFO.emailPrimary}`}
          className="p-6 rounded-2xl bg-slate-900/60 dark:bg-slate-900/60 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-200 backdrop-blur-xl shadow-xl hover:border-cyan-500/50 transition-all group flex items-center gap-4"
        >
          <div className="p-3.5 rounded-xl bg-cyan-500/10 text-cyan-400 group-hover:scale-110 transition-transform">
            <Mail className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-slate-100 dark:text-slate-100 light:text-slate-900 group-hover:text-cyan-400 transition-colors">
              {t.contact.sendEmail}
            </h3>
            <p className="text-xs text-slate-400 font-mono mt-0.5">{PERSONAL_INFO.emailPrimary}</p>
          </div>
        </a>

        <div className="p-6 rounded-2xl bg-slate-900/60 dark:bg-slate-900/60 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-200 backdrop-blur-xl shadow-xl flex items-center justify-between">
          <div className="space-y-1">
            <h3 className="text-sm font-bold text-slate-100 dark:text-slate-100 light:text-slate-900">
              Save to Phone
            </h3>
            <p className="text-xs text-slate-400">iOS & Android Address Book</p>
          </div>
          <VCFDownloadButton variant="primary" />
        </div>
      </div>

      {/* Main Grid: Form + QR Code Container */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Contact Form */}
        <div className="lg:col-span-2 p-8 rounded-2xl bg-slate-900/60 dark:bg-slate-900/60 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-200 backdrop-blur-xl shadow-xl space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400">
              <MessageSquare className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-100 dark:text-slate-100 light:text-slate-900">
                {t.contact.formTitle}
              </h2>
              <p className="text-xs text-slate-400">Direct message form for project pitches and inquiries.</p>
            </div>
          </div>

          {submitted ? (
            <div className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 space-y-2 text-center">
              <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
              <h3 className="text-lg font-bold">{t.contact.successMsg}</h3>
              <p className="text-xs text-emerald-200/80">
                Your email client has been opened with your pre-filled message.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-300 dark:text-slate-300 light:text-slate-700">
                    {t.contact.nameLabel} *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950/80 dark:bg-slate-950/80 light:bg-slate-100 border border-slate-800 dark:border-slate-800 light:border-slate-300 text-slate-100 dark:text-slate-100 light:text-slate-900 focus:outline-none focus:border-cyan-500 text-xs"
                    placeholder="e.g. Jean Dupont"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-300 dark:text-slate-300 light:text-slate-700">
                    {t.contact.businessLabel}
                  </label>
                  <input
                    type="text"
                    value={formData.businessName}
                    onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950/80 dark:bg-slate-950/80 light:bg-slate-100 border border-slate-800 dark:border-slate-800 light:border-slate-300 text-slate-100 dark:text-slate-100 light:text-slate-900 focus:outline-none focus:border-cyan-500 text-xs"
                    placeholder="e.g. Geneva Bistro"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-300 dark:text-slate-300 light:text-slate-700">
                    {t.contact.emailLabel} *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950/80 dark:bg-slate-950/80 light:bg-slate-100 border border-slate-800 dark:border-slate-800 light:border-slate-300 text-slate-100 dark:text-slate-100 light:text-slate-900 focus:outline-none focus:border-cyan-500 text-xs"
                    placeholder="jean@example.com"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-300 dark:text-slate-300 light:text-slate-700">
                    {t.contact.subjectLabel} *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950/80 dark:bg-slate-950/80 light:bg-slate-100 border border-slate-800 dark:border-slate-800 light:border-slate-300 text-slate-100 dark:text-slate-100 light:text-slate-900 focus:outline-none focus:border-cyan-500 text-xs"
                    placeholder="Software Solution Inquiry"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-300 dark:text-slate-300 light:text-slate-700">
                  {t.contact.messageLabel} *
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-950/80 dark:bg-slate-950/80 light:bg-slate-100 border border-slate-800 dark:border-slate-800 light:border-slate-300 text-slate-100 dark:text-slate-100 light:text-slate-900 focus:outline-none focus:border-cyan-500 text-xs"
                  placeholder="Tell me about your business software needs or project goals..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-lg shadow-cyan-500/20 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>{t.contact.sendBtn}</span>
              </button>
            </form>
          )}
        </div>

        {/* High-Contrast QR Code Card */}
        <div className="p-8 rounded-2xl bg-slate-900/60 dark:bg-slate-900/60 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-200 backdrop-blur-xl shadow-xl flex flex-col items-center text-center space-y-6">
          <div className="flex items-center gap-2 text-cyan-400 font-bold text-sm">
            <QrCode className="w-5 h-5" />
            <span>{t.contact.qrTitle}</span>
          </div>

          {/* High contrast QR Container for printed card scanning */}
          <div className="p-4 bg-white rounded-2xl border-4 border-slate-800 shadow-2xl">
            <img
              src={qrCodeImageUrl}
              alt="Jasurbek Azizov Digital Business Card QR Code"
              className="w-48 h-48 object-contain"
            />
          </div>

          <p className="text-xs text-slate-400 leading-relaxed max-w-xs">
            {t.contact.qrDesc}
          </p>

          <div className="w-full pt-4 border-t border-slate-800/80 space-y-2">
            <p className="text-[11px] font-bold text-slate-300 uppercase tracking-wider">Social Channels</p>
            <div className="flex justify-center gap-3">
              <a
                href={PERSONAL_INFO.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-950 text-slate-300 hover:text-cyan-400 border border-slate-800"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-950 text-slate-300 hover:text-cyan-400 border border-slate-800"
              >
                <Send className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-950 text-slate-300 hover:text-pink-400 border border-slate-800"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
