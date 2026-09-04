import { test, expect } from 'vitest'
import { initTheme, destroyTheme } from '../theme'

test('exporta initTheme y destroyTheme', () => {
  expect(typeof initTheme).toBe('function')
  expect(typeof destroyTheme).toBe('function')
})

test('sin window.jQuery no lanza y es idempotente', () => {
  expect(window.jQuery).toBeUndefined()
  expect(() => {
    initTheme()
    destroyTheme()
    initTheme()
    initTheme()
    destroyTheme()
  }).not.toThrow()
})
