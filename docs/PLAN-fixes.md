# Plan de trabajo — Fixes visuales + página Proveedores

> **Para quien ejecuta:** tarea por tarea, pasos de 2–5 min, casillas `- [ ]`.
> Primero **Fase A (fixes)**, luego **Fase B (Proveedores)**. Cada tarea termina con
> `npm run test` verde; las marcadas, también `npm run build`. Commit por tarea.
> Al cierre de cada fase: push a `main` y `reconstruccion-fiel` + reporte de estado.

**Objetivo:** dejar el sitio React idéntico a lo publicado en <https://afcprofire.com/>
(confirmado: la web publicada == los `.html` de `../afcprofire/`), corregir los defectos
reportados y añadir una página **Proveedores** con 3 descargas.

**Stack:** sin cambios (React 18 + Vite 5 + Router 6 + `@emailjs/browser` + Vitest).

**Spec:** este documento + [PRD.md](./PRD.md) + [TDD.md](./TDD.md).

## Constraints globales

- Fuente de verdad: `../afcprofire/*.html` (== la web publicada). El sitio original **no se toca**.
- CSS del tema (`public/assets/css/*.css`) **no se edita**; los ajustes van en `src/styles/*.css` o inline.
- Enlaces internos `<Link>`; descargas y externos `<a>`.
- Sin dependencias runtime nuevas.
- Documentos de proveedores: se copian a `public/assets/docs/` con nombres limpios (sin espacios ni `(1)`).

---

## Diagnóstico de los defectos reportados

| # | Síntoma (capturas del usuario) | Causa raíz | Arreglo |
|---|---|---|---|
| 1 | Home: banda de foto borrosa gigante **antes del formulario de asesoría**. Servicios/Home: "mucho espacio arriba". | Los `<section class="… bg-overlay">` del tema traen la imagen como `<div class="bg-img"><img></div>` y dependían de `assets/js/main.js` para moverla a `background-image` del `<section>` y **borrar el `<img>`**. En la SPA eso lo hacía `theme.js` con un `setTimeout(60)`; con React (re-render / StrictMode / carga de jQuery) el `<img>` crudo reaparece a tamaño natural y empuja el contenido. | Renderizar el fondo **directamente como `style={{backgroundImage…}}` en el `<section>`** y **no** renderizar el `<img>`. Inmune a timing y re-renders. (Task A1) |
| 2 | Banner de **Proyectos** "recortado". | Mismo bug: se ve el `<img>` crudo mal dimensionado. | Task A1: pasa a `background-size:cover; background-position:center` (igual que la web publicada). Si tras el fix el usuario aún lo ve cortado, override de padding vertical para esa página. |
| 3 | **Quiénes somos**: banner igual que Proyectos. | Mismo bug (hero-min con `.bg-img`). | Task A1. |
| 4 | Quiénes somos: falta "**También puedes llamarnos al 311 645 6726**". | Omitido al portar `quienes-somos.html` (líneas 477–480). | Añadir el `<p class="mt-20">…<a href="tel:+573116456726">311 645 6726</a></p>` tras "Contactar ahora". (Task A3) |
| 5 | Spinner de carga: "le quitaste el spinner adicional; debería tener el **logo pequeño en medio**". | `RouteEffects` oculta `.preloader` al montar (instantáneo). El tema lo mantenía 2 s. Y nunca tuvo logo. | Preloader se auto-gestiona: visible al cargar hasta `window.load` + ~800 ms, luego fade-out. Añadir `<img>` del logo centrado dentro de `.loading`. (Task A2) |
| 6 | "Ver el video" (Quiénes somos): **el botón/label igual que el original, pero el texto "Ver el video" en color negro**; y que quede centrado como en el original. | `.video__btn-title { color:#fff }` (heredado). Posible descentre del overlay en el port. | `LocalVideo` cover: dejar el bloque idéntico al original (portada + botón centrado) y forzar `color:#000` en el label. (Task A3) |
| 7 | Tarjetas del **blog** con alturas desiguales. | `.post-item` sin altura uniforme; la fila no es flex. | `blog-listing.css`: fila flex, `.post-item` `height:100%` en columna, botón "Ver blog" abajo (`margin-top:auto`). (Task A4) |
| 8 | Form "Contáctanos / Deja tu PQRS" (Contacto): mejorar márgenes y padding. | `.contact__panel-form` pegado al panel naranja, campos apretados. | `contacto.css` co-ubicado: padding del form, separación de campos, gutters. (Task A5) |

