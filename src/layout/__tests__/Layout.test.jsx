import { render, screen } from '@testing-library/react'
import { MemoryRouter, Routes, Route } from 'react-router-dom'
import { test, expect } from 'vitest'
import Layout from '../Layout'

function renderAt(path, routePath = 'x', el = <div>PAGINA</div>) {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <Routes>
        <Route element={<Layout />}>
          <Route path={routePath} element={el} />
        </Route>
      </Routes>
    </MemoryRouter>
  )
}

test('renderiza chrome y el outlet una sola vez', () => {
  renderAt('/x')
  expect(screen.getByText('PAGINA')).toBeInTheDocument()
  expect(document.querySelectorAll('header.header')).toHaveLength(1)
  expect(document.querySelectorAll('footer.footer')).toHaveLength(1)
  expect(document.querySelector('#scrollTopBtn')).toBeTruthy()
  expect(document.querySelector('.preloader')).toBeTruthy()
})

test('wrapper recibe only-info en rutas de artículo', () => {
  renderAt('/blog/lo-que-sea', 'blog/:slug', <div>ART</div>)
  expect(document.querySelector('.wrapper.only-info')).toBeTruthy()
})

test('wrapper sin only-info en el resto de rutas', () => {
  renderAt('/x')
  expect(document.querySelector('.wrapper')).toBeTruthy()
  expect(document.querySelector('.wrapper.only-info')).toBeFalsy()
})
