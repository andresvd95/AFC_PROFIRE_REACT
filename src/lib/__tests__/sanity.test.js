import { test, expect } from 'vitest'

test('el entorno de test funciona', () => {
  expect(1 + 1).toBe(2)
})

test('jsdom disponible', () => {
  const el = document.createElement('div')
  el.textContent = 'ok'
  expect(el.textContent).toBe('ok')
})
