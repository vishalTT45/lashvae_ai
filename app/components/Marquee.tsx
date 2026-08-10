import type { ReactNode } from 'react';

interface MarqueeProps {
  children: ReactNode;
  className?: string;
  durationSeconds?: number;
  reverse?: boolean;
}

// Infinite horizontal scroll strip (channel/partner logos). Pure CSS keyframe
// (see .marquee-track / @keyframes marquee in globals.css) rather than a JS
// scroll loop — smoother, no hydration flash, pauses on hover, and honors
// prefers-reduced-motion via the same CSS media query.
export default function Marquee({
  children,
  className = '',
  durationSeconds = 26,
  reverse = false,
}: MarqueeProps) {
  const edgeFade = {
    maskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
    WebkitMaskImage:
      'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
  };

  return (
    <div className={`relative overflow-hidden ${className}`} style={edgeFade}>
      <div
        className='marquee-track'
        style={{
          animationDuration: `${durationSeconds}s`,
          animationDirection: reverse ? 'reverse' : 'normal',
        }}
      >
        <div className='flex items-center' aria-hidden={false}>
          {children}
        </div>
        <div className='flex items-center' aria-hidden='true'>
          {children}
        </div>
      </div>
    </div>
  );
}
