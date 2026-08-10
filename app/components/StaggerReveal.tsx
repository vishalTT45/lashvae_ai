'use client';

import { useEffect, useRef, type ReactNode } from 'react';
import { gsap, prefersReducedMotion } from '../lib/gsap';

interface StaggerRevealProps {
  children: ReactNode;
  className?: string;
  stagger?: number;
  y?: number;
  start?: string;
}

// GSAP ScrollTrigger stagger for a list of DIRECT children. Only use this
// around elements PageMotion.tsx does NOT already animate (plain <div> rows
// that aren't `article`/`.grid > div` and don't sit under its text selector)
// — otherwise the two systems fight over opacity/transform on the same node.
export default function StaggerReveal({
  children,
  className = '',
  stagger = 0.08,
  y = 24,
  start = 'top 85%',
}: StaggerRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container || prefersReducedMotion()) return;

    const targets = Array.from(container.children) as HTMLElement[];
    if (!targets.length) return;

    gsap.set(targets, { opacity: 0, y });
    const tween = gsap.to(targets, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power3.out',
      stagger,
      scrollTrigger: { trigger: container, start, once: true },
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [stagger, y, start]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
