import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { FAQS } from '../constants';
import { Link } from 'react-router-dom';

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-black text-[#023047] mb-4">Common Questions</h2>
        <p className="text-slate-600 font-bold">Everything you need to know about our cash buying process.</p>
      </div>

      <div className="space-y-4">
        {FAQS.map((faq, idx) => (
          <div
            key={idx}
            className={`rounded-2xl border transition-all duration-300 ${activeIndex === idx
                ? 'bg-white border-[#8ECAE6] shadow-xl shadow-blue-900/5'
                : 'bg-white border-slate-200 hover:border-slate-300'
              }`}
          >
            <button
              onClick={() => setActiveIndex(activeIndex === idx ? null : idx)}
              className="w-full flex items-center justify-between p-6 text-left"
            >
              <span className={`text-lg font-black transition-colors ${activeIndex === idx ? 'text-[#219EBC]' : 'text-[#023047]'}`}>
                {faq.question}
              </span>
              <div className={`p-2 rounded-lg transition-all ${activeIndex === idx ? 'bg-[#023047] text-white' : 'bg-slate-50 text-slate-400'}`}>
                {activeIndex === idx ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
              </div>
            </button>

            <AnimatePresence>
              {activeIndex === idx && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6 text-slate-600 leading-relaxed font-bold border-t border-slate-50 pt-4">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center p-8 bg-[#8ECAE6]/10 rounded-[2rem] border border-[#8ECAE6]/20">
        <p className="text-[#023047] font-black mb-4">Still have questions?</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="tel:2155550123" className="text-[#FB8500] font-black text-lg hover:underline underline-offset-4">
            (215) 555-0123
          </a>
          <span className="hidden sm:block text-[#219EBC]/30 font-bold">|</span>
          <Link
            to="/faq"
            className="text-[#FB8500] font-black text-lg hover:underline underline-offset-4"
          >
            Full FAQ Page
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FAQ;