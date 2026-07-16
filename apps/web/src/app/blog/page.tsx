import Link from 'next/link';
import { PageLayout, PageHero } from '@/components/layout/PageLayout';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Card } from '@/components/ui/Card';
import { StaggerContainer, StaggerItem } from '@/components/ui/Motion';
import { blogPosts } from '@/content/blog';
import { formatDate } from '@/lib/utils';
import { createMetadata } from '@/lib/seo';

export const metadata = createMetadata({
  title: 'Blog',
  description: 'Insights on enterprise technology, AI, cloud, cybersecurity, and digital transformation from Ashvill IT Solutions.',
  path: '/blog',
});

export default function BlogPage() {
  return (
    <PageLayout>
      <PageHero eyebrow="Blog" title="Insights & Perspectives" description="Expert perspectives on enterprise technology trends, best practices, and innovation." />
      <section className="pb-20">
        <div className="container-wide">
          <Breadcrumbs items={[{ label: 'Blog' }]} />
          <StaggerContainer className="grid gap-8 md:grid-cols-2">
            {blogPosts.map((post) => (
              <StaggerItem key={post.slug}>
                <Link href={`/blog/${post.slug}`} className="block h-full">
                  <Card hover className="flex h-full flex-col">
                    <span className="mb-3 w-fit rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-600">{post.category}</span>
                    <h2 className="font-display mb-3 text-xl font-semibold text-surface-900">{post.title}</h2>
                    <p className="mb-4 flex-grow text-sm text-surface-500">{post.excerpt}</p>
                    <div className="flex items-center gap-3 text-xs text-surface-400">
                      <span>{formatDate(post.publishedAt)}</span>
                      <span>·</span>
                      <span>{post.readTime} read</span>
                    </div>
                  </Card>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </PageLayout>
  );
}
