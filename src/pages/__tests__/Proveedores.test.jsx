import { screen, within } from '@testing-library/react'
import { test, expect } from 'vitest'
import { renderRoute } from '../../test/renderRoute'
import Proveedores from '../Proveedores'
import { proveedorDocs } from '../../data/proveedores'

const setup = () => renderRoute('/proveedores', 'proveedores', <Proveedores />)

test('título, breadcrumb e intro', () => {
  setup()
  expect(screen.getByRole('heading', { name: 'Proveedores', level: 1 })).toBeInTheDocument()
  expect(document.querySelector('.breadcrumb')).toBeTruthy()
  expect(screen.getByText(/descarga aquí los formatos/i)).toBeInTheDocument()
})

test('3 tarjetas de descarga', () => {
  setup()
  expect(document.querySelectorAll('.proveedor-card')).toHaveLength(3)
})

test('cada tarjeta enlaza al documento correcto con download', () => {
  setup()
  const section = document.querySelector('.proveedores-section')
  const links = within(section).getAllByRole('link', { name: /Descargar/i })
  expect(links).toHaveLength(3)
  proveedorDocs.forEach((d, i) => {
    expect(links[i]).toHaveAttribute('href', d.href)
    expect(links[i]).toHaveAttribute('download', d.filename)
  })
  expect(proveedorDocs.map((d) => d.href)).toEqual([
    '/assets/docs/CCL-PR-02-Procedimiento-Gestion-Compras.pdf',
    '/assets/docs/CCL-FO-05-Formulario-Inscripcion-Proveedores.xlsx',
    '/assets/docs/Solicitud-Actualizacion-de-Datos.pdf',
  ])
})

test('muestra la extensión de cada archivo (PDF/XLSX)', () => {
  setup()
  const exts = [...document.querySelectorAll('.proveedor-card__ext')].map((e) => e.textContent)
  expect(exts).toEqual(['PDF', 'XLSX', 'PDF'])
})

test('los PDF muestran miniatura de vista previa; el XLSX un placeholder', () => {
  setup()
  const cards = [...document.querySelectorAll('.proveedor-card')]
  const imgs = cards.map((c) => c.querySelector('.proveedor-card__preview img'))
  expect(imgs[0]).toHaveAttribute('src', '/assets/docs/previews/gestion-compras.png')
  expect(imgs[1]).toBeNull()
  expect(imgs[2]).toHaveAttribute('src', '/assets/docs/previews/actualizacion-datos.png')
  expect(cards[1].querySelector('.proveedor-card__preview-fallback')).toBeTruthy()
})
