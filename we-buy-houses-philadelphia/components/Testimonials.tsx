import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../constants';
import { View } from '../types';

interface TestimonialsProps {
  onNavigate?: (view: View) => void;
}

const Testimonials: React.FC<TestimonialsProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
        <div className="max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-black text-[#023047] mb-6 tracking-tight">
            Loved by <span className="text-[#219EBC]">Philadelphia</span> Residents
          </h2>
          <p className="text-lg text-slate-600">
            Real stories from homeowners who skipped the listing stress and chose the cash way.
          </p>
        </div>
        <div className="mt-8 md:mt-0 flex items-center space-x-2">
          <div className="flex text-emerald-500">
            {[1, 2, 3, 4, 5].map((i) => <Star key={i} className="w-5 h-5 fill-current" />)}
          </div>
          <span className="font-bold text-[#023047]">4.9/5 on Google</span>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {TESTIMONIALS.map((t, idx) => (
          <motion.div 
            key={t.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="bg-slate-50 p-8 rounded-[2rem] relative flex flex-col justify-between"
          >
            <div>
              <Quote className="w-10 h-10 text-[#8ECAE6]/40 mb-6" />
              <p className="text-slate-700 text-lg font-medium leading-relaxed italic mb-8">
                "{t.quote}"
              </p>
            </div>
            
            <div className="flex items-center">
              <img src={t.image} alt={t.author} className="w-14 h-14 rounded-full mr-4 border-2 border-white shadow-sm" />
              <div>
                <h5 className="font-bold text-[#023047]">{t.author}</h5>
                <p className="text-xs font-bold text-[#219EBC] uppercase tracking-wider">
                  {t.company} • {t.role}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="mt-16 text-center">
        <button 
          onClick={() => onNavigate?.('reviews')}
          className="inline-flex items-center px-8 py-4 rounded-xl border-2 border-slate-200 text-[#023047] font-bold hover:bg-slate-50 transition-colors"
        >
          VIEW ALL 150+ GOOGLE REVIEWS
        </button>
      </div>
    </div>
  );
};

export default Testimonials;