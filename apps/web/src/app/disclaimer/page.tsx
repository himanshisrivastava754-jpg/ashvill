import { createLegalPage } from '@/components/legal/LegalPageTemplate';
import { company } from '@/config/company';

const { metadata, default: DisclaimerPage } = createLegalPage({
  title: 'Disclaimer',
  description: `Legal disclaimer for ${company.name} website content and services.`,
  path: '/disclaimer',
  lastUpdated: 'July 16, 2026',
  sections: [
    { title: 'General Information', content: `The information on ashvill.com is provided for general informational purposes only. While ${company.name} strives to keep information accurate and up-to-date, we make no warranties about completeness, reliability, or suitability.` },
    { title: 'Professional Advice', content: 'Content on this website does not constitute professional, legal, or financial advice. Specific technology recommendations should be discussed during formal consultations tailored to your requirements.' },
    { title: 'External Links', content: 'Our website may contain links to external sites. We are not responsible for the content, privacy practices, or availability of third-party websites.' },
    { title: 'Case Studies & Testimonials', content: 'Case studies and results presented represent specific client engagements. Individual results may vary based on project scope, industry, and organizational factors.' },
  ],
});

export { metadata };
export default DisclaimerPage;
