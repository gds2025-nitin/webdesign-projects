import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useInView } from 'framer-motion';
import { PROCESS_STEPS } from '../constants';
import { Link } from 'react-router-dom';
import { ClipboardCheck, Search, HandCoins, ArrowRight } from 'lucide-react';

const iconMap = [ClipboardCheck, Search, HandCoins];

const StepCard = ({ step, index }: { step: any; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-20% 0px -20% 0px", once: false });
  const Icon = iconMap[index % iconMap.length];

  return (
    <div ref={ref} className="relative flex items-start gap-8 md:gap-16 mb-24 last:mb-0">
      {/* Step Node (Icon on the line) */}
      <div className="relative z-10 shrink-0">
        <motion.div
          animate={{
            scale: isInView ? 1.1 : 1,
            backgroundColor: isInView ? "#FB8500" : "#e2e8f0",
            color: isInView ? "#ffffff" : "#94a3b8"
          }}
          className="w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center shadow-lg transition-colors duration-500"
        >
          <Icon className="w-8 h-8 md:w-10 md:h-10" />

          {/* Step Number Badge */}
          <div className="absolute -top-2 -right-2 w-7 h-7 bg-[#023047] text-white rounded-full flex items-center justify-center text-xs font-black border-2 border-white">
            {step.number}
          </div>
        </motion.div>

        {/* Local Glow Effect */}
        {isInView && (
          <motion.div
            layoutId="node-glow"
            className="absolute inset-0 bg-[#FFB703] blur-2xl opacity-20 -z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
          />
        )}
      </div>

      {/* Content Block */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="pt-2 md:pt-4"
      >
        <h3 className={`text-2xl md:text-3xl font-black mb-4 transition-colors duration-500 ${isInView ? 'text-[#FB8500]' : 'text-[#023047]'}`}>
          {step.title}
        </h3>
        <p className="text-lg md:text-xl text-[#023047]/70 leading-relaxed font-bold mb-6 max-w-2xl">
          {step.description}
        </p>
        <Link
          to="/how-it-works"
          className="inline-flex items-center text-sm font-black text-[#023047] uppercase tracking-widest hover:text-[#219EBC] transition-colors group"
        >
          View Full Step Details
          <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </motion.div>
    </div>
  );
};

const Process: React.FC = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-24 md:mb-32">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="inline-block px-4 py-1 rounded-full bg-[#8ECAE6]/20 text-[#219EBC] text-sm font-black uppercase tracking-widest mb-6"
        >
          Our Simple Methodology
        </motion.span>
        <h2 className="text-4xl md:text-6xl font-black text-[#023047] mb-6 tracking-tight">
          How It <span className="text-[#FB8500]">Works.</span>
        </h2>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed font-medium">
          Philadelphia's most streamlined path to a successful closing.
          No games, no realtor BS, just straightforward solutions.
        </p>
      </div>

      <div ref={containerRef} className="relative max-w-4xl mx-auto px-4 md:px-0">
        {/* Animated Progress Spine (Left Aligned) */}
        <div className="absolute left-12 md:left-10 top-0 bottom-0 w-1 bg-slate-100 -translate-x-1/2 rounded-full overflow-hidden">
          <motion.div
            style={{ scaleY, transformOrigin: 'top' }}
            className="w-full h-full bg-[#219EBC]"
          />
        </div>

        <div className="relative">
          {PROCESS_STEPS.map((step, idx) => (
            <StepCard key={idx} step={step} index={idx} />
          ))}
        </div>
      </div>

      <div className="mt-32 text-center">
        <motion.div
          whileHover={{ y: -5 }}
          className="inline-block bg-white p-10 md:p-16 rounded-[3rem] md:rounded-[4rem] border border-slate-100 shadow-2xl shadow-[#023047]/5 max-w-4xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#8ECAE6]/10 rounded-full blur-3xl -mr-32 -mt-32 opacity-50" />

          <div className="relative z-10">
            <h4 className="text-2xl md:text-3xl font-black text-[#023047] mb-4">Start Your Step One Today</h4>
            <p className="text-lg text-slate-500 mb-10 max-w-xl mx-auto font-medium">
              Our average evaluation takes less than 15 minutes.
              Find out what your Philadelphia house is worth in cash.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link
                to="/"
                className="w-full sm:w-auto bg-[#FB8500] text-white px-10 py-5 rounded-2xl font-black text-xl shadow-xl shadow-orange-600/20 hover:bg-[#FFB703] transition-all active:scale-95 inline-flex justify-center items-center"
              >
                GET YOUR CASH OFFER
              </Link>
              <Link
                to="/how-it-works"
                className="w-full sm:w-auto px-10 py-5 rounded-2xl text-[#023047] font-black text-xl border-2 border-slate-200 hover:bg-slate-50 transition-all inline-flex justify-center items-center"
              >
                Detailed Process
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
export default Process;