export const company = {
  name: 'Ashvill IT Solutions',
  shortName: 'Ashvill',
  tagline: 'Engineering Digital Excellence for Global Enterprises',
  description:
    'Ashvill IT Solutions delivers premium enterprise technology services — custom software, cloud, AI, cybersecurity, and digital transformation — trusted by organizations worldwide.',
  domain: 'ashvill.com',
  url: 'https://ashvill.com',
  foundedYear: 2015,
  headquarters: 'Bengaluru, India',
  employeeCount: '40–50',
  projectCount: '300–400',
  clientCount: '300–400',
  rating: 4.7,
  industry: 'Global Information Technology Services',
} as const;

export const contact = {
  email: 'contact@ashvill.com',
  salesEmail: 'sales@ashvill.com',
  careersEmail: 'careers@ashvill.com',
  phone: '+91 00000 00000',
  address: {
    line1: 'Ashvill IT Solutions',
    line2: 'Bengaluru, Karnataka, India',
    country: 'India',
  },
  social: {
    linkedin: 'https://linkedin.com/company/ashvill',
    twitter: 'https://twitter.com/ashvill',
    github: 'https://github.com/ashvill',
    youtube: 'https://youtube.com/@ashvill',
  },
} as const;

export const stats = [
  { label: 'Years of Excellence', value: '9+' },
  { label: 'Enterprise Projects', value: '350+' },
  { label: 'Global Clients', value: '400+' },
  { label: 'Team Members', value: '45+' },
  { label: 'Client Satisfaction', value: '4.7/5' },
] as const;

export const navigation = {
  main: [
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Industries', href: '/industries' },
    { label: 'Technologies', href: '/technologies' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'Careers', href: '/careers' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ],
  services: [
    { label: 'Custom Software Development', href: '/services/custom-software-development' },
    { label: 'Web Development', href: '/services/web-development' },
    { label: 'Mobile Apps', href: '/services/mobile-apps' },
    { label: 'Cloud Solutions', href: '/services/cloud' },
    { label: 'DevOps', href: '/services/devops' },
    { label: 'Cybersecurity', href: '/services/cybersecurity' },
    { label: 'AI & Machine Learning', href: '/services/ai' },
    { label: 'Generative AI', href: '/services/generative-ai' },
    { label: 'ERP Solutions', href: '/services/erp' },
    { label: 'CRM Solutions', href: '/services/crm' },
    { label: 'SaaS Development', href: '/services/saas' },
    { label: 'UI/UX Design', href: '/services/ui-ux' },
    { label: 'QA & Testing', href: '/services/qa' },
    { label: 'Automation', href: '/services/automation' },
    { label: 'Data Analytics', href: '/services/data-analytics' },
    { label: 'Business Intelligence', href: '/services/business-intelligence' },
    { label: 'API Development', href: '/services/api-development' },
    { label: 'IT Consulting', href: '/services/it-consulting' },
    { label: 'Staff Augmentation', href: '/services/staff-augmentation' },
    { label: 'Dedicated Teams', href: '/services/dedicated-teams' },
    { label: 'Legacy Modernization', href: '/services/legacy-modernization' },
    { label: 'Application Maintenance', href: '/services/application-maintenance' },
    { label: 'Cloud Migration', href: '/services/cloud-migration' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Cookie Policy', href: '/cookie-policy' },
    { label: 'Disclaimer', href: '/disclaimer' },
    { label: 'FAQ', href: '/faq' },
  ],
  cta: [
    { label: 'Request Quote', href: '/request-quote' },
    { label: 'Contact Us', href: '/contact' },
  ],
} as const;

export const seoDefaults = {
  titleTemplate: '%s | Ashvill IT Solutions',
  defaultTitle: 'Ashvill IT Solutions — Enterprise Technology Services',
  defaultDescription: company.description,
  keywords: [
    'enterprise IT services',
    'custom software development',
    'cloud solutions',
    'digital transformation',
    'AI development',
    'cybersecurity',
    'Ashvill IT Solutions',
  ],
  ogImage: '/og-image.png',
  twitterHandle: '@ashvill',
} as const;
