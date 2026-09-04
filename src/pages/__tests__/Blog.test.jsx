import { screen } from '@testing-library/react'
import { test, expect } from 'vitest'
import { renderRoute } from '../../test/renderRoute'
import Blog from '../Blog'
import { blogList } from '../../data/blogPosts'

const setup = () => renderRoute('/blog', 'blog', <Blog />)

test('título y 12 tarjetas', () => {
  setup()
  expect(
    screen.getByRole('heading', { name: /Blog de Protección Contra Incendios/, level: 1 })
  ).toBeInTheDocument()
  expect(document.querySelectorAll('.post-item')).toHaveLength(12)
  expect(screen.getAllByRole('link', { name: /Ver blog/ })).toHaveLength(12)
})

test('estructura para tarjetas de igual altura (botón "Ver blog" como último hijo del body)', () => {
  setup()
  const items = [...document.querySelectorAll('.post-grid .post-item')]
  expect(items).toHaveLength(12)
  items.forEach((it) => {
    const body = it.querySelector('.post__body')
    expect(body).toBeTruthy()
    // el botón "Ver blog" es el último elemento del cuerpo -> con margin-top:auto queda abajo
    expect(body.lastElementChild).toHaveClass('btn__custom')
    // cada tarjeta tiene su párrafo de extracto que absorbe el espacio flexible
    expect(it.querySelector('.post__desc')).toBeTruthy()
  })
})

test('cada tarjeta enlaza a /blog/:slug (imagen, título y botón)', () => {
  setup()
  const first = document.querySelector('.post-item')
  const links = first.querySelectorAll('a[href^="/blog/"]')
  expect(links.length).toBe(3)
  links.forEach((a) => expect(a).toHaveAttribute('href', `/blog/${blogList[0].slug}`))
  expect(first.querySelector('.post__title a').textContent).toBe(blogList[0].title)
})
