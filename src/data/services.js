// Tarjetas de servicio para Home (index.html) y para /servicios (servicios.html).
// Los textos difieren entre ambas páginas; se guardan por separado.
// El markup con <br /> reproduce los saltos de línea del original (equal-height hack).

export const services = [
  {
    slug: 'diseno-ingenieria',
    to: '/servicios/diseno-ingenieria',
    img: '/assets/images/services/diseño.png',
    home: {
      title: 'Diseño e ingeniería de sistemas contra incendio',
      descHtml: 'Rociadores, detección y alarma, agentes limpios, CO₂, espuma, bombeo y cálculo hidráulico NFPA.',
    },
    servicios: {
      group: 1,
      title: 'Diseño e Ingeniería de Sistemas Contra Incendios:',
      descHtml:
        'Sistemas de rociadores automáticos. <br />' +
        'Sistemas de detección y alarma de incendios. <br />' +
        'Sistemas de extinción con agentes limpios. <br />' +
        'Sistemas de extinción con CO2. <br />' +
        'Sistemas de espuma. <br />' +
        'Sistemas de bombeo contra incendio. <br />' +
        'Cálculo de los sistemas y especificación de equipos. <br />',
    },
  },
  {
    slug: 'instalacion',
    to: '/servicios/instalacion',
    img: '/assets/images/services/instalacion.png',
    home: {
      title: 'Instalación y puesta en marcha',
      descHtml:
        'Montaje, supervisión certificada, pruebas funcionales e hidrostáticas y actas de entrega.<br /><br />',
    },
    servicios: {
      group: 1,
      title: 'Instalación y Puesta en Marcha:',
      descHtml:
        'Supervisión y ejecución de proyectos de instalación. <br />' +
        'Pruebas y puesta en servicio de todos los sistemas.<br /><br /><br /><br /><br /><br />',
    },
  },
  {
    slug: 'mantenimiento',
    to: '/servicios/mantenimiento',
    img: '/assets/images/services/mantenimiento.png',
    home: {
      title: 'Mantenimiento preventivo y correctivo',
      descHtml: 'Planes NFPA 25, NFPA 72, inspecciones, pruebas, y reparaciones.<br />',
    },
    servicios: {
      group: 1,
      title: 'Mantenimiento Preventivo y Correctivo:',
      descHtml:
        'Programas de mantenimiento adaptados a las necesidades del cliente.<br />' +
        'Inspecciones periódicas, pruebas y reparaciones.<br />' +
        'Atención de emergencias.<br /><br /><br /><br />',
    },
  },
  {
    slug: 'auditoria',
    to: '/servicios/auditoria',
    img: '/assets/images/services/gestion.png',
    home: {
      title: 'Gestión de riesgos y auditoría integral',
      descHtml:
        'Evaluación de riesgos, planes de emergencia y contingencia, auditoría e interventoría.<br /><br />',
    },
    servicios: {
      group: 1,
      title: 'Gestión de Riesgos y Auditoría Integral',
      descHtml:
        'Evaluación de riesgos.<br />' +
        'Elaboración de planes de emergencia y contingencia.<br />' +
        'Auditoría de Sistemas de Protección Contra Incendio existentes.<br />' +
        'Interventoría de implementación de Sistemas de Protección Contra Incendio.<br /><br />',
    },
  },
  {
    slug: 'diagnostico',
    to: '/servicios/diagnostico',
    img: '/assets/images/services/diagnostico.png',
    home: {
      title: 'Diagnóstico y análisis de requerimientos',
      descHtml: 'Entrevistas, levantamiento en sitio, análisis de brechas y definición de alcance.',
    },
    servicios: {
      group: 2,
      title: 'Diagnóstico y Análisis de Requerimientos:',
      descHtml:
        'Entrevistas y levantamiento de información detallado.<br />' +
        'Análisis de brechas y oportunidades. <br />' +
        'Identificación de los desafíos técnicos y operativos.<br /><br /><br />',
    },
  },
  {
    slug: 'transferencia-conocimiento',
    to: '/servicios/transferencia-conocimiento',
    img: '/assets/images/services/capacitacion.png',
    home: {
      title: 'Capacitación y transferencia del conocimiento',
      descHtml: 'Programas de formación operativa, mantenimiento y respuesta a emergencias.',
    },
  },
  {
    slug: 'conceptualizacion',
    to: '/servicios/conceptualizacion',
    img: '/assets/images/services/conceptualizacion.png',
    servicios: {
      group: 2,
      title: 'Conceptualización y Diseño de Soluciones:',
      descHtml:
        'Desarrollo de propuestas técnicas y económicas.<br />' +
        'Estudios de viabilidad y rentabilidad. <br />' +
        'Modelado y simulación de escenarios.<br /><br /><br /><br />',
    },
  },
]

// Home: carrusel 1 (principales) y carrusel 2 ("Líneas complementarias").
export const homeServicesMain = services.filter((s) =>
  ['diseno-ingenieria', 'instalacion', 'mantenimiento', 'auditoria'].includes(s.slug)
)
export const homeServicesComplementary = services.filter((s) =>
  ['diagnostico', 'transferencia-conocimiento'].includes(s.slug)
)

// Servicios: grupo 1 y grupo 2.
export const serviciosGroup1 = services.filter((s) => s.servicios?.group === 1)
export const serviciosGroup2 = services.filter((s) => s.servicios?.group === 2)
