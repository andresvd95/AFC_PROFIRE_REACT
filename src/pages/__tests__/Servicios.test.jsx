import { screen } from '@testing-library/react'
import { test, expect } from 'vitest'
import { renderRoute } from '../../test/renderRoute'
import Servicios from '../Servicios'

const setup = () => renderRoute('/servicios', 'servicios', <Servicios />)

test('título y dos secciones de servicios', () => {
  setup()
  expect(screen.getByRole('heading', { name: 'NUESTROS SERVICIOS', level: 1 })).toBeInTheDocument()
  expect(screen.getByText('1. Protección contra incendios:')).toBeInTheDocument()
  expect(screen.getByText(/2\. Asesorías Especializadas/)).toBeInTheDocument()
})

test('6 tarjetas de servicio con enlace a detalle', () => {
  setup()
  const verMas = screen.getAllByRole('link', { name: /Ver más/ })
  expect(verMas).toHaveLength(6)
  expect(verMas[0]).toHaveAttribute('href', '/servicios/diseno-ingenieria')
  expect(verMas[verMas.length - 1]).toHaveAttribute('href', '/servicios/conceptualizacion')
})

test('features layout2 (6+1) y bloque de contacto con 3 fancybox', () => {
  setup()
  expect(document.querySelectorAll('.features-layout2 .feature-item')).toHaveLength(6)
  expect(document.querySelectorAll('.fancybox-item')).toHaveLength(3)
  expect(document.querySelector('form#contactForm')).toBeTruthy()
})
