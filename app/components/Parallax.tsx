'use client';

import { useEffect, useRef, type ReactNode } from 'react';
import { gsap, prefersReducedMotion } from '../lib/gsap';

interface ParallaxProps {
  children: ReactNode;
  className?: string;
  speed?: number;
}

// Subtle scroll-linked translateY, used on hero imagery / decorative blobs —
// elements PageMotion.tsx never touches, so no risk of double animation.
export default function Parallax({ children, className = '', speed = 50 }: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;

    const tween = gsap.fromTo(
      el,
      { y: -speed },
      {
        y: speed,
        ease: 'none',
        scrollTrigger: {
          trigger: el,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 0.6,
        },
      }
    );

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [speed]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
