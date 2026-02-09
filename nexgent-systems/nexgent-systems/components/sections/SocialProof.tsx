import React from 'react';
import { AnimatedSection } from '../AnimatedSection';

export const SocialProof: React.FC = () => {
  const logos = [
    'Acme Corp', 'GlobalBank', 'TechFlow', 'Nebula', 'FoxRun', 'Circle', 'Aven'
  ];

  const metrics = [
    { value: '500K+', label: 'Active Users' },
    { value: '99.9%', label: 'Uptime Guarantee' },
    { value: '50+', label: 'Global Markets' },
    { value: '$2B+', label: 'Revenue Processed' },
  ];

  return (
    <section className="py-20 bg-slate-950 border-y border-slate-900 relative">
      <div className="container">

        {/* Logos */}
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-slate-400 uppercase tracking-widest mb-8">Trusted by industry leaders</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            {logos.map((logo) => (
              <span key={logo} className="text-xl font-bold font-display text-slate-200">{logo}</span>
            ))}
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 border-t border-slate-900 pt-12">
          {metrics.map((metric, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <div className="text-center group cursor-default">
                <div className="text-3xl md:text-5xl font-bold text-white mb-2 group-hover:text-primary-400 transition-colors">
                  {metric.value}
                </div>
                <div className="text-sm text-slate-400 font-medium">{metric.label}</div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};