import { type ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
  children?: ReactNode;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'center',
  className,
  children,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        'mb-14',
        align === 'center' && 'mx-auto max-w-3xl text-center',
        className,
      )}
    >
      {eyebrow && (
        <span className="mb-4 inline-block rounded-full bg-brand-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-600">
          {eyebrow}
        </span>
      )}
      <h2 className="font-display text-3xl font-bold tracking-tight text-surface-900 md:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-lg leading-relaxed text-surface-500 md:text-xl">
          {description}
        </p>
      )}
      {children}
    </div>
  );
}
