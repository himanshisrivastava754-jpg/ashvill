export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  publishedAt: string;
  readTime: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'enterprise-ai-adoption-2026',
    title: 'Enterprise AI Adoption in 2026: A Practical Guide',
    excerpt: 'How leading enterprises are successfully integrating AI into their operations while maintaining security and compliance.',
    content: 'Artificial intelligence has moved from experimental pilots to production-critical systems in enterprise environments...',
    category: 'AI & Machine Learning',
    author: 'Ashvill Editorial',
    publishedAt: '2026-06-15',
    readTime: '8 min',
  },
  {
    slug: 'cloud-migration-best-practices',
    title: 'Cloud Migration Best Practices for Enterprise Workloads',
    excerpt: 'A proven framework for migrating enterprise applications to the cloud with minimal risk and maximum ROI.',
    content: 'Cloud migration remains one of the most impactful technology initiatives an enterprise can undertake...',
    category: 'Cloud',
    author: 'Ashvill Editorial',
    publishedAt: '2026-05-28',
    readTime: '10 min',
  },
  {
    slug: 'cybersecurity-zero-trust',
    title: 'Implementing Zero Trust Security in Modern Enterprises',
    excerpt: 'Why zero trust architecture is no longer optional and how to implement it across your organization.',
    content: 'The traditional perimeter-based security model is obsolete in an era of remote work and cloud-first architectures...',
    category: 'Cybersecurity',
    author: 'Ashvill Editorial',
    publishedAt: '2026-05-10',
    readTime: '7 min',
  },
  {
    slug: 'microservices-vs-monolith',
    title: 'Microservices vs Monolith: Choosing the Right Architecture',
    excerpt: 'An objective analysis of when microservices deliver value and when a well-structured monolith is the better choice.',
    content: 'Architecture decisions have long-lasting consequences. The microservices vs monolith debate continues...',
    category: 'Architecture',
    author: 'Ashvill Editorial',
    publishedAt: '2026-04-22',
    readTime: '9 min',
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
