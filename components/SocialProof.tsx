import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView, useSpring, useTransform, animate } from 'framer-motion';
import { LOGOS } from '../constants';

const CountUp = ({ value, suffix = "" }: { value: string, suffix?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [displayValue, setDisplayValue] = useState(0);
  const numericValue = parseInt(value.replace(/\D/g, ''));

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, numericValue, {
        duration: 2,
        ease: "easeOut",
        onUpdate: (latest) => setDisplayValue(Math.floor(latest))
      });
      return () => controls.stop();
    }
  }, [isInView, numericValue]);

  return (
    <span ref={ref} className="tabular-nums">
      {displayValue}{value.includes('+') ? '+' : ''}{suffix}
    </span>
  );
};

const SocialProof: React.FC = () => {
  return (
    <div className="bg-white border-y border-slate-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-black text-[#023047]/40 uppercase tracking-[0.2em] mb-10">
          Trusted by Philadelphia's Finest
        </p>
        
        <div className="relative overflow-hidden group">
          <motion.div 
            animate={{ x: [0, -1000] }}
            transition={{ 
              repeat: Infinity, 
              duration: 30, 
              ease: "linear" 
            }}
            className="flex space-x-16 items-center whitespace-nowrap"
          >
            {[...LOGOS, ...LOGOS].map((logo, idx) => (
              <span key={idx} className="text-2xl font-black text-[#023047]/20 grayscale opacity-70 group-hover:grayscale-0 group-hover:text-[#219EBC] transition-all cursor-default uppercase tracking-tight">
                {logo}
              </span>
            ))}
          </motion.div>
          
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-slate-50">
          {[
            { label: 'Properties Bought', value: '500', suffix: '+' },
            { label: 'Avg Days to Close', value: '7', suffix: '' },
            { label: 'Philly Experience', value: '15', suffix: ' Yrs' },
            { label: 'Success Rate', value: '99', suffix: '%' }
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl md:text-5xl font-black text-[#219EBC] mb-1">
                <CountUp value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-xs font-black text-[#023047]/60 uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SocialProof;