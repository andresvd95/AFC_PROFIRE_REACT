// Contenido de las 7 páginas de detalle de servicio, transcrito 1:1 de:
//  diseno-Ingenieria.html, instalacion.html, mantenimiento.html, auditoria.html,
//  diagnostico.html, conceptualizacion.html, transferenciaConocimiento.html
//
// bannerImg conserva la ruta LITERAL del original (varias apuntan a
// page-titles/incendio.jpg y capacitacion.jpg, que no existen en el sitio original:
// se replica la referencia rota — ver docs/PRD.md §8).
// metaTitle: del <title> de cada HTML original (ver scripts/blog-meta.json).

export const servicesDetail = [
  {
    slug: 'diseno-ingenieria',
    title: 'Diseño e Ingeniería de Sistemas Contra Incendios',
    metaTitle: 'AFC Pro Fire | Diseño e Ingeniería de Sistemas Contra Incendios',
    desc: null,
    bannerImg: '/assets/images/page-titles/incendio.jpg',
    bannerAlt: 'Diseño e Ingeniería',
    intro:
      'En <strong>AFC Pro Fire</strong> concebimos la protección contra incendios como un proceso integral. Diseñamos sistemas a la medida del riesgo y la normativa, garantizando desempeño, confiabilidad y facilidad de mantenimiento.',
    galleryImg: '/assets/images/services/diseño.png',
    blocksInGalleryRow: true,
    blocks: [
      {
        title: 'Sistemas de Rociadores Automáticos',
        html: 'Diseño e instalación de sistemas automáticos de rociadores que actúan de forma inmediata para controlar incendios y proteger vidas, infraestructura y activos críticos.',
      },
      {
        title: 'Detección y Alarma de Incendios',
        html: 'Implementación de sistemas de detección temprana y alarmas que permiten una respuesta rápida ante conatos de incendio, cumpliendo con normativas vigentes.',
      },
      {
        title: 'Extinción con Agentes Limpios',
        html: 'Soluciones de supresión sin residuos, ideales para áreas sensibles como centros de datos, salas eléctricas y espacios con equipos electrónicos.',
      },
      {
        title: 'Extinción con CO<sub>2</sub>',
        html: 'Sistemas de extinción con dióxido de carbono para riesgos especiales, diseñados para sofocar incendios de manera eficaz sin afectar equipos industriales.',
      },
      {
        title: 'Sistemas de Espuma',
        html: 'Instalación de sistemas de espuma para la protección de áreas con líquidos inflamables, como tanques, hangares, plantas o zonas industriales.',
      },
      {
        title: 'Bombeo Contra Incendio',
        html: 'Diseño y montaje de sistemas de bombeo certificados que garantizan caudal y presión adecuados para una respuesta eficiente ante emergencias.',
      },
      {
        title: 'Cálculo y Especificación',
        html: 'Ingeniería especializada para cálculo hidráulico, selección de equipos y especificación técnica, asegurando eficiencia y cumplimiento normativo.',
      },
    ],
    benefits: [],
  },

  {
    slug: 'instalacion',
    title: 'Instalación & Puesta en Marcha',
    metaTitle: 'AFC Pro Fire | Instalación & Puesta en Marcha',
    desc: 'Supervisamos y ejecutamos proyectos de instalación de sistemas contra incendios, realizando las pruebas y la puesta en servicio de todos los subsistemas para entregar una operación confiable desde el día uno.',
    bannerImg: '/assets/images/page-titles/incendio.jpg',
    bannerAlt: 'Instalación y Puesta en Marcha',
    intro:
      'En <strong>AFC Pro Fire</strong> ejecutamos la instalación de sistemas contra incendios con supervisión experta, control de calidad y cumplimiento normativo. Cerramos el ciclo con pruebas integrales y comisionamiento para asegurar que cada componente funcione como fue diseñado.',
    galleryImg: '/assets/images/services/instalacion.png',
    blocks: [
      {
        title: 'Supervisión y Ejecución de Proyectos de Instalación',
        html: 'Acompañamiento técnico integral durante la ejecución del proyecto, garantizando que la instalación se realice conforme a planos, especificaciones y normativas aplicables.',
      },
      {
        title: 'Pruebas y Puesta en Servicio de Todos los Sistemas',
        html: 'Realización de pruebas funcionales, operativas y de desempeño para asegurar que todos los sistemas contra incendio funcionen correctamente antes de su entrega final.',
      },
    ],
    benefits: [
      { icon: 'icon-shield-check', title: 'Cumplimiento' },
      { icon: 'icon-clock2', title: 'Arranque Seguro' },
      { icon: 'icon-file', title: 'Entrega Formal' },
    ],
  },

  {
    slug: 'mantenimiento',
    title: 'Mantenimiento Preventivo y Correctivo',
    metaTitle: 'AFC Pro Fire | Mantenimiento Preventivo y Correctivo',
    desc: 'Programas de mantenimiento a la medida, inspecciones periódicas con pruebas y reparaciones, y atención de emergencias para asegurar la continuidad operativa de tus sistemas contra incendios.',
    bannerImg: '/assets/images/page-titles/incendio.jpg',
    bannerAlt: 'Mantenimiento Preventivo y Correctivo',
    intro:
      'En <strong>AFC Pro Fire</strong> mantenemos tus sistemas contra incendios en estado óptimo. Nuestros planes combinan rutinas preventivas, inspecciones y pruebas bajo NFPA 25, NFPA 72 y soporte correctivo, con reportes y trazabilidad para auditorías.',
    galleryImg: '/assets/images/services/mantenimiento.png',
    blocks: [
      {
        title: 'Programas de Mantenimiento Adaptados',
        html: 'Planes de mantenimiento preventivo y correctivo diseñados según el tipo de sistema, nivel de riesgo y operación del cliente, asegurando continuidad y confiabilidad.',
      },
      {
        title: 'Inspecciones, Pruebas y Reparaciones',
        html: 'Ejecución periódica de inspecciones técnicas, pruebas funcionales y reparaciones oportunas para garantizar el correcto funcionamiento de los sistemas contra incendio.',
      },
      {
        title: 'Atención de Emergencias',
        html: 'Respuesta técnica rápida ante fallas o eventos críticos, con personal especializado disponible para restablecer la operación y mitigar riesgos.',
      },
    ],
    benefits: [
      { icon: 'icon-clock2', title: 'Disponibilidad', desc: 'Menos paros y mayor confiabilidad.' },
      { icon: 'icon-shield-check', title: 'Cumplimiento', desc: 'Rutinas conforme a NFPA 25.' },
    ],
  },

  {
    slug: 'auditoria',
    title: 'Gestión de Riesgos & Auditoría Integral',
    metaTitle: 'AFC Pro Fire | Gestión de Riesgos & Auditoría Integral',
    desc: 'Evaluamos el riesgo, diseñamos planes de emergencia y contingencia, auditamos sistemas existentes e intervenimos la correcta implementación para asegurar cumplimiento y efectividad.',
    bannerImg: '/assets/images/page-titles/incendio.jpg',
    bannerAlt: 'Gestión de Riesgos & Auditoría',
    intro:
      'En <strong>AFC Pro Fire</strong> gestionamos el riesgo de incendio de forma integral: identificamos escenarios, medimos su impacto en personas y activos, verificamos la eficacia de los controles y guiamos mejoras priorizadas con foco en continuidad operativa y cumplimiento normativo.',
    galleryImg: '/assets/images/services/gestion.png',
    blocks: [
      {
        title: 'Evaluación de Riesgos',
        html: 'Identificación y análisis de amenazas, vulnerabilidades y niveles de exposición para definir medidas de control y recomendaciones técnicas según el tipo de operación.',
      },
      {
        title: 'Planes de Emergencia y Contingencia',
        html: 'Elaboración y actualización de planes de respuesta ante emergencias, con protocolos, rutas de evacuación, roles, recursos y procedimientos para escenarios críticos.',
      },
      {
        title: 'Auditoría de Sistemas de Protección Contra Incendio',
        html: 'Revisión técnica del estado y desempeño de los sistemas instalados, verificando cumplimiento normativo, condiciones operativas y oportunidades de mejora.',
      },
      {
        title: 'Interventoría de Implementación',
        html: 'Supervisión independiente de la ejecución del proyecto para asegurar calidad, trazabilidad y cumplimiento de especificaciones, cronograma y normas aplicables.',
      },
    ],
    benefits: [
      { icon: 'icon-shield-check', title: 'Cumplimiento', desc: 'Mejoras alineadas a normativa y políticas HSE.' },
      { icon: 'icon-file', title: 'Trazabilidad', desc: 'Reportes y evidencias listas para auditorías.' },
      { icon: 'icon-piggy-bank', title: 'Optimización', desc: 'Prioridad a CAPEX/OPEX con mayor impacto.' },
    ],
  },

  {
    slug: 'diagnostico',
    title: 'Diagnóstico y Análisis de Requerimientos',
    metaTitle: 'AFC Pro Fire | Diagnóstico y Análisis de Requerimientos',
    desc: 'Entrevistas y levantamiento de información, análisis de brechas y oportunidades, e identificación de los desafíos técnicos y operativos para definir un alcance claro y priorizado.',
    bannerImg: '/assets/images/page-titles/incendio.jpg',
    bannerAlt: 'Diagnóstico y Análisis de Requerimientos',
    intro:
      'En <strong>AFC Pro Fire</strong> iniciamos cada proyecto con un entendimiento profundo del contexto del cliente. Aplicamos técnicas de descubrimiento, mapeo de procesos y análisis de datos para traducir necesidades en requerimientos medibles, con trazabilidad y prioridades consensuadas.',
    galleryImg: '/assets/images/services/diagnostico.png',
    blocks: [
      {
        title: 'Entrevistas y Levantamiento Detallado',
        html: 'Recolección de información técnica y operativa mediante entrevistas y visitas en sitio, permitiendo comprender los procesos, riesgos y condiciones reales de la instalación.',
      },
      {
        title: 'Análisis de Brechas y Oportunidades',
        html: 'Evaluación comparativa entre la situación actual y los requisitos normativos o técnicos, identificando brechas, mejoras y oportunidades de optimización.',
      },
      {
        title: 'Desafíos Técnicos y Operativos',
        html: 'Identificación de retos técnicos, restricciones operativas y condiciones críticas que deben ser consideradas para una implementación segura y eficiente.',
      },
    ],
    benefits: [
      { icon: 'icon-target', title: 'Claridad', desc: 'Requerimientos medibles y trazables.' },
      { icon: 'icon-layers', title: 'Prioridad', desc: 'Enfoque en riesgo y valor.' },
      { icon: 'icon-road', title: 'Hoja de Ruta', desc: 'Pasos concretos y responsables.' },
    ],
  },

  {
    slug: 'conceptualizacion',
    title: 'Conceptualización y Diseño de Soluciones',
    metaTitle: 'AFC Professional Fire | Conceptualización y Diseño de Soluciones',
    desc: 'Desarrollo de propuestas técnicas y económicas, estudios de viabilidad y rentabilidad, y modelado y simulación de escenarios para tomar decisiones con datos y optimizar la inversión.',
    bannerImg: '/assets/images/page-titles/incendio.jpg',
    bannerAlt: 'Conceptualización y Diseño de Soluciones',
    intro:
      'Transformamos necesidades en soluciones viables y rentables. Partimos de objetivos de negocio y requisitos técnicos para diseñar alternativas comparables, estimar costos y beneficios a lo largo del ciclo de vida y validar el desempeño mediante simulaciones y criterios normativos.',
    galleryImg: '/assets/images/services/conceptualizacion.png',
    blocks: [
      { title: 'Desarrollo de Propuestas Técnicas y Económicas', html: '' },
      { title: 'Estudios de Viabilidad y Rentabilidad', html: '' },
      { title: 'Modelado y Simulación de Escenarios', html: '' },
    ],
    benefits: [
      { icon: 'icon-target', title: 'Alineación', desc: 'Soluciones enfocadas en objetivos y riesgo.' },
      { icon: 'icon-layers', title: 'Rigurosidad', desc: 'Comparativos claros y trazables.' },
      { icon: 'icon-piggy-bank', title: 'Valor', desc: 'Optimización de CAPEX y OPEX.' },
    ],
  },

  {
    slug: 'transferencia-conocimiento',
    title: 'Capacitación y Transferencia del Conocimiento',
    metaTitle: 'AFC Professional Fire | Capacitación y Transferencia del Conocimiento',
    desc: 'Programas de formación operativa, mantenimiento y respuesta a emergencias.',
    bannerImg: '/assets/images/page-titles/capacitacion.jpg',
    bannerAlt: 'Capacitación y Transferencia del Conocimiento',
    intro:
      'Formamos a tus equipos para operar, mantener y responder ante emergencias con seguridad y eficacia. Nuestros programas integran normativa NFPA, prácticas de campo y simulaciones, para que cada persona sepa qué hacer antes, durante y después de un evento.',
    galleryImg: '/assets/images/services/capacitacion.png',
    galleryImgClass: 'w-100',
    blocks: [
      {
        title: 'Formación Operativa',
        html: 'Procedimientos seguros, uso de extintores (método PASS), paneles de alarma, rociadores y equipos auxiliares.',
      },
      {
        title: 'Mantenimiento y Pruebas (NFPA)',
        html: 'Rutinas de inspección, prueba y mantenimiento: NFPA 25, NFPA 72 y protocolos de reporte.',
      },
      {
        title: 'Respuesta a Emergencias',
        html: 'Brigadas, roles, comunicación, evacuación, control inicial del conato y lecciones aprendidas.',
      },
    ],
    benefits: [
      { icon: 'icon-target', title: 'Efectividad', desc: 'Equipos confiados y entrenados en lo crítico.' },
      { icon: 'icon-layers', title: 'Normativa', desc: 'Basado en estándares NFPA vigentes.' },
      { icon: 'icon-piggy-bank', title: 'Continuidad', desc: 'Menos incidentes, menos paradas no planificadas.' },
    ],
  },
]

export const serviceSlugs = servicesDetail.map((s) => s.slug)
export const getServiceDetail = (slug) => servicesDetail.find((s) => s.slug === slug)
