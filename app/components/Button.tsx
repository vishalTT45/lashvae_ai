import Link from 'next/link';
import type { MouseEventHandler, ReactNode } from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'white' | 'whiteOutline';
export type ButtonSize = 'md' | 'lg';

interface ButtonProps {
  href?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
  className?: string;
  onClick?: MouseEventHandler;
  id?: string;
  type?: 'button' | 'submit';
  disabled?: boolean;
  target?: string;
  rel?: string;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'bg-[#0a0a0a] text-white hover:bg-[#222222]',
  secondary: 'border border-[#0a0a0a] text-[#0a0a0a] hover:bg-[#f2f3f5]',
  ghost: 'text-[#0a0a0a] hover:bg-[#f2f3f5]',
  white: 'bg-white text-[#0a0a0a] hover:bg-white/95',
  whiteOutline: 'border border-white/25 bg-white/10 text-white hover:bg-white/20',
};

const sizeClasses: Record<ButtonSize, string> = {
  md: 'px-6 py-3 text-[14px]',
  lg: 'px-8 py-4 text-[15px]',
};

// Shared pill button so every page stops hand-typing the same class string
// (previously duplicated ~8x across features/pricing/channels/faq/company).
// Hover/tap motion is plain CSS (.btn-pill in globals.css) rather than
// motion/react's <motion.*> components: those components crash Next 16's
// RSC/SSR prerender in this project ("Attempted to call
// createMotionComponent() from the server") because framer-motion's lazy
// Proxy factory eagerly calls a client-only export while React is
// serializing the server render — see PageMotion.tsx for how this repo uses
// motion's *imperative* animate() safely instead (only inside useEffect).
export default function Button({
  href,
  variant = 'primary',
  size = 'lg',
  children,
  className = '',
  onClick,
  id,
  type = 'button',
  disabled,
  target,
  rel,
}: ButtonProps) {
  const classes = `btn-pill ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} id={id} target={target} rel={rel} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      id={id}
      disabled={disabled}
      className={classes}
    >
      {children}
    </button>
  );
}
