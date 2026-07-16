import { PageLayout, CTASection } from '@/components/layout/PageLayout';
import { HeroSection, TrustBar } from '@/components/sections/Hero';
import { ServicesPreview } from '@/components/sections/ServicesPreview';
import { WhyAshvill } from '@/components/sections/WhyAshvill';
import { CaseStudiesPreview } from '@/components/sections/CaseStudiesPreview';
import { createMetadata } from '@/lib/seo';

export const metadata = createMetadata({
  title: 'Enterprise Technology Services',
  description:
    'Ashvill IT Solutions delivers premium enterprise technology services — custom software, cloud, AI, cybersecurity, and digital transformation for global organizations.',
  path: '/',
});

export default function HomePage() {
  return (
    <PageLayout>
      <HeroSection />
      <TrustBar />
      <ServicesPreview />
      <WhyAshvill />
      <CaseStudiesPreview />
      <CTASection
        title="Ready to Transform Your Enterprise?"
        description="Partner with Ashvill IT Solutions to build technology that drives measurable business outcomes."
      />
    </PageLayout>
  );
}
