import React, { useState } from 'react';
import { SEO } from '../components/SEO';
import { AnimatedSection } from '../components/AnimatedSection';
import { Button } from '../components/Button';
import { Check } from 'lucide-react';
import { Badge } from '../components/Badge';

export const Pricing: React.FC = () => {
  const [annual, setAnnual] = useState(true);

  const plans = [
    {
      name: "Starter",
      price: annual ? 97 : 119,
      desc: "Perfect for solo consultants and small businesses.",
      features: ["2 Team Members", "1,000 AI Contacts", "Basic CRM", "Email & SMS Marketing"],
      cta: "Start Free Trial",
      popular: false
    },
    {
      name: "Growth",
      price: annual ? 297 : 349,
      desc: "For growing teams needing advanced automation.",
      features: ["10 Team Members", "Unlimited Contacts", "Advanced Workflows", "AI Voice Agents (500 mins)", "Remove Nexgent Branding"],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Agency",
      price: annual ? 497 : 599,
      desc: "Full white-label solution for scaling agencies.",
      features: ["Unlimited Team Members", "Unlimited Sub-Accounts", "Full White Labeling", "API Access", "Priority Support"],
      cta: "Contact Sales",
      popular: false
    }
  ];

  return (
    <>
      <SEO title="Pricing Plans" description="Simple, transparent pricing for businesses of all sizes." />
      <section className="relative min-h-[90dvh] flex items-center pt-32 pb-24 overflow-hidden bg-slate-950">
        <div className="container">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h1 className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl leading-[1.05] mb-6 tracking-tighter text-white">Simple Pricing</h1>
              <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">Choose the plan that fits your growth stage.</p>

              <div className="inline-flex items-center p-1 bg-slate-900 rounded-full border border-slate-800">
                <button
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${!annual ? 'bg-slate-800 text-white shadow-lg' : 'text-slate-400 hover:text-white'}`}
                  onClick={() => setAnnual(false)}
                >
                  Monthly
                </button>
                <button
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${annual ? 'bg-primary-600 text-white shadow-lg' : 'text-slate-400 hover:text-white'}`}
                  onClick={() => setAnnual(true)}
                >
                  Yearly <span className="text-xs opacity-80 ml-1">(-20%)</span>
                </button>
              </div>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, i) => (
              <AnimatedSection key={i} delay={0.1 + (i * 0.1)}>
                <div className={`relative p-8 rounded-2xl h-full flex flex-col ${plan.popular ? 'bg-slate-900 border-2 border-primary-500 shadow-2xl shadow-primary-900/20' : 'bg-slate-900/50 border border-slate-800'}`}>
                  {plan.popular && (
                    <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 transform">
                      <Badge color="secondary">Most Popular</Badge>
                    </div>
                  )}

                  <h3 className="text-2xl font-display font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-slate-400 text-sm mb-6 h-10">{plan.desc}</p>

                  <div className="mb-8">
                    <span className="text-4xl font-bold text-white">${plan.price}</span>
                    <span className="text-slate-500">/mo</span>
                  </div>

                  <div className="flex-1 space-y-4 mb-8">
                    {plan.features.map((f) => (
                      <div key={f} className="flex items-start gap-3 text-sm text-slate-300">
                        <Check className="w-5 h-5 text-primary-500 shrink-0" />
                        {f}
                      </div>
                    ))}
                  </div>

                  <Button variant={plan.popular ? 'primary' : 'outline'} className="w-full justify-center">
                    {plan.cta}
                  </Button>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};