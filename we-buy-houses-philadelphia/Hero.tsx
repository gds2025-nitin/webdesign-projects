import React from 'react';
import { motion, Variants } from 'framer-motion';
import { CheckCircle2, ArrowRight, Shield } from 'lucide-react';

const Hero: React.FC = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.6, 
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number] 
      } 
    },
  };

  const customerPhotos = [
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100&h=100",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100&h=100",
    "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=100&h=100",
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100&h=100"
  ];

  return (
    <section className="relative min-h-screen pt-32 pb-20 flex items-center gradient-mesh overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#8ECAE6] rounded-full blur-[120px] opacity-20" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-[#FB8500] rounded-full blur-[120px] opacity-10" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center px-4 py-2 rounded-full bg-[#8ECAE6]/10 border border-[#8ECAE6]/30 text-[#023047] text-sm font-bold mb-6">
              <span className="relative flex h-2 w-2 mr-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#219EBC] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#219EBC]"></span>
              </span>
              BUYING NOW IN PHILADELPHIA & SURROUNDING AREAS
            </motion.div>
            
            <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-black text-[#023047] leading-[1.1] tracking-tight mb-8">
              Sell Your House <br /> 
              <span className="text-[#FB8500]">Fast, Cash, As-Is.</span>
            </motion.h1>
            
            <motion.p variants={itemVariants} className="text-xl text-[#023047]/80 leading-relaxed mb-10 max-w-2xl font-medium">
              Skip the repairs, the commissions, and the months of waiting. We buy Philly houses in any condition and can close on your timeline.
            </motion.p>
            
            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4 mb-12 max-w-lg">
              {[
                "No Commissions", "No Repairs Needed", 
                "7-Day Closing", "Local Experts"
              ].map((text) => (
                <div key={text} className="flex items-center text-[#023047] font-bold text-sm bg-white/60 border border-white/80 p-3 rounded-xl shadow-sm">
                  <CheckCircle2 className="w-5 h-5 text-[#219EBC] mr-2 shrink-0" />
                  {text}
                </div>
              ))}
            </motion.div>

            <motion.div 
              variants={itemVariants} 
              className="flex items-center space-x-6 p-4 bg-white/70 backdrop-blur-md rounded-2xl border border-white shadow-lg shadow-[#023047]/5 max-w-md"
            >
              <div className="flex -space-x-3">
                {customerPhotos.map((url, i) => (
                  <img 
                    key={i} 
                    className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-sm" 
                    src={url} 
                    alt="Customer" 
                  />
                ))}
              </div>
              <div>
                <p className="text-sm font-black text-[#023047] leading-none mb-1">500+ Philly Sellers Helped</p>
                <div className="flex items-center space-x-2">
                  <div className="flex text-[#FFB703]">
                    {[1, 2, 3, 4, 5].map((i) => <span key={i} className="text-xs">★</span>)}
                  </div>
                  <span className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">(Verified)</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="lg:col-span-5 relative"
          >
            <div className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-2xl shadow-[#023047]/10 border border-slate-100 relative z-10">
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#023047] rounded-2xl rotate-12 -z-10 animate-pulse hidden md:block" />
              
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-[#8ECAE6]/20 rounded-lg flex items-center justify-center mr-3">
                  <Shield className="w-5 h-5 text-[#219EBC]" />
                </div>
                <div>
                  <h3 className="text-xl font-black text-[#023047]">Get Your Fair Offer</h3>
                  <p className="text-[#FB8500] text-xs font-black uppercase tracking-widest">Free & No-Obligation</p>
                </div>
              </div>
              
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="group">
                  <label className="block text-[10px] font-black text-slate-400 uppercase tracking-[0.15em] mb-2 group-focus-within:text-[#FB8500] transition-colors">Property Address</label>
                  <input 
                    type="text" 
                    placeholder="123 Broad St, Philadelphia, PA" 
                    className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-[#FB8500] focus:bg-white focus:ring-4 focus:ring-[#FB8500]/5 transition-all outline-none text-[#023047] font-bold placeholder:text-slate-300"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="group">
                    <label className="block text-[10px] font-black text-slate-400 uppercase tracking-[0.15em] mb-2 group-focus-within:text-[#FB8500] transition-colors">Full Name</label>
                    <input 
                      type="text" 
                      placeholder="Jane Doe" 
                      className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-[#FB8500] focus:bg-white transition-all outline-none font-bold placeholder:text-slate-300"
                    />
                  </div>
                  <div className="group">
                    <label className="block text-[10px] font-black text-slate-400 uppercase tracking-[0.15em] mb-2 group-focus-within:text-[#FB8500] transition-colors">Phone</label>
                    <input 
                      type="tel" 
                      placeholder="(215) 000-0000" 
                      className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-[#FB8500] focus:bg-white transition-all outline-none font-bold placeholder:text-slate-300"
                    />
                  </div>
                </div>
                <div className="group">
                  <label className="block text-[10px] font-black text-slate-400 uppercase tracking-[0.15em] mb-2 group-focus-within:text-[#FB8500] transition-colors">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="jane@example.com" 
                    className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-[#FB8500] focus:bg-white transition-all outline-none font-bold placeholder:text-slate-300"
                  />
                </div>
                <button className="w-full bg-[#FB8500] hover:bg-[#FFB703] text-white font-black py-5 rounded-2xl shadow-xl shadow-orange-600/20 transition-all flex items-center justify-center group text-lg mt-4">
                  GET MY CASH OFFER
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <div className="flex items-center justify-center space-x-2 pt-4">
                  <Shield className="w-3 h-3 text-[#219EBC]" />
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                    Privacy Guaranteed • 100% Confidential
                  </p>
                </div>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;