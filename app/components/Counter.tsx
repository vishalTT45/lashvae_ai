'use client';

import { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger, prefersReducedMotion } from '../lib/gsap';

interface CounterProps {
  value: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  decimals?: number;
  className?: string;
}

// GSAP-driven "count up when scrolled into view" number, reused anywhere a
// stat needs to animate (home stats row, compare page, channel detail).
export default function Counter({
  value,
  prefix = '',
  suffix = '',
  duration = 1.6,
  decimals = 0,
  className = '',
}: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const format = (n: number) =>
      decimals > 0
        ? `${prefix}${n.toFixed(decimals)}${suffix}`
        : `${prefix}${Math.round(n).toLocaleString()}${suffix}`;

    if (prefersReducedMotion()) {
      el.textContent = format(value);
      return;
    }

    const counter = { val: 0 };
    const tween = gsap.to(counter, {
      val: value,
      duration,
      ease: 'power2.out',
      paused: true,
      onUpdate: () => {
        el.textContent = format(counter.val);
      },
    });

    const trigger = ScrollTrigger.create({
      trigger: el,
      start: 'top 90%',
      once: true,
      onEnter: () => tween.play(),
    });

    return () => {
      trigger.kill();
      tween.kill();
    };
  }, [value, prefix, suffix, duration, decimals]);

  return (
    <span ref={ref} className={className}>
      {prefix}0{suffix}
    </span>
  );
}
