'use client';

import { useEffect, useRef } from 'react';
import { gsap, prefersReducedMotion } from '../lib/gsap';

export type SectionCol = { label: string; lead: string; rest: string };

export type StackSection = {
  num: string;
  bg: string;
  numColor?: string;
  title: string;
  tags?: string[];
  activeTagIndex?: number;
  cols?: SectionCol[];
  fallback?: string;
};

// Deliberately NOT pinned. Two separate pin/sticky-panel-overlay attempts
// both misbehaved (dead scroll space, cards 2-4 never becoming visible) —
// pinning two adjacent full-viewport panels back to back proved unreliable
// here. This version can never hide or skip a card: every section is a
// normal, non-pinned, non-overlaid block in the page's regular flow (same
// as every other section on the site), so worst case if GSAP fails to
// attach, the content just renders statically instead of vanishing. The
// "parallax" is classical: each section's content translates/fades in at a
// scroll-scrubbed rate as the section itself passes through the viewport.
export default function ParallaxStack({ sections }: { sections: StackSection[] }) {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    const root = rootRef.current;
    if (!root) return;

    const panels = Array.from(root.querySelectorAll<HTMLElement>('[data-panel]'));
    const tweens = panels
      .map((panel) => {
        const content = panel.querySelectorAll<HTMLElement>('[data-panel-content]');
        if (!content.length) return null;
        return gsap.fromTo(
          content,
          { y: 56, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.08,
            ease: 'none',
            scrollTrigger: {
              trigger: panel,
              start: 'top 88%',
              end: 'top 30%',
              scrub: 0.5,
            },
          }
        );
      })
      .filter((t): t is gsap.core.Tween => Boolean(t));

    return () => {
      tweens.forEach((t) => {
        t.scrollTrigger?.kill();
        t.kill();
      });
    };
  }, []);

  return (
    <div ref={rootRef}>
      {sections.map((section, index) => (
        // Plain <div>, not <section> — PageMotion.tsx independently
        // fade/slides every `main section`'s text on scroll-into-view,
        // which would double-animate these same headings/paragraphs
        // against the bespoke GSAP tween above.
        <div
          key={section.num}
          data-panel
          className="relative flex min-h-screen flex-col justify-between overflow-hidden px-6 py-16 sm:px-8 sm:py-20"
          style={{ background: section.bg, zIndex: index + 1 }}
        >
          <div data-panel-content className="mx-auto flex w-full max-w-[1280px] flex-1 flex-col justify-center">
            <div className="flex items-start justify-between gap-6">
              <h2 className="display-lg-typography max-w-2xl text-white">{section.title}</h2>
              <span
                className="hero-display-typography shrink-0 leading-none"
                style={{ color: section.numColor ?? 'rgba(255,255,255,0.45)' }}
              >
                {section.num}
              </span>
            </div>

            {section.tags && (
              <div className="mt-8 flex flex-wrap gap-2">
                {section.tags.map((tag, i) => (
                  <span
                    key={tag}
                    className={`rounded-full px-4 py-2 text-[13px] font-semibold ${
                      i === section.activeTagIndex ? 'bg-white text-[#0a0a0a]' : 'bg-white/15 text-white/90'
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>

          {section.cols ? (
            <div
              data-panel-content
              className="mx-auto grid w-full max-w-[1280px] grid-cols-1 gap-8 border-t border-white/20 pt-8 sm:grid-cols-2 sm:divide-x sm:divide-white/20"
            >
              {section.cols.map((col) => (
                <div key={col.label} className="first:pl-0 sm:pl-8">
                  <div className="mb-3 flex items-center gap-2 text-[12px] font-semibold uppercase tracking-wider text-white/70">
                    <span className="h-2 w-2 rounded-sm border border-white/60" />
                    {col.label}
                  </div>
                  <p className="text-[17px] leading-snug text-white sm:text-[19px]">
                    <span className="font-bold">{col.lead}</span> <span className="text-white/70">{col.rest}</span>
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <div data-panel-content className="mx-auto w-full max-w-[1280px] border-t border-white/20 pt-8">
              <p className="max-w-xl text-[17px] leading-snug text-white/85 sm:text-[19px]">{section.fallback}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
