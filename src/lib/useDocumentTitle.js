// Título del documento por ruta. Valores tomados de los <title> del sitio original.

const FIXED = {
  '/': 'AFC PRO FIRE - Expertos en sistemas contra incendios',
  '/servicios': 'SERVICIOS - AFC PRO FIRE',
  '/proyectos': 'AFC PRO FIRE - Galería de Proyectos',
  '/quienes-somos': 'AFC Professional Fire | Colombia',
  '/contacto': 'AFC PRO FIRE - CONTACTO',
  '/blog': 'AFC PRO FIRE - BLOG',
}

const SERVICE_TITLES = {
  'diseno-ingenieria': 'AFC Pro Fire | Diseño e Ingeniería de Sistemas Contra Incendios',
  instalacion: 'AFC Pro Fire | Instalación & Puesta en Marcha',
  mantenimiento: 'AFC Pro Fire | Mantenimiento Preventivo y Correctivo',
  auditoria: 'AFC Pro Fire | Gestión de Riesgos & Auditoría Integral',
  diagnostico: 'AFC Pro Fire | Diagnóstico y Análisis de Requerimientos',
  'transferencia-conocimiento': 'AFC Professional Fire | Capacitación y Transferencia del Conocimiento',
  conceptualizacion: 'AFC Professional Fire | Conceptualización y Diseño de Soluciones',
}

const FALLBACK = 'AFC PRO FIRE'

export function routeTitle(pathname, { blogPosts } = {}) {
  if (FIXED[pathname]) return FIXED[pathname]

  if (pathname.startsWith('/servicios/')) {
    const slug = pathname.split('/')[2]
    return SERVICE_TITLES[slug] || 'AFC PRO FIRE - Servicios'
  }

  if (pathname.startsWith('/blog/')) {
    const slug = pathname.split('/')[2]
    const post = Array.isArray(blogPosts) ? blogPosts.find((p) => p.slug === slug) : null
    if (post) return post.metaTitle || `BLOG AFC PRO FIRE — ${post.title}`
    return 'AFC PRO FIRE - BLOG'
  }

  return FALLBACK
}

export default routeTitle
