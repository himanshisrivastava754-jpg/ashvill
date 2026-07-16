import Link from 'next/link';
import { PageLayout, PageHero, CTASection } from '@/components/layout/PageLayout';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Card } from '@/components/ui/Card';
import { StaggerContainer, StaggerItem } from '@/components/ui/Motion';
import { caseStudies } from '@/content/case-studies';
import { createMetadata } from '@/lib/seo';

export const metadata = createMetadata({
  title: 'Case Studies',
  description: 'Real enterprise technology outcomes from Ashvill IT Solutions client partnerships.',
  path: '/case-studies',
});

export default function CaseStudiesPage() {
  return (
    <PageLayout>
      <PageHero eyebrow="Case Studies" title="Proven Enterprise Outcomes" description="Explore how we've helped organizations transform their technology landscape." />
      <section className="pb-20">
        <div className="container-wide">
          <Breadcrumbs items={[{ label: 'Case Studies' }]} />
          <StaggerContainer className="grid gap-8 lg:grid-cols-3">
            {caseStudies.map((study) => (
              <StaggerItem key={study.slug}>
                <Link href={`/case-studies/${study.slug}`} className="block h-full">
                  <Card hover className="flex h-full flex-col">
                    <span className="mb-3 w-fit rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-600">{study.industry}</span>
                    <h2 className="font-display mb-3 text-xl font-semibold text-surface-900">{study.title}</h2>
                    <p className="mb-4 flex-grow text-sm text-surface-500">{study.challenge}</p>
                    <span className="text-sm font-semibold text-brand-600">{study.results[0]}</span>
                  </Card>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
      <CTASection title="Your Success Story Starts Here" description="Partner with Ashvill to achieve transformative technology outcomes." />
    </PageLayout>
  );
}
