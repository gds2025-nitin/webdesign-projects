import React from 'react';
import { motion } from 'framer-motion';
import {
  ClipboardCheck,
  Search,
  HandCoins,
  CalendarCheck,
  ShieldCheck,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

const HowItWorksPage: React.FC = () => {
  const steps = [
    {
      icon: <ClipboardCheck className="w-8 h-8" />,
      title: "Step 1: Contact & Consultation",
      subtitle: "The Discovery Phase",
      description: "Fill out our short form or give us a call. We'll discuss the current state of your property, your reasons for selling, and your ideal timeline. This call usually takes about 10 minutes.",
      details: [
        "No pressure, 100% confidential discussion",
        "We handle properties in any condition",
        "Explain your unique situation (probate, foreclosure, etc.)"
      ]
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: "Step 2: Simple Walkthrough",
      subtitle: "The Verification Phase",
      description: "We'll meet you at the property for a brief 15-30 minute walkthrough. Unlike a traditional inspection, we aren't looking for reasons to lower the price—we're looking for how we can help.",
      details: [
        "No cleaning or repairs required beforehand",
        "We buy hoarder houses and damaged properties",
        "Meet our local Philadelphia team in person"
      ]
    },
    {
      icon: <HandCoins className="w-8 h-8" />,
      title: "Step 3: No-Obligation Cash Offer",
      subtitle: "The Solution Phase",
      description: "Within 24 hours of our walkthrough, we'll present you with a fair, all-cash offer. Our offers are transparent, based on local market data, and have absolutely zero fees attached.",
      details: [
        "Offers are 100% net to you",
        "No realtor commissions (save 6%)",
        "No closing costs for the seller"
      ]
    },
    {
      icon: <CalendarCheck className="w-8 h-8" />,
      title: "Step 4: You Pick the Closing Date",
      subtitle: "The Freedom Phase",
      description: "If you accept, we move to closing on your schedule. Need to close in 7 days? We can do it. Need 3 months to arrange your move? That's fine too. You are in total control.",
      details: [
        "Move when you are ready",
        "Leave behind what you don't want",
        "Get paid at a local title company"
      ]
    }
  ];

  return (
    <div className="bg-slate-50 pt-24">
      {/* Hero Section */}
      <section className="relative py-24 bg-white overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#219EBC]/5 -skew-x-12 translate-x-1/2" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-1 rounded-full bg-[#8ECAE6]/20 text-[#219EBC] text-sm font-black uppercase tracking-widest mb-6">
              The Transparent Path
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-[#023047] leading-[1.1] mb-8">
              How Selling to <span className="text-[#FB8500]">Us</span> Works.
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed mb-10 font-medium">
              Listing with a realtor isn't for everyone. We've streamlined the entire
              house-selling process into four simple steps designed to put you first.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Detailed Steps */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-32">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`flex flex-col lg:flex-row items-center gap-16 ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className="flex-1">
                  <div className="w-16 h-16 bg-[#219EBC] text-white rounded-2xl flex items-center justify-center mb-8 shadow-xl shadow-[#219EBC]/20">
                    {step.icon}
                  </div>
                  <h2 className="text-sm font-black text-[#219EBC] uppercase tracking-[0.3em] mb-4">Step {idx + 1}</h2>
                  <h3 className="text-3xl md:text-4xl font-black text-[#023047] mb-6">{step.title}</h3>
                  <p className="text-lg text-slate-600 leading-relaxed mb-8 font-medium">
                    {step.description}
                  </p>
                  <div className="space-y-4">
                    {step.details.map((detail, dIdx) => (
                      <div key={dIdx} className="flex items-center text-[#023047] font-bold">
                        <CheckCircle2 className="w-5 h-5 text-[#219EBC] mr-3" />
                        {detail}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex-1 w-full aspect-video bg-white rounded-[3rem] shadow-2xl shadow-slate-200 border border-slate-100 flex items-center justify-center overflow-hidden">
                  <img
                    src={`https://images.unsplash.com/photo-${1560518883533 + idx}?auto=format&fit=crop&q=80&w=800`}
                    alt={step.title}
                    className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-[#023047] mb-6">Compare Your Options</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto font-medium">
              See how a direct sale to We Buy Houses Philadelphia stacks up against a traditional realtor listing.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="p-6 text-left bg-slate-50 border-b-2 border-slate-200 rounded-tl-3xl text-[#023047]">Feature</th>
                  <th className="p-6 text-center bg-[#023047] text-white border-b-2 border-slate-800 rounded-t-3xl">Selling To Us</th>
                  <th className="p-6 text-center bg-slate-50 border-b-2 border-slate-200 rounded-tr-3xl text-[#023047]">Traditional Listing</th>
                </tr>
              </thead>
              <tbody className="font-bold">
                {[
                  { feature: "Commissions / Fees", us: "Zero", them: "6% + Listing Fees" },
                  { feature: "Closing Costs", us: "We Pay Them All", them: "You Pay (approx. 2%)" },
                  { feature: "Inspection & Repairs", us: "None (Buy As-Is)", them: "Often Mandatory" },
                  { feature: "Showings", us: "Just One Walkthrough", them: "Dozens of Disruptions" },
                  { feature: "Closing Date", us: "You Choose (7-90 days)", them: "Depends on Buyer Bank" },
                  { feature: "Financing Risk", us: "None (Cash Offer)", them: "High (Deals Fall Through)" }
                ].map((row, idx) => (
                  <tr key={idx} className="border-b border-slate-100">
                    <td className="p-6 text-[#023047]">{row.feature}</td>
                    <td className="p-6 text-center text-[#219EBC] bg-[#8ECAE6]/5">{row.us}</td>
                    <td className="p-6 text-center text-slate-400">{row.them}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Trust Quote */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <ShieldCheck className="w-16 h-16 text-[#219EBC] mx-auto mb-8" />
          <h2 className="text-3xl font-black text-[#023047] mb-8 italic">
            "We aren't just buying a house; we are solving a problem. Every homeowner has a different story, and our job is to listen and provide the most efficient exit strategy possible."
          </h2>
          <div className="flex items-center justify-center">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100&h=100"
              className="w-12 h-12 rounded-full mr-4 border-2 border-white shadow-md"
              alt="CEO"
            />
            <div className="text-left">
              <p className="font-bold text-[#023047]">David Miller</p>
              <p className="text-xs font-black text-[#219EBC] uppercase tracking-widest">Founder, We Buy Houses Philly</p>
            </div>
          </div>
          <div className="mt-12">
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

export default HowItWorksPage;