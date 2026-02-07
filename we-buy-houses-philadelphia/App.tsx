import React, { useState, useEffect, useCallback } from 'react';
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
import { View, Area } from './types';
import { AREAS } from './constants';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentView, setCurrentView] = useState<View>('home');
  const [selectedArea, setSelectedArea] = useState<Area | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigate = useCallback((view: View, areaOrSection?: Area | string) => {
    if (view === 'area' && typeof areaOrSection !== 'string') {
      setSelectedArea(areaOrSection as Area);
    } else if (typeof areaOrSection === 'string') {
      if (view === 'home' && currentView === 'home') {
        const element = document.getElementById(areaOrSection);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          return;
        }
      }
    }

    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });

    if (typeof areaOrSection === 'string') {
      setTimeout(() => {
        const element = document.getElementById(areaOrSection);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [currentView]);

  const renderContent = () => {
    switch (currentView) {
      case 'home':
        return (
          <>
            <Hero />
            <SocialProof />
            <section id="services" className="py-24 bg-white">
              <Features onNavigate={navigate} />
            </section>
            <section id="how-it-works" className="py-24 bg-slate-50">
              <Process onNavigate={navigate} />
            </section>
            <section id="showcase" className="py-24 bg-[#023047] text-white overflow-hidden">
              <Showcase onNavigate={navigate} />
            </section>
            <section id="testimonials" className="py-24 bg-white overflow-hidden">
              <Testimonials onNavigate={navigate} />
            </section>
            <section id="faq" className="py-24 bg-slate-50">
              <FAQ onNavigate={navigate} />
            </section>
          </>
        );
      case 'how-it-works':
        return <HowItWorksPage onNavigate={navigate} />;
      case 'services':
        return <ServicesPage onNavigateArea={(area) => navigate('area', area)} />;
      case 'reviews':
        return <ReviewsPage onNavigate={navigate} />;
      case 'faq':
        return <FAQPage onNavigate={navigate} />;
      case 'area':
        return <AreaTemplatePage area={selectedArea || AREAS[0]} onNavigate={navigate} />;
      default:
        return <Hero />;
    }
  };

  return (
    <div className="relative min-h-screen selection:bg-[#8ECAE6]/30 selection:text-[#023047]">
      <Navbar isScrolled={isScrolled} onNavigate={navigate} currentView={currentView} />
      
      <main>
        {renderContent()}
        <CTA onNavigate={navigate} />
      </main>

      <Footer onNavigate={navigate} />
    </div>
  );
};

export default App;