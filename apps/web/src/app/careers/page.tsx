import Link from 'next/link';
import { MapPin, Clock, ArrowRight } from 'lucide-react';
import { PageLayout, PageHero, CTASection } from '@/components/layout/PageLayout';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Card } from '@/components/ui/Card';
import { StaggerContainer, StaggerItem } from '@/components/ui/Motion';
import { jobListings } from '@/content/careers';
import { createMetadata } from '@/lib/seo';

export const metadata = createMetadata({
  title: 'Careers',
  description: 'Join Ashvill IT Solutions — build enterprise technology with a team of passionate engineers and designers.',
  path: '/careers',
});

export default function CareersPage() {
  return (
    <PageLayout>
      <PageHero eyebrow="Careers" title="Build the Future With Us" description="Join a team of 45+ passionate technologists delivering transformative solutions for global enterprises." />
      <section className="pb-20">
        <div className="container-wide">
          <Breadcrumbs items={[{ label: 'Careers' }]} />
          <StaggerContainer className="space-y-4">
            {jobListings.map((job) => (
              <StaggerItem key={job.slug}>
                <Link href={`/careers/${job.slug}`} className="block">
                  <Card hover>
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <h2 className="font-display text-xl font-semibold text-surface-900">{job.title}</h2>
                        <div className="mt-2 flex flex-wrap gap-4 text-sm text-surface-500">
                          <span className="flex items-center gap-1"><MapPin className="h-4 w-4" />{job.location}</span>
                          <span className="flex items-center gap-1"><Clock className="h-4 w-4" />{job.type}</span>
                          <span>{job.department}</span>
                        </div>
                      </div>
                      <span className="inline-flex items-center gap-1 text-sm font-semibold text-brand-600">
                        View role <ArrowRight className="h-4 w-4" />
                      </span>
                    </div>
                  </Card>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
      <CTASection title="Don't See Your Role?" description="Send us your resume — we're always looking for exceptional talent." primaryLabel="Contact HR" primaryHref="/contact" />
    </PageLayout>
  );
}
