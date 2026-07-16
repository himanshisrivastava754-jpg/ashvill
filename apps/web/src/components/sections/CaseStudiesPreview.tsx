import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Card } from '@/components/ui/Card';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/ui/Motion';

const caseStudies = [
  {
    slug: 'fintech-platform-modernization',
    title: 'FinTech Platform Modernization',
    industry: 'Financial Services',
    result: '60% faster transaction processing',
    description:
      'Migrated a legacy banking platform to cloud-native microservices, reducing processing time and improving compliance reporting.',
  },
  {
    slug: 'healthcare-ai-diagnostics',
    title: 'AI-Powered Healthcare Diagnostics',
    industry: 'Healthcare',
    result: '92% diagnostic accuracy improvement',
    description:
      'Built an ML-powered diagnostic assistance system integrated with hospital EMR workflows, improving clinician decision-making.',
  },
  {
    slug: 'retail-omnichannel-platform',
    title: 'Retail Omnichannel Platform',
    industry: 'Retail & E-commerce',
    result: '3x increase in online revenue',
    description:
      'Developed a unified commerce platform connecting online, mobile, and in-store experiences for a global retail brand.',
  },
];

export function CaseStudiesPreview() {
  return (
    <section className="section-padding">
      <div className="container-wide">
        <FadeIn>
          <SectionHeader
            eyebrow="Case Studies"
            title="Proven Results for Global Enterprises"
            description="Real outcomes from real partnerships. Explore how we've helped organizations transform their technology landscape."
          />
        </FadeIn>

        <StaggerContainer className="grid gap-8 lg:grid-cols-3">
          {caseStudies.map((study) => (
            <StaggerItem key={study.slug}>
              <Link href={`/case-studies/${study.slug}`} className="block h-full">
                <Card hover className="flex h-full flex-col">
                  <span className="mb-3 inline-block w-fit rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-600">
                    {study.industry}
                  </span>
                  <h3 className="mb-3 font-display text-xl font-semibold text-surface-900">
                    {study.title}
                  </h3>
                  <p className="mb-4 flex-grow text-sm leading-relaxed text-surface-500">
                    {study.description}
                  </p>
                  <div className="border-t border-surface-200 pt-4">
                    <span className="text-sm font-semibold text-brand-600">{study.result}</span>
                  </div>
                </Card>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeIn className="mt-12 text-center">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-600 transition-colors hover:text-brand-700"
          >
            View all case studies
            <ArrowRight className="h-4 w-4" />
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
