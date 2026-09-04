import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { test, expect } from 'vitest'
import { AppRoutes } from '../App'

const at = (path) => render(<MemoryRouter initialEntries={[path]}><AppRoutes /></MemoryRouter>)

test('cada ruta monta dentro del Layout (chrome único)', () => {
  for (const path of ['/', '/servicios', '/servicios/instalacion', '/proyectos', '/quienes-somos', '/contacto', '/blog', '/blog/triangulo-del-fuego']) {
    const { unmount } = at(path)
    expect(document.querySelectorAll('header.header')).toHaveLength(1)
    expect(document.querySelectorAll('footer.footer')).toHaveLength(1)
    unmount()
  }
})

test('/servicios/:slug válido renderiza la página de detalle', () => {
  at('/servicios/mantenimiento')
  expect(screen.getByTestId('service-detail')).toBeInTheDocument()
  expect(screen.getByRole('heading', { name: 'Mantenimiento Preventivo y Correctivo', level: 1 })).toBeInTheDocument()
})

test('ruta desconocida → NotFound', () => {
  at('/no-existe')
  expect(screen.getByTestId('notfound')).toBeInTheDocument()
})

test('/servicios/:slug inexistente → NotFound', () => {
  at('/servicios/foo')
  expect(screen.getByTestId('notfound')).toBeInTheDocument()
})
