import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { test, expect, vi } from 'vitest'
import { renderRoute } from '../../test/renderRoute'
import QuienesSomos from '../QuienesSomos'

const setup = () => renderRoute('/quienes-somos', 'quienes-somos', <QuienesSomos />)

test('hero, propuesta de valor y CTA final', () => {
  setup()
  expect(screen.getByRole('heading', { name: 'Protección Contra Incendios en Colombia', level: 1 })).toBeInTheDocument()
  expect(screen.getByRole('heading', { name: 'Seguridad que inspira confianza' })).toBeInTheDocument()
  expect(screen.getByRole('heading', { name: '¿Necesitas proteger tu empresa o proyecto?' })).toBeInTheDocument()
})

test('vídeo local y carrusel de 10 imágenes', () => {
  setup()
  expect(document.querySelector('#afc-video source')).toHaveAttribute(
    'src',
    expect.stringContaining('video-afc-profire.mp4')
  )
  expect(document.querySelector('.gallery-slider[data-slick]')).toBeTruthy()
  expect(document.querySelectorAll('.gallery-card')).toHaveLength(10)
  expect(screen.getByRole('link', { name: /Ver todos los proyectos/ })).toHaveAttribute('href', '/proyectos')
})

test('CTA final incluye el teléfono', () => {
  setup()
  expect(screen.getByText(/También puedes llamarnos al/)).toBeInTheDocument()
  const tel = screen.getByRole('link', { name: '311 645 6726' })
  expect(tel).toHaveAttribute('href', 'tel:+573116456726')
})

test('el label "Ver el video" es negro', () => {
  setup()
  expect(screen.getByText('Ver el video')).toHaveStyle({ color: 'rgb(0, 0, 0)' })
})

test('LocalVideo: play arranca el vídeo', async () => {
  const play = vi.spyOn(window.HTMLMediaElement.prototype, 'play').mockResolvedValue()
  setup()
  await userEvent.click(screen.getByLabelText('Reproducir video'))
  expect(play).toHaveBeenCalled()
  expect(document.querySelector('.video-container.is-playing')).toBeTruthy()
  play.mockRestore()
})
