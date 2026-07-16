import { PageLayout, PageHero } from '@/components/layout/PageLayout';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { FadeIn } from '@/components/ui/Motion';
import { company } from '@/config/company';
import { createMetadata } from '@/lib/seo';

interface LegalSection { title: string; content: string }

interface LegalPageProps {
  title: string;
  description: string;
  path: string;
  lastUpdated: string;
  sections: LegalSection[];
}

export function createLegalPage({ title, description, path, lastUpdated, sections }: LegalPageProps) {
  const metadata = createMetadata({ title, description, path });

  function LegalPage() {
    return (
      <PageLayout>
        <PageHero eyebrow="Legal" title={title} description={`Last updated: ${lastUpdated}`} />
        <section className="pb-20">
          <div className="container-narrow">
            <Breadcrumbs items={[{ label: title }]} />
            <FadeIn>
              <div className="prose prose-lg max-w-none prose-headings:font-display prose-headings:text-surface-900 prose-p:text-surface-600">
                {sections.map((section) => (
                  <div key={section.title} className="mb-10">
                    <h2>{section.title}</h2>
                    <p>{section.content}</p>
                  </div>
                ))}
                <p className="text-sm text-surface-400">
                  For questions regarding this policy, contact us at{' '}
                  <a href={`mailto:${company.name.toLowerCase().replace(/\s/g, '')}@ashvill.com`} className="text-brand-600">
                    contact@ashvill.com
                  </a>.
                </p>
              </div>
            </FadeIn>
          </div>
        </section>
      </PageLayout>
    );
  }

  return { metadata, default: LegalPage };
}
