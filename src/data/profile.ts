// Single source of truth for the one-page site.
// Everything here comes from Jasurbek's CV or his own answers — keep it that way:
// if something isn't confirmed, leave it out rather than guessing.

export const PROFILE = {
  name: 'Jasurbek Azizov',
  headline: 'Economics & International Relations student',
  school: 'Webster University, Tashkent',
  location: 'Tashkent, Uzbekistan',
  openTo: 'Open to internships in business analysis, economic research and international organisations',
  email: 'azizovjasur2007@gmail.com',
  linkedin: 'https://linkedin.com/in/jasurbek-azizov07',
  github: 'https://github.com/FireBorn850',
  telegram: 'https://t.me/azizovj0704',
  cv: '/Jasurbek_Azizov_CV.pdf',
  photo: '/images/jasurbek-azizov.jpg',
};

export const INTRO =
  'I study how markets, trade and policy shape the way businesses and countries grow — and I like testing those ideas in practice. I’ve worked in business analysis and in real-time operations, and on the side I build small software products for service businesses.';

export const ABOUT = [
  'I grew up in Bukhara and study a double major in Economics and International Relations at Webster University’s Tashkent campus, with an exchange semester at Webster University Geneva, Switzerland.',
  'My work so far sits where business and numbers meet: researching markets and building Excel-based performance tracking as a business analyst intern, and coordinating a team of field drivers in real time as an operations dispatcher.',
  'Building my own products taught me to look at a business the way an economist and a CFO would: who the customer is, what problem they pay to solve, and whether the numbers work — not just whether the product looks good.',
];

export interface Role {
  title: string;
  org: string;
  place: string;
  period: string;
  points: string[];
}

export const EXPERIENCE: Role[] = [
  {
    title: 'Business Analyst Intern',
    org: 'JvEdtech Medovation',
    place: 'Remote',
    period: 'May 2026 – Jul 2026',
    points: [
      'Researched 20+ sources on clinical trial data, diagnostic accuracy and healthcare benchmarks to inform strategic business recommendations.',
      'Collected and analysed program data to support Excel-based performance tracking for internal projects and educational initiatives.',
      'Represented the company in stakeholder meetings, contributing to cross-team coordination across EdTech and healthcare product lines.',
      'Designed 10+ marketing fliers and presentations for EdTech and healthcare outreach campaigns.',
    ],
  },
  {
    title: 'Dispatcher / Operations Coordinator',
    org: 'Barr Transit',
    place: 'Tashkent office · serving clients and drivers in New York',
    period: 'Nov 2025 – Jan 2026',
    points: [
      'Coordinated real-time logistics and scheduling for a team of 15 field drivers in New York from the Tashkent office.',
      'Optimised routing and resource allocation across the driver team to reduce delays and improve daily efficiency.',
      'Served as the primary point of contact for on-the-ground issues, resolving scheduling conflicts and delays in real time.',
    ],
  },
  {
    title: 'Sales Assistant',
    org: 'Local market',
    place: 'Bukhara, Uzbekistan',
    period: '2021 – 2022',
    points: ['Worked as a seller for a year — serving customers every day and handling sales and payments.'],
  },
];

export interface ProjectItem {
  name: string;
  tagline: string;
  description: string;
  role: string;
  stack: string;
  status: string;
  url: string;
  urlLabel: string;
  repo?: string;
  image: string;
}

export const PROJECTS: ProjectItem[] = [
  {
    name: 'Mehrly',
    tagline: 'AI replies to Google reviews for restaurants & cafés',
    description:
      'Restaurants get many Google reviews in several languages and rarely have time to answer them. Mehrly drafts a polite, on-brand reply to every review in the guest’s language (FR · EN · DE · IT); good reviews can be answered in one click, while negative ones always wait for a human.',
    role: 'Idea, product, build and launch',
    stack: 'Python · Django · Gemini AI',
    status: 'Live · early stage',
    url: 'https://mehrly.com',
    urlLabel: 'mehrly.com',
    repo: 'https://github.com/FireBorn850/Auto_Responder',
    image: '/projects/mehrly.jpg',
  },
  {
    name: 'Smart Booking & Scheduling',
    tagline: 'Online booking for barbershops, salons and clinics',
    description:
      'A booking web app where clients pick a service, a staff member and a free time slot, with automatic reminders to reduce no-shows, plus an admin dashboard for the business owner.',
    role: 'Product design and build (AI-assisted development)',
    stack: 'React · TypeScript · Supabase',
    status: 'Live demo',
    url: 'https://barber-shop-booking-six.vercel.app',
    urlLabel: 'Live demo',
    repo: 'https://github.com/FireBorn850/BarberShop-Booking',
    image: '/photo_2026-08-16_13-17-45.jpg',
  },
];

export const CERTIFICATES: Array<{ title: string; issuer: string; date: string; detail?: string; url?: string }> = [
  { title: 'Fundamentals of Programming in Python & Django — 9-month course', issuer: 'Monday Labs Academy, Bukhara', date: 'Completed', detail: 'HTML, CSS, Python, Django', url: '/certificates/monday-python-django.pdf' },
  { title: 'Climate Change Negotiations and Health', issuer: 'UN CC:e-Learn (UNITAR / WHO / UNFCCC)', date: 'Sept 2024' },
  { title: 'Gender Equality and Human Rights in Climate Action and Renewable Energy', issuer: 'UN CC:e-Learn (UNITAR / UN Environment / UN Women)', date: 'Sept 2024' },
  { title: 'IELTS Academic — Overall Band 6.0', issuer: 'IELTS', date: '2023' },
];

export const SKILLS = [
  'Business & data analysis',
  'Excel modelling (dashboards, ROI analysis)',
  'Market research',
  'Operations coordination',
  'Python / Django / HTML / CSS',
  'Building with AI tools',
];

export const LANGUAGES = [
  { name: 'Uzbek', level: 'Native' },
  { name: 'Tajik', level: 'Native (spoken at home)' },
  { name: 'English', level: 'Advanced (C1)' },
  { name: 'Russian', level: 'Fluent' },
  { name: 'Spanish', level: 'Elementary (A2)' },
  { name: 'French', level: 'Beginner (A1) — learning' },
];

export const ACTIVITIES = [
  {
    title: 'Debate',
    text: 'Represented Webster University as part of a three-person team at an inter-university debate competition hosted by the University of World Economy and Diplomacy in Tashkent.',
  },
  {
    title: 'Chess',
    text: 'Competitive player since school: school champion, winner of inter-school tournaments in Bukhara, with many medals and certificates.',
  },
  {
    title: 'Music',
    text: 'Studied violin (and some piano) at music school and performed violin in concerts — including in Bukhara’s old city alongside my teacher.',
  },
];
