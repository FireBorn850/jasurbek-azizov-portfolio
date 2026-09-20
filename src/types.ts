export type Language = 'en' | 'fr' | 'ru' | 'es';

export interface Project {
  id: string;
  title: Record<Language, string>;
  subtitle: Record<Language, string>;
  problem: Record<Language, string>;
  solution: Record<Language, string>;
  techStack: string[];
  liveDemoUrl: string;
  githubUrl?: string;
  category: 'saas' | 'automation' | 'fullstack' | 'business';
  featured: boolean;
  metrics?: Record<Language, string>;
  image: string;
}

export interface Experience {
  id: string;
  role: Record<Language, string>;
  company: string;
  location: Record<Language, string>;
  period: string;
  type: Record<Language, string>;
  highlights: Record<Language, string[]>;
  skills: string[];
}

export interface InvestmentPosition {
  ticker: string;
  name: string;
  market: string;
  allocationPercent: number;
  type: 'Equity ETF' | 'REIT' | 'Individual Stock';
  shariaCertified: boolean;
  description: Record<Language, string>;
  holdingsSummary: string;
  color: string;
}

export interface Certificate {
  id: string;
  title: Record<Language, string>;
  issuer: string;
  date: string;
  category: 'tech' | 'academic' | 'global' | 'extracurricular';
  description: Record<Language, string>;
  credentialId?: string;
  badgeText: string;
  image?: string;
}

export interface LanguageSkill {
  code: string;
  name: Record<Language, string>;
  nativeName: string;
  level: Record<Language, string>;
  flag: string;
  percent: number;
}

export interface PersonalHighlight {
  id: string;
  title: Record<Language, string>;
  subtitle: Record<Language, string>;
  category: 'chess' | 'music' | 'academic' | 'global';
  icon: string;
  details: Record<Language, string>;
}

export interface ContactFormData {
  name: string;
  businessName: string;
  email: string;
  subject: string;
  message: string;
}
