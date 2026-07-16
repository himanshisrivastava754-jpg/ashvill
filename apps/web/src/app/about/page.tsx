import Link from 'next/link';
import { PageLayout, PageHero, CTASection } from '@/components/layout/PageLayout';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Card } from '@/components/ui/Card';
import { FadeIn } from '@/components/ui/Motion';
import { company, stats } from '@/config/company';
import { createMetadata } from '@/lib/seo';

export const metadata = createMetadata({
  title: 'About Us',
  description: `Learn about ${company.name} — ${company.employeeCount} professionals delivering enterprise technology solutions from ${company.headquarters} since ${company.foundedYear}.`,
  path: '/about',
});

export default function AboutPage() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="About Us"
        title="Eight Years of Engineering Excellence"
        description={`${company.name} is a global IT services company headquartered in ${company.headquarters}, delivering transformative technology solutions to enterprise clients worldwide.`}
      />

      <section className="pb-20">
        <div className="container-wide">
          <Breadcrumbs items={[{ label: 'About' }]} />

          <div className="grid gap-16 lg:grid-cols-2">
            <FadeIn>
              <h2 className="font-display text-3xl font-bold text-surface-900">Our Story</h2>
              <div className="mt-6 space-y-4 text-surface-600 leading-relaxed">
                <p>
                  Founded in {company.foundedYear}, Ashvill IT Solutions began with a singular vision:
                  to deliver enterprise-grade technology services that rival the world&apos;s leading IT
                  firms while maintaining the agility and personal attention of a focused team.
                </p>
                <p>
                  Today, with {company.employeeCount} skilled professionals and {company.projectCount}{' '}
                  successful projects delivered, we serve clients across finance, healthcare,
                  manufacturing, retail, and technology sectors globally.
                </p>
                <p>
                  Our approach combines deep technical expertise with genuine business understanding.
                  We don&apos;t just build software — we engineer solutions that drive measurable outcomes
                  for the organizations that trust us.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat) => (
                  <Card key={stat.label} padding="sm">
                    <div className="font-display text-3xl font-bold text-brand-600">{stat.value}</div>
                    <div className="mt-1 text-sm text-surface-500">{stat.label}</div>
                  </Card>
                ))}
              </div>
            </FadeIn>
          </div>

          <FadeIn className="mt-20">
            <h2 className="font-display mb-8 text-3xl font-bold text-surface-900">Our Values</h2>
            <div className="grid gap-6 md:grid-cols-3">
              {[
                { title: 'Excellence', desc: 'We hold ourselves to the highest standards in every line of code and every client interaction.' },
                { title: 'Integrity', desc: 'Transparent communication, honest assessments, and ethical practices define every engagement.' },
                { title: 'Innovation', desc: 'We continuously evolve our capabilities to bring cutting-edge solutions to enterprise challenges.' },
              ].map((value) => (
                <Card key={value.title}>
                  <h3 className="font-display mb-2 text-xl font-semibold text-surface-900">{value.title}</h3>
                  <p className="text-sm leading-relaxed text-surface-500">{value.desc}</p>
                </Card>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      <CTASection
        title="Let's Build Something Exceptional"
        description="Discover how Ashvill can become your trusted technology partner."
      />
    </PageLayout>
  );
}
