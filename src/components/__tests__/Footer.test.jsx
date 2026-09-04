import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { test, expect } from 'vitest'
import Footer from '../Footer'

const setup = () => render(<MemoryRouter><Footer /></MemoryRouter>)

test('widgets y enlaces clave', () => {
  setup()
  expect(screen.getByRole('heading', { name: 'Contacto' })).toBeInTheDocument()
  expect(screen.getByRole('heading', { name: 'Documentos' })).toBeInTheDocument()
  expect(
    screen.getByRole('link', { name: /Directrices del Sistema Integrado de Gestión/ })
  ).toHaveAttribute('href', '/assets/images/GES-DO-01-Directrices del SIG.pdf')
  expect(screen.getByRole('link', { name: /Descargar PDF/ })).toHaveAttribute(
    'href',
    '/assets/images/brochureAfcProfire.pdf'
  )
  expect(screen.getByText(/© 2026 AFC Pro Fire/)).toBeInTheDocument()
})

test('enlaces internos usan rutas React', () => {
  setup()
  expect(screen.getByRole('link', { name: 'Quienes somos' })).toHaveAttribute('href', '/quienes-somos')
  expect(screen.getByRole('link', { name: 'Proveedores' })).toHaveAttribute('href', '/proveedores')
  expect(screen.getByRole('link', { name: 'Diseño e Ingeniería de Sistemas Contra Incendios' })).toHaveAttribute(
    'href',
    '/servicios/diseno-ingenieria'
  )
})

test('redes sociales abren en pestaña nueva', () => {
  setup()
  const fb = document.querySelector('a[href*="facebook.com"]')
  expect(fb).toHaveAttribute('target', '_blank')
  expect(fb).toHaveAttribute('rel', expect.stringContaining('noopener'))
})
