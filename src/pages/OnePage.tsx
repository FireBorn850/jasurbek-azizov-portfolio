import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import {
  FileDown,
  Mail,
  Linkedin,
  Github,
  Send,
  MapPin,
  GraduationCap,
  Briefcase,
  ExternalLink,
  Award,
  Languages as LanguagesIcon,
  CheckCircle2,
  Sparkles,
  PenLine,
} from 'lucide-react';
import { SEOHelper } from '../components/SEOHelper';
import {
  PROFILE,
  INTRO,
  ABOUT,
  EXPERIENCE,
  PROJECTS,
  CERTIFICATES,
  SKILLS,
  LANGUAGES,
  ACTIVITIES,
} from '../data/profile';

const card =
  'rounded-2xl bg-slate-900/60 light:bg-white border border-slate-800 light:border-slate-200 backdrop-blur-xl';

const Section: React.FC<{ id: string; title: string; icon?: React.ReactNode; children: React.ReactNode }> = ({
  id,
  title,
  icon,
  children,
}) => (
  <section id={id} className="scroll-mt-24 space-y-6">
    <h2 className="flex items-center gap-3 text-2xl sm:text-3xl font-extrabold text-slate-100 light:text-slate-900">
      {icon && <span className="text-cyan-400 light:text-cyan-700">{icon}</span>}
      {title}
    </h2>
    {children}
  </section>
);

const ContactForm: React.FC = () => {
  const [data, setData] = useState({ name: '', email: '', message: '' });
  const [state, setState] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setState('sending');
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${PROFILE.email}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          ...data,
          _subject: `[Website] Message from ${data.name}`,
          _replyto: data.email,
          _template: 'table',
          _captcha: 'false',
        }),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok || json.success === false || json.success === 'false') throw new Error('failed');
      setState('sent');
    } catch {
      setState('error');
    }
  };

  const input =
    'w-full px-4 py-3 rounded-xl bg-slate-950/80 light:bg-slate-50 border border-slate-800 light:border-slate-300 text-slate-100 light:text-slate-900 text-sm focus:outline-none focus:border-cyan-500';

  if (state === 'sent') {
    return (
      <div className={`${card} p-8 text-center space-y-2`}>
        <CheckCircle2 className="w-10 h-10 text-emerald-400 light:text-emerald-700 mx-auto" />
        <p className="font-bold text-slate-100 light:text-slate-900">Thank you — your message has been sent.</p>
        <p className="text-sm text-slate-400 light:text-slate-600">I’ll reply by email as soon as I can.</p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className={`${card} p-6 sm:p-8 space-y-4`}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <label className="space-y-1 text-xs font-bold text-slate-300 light:text-slate-700">
          <span>Name</span>
          <input required className={input} value={data.name} onChange={(e) => setData({ ...data, name: e.target.value })} />
        </label>
        <label className="space-y-1 text-xs font-bold text-slate-300 light:text-slate-700">
          <span>Email</span>
          <input required type="email" className={input} value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })} />
        </label>
      </div>
      <label className="block space-y-1 text-xs font-bold text-slate-300 light:text-slate-700">
        <span>Message</span>
        <textarea required rows={4} className={input} value={data.message} onChange={(e) => setData({ ...data, message: e.target.value })} />
      </label>
      {state === 'error' && (
        <p className="text-xs text-rose-400 light:text-rose-700">
          The message couldn’t be sent right now — please email me at{' '}
          <a className="underline font-bold" href={`mailto:${PROFILE.email}`}>
            {PROFILE.email}
          </a>
          .
        </p>
      )}
      <button
        type="submit"
        disabled={state === 'sending'}
        className="w-full sm:w-auto px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 disabled:opacity-60 text-slate-950 font-bold text-sm flex items-center justify-center gap-2 transition-colors cursor-pointer"
      >
        <Send className="w-4 h-4" />
        {state === 'sending' ? 'Sending…' : 'Send message'}
      </button>
    </form>
  );
};