---

# FASE A — Fixes

## Task A1: Fondos de sección vía inline-style (bug #1, #2, #3)

**Files:**
- Create: `src/lib/bg.js`
- Modify: `src/components/PageTitle.jsx`, `src/components/ServiceContactCTA.jsx`,
  `src/pages/Home.jsx`, `src/pages/Servicios.jsx`, `src/pages/Proyectos.jsx`,
  `src/pages/QuienesSomos.jsx`, `src/pages/Blog.jsx`
- Modify: `src/layout/RouteEffects.jsx` (espera robusta a jQuery)
- Modify: `src/lib/theme.js` (`applyBgImages` deja de ser crítico; sigue como fallback)
- Test: `src/lib/__tests__/bg.test.js`, y aserciones nuevas en los tests de página existentes

**Interfaces — Produces:**
```js
// src/lib/bg.js
export function bgCover(src, position = 'center') { /* -> style object */ }
```

- [ ] **Paso 1: test que falla** `src/lib/__tests__/bg.test.js`:
```js
import { test, expect } from 'vitest'
import { bgCover } from '../bg'
test('bgCover devuelve estilo de fondo cubriente', () => {
  const s = bgCover('/assets/images/banners/2.jpg')
  expect(s.backgroundImage).toBe('url("/assets/images/banners/2.jpg")')
  expect(s.backgroundSize).toBe('cover')
  expect(s.backgroundPosition).toBe('center')
  expect(s.backgroundRepeat).toBe('no-repeat')
})
```
- [ ] **Paso 2:** `npm run test` → FALLA.
- [ ] **Paso 3:** Crear `src/lib/bg.js`:
```js
export function bgCover(src, position = 'center') {
  return {
    backgroundImage: `url("${src}")`,
    backgroundSize: 'cover',
    backgroundPosition: position,
    backgroundRepeat: 'no-repeat',
  }
}
```
- [ ] **Paso 4:** `PageTitle.jsx` — poner el fondo en el `<section>` y **eliminar** el `<div className="bg-img"><img></div>`:
```jsx
<section className={sectionClass} style={bg ? bgCover(bg) : undefined}>
  {/* sin <div className="bg-img"> */}
```
  (import `bgCover`).
- [ ] **Paso 5:** `Home.jsx` — en las 2 secciones con `.bg-img`:
  - `contact-layout2 pb-80` → `<section className="contact-layout2 pb-80 bg-overlay bg-overlay-primary-gradient" style={bgCover('/assets/images/banners/2.jpg')}>` y borrar su `<div className="bg-img">`.
  - `services-layout2 pt-120` → `style={bgCover('/assets/images/backgrounds/5.jpg')}` y borrar su `<div className="bg-img">`.
- [ ] **Paso 6:** `Servicios.jsx` — la sección `contact-layout2 pb-0` → `style={bgCover('/assets/images/banners/2.jpg')}`, borrar `<div className="bg-img">`. (El page-title ya lo cubre `PageTitle`.)
- [ ] **Paso 7:** `ServiceContactCTA.jsx` — igual: `style={bgCover('/assets/images/banners/2.jpg')}`, borrar `<div className="bg-img">`.
- [ ] **Paso 8:** `Proyectos.jsx` — el `<section className="page-title page-title-layout1 …">` inline → `style={bgCover('/assets/images/page-titles/banner-proyectos.png')}`, borrar `<div className="bg-img">`.
- [ ] **Paso 9:** `QuienesSomos.jsx` — el `<section className="page-title hero-min …">` → `style={bgCover('/assets/images/page-titles/incendio.jpg')}`, borrar `<div className="bg-img">`.
- [ ] **Paso 10:** `Blog.jsx` — el `<section className="page-title page-title-layout1 …">` → `style={bgCover('/assets/images/page-titles/11.jpg')}`, borrar `<div className="bg-img">`.
- [ ] **Paso 11:** `RouteEffects.jsx` — sustituir el `setTimeout(initTheme, 60)` por espera robusta:
```js
useEffect(() => {
  window.scrollTo(0, 0)
  document.title = routeTitle(pathname, { blogPosts })
  destroyTheme()
  let id
  let tries = 0
  const tick = () => {
    const $ = window.jQuery
    if ($ && $.fn && $.fn.slick) { initTheme(); return }
    if (tries++ < 40) id = window.setTimeout(tick, 75)
  }
  id = window.setTimeout(tick, 30)
  return () => window.clearTimeout(id)
}, [pathname])
```
  (quitar la línea que ocultaba `.preloader`; ahora lo gestiona `Preloader` — Task A2).
