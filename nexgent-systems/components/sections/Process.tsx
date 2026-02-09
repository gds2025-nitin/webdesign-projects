import React from 'react';
import { AnimatedSection } from '../AnimatedSection';
import { Cpu, Settings2, Rocket, LineChart } from 'lucide-react';

export const Process: React.FC = () => {
  const steps = [
    {
      icon: Cpu,
      number: '01',
      title: 'Connect Your Stack',
      description: 'Integrate your existing tools or import contacts in seconds. Our API handles the heavy lifting effortlessly.'
    },
    {
      icon: Settings2,
      number: '02',
      title: 'Configure AI Agents',
      description: 'Deploy niche-specific agents trained on millions of high-performing sales conversations.'
    },
    {
      icon: Rocket,
      number: '03',
      title: 'Automate Outreach',
      description: 'Launch multi-channel sequences. The AI qualifies leads and books appointments while you sleep.'
    },
    {
      icon: LineChart,
      number: '04',
      title: 'Scale ROI',
      description: 'Track real-time performance. Use agentic insights to refine your strategy and maximize conversions.'
    }
  ];

  return (
    <section id="process" className="py-32 bg-slate-950 border-y border-slate-900 relative">
      <div className="container">
        <AnimatedSection>
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 tracking-tight">
              Speed to Success: <span className="text-secondary-400">The Roadmap</span>
            </h2>
            <p className="text-slate-300 max-w-xl mx-auto leading-relaxed">
              We've engineered the fastest path from tool fragmentation to high-performance automation.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
          {/* Timeline Line */}
          <div className="hidden lg:block absolute top-[2.5rem] left-[10%] right-[10%] h-px bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 pointer-events-none" />

          {steps.map((step, idx) => (
            <AnimatedSection key={idx} delay={idx * 0.15}>
              <div className="relative flex flex-col items-center text-center group">
                {/* Icon Hub */}
                <div className="w-20 h-20 rounded-3xl bg-slate-900 border border-slate-800 flex items-center justify-center text-secondary-400 group-hover:text-secondary-300 group-hover:border-secondary-500/50 transition-all duration-500 mb-8 relative z-10 shadow-2xl">
                  <div className="absolute inset-0 bg-secondary-600/5 blur-xl group-hover:bg-secondary-600/10 transition-colors" />
                  <step.icon className="w-8 h-8 relative z-10" />

                  {/* Step Number Badge */}
                  <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-slate-950 border border-slate-700 flex items-center justify-center text-[10px] font-bold text-white shadow-lg">
                    {step.number}
                  </div>
                </div>

                <h3 className="text-2xl font-display font-bold text-white mb-4 group-hover:text-primary-300 transition-colors">
                  {step.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed max-w-[250px]">
                  {step.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};