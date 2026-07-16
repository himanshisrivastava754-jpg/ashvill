export interface JobListing {
  slug: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  description: string;
  requirements: string[];
}

export const jobListings: JobListing[] = [
  {
    slug: 'senior-full-stack-engineer',
    title: 'Senior Full-Stack Engineer',
    department: 'Engineering',
    location: 'Bengaluru, India (Hybrid)',
    type: 'Full-time',
    experience: '5+ years',
    description: 'Join our engineering team to build enterprise-grade applications using React, Node.js, and cloud technologies.',
    requirements: ['5+ years full-stack development', 'Expert in React and TypeScript', 'Experience with Node.js/NestJS', 'Cloud platform experience (AWS preferred)', 'Strong system design skills'],
  },
  {
    slug: 'devops-engineer',
    title: 'DevOps Engineer',
    department: 'Infrastructure',
    location: 'Bengaluru, India (Remote)',
    type: 'Full-time',
    experience: '3+ years',
    description: 'Design and maintain CI/CD pipelines, cloud infrastructure, and monitoring systems for enterprise client projects.',
    requirements: ['3+ years DevOps experience', 'Expert in Docker and Kubernetes', 'CI/CD pipeline design', 'Terraform/IaC experience', 'AWS or Azure certification preferred'],
  },
  {
    slug: 'ui-ux-designer',
    title: 'Senior UI/UX Designer',
    department: 'Design',
    location: 'Bengaluru, India (Hybrid)',
    type: 'Full-time',
    experience: '4+ years',
    description: 'Create exceptional user experiences for enterprise applications, from research through high-fidelity prototypes.',
    requirements: ['4+ years UI/UX design', 'Expert in Figma', 'Enterprise application design experience', 'Design systems expertise', 'User research and testing skills'],
  },
  {
    slug: 'ai-ml-engineer',
    title: 'AI/ML Engineer',
    department: 'Data Science',
    location: 'Bengaluru, India (Hybrid)',
    type: 'Full-time',
    experience: '3+ years',
    description: 'Build and deploy production ML models and generative AI solutions for enterprise clients across industries.',
    requirements: ['3+ years ML engineering', 'Python, TensorFlow/PyTorch', 'MLOps experience', 'LLM integration experience', 'Strong mathematics foundation'],
  },
];

export function getJobBySlug(slug: string): JobListing | undefined {
  return jobListings.find((j) => j.slug === slug);
}
