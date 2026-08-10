'use client';

import { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger, prefersReducedMotion } from '../lib/gsap';

// Slim progress bar tracking whole-page scroll position. Sits inline right
// under the header (sticky top-16 matches Header.tsx's h-16), then sticks
// there once scrolled past. GSAP-only (no motion/react — see Button.tsx).
export default function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const bar = barRef.current;
    if (!bar || prefersReducedMotion()) return;

    const trigger = ScrollTrigger.create({
      start: 0,
      end: () => document.documentElement.scrollHeight - window.innerHeight,
      onUpdate: (self) => {
        gsap.set(bar, { scaleX: self.progress });
      },
    });

    return () => trigger.kill();
  }, []);

  return (
    <div className="sticky top-16 z-40 h-[3px] w-full bg-transparent" aria-hidden="true">
      <div
        ref={barRef}
        className="h-full origin-left bg-gradient-to-r from-[#ff5530] via-[#ea5ec1] to-[#1456f0]"
        style={{ transform: 'scaleX(0)' }}
      />
    </div>
  );
}
