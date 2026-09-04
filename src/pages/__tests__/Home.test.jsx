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
  expect(screen.getByRole('heading', { name: 'Hemos ejecutado diversos proyectos' })).toBeInTheDocument()
  expect(document.querySelectorAll('.feature-card img')).toHaveLength(4)
})

test('formulario de asesoría presente', () => {
  setup()
  expect(document.querySelector('form#contactForm')).toBeTruthy()
})
