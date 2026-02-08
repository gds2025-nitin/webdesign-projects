import React, { useEffect } from 'react';
import { motion, useSpring, useMotionValue, useTransform } from 'framer-motion';
import { Button } from '../Button';
import { OptimizedImage } from '../OptimizedImage';
import { AnimatedSection } from '../AnimatedSection';
import { Badge } from '../Badge';
import { ArrowRight, PlayCircle, ShieldCheck, Zap } from 'lucide-react';

export const Hero: React.FC = () => {
  // Mouse tracking for spotlight effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth out the mouse movement
  const springConfig = { damping: 25, stiffness: 150 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Correctly derive the background spotlight style using useTransform
  const backgroundSpotlight = useTransform(
    [smoothX, smoothY],
    ([latestX, latestY]) => `radial-gradient(600px circle at ${latestX}px ${latestY}px, rgba(59, 130, 246, 0.12), transparent 80%)`
  );

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section className="relative min-h-[90dvh] flex items-center pt-32 pb-24 overflow-hidden bg-slate-950">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Animated Blobs */}
        <div
          className="absolute top-[-15%] right-[-10%] w-[700px] h-[700px] bg-primary-600/10 rounded-full blur-[130px] animate-blob"
          style={{ animationDuration: '12s' }}
        />
        <div
          className="absolute bottom-[-20%] left-[-10%] w-[800px] h-[800px] bg-secondary-600/10 rounded-full blur-[140px] animate-blob"
          style={{ animationDuration: '18s', animationDelay: '2s' }}
        />

        {/* Mouse Tracking Spotlight */}
        <motion.div
          className="absolute inset-0 z-10 pointer-events-none opacity-50"
          style={{ background: backgroundSpotlight }}
        />

        {/* Noise Texture Overlay */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.1] brightness-125 contrast-125 mix-blend-overlay" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">

          {/* Content Column */}
          <div className="lg:col-span-7 max-w-3xl">
            <AnimatedSection>
              <Badge icon={Zap}>Next-Gen Business OS</Badge>

              <h1 className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl leading-[1.05] mb-8 tracking-tighter text-white">
                The AI-Powered <br />
                <span className="relative inline-block py-1">
                  <span className="relative z-10 text-white bg-clip-text bg-gradient-to-r from-primary-400 via-primary-200 to-secondary-400 px-1">
                    Operating System
                  </span>
                  <motion.span
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ delay: 0.8, duration: 0.8, ease: "circOut" }}
                    className="absolute bottom-1 left-0 h-[25%] bg-primary-500/20 rounded-sm -z-0"
                  />
                </span> <br />
                for Modern Growth
              </h1>

              <p className="text-lg sm:text-xl text-slate-300 mb-10 leading-relaxed max-w-xl">
                Nexgent Systems unifies your CRM, automated follow-ups, and AI agents into one scalable ecosystem. Eliminate lead leakage and scale without increasing headcount.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <Button size="lg" icon={ArrowRight} className="font-bold px-10 shadow-primary-600/20">
                  Get Started Free
                </Button>
                <Button size="lg" variant="outline" icon={PlayCircle} className="bg-slate-900/40 backdrop-blur-md border-slate-800 font-bold hover:bg-slate-800 transition-all">
                  Watch Demo
                </Button>
              </div>

              <div className="flex flex-wrap items-center gap-x-8 gap-y-4 pt-6 border-t border-slate-900/50">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-slate-950 bg-slate-800 overflow-hidden ring-1 ring-slate-800 shadow-lg">
                      <OptimizedImage src={`https://picsum.photos/seed/user${i}/80/80`} alt="User" width={40} height={40} />
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1.5 text-white font-bold mb-0.5 text-sm">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span>Trusted by 10,000+ Teams</span>
                  </div>
                  <p className="text-[11px] text-slate-400 uppercase tracking-widest font-black">Agencies & Service Pros</p>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Visual Column */}
          <div className="lg:col-span-5 hidden lg:block perspective-1000">
            <AnimatedSection delay={0.2} className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/30 to-secondary-500/20 rounded-3xl blur-3xl transform rotate-3 scale-95" />

              <motion.div
                whileHover={{ rotateY: -3, rotateX: 1, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative rounded-3xl border border-slate-800 bg-slate-900/80 backdrop-blur-2xl overflow-hidden shadow-[0_0_50px_-12px_rgba(0,0,0,0.5)] aspect-square p-8 border-t-slate-700/50 group"
              >
                {/* Simulated Dashboard Header */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
                  </div>
                  <div className="px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700 text-[9px] font-black uppercase tracking-[0.15em] text-slate-400">
                    Live Engine
                  </div>
                </div>

                {/* Dashboard Stats */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800/50 shadow-inner group-hover:border-primary-500/30 transition-colors">
                    <div className="text-[9px] uppercase tracking-wider text-slate-400 font-black mb-1">New Leads</div>
                    <div className="text-2xl font-display font-bold text-white tracking-tighter">1,248</div>
                    <div className="text-[10px] text-emerald-400 font-bold">+12.5%</div>
                  </div>
                  <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800/50 shadow-inner group-hover:border-secondary-500/30 transition-colors">
                    <div className="text-[9px] uppercase tracking-wider text-slate-400 font-black mb-1">ROI</div>
                    <div className="text-2xl font-display font-bold text-white tracking-tighter">8.4x</div>
                    <div className="text-[10px] text-primary-400 font-bold">+2.1x</div>
                  </div>
                </div>

                {/* Activity List */}
                <div className="space-y-3">
                  {[
                    { label: 'Sarah J.', action: 'booked appointment', time: '2m ago', color: 'bg-primary-500' },
                    { label: 'Lead Bot', action: 'qualified lead', time: '14m ago', color: 'bg-emerald-500' },
                    { label: 'Auto-SMS', action: 'sent follow-up', time: '1h ago', color: 'bg-secondary-500' },
                    { label: 'Revenue', action: '+$1,200 closed', time: '3h ago', color: 'bg-accent-400' },
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1 + (i * 0.1) }}
                      className="flex items-center justify-between p-3 rounded-xl bg-slate-950/50 border border-slate-800/30 group-hover:border-slate-700 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-2 h-2 rounded-full ${item.color} shadow-[0_0_8px_rgba(0,0,0,0.5)]`} />
                        <div className="text-xs">
                          <span className="font-bold text-white">{item.label}</span>
                          <span className="text-slate-400 ml-1.5">{item.action}</span>
                        </div>
                      </div>
                      <span className="text-[10px] text-slate-400 font-bold tabular-nums">{item.time}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Floating Decoration */}
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary-600/10 rounded-full blur-3xl" />
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1, ease: "easeOut" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 group cursor-pointer z-20"
      >
        <div className="flex flex-col items-center gap-3">
          <motion.span
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="text-[9px] uppercase tracking-[0.6em] font-black text-slate-500 group-hover:text-primary-400 transition-colors duration-300"
          >
            The Future
          </motion.span>

          {/* Premium Mouse Indicator */}
          <div className="relative w-6 h-10 rounded-full border-2 border-slate-800 group-hover:border-primary-500/30 transition-colors duration-500 flex justify-center pt-2">
            <motion.div
              animate={{
                y: [0, 14, 0],
                opacity: [1, 0, 1],
                scaleY: [1, 1.5, 1]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-1 h-1.5 bg-gradient-to-b from-primary-400 to-secondary-400 rounded-full shadow-[0_0_8px_rgba(59,130,246,0.5)]"
            />

            {/* Subtle Inner Glow */}
            <div className="absolute inset-0 rounded-full bg-primary-500/0 group-hover:bg-primary-500/5 transition-colors duration-500" />
          </div>
        </div>

        {/* Dynamic Pulsing Line */}
        <div className="relative w-px h-16 bg-slate-900 overflow-hidden rounded-full">
          <motion.div
            animate={{
              y: [-64, 64]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-primary-500 to-transparent"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-950" />
        </div>
      </motion.div>
    </section>
  );
};