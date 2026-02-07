import React from 'react';
import { motion } from 'framer-motion';
import { RECENT_PURCHASES } from '../constants';
import { MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Showcase: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
        <div className="max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight text-white">
            Recent <span className="text-[#FB8500]">Philly</span> Successes
          </h2>
          <p className="text-lg text-[#8ECAE6]/80 font-medium">
            We've helped hundreds of homeowners across every neighborhood in Philadelphia.
            Here's a glimpse at our most recent closings.
          </p>
        </div>
        <Link
          to="/reviews"
          className="mt-8 md:mt-0 flex items-center text-[#FB8500] font-black group"
        >
          VIEW CASE STUDIES <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {RECENT_PURCHASES.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="group relative rounded-[2rem] overflow-hidden bg-[#023047] border border-[#219EBC]/20 aspect-[4/5] shadow-2xl"
          >
            <img
              src={item.image}
              alt={item.neighborhood}
              className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#023047] via-[#023047]/20 to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="flex items-center text-[#8ECAE6] text-xs font-black uppercase tracking-widest mb-2">
                <MapPin className="w-3 h-3 mr-1" />
                {item.neighborhood}
              </div>
              <h4 className="text-2xl font-black text-white mb-2">{item.status}</h4>
              <p className="text-slate-300 text-sm line-clamp-2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-medium">
                {item.description}
              </p>
              <div className="w-12 h-1 bg-[#FB8500] group-hover:w-full transition-all duration-500" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Showcase;