import React from 'react';
import { AnimatedSection } from '../AnimatedSection';
import { Star, Quote } from 'lucide-react';
import { OptimizedImage } from '../OptimizedImage';

export const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "My tools are no longer a cobbled together mess. Nexgent unified our entire agency workflow into one clean stack.",
      author: "Alex Rivera",
      role: "Founder",
      company: "Rivera Marketing",
      image: "https://picsum.photos/seed/alex/120/120"
    },
    {
      quote: "We scaled to $50k/mo without hiring a single new admin. The AI voice agents handle the workload of three people.",
      author: "Sarah Chen",
      role: "CEO",
      company: "ScaleUp Digital",
      image: "https://picsum.photos/seed/sarah/120/120"
    },
    {
      quote: "The white-label features allowed us to transform our service agency into a proprietary SaaS asset overnight.",
      author: "Marcus Johnson",
      role: "Director",
      company: "Apex Systems",
      image: "https://picsum.photos/seed/marcus/120/120"
    }
  ];

  return (
    <section className="py-32 bg-slate-950 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection>
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4 tracking-tight">
              Success Stories from the <span className="text-primary-400">Frontline</span>
            </h2>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="bg-slate-900/50 backdrop-blur-sm p-10 rounded-3xl border border-slate-800 hover:border-slate-700 transition-all duration-500 h-full flex flex-col relative group">
                <Quote className="absolute top-6 right-8 w-10 h-10 text-slate-800 group-hover:text-slate-700 transition-colors pointer-events-none" />

                <div className="flex gap-1 mb-8 text-yellow-500/80">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-current" />)}
                </div>

                <blockquote className="text-slate-200 text-lg mb-10 flex-1 leading-relaxed font-medium">
                  "{t.quote}"
                </blockquote>

                <div className="flex items-center gap-4 pt-6 border-t border-slate-800/50">
                  <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-slate-800 ring-4 ring-slate-950/50 shrink-0">
                    <OptimizedImage src={t.image} alt={t.author} width={56} height={56} />
                  </div>
                  <div>
                    <div className="font-bold text-white text-base">{t.author}</div>
                    <div className="text-xs text-slate-400 font-bold uppercase tracking-wider">{t.role} • {t.company}</div>
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