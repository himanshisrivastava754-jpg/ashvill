import { PageLayout, PageHero, CTASection } from '@/components/layout/PageLayout';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Card } from '@/components/ui/Card';
import { FadeIn } from '@/components/ui/Motion';
import { technologies, techPartners } from '@/content/technologies';
import { createMetadata } from '@/lib/seo';

export const metadata = createMetadata({
  title: 'Technologies',
  description: 'Explore the modern technology stack Ashvill IT Solutions uses to build enterprise-grade solutions.',
  path: '/technologies',
});

export default function TechnologiesPage() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Technologies"
        title="Modern Technology Stack"
        description="We leverage battle-tested, enterprise-grade technologies to build solutions that scale, perform, and endure."
      />

      <section className="pb-20">
        <div className="container-wide">
          <Breadcrumbs items={[{ label: 'Technologies' }]} />

          <FadeIn className="mb-12 flex flex-wrap justify-center gap-4">
            {techPartners.map((partner) => (
              <span key={partner} className="glass rounded-full px-5 py-2 text-sm font-medium text-surface-700">
                {partner}
              </span>
            ))}
          </FadeIn>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {Object.values(technologies).map((category) => (
              <FadeIn key={category.label}>
                <Card className="h-full">
                  <h2 className="font-display mb-4 text-xl font-semibold text-surface-900">{category.label}</h2>
                  <div className="flex flex-wrap gap-2">
                    {category.items.map((tech) => (
                      <span key={tech} className="rounded-lg bg-brand-50 px-3 py-1.5 text-sm font-medium text-brand-700">
                        {tech}
                      </span>
                    ))}
                  </div>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <CTASection title="Need Technical Expertise?" description="Our engineers are certified across the full modern technology stack." />
    </PageLayout>
  );
}
