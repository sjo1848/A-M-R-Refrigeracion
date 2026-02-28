import type { LandingContent } from './types';

export const amrContent: LandingContent = {
  brand: {
    name: 'A.M.R Refrigeracion',
    h1: 'Servicio Tecnico Profesional de Refrigeracion en Mendoza',
    descriptor: 'Hogar • Comercio • Aire Automotor',
    subtitle:
      'Tecnico matriculado. Diagnostico y presupuesto por WhatsApp.',
    locationLabel: 'Luzuriaga, Maipu - cobertura en Gran Mendoza',
  },
  contact: {
    whatsapp: '2616956104',
    phoneLabel: '261 695-6104',
    responseTimeLabel: 'Respuesta por WhatsApp',
  },
  cta: {
    whatsappMessage:
      'Hola, necesito servicio tecnico.\nEstoy en [zona].\nEquipo: [tipo].\nFalla: [detalle].',
    primaryLabel: 'Pedir presupuesto por WhatsApp',
    servicesLabel: 'Pedir presupuesto por WhatsApp',
    finalLabel: 'Pedir presupuesto por WhatsApp',
    callLabel: 'Llamar ahora',
  },
  legal: {
    urgency: 'Urgencias segun disponibilidad.',
    warranty: 'Garantia segun tipo de trabajo.',
    serviceConditions: [
      'Trabajo solo con diagnostico y aprobacion previa.',
      'Visitas y tiempos sujetos a agenda, zona y repuestos.',
      'Garantia segun reparacion y estado del equipo.',
    ],
    commercialNotice:
      'Condiciones claras antes de iniciar.',
  },
  heroChecks: [
    'Tecnico matriculado',
    'Cobertura en toda Mendoza',
    'Urgencias segun disponibilidad',
  ],
  trustPoints: [
    'Tecnico matriculado',
    'Presupuesto claro antes de trabajar',
    'Cobertura en Gran Mendoza',
    'Factura y medios de pago',
  ],
  proofMetrics: [
    {
      value: '12+',
      label: 'Anios de trabajo tecnico',
      detail: 'Experiencia real en refrigeracion.',
    },
    {
      value: '3',
      label: 'Lineas de servicio activas',
      detail: 'Residencial, comercial y automotor.',
    },
    {
      value: 'Gran Mendoza',
      label: 'Cobertura operativa',
      detail: 'Maipu y zonas cercanas.',
    },
    {
      value: 'WhatsApp + Llamada',
      label: 'Canales de contacto',
      detail: 'Contacto directo.',
    },
  ],
  trustBadges: [
    {
      title: 'Tecnico matriculado',
      detail: 'Trabajo formal y profesional.',
    },
    {
      title: 'Presupuesto antes de intervenir',
      detail: 'Aprobacion previa del cliente.',
    },
    {
      title: 'Factura y medios de pago',
      detail: 'Operacion formal.',
    },
    {
      title: 'Garantia segun trabajo',
      detail: 'Garantia por tipo de reparacion.',
    },
  ],
  processSteps: [
    {
      step: 'Paso 1',
      title: 'Contacto y prediagnostico',
      description:
        'Envias zona y falla por WhatsApp.',
    },
    {
      step: 'Paso 2',
      title: 'Visita tecnica',
      description:
        'Revisamos el equipo y causa de la falla.',
    },
    {
      step: 'Paso 3',
      title: 'Presupuesto y aprobacion',
      description:
        'Informamos costo y alcance para aprobar.',
    },
    {
      step: 'Paso 4',
      title: 'Reparacion y garantia',
      description:
        'Reparamos, probamos y cerramos con garantia.',
    },
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
  servicesDetails: [
    {
      slug: 'reparacion-heladeras-mendoza',
      title: 'Reparacion de Heladeras en Mendoza',
      seoTitle: 'Servicio Tecnico de Heladeras en Mendoza | A.M.R Refrigeracion',
      seoDescription: 'Reparacion de heladeras familiares y comerciales a domicilio en el Gran Mendoza. Diagnostico claro y profesional.',
      description: 'Reparacion de heladeras familiares y comerciales con diagnostico claro.',
      features: [
        'Reparacion de plaquetas electronicas',
        'Carga de gas refrigerante',
        'Desbloqueo de sistemas No Frost',
        'Cambio de termostatos y sensores'
      ],
      relatedGalleryImages: [
        'amr-01.jpg'
      ],
      caseStudy: {
        problem: 'Heladera sin frio y con ciclos inestables.',
        solution: 'Diagnostico electrico y ajuste del circuito de refrigeracion.',
        result: 'Recupero temperatura normal y funcionamiento estable.',
      },
    },
    {
      slug: 'aire-acondicionado-automotor-mendoza',
      title: 'Aire Acondicionado Automotor en Mendoza',
      seoTitle: 'Aire Acondicionado Automotor en Mendoza | A.M.R',
      seoDescription: 'Carga de gas y reparacion de aire acondicionado automotriz en Mendoza. Atendemos autos particulares y flotas comerciales.',
      description: 'Especialistas en aire automotor: fugas, carga de gas y reparacion.',
      features: [
        'Diagnostico de fugas con herramientas de precision',
        'Carga de gas refrigerante R134a',
        'Reparacion de compresores y condensadores',
        'Limpieza de circuitos y filtros de habitaculo'
      ],
      relatedGalleryImages: [
        'amr-03.jpg',
        'amr-04.jpg'
      ],
      caseStudy: {
        problem: 'Aire automotor sin enfriamiento por fuga de gas.',
        solution: 'Deteccion de fuga, vacio tecnico y recarga controlada.',
        result: 'Sistema enfriando parejo con presiones dentro de rango.',
      },
    },
    {
      slug: 'reparacion-lavarropas-mendoza',
      title: 'Reparacion de Lavarropas Automaticos',
      seoTitle: 'Reparacion de Lavarropas en Mendoza | Tecnico a Domicilio',
      seoDescription: 'Servicio tecnico capacitado de lavarropas automaticos en Mendoza. Solucionamos fallas de centrifugado, carga de agua y problemas electronicos.',
      description: 'Reparacion de lavarropas automaticos con presupuesto en sitio.',
      features: [
        'Cambio de rulemanes y retenes',
        'Reparacion y sustitucion de bomba de desagote',
        'Diagnostico de plaqueta principal',
        'Ajuste de presostatos y electrovalvulas'
      ],
      relatedGalleryImages: [
        'amr-02.jpg'
      ],
      caseStudy: {
        problem: 'Lavarropas sin desagote y corte durante el ciclo.',
        solution: 'Revision de bomba y correccion del sistema de desagote.',
        result: 'Ciclo completo restablecido y equipo operativo.',
      },
    }
  ],
  technicalScope: [
    {
      title: 'Heladeras y freezers',
      points: [
        'Enfria poco o no arranca',
        'Perdida de gas y carga refrigerante',
        'No frost con exceso de hielo',
      ],
    },
    {
      title: 'Refrigeracion comercial',
      points: [
        'Heladeras y exhibidoras comerciales',
        'Control de temperatura inestable',
        'Revision de compresor y ventilacion',
      ],
    },
    {
      title: 'Aire automotriz',
      points: [
        'Baja eficiencia de enfriamiento',
        'Carga y control de gas',
        'Revision de perdidas y presiones',
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
      description: 'Atencion en Maipu y Gran Mendoza.',
    },
    {
      title: 'Garantia condicionada',
      description: 'Garantia segun trabajo realizado.',
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
  zonesCoverageText:
    'Cobertura en Gran Mendoza. Visitas segun zona y agenda.',
  gallery: [
    {
      src: 'amr-01.jpg',
      alt: 'Tecnico de A.M.R en mantenimiento de sistemas de aire comercial',
    },
    {
      src: 'amr-02.jpg',
      alt: 'Servicio tecnico de aire acondicionado split en instalacion domiciliaria',
    },
    {
      src: 'amr-03.jpg',
      alt: 'Trabajo de aire acondicionado automotor con equipo de diagnostico en via publica',
    },
    {
      src: 'amr-04.jpg',
      alt: 'Diagnostico de refrigeracion automotriz en camion de flota',
    },
  ],
  testimonials: [
    {
      name: 'Cliente residencial',
      quote: 'Me resolvio la heladera en el dia.',
      area: 'Maipu',
      service: 'Heladeras',
    },
    {
      name: 'Comercio local',
      quote: 'Trabajo claro y buen seguimiento.',
      area: 'Godoy Cruz',
      service: 'Refrigeracion comercial',
    },
    {
      name: 'Cliente automotriz',
      quote: 'Revisaron el aire y quedo funcionando.',
      area: 'Guaymallen',
      service: 'Aire automotor',
    },
  ],
  faq: [
    {
      question: 'Atienden urgencias?',
      answer:
        'Si, se atienden urgencias segun disponibilidad de agenda y ubicacion dentro de Mendoza.',
    },
    {
      question: 'Se informa presupuesto antes de reparar?',
      answer:
        'Si. Luego del diagnostico se informa costo estimado, alcance tecnico y condiciones para aprobacion previa.',
    },
    {
      question: 'Ofrecen garantia?',
      answer:
        'Si. La garantia se define segun tipo de trabajo realizado, repuesto aplicado y estado previo del equipo.',
    },
    {
      question: 'Que informacion conviene enviar para agilizar?',
      answer:
        'Zona, tipo de equipo, falla principal y fotos o video corto del problema para acelerar el prediagnostico.',
    },
  ],
  footer: {
    addressReference: 'Sarmiento y Juan V. Gonzalez, Luzuriaga, Maipu, Mendoza.',
    coverageLabel: 'Cobertura: Gran Mendoza y alrededores.',
    businessLabel: 'Servicio tecnico de refrigeracion en Mendoza.',
  },
  seo: {
    title: 'A.M.R Refrigeracion en Mendoza | Tecnico Matriculado',
    description:
      'Servicio tecnico profesional de refrigeracion en Mendoza para hogar, comercio y automotor. Diagnostico y presupuesto por WhatsApp.',
    keywords:
      'servicio tecnico refrigeracion mendoza, reparacion heladeras maipu, aire acondicionado automotor mendoza, tecnico matriculado refrigeracion',
  },
};
