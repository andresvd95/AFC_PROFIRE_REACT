import { screen } from '@testing-library/react'
import { test, expect } from 'vitest'
import { renderRoute } from '../../test/renderRoute'
import Contacto from '../Contacto'

const setup = () => renderRoute('/contacto', 'contacto', <Contacto />)

test('mapa embebido y datos de contacto', () => {
  setup()
  expect(document.querySelector('.google-map iframe')).toHaveAttribute(
    'src',
    expect.stringContaining('google.com/maps/embed')
  )
  expect(screen.getByText(/Calle 34 sur 45-04/)).toBeInTheDocument()
  expect(screen.getByRole('link', { name: 'andres.cruz@afcprofire.com' })).toHaveAttribute(
    'href',
    'mailto:andres.cruz@afcprofire.com'
  )
  expect(screen.getByText('Lunes a Viernes')).toBeInTheDocument()
})

test('formulario PQRS presente', () => {
  setup()
  expect(document.querySelector('form#contactFormEmailJS')).toBeTruthy()
  expect(screen.getByPlaceholderText('Mensaje')).toBeInTheDocument()
  expect(screen.getByRole('combobox')).toBeInTheDocument()
})
