/*
 * Genera miniaturas (página 1) de los PDF de /proveedores.
 * Salida: public/assets/docs/previews/*.png  (se versionan)
 *
 * Requiere pdf-to-img (no está en dependencias por ser pesado):
 *   npm i -D pdf-to-img
 *   node scripts/build-doc-previews.mjs
 *   npm rm pdf-to-img
 */
import { pdf } from 'pdf-to-img'
import { writeFileSync, mkdirSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..')
mkdirSync(resolve(ROOT, 'public/assets/docs/previews'), { recursive: true })

const jobs = [
  ['CCL-PR-02-Procedimiento-Gestion-Compras.pdf', 'gestion-compras.png'],
  ['Solicitud-Actualizacion-de-Datos.pdf', 'actualizacion-datos.png'],
]

for (const [src, out] of jobs) {
  const doc = await pdf(resolve(ROOT, 'public/assets/docs', src), { scale: 1.15 })
  for await (const page of doc) {
    writeFileSync(resolve(ROOT, 'public/assets/docs/previews', out), page)
    break
  }
  console.log('OK', out)
}
