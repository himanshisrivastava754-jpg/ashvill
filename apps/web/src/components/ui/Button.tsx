import { type ButtonHTMLAttributes, type ReactNode } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'glass';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonBaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: ReactNode;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

interface ButtonAsButton
  extends ButtonBaseProps,
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  href?: undefined;
}


interface ButtonAsLink extends ButtonBaseProps {
  href: string;
  target?: string;
  rel?: string;
}

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variants: Record<ButtonVariant, string> = {
  primary:
    'gradient-brand text-white shadow-lg shadow-brand-500/25 hover:shadow-xl hover:shadow-brand-500/30 hover:-translate-y-0.5',
  secondary:
    'bg-surface-900 text-white hover:bg-surface-800 shadow-lg hover:-translate-y-0.5',
  outline:
    'border-2 border-surface-200 bg-white text-surface-800 hover:border-brand-300 hover:text-brand-600',
  ghost: 'text-surface-600 hover:bg-surface-100 hover:text-surface-900',
  glass: 'glass text-surface-800 hover:bg-white/90 hover:-translate-y-0.5',
};

const sizes: Record<ButtonSize, string> = {
  sm: 'h-9 px-4 text-sm gap-1.5',
  md: 'h-11 px-6 text-sm gap-2',
  lg: 'h-13 px-8 text-base gap-2.5',
};

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  leftIcon,
  rightIcon,
  ...props
}: ButtonProps) {
  const classes = cn(
    'inline-flex items-center justify-center rounded-xl font-semibold transition-all duration-300 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50',
    variants[variant],
    sizes[size],
    className,
  );

  if ('href' in props && props.href) {
    const { href, target, rel } = props;
    return (
      <Link href={href} target={target} rel={rel} className={classes}>
        {leftIcon}
        {children}
        {rightIcon}
      </Link>
    );
  }

  const { href, ...buttonProps } = props as ButtonAsButton;
void href;
  return (
    <button className={classes} {...buttonProps}>
      {leftIcon}
      {children}
      {rightIcon}
    </button>
  );
}