- [ ] **Paso 12:** `theme.js` — `applyBgImages` se mantiene (fallback para cualquier `.bg-img > img` que quedara); sin cambios funcionales.
- [ ] **Paso 13:** Ajustar tests de página que asertaban sobre `.bg-img`:
  - `Proyectos.test.jsx`: cambiar cualquier assert de `.bg-img` por `expect(document.querySelector('.page-title-layout1')).toHaveStyle('background-image: url("/assets/images/page-titles/banner-proyectos.png")')` (o comprobar el atributo `style`).
  - Añadir a `Home.test.jsx`: `expect(document.querySelector('.services-layout2')).toHaveStyle({ backgroundSize: 'cover' })`.
- [ ] **Paso 14:** `npm run test` → PASS. `npm run build` → OK.
- [ ] **Paso 15:** `git add -A && git commit -m "Fix: fondos de sección como background inline (elimina bandas/espacios y banner recortado)"`

---

## Task A2: Preloader con logo + tiempo de carga (bug #5)

**Files:**
- Modify: `src/layout/Preloader.jsx`
- Create: `src/styles/preloader.css`
- Test: `src/layout/__tests__/Preloader.test.jsx`

- [ ] **Paso 1: test que falla** `src/layout/__tests__/Preloader.test.jsx`:
```jsx
import { render, screen, act } from '@testing-library/react'
import { test, expect, vi } from 'vitest'
import Preloader from '../Preloader'

test('muestra spinner con logo y se oculta tras la carga', () => {
  vi.useFakeTimers()
  render(<Preloader />)
  const el = document.querySelector('.preloader')
  expect(el).toBeInTheDocument()
  expect(el.querySelector('.preloader__logo')).toHaveAttribute('src', '/assets/images/logo/logo.png')
  expect(el).not.toHaveClass('preloader--hidden')
  act(() => { vi.runAllTimers() })
  expect(document.querySelector('.preloader')).toHaveClass('preloader--hidden')
  vi.useRealTimers()
})
```
- [ ] **Paso 2:** `npm run test` → FALLA.
- [ ] **Paso 3:** `Preloader.jsx`:
```jsx
import { useEffect, useRef } from 'react'
import '../styles/preloader.css'

export default function Preloader() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    let t
    const hide = () => { t = window.setTimeout(() => el.classList.add('preloader--hidden'), 800) }
    if (document.readyState === 'complete') hide()
    else window.addEventListener('load', hide, { once: true })
    return () => { window.clearTimeout(t); window.removeEventListener('load', hide) }
  }, [])
  return (
    <div className="preloader" ref={ref}>
      <div className="loading">
        <span></span><span></span><span></span><span></span>
        <img className="preloader__logo" src="/assets/images/logo/logo.png" alt="AFC Pro Fire" />
      </div>
    </div>
  )
}
```
- [ ] **Paso 4:** `src/styles/preloader.css`:
```css
.preloader { transition: opacity .4s ease, visibility .4s ease; }
.preloader--hidden { opacity: 0; visibility: hidden; pointer-events: none; }
.preloader .loading { width: 90px; height: 90px; }
.preloader .loading .preloader__logo {
  position: absolute; top: 50%; left: 50%;
  width: 44px; height: auto; transform: translate(-50%, -50%);
  animation: afcPulse 1.6s ease-in-out infinite;
}
@keyframes afcPulse { 0%,100% { opacity: .85 } 50% { opacity: 1 } }
```
- [ ] **Paso 5:** Confirmar que `RouteEffects` ya **no** oculta `.preloader` (hecho en A1 Paso 11). En navegación SPA el preloader ya está `--hidden` y así se queda.
- [ ] **Paso 6:** `npm run test` → PASS. `npm run build` → OK.
- [ ] **Paso 7:** `git add -A && git commit -m "Preloader: logo centrado + visible hasta window.load (bug #5)"`

