import { type ReactNode } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

interface PageLayoutProps {
  children: ReactNode;
  className?: string;
}

export function PageLayout({ children, className }: PageLayoutProps) {
  return (
    <>
      <Header />
      <main id="main-content" className={className}>
        {children}
      </main>
      <Footer />
    </>
  );
}

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
}

export function PageHero({ eyebrow, title, description, children }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-20">
      <div className="gradient-mesh absolute inset-0" aria-hidden />
      <div className="container-wide relative">
        {eyebrow && (
          <span className="mb-4 inline-block rounded-full bg-brand-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-600">
            {eyebrow}
          </span>
        )}
        <h1 className="font-display max-w-4xl text-4xl font-bold tracking-tight text-surface-900 md:text-5xl lg:text-6xl">
          {title}
        </h1>
        {description && (
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-surface-500 md:text-xl">
            {description}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}

interface CTASectionProps {
  title: string;
  description: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export function CTASection({
  title,
  description,
  primaryLabel = 'Request a Quote',
  primaryHref = '/request-quote',
  secondaryLabel = 'Contact Us',
  secondaryHref = '/contact',
}: CTASectionProps) {
  return (
    <section className="section-padding">
      <div className="container-wide">
        <div className="relative overflow-hidden rounded-3xl bg-surface-900 px-8 py-16 text-center md:px-16 md:py-20">
          <div
            className="absolute inset-0 opacity-30"
            style={{
              background:
                'radial-gradient(circle at 30% 50%, rgba(12,140,233,0.4) 0%, transparent 60%), radial-gradient(circle at 70% 50%, rgba(139,92,246,0.3) 0%, transparent 60%)',
            }}
            aria-hidden
          />
          <div className="relative">
            <h2 className="font-display text-3xl font-bold text-white md:text-4xl">{title}</h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-surface-400">{description}</p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href={primaryHref}
                className="inline-flex h-12 items-center justify-center rounded-xl gradient-brand px-8 text-sm font-semibold text-white shadow-lg transition-all hover:-translate-y-0.5"
              >
                {primaryLabel}
              </a>
              <a
                href={secondaryHref}
                className="inline-flex h-12 items-center justify-center rounded-xl border border-surface-600 px-8 text-sm font-semibold text-white transition-all hover:bg-surface-800"
              >
                {secondaryLabel}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
