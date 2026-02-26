import type { LandingContent } from '../content/types';

export function buildLocalBusinessSchema(
  content: LandingContent,
  pageUrl: URL,
  whatsappUrl: string,
) {
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
    sameAs: [whatsappUrl],
  };
}
