import React from 'react';
import { motion } from 'framer-motion';
import { Home, Zap, DollarSign, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { SERVICES } from '../constants';

const iconMap: Record<string, any> = {
  Home, Zap, DollarSign, ShieldCheck
};

const Features: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-black text-[#023047] mb-6 tracking-tight">
          The <span className="text-[#219EBC]">Philadelphia</span> Standard
        </h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto font-medium">
          We provide a hassle-free alternative to the traditional real estate market.
          Tailored solutions for Philly homeowners.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Main Hero Card */}
        <motion.div
          whileHover={{ y: -5 }}
          className="lg:col-span-2 bg-[#023047] rounded-[2rem] p-8 md:p-12 text-white relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#219EBC]/10 rounded-full blur-[80px] -mr-48 -mt-48 transition-all group-hover:bg-[#8ECAE6]/20" />

          <div className="relative z-10 h-full flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 bg-[#FB8500] rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-orange-900/40">
                <Home className="w-8 h-8 text-[#023047]" />
              </div>
              <h3 className="text-3xl text-white font-bold mb-6">We Buy Houses in ANY Condition</h3>
              <ul className="grid md:grid-cols-2 gap-4 mb-8">
                {['Hoarder Homes', 'Foreclosure Threats', 'Major Fire Damage', 'Probate / Inherited', 'Structural Issues', 'Tired Landlords'].map((item) => (
                  <li key={item} className="flex items-center text-slate-300 font-bold">
                    <div className="w-1.5 h-1.5 bg-[#FFB703] rounded-full mr-3" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <Link
              to="/how-it-works"
              className="inline-flex items-center text-[#8ECAE6] font-black hover:text-[#FFB703] transition-colors"
            >
              SEE OUR AS-IS PROCESS <ArrowUpRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </motion.div>

        {/* Small Feature Cards */}
        {SERVICES.filter(s => s.id !== 'as-is').map((service) => {
          const IconComp = iconMap[service.icon];
          return (
            <motion.div
              key={service.id}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-xl shadow-[#023047]/5 group"
            >
              <div className="w-12 h-12 bg-slate-50 text-[#219EBC] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#FB8500] group-hover:text-[#023047] transition-all">
                <IconComp className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-black text-[#023047] mb-4">{service.title}</h4>
              <p className="text-slate-500 leading-relaxed text-sm mb-6 font-medium">
                {service.description}
              </p>
              <Link
                to="/services"
                className="text-[#FB8500] font-black text-sm inline-flex items-center hover:translate-x-1 transition-transform"
              >
                Learn More <ArrowUpRight className="ml-1 w-4 h-4" />
              </Link>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
export default Features;
