import { screen, within } from '@testing-library/react'
import { test, expect } from 'vitest'
import { renderRoute } from '../../test/renderRoute'
import Proyectos from '../Proyectos'

const setup = () => renderRoute('/proyectos', 'proyectos', <Proyectos />)

test('título, breadcrumb y scroll-down', () => {
  setup()
  expect(screen.getByRole('heading', { name: 'Proyectos Exitosos', level: 1 })).toBeInTheDocument()
  const crumb = document.querySelector('.breadcrumb')
  expect(within(crumb).getByRole('link', { name: 'Inicio' })).toHaveAttribute('href', '/')
  expect(within(crumb).getByText('Proyectos')).toBeInTheDocument()
  expect(document.querySelector('a.scroll-down[href="#gallery"]')).toBeTruthy()
  const banner = document.querySelector('.page-title-layout1')
  expect(banner).toHaveStyle({ backgroundSize: 'cover', backgroundPosition: 'center' })
  expect(banner.style.backgroundImage).toContain('banner-proyectos.png')
  expect(document.querySelector('.page-title-layout1 .bg-img')).toBeFalsy()
})

test('27 imágenes con lightbox y 4 vídeos', () => {
  setup()
  const links = document.querySelectorAll('#gallery a.popup-gallery-item')
  expect(links).toHaveLength(27)
  expect(links[0].getAttribute('href')).toContain('instalacion-1.png')
  // nombres con espacios codificados
  expect(links[10].getAttribute('href')).toContain('%20')
  expect(document.querySelectorAll('#gallery .video-wrapper')).toHaveLength(4)
})
