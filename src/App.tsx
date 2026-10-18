import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import { ParticleCanvas } from './components/ParticleCanvas';
import { SiteHeader } from './components/SiteHeader';
import { SiteFooter } from './components/SiteFooter';
import { OnePage } from './pages/OnePage';

const NotFoundPage = lazy(() => import('./pages/NotFound').then((m) => ({ default: m.NotFoundPage })));

// NOTE: the previous multi-page version is kept, untouched, in src/pages/
// (About, Experience, Projects, Investing, Certificates, Contact, Services, GenevaCard, Home)
// and src/components/ (Navbar, Footer, ProjectCard, ...). They are simply not routed,
// so visitors don't see them. To bring a page back, import it here and add a <Route>.
//
// The site is now a single page. Old addresses (shared links, printed QR codes)
// jump to the matching section instead of breaking.
const OLD_ROUTES: Record<string, string> = {
  '/about': '/#about',
  '/experience': '/#experience',
  '/projects': '/#projects',
  '/certificates': '/#certificates',
  '/contact': '/#contact',
  '/investing': '/',
  '/services': '/',
  '/geneva-card': '/',
};

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Router>
          <div className="min-h-screen bg-slate-950 light:bg-slate-50 text-slate-100 light:text-slate-900 selection:bg-cyan-500 selection:text-slate-950 transition-colors duration-300 font-sans relative overflow-x-hidden">
            <ParticleCanvas />
            <SiteHeader />
            <main className="relative z-10">
              <Suspense fallback={<div className="min-h-[60vh]" />}>
                <Routes>
                  <Route path="/" element={<OnePage />} />
                  <Route path="/about" element={<Navigate to={OLD_ROUTES['/about']} replace />} />
                  <Route path="/experience" element={<Navigate to={OLD_ROUTES['/experience']} replace />} />
                  <Route path="/projects" element={<Navigate to={OLD_ROUTES['/projects']} replace />} />
                  <Route path="/certificates" element={<Navigate to={OLD_ROUTES['/certificates']} replace />} />
                  <Route path="/contact" element={<Navigate to={OLD_ROUTES['/contact']} replace />} />
                  <Route path="/investing" element={<Navigate to={OLD_ROUTES['/investing']} replace />} />
                  <Route path="/services" element={<Navigate to={OLD_ROUTES['/services']} replace />} />
                  <Route path="/geneva-card" element={<Navigate to={OLD_ROUTES['/geneva-card']} replace />} />
                  <Route path="*" element={<NotFoundPage />} />
                </Routes>
              </Suspense>
            </main>
            <SiteFooter />
          </div>
        </Router>
      </LanguageProvider>
    </ThemeProvider>
  );
}
