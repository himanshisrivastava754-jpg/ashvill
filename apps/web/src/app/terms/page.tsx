import { createLegalPage } from '@/components/legal/LegalPageTemplate';
import { company } from '@/config/company';

const { metadata, default: TermsPage } = createLegalPage({
  title: 'Terms of Service',
  description: `Terms of Service governing the use of ${company.name} website and services.`,
  path: '/terms',
  lastUpdated: 'July 16, 2026',
  sections: [
    { title: 'Agreement to Terms', content: `By accessing ashvill.com or engaging ${company.name} services, you agree to be bound by these Terms of Service. If you disagree with any part, you may not access our website or services.` },
    { title: 'Services', content: `${company.name} provides enterprise information technology services including software development, cloud solutions, consulting, and related technology services as described on our website and in individual service agreements.` },
    { title: 'Intellectual Property', content: 'All content on this website including text, graphics, logos, and software is the property of Ashvill IT Solutions and protected by applicable intellectual property laws. Client-owned deliverables are governed by individual project agreements.' },
    { title: 'Limitation of Liability', content: 'To the maximum extent permitted by law, Ashvill IT Solutions shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of our website or services.' },
    { title: 'Governing Law', content: 'These Terms shall be governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of courts in Bengaluru, Karnataka.' },
  ],
});

export { metadata };
export default TermsPage;
