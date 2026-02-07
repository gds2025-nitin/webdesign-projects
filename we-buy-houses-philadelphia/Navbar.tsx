import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface NavbarProps {
  isScrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isScrolled }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'How It Works', path: '/how-it-works' },
    { name: 'Services', path: '/services' },
    { name: 'Reviews', path: '/reviews' },
    { name: 'FAQ', path: '/faq' },
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname !== '/') return false;
    return location.pathname.startsWith(path);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || location.pathname !== '/' ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" onClick={handleLinkClick} className="flex flex-col text-left">
              <span className={`text-2xl font-black tracking-tight leading-none ${isScrolled || location.pathname !== '/' ? 'text-[#023047]' : 'text-[#023047]'}`}>
                WE BUY HOUSES
              </span>
              <span className="text-[10px] font-bold tracking-widest uppercase text-[#FB8500]">
                Philadelphia Region
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-bold transition-colors ${isActive(link.path) ? 'text-[#FB8500]' : 'text-[#023047] hover:text-[#219EBC]'
                  }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex items-center space-x-6">
              <a href="tel:2155550123" className="flex items-center text-sm font-black text-[#023047] hover:text-[#FB8500] transition-colors">
                <Phone className="w-4 h-4 mr-2 text-[#FB8500]" />
                (215) 555-0123
              </a>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  document.getElementById('hero-form')?.scrollIntoView({ behavior: 'smooth' });
                }}
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
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={handleLinkClick}
                  className={`w-full text-left block px-3 py-3 text-base font-bold rounded-lg transition-all ${isActive(link.path) ? 'text-[#FB8500] bg-orange-50' : 'text-[#023047] hover:bg-slate-50'
                    }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 space-y-3">
                <a href="tel:2155550123" className="flex items-center px-3 py-2 text-lg font-black text-[#023047]">
                  <Phone className="w-5 h-5 mr-3 text-[#FB8500]" />
                  (215) 555-0123
                </a>
                <button
                  onClick={() => {
                    setIsOpen(false);
                    document.getElementById('hero-form')?.scrollIntoView({ behavior: 'smooth' });
                  }}
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