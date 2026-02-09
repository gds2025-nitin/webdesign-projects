import React from 'react';
import { SEO } from '../components/SEO';
import { AnimatedSection } from '../components/AnimatedSection';
import { Button } from '../components/Button';
import { BarChart3, ShieldCheck, Layers, ChevronRight, Sparkles, TrendingUp } from 'lucide-react';
import { CTA } from '../components/sections/CTA';
import { OptimizedImage } from '../components/OptimizedImage';
import { Badge } from '../components/Badge'; import { SecondaryCTA } from '../components/sections/SecondaryCTA';

export const Agencies: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen bg-slate-950">
      <SEO
        title="White Label CRM for Agencies | Launch Your Own SaaS | Nexgent"
        description="Build recurring revenue by reselling Nexgent Systems as your own. Full white-label CRM and automation platform for digital marketing agencies."
        keywords="white label SaaS for agencies, resell CRM services, agency growth tools, SaaS reseller program, recurring revenue agency"
      />

      {/* Hero Section */}
      <section className="relative min-h-[90dvh] flex items-center pt-32 pb-24 overflow-hidden bg-slate-950">
        {/* Abstract Background Element */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none opacity-20">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary-600/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-secondary-600/20 rounded-full blur-[120px]" />
        </div>

        <div className="container relative z-10 text-center">
          <AnimatedSection>
            <Badge icon={Sparkles}>Agency Pro Stack</Badge>

            <h1 className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl leading-[1.05] mb-8 tracking-tighter text-white">
              Launch Your Own <br />
              <span className="relative inline-block px-4">
                <span className="relative z-10 text-slate-950">Branded SaaS</span>
                <span className="absolute inset-0 bg-white rounded-2xl transform -rotate-1 shadow-2xl"></span>
              </span>
              <br /> in Minutes
            </h1>

            <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
              Move beyond "trading hours for dollars." Offer your clients a proprietary automation stack under your own brand. Increase retention and build a sellable asset.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="px-10 font-bold">Explore Agency Pricing</Button>
              <Button size="lg" variant="outline" className="px-10 font-bold border-slate-800">Book Strategy Call</Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-slate-900/40 border-y border-slate-900">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 tracking-tight leading-tight">
              Built by Agency Owners, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-400 to-primary-400">For Agency Owners</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              We understand the agency struggle. That's why Nexgent includes multi-tenant management and proven snapshots for every industry niche.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Full White Label",
                desc: "Your logo, your domain, your brand. Your clients will only ever see your agency's visual identity.",
                icon: ShieldCheck,
                color: "text-primary-400"
              },
              {
                title: "Niche Snapshots",
                desc: "Deploy entire pre-built setups for specific industries in seconds. Zero manual configuration for new clients.",
                icon: Layers,
                color: "text-secondary-400"
              },
              {
                title: "Client Reporting",
                desc: "Show clear ROI with automated dashboards that prove your value every single month without the busy work.",
                icon: BarChart3,
                color: "text-accent-400"
              }
            ].map((feature, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="bg-slate-950 p-10 rounded-[2rem] border border-slate-800 h-full group hover:border-primary-500/50 transition-all duration-500 flex flex-col">
                  <div className={`w-14 h-14 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center ${feature.color} mb-8 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 shadow-2xl`}>
                    <feature.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-slate-400 leading-relaxed mb-8 flex-grow">{feature.desc}</p>

                  <div className="pt-6 border-t border-slate-900 flex items-center gap-2 text-xs font-black uppercase tracking-widest text-slate-500 group-hover:text-white transition-colors cursor-pointer">
                    <span>Learn more</span>
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Profits Bridge */}
      <section className="py-12 bg-slate-950">
        <div className="container">
          <AnimatedSection>
            <SecondaryCTA
              tag="SaaS PROFITABILITY"
              title="Project your White-Label revenue."
              description="Our profit simulator shows you how much monthly recurring revenue (MRR) you can build with just 10, 50, or 100 white-label seats."
              btnText="Start Projections"
              btnHref="/pricing"
              className="max-w-5xl mx-auto"
            />
          </AnimatedSection>
        </div>
      </section>

      {/* Social Proof/Results Section */}
      <section className="py-24 bg-slate-950">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-8 leading-[1.1] tracking-tight">
                Stop Trading <br />
                <span className="text-primary-400">Time for Money</span>
              </h2>
              <p className="text-slate-400 text-lg mb-8 leading-relaxed font-medium">
                Agencies using Nexgent report a <span className="text-white font-bold">40% increase</span> in client retention and a <span className="text-white font-bold">3x growth</span> in monthly recurring revenue (MRR) by productizing their services.
              </p>
              <ul className="space-y-4 mb-10">
                {['Sub-account automation', 'One-click client onboarding', 'Custom branded dashboards', 'Automated billing management'].map((item) => (
                  <li key={item} className="flex items-center gap-4 text-slate-300">
                    <div className="w-6 h-6 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                      <ChevronRight className="w-4 h-4" />
                    </div>
                    <span className="text-sm font-bold uppercase tracking-wider">{item}</span>
                  </li>
                ))}
              </ul>
              <Button size="lg" icon={Sparkles}>Get Started Today</Button>
            </AnimatedSection>

            <AnimatedSection delay={0.2} className="relative">
              <div className="absolute inset-0 bg-primary-600/10 blur-[100px] rounded-full pointer-events-none" />
              <div className="relative rounded-[2rem] bg-slate-900 border border-slate-800 p-2 shadow-2xl overflow-hidden aspect-video">
                <OptimizedImage
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
                  alt="Agency Dashboard"
                  className="rounded-[1.8rem] opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-8 right-8">
                  <div className="flex justify-between items-end">
                    <div>
                      <div className="text-[10px] text-slate-500 font-black uppercase tracking-widest mb-1">Average Growth</div>
                      <div className="text-3xl font-display font-bold text-white">+312% MRR</div>
                    </div>
                    <div className="bg-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full text-xs font-bold border border-emerald-500/20">
                      Verified Result
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <CTA />
    </div>
  );
};