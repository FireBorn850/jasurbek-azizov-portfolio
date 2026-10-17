import React, { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import { ParticleCanvas } from './components/ParticleCanvas';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

import { Home } from './pages/Home';

// Pages other than Home are loaded on demand, so the first visit downloads less JavaScript
const About = lazy(() => import('./pages/About').then((m) => ({ default: m.About })));
const ExperiencePage = lazy(() => import('./pages/Experience').then((m) => ({ default: m.ExperiencePage })));
const ProjectsPage = lazy(() => import('./pages/Projects').then((m) => ({ default: m.ProjectsPage })));
const InvestingPage = lazy(() => import('./pages/Investing').then((m) => ({ default: m.InvestingPage })));
const CertificatesPage = lazy(() => import('./pages/Certificates').then((m) => ({ default: m.CertificatesPage })));
const ContactPage = lazy(() => import('./pages/Contact').then((m) => ({ default: m.ContactPage })));
const GenevaCardPage = lazy(() => import('./pages/GenevaCard').then((m) => ({ default: m.GenevaCardPage })));
const NotFoundPage = lazy(() => import('./pages/NotFound').then((m) => ({ default: m.NotFoundPage })));

// Automatically scroll to top on route change
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Router>
          <ScrollToTop />
          <div className="min-h-screen bg-slate-950 dark:bg-slate-950 light:bg-slate-50 text-slate-100 dark:text-slate-100 light:text-slate-900 selection:bg-cyan-500 selection:text-slate-950 transition-colors duration-300 font-sans relative overflow-x-hidden">
            {/* Interactive Particle Canvas */}
            <ParticleCanvas />

            {/* Sticky Navigation Bar */}
            <Navbar />

            {/* Main Page Content Container */}
            <main className="relative z-10 min-h-[calc(100vh-160px)]">
              <Suspense fallback={<div className="min-h-[60vh]" />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/experience" element={<ExperiencePage />} />
                <Route path="/projects" element={<ProjectsPage />} />
                <Route path="/investing" element={<InvestingPage />} />
                <Route path="/certificates" element={<CertificatesPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/geneva-card" element={<GenevaCardPage />} />
                {/* Unknown URLs get a real "not found" page */}
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
              </Suspense>
            </main>

            {/* Footer */}
            <Footer />
          </div>
        </Router>
      </LanguageProvider>
    </ThemeProvider>
  );
}
