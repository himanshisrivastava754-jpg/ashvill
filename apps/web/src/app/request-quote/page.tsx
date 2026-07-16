import { PageLayout, PageHero } from '@/components/layout/PageLayout';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Card } from '@/components/ui/Card';
import { ContactForm } from '@/components/forms/ContactForm';
import { FadeIn } from '@/components/ui/Motion';
import { services } from '@/content/services';
import { createMetadata } from '@/lib/seo';

export const metadata = createMetadata({
  title: 'Request a Quote',
  description: 'Request a project quote from Ashvill IT Solutions. Tell us about your requirements and receive a tailored proposal.',
  path: '/request-quote',
});

const serviceOptions = services.map((s) => ({ value: s.slug, label: s.title }));

export default function RequestQuotePage() {
  return (
    <PageLayout>
      <PageHero eyebrow="Get Started" title="Request a Quote" description="Share your project requirements and receive a detailed proposal from our solutions team." />
      <section className="pb-20">
        <div className="container-narrow">
          <Breadcrumbs items={[{ label: 'Request Quote' }]} />
          <FadeIn>
            <Card glass={false} padding="lg">
              <ContactForm variant="quote" services={serviceOptions} />
            </Card>
          </FadeIn>
        </div>
      </section>
    </PageLayout>
  );
}
