import React from 'react';
import { SEO } from '../components/SEO';
import { AnimatedSection } from '../components/AnimatedSection';
import { Bot, MessageSquare, Workflow, PhoneCall, Headphones } from 'lucide-react';
import { Button } from '../components/Button';
import { CTA } from '../components/sections/CTA';
import { SecondaryCTA } from '../components/sections/SecondaryCTA';

export const Solutions: React.FC = () => {
  const solutions = [
    {
      icon: PhoneCall,
      title: "AI Voice Assistants",
      desc: "Handle inbound and outbound calls with natural-sounding AI. Qualify leads and book appointments automatically.",
      color: "text-secondary-400"
    },
    {
      icon: MessageSquare,
      title: "Intelligent Chatbots",
      desc: "Convert website visitors into booked appointments instantly with agents that don't just chat—they take action.",
      color: "text-secondary-400"
    },
    {
      icon: Workflow,
      title: "Workflow Orchestration",
      desc: "Connect your entire business logic with drag-and-drop automation. Update your CRM in real-time without lifting a finger.",
      color: "text-secondary-400"
    }
  ];

  return (
    <div className="pt-24 min-h-screen bg-slate-950">
      <SEO
        title="AI Business Automation & Voice Assistants | Nexgent Systems"
        description="Leverage agentic automation to scale your operations. AI voice assistants, chat agents, and workflow automation for service businesses."
        keywords="AI chat for business, AI voice assistants, business automation software, agentic automation, lead qualification bot"
      />

      {/* Header */}
      <section className="py-16 md:py-24 bg-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-slate-950" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <AnimatedSection>
            <h1 className="text-4xl md:text-7xl font-display font-bold text-white mb-6 leading-[1.1] tracking-tighter">
              Put Your Growth on <br /> <span className="text-primary-400">Autopilot</span> with AI
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
              Human-like AI assistants that don't just chat—they book appointments, qualify leads, and update your CRM in real-time.
            </p>
            <Button size="lg">See AI Agents in Action</Button>
          </AnimatedSection>
        </div>
      </section>

      {/* Grid */}
      <section className="py-20 bg-slate-950">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {solutions.map((s, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all hover:translate-y-[-4px] h-full flex flex-col">
                  <div className={`w-12 h-12 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center mb-6 ${s.color}`}>
                    <s.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{s.title}</h3>
                  <p className="text-slate-400 leading-relaxed flex-grow">{s.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Mid-Page Bridge */}
      <section className="py-12 bg-slate-950">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <SecondaryCTA
              variant="gradient"
              tag="LIVE DEMO"
              title="Want to hear our AI voice agents?"
              description="Schedule a 5-minute call where our AI agent will explain its own features to you live."
              btnText="Book Live Call"
              btnHref="/contact"
              className="max-w-5xl mx-auto"
            />
          </AnimatedSection>
        </div>
      </section>

      {/* Deep Dive Section */}
      <section className="py-24 bg-slate-900 border-y border-slate-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6 leading-[1.1] tracking-tight">
                Agentic Automation <br />
                <span className="text-secondary-400">That Actually Scales</span>
              </h2>
              <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                Our AI agents are trained on millions of conversations to handle objections, understand nuances, and provide a human-like experience for your customers while keeping your database up-to-date.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {['24/7 Availability', 'Seamless CRM Integration', 'Multi-lingual Support', 'Natural Voice Synthesis', 'Inbound/Outbound', 'Real-time Updates'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-slate-300">
                    <div className="w-5 h-5 rounded-full bg-secondary-500/10 flex items-center justify-center text-secondary-500 text-xs">✓</div>
                    <span className="text-sm font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <Button>Explore Enterprise Solutions</Button>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="relative rounded-2xl bg-slate-800 border border-slate-800 p-2 shadow-2xl overflow-hidden aspect-video group">
                <div className="absolute inset-0 bg-gradient-to-tr from-secondary-500/20 to-transparent opacity-50 rounded-xl" />
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
                  alt="AI Automation Dashboard"
                  className="rounded-xl w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <CTA />
    </div>
  );
};