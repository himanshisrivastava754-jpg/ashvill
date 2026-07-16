import { notFound } from 'next/navigation';
import { PageLayout, PageHero } from '@/components/layout/PageLayout';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { FadeIn } from '@/components/ui/Motion';
import { blogPosts, getBlogPostBySlug } from '@/content/blog';
import { formatDate } from '@/lib/utils';
import { createMetadata } from '@/lib/seo';

interface Props { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};
  return createMetadata({ title: post.title, description: post.excerpt, path: `/blog/${slug}` });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  return (
    <PageLayout>
      <PageHero eyebrow={post.category} title={post.title} description={post.excerpt}>
        <div className="mt-4 flex items-center gap-3 text-sm text-surface-400">
          <span>{post.author}</span><span>·</span><span>{formatDate(post.publishedAt)}</span><span>·</span><span>{post.readTime} read</span>
        </div>
      </PageHero>
      <section className="pb-20">
        <div className="container-narrow">
          <Breadcrumbs items={[{ label: 'Blog', href: '/blog' }, { label: post.title }]} />
          <FadeIn>
            <article className="prose prose-lg max-w-none prose-headings:font-display prose-headings:text-surface-900 prose-p:text-surface-600">
              <p>{post.content}</p>
              <p>At Ashvill IT Solutions, we help enterprises navigate these challenges with proven methodologies and deep technical expertise. Contact our team to discuss how these insights apply to your organization.</p>
            </article>
          </FadeIn>
        </div>
      </section>
    </PageLayout>
  );
}
