import { screen } from '@testing-library/react'
import { test, expect, describe } from 'vitest'
import { renderRoute } from '../../test/renderRoute'
import BlogPost from '../BlogPost'
import { blogPosts } from '../../data/blogPosts'

const renderPost = (slug) => renderRoute(`/blog/${slug}`, 'blog/:slug', <BlogPost />)

describe('los 12 artículos', () => {
  test.each(blogPosts.map((p) => [p.slug, p.title]))('/blog/%s renderiza el artículo', (slug, title) => {
    renderPost(slug)
    expect(screen.getByRole('heading', { name: title, level: 1 })).toBeInTheDocument()
    expect(document.querySelector('.blog-single .post__desc')).toBeTruthy()
    // el Layout aplica .only-info a las rutas /blog/*
    expect(document.querySelector('.wrapper.only-info')).toBeTruthy()
  })
})

test('imagen y meta de categoría/fecha', () => {
  const post = blogPosts.find((p) => p.slug === 'triangulo-del-fuego')
  renderPost('triangulo-del-fuego')
  expect(document.querySelector('.post__img img')).toHaveAttribute('src', post.image)
  expect(document.querySelector('.post__meta time')).toHaveAttribute('datetime', post.dateTime)
})

test('slug inválido → NotFound', () => {
  renderPost('no-existe')
  expect(screen.getByTestId('notfound')).toBeInTheDocument()
})
