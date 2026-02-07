import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';
import { View } from '../types';

interface NavbarProps {
  isScrolled: boolean;
  currentView?: View;
  onNavigate: (view: View, section?: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ isScrolled, onNavigate, currentView }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', view: 'home' as View },
    { name: 'How It Works', view: 'how-it-works' as View },
    { name: 'Services', view: 'services' as View },
    { name: 'Reviews', view: 'reviews' as View },
    { name: 'FAQ', view: 'faq' as View },
  ];

  const handleLinkClick = (view: View, section?: string) => {
    onNavigate(view, section);
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled || currentView !== 'home' ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <button onClick={() => handleLinkClick('home')} className="flex flex-col text-left">
              <span className={`text-2xl font-black tracking-tight leading-none ${isScrolled || currentView !== 'home' ? 'text-[#023047]' : 'text-[#023047]'}`}>
                WE BUY HOUSES
              </span>
              <span className="text-[10px] font-bold tracking-widest uppercase text-[#FB8500]">
                Philadelphia Region
              </span>
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleLinkClick(link.view)}
                className={`text-sm font-bold transition-colors ${
                  currentView === link.view ? 'text-[#FB8500]' : 'text-[#023047] hover:text-[#219EBC]'
                }`}
              >
                {link.name}
              </button>
            ))}
            <div className="flex items-center space-x-6">
              <a href="tel:2155550123" className="flex items-center text-sm font-black text-[#023047] hover:text-[#FB8500] transition-colors">
                <Phone className="w-4 h-4 mr-2 text-[#FB8500]" />
                (215) 555-0123
              </a>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleLinkClick('home')}
                className="bg-[#FB8500] text-white px-6 py-2.5 rounded-full font-black text-sm shadow-lg shadow-[#FB8500]/20 hover:bg-[#FFB703] transition-all"
              >
                GET AN OFFER
              </motion.button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#023047] p-2 hover:bg-slate-100 rounded-md transition-colors"
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-slate-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleLinkClick(link.view)}
                  className={`w-full text-left block px-3 py-3 text-base font-bold rounded-lg transition-all ${
                    currentView === link.view ? 'text-[#FB8500] bg-orange-50' : 'text-[#023047] hover:bg-slate-50'
                  }`}
                >
                  {link.name}
                </button>
              ))}
              <div className="pt-4 space-y-3">
                <a href="tel:2155550123" className="flex items-center px-3 py-2 text-lg font-black text-[#023047]">
                  <Phone className="w-5 h-5 mr-3 text-[#FB8500]" />
                  (215) 555-0123
                </a>
                <button 
                  onClick={() => handleLinkClick('home')}
                  className="w-full bg-[#FB8500] text-white px-6 py-4 rounded-xl font-black text-lg shadow-xl shadow-orange-200"
                >
                  GET YOUR CASH OFFER
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;