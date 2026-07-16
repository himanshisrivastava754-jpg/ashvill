import { type ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glass?: boolean;
  padding?: 'sm' | 'md' | 'lg';
}

const paddingMap = {
  sm: 'p-5',
  md: 'p-6 md:p-8',
  lg: 'p-8 md:p-10',
};

export function Card({
  children,
  className,
  hover = false,
  glass = true,
  padding = 'md',
}: CardProps) {
  return (
    <div
      className={cn(
        'rounded-2xl',
        glass ? 'glass' : 'bg-white border border-surface-200 shadow-sm',
        paddingMap[padding],
        hover && 'transition-all duration-300 hover:-translate-y-1 hover:shadow-elevated',
        className,
      )}
    >
      {children}
    </div>
  );
}

interface CardIconProps {
  icon: ReactNode;
  className?: string;
}

export function CardIcon({ icon, className }: CardIconProps) {
  return (
    <div
      className={cn(
        'mb-5 flex h-12 w-12 items-center justify-center rounded-xl gradient-brand text-white shadow-lg shadow-brand-500/20',
        className,
      )}
    >
      {icon}
    </div>
  );
}
