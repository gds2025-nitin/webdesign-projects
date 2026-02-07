import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, CheckCircle2, Home, Clock, DollarSign, ArrowRight } from 'lucide-react';
import { Area, View } from '../types';

interface AreaTemplatePageProps {
  area: Area;
  onNavigate: (view: View, section?: string) => void;
}

const AreaTemplatePage: React.FC<AreaTemplatePageProps> = ({ area, onNavigate }) => {
  return (
    <div className="bg-slate-50 pt-24 min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 bg-[#023047] text-white overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#219EBC]/20 rounded-full blur-[160px] opacity-40" />
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#023047] to-transparent z-0" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#8ECAE6]/10 border border-[#8ECAE6]/20 text-[#8ECAE6] text-sm font-black uppercase tracking-widest mb-8 backdrop-blur-sm">
              <MapPin className="w-4 h-4 mr-2 text-[#FB8500]" />
              Philadelphia Neighborhood Expert
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black mb-8 leading-[1.1] tracking-tight text-white">
              Sell Your House Fast <br />In <span className="text-[#FB8500]">{area.name}.</span>
            </h1>
            
            <p className="text-xl text-[#8ECAE6] max-w-3xl leading-relaxed mb-12 font-bold opacity-90">
              We've been buying rowhomes and single-family properties in {area.name} for years. 
              We know the market, we know the values, and we can give you a fair cash offer today.
            </p>
            
            <div className="flex flex-wrap gap-4">
              {area.zipCodes.map(zip => (
                <span key={zip} className="px-6 py-3 bg-white/5 border border-white/10 rounded-2xl font-black text-[#8ECAE6] hover:bg-white/10 transition-colors cursor-default">
                  ZIP {zip}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Local Content Section */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-black text-[#023047] mb-8 tracking-tight">
                Why {area.name} Sellers Choose Us
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed font-medium">
                {area.description} Selling a house in {area.name} can be complicated with local inspections and buyer demands. 
                Our team specializes in the specific challenges of Philly properties, from aged plumbing to structural quirks. We simplify it by buying direct.
              </p>
              
              <div className="space-y-6 mb-12">
                {[
                  `Deep knowledge of ${area.name} block values`,
                  "No city violation repairs needed for closing",
                  "Closing available in as little as 7 days",
                  "Fair cash offers based on real local data"
                ].map((item, i) => (
                  <div key={i} className="flex items-center text-[#023047] font-bold text-lg">
                    <div className="w-8 h-8 rounded-full bg-[#219EBC]/10 flex items-center justify-center mr-4 shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-[#219EBC]" />
                    </div>
                    {item}
                  </div>
                ))}
              </div>
              
              <button 
                onClick={() => onNavigate('home')}
                className="bg-[#FB8500] text-white px-10 py-5 rounded-2xl font-black text-xl shadow-xl shadow-[#FB8500]/20 hover:bg-[#FFB703] transition-all flex items-center group"
              >
                GET OFFER FOR {area.name.toUpperCase()}
                <ArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>

            <div className="grid grid-cols-2 gap-6 relative">
               <div className="space-y-6">
                  <motion.div 
                    whileHover={{ y: -5 }}
                    className="bg-white p-8 rounded-[2.5rem] shadow-xl shadow-[#023047]/5 border border-slate-100 group"
                  >
                    <div className="w-12 h-12 bg-[#8ECAE6]/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#219EBC] transition-colors">
                      <Home className="w-6 h-6 text-[#219EBC] group-hover:text-white transition-colors" />
                    </div>
                    <div className="text-2xl font-black text-[#023047]">AS-IS</div>
                    <div className="text-slate-500 text-sm font-black uppercase tracking-wider">Any condition</div>
                  </motion.div>
                  
                  <motion.div 
                    whileHover={{ y: -5 }}
                    className="bg-white p-8 rounded-[2.5rem] shadow-xl shadow-[#023047]/5 border border-slate-100 group"
                  >
                    <div className="w-12 h-12 bg-[#8ECAE6]/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#219EBC] transition-colors">
                      <Clock className="w-6 h-6 text-[#219EBC] group-hover:text-white transition-colors" />
                    </div>
                    <div className="text-2xl font-black text-[#023047]">FAST</div>
                    <div className="text-slate-500 text-sm font-black uppercase tracking-wider">7 Day Closing</div>
                  </motion.div>
               </div>
               
               <div className="space-y-6 pt-12">
                  <motion.div 
                    whileHover={{ y: -5 }}
                    className="bg-[#219EBC] p-8 rounded-[2.5rem] text-white shadow-xl shadow-[#219EBC]/20 border border-[#219EBC]/10"
                  >
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                      <DollarSign className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-2xl font-black">CASH</div>
                    <div className="text-white/80 text-sm font-black uppercase tracking-wider">No Bank Delays</div>
                  </motion.div>
                  
                  <motion.div 
                    whileHover={{ y: -5 }}
                    className="bg-[#023047] p-8 rounded-[2.5rem] shadow-xl border border-white/5 flex flex-col items-center justify-center text-center group"
                  >
                    <div className="text-[#FB8500] text-4xl font-black group-hover:scale-110 transition-transform">100+</div>
                    <div className="text-[#8ECAE6] text-[10px] font-black uppercase tracking-[0.2em] mt-3">Properties Bought Nearby</div>
                  </motion.div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Element & ZIP Grid */}
      <section className="py-24 bg-white border-t border-slate-50 relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#FB8500]/5 rounded-full blur-[100px]" />
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h3 className="text-3xl font-black text-[#023047] mb-8 tracking-tight">
            Looking to sell in <span className="text-[#219EBC]">{area.name}</span>? Let's talk.
          </h3>
          <p className="text-slate-500 font-bold mb-12 text-lg max-w-2xl mx-auto">
            Whether you have a rowhome on a quiet block or a property on a main corridor, 
            we have the local knowledge to make the process easy. No cleaning, no repairs, no commissions.
          </p>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
             {area.zipCodes.map(zip => (
               <div key={zip} className="bg-slate-50 p-6 rounded-2xl border border-slate-100 text-[#023047] font-black text-base hover:bg-[#219EBC] hover:text-white hover:border-[#219EBC] transition-all cursor-default shadow-sm">
                 ZIP {zip}
               </div>
             ))}
          </div>
          
          <div className="mt-16 flex flex-col items-center">
            <p className="text-sm font-black text-slate-400 uppercase tracking-widest mb-6">
              Verified local buyer
            </p>
            <div className="flex space-x-8 opacity-40">
              <span className="text-xl font-black text-[#023047]">BBB A+</span>
              <span className="text-xl font-black text-[#023047]">PHILLY 1ST</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AreaTemplatePage;