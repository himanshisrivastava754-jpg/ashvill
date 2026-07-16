export const faqItems = [
  {
    category: 'General',
    questions: [
      { q: 'What industries does Ashvill serve?', a: 'We serve finance, healthcare, retail, manufacturing, education, logistics, government, energy, and technology sectors globally.' },
      { q: 'Where is Ashvill headquartered?', a: 'Our headquarters is in Bengaluru, India. We serve clients worldwide with distributed delivery capabilities.' },
      { q: 'How large is the Ashvill team?', a: 'We have 40–50 skilled professionals across engineering, design, QA, DevOps, and project management.' },
    ],
  },
  {
    category: 'Engagement',
    questions: [
      { q: 'What engagement models do you offer?', a: 'Fixed-price projects, time & materials, dedicated teams, and staff augmentation. We recommend the best model during discovery.' },
      { q: 'How do you ensure project quality?', a: 'Agile methodology with sprint reviews, automated testing, code reviews, security scanning, and continuous stakeholder alignment.' },
      { q: 'Do you sign NDAs?', a: 'Yes. We sign NDAs before any detailed project discussions and maintain strict confidentiality throughout engagements.' },
    ],
  },
  {
    category: 'Technical',
    questions: [
      { q: 'What technologies do you specialize in?', a: 'React, Next.js, Node.js, NestJS, Python, AWS, Azure, PostgreSQL, Kubernetes, AI/ML, and modern enterprise stacks.' },
      { q: 'Can you work with our existing team?', a: 'Absolutely. We frequently collaborate with in-house teams, integrating into your workflows, tools, and communication channels.' },
      { q: 'Do you provide post-launch support?', a: 'Yes. We offer application maintenance packages with SLA-backed support, monitoring, and continuous improvement.' },
    ],
  },
  {
    category: 'Commercial',
    questions: [
      { q: 'How do you price projects?', a: 'Pricing depends on scope, complexity, and engagement model. We provide detailed estimates after a discovery phase at no cost.' },
      { q: 'What is your typical project timeline?', a: 'MVPs: 2–4 months. Enterprise platforms: 6–18 months. We provide detailed timelines during project planning.' },
      { q: 'Do you offer free consultations?', a: 'Yes. We offer a complimentary initial consultation to understand your requirements and recommend an approach.' },
    ],
  },
] as const;
