import React from 'react';
import { SEO } from '../components/SEO';
import { AnimatedSection } from '../components/AnimatedSection';
import { Button } from '../components/Button';
import { CTA } from '../components/sections/CTA';
import { PhoneCall, Star, Calendar, MessageSquare, Bot, ArrowRight, CheckCircle2, XCircle, FileText } from 'lucide-react';
import { SecondaryCTA } from '../components/sections/SecondaryCTA';
import { Badge } from '../components/Badge';

export const LocalServices: React.FC = () => {
  const benefits = [
    {
      problem: "Missed calls from new leads when you're busy",
      solution: "Missed Call Text-Back starts the conversation instantly.",
      icon: PhoneCall,
      color: "text-primary-400"
    },
    {
      problem: "Zero reviews on Google despite great service",
      solution: "Automated Review Requests sent after every completed job.",
      icon: Star,
      color: "text-yellow-500"
    },
    {
      problem: "Back-and-forth manual scheduling headaches",
      solution: "Self-Service Booking syncs directly with your calendar.",
      icon: Calendar,
      color: "text-emerald-400"
    },
    {
      problem: "Leads falling through the cracks of a messy inbox",
      solution: "Unified CRM tracks every lead from contact to close.",
      icon: MessageSquare,
      color: "text-secondary-400"
    }
  ];

  return (
    <div className="pt-24 min-h-screen bg-slate-950">
      <SEO
        title="CRM & Automation for Local Service Businesses | Nexgent Systems"
        description="The all-in-one tool for HVAC, Law Firms, and Real Estate. Manage leads, reviews, and appointments from one mobile app."
        keywords="best CRM for local service businesses, small business pipeline automation, HVAC CRM software, reputation management for local business, real estate automation"
      />

      {/* Hero Section */}
      <section className="relative min-h-[90dvh] flex items-center pt-32 pb-24 overflow-hidden bg-slate-950">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <Badge icon={Star}>For Local Pros</Badge>
              <h1 className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl leading-[1.05] mb-8 tracking-tighter text-white">
                Dominate Your <br /> <span className="text-primary-400">Local Market</span>
              </h1>
              <p className="text-xl text-slate-400 mb-10 leading-relaxed max-w-xl">
                You're busy in the field. Let Nexgent handle the phones. Our mobile-first platform ensures you never miss a lead, even when you're on the job.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="font-bold">Get Started Locally</Button>
                <Button variant="outline" size="lg" className="font-bold border-slate-800">View All Verticals</Button>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2} className="relative">
              <div className="absolute inset-0 bg-primary-600/10 blur-[100px] rounded-full pointer-events-none" />
              <div className="relative rounded-[2.5rem] bg-slate-900 p-10 border border-slate-800 shadow-[0_0_80px_-20px_rgba(0,0,0,0.8)] border-t-slate-700/50">
                <div className="space-y-6">
                  <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800/50 flex items-center gap-5">
                    <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-500 border border-emerald-500/20">
                      <MessageSquare className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-[10px] text-slate-500 uppercase font-black tracking-widest mb-1">New Lead Alert</div>
                      <div className="text-white font-bold text-lg">"I need an HVAC quote for my office..."</div>
                    </div>
                  </div>

                  <div className="p-5 rounded-2xl bg-primary-600/10 border border-primary-500/30 flex items-center gap-5 translate-x-8 shadow-2xl">
                    <div className="w-12 h-12 rounded-xl bg-primary-500 flex items-center justify-center text-white shadow-lg shadow-primary-900/40">
                      <Bot className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-[10px] text-primary-300 uppercase font-black tracking-widest mb-1">Nexgent AI</div>
                      <div className="text-white font-bold text-lg">"Hi! We can send someone today at 2PM..."</div>
                    </div>
                  </div>

                  <div className="pt-4 flex justify-end">
                    <div className="px-4 py-2 rounded-full bg-slate-800 border border-slate-700 text-xs font-bold text-white flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Appointment Confirmed</span>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-32 bg-slate-900/30 border-y border-slate-900 relative">
        <div className="container">
          <AnimatedSection>
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 tracking-tight">
                Solving the <span className="text-secondary-400">Local Struggle</span>
              </h2>
              <p className="text-slate-400 max-w-xl mx-auto">
                We've identified the most common bottlenecks for service businesses and built the ultimate fix.
              </p>
            </div>
          </AnimatedSection>

          <div className="max-w-5xl mx-auto">
            <div className="overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-950 shadow-2xl">
              <div className="grid grid-cols-1 md:grid-cols-2 bg-slate-900/80 border-b border-slate-800">
                <div className="px-10 py-8 flex items-center gap-3">
                  <XCircle className="w-5 h-5 text-rose-500" />
                  <span className="text-sm font-black text-slate-500 uppercase tracking-[0.2em]">The Old Way</span>
                </div>
                <div className="px-10 py-8 flex items-center gap-3 border-l border-slate-800">
                  <CheckCircle2 className="w-5 h-5 text-primary-400" />
                  <span className="text-sm font-black text-primary-400 uppercase tracking-[0.2em]">The Nexgent Solution</span>
                </div>
              </div>
              <div className="divide-y divide-slate-800">
                {benefits.map((benefit, i) => (
                  <div key={i} className="grid grid-cols-1 md:grid-cols-2 group hover:bg-slate-900/30 transition-all duration-300">
                    <div className="px-10 py-10 border-r border-slate-800/50 flex items-center">
                      <p className="text-slate-500 text-lg leading-relaxed group-hover:text-slate-400 transition-colors italic">"{benefit.problem}"</p>
                    </div>
                    <div className="px-10 py-10 flex items-center gap-5">
                      <div className={`w-14 h-14 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform ${benefit.color}`}>
                        <benefit.icon className="w-7 h-7" />
                      </div>
                      <p className="text-white font-display font-bold text-xl leading-snug">{benefit.solution}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guide Bridge */}
      <section className="py-12 bg-slate-950">
        <div className="container">
          <AnimatedSection>
            <SecondaryCTA
              tag="INDUSTRY GUIDE"
              title="Automating Your HVAC or Real Estate Biz."
              description="Download our free 12-page guide on setting up your first automated appointment funnel."
              btnText="Get Free Guide"
              btnHref="/contact"
              className="max-w-5xl mx-auto"
            />
          </AnimatedSection>
        </div>
      </section>

      <CTA />
    </div>
  );
};