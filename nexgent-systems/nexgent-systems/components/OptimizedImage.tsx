import React, { useState } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
}

export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
}) => {
  const [loaded, setLoaded] = useState(false);

  // In a real build pipeline, we would have multiple sources (avif, webp)
  // For this demo, we handle the loading state transition for UX
  
  return (
    <div className={`relative overflow-hidden ${className}`} style={{ aspectRatio: width && height ? `${width}/${height}` : 'auto' }}>
      {!loaded && (
        <div className="absolute inset-0 bg-slate-800 animate-pulse z-0" />
      )}
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        className={`relative z-10 transition-opacity duration-500 ease-out ${loaded ? 'opacity-100' : 'opacity-0'} w-full h-full object-cover`}
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
};