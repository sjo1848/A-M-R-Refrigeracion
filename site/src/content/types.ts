export interface ServiceCategory {
  title: string;
  items: string[];
  priority: 'high' | 'medium' | 'base';
}

export interface WhyChoosePoint {
  title: string;
  description: string;
}

export interface GalleryItem {
  src: string;
  alt: string;
}

export interface Testimonial {
  name: string;
  quote: string;
  area: string;
}

export interface LandingContent {
  brand: {
    name: string;
    h1: string;
    descriptor: string;
    subtitle: string;
    locationLabel: string;
  };
  contact: {
    whatsapp: string;
    phoneLabel: string;
    responseTimeLabel: string;
  };
  cta: {
    whatsappMessage: string;
    primaryLabel: string;
    servicesLabel: string;
    finalLabel: string;
  };
  legal: {
    urgency: string;
    warranty: string;
  };
  heroChecks: string[];
  trustPoints: string[];
  serviceCategories: ServiceCategory[];
  whyChoosePoints: WhyChoosePoint[];
  zones: string[];
  zonesCoverageText: string;
  gallery: GalleryItem[];
  testimonials: Testimonial[];
  footer: {
    addressReference: string;
    coverageLabel: string;
    businessLabel: string;
  };
  seo: {
    title: string;
    description: string;
    keywords: string;
  };
}
