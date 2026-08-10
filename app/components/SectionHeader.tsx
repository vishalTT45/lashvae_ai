import type { ReactNode } from 'react';

interface SectionHeaderProps {
  eyebrow?: ReactNode;
  eyebrowColor?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: 'left' | 'center';
  className?: string;
}

// Shared "eyebrow + heading + description" block used at the top of most
// sections (was hand-typed per page with drifting max-widths/margins).
export default function SectionHeader({
  eyebrow,
  eyebrowColor = '#1456f0',
  title,
  description,
  align = 'left',
  className = '',
}: SectionHeaderProps) {
  const alignClasses = align === 'center' ? 'mx-auto text-center' : 'text-left';

  return (
    <div className={`max-w-2xl ${alignClasses} ${className}`}>
      {eyebrow && (
        <span
          className='text-[12px] font-bold uppercase tracking-wider'
          style={{ color: eyebrowColor }}
        >
          {eyebrow}
        </span>
      )}
      <h2 className='heading-md-typography mt-2 text-[#0a0a0a]'>{title}</h2>
      {description && (
        <p className='mt-3 text-[15px] leading-relaxed text-[#45515e]'>{description}</p>
      )}
    </div>
  );
}
