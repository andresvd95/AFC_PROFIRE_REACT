import { screen } from '@testing-library/react'
import { test, expect, describe } from 'vitest'
import { renderRoute } from '../../test/renderRoute'
import ServiceDetail from '../ServiceDetail'
import { servicesDetail } from '../../data/servicesDetail'

const renderDetail = (slug) => renderRoute(`/servicios/${slug}`, 'servicios/:slug', <ServiceDetail />)

describe('las 7 rutas de servicio', () => {
  test.each(servicesDetail.map((s) => [s.slug, s.title]))('%s renderiza título, CTA y form', (slug, title) => {
    renderDetail(slug)
    expect(screen.getByRole('heading', { name: title, level: 1 })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Más sobre AFC/ })).toHaveAttribute('href', '/quienes-somos')
    expect(screen.getByText('Visión General')).toBeInTheDocument()
    expect(screen.getByText('Cumplimiento NFPA')).toBeInTheDocument()
    expect(document.querySelector('form#contactForm')).toBeTruthy()
  })
})

test('diseno-ingenieria: 7 bloques de contenido, sin descripción de hero', () => {
  renderDetail('diseno-ingenieria')
  expect(screen.getByText('Sistemas de Rociadores Automáticos')).toBeInTheDocument()
  expect(screen.getByText('Cálculo y Especificación')).toBeInTheDocument()
  expect(document.querySelector('.pagetitle__desc')).toBeFalsy()
})

test('instalacion: 3 benefits en features-layout3', () => {
  renderDetail('instalacion')
  expect(document.querySelectorAll('.features-layout3 .feature-item')).toHaveLength(3)
})

test('slug inválido → NotFound', () => {
  renderDetail('no-existe')
  expect(screen.getByTestId('notfound')).toBeInTheDocument()
})
