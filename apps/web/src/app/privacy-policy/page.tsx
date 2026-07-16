import { createLegalPage } from '@/components/legal/LegalPageTemplate';
import { company } from '@/config/company';

const { metadata, default: PrivacyPolicyPage } = createLegalPage({
  title: 'Privacy Policy',
  description: `Privacy Policy for ${company.name} — how we collect, use, and protect your personal information.`,
  path: '/privacy-policy',
  lastUpdated: 'July 16, 2026',
  sections: [
    { title: 'Introduction', content: `${company.name} ("we", "our", "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website ashvill.com or engage our services.` },
    { title: 'Information We Collect', content: 'We may collect personal information including name, email address, phone number, company name, and project details when you submit contact forms, request quotes, or apply for positions. We also collect technical data such as IP address, browser type, and usage analytics through cookies and similar technologies.' },
    { title: 'How We Use Your Information', content: 'We use collected information to respond to inquiries, provide services, send relevant communications, improve our website, comply with legal obligations, and protect against fraudulent activity. We do not sell your personal information to third parties.' },
    { title: 'Data Security', content: 'We implement industry-standard security measures including encryption, access controls, secure servers, and regular security assessments to protect your personal information against unauthorized access, alteration, or destruction.' },
    { title: 'Your Rights', content: 'Depending on your jurisdiction, you may have rights to access, correct, delete, or restrict processing of your personal data. To exercise these rights, contact us at contact@ashvill.com.' },
    { title: 'Changes to This Policy', content: 'We may update this Privacy Policy periodically. Changes will be posted on this page with an updated revision date.' },
  ],
});

export { metadata };
export default PrivacyPolicyPage;
