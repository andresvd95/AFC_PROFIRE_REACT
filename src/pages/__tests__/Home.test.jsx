import { screen } from '@testing-library/react'
import { test, expect } from 'vitest'
import { renderRoute } from '../../test/renderRoute'
import Home from '../Home'

const setup = () => renderRoute('/', '/', <Home />)

test('hero con vídeo y lema', () => {
  setup()
  expect(screen.getByRole('heading', { name: 'AFC PRO FIRE', level: 2 })).toBeInTheDocument()
  expect(screen.getByText('“Sembrando seguridad, cosechando el futuro”.')).toBeInTheDocument()
  const source = document.querySelector('video#heroVideo source')
  expect(source).toHaveAttribute('src', expect.stringContaining('afc-profire.mp4'))
})

test('dos carruseles de servicios con 6 enlaces "Ver más"', () => {
  setup()
  expect(screen.getByRole('heading', { name: /Conozca nuestros servicios/ })).toBeInTheDocument()
  expect(document.querySelectorAll('.slick-carousel[data-slick]')).toHaveLength(2)
  const verMas = screen.getAllByRole('link', { name: /Ver más/ })
  expect(verMas).toHaveLength(6)
  expect(verMas[0]).toHaveAttribute('href', '/servicios/diseno-ingenieria')
})

test('about con popup-video y features con 4 imágenes', () => {
  setup()
  expect(document.querySelector('a.popup-video')).toHaveAttribute('href', '/assets/images/gallery/video-afc.mp4')
  expect(screen.getByText('Ver el video')).toHaveStyle({ color: 'rgb(0, 0, 0)' })
  expect(screen.getByRole('heading', { name: 'Hemos ejecutado diversos proyectos' })).toBeInTheDocument()
  expect(document.querySelectorAll('.feature-card img')).toHaveLength(4)
})

test('formulario de asesoría presente', () => {
  setup()
  expect(document.querySelector('form#contactForm')).toBeTruthy()
})

test('los fondos de sección van como background inline (sin <img> crudo)', () => {
  setup()
  const services = document.querySelector('.services-layout2')
  expect(services).toHaveStyle({ backgroundSize: 'cover' })
  expect(services.style.backgroundImage).toContain('backgrounds/5.jpg')
  expect(document.querySelector('.services-layout2 .bg-img')).toBeFalsy()
  expect(document.querySelector('.contact-layout2 .bg-img')).toBeFalsy()
})
