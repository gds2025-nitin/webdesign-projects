import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, MessageSquare, CheckCircle, ArrowRight } from 'lucide-react';
import { TESTIMONIALS } from '../constants';
import { View } from '../types';

interface ReviewsPageProps {
  onNavigate: (view: View, section?: string) => void;
}

const ReviewsPage: React.FC<ReviewsPageProps> = ({ onNavigate }) => {
  return (
    <div className="bg-slate-50 pt-24">
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block px-4 py-1 rounded-full bg-[#8ECAE6]/20 text-[#219EBC] text-sm font-black uppercase tracking-widest mb-6">
                Success Stories
              </span>
              <h1 className="text-5xl md:text-6xl font-black text-[#023047] leading-tight mb-8">
                Helping Philly Sellers <br /><span className="text-[#FB8500]">Start Over.</span>
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed mb-10 font-medium">
                Read authentic reviews from homeowners who traded listing headaches for a simple cash closing.
              </p>
              <div className="flex items-center space-x-12">
                <div>
                  <div className="text-4xl font-black text-[#023047]">4.9/5</div>
                  <div className="flex text-[#FFB703] mb-1">
                    {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
                  </div>
                  <div className="text-xs font-black text-slate-400 uppercase tracking-widest">Google Reviews</div>
                </div>
                <div className="w-px h-16 bg-slate-200" />
                <div>
                  <div className="text-4xl font-black text-[#023047]">100%</div>
                  <div className="text-[#219EBC] font-black mb-1">Success Rate</div>
                  <div className="text-xs font-black text-slate-400 uppercase tracking-widest">Closings Completed</div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-[#023047] p-8 rounded-[2.5rem] text-white">
                  <MessageSquare className="w-8 h-8 mb-4 text-[#8ECAE6] opacity-50" />
                  <div className="text-3xl font-black">150+</div>
                  <div className="text-sm font-bold text-[#8ECAE6]">Positive Reviews</div>
                </div>
                <div className="bg-slate-100 p-8 rounded-[2.5rem]">
                  <div className="text-[#023047] text-sm font-black leading-tight">
                    "Fastest closing I've ever experienced in my life."
                  </div>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="bg-[#219EBC] p-8 rounded-[2.5rem] text-white">
                  <CheckCircle className="w-8 h-8 mb-4 text-white opacity-50" />
                  <div className="text-sm font-black uppercase tracking-widest">BBB Accredited</div>
                  <div className="text-2xl font-black">A+ RATING</div>
                </div>
                <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-xl flex items-center justify-center">
                   <div className="text-[#FB8500] font-black text-xl tracking-tight">TRUSTED</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {TESTIMONIALS.map((t, idx) => (
              <motion.div 
                key={t.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-10 rounded-[3rem] shadow-xl shadow-[#023047]/5 border border-slate-100 relative"
              >
                <div className="absolute top-10 right-10">
                  <Quote className="w-12 h-12 text-[#8ECAE6]/20" />
                </div>
                <div className="flex text-[#FFB703] mb-6">
                  {[...Array(t.rating)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                </div>
                <p className="text-xl text-slate-700 font-medium leading-relaxed italic mb-10 relative z-10">
                  "{t.quote}"
                </p>
                <div className="flex items-center pt-8 border-t border-slate-50">
                  <img src={t.image} alt={t.author} className="w-16 h-16 rounded-full mr-4 border-4 border-white shadow-md object-cover" />
                  <div>
                    <h5 className="text-lg font-black text-[#023047]">{t.author}</h5>
                    <p className="text-sm font-bold text-[#219EBC] uppercase tracking-widest">
                      {t.company} • {t.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="mt-20 text-center">
            <button 
              onClick={() => onNavigate('home')}
              className="bg-[#FB8500] text-white px-10 py-5 rounded-2xl font-black text-xl shadow-xl shadow-orange-600/20 hover:bg-[#FFB703] transition-all flex items-center justify-center mx-auto"
            >
              GET YOUR FAIR OFFER NOW
              <ArrowRight className="ml-3" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ReviewsPage;