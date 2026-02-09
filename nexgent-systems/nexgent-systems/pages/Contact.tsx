import React from 'react';
import { SEO } from '../components/SEO';
import { AnimatedSection } from '../components/AnimatedSection';
import { Button } from '../components/Button';
import { Mail, MapPin, Phone } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <>
      <SEO title="Contact Us" description="Get in touch with the Nexgent Systems team." />

      <section className="relative min-h-[90dvh] flex items-center pt-32 pb-24 overflow-hidden bg-slate-950">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Info */}
            <AnimatedSection>
              <h1 className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl leading-[1.05] mb-8 tracking-tighter text-white">Let's Talk</h1>
              <p className="text-xl text-slate-400 max-w-xl mb-12 leading-relaxed">
                Have questions about enterprise features or custom integrations? Our team is ready to help.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-primary-400">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                  <h3 className="text-2xl font-display font-bold text-white mb-1">Email Us</h3>
                  <p className="text-slate-400">support@nexgentsystems.com</p>
                  <p className="text-slate-400">sales@nexgentsystems.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-secondary-400">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-display font-bold text-white mb-1">HQ</h3>
                  <p className="text-slate-400">100 Innovation Drive</p>
                  <p className="text-slate-400">San Francisco, CA 94105</p>
                </div>
              </div>
              </div>
            </AnimatedSection>

            {/* Form */}
            <AnimatedSection delay={0.2}>
              <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800">
                <form className="space-y-6">
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-400 mb-2">First Name</label>
                      <input type="text" className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary-500 transition-colors" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-400 mb-2">Last Name</label>
                      <input type="text" className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary-500 transition-colors" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-400 mb-2">Email Address</label>
                    <input type="email" className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary-500 transition-colors" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-400 mb-2">Message</label>
                    <textarea rows={4} className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary-500 transition-colors"></textarea>
                  </div>
                  <Button className="w-full justify-center">Send Message</Button>
                </form>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
};