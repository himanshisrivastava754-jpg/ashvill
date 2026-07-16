import Link from 'next/link';
import { PageLayout } from '@/components/layout/PageLayout';
import { Button } from '@/components/ui/Button';
import { createMetadata } from '@/lib/seo';

export const metadata = createMetadata({
  title: 'Page Not Found',
  description: 'The page you are looking for does not exist.',
  path: '/404',
  noIndex: true,
});

export default function NotFound() {
  return (
    <PageLayout>
      <section className="flex min-h-[70vh] items-center justify-center section-padding">
        <div className="container-narrow text-center">
          <div className="font-display text-8xl font-bold text-gradient">404</div>
          <h1 className="font-display mt-4 text-3xl font-bold text-surface-900">Page Not Found</h1>
          <p className="mt-4 text-lg text-surface-500">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button href="/">Go Home</Button>
            <Button href="/contact" variant="outline">Contact Us</Button>
          </div>
          <div className="mt-12">
            <p className="mb-4 text-sm text-surface-400">Popular pages:</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              {['/services', '/about', '/case-studies', '/request-quote'].map((path) => (
                <Link key={path} href={path} className="text-brand-600 hover:text-brand-700">{path}</Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
