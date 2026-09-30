import { Link } from 'react-router-dom';
import type { MouseEventHandler, ReactNode } from 'react';

export type ButtonVariant = 'primary' | 'onDark' | 'outlineDark' | 'outlineLight' | 'link';

interface ButtonProps {
  children: ReactNode;
  to?: string;
  href?: string;
  variant?: ButtonVariant;
  size?: 'md' | 'lg';
  className?: string;
  onClick?: MouseEventHandler<HTMLElement>;
  type?: 'button' | 'submit';
  disabled?: boolean;
  ariaLabel?: string;
}

const base =
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-label font-medium tracking-wide transition-colors duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent';

const sizes: Record<'md' | 'lg', string> = {
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-6 py-3.5 text-sm md:text-base',
};

const variants: Record<ButtonVariant, string> = {
  primary: 'bg-primary-500 text-foreground-950 hover:bg-primary-400',
  onDark: 'bg-foreground-950 text-foreground-50 hover:bg-foreground-900',
  outlineDark: 'border border-foreground-700/40 text-foreground-950 hover:bg-foreground-950/10',
  outlineLight: 'border border-foreground-900/25 text-foreground-900 hover:bg-foreground-950/5',
  link: 'text-accent-300 hover:text-accent-200 underline-offset-4 hover:underline px-0 py-0',
};

export default function Button({
  children,
  to,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  type = 'button',
  disabled = false,
  ariaLabel,
}: ButtonProps) {
  const classes = `${base} ${variant === 'link' ? '' : sizes[size]} ${variants[variant]} ${
    disabled ? 'pointer-events-none opacity-50' : ''
  } ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes} onClick={onClick} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        onClick={onClick}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
        aria-label={ariaLabel}
      >
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick} disabled={disabled} aria-label={ariaLabel}>
      {children}
    </button>
  );
}