---

## Task A3: Quiénes somos — teléfono faltante + "Ver el video" (bugs #4, #6)

**Files:**
- Modify: `src/pages/QuienesSomos.jsx`
- Modify: `src/components/LocalVideo.jsx`
- Modify: `src/styles/quienes-somos.css`
- Test: `src/pages/__tests__/QuienesSomos.test.jsx`

- [ ] **Paso 1: tests que fallan** — añadir a `QuienesSomos.test.jsx`:
```jsx
test('CTA final incluye teléfono', () => {
  setup()
  expect(screen.getByText(/También puedes llamarnos al/)).toBeInTheDocument()
  const tel = screen.getByRole('link', { name: '311 645 6726' })
  expect(tel).toHaveAttribute('href', 'tel:+573116456726')
})
test('label "Ver el video" en negro', () => {
  setup()
  expect(screen.getByText('Ver el video')).toHaveStyle({ color: 'rgb(0, 0, 0)' })
})
```
- [ ] **Paso 2:** `npm run test` → FALLA.
- [ ] **Paso 3:** `QuienesSomos.jsx` — tras el `<a>` "Contactar ahora" en la sección 5, añadir (fiel a `quienes-somos.html` 477–480):
```jsx
<p className="mt-20" style={{ color: '#666', fontSize: '0.95rem' }}>
  También puedes llamarnos al{' '}
  <a href="tel:+573116456726" style={{ color: '#ef7d00', fontWeight: 600 }}>
    311 645 6726
  </a>
</p>
```
- [ ] **Paso 4:** `LocalVideo.jsx` (modo cover) — dejar el markup igual (portada + overlay + botón centrado, sin cambios de estructura) y poner el label en negro:
```jsx
<span className="video__btn-title" style={{ color: '#000' }}>Ver el video</span>
```
  Revisar que el overlay quede centrado: `.video-overlay` debe tener `inset:0; display:flex; align-items:center; justify-content:center` (ya está en `quienes-somos.css`). Si en el navegador el botón sale arriba-izquierda, comprobar que `.video-container` recibe altura (aspect-ratio `padding-bottom`) — si hace falta, añadir `min-height` de respaldo en `quienes-somos.css`.
- [ ] **Paso 5:** `quienes-somos.css` — si se detectó descentre, añadir salvaguarda:
```css
.video-container { min-height: 480px; }
@media (max-width: 480px) { .video-container { min-height: 360px; } }
```
- [ ] **Paso 6:** `npm run test` → PASS. `npm run build` → OK.
- [ ] **Paso 7:** `git add -A && git commit -m "Quienes somos: teléfono en CTA + label 'Ver el video' en negro (bugs #4, #6)"`

---

## Task A4: Blog — tarjetas de igual altura (bug #7)

**Files:**
- Modify: `src/styles/blog-listing.css`
- Modify: `src/pages/Blog.jsx` (solo si hace falta un wrapper `d-flex` en la col)
- Test: `src/pages/__tests__/Blog.test.jsx`

- [ ] **Paso 1: test que falla** — añadir a `Blog.test.jsx`:
```jsx
test('todas las tarjetas tienen la misma altura', () => {
  setup()
  const cols = [...document.querySelectorAll('.post-grid .row > [class*="col-"]')]
  expect(cols.length).toBe(12)
  cols.forEach((c) => expect(c).toHaveStyle({ display: 'flex' }))
  document.querySelectorAll('.post-grid .post-item').forEach((it) =>
    expect(it).toHaveStyle({ height: '100%' })
  )
})
```
- [ ] **Paso 2:** `npm run test` → FALLA.
- [ ] **Paso 3:** `blog-listing.css` — añadir:
```css
.post-grid .row { display: flex; flex-wrap: wrap; }
.post-grid .row > [class*="col-"] { display: flex; }
.post-grid .post-item {
  height: 100%;
  display: flex;
  flex-direction: column;
  width: 100%;
}
.post-grid .post-item .post__body { display: flex; flex-direction: column; flex: 1 1 auto; }
.post-grid .post-item .post__desc { flex: 1 1 auto; }
.post-grid .post-item .btn__custom { margin-top: auto; align-self: flex-start; }
```
- [ ] **Paso 4:** Si el test exige `display:flex` inline en las columnas y el CSS no basta para `toHaveStyle`, cambiar en `Blog.jsx` la col por `className="col-sm-12 col-md-6 col-lg-4 d-flex"`. (Preferir CSS; ajustar el test a `getComputedStyle` si es necesario.)
- [ ] **Paso 5:** `npm run test` → PASS. `npm run build` → OK.
- [ ] **Paso 6:** `git add -A && git commit -m "Blog: tarjetas del listado a igual altura (bug #7)"`

