import { notFound } from 'next/navigation';
import { CheckCircle2, MapPin, Clock } from 'lucide-react';
import { PageLayout, PageHero, CTASection } from '@/components/layout/PageLayout';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { FadeIn } from '@/components/ui/Motion';
import { jobListings, getJobBySlug } from '@/content/careers';
import { contact } from '@/config/company';
import { createMetadata } from '@/lib/seo';

interface Props { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return jobListings.map((j) => ({ slug: j.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const job = getJobBySlug(slug);
  if (!job) return {};
  return createMetadata({ title: job.title, description: job.description, path: `/careers/${slug}` });
}

export default async function CareerDetailPage({ params }: Props) {
  const { slug } = await params;
  const job = getJobBySlug(slug);
  if (!job) notFound();

  return (
    <PageLayout>
      <PageHero eyebrow="Careers" title={job.title} description={job.description} />
      <section className="pb-20">
        <div className="container-wide">
          <Breadcrumbs items={[{ label: 'Careers', href: '/careers' }, { label: job.title }]} />
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2 space-y-8">
              <FadeIn>
                <h2 className="font-display mb-4 text-2xl font-bold text-surface-900">Requirements</h2>
                <ul className="space-y-3">
                  {job.requirements.map((req) => (
                    <li key={req} className="flex items-start gap-3 text-surface-600">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-500" />{req}
                    </li>
                  ))}
                </ul>
              </FadeIn>
            </div>
            <FadeIn>
              <Card>
                <h3 className="font-display mb-4 text-lg font-semibold">Role Details</h3>
                <dl className="space-y-3 text-sm">
                  <div className="flex items-center gap-2"><MapPin className="h-4 w-4 text-surface-400" /><dd>{job.location}</dd></div>
                  <div className="flex items-center gap-2"><Clock className="h-4 w-4 text-surface-400" /><dd>{job.type} · {job.experience}</dd></div>
                  <div><dt className="text-surface-400">Department</dt><dd className="font-medium">{job.department}</dd></div>
                </dl>
                <Button href={`mailto:${contact.careersEmail}?subject=Application: ${job.title}`} className="mt-6 w-full">
                  Apply Now
                </Button>
              </Card>
            </FadeIn>
          </div>
        </div>
      </section>
      <CTASection title="Join Our Team" description="Help us build technology that transforms enterprises worldwide." />
    </PageLayout>
  );
}
