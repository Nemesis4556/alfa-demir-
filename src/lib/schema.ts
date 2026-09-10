import { business } from "../data/content";
import { SITE_URL } from "../components/Seo";
import type { ServiceDetail } from "../data/servicesDetail";
import type { BlogPost } from "../data/blog";

export function buildBreadcrumbList(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

export function buildFaqSchema(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}

export function buildServiceSchema(service: ServiceDetail) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.title,
    name: service.seoTitle,
    description: service.seoDescription,
    areaServed: {
      "@type": "City",
      name: "İzmir",
    },
    provider: {
      "@type": "LocalBusiness",
      name: business.name,
      telephone: business.phoneTel,
      address: {
        "@type": "PostalAddress",
        streetAddress: business.address,
        addressLocality: business.city,
        addressCountry: "TR",
      },
      url: SITE_URL,
    },
    url: `${SITE_URL}/hizmetler/${service.slug}`,
  };
}

export function buildArticleSchema(post: BlogPost) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.seoDescription,
    image: post.coverImage,
    datePublished: post.publishDate,
    dateModified: post.updatedDate,
    author: {
      "@type": "Organization",
      name: business.name,
    },
    publisher: {
      "@type": "Organization",
      name: business.name,
    },
    mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
  };
}
