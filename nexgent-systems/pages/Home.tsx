import React, { Suspense, lazy } from 'react';
import { SEO } from '../components/SEO';
import { Hero } from '../components/sections/Hero';
import { SocialProof } from '../components/sections/SocialProof';
import { Features } from '../components/sections/Features';
import { AnimatedSection } from '../components/AnimatedSection';
import { SecondaryCTA } from '../components/sections/SecondaryCTA';
import { HelpCircle, Calculator } from 'lucide-react';

// Lazy load heavy sections
const Process = lazy(() => import('../components/sections/Process').then(module => ({ default: module.Process })));
const Testimonials = lazy(() => import('../components/sections/Testimonials').then(module => ({ default: module.Testimonials })));
const CTA = lazy(() => import('../components/sections/CTA').then(module => ({ default: module.CTA })));

export const Home: React.FC = () => {
  const faqs = [
    {
      q: "Can I really replace all my other tools with Nexgent?",
      a: "Yes. Nexgent Systems is designed to replace your CRM, email marketing tool, funnel builder, scheduling software, and reputation management platform, saving you hundreds in monthly subscriptions."
    },
    {
      q: "How does the white-label setup work?",
      a: "Our Agency Pro plan allows you to put your logo, brand colors, and custom domain on the entire platform. Your clients will only ever see your brand."
    },
    {
      q: "Do I need technical skills to use the AI agents?",
      a: "Not at all. We provide pre-built templates and a drag-and-drop interface so you can deploy AI assistants in minutes."
    }
  ];

  return (
    <>
      <SEO 
        title="Nexgent Systems | All-in-One Business Automation & CRM Platform" 
        description="Scale your business with Nexgent Systems. Consolidate your CRM, lead capture, and AI automation into one powerful ecosystem. Start your free trial today."
        keywords="all-in-one business automation, white label CRM for agencies, AI lead capture software, CRM pipeline management"
      />
      
      <Hero />
      
      <section className="py-24 bg-slate-900 border-y border-slate-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedSection>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-8 tracking-tight">
                Tired of a <span className="text-secondary-400">"Cobbled Together"</span> Business?
              </h2>
              <p className="text-xl text-slate-400 leading-relaxed">
                Most businesses suffer from "Tool Fatigue"—paying for five different subscriptions that don't talk to each other. This fragmentation leads to data silos, missed follow-ups, and massive lead leakage. Nexgent Systems replaces your disconnected tools with a unified platform that works while you sleep.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <SocialProof />
      <Features />

      <section className="py-12 bg-slate-950">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <SecondaryCTA 
              tag="ROI CALCULATOR"
              title="See exactly how much you're leaving on the table."
              description="Calculate the cost of lead leakage and manual follow-ups in your current business stack."
              btnText="Launch Calculator"
              btnHref="/pricing"
              className="max-w-5xl mx-auto"
            />
          </AnimatedSection>
        </div>
      </section>
      
      <Suspense fallback={<div className="h-20" />}>
        <Process />
        
        <section className="py-24 bg-slate-950">
          <div className="container mx-auto px-4 md:px-6">
            <AnimatedSection>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
                  Frequently Asked <span className="text-primary-400">Questions</span>
                </h2>
              </div>
            </AnimatedSection>

            <div className="max-w-3xl mx-auto grid gap-6">
              {faqs.map((faq, i) => (
                <AnimatedSection key={i} delay={i * 0.1}>
                  <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-colors group">
                    <div className="flex gap-4">
                      <HelpCircle className="w-6 h-6 text-primary-400 shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                      <div>
                        <h3 className="text-lg font-bold text-white mb-2">{faq.q}</h3>
                        <p className="text-slate-400 leading-relaxed">{faq.a}</p>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        <Testimonials />
        <CTA />
      </Suspense>
    </>
  );
};