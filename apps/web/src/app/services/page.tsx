import Link from 'next/link';
import {
  Code2, Globe, Smartphone, Cloud, GitBranch, Shield, Brain, Sparkles,
  Building2, Users, Layers, Palette, TestTube, Cog, BarChart3, PieChart,
  Plug, Lightbulb, UserPlus, UsersRound, RefreshCw, Wrench, ArrowRightLeft,
  ArrowRight, type LucideIcon,
} from 'lucide-react';
import { PageLayout, PageHero, CTASection } from '@/components/layout/PageLayout';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Card, CardIcon } from '@/components/ui/Card';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/ui/Motion';
import { services, serviceCategories } from '@/content/services';
import { createMetadata } from '@/lib/seo';

const iconMap: Record<string, LucideIcon> = {
  Code2, Globe, Smartphone, Cloud, GitBranch, Shield, Brain, Sparkles,
  Building2, Users, Layers, Palette, TestTube, Cog, BarChart3, PieChart,
  Plug, Lightbulb, UserPlus, UsersRound, RefreshCw, Wrench, ArrowRightLeft,
};

export const metadata = createMetadata({
  title: 'Services',
  description:
    'Explore Ashvill IT Solutions enterprise technology services — custom software, cloud, AI, cybersecurity, DevOps, and digital transformation.',
  path: '/services',
});

export default function ServicesPage() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Services"
        title="Enterprise Technology Services"
        description="Comprehensive technology solutions engineered for scale, security, and measurable business impact."
      />

      <section className="pb-20">
        <div className="container-wide">
          <Breadcrumbs items={[{ label: 'Services' }]} />

          {serviceCategories.map((category) => {
            const categoryServices = services.filter((s) => s.category === category.id);
            return (
              <div key={category.id} className="mb-16">
                <FadeIn>
                  <h2 className="font-display mb-2 text-2xl font-bold text-surface-900">
                    {category.label}
                  </h2>
                  <p className="mb-8 text-surface-500">{category.description}</p>
                </FadeIn>

                <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {categoryServices.map((service) => {
                    const Icon = iconMap[service.icon] ?? Code2;
                    return (
                      <StaggerItem key={service.slug}>
                        <Link href={`/services/${service.slug}`} className="block h-full">
                          <Card hover className="h-full">
                            <CardIcon icon={<Icon className="h-5 w-5" />} />
                            <h3 className="mb-2 font-display text-lg font-semibold text-surface-900">
                              {service.title}
                            </h3>
                            <p className="mb-4 text-sm leading-relaxed text-surface-500">
                              {service.shortDescription}
                            </p>
                            <span className="inline-flex items-center gap-1 text-sm font-semibold text-brand-600">
                              Learn more <ArrowRight className="h-3.5 w-3.5" />
                            </span>
                          </Card>
                        </Link>
                      </StaggerItem>
                    );
                  })}
                </StaggerContainer>
              </div>
            );
          })}
        </div>
      </section>

      <CTASection
        title="Need a Custom Solution?"
        description="Tell us about your requirements and we'll architect the perfect technology solution."
      />
    </PageLayout>
  );
}
