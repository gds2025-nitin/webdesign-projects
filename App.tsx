import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import Features from './components/Features';
import Process from './components/Process';
import Showcase from './components/Showcase';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';
import HowItWorksPage from './pages/HowItWorksPage';
import ServicesPage from './pages/ServicesPage';
import ReviewsPage from './pages/ReviewsPage';
import FAQPage from './pages/FAQPage';
import AreaTemplatePage from './pages/AreaTemplatePage';
import { AREAS } from './constants';

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    } else {
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 0);
    }
  }, [pathname, hash]);

  return null;
};

const HomePage: React.FC = () => (
  <>
    <Hero />
    <SocialProof />
    <section id="services" className="py-24 bg-white">
      <Features />
    </section>
    <section id="how-it-works" className="py-24 bg-slate-50">
      <Process />
    </section>
    <section id="showcase" className="py-24 bg-[#023047] text-white overflow-hidden">
      <Showcase />
    </section>
    <section id="testimonials" className="py-24 bg-white overflow-hidden">
      <Testimonials />
    </section>
    <section id="faq" className="py-24 bg-slate-50">
      <FAQ />
    </section>
  </>
);

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div className="relative min-h-screen selection:bg-[#8ECAE6]/30 selection:text-[#023047]">
        <Navbar isScrolled={isScrolled} />
        
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/how-it-works" element={<HowItWorksPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/reviews" element={<ReviewsPage />} />
            <Route path="/faq" element={<FAQPage />} />
            {AREAS.map(area => (
              <Route 
                key={area.id} 
                path={`/area/${area.id}`} 
                element={<AreaTemplatePage area={area} />} 
              />
            ))}
          </Routes>
          <CTA />
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;