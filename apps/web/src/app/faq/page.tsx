import { PageLayout, PageHero } from '@/components/layout/PageLayout';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Card } from '@/components/ui/Card';
import { FadeIn } from '@/components/ui/Motion';
import { faqItems } from '@/content/faq';
import { createMetadata } from '@/lib/seo';

export const metadata = createMetadata({
  title: 'FAQ',
  description: 'Frequently asked questions about Ashvill IT Solutions services, engagement models, and technology expertise.',
  path: '/faq',
});

export default function FAQPage() {
  return (
    <PageLayout>
      <PageHero eyebrow="FAQ" title="Frequently Asked Questions" description="Answers to common questions about our services, processes, and engagement models." />
      <section className="pb-20">
        <div className="container-narrow">
          <Breadcrumbs items={[{ label: 'FAQ' }]} />
          <div className="space-y-12">
            {faqItems.map((section) => (
              <FadeIn key={section.category}>
                <h2 className="font-display mb-6 text-2xl font-bold text-surface-900">{section.category}</h2>
                <div className="space-y-4">
                  {section.questions.map((item) => (
                    <Card key={item.q} glass={false} padding="sm">
                      <h3 className="font-semibold text-surface-900">{item.q}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-surface-500">{item.a}</p>
                    </Card>
                  ))}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