export const OnePage: React.FC = () => {
  const { hash } = useLocation();

  // Jump to the section when arriving with a #hash (e.g. from an old /about link)
  useEffect(() => {
    if (!hash) return;
    const el = document.getElementById(hash.slice(1));
    if (el) setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 50);
  }, [hash]);

  return (
    <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 lg:pt-20 pb-24 space-y-24">
      <SEOHelper
        title="Jasurbek Azizov | Economics & International Relations Student"
        description="Jasurbek Azizov — Economics & International Relations student at Webster University, Tashkent. Business analysis and operations experience, and builder of Mehrly."
      />

      {/* Intro */}
      <section id="top" className="grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_280px] gap-10 items-center">
        <figure className="order-first md:order-last mx-auto md:mx-0 w-44 sm:w-56 md:w-full">
          <div className="rounded-[28px] p-[2px] bg-gradient-to-br from-cyan-400 via-blue-600 to-emerald-400 shadow-2xl shadow-cyan-500/20">
            <img
              src={PROFILE.photo}
              alt={PROFILE.name}
              width={630}
              height={790}
              fetchPriority="high"
              className="block w-full aspect-[4/5] object-cover rounded-[26px] bg-slate-900"
            />
          </div>
        </figure>

        <div className="space-y-6">
          <p className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 light:bg-cyan-50 border border-cyan-500/30 text-cyan-300 light:text-cyan-800 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            {PROFILE.openTo}
          </p>
          <div className="space-y-3">
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-100 light:text-slate-900">
              {PROFILE.name}
            </h1>
            <p className="text-lg sm:text-xl font-semibold text-cyan-300 light:text-cyan-800">
              {PROFILE.headline} · {PROFILE.school}
            </p>
            <p className="flex items-center gap-1.5 text-sm text-slate-400 light:text-slate-600">
              <MapPin className="w-4 h-4" />
              {PROFILE.location}
            </p>
          </div>
          <p className="text-base sm:text-lg leading-relaxed text-slate-300 light:text-slate-700 max-w-2xl">{INTRO}</p>
          <div className="flex flex-wrap gap-3">
            <a
              href={PROFILE.cv}
              download="Jasurbek_Azizov_CV.pdf"
              className="px-5 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm flex items-center gap-2 transition-colors"
            >
              <FileDown className="w-4 h-4" /> Download CV
            </a>
            <a
              href={`mailto:${PROFILE.email}`}
              className="px-5 py-3 rounded-xl bg-slate-900 light:bg-white border border-slate-700 light:border-slate-300 text-slate-100 light:text-slate-800 hover:border-cyan-500/60 font-bold text-sm flex items-center gap-2 transition-colors"
            >
              <Mail className="w-4 h-4 text-cyan-400 light:text-cyan-700" /> Email me
            </a>
            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-xl bg-slate-900 light:bg-white border border-slate-700 light:border-slate-300 text-slate-100 light:text-slate-800 hover:border-cyan-500/60 font-bold text-sm flex items-center gap-2 transition-colors"
            >
              <Linkedin className="w-4 h-4 text-cyan-400 light:text-cyan-700" /> LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <Section id="about" title="About">
        <div className={`${card} p-6 sm:p-8 space-y-4`}>
          {ABOUT.map((p) => (
            <p key={p.slice(0, 20)} className="text-sm sm:text-base leading-relaxed text-slate-300 light:text-slate-700">
              {p}
            </p>
          ))}
          <div className="flex flex-wrap gap-2 pt-2">
            {SKILLS.map((s) => (
              <span
                key={s}
                className="px-3 py-1 rounded-full text-xs font-medium bg-slate-950/60 light:bg-slate-50 border border-slate-700 light:border-slate-200 text-slate-200 light:text-slate-700"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </Section>

      {/* Education */}
      <Section id="education" title="Education" icon={<GraduationCap className="w-6 h-6" />}>
        <div className={`${card} p-6 sm:p-8 space-y-5`}>
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
            <div>
              <h3 className="text-lg font-bold text-slate-100 light:text-slate-900">Webster University — Tashkent</h3>
              <p className="text-sm text-slate-300 light:text-slate-700">
                B.A. Economics &amp; International Relations (double major)
              </p>
            </div>
            <span className="text-sm font-mono text-slate-400 light:text-slate-600">2024 – 2028</span>
          </div>
          <div className="pt-4 border-t border-slate-800 light:border-slate-200">
            <h3 className="text-base font-bold text-slate-100 light:text-slate-900">Webster University — Geneva, Switzerland</h3>
            <p className="text-sm text-slate-300 light:text-slate-700">Exchange semester</p>
          </div>
        </div>
      </Section>

      {/* Experience */}
      <Section id="experience" title="Experience" icon={<Briefcase className="w-6 h-6" />}>
        <div className="space-y-4">
          {EXPERIENCE.map((r) => (
            <article key={r.title} className={`${card} p-6 sm:p-8 space-y-3`}>
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                <div>
                  <h3 className="text-lg font-bold text-slate-100 light:text-slate-900">{r.title}</h3>
                  <p className="text-sm font-semibold text-cyan-300 light:text-cyan-800">
                    {r.org} <span className="font-normal text-slate-400 light:text-slate-600">· {r.place}</span>
                  </p>
                </div>
                <span className="text-sm font-mono text-slate-400 light:text-slate-600 shrink-0">{r.period}</span>
              </div>
              <ul className="space-y-1.5 list-disc pl-5 marker:text-cyan-500">
                {r.points.map((pt) => (
                  <li key={pt.slice(0, 24)} className="text-sm leading-relaxed text-slate-300 light:text-slate-700">
                    {pt}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Section>

      {/* Projects */}
      <Section id="projects" title="Projects">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROJECTS.map((p) => (
            <article key={p.name} className={`${card} overflow-hidden flex flex-col`}>
              <img src={p.image} alt={p.name} loading="lazy" className="w-full aspect-[16/8] object-cover object-top bg-slate-950" />
              <div className="p-6 space-y-3 flex-1 flex flex-col">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-lg font-bold text-slate-100 light:text-slate-900">{p.name}</h3>
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-500/15 text-emerald-300 light:text-emerald-800 border border-emerald-500/30 shrink-0">
                    {p.status}
                  </span>
                </div>
                <p className="text-sm font-semibold text-cyan-300 light:text-cyan-800">{p.tagline}</p>
                <p className="text-sm leading-relaxed text-slate-300 light:text-slate-700">{p.description}</p>
                <dl className="text-xs space-y-1 text-slate-400 light:text-slate-600 pt-1">
                  <div>
                    <dt className="inline font-bold text-slate-300 light:text-slate-700">My role: </dt>
                    <dd className="inline">{p.role}</dd>
                  </div>
                  <div>
                    <dt className="inline font-bold text-slate-300 light:text-slate-700">Built with: </dt>
                    <dd className="inline">{p.stack}</dd>
                  </div>
                </dl>
                <div className="flex flex-wrap gap-3 pt-3 mt-auto">
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs flex items-center gap-1.5 transition-colors"
                  >
                    {p.urlLabel} <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  {p.repo && (
                    <a
                      href={p.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-lg border border-slate-700 light:border-slate-300 text-slate-200 light:text-slate-700 hover:border-cyan-500/60 font-bold text-xs flex items-center gap-1.5 transition-colors"
                    >
                      <Github className="w-3.5 h-3.5" /> Code
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* Certificates */}
      <Section id="certificates" title="Certificates & Training" icon={<Award className="w-6 h-6" />}>
        <ul className={`${card} divide-y divide-slate-800 light:divide-slate-200`}>
          {CERTIFICATES.map((c) => (
            <li key={c.title} className="p-5 sm:px-8 flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
              <div>
                <p className="text-sm font-bold text-slate-100 light:text-slate-900">{c.title}</p>
                <p className="text-xs text-slate-400 light:text-slate-600">
                  {c.issuer}
                  {c.detail ? ` · ${c.detail}` : ''}
                </p>
              </div>
              <span className="flex items-center gap-3 shrink-0">
                <span className="text-xs font-mono text-slate-400 light:text-slate-600">{c.date}</span>
                {c.url && (
                  <a
                    href={c.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-cyan-400 light:text-cyan-700 hover:underline flex items-center gap-1"
                  >
                    View <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </span>
            </li>
          ))}
        </ul>
      </Section>

      {/* Writing — placeholder until the first real article is published.
          When it is ready: replace this card with a list of articles (title, date, 2-line summary, link). */}
      <Section id="writing" title="Writing" icon={<PenLine className="w-6 h-6" />}>
        <div className={`${card} p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-dashed`}>
          <div className="space-y-1.5">
            <p className="text-sm font-bold text-slate-100 light:text-slate-900">First article coming soon</p>
            <p className="text-sm leading-relaxed text-slate-300 light:text-slate-700 max-w-2xl">
              Short analyses on economics, international relations and business — written from a student’s perspective,
              with data and clear conclusions.
            </p>
          </div>
          <span className="shrink-0 px-3 py-1 rounded-full text-xs font-bold bg-cyan-500/10 text-cyan-300 light:text-cyan-800 border border-cyan-500/30">
            In progress
          </span>
        </div>
      </Section>

      {/* Languages & Activities */}
      <Section id="beyond" title="Languages & Activities" icon={<LanguagesIcon className="w-6 h-6" />}>
        <div className="grid grid-cols-1 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] gap-6">
          <ul className={`${card} p-6 space-y-3`}>
            {LANGUAGES.map((l) => (
              <li key={l.name} className="flex items-baseline justify-between gap-3 text-sm">
                <span className="font-bold text-slate-100 light:text-slate-900">{l.name}</span>
                <span className="text-slate-400 light:text-slate-600 text-right">{l.level}</span>
              </li>
            ))}
          </ul>
          <div className="space-y-4">
            {ACTIVITIES.map((a) => (
              <div key={a.title} className={`${card} p-5`}>
                <h3 className="text-sm font-bold text-cyan-300 light:text-cyan-800">{a.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-slate-300 light:text-slate-700">{a.text}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" title="Contact" icon={<Mail className="w-6 h-6" />}>
        <div className="grid grid-cols-1 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] gap-6">
          <div className={`${card} p-6 space-y-4 text-sm`}>
            <p className="text-slate-300 light:text-slate-700 leading-relaxed">
              I’m happy to hear about internships, research projects or collaborations. Email is the best way to reach me.
            </p>
            <ul className="space-y-3">
              <li>
                <a href={`mailto:${PROFILE.email}`} className="flex items-center gap-2 text-slate-100 light:text-slate-900 hover:text-cyan-400 light:hover:text-cyan-700 break-all">
                  <Mail className="w-4 h-4 text-cyan-400 light:text-cyan-700 shrink-0" /> {PROFILE.email}
                </a>
              </li>
              <li>
                <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-100 light:text-slate-900 hover:text-cyan-400 light:hover:text-cyan-700">
                  <Linkedin className="w-4 h-4 text-cyan-400 light:text-cyan-700" /> LinkedIn
                </a>
              </li>
              <li>
                <a href={PROFILE.telegram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-100 light:text-slate-900 hover:text-cyan-400 light:hover:text-cyan-700">
                  <Send className="w-4 h-4 text-cyan-400 light:text-cyan-700" /> Telegram
                </a>
              </li>
              <li>
                <a href={PROFILE.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-100 light:text-slate-900 hover:text-cyan-400 light:hover:text-cyan-700">
                  <Github className="w-4 h-4 text-cyan-400 light:text-cyan-700" /> GitHub
                </a>
              </li>
            </ul>
          </div>
          <ContactForm />
        </div>
      </Section>
    </div>
  );
};
