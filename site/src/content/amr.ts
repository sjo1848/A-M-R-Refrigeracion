import type { LandingContent } from './types';

export const amrContent: LandingContent = {
  brand: {
    name: 'A.M.R Refrigeracion',
    h1: 'Servicio Tecnico en Refrigeracion en Mendoza',
    descriptor: 'Domiciliaria • Comercial • Automotriz • Urgencias',
    subtitle:
      'Tecnico matriculado con atencion en toda Mendoza. Diagnostico claro, presupuesto antes de intervenir y servicio a domicilio con seguimiento por WhatsApp.',
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
    callLabel: 'Llamar ahora',
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
    'Presupuesto claro antes de trabajar',
    'Cobertura real en Gran Mendoza',
    'Urgencias segun disponibilidad de agenda',
    'Factura y medios de pago',
    'Respuesta rapida por WhatsApp y llamada',
  ],
  processSteps: [
    {
      step: 'Paso 1',
      title: 'Contacto y prediagnostico',
      description:
        'El cliente envia zona, tipo de equipo y falla por WhatsApp para clasificar urgencia y definir visita.',
    },
    {
      step: 'Paso 2',
      title: 'Visita tecnica',
      description:
        'Se revisa el equipo en domicilio o comercio, validando estado general y causa probable de la falla.',
    },
    {
      step: 'Paso 3',
      title: 'Presupuesto y aprobacion',
      description:
        'Se informa costo estimado, alcance y tiempos. El trabajo se inicia solo con aprobacion del cliente.',
    },
    {
      step: 'Paso 4',
      title: 'Reparacion y garantia',
      description:
        'Se ejecuta la solucion acordada, se prueban resultados y se informa la garantia segun tipo de trabajo.',
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
  technicalScope: [
    {
      title: 'Heladeras y freezers',
      points: [
        'Enfria poco o no arranca',
        'Perdida de gas y carga refrigerante',
        'No frost con exceso de hielo',
        'Fallas de termostato o sensores',
      ],
    },
    {
      title: 'Refrigeracion comercial',
      points: [
        'Heladeras y exhibidoras comerciales',
        'Control de temperatura inestable',
        'Revision de compresor y ventilacion',
        'Mantenimiento preventivo programado',
      ],
    },
    {
      title: 'Aire automotriz',
      points: [
        'Baja eficiencia de enfriamiento',
        'Carga y control de gas',
        'Revision de perdidas y presiones',
        'Chequeo de calefaccion automotriz',
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
  zonesCoverageText:
    'Cobertura en Gran Mendoza con coordinacion por WhatsApp. Tiempos de visita sujetos a zona y disponibilidad.',
  gallery: [
    {
      src: '/images/gallery/amr-01.jpg',
      alt: 'Tecnico de A.M.R en mantenimiento de sistemas de aire comercial',
    },
    {
      src: '/images/gallery/amr-02.jpg',
      alt: 'Servicio tecnico de aire acondicionado split en instalacion domiciliaria',
    },
    {
      src: '/images/gallery/amr-03.jpg',
      alt: 'Trabajo de aire acondicionado automotor con equipo de diagnostico en via publica',
    },
    {
      src: '/images/gallery/amr-04.jpg',
      alt: 'Diagnostico de refrigeracion automotriz en camion de flota',
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
  faq: [
    {
      question: 'Cuanto tarda la respuesta inicial por WhatsApp?',
      answer:
        'La primera respuesta se gestiona por WhatsApp en el menor tiempo posible segun demanda y horario.',
    },
    {
      question: 'Atienden urgencias?',
      answer:
        'Si, se atienden urgencias segun disponibilidad de agenda y ubicacion dentro de Mendoza.',
    },
    {
      question: 'Se informa presupuesto antes de reparar?',
      answer:
        'Si. Luego del diagnostico se informa costo estimado y alcance del trabajo para aprobacion previa.',
    },
    {
      question: 'Ofrecen garantia?',
      answer:
        'Si, la garantia se define segun tipo de trabajo y estado previo del equipo.',
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
