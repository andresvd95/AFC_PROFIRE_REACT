import { test, expect } from 'vitest'
import { blogPosts, blogList, getPost } from '../blogPosts'

test('12 artículos con slug único, fuente, título y cuerpo', () => {
  expect(blogPosts).toHaveLength(12)
  expect(new Set(blogPosts.map((p) => p.slug)).size).toBe(12)
  for (const p of blogPosts) {
    expect(p.slug).toMatch(/^[a-z0-9-]+$/)
    expect(p.source).toMatch(/^blog\d{1,2}\.html$/)
    expect(p.title.length).toBeGreaterThan(3)
    expect(p.image).toMatch(/^\/assets\/images\/blog\/grid\//)
    expect(p.bodyHtml).toContain('<h1 class="post__title"')
    expect(Array.isArray(p.categories)).toBe(true)
    expect(p.categories.length).toBe(2)
  }
})

test('cuerpos: sin rutas relativas de assets y con enlaces internos reescritos', () => {
  for (const p of blogPosts) {
    expect(p.bodyHtml).not.toMatch(/(src|href)="assets\//)
    expect(p.bodyHtml).not.toMatch(/href="blog\d+\.html"/)
  }
  const tipos = getPost('tipos-de-proteccion')
  expect(tipos.bodyHtml).toContain('href="/blog/triangulo-del-fuego"')
})

test('el primero del listado es Incendios en Hospitales (blog12)', () => {
  expect(blogPosts[0].slug).toBe('incendios-en-hospitales')
  expect(blogPosts[0].source).toBe('blog12.html')
})

test('blogList: 12 tarjetas en el orden de blog.html con slug resoluble', () => {
  expect(blogList).toHaveLength(12)
  expect(blogList[0].slug).toBe('incendios-en-hospitales')
  expect(blogList[0].image).toBe('/assets/images/blog/grid/hospital.png')
  for (const card of blogList) {
    expect(card.slug).toBeTruthy()
    expect(getPost(card.slug)).toBeDefined()
    expect(card.excerpt.length).toBeGreaterThan(5)
  }
})
