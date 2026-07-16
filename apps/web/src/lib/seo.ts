import type { Metadata } from 'next';
import { company, contact, seoDefaults } from '@/config/company';
import { absoluteUrl } from '@/lib/utils';

interface PageMetadataOptions {
  title?: string;
  description?: string;
  path?: string;
  keywords?: string[];
  noIndex?: boolean;
  image?: string;
}

export function createMetadata({
  title,
  description = seoDefaults.defaultDescription,
  path = '/',
  keywords = [...seoDefaults.keywords],
  noIndex = false,
  image = seoDefaults.ogImage,
}: PageMetadataOptions = {}): Metadata {
  const pageTitle = title
    ? seoDefaults.titleTemplate.replace('%s', title)
    : seoDefaults.defaultTitle;
  const url = absoluteUrl(path);
  const imageUrl = absoluteUrl(image);

  return {
    title: pageTitle,
    description,
    keywords,
    metadataBase: new URL(company.url),
    alternates: { canonical: url },
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url,
      siteName: company.name,
      title: pageTitle,
      description,
      images: [{ url: imageUrl, width: 1200, height: 630, alt: company.name }],
    },
    twitter: {
      card: 'summary_large_image',
      site: seoDefaults.twitterHandle,
      title: pageTitle,
      description,
      images: [imageUrl],
    },
    robots: noIndex ? { index: false, follow: false } : { index: true, follow: true },
  };
}

export function organizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: company.name,
    url: company.url,
    logo: absoluteUrl('/logo.svg'),
    description: company.description,
    foundingDate: String(company.foundedYear),
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Bengaluru',
      addressCountry: 'IN',
    },
    sameAs: Object.values(contact.social),
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: company.rating,
      bestRating: 5,
    },
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function serviceJsonLd(service: {
  name: string;
  description: string;
  slug: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description,
    provider: {
      '@type': 'Organization',
      name: company.name,
      url: company.url,
    },
    url: absoluteUrl(`/services/${service.slug}`),
  };
}
