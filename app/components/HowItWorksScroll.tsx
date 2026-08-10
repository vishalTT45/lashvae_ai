'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap, ScrollTrigger, prefersReducedMotion } from '../lib/gsap';

type StepKey = 'listens' | 'learns' | 'engages' | 'converts';

const steps: { key: StepKey; num: string; title: string; desc: string }[] = [
  {
    key: 'listens',
    num: '01',
    title: 'Listens',
    desc: 'It watches every channel in real time and reads each incoming message — the words, the emoji and the tone behind them.',
  },
  {
    key: 'learns',
    num: '02',
    title: 'Learns',
    desc: 'It pulls from your catalog, FAQs and past chats to know exactly how your brand answers every question.',
  },
  {
    key: 'engages',
    num: '03',
    title: 'Engages',
    desc: 'It replies in your voice, handles the objection, and moves the conversation toward the sale or the call.',
  },
  {
    key: 'converts',
    num: '04',
    title: 'Converts',
    desc: 'It captures a qualified lead, syncs it straight to your CRM, and logs the whole conversation.',
  },
];

function StepMock({ step }: { step: StepKey }) {
  if (step === 'engages') {
    return (
      <div className="flex h-full w-full flex-col justify-center gap-3 p-7 sm:p-8">
        <span className="text-[11px] font-bold uppercase tracking-wider text-[#8e8e93]">Knows your brand</span>
        {['📦 Ships to Canada in 3–5 days', '💧 Serum is oil-free · great for oily skin', '🎁 First-order code: WELCOME15'].map(
          (line) => (
            <div key={line} className="rounded-xl bg-[#e9e6de] px-4 py-3 text-[13px] font-medium text-[#3a3a3a]">
              {line}
            </div>
          )
        )}
      </div>
    );
  }

  if (step === 'converts') {
    return (
      <div className="flex h-full w-full items-center p-7 sm:p-8">
        <div className="rounded-2xl rounded-bl-sm bg-[#ff5530] px-5 py-4 text-[14px] leading-relaxed text-white shadow-lg">
          Yes! We ship to Canada in 3–5 days, and our serum is perfect for oily skin. Want your 15% code? ✨
        </div>
      </div>
    );
  }

  // 'listens' and 'learns' share the same incoming-message mock.
  return (
    <div className="flex h-full w-full flex-col gap-3 p-7 sm:p-8">
      <div className="w-fit max-w-[85%] rounded-2xl rounded-bl-sm bg-[#e9e6de] px-4 py-3 text-[14px] text-[#0a0a0a]">
        Hey! Do you ship to Canada? 😊
      </div>
      <p className="text-[12px] text-[#8e8e93]">
        <span className="font-bold text-[#ff5530]">Reading:</span> question &middot; positive
      </p>
      <div className="flex w-fit gap-1 rounded-full bg-[#e9e6de] px-3 py-2">
        {[0, 1, 2].map((i) => (
          <span key={i} className="h-1.5 w-1.5 rounded-full bg-[#8e8e93]" />
        ))}
      </div>
    </div>
  );
}

// Deliberately NOT a pinned single viewport with overlaid steps — that
// pattern (tried twice) misbehaved (dead scroll space, later steps never
// becoming reachable). This version can never hide a step: each one is a
// normal, non-pinned, non-overlaid block that appears in the page's
// regular flow exactly like every other section on the site. Only the
// small tab bar is sticky (a single plain element — low risk, and it's the
// same technique already working for the site header), and it highlights
// whichever step is currently in view via one ScrollTrigger per step
// (start/end thresholds only, no pinning). "Sideways parallax": each step
// slides in from an alternating side, scrubbed to scroll position, as it
// passes through the viewport.
export default function HowItWorksScroll() {
  const rootRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    const root = rootRef.current;
    if (!root) return;

    const stepEls = stepRefs.current.filter((el): el is HTMLDivElement => Boolean(el));
    const triggers: ScrollTrigger[] = [];
    const tweens: gsap.core.Tween[] = [];

    stepEls.forEach((el, i) => {
      // Track which step is "current" purely for the tab bar highlight.
      triggers.push(
        ScrollTrigger.create({
          trigger: el,
          start: 'top center',
          end: 'bottom center',
          onToggle: (self) => {
            if (self.isActive) setActive(i);
          },
        })
      );

      // Sideways slide-in + fade as the step scrolls into view.
      const fromX = i % 2 === 0 ? -48 : 48;
      const content = el.querySelectorAll<HTMLElement>('[data-step-content]');
      if (content.length) {
        tweens.push(
          gsap.fromTo(
            content,
            { x: fromX, opacity: 0 },
            {
              x: 0,
              opacity: 1,
              ease: 'none',
              scrollTrigger: {
                trigger: el,
                start: 'top 85%',
                end: 'top 40%',
                scrub: 0.5,
              },
            }
          )
        );
      }
    });

    return () => {
      triggers.forEach((t) => t.kill());
      tweens.forEach((t) => {
        t.scrollTrigger?.kill();
        t.kill();
      });
    };
  }, []);

  const goToStep = (index: number) => {
    stepRefs.current[index]?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  return (
    <div ref={rootRef} className="bg-white">
      <div className="sticky top-16 z-30 border-b border-[#eaecf0] bg-white/90 px-6 py-4 backdrop-blur sm:px-8">
        <div className="mx-auto flex max-w-[1280px] flex-wrap items-center justify-between gap-4">
          <span className="text-[12px] font-bold uppercase tracking-wider text-[#ff5530]">How it works</span>
          <div className="flex gap-1 rounded-full bg-[#f2f3f5] p-1">
            {steps.map((step, i) => (
              <button
                key={step.key}
                onClick={() => goToStep(i)}
                className={`rounded-full px-3 py-1.5 text-[12px] font-semibold transition-colors sm:px-4 sm:text-[13px] ${
                  active === i ? 'bg-white text-[#0a0a0a] shadow-sm' : 'text-[#8e8e93] hover:text-[#45515e]'
                }`}
              >
                {step.title}
              </button>
            ))}
          </div>
        </div>
      </div>

      {steps.map((step, i) => {
        const alternate = i % 2 === 1;
        return (
          <div
            key={step.key}
            ref={(el) => {
              stepRefs.current[i] = el;
            }}
            className={`mx-auto flex min-h-screen w-full max-w-[1280px] flex-col items-center justify-center gap-10 px-6 py-20 sm:px-8 lg:flex-row lg:justify-between ${
              alternate ? 'lg:flex-row-reverse' : ''
            }`}
          >
            <div data-step-content className="max-w-md text-center lg:text-left">
              <span className="text-[64px] font-bold leading-none text-[#f2f3f5] sm:text-[96px]">{step.num}</span>
              <h3 className="heading-lg-typography mt-2 text-[#0a0a0a]">{step.title}</h3>
              <p className="mt-4 text-[16px] leading-relaxed text-[#45515e]">{step.desc}</p>
            </div>
            <div
              data-step-content
              className="aspect-[4/5] w-full max-w-xs overflow-hidden rounded-[28px] bg-[#f0eee9] shadow-[0_20px_50px_rgba(10,10,10,0.08)] sm:max-w-sm"
            >
              <StepMock step={step.key} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
