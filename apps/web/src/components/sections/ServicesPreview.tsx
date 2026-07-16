import Link from 'next/link';
import {
  Code2, Globe, Smartphone, Cloud, GitBranch, Shield, Brain, Sparkles,
  Building2, Users, Layers, Palette, TestTube, Cog, BarChart3, PieChart,
  Plug, Lightbulb, UserPlus, UsersRound, RefreshCw, Wrench, ArrowRightLeft,
  ArrowRight, type LucideIcon,
} from 'lucide-react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Card, CardIcon } from '@/components/ui/Card';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/ui/Motion';
import { services } from '@/content/services';

const iconMap: Record<string, LucideIcon> = {
  Code2, Globe, Smartphone, Cloud, GitBranch, Shield, Brain, Sparkles,
  Building2, Users, Layers, Palette, TestTube, Cog, BarChart3, PieChart,
  Plug, Lightbulb, UserPlus, UsersRound, RefreshCw, Wrench, ArrowRightLeft,
};

export function ServicesPreview() {
  const featured = services.slice(0, 8);

  return (
    <section className="section-padding">
      <div className="container-wide">
        <FadeIn>
          <SectionHeader
            eyebrow="Our Services"
            title="Comprehensive Technology Solutions"
            description="From strategy to execution, we deliver end-to-end technology services that drive measurable business outcomes for enterprise organizations."
          />
        </FadeIn>

        <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((service) => {
            const Icon = iconMap[service.icon] ?? Code2;
            return (
              <StaggerItem key={service.slug}>
                <Link href={`/services/${service.slug}`} className="block h-full">
                  <Card hover className="h-full">
                    <CardIcon icon={<Icon className="h-5 w-5" />} />
                    <h3 className="mb-2 font-display text-lg font-semibold text-surface-900">
                      {service.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-surface-500">
                      {service.shortDescription}
                    </p>
                  </Card>
                </Link>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        <FadeIn className="mt-12 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-600 transition-colors hover:text-brand-700"
          >
            View all 24 services
            <ArrowRight className="h-4 w-4" />
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
