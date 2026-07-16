import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumbs({ items, className }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className={cn('mb-8', className)}>
      <ol className="flex flex-wrap items-center gap-1.5 text-sm text-surface-500">
        <li>
          <Link href="/" className="transition-colors hover:text-brand-600">
            Home
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={item.label} className="flex items-center gap-1.5">
            <ChevronRight className="h-3.5 w-3.5 text-surface-300" aria-hidden />
            {item.href && index < items.length - 1 ? (
              <Link href={item.href} className="transition-colors hover:text-brand-600">
                {item.label}
              </Link>
            ) : (
              <span className="font-medium text-surface-800" aria-current="page">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