---

## Task A5: Contacto — márgenes/padding del form PQRS (bug #8)

**Files:**
- Create: `src/styles/contacto.css`
- Modify: `src/pages/Contacto.jsx` (import del css)
- Test: `src/pages/__tests__/Contacto.test.jsx` (assert ligero de que la clase existe)

- [ ] **Paso 1: test** — añadir a `Contacto.test.jsx`:
```jsx
test('el form PQRS tiene el contenedor con estilos propios', () => {
  setup()
  expect(document.querySelector('.contact__panel-form')).toBeInTheDocument()
  expect(document.querySelector('.contact-layout1 .contact-panel')).toBeInTheDocument()
})
```
- [ ] **Paso 2:** Crear `src/styles/contacto.css`:
```css
.contact-layout1 .contact-panel { padding: 0; }
.contact-layout1 .contact__panel-info { padding: 40px; }
.contact-layout1 .contact__panel-form {
  padding: 40px;
}
.contact-layout1 .contact__panel-form .row { margin-left: -12px; margin-right: -12px; }
.contact-layout1 .contact__panel-form .row > [class*="col-"] { padding-left: 12px; padding-right: 12px; }
.contact-layout1 .contact__panel-form .form-group { margin-bottom: 20px; }
.contact-layout1 .contact__panel-form .contact__panel-title { margin-bottom: 24px; }
.contact-layout1 .contact__panel-form #contactSubmitBtn { margin-top: 8px; }
.contact-layout1 .contact__panel-form textarea.form-control { min-height: 120px; }
@media (max-width: 575px) {
  .contact-layout1 .contact__panel-info,
  .contact-layout1 .contact__panel-form { padding: 24px; }
}
```
- [ ] **Paso 3:** `Contacto.jsx` — `import '../styles/contacto.css'`.
- [ ] **Paso 4:** `npm run test` → PASS. `npm run build` → OK.
- [ ] **Paso 5:** `git add -A && git commit -m "Contacto: mejora spacing del formulario PQRS (bug #8)"`

---

## Task A6: Verificación visual de la Fase A

- [ ] **Paso 1:** `npm run dev`; con Chrome headless capturar `/`, `/servicios`, `/servicios/diseno-ingenieria`, `/proyectos`, `/quienes-somos`, `/contacto`, `/blog` a 1440px.
- [ ] **Paso 2:** Servir `../afcprofire/` (`python -m http.server`) y capturar `index.html`, `servicios.html`, `proyectos.html`, `quienes-somos.html`, `contacto.html`, `blog.html`.
- [ ] **Paso 3:** Comparar par a par. Criterios:
  - Sin bandas de imagen crudas ni "espacio muerto" antes de secciones/formularios.
  - Page-titles de Proyectos y Quiénes somos con la foto como fondo `cover` centrado (sin `<img>` desbordado). Si algún banner corta a las personas, reducir `padding` vertical de ese page-title vía override en `src/styles/*.css`.
  - Preloader: al recargar se ve ~1 s el spinner con el logo en el centro y luego desaparece.
  - Quiénes somos: aparece "También puedes llamarnos al 311 645 6726"; el label "Ver el video" es negro y el botón está centrado.
  - Blog: las 12 tarjetas alineadas a la misma altura; botón "Ver blog" a la misma línea base.
  - Contacto: el form PQRS respira (padding 40px, campos separados).
