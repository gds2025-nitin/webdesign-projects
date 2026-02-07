
import React from 'react';
import { motion } from 'framer-motion';
import { Home, Zap, DollarSign, ShieldCheck, MapPin, ArrowRight, CheckCircle2 } from 'lucide-react';
import { SERVICES, AREAS } from '../constants';
import { Area } from '../types';

interface ServicesPageProps {
  onNavigateArea: (area: Area) => void;
}

const iconMap: Record<string, any> = { Home, Zap, DollarSign, ShieldCheck };

const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigateArea }) => {
  return (
    <div className="bg-slate-50 pt-24">
      {/* Hero Section */}
      <section className="relative py-24 bg-white overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/cubes.png")' }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-1 rounded-full bg-[#8ECAE6]/20 text-[#219EBC] text-sm font-black uppercase tracking-widest mb-6">
              Our Expertise
            </span>
            <h1 className="text-5xl md:text-6xl font-black text-[#023047] leading-[1.1] mb-8">
              Real Estate Solutions <br /><span className="text-[#FB8500]">Tailored to You.</span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed font-medium">
              We provide professional exit strategies for homeowners who need a simple, reliable way to sell their properties in Philadelphia.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Services Deep Dive */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12">
            {SERVICES.map((service, idx) => {
              const IconComp = iconMap[service.icon];
              return (
                <motion.div 
                  key={service.id}
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className={`flex flex-col lg:flex-row items-center gap-12 bg-white p-8 md:p-12 rounded-[3rem] shadow-xl shadow-[#023047]/5 border border-slate-100 ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
                >
                  <div className="flex-1">
                    <div className="w-16 h-16 bg-[#219EBC] text-white rounded-2xl flex items-center justify-center mb-8 shadow-xl shadow-[#219EBC]/20">
                      <IconComp className="w-8 h-8" />
                    </div>
                    <h2 className="text-3xl font-black text-[#023047] mb-6">{service.title}</h2>
                    <p className="text-lg text-slate-600 leading-relaxed mb-8 font-medium">
                      {service.longDescription}
                    </p>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {["No hidden costs", "Fast processing", "Professional support", "Local expertise"].map(text => (
                        <div key={text} className="flex items-center text-[#023047] font-bold">
                          <CheckCircle2 className="w-5 h-5 text-[#219EBC] mr-3" />
                          {text}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex-1 w-full aspect-video rounded-3xl overflow-hidden shadow-2xl">
                    <img 
                      src={`https://images.unsplash.com/photo-${1582408921715 + idx}?auto=format&fit=crop&q=80&w=800`} 
                      alt={service.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Area Hub (Pillar section) */}
      <section className="py-24 bg-[#023047] text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#219EBC]/10 rounded-full blur-[120px] -mr-48 -mt-48" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight text-white">
              Local Expertise In Every <span className="text-[#FB8500]">Neighborhood.</span>
            </h2>
            <p className="text-[#8ECAE6] text-xl max-w-2xl mx-auto font-bold opacity-90">
              We are hyper-local. We buy houses in every neighborhood across Philadelphia and the surrounding suburbs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {AREAS.map((area) => (
              <motion.button 
                key={area.id}
                whileHover={{ y: -8, backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
                onClick={() => onNavigateArea(area)}
                className="bg-white/5 border border-white/10 p-8 rounded-[2.5rem] text-left transition-all group backdrop-blur-sm"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 bg-[#219EBC] rounded-xl flex items-center justify-center shadow-lg shadow-[#219EBC]/20 group-hover:bg-[#FB8500] group-hover:shadow-[#FB8500]/30 transition-all duration-300">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <ArrowRight className="w-6 h-6 text-[#8ECAE6]/50 group-hover:text-white group-hover:translate-x-1 transition-all" />
                </div>
                <h3 className="text-2xl font-black mb-3 text-white group-hover:text-[#FB8500] transition-colors">
                  {area.name}
                </h3>
                <p className="text-[#8ECAE6]/70 text-sm mb-8 leading-relaxed font-bold group-hover:text-white/90 transition-colors">
                  {area.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                  {area.zipCodes.slice(0, 3).map(zip => (
                    <span key={zip} className="text-[10px] font-black tracking-widest text-[#8ECAE6] bg-white/5 px-2.5 py-1 rounded-md border border-white/5">
                      {zip}
                    </span>
                  ))}
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
