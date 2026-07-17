import { notFound } from 'next/navigation';
import Link from 'next/link';
import {
  Code2, Globe, Smartphone, Cloud, GitBranch, Shield, Brain, Sparkles,
  Building2, Users, Layers, Palette, TestTube, Cog, BarChart3, PieChart,
  Plug, Lightbulb, UserPlus, UsersRound, RefreshCw, Wrench, ArrowRightLeft,
  CheckCircle2, ArrowRight, type LucideIcon,
} from 'lucide-react';
import { PageLayout, PageHero, CTASection } from '@/components/layout/PageLayout';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { FadeIn } from '@/components/ui/Motion';
import { services, getServiceBySlug } from '@/content/services';
import { createMetadata, serviceJsonLd, breadcrumbJsonLd } from '@/lib/seo';

const iconMap: Record<string, LucideIcon> = {
  Code2, Globe, Smartphone, Cloud, GitBranch, Shield, Brain, Sparkles,
  Building2, Users, Layers, Palette, TestTube, Cog, BarChart3, PieChart,
  Plug, Lightbulb, UserPlus, UsersRound, RefreshCw, Wrench, ArrowRightLeft,
};

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return createMetadata({
    title: service.title,
    description: service.shortDescription,
    path: `/services/${slug}`,
  });
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const Icon = iconMap[service.icon] ?? Code2;
  const jsonLd = serviceJsonLd({
  name: service.title,
  description: service.shortDescription,
  slug: service.slug,
});
  const breadcrumbs = breadcrumbJsonLd([
    { name: 'Services', path: '/services' },
    { name: service.title, path: `/services/${slug}` },
  ]);

  return (
    <PageLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />

      <PageHero
        eyebrow="Service"
        title={service.title}
        description={service.shortDescription}
      >
        <div className="mt-8 flex flex-wrap gap-4">
          <Button href="/request-quote" rightIcon={<ArrowRight className="h-4 w-4" />}>
            Request a Quote
          </Button>
          <Button href="/contact" variant="outline">
            Talk to an Expert
          </Button>
        </div>
      </PageHero>

      <section className="pb-20">
        <div className="container-wide">
          <Breadcrumbs
            items={[
              { label: 'Services', href: '/services' },
              { label: service.title },
            ]}
          />

          <div className="grid gap-16 lg:grid-cols-3">
            <div className="lg:col-span-2 space-y-16">
              <FadeIn>
                <h2 className="font-display mb-4 text-2xl font-bold text-surface-900">Overview</h2>
                <p className="text-lg leading-relaxed text-surface-600">{service.overview}</p>
              </FadeIn>

              <FadeIn>
                <h2 className="font-display mb-6 text-2xl font-bold text-surface-900">Key Features</h2>
                <div className="grid gap-3 sm:grid-cols-2">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-500" />
                      <span className="text-surface-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </FadeIn>

              <FadeIn>
                <h2 className="font-display mb-6 text-2xl font-bold text-surface-900">Our Process</h2>
                <div className="space-y-4">
                  {service.process.map((step, index) => (
                    <Card key={step.step} glass={false} padding="sm">
                      <div className="flex gap-4">
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-100 text-sm font-bold text-brand-700">
                          {index + 1}
                        </span>
                        <div>
                          <h3 className="font-semibold text-surface-900">{step.step}</h3>
                          <p className="mt-1 text-sm text-surface-500">{step.description}</p>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </FadeIn>

              <FadeIn>
                <h2 className="font-display mb-6 text-2xl font-bold text-surface-900">FAQs</h2>
                <div className="space-y-4">
                  {service.faqs.map((faq) => (
                    <Card key={faq.question} glass={false} padding="sm">
                      <h3 className="font-semibold text-surface-900">{faq.question}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-surface-500">{faq.answer}</p>
                    </Card>
                  ))}
                </div>
              </FadeIn>
            </div>

            <div className="space-y-6">
              <FadeIn>
                <Card>
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl gradient-brand text-white">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="font-display mb-4 text-lg font-semibold text-surface-900">Benefits</h3>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-2 text-sm text-surface-600">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </Card>
              </FadeIn>

              <FadeIn delay={0.1}>
                <Card>
                  <h3 className="font-display mb-4 text-lg font-semibold text-surface-900">Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-lg bg-surface-100 px-3 py-1.5 text-xs font-medium text-surface-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </Card>
              </FadeIn>

              <FadeIn delay={0.2}>
                <Card>
                  <h3 className="font-display mb-4 text-lg font-semibold text-surface-900">Industries Served</h3>
                  <div className="flex flex-wrap gap-2">
                    {service.industries.map((industry) => (
                      <span
                        key={industry}
                        className="rounded-lg bg-brand-50 px-3 py-1.5 text-xs font-medium text-brand-700"
                      >
                        {industry}
                      </span>
                    ))}
                  </div>
                </Card>
              </FadeIn>

              <FadeIn delay={0.3}>
                <Card className="gradient-brand text-white">
                  <h3 className="font-display mb-2 text-lg font-semibold">Ready to get started?</h3>
                  <p className="mb-4 text-sm text-white/80">
                    Let&apos;s discuss how {service.title.toLowerCase()} can transform your business.
                  </p>
                  <Link
                    href="/request-quote"
                    className="inline-flex items-center gap-1 text-sm font-semibold text-white hover:underline"
                  >
                    Request a Quote <ArrowRight className="h-4 w-4" />
                  </Link>
                </Card>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title={`Start Your ${service.title} Project`}
        description="Partner with Ashvill's expert team to deliver exceptional results."
      />
    </PageLayout>
  );
}
