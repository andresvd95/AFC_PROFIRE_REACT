import { render, act } from '@testing-library/react'
import { test, expect, vi } from 'vitest'
import Preloader from '../Preloader'

test('muestra spinner con logo y se oculta tras la carga', () => {
  vi.useFakeTimers()
  render(<Preloader />)
  const el = document.querySelector('.preloader')
  expect(el).toBeInTheDocument()
  expect(el.querySelector('.preloader__logo')).toHaveAttribute('src', '/assets/images/logo/logo.png')
  expect(el).not.toHaveClass('preloader--hidden')
  act(() => {
    vi.runAllTimers()
  })
  expect(document.querySelector('.preloader')).toHaveClass('preloader--hidden')
  vi.useRealTimers()
})
