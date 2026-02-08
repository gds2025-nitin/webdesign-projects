import React, { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';

const Solutions = lazy(() => import('./pages/Solutions').then(m => ({ default: m.Solutions })));
const Agencies = lazy(() => import('./pages/Agencies').then(m => ({ default: m.Agencies })));
const LocalServices = lazy(() => import('./pages/LocalServices').then(m => ({ default: m.LocalServices })));
const Pricing = lazy(() => import('./pages/Pricing').then(m => ({ default: m.Pricing })));
const Contact = lazy(() => import('./pages/Contact').then(m => ({ default: m.Contact })));

const LoginPlaceholder = () => <div className="h-screen flex items-center justify-center text-white">Login Placeholder</div>;

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen font-sans selection:bg-primary-500 selection:text-white flex flex-col">
        <Header />

        <main className="flex-grow">
          <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-slate-950 text-slate-500">Loading...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/solutions" element={<Solutions />} />
              <Route path="/agencies" element={<Agencies />} />
              <Route path="/local-services" element={<LocalServices />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<LoginPlaceholder />} />
            </Routes>
          </Suspense>
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;