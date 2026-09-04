import { render, screen, within } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { test, expect } from 'vitest'
import Navbar from '../Navbar'

const setup = (path = '/') => render(<MemoryRouter initialEntries={[path]}><Navbar /></MemoryRouter>)

test('tiene los items principales', () => {
  setup()
  for (const label of ['Inicio', 'Servicios', 'Proyectos', 'Quienes somos', 'Blog', 'Contacto']) {
    expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
  }
})

test('dropdown de servicios: 6 enlaces con rutas /servicios/*', () => {
  setup()
  const menu = document.querySelector('.dropdown-menu')
  const links = within(menu).getAllByRole('link')
  expect(links).toHaveLength(6)
  expect(links[0]).toHaveAttribute('href', '/servicios/diseno-ingenieria')
  expect(links[5]).toHaveAttribute('href', '/servicios/transferencia-conocimiento')
})

test('marca active la ruta actual', () => {
  setup('/proyectos')
  expect(screen.getByRole('link', { name: 'Proyectos' })).toHaveClass('active')
  expect(screen.getByRole('link', { name: 'Inicio' })).not.toHaveClass('active')
})

test('Servicios queda active también en una sub-ruta', () => {
  setup('/servicios/instalacion')
  expect(screen.getByRole('link', { name: 'Servicios' })).toHaveClass('active')
})

test('logo enlaza a home y botón asesoría es externo', () => {
  setup()
  expect(document.querySelector('.navbar-brand')).toHaveAttribute('href', '/')
  expect(screen.getByRole('link', { name: /Asesoría/ })).toHaveAttribute('href', 'https://wa.link/j2cd22')
  expect(screen.getByRole('link', { name: '311 645 6726' })).toHaveAttribute('href', 'tel:+573116456726')
})
