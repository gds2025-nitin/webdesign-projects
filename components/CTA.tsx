import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const CTA: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#FB8500] z-0">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #023047 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#023047]/95 backdrop-blur-md rounded-[3rem] p-12 md:p-20 border border-white/10 shadow-2xl"
        >
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tight">
            Ready to Move On?
          </h2>
          <p className="text-xl text-[#8ECAE6] mb-12 max-w-2xl mx-auto leading-relaxed font-medium">
            Don't let a property hold you back any longer. Get your fair cash offer today
            and experience the "Brotherly Love" difference.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              to="/"
              className="w-full sm:w-auto bg-[#FB8500] text-white px-10 py-5 rounded-2xl font-black text-xl shadow-xl shadow-[#000]/20 hover:bg-[#FFB703] transition-all flex items-center justify-center"
            >
              GET MY CASH OFFER
              <ArrowRight className="ml-2 w-6 h-6" />
            </Link>

            <a
              href="tel:2155550123"
              className="w-full sm:w-auto flex items-center justify-center px-10 py-5 rounded-2xl text-white font-black text-xl border-2 border-white/20 hover:bg-white/5 transition-all"
            >
              <Phone className="mr-3 w-6 h-6 text-[#FB8500]" />
              (215) 555-0123
            </a>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-8">
            {['No Repairs', 'No Closing Costs', 'Fast Closing', 'Confidential'].map((tag) => (
              <span key={tag} className="flex items-center text-white/70 font-bold text-sm">
                <div className="w-1.5 h-1.5 bg-[#FFB703] rounded-full mr-2" />
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;