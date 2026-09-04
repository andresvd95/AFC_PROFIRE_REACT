import { test, expect } from 'vitest'
import { services, homeServicesMain, homeServicesComplementary, serviciosGroup1, serviciosGroup2 } from '../services'
import { servicesDetail, serviceSlugs, getServiceDetail } from '../servicesDetail'
import { galleryImages, galleryVideos, aboutGallery } from '../projects'

test('services: 7 con slug único y ruta /servicios/*', () => {
  expect(services).toHaveLength(7)
  expect(new Set(services.map((s) => s.slug)).size).toBe(7)
  expect(services.find((s) => s.slug === 'diseno-ingenieria').to).toBe('/servicios/diseno-ingenieria')
})

test('services: agrupaciones de Home y de /servicios', () => {
  expect(homeServicesMain.map((s) => s.slug)).toEqual([
    'diseno-ingenieria',
    'instalacion',
    'mantenimiento',
    'auditoria',
  ])
  expect(homeServicesComplementary.map((s) => s.slug)).toEqual(['diagnostico', 'transferencia-conocimiento'])
  expect(serviciosGroup1).toHaveLength(4)
  expect(serviciosGroup2.map((s) => s.slug)).toEqual(['diagnostico', 'conceptualizacion'])
})

test('servicesDetail: 7 registros con title/metaTitle/blocks', () => {
  expect(servicesDetail).toHaveLength(7)
  for (const s of servicesDetail) {
    expect(s.slug && s.title && s.metaTitle).toBeTruthy()
    expect(Array.isArray(s.blocks)).toBe(true)
    expect(Array.isArray(s.benefits)).toBe(true)
  }
  expect(getServiceDetail('diseno-ingenieria').blocks).toHaveLength(7)
  expect(getServiceDetail('diseno-ingenieria').desc).toBeNull()
  expect(getServiceDetail('instalacion').benefits).toHaveLength(3)
  expect(serviceSlugs).toContain('conceptualizacion')
})

test('projects: 27 imágenes + 4 vídeos (originales + nuevas de agosto 2026)', () => {
  expect(galleryImages).toHaveLength(27)
  expect(galleryVideos).toHaveLength(4)
  expect(aboutGallery).toHaveLength(10)
  expect(galleryImages[0].src).toContain('instalacion-1.png')
  expect(galleryImages[10].src).toContain('WhatsApp Image 2026-04-27 at 10.08.52.jpeg')
  expect(encodeURI(galleryImages[10].src)).toContain('%20')
  // fotos y vídeos nuevos
  expect(galleryImages.filter((i) => i.src.includes('/rvp-')).length).toBe(8)
  expect(galleryVideos.filter((v) => v.includes('/rvp-video-')).length).toBe(2)
})
