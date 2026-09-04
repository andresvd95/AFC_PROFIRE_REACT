import { test, expect } from 'vitest'
import { bgCover } from '../bg'

test('bgCover devuelve estilo de fondo cubriente', () => {
  const s = bgCover('/assets/images/banners/2.jpg')
  expect(s.backgroundImage).toBe('url("/assets/images/banners/2.jpg")')
  expect(s.backgroundSize).toBe('cover')
  expect(s.backgroundPosition).toBe('center')
  expect(s.backgroundRepeat).toBe('no-repeat')
})

test('acepta posición personalizada', () => {
  expect(bgCover('/x.jpg', 'top').backgroundPosition).toBe('top')
})
