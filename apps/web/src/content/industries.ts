export const industries = [
  {
    slug: 'finance',
    name: 'Financial Services',
    description: 'Secure, compliant technology solutions for banks, fintech, and insurance companies.',
    challenges: ['Regulatory compliance', 'Legacy system modernization', 'Real-time transaction processing', 'Fraud detection'],
    solutions: ['Core banking platforms', 'Payment gateways', 'Risk analytics', 'RegTech solutions'],
  },
  {
    slug: 'healthcare',
    name: 'Healthcare',
    description: 'HIPAA-aligned digital health solutions that improve patient outcomes and operational efficiency.',
    challenges: ['Data interoperability', 'Patient privacy', 'Clinical workflow optimization', 'Telehealth scaling'],
    solutions: ['EMR integration', 'Telehealth platforms', 'AI diagnostics', 'Patient portals'],
  },
  {
    slug: 'retail',
    name: 'Retail & E-commerce',
    description: 'Omnichannel commerce platforms that unify online, mobile, and in-store experiences.',
    challenges: ['Inventory synchronization', 'Personalization at scale', 'Supply chain visibility', 'Customer retention'],
    solutions: ['E-commerce platforms', 'POS integration', 'Recommendation engines', 'Loyalty programs'],
  },
  {
    slug: 'manufacturing',
    name: 'Manufacturing',
    description: 'Industry 4.0 solutions connecting shop floors, supply chains, and enterprise systems.',
    challenges: ['Production optimization', 'Predictive maintenance', 'Supply chain disruption', 'Quality control'],
    solutions: ['IoT platforms', 'MES integration', 'Predictive analytics', 'Digital twins'],
  },
  {
    slug: 'education',
    name: 'Education',
    description: 'Learning management systems and EdTech platforms that scale globally.',
    challenges: ['Remote learning delivery', 'Student engagement', 'Assessment automation', 'Content management'],
    solutions: ['LMS platforms', 'Virtual classrooms', 'Adaptive learning', 'Administration systems'],
  },
  {
    slug: 'logistics',
    name: 'Logistics & Supply Chain',
    description: 'End-to-end visibility and optimization for complex supply chain networks.',
    challenges: ['Route optimization', 'Real-time tracking', 'Warehouse automation', 'Last-mile delivery'],
    solutions: ['TMS platforms', 'Fleet management', 'Warehouse systems', 'Tracking portals'],
  },
  {
    slug: 'government',
    name: 'Government & Public Sector',
    description: 'Secure, accessible digital services for citizens and government operations.',
    challenges: ['Citizen service delivery', 'Data sovereignty', 'Legacy modernization', 'Accessibility compliance'],
    solutions: ['Citizen portals', 'Document management', 'Workflow automation', 'Open data platforms'],
  },
  {
    slug: 'energy',
    name: 'Energy & Utilities',
    description: 'Smart grid, renewable energy, and utility management technology solutions.',
    challenges: ['Grid modernization', 'Renewable integration', 'Asset management', 'Regulatory reporting'],
    solutions: ['SCADA systems', 'Energy analytics', 'Smart metering', 'Asset monitoring'],
  },
] as const;

export function getIndustryBySlug(slug: string) {
  return industries.find((i) => i.slug === slug);
}
