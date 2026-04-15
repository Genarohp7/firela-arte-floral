const siteData = {
  brand: {
    name: 'FIRELA',
    fullName: 'FIRELA Arte floral',
    tagline: 'Arte floral',
    slogan: 'Si no sabes cómo; ¡dilo con flores!',
  },

  theme: {
    colors: {
      black: '#000000',
      white: '#ffffff',
      blueSoft: '#CCD7DB',
      blueDeep: '#A9BBC2',
    },
  },

  navigation: [
    { label: 'Quiénes somos', href: '#quienes-somos' },
    { label: 'Lo que hacemos', href: '#lo-que-hacemos' },
    { label: 'Nuestros clientes', href: '#nuestros-clientes' },
    { label: 'Galería', href: '#galeria' },
    { label: 'Contacto', href: '#contacto' },
  ],

  contact: {
    phoneDisplay: '55 48 74 66 73',
    whatsappMessage:
      'Hola, vi la página de FIRELA y me gustaría recibir información sobre un arreglo floral.',
  },

  socials: {
    facebook: 'https://www.facebook.com/share/182xkqn3i8/',
    instagram:
      'https://www.instagram.com/firela_artefloral?igsh=ZjE1ODM3aHc4MTVu',
  },

  seo: {
    defaultTitle: 'FIRELA Arte floral | Diseños florales con detalle y elegancia',
    titleTemplate: '%s | FIRELA Arte floral',
    defaultDescription:
      'FIRELA es una marca de arte floral enfocada en arreglos florales con diseño, detalle y sensibilidad para distintas ocasiones.',
  },

  home: {
    eyebrow: 'Diseño floral con identidad',
    title: 'Arreglos florales con detalle, elegancia y sensibilidad.',
    description:
      'Creamos composiciones florales pensadas para transmitir emociones con una estética cuidada, una presentación fina y una atención cercana.',
    primaryCta: {
      label: 'Solicitar información',
      href: '#contacto',
    },
    secondaryCta: {
      label: 'Ver galería',
      href: '#galeria',
    },
  },

  about: {
    title: 'Quiénes somos',
    description:
      'FIRELA es una marca dedicada al diseño y venta de arreglos florales, construida sobre principios de profesionalismo, responsabilidad, dedicación y calidad.',
    highlights: [
      'Diseños florales con enfoque estético y detallado',
      'Atención cuidada para cada cliente y ocasión',
      'Presentación elegante y sensibilidad en cada arreglo',
      'Compromiso con una forma de trabajo respetuosa con el entorno',
    ],
  },

  services: {
    title: 'Lo que hacemos',
    items: [
      {
        title: 'Arreglos florales personalizados',
        description:
          'Diseños creados con intención, cuidando forma, color y estilo para cada momento.',
      },
      {
        title: 'Detalles florales para regalo',
        description:
          'Opciones pensadas para sorprender con una presentación delicada y memorable.',
      },
      {
        title: 'Propuestas florales para ocasiones especiales',
        description:
          'Composiciones con una imagen más cuidada para celebraciones, fechas importantes y momentos significativos.',
      },
    ],
  },

  clients: {
    title: 'Nuestros clientes',
    description:
      'Trabajamos para personas que buscan regalar, decorar o expresar algo importante a través de flores con una presentación elegante.',
    items: [
      'Personas que quieren regalar algo especial',
      'Clientes que buscan arreglos con mejor presentación',
      'Celebraciones y ocasiones importantes',
      'Detalles florales con intención y estilo',
    ],
  },
}

export default siteData