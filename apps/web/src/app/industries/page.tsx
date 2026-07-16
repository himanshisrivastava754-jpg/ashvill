import { PageLayout, PageHero, CTASection } from '@/components/layout/PageLayout';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Card } from '@/components/ui/Card';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/ui/Motion';
import { industries } from '@/content/industries';
import { createMetadata } from '@/lib/seo';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const metadata = createMetadata({
  title: 'Industries',
  description: 'Ashvill IT Solutions serves finance, healthcare, retail, manufacturing, and more with tailored enterprise technology solutions.',
  path: '/industries',
});

export default function IndustriesPage() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Industries"
        title="Industry-Specific Technology Expertise"
        description="Deep domain knowledge combined with cutting-edge technology to solve industry-specific challenges at enterprise scale."
      />

      <section className="pb-20">
        <div className="container-wide">
          <Breadcrumbs items={[{ label: 'Industries' }]} />
          <StaggerContainer className="grid gap-8 md:grid-cols-2">
            {industries.map((industry) => (
              <StaggerItem key={industry.slug}>
                <Card hover className="h-full">
                  <h2 className="font-display mb-2 text-xl font-semibold text-surface-900">{industry.name}</h2>
                  <p className="mb-4 text-sm leading-relaxed text-surface-500">{industry.description}</p>
                  <div className="mb-4">
                    <h3 className="mb-2 text-xs font-semibold uppercase tracking-wider text-surface-400">Key Challenges</h3>
                    <div className="flex flex-wrap gap-2">
                      {industry.challenges.map((c) => (
                        <span key={c} className="rounded-lg bg-surface-100 px-2.5 py-1 text-xs text-surface-600">{c}</span>
                      ))}
                    </div>
                  </div>
                  <Link href={`/contact?industry=${industry.slug}`} className="inline-flex items-center gap-1 text-sm font-semibold text-brand-600 hover:text-brand-700">
                    Discuss your project <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <CTASection title="Industry Expertise You Can Trust" description="Partner with a team that understands your industry's unique technology challenges." />
    </PageLayout>
  );
}