- [ ] **Paso 4:** `npm run test` (suite completa) + `npm run build`.
- [ ] **Paso 5:** `git add -A && git commit -m "Fase A: verificación visual"` (si hubo ajustes) ; luego
  `git push origin reconstruccion-fiel` → `git switch main` → `git merge --ff-only reconstruccion-fiel` → `git push origin main`.
- [ ] **Paso 6:** Reportar al usuario: capturas antes/después + estado (% ≈ 60 de este plan) + tests.

---

# FASE B — Página Proveedores

Decisiones del usuario: enlace en **menú principal (entre Blog y Contacto) + footer**;
page-title **como el del código original, sin el espacio muerto** (se logra con el fix de A1);
3 tarjetas de descarga.

## Task B1: Documentos en `public/assets/docs/`

**Files (create):**
- `public/assets/docs/CCL-PR-02-Procedimiento-Gestion-Compras.pdf`
- `public/assets/docs/CCL-FO-05-Formulario-Inscripcion-Proveedores.xlsx`
- `public/assets/docs/Solicitud-Actualizacion-de-Datos.pdf`

- [ ] **Paso 1:** `mkdir -p public/assets/docs` y copiar los 3 archivos desde `C:/Users/Andrés/Downloads/` a esos nombres limpios.
- [ ] **Paso 2:** Verificar tamaños (`ls -la public/assets/docs/`): PDF ~298 KB, XLSX ~117 KB, PDF ~204 KB.
- [ ] **Paso 3:** `git add -A && git commit -m "Añade documentos de proveedores a public/assets/docs"`

---

## Task B2: Datos + página + ruta + navegación

**Files:**
- Create: `src/data/proveedores.js`
- Create: `src/pages/Proveedores.jsx`
- Create: `src/styles/proveedores.css`
- Modify: `src/App.jsx` (ruta `proveedores`)
- Modify: `src/data/navLinks.js` (mainNav + footer "Páginas")
- Modify: `src/components/Footer.jsx` (si el widget "Páginas" no mapea `navLinks`)
- Modify: `src/lib/useDocumentTitle.js` (título de `/proveedores`)
- Test: `src/pages/__tests__/Proveedores.test.jsx`, aserción en `Navbar.test.jsx` y `routing.test.jsx`

**Interfaces — Produces:**
```js
// src/data/proveedores.js
export const proveedorDocs = [
  { key, title, desc, filename, href, ext: 'PDF' | 'XLSX', sizeLabel, icon },
  … 3
]
```

- [ ] **Paso 1: tests que fallan** `src/pages/__tests__/Proveedores.test.jsx`:
```jsx
import { screen } from '@testing-library/react'
import { test, expect } from 'vitest'
import { renderRoute } from '../../test/renderRoute'
import Proveedores from '../Proveedores'
import { proveedorDocs } from '../../data/proveedores'

const setup = () => renderRoute('/proveedores', 'proveedores', <Proveedores />)

test('título y 3 tarjetas de descarga', () => {
  setup()
  expect(screen.getByRole('heading', { name: 'Proveedores', level: 1 })).toBeInTheDocument()
  const cards = document.querySelectorAll('.proveedor-card')
  expect(cards).toHaveLength(3)
})

test('cada tarjeta enlaza al documento correcto con download', () => {
  setup()
  const links = screen.getAllByRole('link', { name: /Descargar/i })
  expect(links).toHaveLength(3)
  proveedorDocs.forEach((d, i) => {
    expect(links[i]).toHaveAttribute('href', d.href)
    expect(links[i]).toHaveAttribute('download')
  })
  expect(proveedorDocs.map((d) => d.href)).toEqual([
    '/assets/docs/CCL-PR-02-Procedimiento-Gestion-Compras.pdf',
    '/assets/docs/CCL-FO-05-Formulario-Inscripcion-Proveedores.xlsx',
    '/assets/docs/Solicitud-Actualizacion-de-Datos.pdf',
  ])
})
```
  Y en `routing.test.jsx` añadir `/proveedores` al recorrido de "chrome único"; en `Navbar.test.jsx`:
