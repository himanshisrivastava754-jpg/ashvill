import { createLegalPage } from '@/components/legal/LegalPageTemplate';
import { company } from '@/config/company';

const { metadata, default: CookiePolicyPage } = createLegalPage({
  title: 'Cookie Policy',
  description: `Cookie Policy for ${company.name} — how we use cookies and similar technologies.`,
  path: '/cookie-policy',
  lastUpdated: 'July 16, 2026',
  sections: [
    { title: 'What Are Cookies', content: 'Cookies are small text files placed on your device when you visit our website. They help us provide a better experience by remembering preferences and understanding how you use our site.' },
    { title: 'Types of Cookies We Use', content: 'Essential cookies are required for website functionality. Analytics cookies help us understand visitor behavior and improve our site. Marketing cookies may be used to deliver relevant content. You can control cookie preferences through your browser settings.' },
    { title: 'Third-Party Cookies', content: 'We may use third-party services such as analytics providers that place their own cookies. These are governed by the respective third-party privacy policies.' },
    { title: 'Managing Cookies', content: 'You can disable cookies through your browser settings. Note that disabling essential cookies may affect website functionality.' },
  ],
});

export { metadata };
export default CookiePolicyPage;
