import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../Button';
import { AnimatedSection } from '../AnimatedSection';
import { Link } from '../Link';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Badge } from '../Badge';

interface SecondaryCTAProps {
  title: string;
  description: string;
  btnText: string;
  btnHref: string;
  tag?: string;
  className?: string;
  variant?: 'slate' | 'gradient';
}

export const SecondaryCTA: React.FC<SecondaryCTAProps> = ({
  title,
  description,
  btnText,
  btnHref,
  tag,
  className = '',
  variant = 'slate'
}) => {
  const isGradient = variant === 'gradient';

  return (
    <div className={`relative rounded-[2.5rem] overflow-hidden ${className}`}>
      <div className={`absolute inset-0 ${isGradient ? 'bg-gradient-to-br from-primary-600/20 to-secondary-600/20' : 'bg-slate-900/50'} border border-slate-800/50 backdrop-blur-sm`} />

      <div className="relative z-10 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="max-w-xl text-center md:text-left">
          {tag && (
            <Badge icon={Sparkles} color="secondary" className="mb-4">{tag}</Badge>
          )}
          <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-4 tracking-tight">
            {title}
          </h3>
          <p className="text-slate-300 leading-relaxed font-medium">
            {description}
          </p>
        </div>

        <div className="shrink-0">
          <Link to={btnHref}>
            <Button variant={isGradient ? 'primary' : 'outline'} icon={ArrowRight} className="font-bold">
              {btnText}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};