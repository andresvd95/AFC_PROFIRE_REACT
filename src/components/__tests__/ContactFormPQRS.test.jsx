import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { test, expect, beforeEach } from 'vitest'
import emailjs from '@emailjs/browser'
import ContactFormPQRS from '../ContactFormPQRS'

beforeEach(() => {
  emailjs.sendForm.mockClear()
})

test('campos del formulario PQRS', () => {
  render(<ContactFormPQRS />)
  expect(screen.getByPlaceholderText('Nombre')).toBeRequired()
  expect(screen.getByPlaceholderText('Correo')).toHaveAttribute('type', 'email')
  expect(screen.getByPlaceholderText('Celular')).toBeRequired()
  expect(screen.getByRole('combobox')).toBeRequired()
  expect(screen.getByPlaceholderText('Mensaje')).toBeRequired()
  for (const opt of ['Correo', 'WhatsApp', 'Llamada']) {
    expect(screen.getByRole('option', { name: opt })).toBeInTheDocument()
  }
})

test('envío válido usa template_0rq3a9q', async () => {
  const user = userEvent.setup()
  render(<ContactFormPQRS />)
  await user.type(screen.getByPlaceholderText('Nombre'), 'Ana Perez')
  await user.type(screen.getByPlaceholderText('Correo'), 'ana@test.com')
  await user.type(screen.getByPlaceholderText('Celular'), '3001234567')
  await user.selectOptions(screen.getByRole('combobox'), 'Correo')
  await user.type(screen.getByPlaceholderText('Mensaje'), 'Necesito una cotización pronto')
  await user.click(screen.getByRole('button', { name: /Enviar/ }))

  expect(emailjs.sendForm).toHaveBeenCalledWith(
    'service_433wpss',
    'template_0rq3a9q',
    expect.anything(),
    'yPAstTbHDQ-GCT7Lm'
  )
})

test('mensaje corto no envía', async () => {
  const user = userEvent.setup()
  render(<ContactFormPQRS />)
  await user.type(screen.getByPlaceholderText('Nombre'), 'Ana Perez')
  await user.type(screen.getByPlaceholderText('Correo'), 'ana@test.com')
  await user.type(screen.getByPlaceholderText('Celular'), '3001234567')
  await user.selectOptions(screen.getByRole('combobox'), 'Correo')
  await user.type(screen.getByPlaceholderText('Mensaje'), 'corto')
  await user.click(screen.getByRole('button', { name: /Enviar/ }))

  expect(emailjs.sendForm).not.toHaveBeenCalled()
  expect(screen.getByText(/al menos 10 caracteres/)).toBeInTheDocument()
})
