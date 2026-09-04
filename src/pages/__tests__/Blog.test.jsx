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

test('cada tarjeta enlaza a /blog/:slug (imagen, título y botón)', () => {
  setup()
  const first = document.querySelector('.post-item')
  const links = first.querySelectorAll('a[href^="/blog/"]')
  expect(links.length).toBe(3)
  links.forEach((a) => expect(a).toHaveAttribute('href', `/blog/${blogList[0].slug}`))
  expect(first.querySelector('.post__title a').textContent).toBe(blogList[0].title)
})