```jsx
test('incluye Proveedores entre Blog y Contacto', () => {
  setup()
  const items = [...document.querySelectorAll('.navbar-nav > .nav__item > .nav__item-link')].map((a) => a.textContent)
  expect(items).toEqual(['Inicio', 'Servicios', 'Proyectos', 'Quienes somos', 'Blog', 'Proveedores', 'Contacto'])
})
```
- [ ] **Paso 2:** `npm run test` → FALLA.
- [ ] **Paso 3:** `src/data/proveedores.js`:
```js
export const proveedorDocs = [
  {
    key: 'gestion-compras',
    title: 'Procedimiento de Gestión de Compras',
    desc: 'Lineamientos de AFC Pro Fire para la selección, evaluación y contratación de proveedores.',
    filename: 'CCL-PR-02 Procedimiento de Gestión de Compras.pdf',
    href: '/assets/docs/CCL-PR-02-Procedimiento-Gestion-Compras.pdf',
    ext: 'PDF',
    sizeLabel: '291 KB',
    icon: 'fas fa-file-pdf',
  },
  {
    key: 'inscripcion',
    title: 'Formulario de Inscripción de Proveedores',
    desc: 'Diligéncialo para registrarte como proveedor. Formato Excel (CCL-FO-05).',
    filename: 'CCL-FO-05 Formulario de Inscripción de Proveedores.xlsx',
    href: '/assets/docs/CCL-FO-05-Formulario-Inscripcion-Proveedores.xlsx',
    ext: 'XLSX',
    sizeLabel: '115 KB',
    icon: 'fas fa-file-excel',
  },
  {
    key: 'actualizacion-datos',
    title: 'Solicitud de Actualización de Datos',
    desc: 'Usa este formato si ya eres proveedor y necesitas actualizar tu información.',
    filename: 'Solicitud de Actualización de Datos.pdf',
    href: '/assets/docs/Solicitud-Actualizacion-de-Datos.pdf',
    ext: 'PDF',
    sizeLabel: '200 KB',
    icon: 'fas fa-file-pdf',
  },
]
```
  (Ajustar `sizeLabel` a los bytes reales tras B1.)
- [ ] **Paso 4:** `src/pages/Proveedores.jsx` — usa `PageTitle` (mismo estilo que Blog/Proyectos, ya sin espacio muerto por A1) + una `section` con las 3 tarjetas:
```jsx
import '../styles/proveedores.css'
import PageTitle from '../components/PageTitle'
import { proveedorDocs } from '../data/proveedores'

export default function Proveedores() {
  return (
    <>
      <PageTitle
        variant="layout1"
        bg="/assets/images/page-titles/12.jpg"
        heading="Proveedores"
        breadcrumb={[{ label: 'Inicio', to: '/' }, { label: 'Proveedores' }]}
        colClass="col-12 text-center"
      />
      <section className="proveedores-section pt-90 pb-90">
        <div className="container">
          <div className="row mb-50">
            <div className="col-lg-8 mx-auto text-center">
              <p className="heading__desc">
                Si deseas ser proveedor de AFC Pro Fire o actualizar tus datos, descarga
                aquí los formatos de nuestro Sistema de Gestión de Compras.
              </p>
            </div>
          </div>
          <div className="row">
            {proveedorDocs.map((d) => (
              <div key={d.key} className="col-sm-12 col-md-6 col-lg-4">
                <article className="proveedor-card">
                  <div className="proveedor-card__icon"><i className={d.icon}></i></div>
                  <span className="proveedor-card__ext">{d.ext}</span>
                  <h4 className="proveedor-card__title">{d.title}</h4>
                  <p className="proveedor-card__desc">{d.desc}</p>
                  <a className="btn btn__primary proveedor-card__btn" href={d.href} download={d.filename}>
                    <i className="icon-download"></i>
                    <span>Descargar {d.ext}</span>
                  </a>
                  <span className="proveedor-card__size">{d.sizeLabel}</span>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
```
- [ ] **Paso 5:** `src/styles/proveedores.css` — tarjetas agradables (borde suave, sombra, hover, icono grande en color del ext, botón naranja):
```css
.proveedores-section { background: #f8f9fa; }
.proveedor-card {
  height: 100%;
  display: flex; flex-direction: column; align-items: flex-start;
  background: #fff; border: 1px solid #eef0f2; border-radius: 14px;
  padding: 34px 28px; margin-bottom: 30px;
  box-shadow: 0 6px 24px rgba(0,0,0,.06);
  transition: transform .25s ease, box-shadow .25s ease;
  position: relative;
}
.proveedor-card:hover { transform: translateY(-6px); box-shadow: 0 14px 40px rgba(0,0,0,.12); }
.proveedor-card__icon { font-size: 44px; color: #ef7d00; margin-bottom: 18px; }
.proveedor-card__ext {
  position: absolute; top: 22px; right: 22px;
  font-size: 12px; font-weight: 700; letter-spacing: .5px;
  color: #004062; background: #eaf1f5; border-radius: 6px; padding: 4px 10px;
}
.proveedor-card__title { color: #004062; font-size: 19px; margin-bottom: 10px; }
.proveedor-card__desc { color: #5b6670; font-size: 14.5px; line-height: 1.7; flex: 1 1 auto; margin-bottom: 22px; }
.proveedor-card__btn { align-self: stretch; justify-content: center; }
.proveedor-card__size { color: #9aa4ad; font-size: 12px; margin-top: 12px; }
```
- [ ] **Paso 6:** `navLinks.js` — `mainNav`: insertar `{ to: '/proveedores', label: 'Proveedores' }` **entre** Blog y Contacto. Añadir export `footerPages` (Quiénes somos, Blog, Proveedores, Contacto) y usarlo en `Footer.jsx` si el widget "Páginas" está hardcodeado.
- [ ] **Paso 7:** `Footer.jsx` — añadir `<li><Link to="/proveedores">Proveedores</Link></li>` en el widget "Páginas" (tras Blog).
- [ ] **Paso 8:** `App.jsx` — `<Route path="proveedores" element={<Proveedores />} />` (antes de `blog`).
- [ ] **Paso 9:** `useDocumentTitle.js` — `'/proveedores': 'AFC PRO FIRE - Proveedores'` en `FIXED`.
- [ ] **Paso 10:** `npm run test` → PASS. `npm run build` → OK.
- [ ] **Paso 11:** `git add -A && git commit -m "Nueva página Proveedores con 3 descargas + enlace en nav y footer"`

