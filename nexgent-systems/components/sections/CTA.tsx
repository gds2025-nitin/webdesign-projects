import React from 'react';
import { Button } from '../Button';
import { AnimatedSection } from '../AnimatedSection';
import { ArrowRight } from 'lucide-react';

export const CTA: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary-600">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-multiply" />
        <div className="absolute -top-[50%] -left-[20%] w-[1000px] h-[1000px] bg-secondary-600/30 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 text-center">
        <AnimatedSection>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 tracking-tight leading-tight">
            Ready to <span className="text-slate-900 bg-white px-2 rounded-lg transform -rotate-2 inline-block">Transform</span> your Business?
          </h2>
          <p className="text-primary-100 text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed">
            Join thousands of forward-thinking companies automating their growth with Nexgent Systems.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-primary-700" icon={ArrowRight}>
              Start 14-Day Free Trial
            </Button>
            <Button size="lg" className="bg-primary-700 text-white hover:bg-primary-800 shadow-none border border-primary-500">
              Schedule Strategy Call
            </Button>
          </div>
          <p className="mt-6 text-sm text-primary-100">
            No credit card required. Cancel anytime.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
};