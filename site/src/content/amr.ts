import type { LandingContent } from './types';

export const amrContent: LandingContent = {
  brand: {
    name: 'A.M.R Refrigeracion',
    h1: 'Servicio Tecnico en Refrigeracion en Mendoza',
    descriptor: 'Domiciliaria • Comercial • Automotriz • Urgencias',
    subtitle:
      'Tecnico matriculado con atencion en toda Mendoza. Respuesta rapida por WhatsApp, servicio a domicilio y atencion profesional.',
    locationLabel: 'Luzuriaga, Maipu - cobertura en Gran Mendoza',
  },
  contact: {
    whatsapp: '2616956104',
    phoneLabel: '261 695-6104',
    responseTimeLabel: 'Respuesta rapida por WhatsApp',
  },
  cta: {
    whatsappMessage:
      'Hola, necesito servicio tecnico de refrigeracion.\nEstoy en [zona].\nEl equipo es: [heladera / lavarropas / aire / automotor].\nEl problema es: [detalle].\nPodes indicarme disponibilidad?',
    primaryLabel: 'Solicitar servicio por WhatsApp',
    servicesLabel: 'Consultar por WhatsApp este servicio',
    finalLabel: 'Hablar ahora con A.M.R por WhatsApp',
  },
  legal: {
    urgency: 'Urgencias segun disponibilidad.',
    warranty: 'Garantia segun tipo de trabajo.',
  },
  heroChecks: [
    'Tecnico matriculado',
    'Cobertura en toda Mendoza',
    'Urgencias segun disponibilidad',
  ],
  trustPoints: [
    'Tecnico matriculado',
    'Toda Mendoza',
    'Urgencias segun disponibilidad',
    'Factura y medios de pago',
    'Respuesta rapida por WhatsApp',
  ],
  serviceCategories: [
    {
      title: 'Domiciliario',
      priority: 'high',
      items: [
        'Heladeras familiares',
        'Lavarropas',
        'Carga de gas refrigerante',
        'Diagnostico y mantenimiento',
      ],
    },
    {
      title: 'Automotriz',
      priority: 'high',
      items: [
        'Aire acondicionado automotor',
        'Calefaccion automotor',
        'Carga de gas',
        'Revision y diagnostico',
      ],
    },
    {
      title: 'General y Comercial',
      priority: 'base',
      items: [
        'Refrigeracion comercial',
        'Atencion tecnica general',
        'Servicio a domicilio',
        'Urgencias segun disponibilidad',
      ],
    },
  ],
  whyChoosePoints: [
    {
      title: 'Diagnostico claro',
      description: 'Explicacion directa del problema y pasos concretos para resolverlo.',
    },
    {
      title: 'Experiencia comprobable',
      description: 'Mas de 12 anios de trabajo tecnico en refrigeracion.',
    },
    {
      title: 'Atencion profesional',
      description: 'Servicio tecnico matriculado con foco en resolucion y orden.',
    },
    {
      title: 'Cobertura real',
      description: 'Atencion en Maipu y Gran Mendoza coordinada por WhatsApp.',
    },
    {
      title: 'Garantia condicionada',
      description: 'Garantia segun tipo de trabajo y estado del equipo.',
    },
  ],
  zones: [
    'Maipu',
    'Capital',
    'Guaymallen',
    'Godoy Cruz',
    'Lujan de Cuyo',
    'Las Heras',
    'Chacras de Coria',
  ],
  zonesCoverageText: 'Toda Mendoza, sujeto a disponibilidad de agenda.',
  gallery: [
    {
      src: '/images/placeholder-work.svg',
      alt: 'Trabajo tecnico en heladera domiciliaria',
    },
    {
      src: '/images/placeholder-work.svg',
      alt: 'Mantenimiento de equipo de refrigeracion comercial',
    },
    {
      src: '/images/placeholder-work.svg',
      alt: 'Revision de sistema de aire automotriz',
    },
    {
      src: '/images/placeholder-work.svg',
      alt: 'Diagnostico tecnico a domicilio en Mendoza',
    },
  ],
  testimonials: [
    {
      name: 'Cliente residencial',
      quote: 'Resolvio el problema de la heladera en el mismo dia y explico todo claro.',
      area: 'Maipu',
    },
    {
      name: 'Comercio local',
      quote: 'Muy buena atencion y seguimiento. Quedo funcionando como corresponde.',
      area: 'Godoy Cruz',
    },
    {
      name: 'Cliente automotriz',
      quote: 'Revisaron el aire del auto, me explicaron la falla y lo dejaron funcionando.',
      area: 'Guaymallen',
    },
  ],
  footer: {
    addressReference: 'Sarmiento y Juan V. Gonzalez, Luzuriaga, Maipu, Mendoza.',
    coverageLabel: 'Cobertura: Gran Mendoza y alrededores.',
    businessLabel: 'Servicio tecnico de refrigeracion domiciliaria, comercial y automotriz.',
  },
  seo: {
    title: 'A.M.R Refrigeracion en Mendoza | Servicio Tecnico por WhatsApp',
    description:
      'Servicio tecnico de refrigeracion en Mendoza para hogar, comercio y automotor. Contacto rapido por WhatsApp.',
    keywords:
      'servicio tecnico refrigeracion mendoza, reparacion heladeras maipu, aire acondicionado automotor mendoza, tecnico matriculado refrigeracion',
  },
};
