'use client';

import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

export interface FAQItem {
  q: string;
  a: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
  className?: string;
}

// Shared accordion — replaces two independent hand-rolled implementations
// (app/faq/page.tsx and app/pricing/page.tsx) that had identical
// expandedId/ChevronDown logic with slightly different markup.
// Uses the CSS grid-rows open/close trick (.accordion-panel in globals.css,
// same pattern as app/legal/privacy's AccordionItem) instead of
// motion/react's AnimatePresence — motion's JSX components crash Next 16's
// RSC prerender in this project, see Button.tsx for details.
export default function FAQAccordion({ items, className = '' }: FAQAccordionProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <div className={`flex flex-col gap-3 ${className}`}>
      {items.map((item, index) => {
        const isOpen = expandedIndex === index;
        return (
          <div key={item.q} className='surface-card overflow-hidden'>
            <button
              onClick={() => setExpandedIndex(isOpen ? null : index)}
              className='flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6 sm:py-5'
              aria-expanded={isOpen}
            >
              <span className='flex items-center gap-3 text-[14px] font-semibold text-[#0a0a0a] sm:text-[15px]'>
                <span className='flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#f2f3f5] text-[11px] font-bold text-[#45515e]'>
                  {String(index + 1).padStart(2, '0')}
                </span>
                {item.q}
              </span>
              <ChevronDown
                className={`h-4 w-4 shrink-0 text-[#8e8e93] transition-transform duration-300 ${
                  isOpen ? 'rotate-180' : ''
                }`}
              />
            </button>
            <div className={`accordion-panel ${isOpen ? 'is-open' : ''}`}>
              <div>
                <p className='px-5 pb-5 text-[13px] leading-relaxed text-[#45515e] sm:px-6 sm:pb-6 sm:pl-[3.25rem] sm:text-[14px]'>
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
