
import React from 'react';
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { View, Area } from '../types';
import { AREAS } from '../constants';

interface FooterProps {
  onNavigate: (view: View, areaOrSection?: Area | string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#023047] text-[#8ECAE6] pt-24 pb-12 overflow-hidden relative">
      {/* Decorative gradient background element */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#219EBC]/5 rounded-full blur-[120px] -mr-64 -mb-64 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-20 mb-20">
          
          {/* Brand Column */}
          <div className="md:col-span-4 space-y-8 flex flex-col items-center md:items-start text-center md:text-left">
            <button onClick={() => onNavigate('home')} className="flex flex-col items-center md:items-start text-left group">
              <span className="text-3xl font-black tracking-tight leading-none text-white transition-colors">
                WE BUY HOUSES
              </span>
              <span className="text-[11px] font-black tracking-[0.2em] uppercase text-[#FB8500] mt-1">
                Philadelphia Region
              </span>
            </button>
            <p className="text-lg leading-relaxed max-w-sm text-[#8ECAE6]/80 font-medium">
              The premier direct home buying service in Philadelphia. We provide ethical, as-is cash solutions that help homeowners close fast and move on with peace of mind.
            </p>
            <div className="flex space-x-5">
              {[
                { Icon: Facebook, label: 'Facebook' },
                { Icon: Instagram, label: 'Instagram' },
                { Icon: Linkedin, label: 'LinkedIn' }
              ].map((social, i) => (
                <a 
                  key={i}
                  href="#" 
                  className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-[#FB8500] hover:border-[#FB8500] hover:scale-110 transition-all duration-300" 
                  aria-label={social.label}
                >
                  <social.Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Nav & Locations Group */}
          <div className="md:col-span-4 grid grid-cols-2 gap-8">
            {/* Quick Links */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <h4 className="text-white font-black mb-8 uppercase tracking-[0.15em] text-[11px]">Navigation</h4>
              <ul className="space-y-4">
                {['Home', 'How It Works', 'Services', 'Reviews', 'FAQ'].map((link) => (
                  <li key={link}>
                    <button 
                      onClick={() => onNavigate(link.toLowerCase().replace(/\s/g, '-') as View)} 
                      className="text-base font-bold text-[#8ECAE6]/60 hover:text-white transition-colors duration-200"
                    >
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Locations */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <h4 className="text-white font-black mb-8 uppercase tracking-[0.15em] text-[11px]">Key Areas</h4>
              <ul className="space-y-4">
                {AREAS.slice(0, 5).map((area) => (
                  <li key={area.id}>
                    <button 
                      onClick={() => onNavigate('area', area)} 
                      className="text-base font-bold text-[#8ECAE6]/60 hover:text-[#FB8500] transition-colors duration-200 text-center md:text-left"
                    >
                      {area.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact & Support */}
          <div className="md:col-span-4 flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="text-white font-black mb-8 uppercase tracking-[0.15em] text-[11px]">Direct Support</h4>
            <div className="w-full space-y-8">
              <div className="flex flex-col items-center md:items-start">
                <div className="flex items-start mb-2 group">
                  <MapPin className="w-6 h-6 mr-4 text-[#FB8500] shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-base font-bold text-[#8ECAE6]/80 leading-relaxed">
                    123 Broad Street, Suite 400<br />Philadelphia, PA 19102
                  </span>
                </div>
              </div>
              <div className="flex flex-col items-center md:items-start">
                <a href="tel:2155550123" className="flex items-center text-2xl font-black text-white hover:text-[#FB8500] transition-colors group">
                  <Phone className="w-6 h-6 mr-4 text-[#FB8500] group-hover:rotate-12 transition-transform" />
                  (215) 555-0123
                </a>
              </div>
              <div className="flex flex-col items-center md:items-start">
                <a href="mailto:hello@webuyphilly.com" className="flex items-center text-lg font-bold text-[#8ECAE6]/60 hover:text-white transition-colors group">
                  <Mail className="w-5 h-5 mr-4 text-[#FB8500]" />
                  hello@webuyphilly.com
                </a>
              </div>
            </div>
            
            {/* Accreditation Badges Placeholder */}
            <div className="mt-12 flex items-center space-x-6 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all">
              <div className="px-3 py-1.5 rounded-md border border-white/20 text-[10px] font-black text-white uppercase tracking-widest">BBB A+</div>
              <div className="px-3 py-1.5 rounded-md border border-white/20 text-[10px] font-black text-white uppercase tracking-widest">Philly Local</div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 text-center md:text-left">
          <p className="text-xs font-bold text-[#8ECAE6]/30 uppercase tracking-widest">
            © {currentYear} We Buy Houses Philadelphia. Professional Cash Buyers.
          </p>
          <div className="flex flex-wrap justify-center md:justify-end gap-8">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((text) => (
              <button 
                key={text} 
                onClick={() => onNavigate('faq')} 
                className="text-xs font-black text-[#8ECAE6]/30 hover:text-white uppercase tracking-[0.1em] transition-colors"
              >
                {text}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
