import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface BadgeProps {
    children: React.ReactNode;
    icon?: LucideIcon;
    color?: 'primary' | 'secondary' | 'accent';
    className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
    children,
    icon: Icon,
    color = 'primary',
    className = ''
}) => {
    const colorMap = {
        primary: 'text-primary-400 bg-primary-400/10 border-primary-500/20',
        secondary: 'text-secondary-400 bg-secondary-400/10 border-secondary-500/20',
        accent: 'text-accent-400 bg-accent-400/10 border-accent-500/20'
    };

    const gradientMap = {
        primary: 'from-transparent via-primary-500 to-transparent',
        secondary: 'from-transparent via-secondary-500 to-transparent',
        accent: 'from-transparent via-accent-500 to-transparent'
    };

    return (
        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-[10px] font-bold tracking-widest uppercase relative overflow-hidden group ${colorMap[color]} ${className}`}>
            {/* Moving Background Line */}
            <motion.div
                animate={{
                    x: ['-100%', '100%'],
                }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                }}
                className={`absolute inset-0 w-full h-[1px] bottom-0 bg-gradient-to-r ${gradientMap[color]} opacity-50`}
            />

            {/* Content */}
            <div className="relative z-10 flex items-center gap-2">
                {Icon && <Icon className="w-3.5 h-3.5" />}
                <span>{children}</span>
            </div>

            {/* Subtle Glow */}
            <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
        </div>
    );
};
