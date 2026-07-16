export const technologies = {
  frontend: {
    label: 'Frontend',
    items: ['React', 'Next.js', 'Vue.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
  },
  backend: {
    label: 'Backend',
    items: ['Node.js', 'NestJS', 'Python', 'Java', '.NET', 'Go', 'GraphQL', 'REST APIs'],
  },
  cloud: {
    label: 'Cloud & DevOps',
    items: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'Terraform', 'CI/CD'],
  },
  data: {
    label: 'Data & AI',
    items: ['PostgreSQL', 'MongoDB', 'Redis', 'Snowflake', 'TensorFlow', 'PyTorch', 'OpenAI'],
  },
  mobile: {
    label: 'Mobile',
    items: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'iOS', 'Android'],
  },
  security: {
    label: 'Security',
    items: ['OWASP', 'SOC 2', 'ISO 27001', 'Zero Trust', 'SIEM', 'Penetration Testing'],
  },
} as const;

export const techPartners = [
  'AWS Partner',
  'Microsoft Azure',
  'Google Cloud',
  'PostgreSQL',
  'Docker Certified',
  'Kubernetes',
] as const;
