// Enlaces de navegación. Textos EXACTOS del original (index.html).

export const mainNav = [
  { to: '/', label: 'Inicio' },
  { to: '/servicios', label: 'Servicios', dropdown: 'services' },
  { to: '/proyectos', label: 'Proyectos' },
  { to: '/quienes-somos', label: 'Quienes somos' },
  { to: '/blog', label: 'Blog' },
  { to: '/contacto', label: 'Contacto' },
]

// Dropdown de "Servicios": 6 items, mismo orden y textos que el <ul class="dropdown-menu">
// de index.html. (Conceptualización NO aparece en el dropdown del original.)
export const services = [
  { to: '/servicios/diseno-ingenieria', label: 'Diseño e Ingeniería' },
  { to: '/servicios/instalacion', label: 'Instalación y Puesta en Marcha' },
  { to: '/servicios/mantenimiento', label: 'Mantenimiento Preventivo y Correctivo' },
  { to: '/servicios/auditoria', label: 'Gestión de Riesgos y Auditoría Integral' },
  { to: '/servicios/diagnostico', label: 'Diagnóstico y Análisis de Requerimientos' },
  { to: '/servicios/transferencia-conocimiento', label: 'Capacitación y Transferencia del Conocimiento' },
]

// Enlaces del widget "Servicios" del footer (textos largos del original).
export const footerServices = [
  { to: '/servicios/diseno-ingenieria', label: 'Diseño e Ingeniería de Sistemas Contra Incendios' },
  { to: '/servicios/instalacion', label: 'Instalación y Puesta en Marcha' },
  { to: '/servicios/mantenimiento', label: 'Mantenimiento Preventivo y Correctivo' },
  { to: '/servicios/auditoria', label: 'Gestión de Riesgos y Auditoría Integral' },
  { to: '/servicios/diagnostico', label: 'Diagnóstico y Análisis de Requerimientos' },
]
