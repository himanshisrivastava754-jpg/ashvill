import Link from 'next/link';
import { company } from '@/config/company';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  variant?: 'default' | 'light';
  showText?: boolean;
}

export function Logo({ className, variant = 'default', showText = true }: LogoProps) {
  const isLight = variant === 'light';

  return (
    <Link href="/" className={cn('group flex items-center gap-3', className)} aria-label={company.name}>
      <svg
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-9 w-9 transition-transform duration-300 group-hover:scale-105"
        aria-hidden
      >
        <rect width="40" height="40" rx="10" className="fill-brand-600" />
        <path
          d="M10 28L20 12L30 28H25L20 19L15 28H10Z"
          className="fill-white"
        />
        <circle cx="28" cy="14" r="3" className="fill-accent-400" />
      </svg>
      {showText && (
        <div className="flex flex-col">
          <span
            className={cn(
              'font-display text-lg font-bold leading-tight tracking-tight',
              isLight ? 'text-white' : 'text-surface-900',
            )}
          >
            {company.shortName}
          </span>
          <span
            className={cn(
              'text-[10px] font-medium uppercase tracking-[0.2em]',
              isLight ? 'text-white/70' : 'text-surface-400',
            )}
          >
            IT Solutions
          </span>
        </div>
      )}
    </Link>
  );
}
