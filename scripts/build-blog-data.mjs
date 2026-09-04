/*
 * Generador de src/data/blogPosts.js a partir de los 12 blogN.html del sitio
 * estático original (../afcprofire/). Ejecutar desde la raíz de afcprofire-react:
 *
 *   node scripts/build-blog-data.mjs
 *
 * Es un generador de un solo uso: el resultado (src/data/blogPosts.js) se versiona.
 * Requiere que exista ../afcprofire/ junto a este proyecto (no se toca, solo lectura).
 */
import { readFileSync, writeFileSync, existsSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = resolve(__dirname, '..')
const SRC_SITE = resolve(ROOT, '..', 'afcprofire')

if (!existsSync(SRC_SITE)) {
  console.error(`No se encontró el sitio original en: ${SRC_SITE}`)
  process.exit(1)
}

// Orden y slugs: el de aparición en blog.html (post 1 => blog12, ... post 12 => blog1).
const ORDER = [
  { file: 'blog12.html', slug: 'incendios-en-hospitales', metaKey: 'blog-12' },
  { file: 'blog11.html', slug: 'codigos-y-normas-de-alarmas', metaKey: 'blog-11' },
  { file: 'blog10.html', slug: 'tragedia-en-los-alpes', metaKey: 'blog-10' },
  { file: 'blog9.html', slug: 'mantenimiento-de-redes-contra-incendio', metaKey: 'blog-9' },
  { file: 'blog8.html', slug: 'primeros-auxilios-en-quemaduras', metaKey: 'blog-8' },
  { file: 'blog7.html', slug: 'preguntas-frecuentes-faq', metaKey: 'blog-7' },
  { file: 'blog6.html', slug: 'desmintiendo-mitos-comunes', metaKey: 'blog-6' },
  { file: 'blog5.html', slug: 'que-puedes-hacer-tu', metaKey: 'blog-5' },
  { file: 'blog4.html', slug: 'la-sinergia-de-la-seguridad', metaKey: 'blog-4' },
  { file: 'blog3.html', slug: 'tipos-de-proteccion', metaKey: 'blog-3' },
  { file: 'blog2.html', slug: 'triangulo-del-fuego', metaKey: 'blog-2' },
  { file: 'blog1.html', slug: 'proteccion-contra-incendios', metaKey: 'blog-1' },
]

// Mapa blogN.html -> slug, para reescribir enlaces internos dentro del cuerpo.
const FILE_TO_SLUG = Object.fromEntries(ORDER.map((o) => [o.file, o.slug]))
const EXTRA_LINKS = {
  'blog-triangulo-del-fuego.html': 'triangulo-del-fuego',
  'blog-proteccion-contra-incendios.html': 'proteccion-contra-incendios',
}

const meta = JSON.parse(readFileSync(resolve(ROOT, 'src/content/_meta.json'), 'utf8'))

const clean = (s) => s.replace(/\s+/g, ' ').trim()
const stripTags = (s) => clean(s.replace(/<[^>]+>/g, ' '))

/** Devuelve el índice del cierre balanceado del elemento `tag` que empieza en `openIdx`. */
function matchClose(html, openIdx, tag) {
  const re = new RegExp(`<${tag}\\b|</${tag}>`, 'gi')
  re.lastIndex = openIdx
  let depth = 0
  let m
  while ((m = re.exec(html))) {
    if (m[0][1] === '/') {
      depth--
      if (depth === 0) return m.index + m[0].length
    } else {
      depth++
    }
  }
  return -1
}

function extract(file) {
  const html = readFileSync(resolve(SRC_SITE, file), 'utf8')

  // <style> del <head>
  const styleM = html.match(/<style>([\s\S]*?)<\/style>/i)
  const styleCss = styleM ? styleM[1].trim() : ''

  // Título
  const titleM = html.match(/<h1[^>]*class="post__title"[^>]*>([\s\S]*?)<\/h1>/i)
  const title = stripTags(titleM[1])

  // Fecha
  const timeM = html.match(/<time[^>]*class="post__date[^"]*"[^>]*datetime="([^"]+)"[^>]*>([\s\S]*?)<\/time>/i)
  const dateTime = timeM[1].trim()
  const date = clean(timeM[2])

  // Imagen de encabezado (primer .post__img)
  const imgM = html.match(/class="post__img"[\s\S]*?<img[^>]*src="([^"]+)"/i)
  const image = '/' + imgM[1].replace(/^\/?/, '')

  // Categorías (.post__cat)
  const catM = html.match(/<div[^>]*class="post__cat"[^>]*>([\s\S]*?)<\/div>/i)
  const categories = stripTags(catM[1])
    .split(/[•·]/)
    .map((s) => clean(s))
    .filter(Boolean)

  // Cuerpo: contenido de .post__body posterior a .post__meta
  const bodyOpen = html.search(/<div[^>]*class="post__body"[^>]*>/i)
  const bodyOpenEnd = html.indexOf('>', bodyOpen) + 1
  const bodyEnd = matchClose(html, bodyOpen, 'div')
  let body = html.slice(bodyOpenEnd, bodyEnd).replace(/<\/div>\s*$/i, '')

  // quita el bloque .post__meta del inicio
  const metaOpen = body.search(/<div[^>]*class="post__meta[^"]*"[^>]*>/i)
  if (metaOpen !== -1) {
    const metaEnd = matchClose(body, metaOpen, 'div')
    body = body.slice(0, metaOpen) + body.slice(metaEnd)
  }

  // reescribe rutas y enlaces internos
  body = body
    .replace(/(["'(])assets\//g, '$1/assets/')
    .replace(/href="([a-zA-Z0-9_-]+)\.html"/g, (full, name) => {
      const f = `${name}.html`
      if (FILE_TO_SLUG[f]) return `href="/blog/${FILE_TO_SLUG[f]}"`
      if (EXTRA_LINKS[f]) return `href="/blog/${EXTRA_LINKS[f]}"`
      if (name === 'index') return 'href="/"'
      return `href="/${name}"`
    })

  body = body.trim()

  return {
    metaTitle: meta.titles[extractMetaKey(file)] || '',
    description: meta.meta[extractMetaKey(file)] || '',
    title,
    date,
    dateTime,
    image,
    categories,
    styleCss,
    bodyHtml: body,
  }
}

function extractMetaKey(file) {
  const n = file.match(/blog(\d+)\.html/)[1]
  return `blog-${n}`
}

const posts = ORDER.map((o) => ({ slug: o.slug, source: o.file, ...extract(o.file) }))

// ---- Listado (blog.html): tarjetas en orden, con su excerpt y destino "Ver blog" ----
function extractList() {
  const html = readFileSync(resolve(SRC_SITE, 'blog.html'), 'utf8')
  const grid = html.slice(html.search(/<section[^>]*class="post-grid"/i))
  const items = []
  const re = /<div class="post-item">([\s\S]*?)<\/div>\s*<\/div>\s*<\/div>\s*<!--\s*End Blog Post/gi
  let m
  while ((m = re.exec(grid))) {
    const chunk = m[1]
    const img = (chunk.match(/<img[^>]*src="([^"]+)"/i) || [])[1]
    const date = clean((chunk.match(/<span class="post__date">([\s\S]*?)<\/span>/i) || [])[1] || '')
    const title = stripTags((chunk.match(/<h4 class="post__title">([\s\S]*?)<\/h4>/i) || [])[1] || '')
    const excerpt = stripTags((chunk.match(/<p class="post__desc">([\s\S]*?)<\/p>/i) || [])[1] || '')
    const href = (chunk.match(/<a[^>]*href="(blog\d+\.html)"[^>]*class="btn btn__custom"/i) || [])[1]
    items.push({
      image: img ? '/' + img.replace(/^\/?/, '') : null,
      date,
      title,
      excerpt,
      slug: href ? FILE_TO_SLUG[href] : null,
    })
  }
  return items
}

let blogList = []
try {
  blogList = extractList()
} catch (e) {
  console.warn('Aviso: no se pudo extraer el listado de blog.html:', e.message)
}
if (blogList.length !== 12) {
  console.warn(`Aviso: se esperaban 12 tarjetas en blog.html, se hallaron ${blogList.length}.`)
}

const out =
  '// GENERADO por scripts/build-blog-data.mjs a partir de ../afcprofire/blog1..12.html + blog.html\n' +
  '// No editar a mano: re-generar con `node scripts/build-blog-data.mjs`.\n\n' +
  'export const blogPosts = ' +
  JSON.stringify(posts, null, 2) +
  '\n\n// Tarjetas del listado /blog, en el orden EXACTO de blog.html.\n' +
  'export const blogList = ' +
  JSON.stringify(blogList, null, 2) +
  '\n\nexport const getPost = (slug) => blogPosts.find((p) => p.slug === slug)\n'

writeFileSync(resolve(ROOT, 'src/data/blogPosts.js'), out, 'utf8')
console.log(`OK: ${posts.length} artículos -> src/data/blogPosts.js`)
for (const p of posts) console.log(`  ${p.slug}  <=  ${p.source}  (${p.date})  "${p.title.slice(0, 50)}"`)
