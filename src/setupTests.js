import '@testing-library/jest-dom/vitest'
import { vi } from 'vitest'

// EmailJS: mock para no hacer red en tests. Ambas formas de import quedan cubiertas.
vi.mock('@emailjs/browser', () => {
  const sendForm = vi.fn(() => Promise.resolve({ status: 200, text: 'OK' }))
  const send = vi.fn(() => Promise.resolve({ status: 200, text: 'OK' }))
  const init = vi.fn()
  return { default: { sendForm, send, init }, sendForm, send, init }
})

// jsdom no implementa estas APIs; theme.js y RouteEffects las usan.
window.scrollTo = vi.fn()
if (!window.HTMLMediaElement.prototype.play) {
  window.HTMLMediaElement.prototype.play = vi.fn(() => Promise.resolve())
}
window.HTMLMediaElement.prototype.pause = window.HTMLMediaElement.prototype.pause || vi.fn()
