import type { ReactNode } from 'react';

interface PageHeroProps {
  eyebrow?: ReactNode;
  title: ReactNode;
  subtitle?: ReactNode;
  bg?: string;
  dark?: boolean;
  aside?: ReactNode;
  children?: ReactNode;
  className?: string;
  showGrid?: boolean;
}

// Shared "colored band + grid overlay + eyebrow/H1/subhead" hero shell.
// Previously this exact block (background style + grid-pattern overlay)
// was copy-pasted verbatim across features/pricing/compare/company/channels.
// PageMotion.tsx already fades/slides this text in on scroll, so this
// component intentionally does NOT run its own entrance animation on the
// same nodes (avoids two systems fighting over opacity/transform).
export default function PageHero({
  eyebrow,
  title,
  subtitle,
  bg,
  dark = true,
  aside,
  children,
  className = '',
  showGrid = true,
}: PageHeroProps) {
  const textColor = dark ? 'text-white' : 'text-[#0a0a0a]';
  const subColor = dark ? 'text-white/85' : 'text-[#45515e]';
  const eyebrowClasses = dark
    ? 'border-white/25 bg-white/12 text-white'
    : 'border-[#eaecf0] bg-[#f7f8fa] text-[#45515e]';

  return (
    <section
      className={`relative overflow-hidden px-6 py-20 sm:px-8 sm:py-28 ${className}`}
      style={bg ? { background: bg } : undefined}
    >
      {showGrid && (
        <div
          className='absolute inset-0 opacity-40 pointer-events-none'
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.42) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.42) 1px, transparent 1px)
            `,
            backgroundSize: '280px 280px',
          }}
        />
      )}
      <div
        className={`relative z-10 mx-auto max-w-[1280px] ${
          aside ? 'grid grid-cols-1 items-center gap-12 lg:grid-cols-12' : ''
        }`}
      >
        <div className={aside ? 'lg:col-span-7' : 'mx-auto max-w-3xl text-center'}>
          {eyebrow && (
            <div
              className={`mb-6 inline-flex items-center gap-2.5 rounded-full border px-4 py-2 text-[12px] font-bold uppercase tracking-wider ${eyebrowClasses}`}
            >
              {eyebrow}
            </div>
          )}
          <h1 className={`hero-display-typography ${textColor}`}>{title}</h1>
          {subtitle && (
            <p
              className={`mt-6 text-[17px] sm:text-[19px] leading-relaxed ${subColor} ${
                aside ? 'max-w-2xl' : 'mx-auto max-w-2xl'
              }`}
            >
              {subtitle}
            </p>
          )}
          {children && (
            <div className={`mt-9 flex flex-col gap-4 sm:flex-row ${aside ? '' : 'justify-center'}`}>
              {children}
            </div>
          )}
        </div>
        {aside && <div className='lg:col-span-5'>{aside}</div>}
      </div>
    </section>
  );
}
