import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, Search, HelpCircle, ArrowRight } from 'lucide-react';
import { FAQS } from '../constants';
import { Link } from 'react-router-dom';

const FAQPage: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredFaqs = FAQS.filter(f =>
    f.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    f.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-slate-50 pt-24 min-h-screen">
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-5xl md:text-6xl font-black text-[#023047] mb-8">
              Everything You <span className="text-[#219EBC]">Need to Know.</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-12 font-medium">
              Transparent answers to your questions about cash offers, closing costs, and the Philly real estate market.
            </p>
            <div className="max-w-xl mx-auto relative group">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#219EBC] transition-colors" />
              <input
                type="text"
                placeholder="Search common questions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-16 pr-8 py-5 rounded-2xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-[#219EBC] focus:ring-4 focus:ring-[#219EBC]/5 transition-all outline-none font-bold text-[#023047] placeholder:text-slate-300"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq, idx) => (
                <div
                  key={idx}
                  className={`rounded-[2rem] border transition-all duration-300 ${activeIndex === idx
                      ? 'bg-white border-[#8ECAE6] shadow-2xl shadow-[#023047]/5 scale-[1.02]'
                      : 'bg-white border-slate-100 hover:border-slate-200'
                    }`}
                >
                  <button
                    onClick={() => setActiveIndex(activeIndex === idx ? null : idx)}
                    className="w-full flex items-center justify-between p-8 text-left"
                  >
                    <div className="flex items-center pr-8">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center mr-6 transition-colors ${activeIndex === idx ? 'bg-[#219EBC] text-white' : 'bg-slate-100 text-slate-400'}`}>
                        <HelpCircle className="w-5 h-5" />
                      </div>
                      <span className={`text-xl font-black transition-colors ${activeIndex === idx ? 'text-[#219EBC]' : 'text-[#023047]'}`}>
                        {faq.question}
                      </span>
                    </div>
                    <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all ${activeIndex === idx ? 'bg-[#023047] text-white rotate-180' : 'bg-slate-50 text-slate-400'}`}>
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
                        <div className="px-8 pb-8 pl-24 text-slate-600 leading-relaxed font-bold text-lg">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))
            ) : (
              <div className="text-center py-12 text-slate-400 font-bold">
                <p>No results found for "{searchTerm}"</p>
              </div>
            )}
          </div>
          <div className="mt-20 text-center">
            <h3 className="text-2xl font-black text-[#023047] mb-8">Ready for a real evaluation?</h3>
            <Link
              to="/"
              className="bg-[#FB8500] text-white px-10 py-5 rounded-2xl font-black text-xl shadow-xl shadow-orange-600/20 hover:bg-[#FFB703] transition-all flex items-center justify-center mx-auto inline-flex"
            >
              GET YOUR CASH OFFER NOW
              <ArrowRight className="ml-3" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQPage;