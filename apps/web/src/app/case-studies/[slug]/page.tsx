import { notFound } from 'next/navigation';
import { CheckCircle2 } from 'lucide-react';
import { PageLayout, PageHero, CTASection } from '@/components/layout/PageLayout';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Card } from '@/components/ui/Card';
import { FadeIn } from '@/components/ui/Motion';
import { caseStudies, getCaseStudyBySlug } from '@/content/case-studies';
import { createMetadata } from '@/lib/seo';

interface Props { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);
  if (!study) return {};
  return createMetadata({ title: study.title, description: study.challenge, path: `/case-studies/${slug}` });
}

export default async function CaseStudyDetailPage({ params }: Props) {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);
  if (!study) notFound();

  return (
    <PageLayout>
      <PageHero eyebrow="Case Study" title={study.title} description={study.challenge} />
      <section className="pb-20">
        <div className="container-wide">
          <Breadcrumbs items={[{ label: 'Case Studies', href: '/case-studies' }, { label: study.title }]} />
          <div className="grid gap-16 lg:grid-cols-3">
            <div className="lg:col-span-2 space-y-10">
              <FadeIn>
                <h2 className="font-display mb-4 text-2xl font-bold text-surface-900">The Challenge</h2>
                <p className="text-lg leading-relaxed text-surface-600">{study.challenge}</p>
              </FadeIn>
              <FadeIn>
                <h2 className="font-display mb-4 text-2xl font-bold text-surface-900">Our Solution</h2>
                <p className="text-lg leading-relaxed text-surface-600">{study.solution}</p>
              </FadeIn>
              <FadeIn>
                <h2 className="font-display mb-4 text-2xl font-bold text-surface-900">Results</h2>
                <ul className="space-y-3">
                  {study.results.map((r) => (
                    <li key={r} className="flex items-start gap-3 text-surface-600">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-500" />{r}
                    </li>
                  ))}
                </ul>
              </FadeIn>
            </div>
            <FadeIn>
              <Card>
                <h3 className="font-display mb-4 text-lg font-semibold">Project Details</h3>
                <dl className="space-y-3 text-sm">
                  <div><dt className="text-surface-400">Industry</dt><dd className="font-medium text-surface-900">{study.industry}</dd></div>
                  <div><dt className="text-surface-400">Duration</dt><dd className="font-medium text-surface-900">{study.duration}</dd></div>
                </dl>
                <h3 className="font-display mb-3 mt-6 text-lg font-semibold">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {study.technologies.map((t) => (
                    <span key={t} className="rounded-lg bg-surface-100 px-2.5 py-1 text-xs font-medium text-surface-700">{t}</span>
                  ))}
                </div>
              </Card>
            </FadeIn>
          </div>
        </div>
      </section>
      <CTASection title="Ready for Similar Results?" description="Let's architect a solution tailored to your business challenges." />
    </PageLayout>
  );
}
