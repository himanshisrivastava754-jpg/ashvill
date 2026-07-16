import Link from 'next/link';
import { PageLayout, PageHero, CTASection } from '@/components/layout/PageLayout';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Card } from '@/components/ui/Card';
import { StaggerContainer, StaggerItem } from '@/components/ui/Motion';
import { caseStudies } from '@/content/case-studies';
import { createMetadata } from '@/lib/seo';
import { ArrowRight } from 'lucide-react';

export const metadata = createMetadata({
  title: 'Portfolio',
  description: 'Explore Ashvill IT Solutions portfolio of enterprise technology projects across industries.',
  path: '/portfolio',
});

const portfolioItems = [
  ...caseStudies,
  {
    slug: 'saas-analytics-dashboard',
    title: 'SaaS Analytics Dashboard',
    industry: 'SaaS',
    client: 'B2B Analytics Startup',
    duration: '6 months',
    challenge: 'Needed a scalable analytics platform for enterprise customers.',
    solution: 'Built a multi-tenant SaaS dashboard with real-time data processing.',
    results: ['500+ enterprise users onboarded', 'Sub-second query performance'],
    technologies: ['Next.js', 'PostgreSQL', 'Redis', 'AWS'],
  },
  {
    slug: 'logistics-tracking-system',
    title: 'Real-Time Logistics Tracking',
    industry: 'Logistics',
    client: 'Global Logistics Provider',
    duration: '8 months',
    challenge: 'Lack of real-time visibility across multi-modal shipments.',
    solution: 'IoT-integrated tracking platform with predictive ETA and automated alerts.',
    results: ['95% on-time delivery visibility', '30% reduction in support calls'],
    technologies: ['React', 'Node.js', 'MongoDB', 'AWS IoT'],
  },
];

export default function PortfolioPage() {
  return (
    <PageLayout>
      <PageHero eyebrow="Portfolio" title="Our Work" description="A selection of enterprise technology projects delivering measurable business impact." />
      <section className="pb-20">
        <div className="container-wide">
          <Breadcrumbs items={[{ label: 'Portfolio' }]} />
          <StaggerContainer className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {portfolioItems.map((item) => (
              <StaggerItem key={item.slug}>
                <Link href={`/case-studies/${item.slug}`} className="block h-full">
                  <Card hover className="flex h-full flex-col">
                    <span className="mb-3 w-fit rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-600">{item.industry}</span>
                    <h2 className="font-display mb-2 text-xl font-semibold text-surface-900">{item.title}</h2>
                    <p className="mb-4 flex-grow text-sm text-surface-500">{item.challenge}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {item.technologies.slice(0, 4).map((tech) => (
                        <span key={tech} className="rounded bg-surface-100 px-2 py-0.5 text-xs text-surface-600">{tech}</span>
                      ))}
                    </div>
                  </Card>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
      <CTASection title="Want Results Like These?" description="Let's discuss how we can deliver similar outcomes for your organization." />
    </PageLayout>
  );
}
