import type { LandingContent } from '../content/types';

export function buildLocalBusinessSchema(
  content: LandingContent,
  pageUrl: URL,
  whatsappUrl: string,
) {
  const serviceItems = content.serviceCategories.map((category) => ({
    '@type': 'Offer',
    itemOffered: {
      '@type': 'Service',
      name: category.title,
      serviceType: category.items.join(', '),
    },
  }));

  const reviews = content.testimonials.map((testimonial) => ({
    '@type': 'Review',
    reviewRating: {
      '@type': 'Rating',
      ratingValue: '5',
      bestRating: '5',
    },
    author: {
      '@type': 'Person',
      name: testimonial.name,
    },
    reviewBody: testimonial.quote,
  }));

  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: content.brand.name,
    description: content.seo.description,
    slogan: content.brand.descriptor,
    areaServed: content.zones,
    telephone: content.contact.phoneLabel,
    url: pageUrl.toString(),
    address: {
      '@type': 'PostalAddress',
      streetAddress: content.footer.addressReference,
      addressLocality: 'Mendoza',
      addressCountry: 'AR',
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'customer service',
        telephone: content.contact.phoneLabel,
        areaServed: 'Mendoza',
      },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Servicios de refrigeracion',
      itemListElement: serviceItems,
    },
    review: reviews,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: reviews.length.toString(),
    },
    sameAs: [whatsappUrl],
  };
}
