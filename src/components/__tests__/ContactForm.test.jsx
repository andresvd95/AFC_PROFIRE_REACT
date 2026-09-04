import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { test, expect, beforeEach } from 'vitest'
import emailjs from '@emailjs/browser'
import ContactForm from '../ContactForm'

beforeEach(() => {
  emailjs.sendForm.mockClear()
})

test('campos del formulario de asesoría', () => {
  render(<ContactForm />)
  expect(screen.getByPlaceholderText('Nombre')).toBeRequired()
  expect(screen.getByPlaceholderText('Correo')).toHaveAttribute('type', 'email')
  expect(screen.getByPlaceholderText('Celular')).not.toBeRequired()
  expect(screen.getByPlaceholderText('Dirección')).toBeRequired()
  expect(screen.getAllByRole('radio')).toHaveLength(3)
  expect(screen.getByRole('radio', { name: 'Todos' })).toBeChecked()
})

test('envío válido llama a EmailJS con service/template correctos', async () => {
  const user = userEvent.setup()
  render(<ContactForm />)
  await user.type(screen.getByPlaceholderText('Nombre'), 'Ana')
  await user.type(screen.getByPlaceholderText('Correo'), 'ana@test.com')
  await user.type(screen.getByPlaceholderText('Dirección'), 'Calle 1')
  await user.click(screen.getByRole('button', { name: /Enviar correo/ }))

  expect(emailjs.sendForm).toHaveBeenCalledWith(
    'service_433wpss',
    'template_l61hkol',
    expect.anything(),
    'yPAstTbHDQ-GCT7Lm'
  )
  expect(await screen.findByText(/Gracias/)).toBeInTheDocument()
})

test('email inválido no envía y muestra error', async () => {
  const user = userEvent.setup()
  render(<ContactForm />)
  await user.type(screen.getByPlaceholderText('Nombre'), 'Ana')
  await user.type(screen.getByPlaceholderText('Correo'), 'no-es-email')
  await user.type(screen.getByPlaceholderText('Dirección'), 'Calle 1')
  await user.click(screen.getByRole('button', { name: /Enviar correo/ }))

  expect(emailjs.sendForm).not.toHaveBeenCalled()
  expect(screen.getByText(/no es válido/i)).toBeInTheDocument()
})

test('campos vacíos: no envía y pide completar', async () => {
  const user = userEvent.setup()
  render(<ContactForm />)
  await user.click(screen.getByRole('button', { name: /Enviar correo/ }))
  expect(emailjs.sendForm).not.toHaveBeenCalled()
  expect(screen.getByText(/campos obligatorios/i)).toBeInTheDocument()
})
