import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import { ParticleCanvas } from './components/ParticleCanvas';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

import { Home } from './pages/Home';
import { About } from './pages/About';
import { ExperiencePage } from './pages/Experience';
import { ProjectsPage } from './pages/Projects';
import { InvestingPage } from './pages/Investing';
import { CertificatesPage } from './pages/Certificates';
import { ContactPage } from './pages/Contact';
import { GenevaCardPage } from './pages/GenevaCard';

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
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/experience" element={<ExperiencePage />} />
                <Route path="/projects" element={<ProjectsPage />} />
                <Route path="/investing" element={<InvestingPage />} />
                <Route path="/certificates" element={<CertificatesPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/geneva-card" element={<GenevaCardPage />} />
                {/* Fallback redirect */}
                <Route path="*" element={<Home />} />
              </Routes>
            </main>

            {/* Footer */}
            <Footer />
          </div>
        </Router>
      </LanguageProvider>
    </ThemeProvider>
  );
}
