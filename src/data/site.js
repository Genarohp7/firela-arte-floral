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
      roseSoft: '#DBCCD5',
    },
  },

  navigation: [
    { label: 'Quiénes somos', href: '#quienes-somos' },
    { label: 'Lo que hacemos', href: '#lo-que-hacemos' },
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
    defaultTitle: 'FIRELA Arte floral | Diseño floral con elegancia y sensibilidad',
    titleTemplate: '%s | FIRELA Arte floral',
    defaultDescription:
      'FIRELA crea arreglos florales y propuestas florales con una presentación elegante, cuidada y pensada para momentos especiales.',
  },

  home: {
    eyebrow: 'Arte floral con intención y elegancia',
    title: 'Flores diseñadas para regalar, acompañar y hacer memorable cada momento.',
    description:
      'En FIRELA creamos arreglos florales con una estética cuidada, atención al detalle y una presentación elegante, para que cada diseño comunique algo especial desde la primera vista.',
    primaryCta: {
      label: 'Cotizar por WhatsApp',
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
      'FIRELA es una marca dedicada al diseño floral, creada con una visión sensible, profesional y estética. Cada arreglo nace con la intención de transmitir emociones a través de flores bien elegidas, una composición armoniosa y una presentación que se sienta especial.',
    highlights: [
      'Diseños florales con una estética cuidada y elegante',
      'Atención cercana para entender la intención detrás de cada pedido',
      'Presentación pensada para que cada arreglo se sienta especial',
      'Trabajo realizado con detalle, dedicación y sensibilidad visual',
    ],
  },

  services: {
    title: 'Lo que hacemos',
    intro:
      'Creamos propuestas florales para regalo, detalles especiales y composiciones con mayor presencia visual, cuidando siempre la armonía del diseño y la intención del momento.',
    items: [
      {
        title: 'Arreglos florales personalizados',
        description:
          'Diseños pensados para adaptarse al estilo, color y sentimiento que quieres expresar.',
      },
      {
        title: 'Detalles florales para regalar',
        description:
          'Opciones elegantes para sorprender con flores que se sientan bien pensadas y bien presentadas.',
      },
      {
        title: 'Propuestas florales para ocasiones especiales',
        description:
          'Composiciones con más presencia visual para celebraciones, momentos importantes y espacios que merecen lucir diferentes.',
      },
    ],
  },

  gallery: {
    title: 'Galería',
    heading: 'Diseños florales con estilo, presencia y consulta directa.',
    description:
      'Aquí puedes explorar algunos estilos y propuestas florales de FIRELA. Si alguno te gusta, puedes escribirnos directamente por WhatsApp para conocer disponibilidad, personalización y opciones de entrega.',
    buttonLabel: 'Solicitar información general',
    helperText:
      'Si viste un diseño que te gustó, solo selecciónalo y pregúntanos por él.',
    items: [
      {
        id: 'gallery-01',
        title: 'Diseño floral elegante',
        description:
          'Una propuesta con presencia visual y una composición pensada para destacar desde el primer vistazo.',
        whatsappLabel: 'Diseño floral elegante',
      },
      {
        id: 'gallery-02',
        title: 'Detalle floral delicado',
        description:
          'Una opción con una imagen más sutil, ideal para regalar con intención y buena presentación.',
        whatsappLabel: 'Detalle floral delicado',
      },
      {
        id: 'gallery-03',
        title: 'Arreglo con intención especial',
        description:
          'Diseño floral pensado para momentos que merecen sentirse más personales y memorables.',
        whatsappLabel: 'Arreglo con intención especial',
      },
      {
        id: 'gallery-04',
        title: 'Composición floral protagonista',
        description:
          'Una propuesta con más carácter visual para ocasiones donde el arreglo debe hacerse notar.',
        whatsappLabel: 'Composición floral protagonista',
      },
      {
        id: 'gallery-05',
        title: 'Detalle floral para regalar',
        description:
          'Una pieza elegante para sorprender con flores bien presentadas y bien pensadas.',
        whatsappLabel: 'Detalle floral para regalar',
      },
      {
        id: 'gallery-06',
        title: 'Diseño floral de presencia suave',
        description:
          'Una propuesta con equilibrio visual y una estética cuidada para distintos momentos.',
        whatsappLabel: 'Diseño floral de presencia suave',
      },
    ],
  },

  finalCta: {
    eyebrow: 'Hablemos de tu idea',
    title: 'Cuéntanos qué tienes en mente y te ayudamos a encontrar el diseño ideal.',
    description:
      'Ya sea un regalo, un detalle especial o una propuesta floral con mayor presencia, podemos orientarte para crear algo que se vea bonito y también se sienta correcto para la ocasión.',
    primaryLabel: 'Solicitar información',
    secondaryLabel: 'Escribir por WhatsApp',
  },
}

export default siteData