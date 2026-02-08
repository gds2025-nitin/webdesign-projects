import React from 'react';
import { AnimatedSection } from '../AnimatedSection';
import { Bot, MessageSquare, Star, Workflow, Sparkles, Zap, ArrowUpRight } from 'lucide-react';
import { Badge } from '../Badge';

export const Features: React.FC = () => {
  const features = [
    {
      title: "Unified CRM & Pipelines",
      description: "Visualize every deal and automate the journey from lead to loyal client. Stop data silos and manage your growth in one place.",
      icon: Workflow,
      colSpan: "lg:col-span-2",
      bg: "bg-slate-900/50",
      accent: "from-primary-500/20 to-transparent",
      tag: "CORE ENGINE"
    },
    {
      title: "AI Chat & Voice Agents",
      description: "Capture and qualify leads 24/7 with intelligent, human-like assistants that book directly into your calendar.",
      icon: Bot,
      colSpan: "lg:col-span-1",
      bg: "bg-slate-900/50",
      accent: "from-secondary-500/20 to-transparent",
      tag: "AGENTIC AI"
    },
    {
      title: "Automated Follow-Ups",
      description: "Never miss a beat with multi-channel SMS, Email, and Voice sequences that trigger based on behavior.",
      icon: MessageSquare,
      colSpan: "lg:col-span-1",
      bg: "bg-slate-900/50",
      accent: "from-accent-400/20 to-transparent",
      tag: "AUTOMATION"
    },
    {
      title: "Reputation Management",
      description: "Automatically generate and manage reviews to dominate local search. Build trust while you sleep.",
      icon: Star,
      colSpan: "lg:col-span-2",
      bg: "bg-slate-900/50",
      accent: "from-primary-500/20 to-transparent",
      tag: "REPUTATION"
    }
  ];

  return (
    <section id="features" className="py-32 bg-slate-950 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-600/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <AnimatedSection>
          <div className="max-w-3xl mx-auto text-center mb-20">
            <Badge icon={Sparkles} color="secondary">Performance Stack</Badge>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mt-6 mb-6 leading-tight tracking-tight">
              The Big Four of <br /> <span className="text-blue-500 bg-clip-text bg-gradient-to-r from-primary-400 to-primary-200">Scaleable Automation</span>
            </h2>
            <p className="text-slate-300 text-lg leading-relaxed max-w-2xl mx-auto">
              Replace five disconnected tools with one unified ecosystem designed to capture, nurture, and close leads on autopilot.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <AnimatedSection key={idx} delay={idx * 0.1} className={`${feature.colSpan} group`}>
              <div className={`h-full p-8 rounded-3xl border border-slate-800 hover:border-slate-700 transition-all duration-500 ${feature.bg} relative overflow-hidden flex flex-col`}>
                {/* Background Accent Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex justify-between items-start mb-8">
                    <div className="w-14 h-14 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center text-secondary-400 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 shadow-xl shadow-black/20">
                      <feature.icon className="w-7 h-7" />
                    </div>
                    <span className="text-[10px] font-bold tracking-[0.2em] text-slate-400 uppercase">{feature.tag}</span>
                  </div>

                  <h3 className="text-2xl font-display font-bold text-white mb-4 flex items-center gap-2">
                    {feature.title}
                    <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-primary-400" />
                  </h3>

                  <p className="text-slate-300 leading-relaxed mb-8 flex-grow">
                    {feature.description}
                  </p>

                  <div className="pt-6 border-t border-slate-800/50 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs font-bold text-slate-300 group-hover:text-white transition-colors cursor-pointer">
                      <span>Learn more</span>
                      <Zap className="w-3 h-3 text-secondary-400" />
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};