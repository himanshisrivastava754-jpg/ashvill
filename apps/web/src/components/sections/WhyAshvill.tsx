import { Target, Zap, Shield, TrendingUp } from 'lucide-react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Card, CardIcon } from '@/components/ui/Card';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/ui/Motion';

const values = [
  {
    icon: Target,
    title: 'Outcome-Driven',
    description:
      'Every engagement is measured against your business KPIs — not just technical deliverables.',
  },
  {
    icon: Zap,
    title: 'Velocity & Quality',
    description:
      'Agile delivery with enterprise-grade quality gates, ensuring speed without compromise.',
  },
  {
    icon: Shield,
    title: 'Security-First',
    description:
      'Security and compliance are embedded in our DNA, not bolted on as an afterthought.',
  },
  {
    icon: TrendingUp,
    title: 'Long-Term Partnership',
    description:
      'We invest in understanding your business deeply, becoming a trusted technology partner.',
  },
];

export function WhyAshvill() {
  return (
    <section className="section-padding bg-surface-100/50">
      <div className="container-wide">
        <FadeIn>
          <SectionHeader
            eyebrow="Why Ashvill"
            title="Built for Enterprise Excellence"
            description="Eight years of delivering transformative technology solutions to organizations that demand the highest standards."
          />
        </FadeIn>

        <StaggerContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => (
            <StaggerItem key={value.title}>
              <Card hover className="h-full">
                <CardIcon icon={<value.icon className="h-5 w-5" />} />
                <h3 className="mb-2 font-display text-lg font-semibold text-surface-900">
                  {value.title}
                </h3>
                <p className="text-sm leading-relaxed text-surface-500">{value.description}</p>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
