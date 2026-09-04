import { test, expect } from 'vitest'
import { bgCover } from '../bg'

test('bgCover devuelve estilo de fondo cubriente + contexto de apilado', () => {
  const s = bgCover('/assets/images/banners/2.jpg')
  expect(s.backgroundImage).toBe('url("/assets/images/banners/2.jpg")')
  expect(s.backgroundSize).toBe('cover')
  expect(s.backgroundPosition).toBe('center')
  expect(s.backgroundRepeat).toBe('no-repeat')
  // sin esto el overlay del tema (:before z-index:-1) queda por detrás del fondo
  expect(s.position).toBe('relative')
  expect(s.zIndex).toBe(1)
})

test('acepta posición personalizada', () => {
  expect(bgCover('/x.jpg', 'top').backgroundPosition).toBe('top')
})