---

## Task B3: Verificación de la Fase B

- [ ] **Paso 1:** `npm run dev`; captura headless de `/proveedores` a 1440 y a 390 px.
- [ ] **Paso 2:** Revisar: 3 tarjetas alineadas a igual altura, iconos PDF/Excel, botón "Descargar PDF/XLSX", hover, responsive (1 columna en móvil). Page-title sin espacio muerto.
- [ ] **Paso 3:** Descargar cada archivo desde la página servida (`curl -I http://localhost:5173/assets/docs/…`) → HTTP 200 y `content-type` correcto.
- [ ] **Paso 4:** Comprobar que "Proveedores" aparece en el menú (entre Blog y Contacto) y en el footer.
- [ ] **Paso 5:** `npm run test` (suite completa) + `npm run build`.
- [ ] **Paso 6:** `git push origin reconstruccion-fiel` → `git switch main` → `git merge --ff-only reconstruccion-fiel` → `git push origin main`.
- [ ] **Paso 7:** Reportar: captura de `/proveedores`, confirmación de descargas, tests (nº), 100 % del plan.

---

## Auto-revisión

- Bugs #1/#2/#3 (fondos/espacios/banners) → Task A1. ✔
- Bug #4 (teléfono Quiénes somos) → Task A3. ✔
- Bug #5 (preloader + logo) → Task A2. ✔
- Bug #6 ("Ver el video" negro + centrado) → Task A3. ✔
- Bug #7 (tarjetas blog igual altura) → Task A4. ✔
- Bug #8 (spacing form PQRS) → Task A5. ✔
- Página Proveedores + 3 descargas + nav + footer + título + tests → Tasks B1–B3. ✔
- "Todo testeado": cada task añade/ajusta tests; A6 y B3 corren la suite completa + build + revisión visual.

**Nombres consistentes:** `bgCover` (A1). `proveedorDocs` (B). `proveedores` ruta/testid. `footerPages` (B).
**Decisión abierta:** si tras A1 el banner de Proyectos/Quiénes-somos sigue cortando a las personas,
reducir `padding` vertical de ese `page-title` (override en `src/styles/`), documentándolo en A6.
