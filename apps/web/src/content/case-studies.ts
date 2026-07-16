export interface CaseStudy {
  slug: string;
  title: string;
  industry: string;
  client: string;
  duration: string;
  challenge: string;
  solution: string;
  results: string[];
  technologies: string[];
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'fintech-platform-modernization',
    title: 'FinTech Platform Modernization',
    industry: 'Financial Services',
    client: 'Global FinTech Enterprise',
    duration: '14 months',
    challenge: 'A legacy monolithic banking platform was causing 40% slower transaction processing, increasing maintenance costs, and blocking new product launches.',
    solution: 'Ashvill executed a strangler fig migration to cloud-native microservices on AWS, implementing event-driven architecture with real-time compliance reporting.',
    results: ['60% faster transaction processing', '45% reduction in infrastructure costs', '99.99% uptime achieved', '3 new product lines launched within 6 months'],
    technologies: ['AWS', 'Kubernetes', 'Node.js', 'PostgreSQL', 'Kafka', 'Terraform'],
  },
  {
    slug: 'healthcare-ai-diagnostics',
    title: 'AI-Powered Healthcare Diagnostics',
    industry: 'Healthcare',
    client: 'Regional Healthcare Network',
    duration: '10 months',
    challenge: 'Clinicians faced information overload from disparate data sources, leading to delayed diagnoses and inconsistent treatment recommendations.',
    solution: 'Built an ML-powered diagnostic assistance platform integrated with hospital EMR systems, providing real-time clinical decision support.',
    results: ['92% diagnostic accuracy improvement', '35% reduction in diagnosis time', 'HIPAA-compliant deployment', 'Adopted by 200+ clinicians'],
    technologies: ['Python', 'TensorFlow', 'FHIR', 'AWS SageMaker', 'React', 'PostgreSQL'],
  },
  {
    slug: 'retail-omnichannel-platform',
    title: 'Retail Omnichannel Platform',
    industry: 'Retail & E-commerce',
    client: 'International Retail Brand',
    duration: '12 months',
    challenge: 'Disconnected online, mobile, and in-store channels created inventory inconsistencies and fragmented customer experiences.',
    solution: 'Developed a unified commerce platform with real-time inventory sync, personalized recommendations, and seamless checkout across all channels.',
    results: ['3x increase in online revenue', 'Unified inventory across 500+ locations', '40% improvement in customer retention', 'Single customer view achieved'],
    technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'Redis', 'Stripe', 'AWS'],
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}
