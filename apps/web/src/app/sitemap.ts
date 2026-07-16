import type { MetadataRoute } from 'next';
import { company } from '@/config/company';
import { services } from '@/content/services';
import { blogPosts } from '@/content/blog';
import { caseStudies } from '@/content/case-studies';
import { jobListings } from '@/content/careers';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = company.url;
  const staticPages = [
    '', '/about', '/services', '/industries', '/technologies', '/portfolio',
    '/case-studies', '/careers', '/blog', '/contact', '/faq', '/request-quote',
    '/privacy-policy', '/terms', '/cookie-policy', '/disclaimer',
  ];

  return [
    ...staticPages.map((path) => ({
      url: `${baseUrl}${path}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: path === '' ? 1 : 0.8,
    })),
    ...services.map((s) => ({
      url: `${baseUrl}/services/${s.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
    ...caseStudies.map((c) => ({
      url: `${baseUrl}/case-studies/${c.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
    ...blogPosts.map((p) => ({
      url: `${baseUrl}/blog/${p.slug}`,
      lastModified: new Date(p.publishedAt),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
    ...jobListings.map((j) => ({
      url: `${baseUrl}/careers/${j.slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.5,
    })),
  ];
}
