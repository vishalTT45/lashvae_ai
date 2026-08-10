'use client';

import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { channelProducts, type ChannelId } from '../channels/data';
import { gsap, prefersReducedMotion } from '../lib/gsap';
import Button from './Button';

// Loose ring of the real channels this product supports (the mockup used
// generic Zapier/HubSpot/Shopify placeholders — swapped for the actual
// integrations so the homepage stays consistent with /channels and the
// header dropdown).
const constellation: { id: ChannelId; top: string; left: string }[] = [
  { id: 'telegram', top: '6%', left: '50%' },
  { id: 'facebook', top: '26%', left: '15%' },
  { id: 'instagram', top: '26%', left: '85%' },
  { id: 'googlemaps', top: '76%', left: '15%' },
  { id: 'youtube', top: '76%', left: '85%' },
  { id: 'whatsapp', top: '94%', left: '50%' },
];

export default function HomeHero() {
  const bubblesRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;

    const cleanups: Array<() => void> = [];

    if (bubblesRef.current) {
      const bubbles = bubblesRef.current.querySelectorAll<HTMLElement>('[data-bubble]');
      gsap.set(bubbles, { opacity: 0, scale: 0.6, y: 16 });
      const entrance = gsap.to(bubbles, {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.7,
        ease: 'back.out(1.6)',
        stagger: 0.08,
        delay: 0.15,
      });
      cleanups.push(() => entrance.kill());
    }

    if (headlineRef.current) {
      const lines = headlineRef.current.querySelectorAll<HTMLElement>('[data-line]');
      const scrub = gsap.fromTo(
        lines,
        { color: '#d8dade' },
        {
          color: '#0a0a0a',
          stagger: 0.35,
          ease: 'none',
          scrollTrigger: {
            trigger: headlineRef.current,
            start: 'top 90%',
            end: 'top 35%',
            scrub: 0.6,
          },
        }
      );
      cleanups.push(() => {
        scrub.scrollTrigger?.kill();
        scrub.kill();
      });
    }

    return () => cleanups.forEach((fn) => fn());
  }, []);

  return (
    <section className="relative overflow-hidden bg-white px-6 pb-8 pt-14 sm:px-8 sm:pt-20">
      <p className="mx-auto max-w-xl text-center text-[11px] font-bold uppercase tracking-[0.18em] text-[#8e8e93] sm:text-[12px]">
        Emotional-Intelligence AI &middot; For Every Conversation
      </p>

      <div
        ref={bubblesRef}
        className="relative mx-auto mt-10 aspect-square w-full max-w-[380px] sm:mt-14 sm:max-w-[560px]"
      >
        {constellation.map((item) => {
          const channel = channelProducts.find((c) => c.id === item.id)!;
          return (
            <div
              key={item.id}
              data-bubble
              className="absolute flex h-[clamp(52px,13vw,88px)] w-[clamp(52px,13vw,88px)] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl bg-white p-3 shadow-[0_12px_30px_rgba(10,10,10,0.14)]"
              style={{ top: item.top, left: item.left }}
            >
              <div
                className="absolute -inset-3 -z-10 rounded-full opacity-60"
                style={{ background: channel.color, filter: 'blur(18px)' }}
                aria-hidden="true"
              />
              <Image
                src={channel.logo}
                alt={channel.name}
                width={40}
                height={40}
                className="h-full w-full object-contain"
              />
            </div>
          );
        })}

        <p className="absolute left-1/2 top-1/2 w-[70%] -translate-x-1/2 -translate-y-1/2 text-center text-[14px] leading-snug text-[#0a0a0a] sm:w-[65%] sm:text-[17px]">
          Lashvae reads every message the way your best rep would &mdash; and replies in under a second.
        </p>
      </div>

      <div ref={headlineRef} className="mx-auto mt-14 max-w-4xl text-center sm:mt-20">
        <h1 className="hero-display-typography" data-line>
          We reply.
        </h1>
        <h1 className="hero-display-typography" data-line>
          They convert.
        </h1>
      </div>

      <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
        <Button href="https://app.lashvae.com/login?signup=true" id="hero-cta-primary" variant="primary" className="w-full sm:w-auto">
          Start Free 14 Days <ArrowRight className="h-4 w-4" />
        </Button>
        <Button href="/features" id="hero-cta-secondary" variant="secondary" className="w-full sm:w-auto">
          See Capabilities
        </Button>
      </div>
    </section>
  );
}
