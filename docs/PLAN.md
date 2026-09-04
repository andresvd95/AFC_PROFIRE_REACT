# Plan de implementación — Reconstrucción afcprofire-react

> **Para quien ejecuta (humano o agente):** implementar tarea por tarea. Cada paso es una acción
> de 2–5 min. Los pasos usan casillas `- [ ]`. Sub-skill recomendada:
> `superpowers:subagent-driven-development` o `superpowers:executing-plans`.

**Objetivo:** Portar el sitio estático `../afcprofire/` a React (Vite + Router 6) con fidelidad 1:1,
eliminando la duplicación actual, con un smoke test por ruta en verde y `npm run build` limpio.

**Arquitectura:** Rutas anidadas bajo un `Layout` único (chrome común). Los plugins jQuery del
tema se re-inicializan en cada cambio de ruta vía `src/lib/theme.js` (`initTheme`/`destroyTheme`).
Contenido dirigido por datos (`src/data/*.js`). Ver [TDD.md](./TDD.md).

**Tech Stack:** React 18, react-router-dom 6, @emailjs/browser 3, Vite 5, Vitest + React Testing Library + jsdom.

**Spec:** [PRD.md](./PRD.md) + [TDD.md](./TDD.md). El plan argumenta desde ellos; se leen juntos.

## Global Constraints

- **Fuente de verdad:** `../afcprofire/<archivo>.html`. Ante cualquier diferencia con el React
  actual, manda el HTML original. Las páginas React actuales son sólo referencia y se reescriben.
- **CSS del tema intocable:** `public/assets/css/libraries.css` y `style.css` no se editan.
- **No cargar `assets/js/main.js`.** Su lógica vive en `src/lib/theme.js`.
- **Assets:** `public/assets/` ya está completo. No se copian imágenes. Referencias rotas del
  original (PRD §8) se replican tal cual salvo aprobación explícita.
- **Enlaces internos con `<Link>`**; externos (`wa.link`, redes, `tel:`, PDFs con `download`) con `<a>`.
- **Sin dependencias runtime nuevas.** Sólo devDeps de test.
- **EmailJS:** service `service_433wpss`, Public Key `yPAstTbHDQ-GCT7Lm`.
  Form asesoría → template `template_l61hkol`. Form PQRS (contacto) → template `template_0rq3a9q`.
- **Commits frecuentes**, uno por Task como mínimo. Mensajes en español, imperativo.
- **Cada Task termina con:** `npm run test` en verde (y `npm run build` en las Tasks marcadas).

---

## Task 0: Inicializar git y baseline

**Files:**
- Create: `afcprofire-react/.gitignore`

- [ ] **Paso 1:** Verificar que no hay repo: `git -C afcprofire-react rev-parse --is-inside-work-tree` → error esperado.
- [ ] **Paso 2:** `cd afcprofire-react && git init && git branch -M main`
- [ ] **Paso 3:** Crear `.gitignore`:
```
node_modules
dist
*.log
.DS_Store
```
- [ ] **Paso 4:** `git add -A && git commit -m "Baseline: proyecto React parcial antes de la reconstrucción"`
- [ ] **Paso 5:** `git switch -c reconstruccion-fiel`

---

## Task 1: Infra de test (Vitest + RTL)

**Files:**
- Modify: `package.json` (scripts + devDependencies)
- Modify: `vite.config.js`
- Create: `src/setupTests.js`
- Create: `src/lib/__tests__/sanity.test.js`

**Interfaces — Produces:** `npm run test` ejecuta Vitest en jsdom con `@emailjs/browser` mockeado
y `window.scrollTo` stub.

- [ ] **Paso 1:** Instalar devDeps:
```bash
npm i -D vitest @testing-library/react @testing-library/jest-dom @testing-library/user-event jsdom
```
- [ ] **Paso 2:** En `package.json` añadir a `scripts`: `"test": "vitest run"`, `"test:watch": "vitest"`.
- [ ] **Paso 3:** Reescribir `vite.config.js`:
```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/setupTests.js',
    css: false,
  },
})
```
- [ ] **Paso 4:** Crear `src/setupTests.js`:
```js
import '@testing-library/jest-dom/vitest'
import { vi } from 'vitest'

vi.mock('@emailjs/browser', () => {
  const sendForm = vi.fn(() => Promise.resolve({ status: 200, text: 'OK' }))
  const init = vi.fn()
  return { default: { sendForm, init }, sendForm, init }
})

window.scrollTo = vi.fn()
```
- [ ] **Paso 5:** Crear `src/lib/__tests__/sanity.test.js`:
```js
import { test, expect } from 'vitest'
test('el entorno de test funciona', () => { expect(1 + 1).toBe(2) })
```
- [ ] **Paso 6:** Ejecutar `npm run test`. Esperado: 1 archivo, 1 test, PASS.
- [ ] **Paso 7:** `git add -A && git commit -m "Añade infra de test (Vitest + RTL + jsdom)"`

---

## Task 2: `src/lib/theme.js` — initTheme / destroyTheme

**Files:**
- Create: `src/lib/theme.js`
- Create: `src/lib/__tests__/theme.test.js`

**Interfaces — Produces:** `initTheme(): void`, `destroyTheme(): void`. Sin jQuery → no-op sin throw.

- [ ] **Paso 1: Test que falla.** `src/lib/__tests__/theme.test.js`:
```js
import { test, expect, vi } from 'vitest'
import { initTheme, destroyTheme } from '../theme'

test('exporta funciones', () => {
  expect(typeof initTheme).toBe('function')
  expect(typeof destroyTheme).toBe('function')
})

test('sin window.jQuery no lanza', () => {
  expect(window.jQuery).toBeUndefined()
  expect(() => { initTheme(); destroyTheme(); initTheme() }).not.toThrow()
})
```
- [ ] **Paso 2:** `npm run test` → FALLA (módulo no existe).
- [ ] **Paso 3: Implementar** `src/lib/theme.js`. Portar `assets/js/main.js` (leer entero primero).
  Requisitos (ver TDD §5 y Anexo A):
  - `const $ = () => window.jQuery`. Si `!$()` → `return` en ambas funciones.
  - `destroyTheme()`: `$(window).off('.afcTheme'); $(document).off('.afcTheme')`;
    para cada `$('.slick-initialized')` → `.slick('unslick')`;
    `if ($.fn.niceSelect) $('select').niceSelect('destroy')`;
    `$.magnificPopup && $.magnificPopup.close && $.magnificPopup.close()`.
  - `initTheme()`:
    - `.bg-img`: por cada `.bg-img` que tenga `> img`, fijar `background-image/size:cover/position:center`
      en el propio elemento, añadir clase `background-size-auto` si el img la tiene, y `remove()` el img.
      (idempotente: si ya no hay img hijo, saltar).
    - Sticky navbar: `$(window).on('scroll.afcTheme', ...)` togglea `.is-sticky` en `.sticky-navbar` si `width>=992 && scrollTop>200`.
    - Scroll-top: `$(window).on('scroll.afcTheme', ...)` togglea `.actived` en `#scrollTopBtn` si `scrollTop>700`;
      `$(document).on('click.afcTheme', '#scrollTopBtn', ...)` → `$('html,body').animate({scrollTop:0},500)`.
    - Menú móvil: `$(document).on('click.afcTheme', '.navbar-toggler', ...)` add `.menu-opened` a `.navbar-collapse`;
      `.close-mobile-menu` → remove.
    - Acordeones: `$(document).on('click.afcTheme', '.accordion__item-header', ...)` → `.opened` al `.accordion-item`, quita a `siblings`.
    - Slick: `$('.slick-carousel').not('.slick-initialized').slick()` (usa `data-slick`);
      `.slider-with-navs` / `.slider-nav` con las opciones portadas de `main.js`;
      `.gallery-slider` con las opciones de `quienes-somos.html` (leer su `data-slick`, Slick lo aplica solo).
      Filtro: `$(document).on('click.afcTheme', '#slick-filter-buttons .nav__link', ...)` → `slickFilter` como en `main.js`.
    - Magnific: `.popup-video` (config iframe+patterns de `main.js`), `.popup-gallery-item` y
      `.popup-gallery` (config galería). Llamar sólo si `$.fn.magnificPopup`.
    - `if ($.fn.counterUp) $('.counter').counterUp({ delay:10, time:4000 })`.
    - `if ($.fn.niceSelect) $('select').niceSelect()`.
  - **No** portar: search/cart popup, loadMore, mixItUp, range slider, `contactForm.validate()`.
- [ ] **Paso 4:** `npm run test` → PASS.
- [ ] **Paso 5:** `git add -A && git commit -m "Añade theme.js: re-init de plugins del tema por ruta"`

---

## Task 3: `index.html` + `main.jsx` limpios

**Files:**
- Modify: `index.html`
- Verify: `src/main.jsx` (sin cambios esperados)

- [ ] **Paso 1:** Reemplazar `index.html` por el contenido de TDD §4 (fonts + FA + libraries.css +
  style.css en `<head>`; en `<body>`: `#root`, luego jQuery, `plugins.js`, SDK EmailJS CDN, y por
  último `<script type="module" src="/src/main.jsx">`). **Sin** `main.js`. **Sin** `emailjs.init` inline.
- [ ] **Paso 2:** `npm run build` → sin errores.
- [ ] **Paso 3:** `git add -A && git commit -m "index.html: carga tema + jQuery antes del bundle, elimina main.js"`

---

## Task 4: Layout, Preloader, RouteEffects, useDocumentTitle

**Files:**
- Create: `src/layout/Preloader.jsx`, `src/layout/RouteEffects.jsx`, `src/layout/Layout.jsx`
- Create: `src/lib/useDocumentTitle.js`
- Create: `src/layout/__tests__/Layout.test.jsx`

**Interfaces — Produces:**
- `<Layout/>` = `<div className="wrapper{ ' only-info' si /blog/:slug}"> <Preloader/> <Navbar/> <RouteEffects/> <main><Outlet/></main> <Footer/> <button id="scrollTopBtn"/> </div>`
- `routeTitle(pathname): string`

**Interfaces — Consumes:** `Navbar`, `Footer` (Task 5/6). Para esta Task usar stubs mínimos si aún no existen, o reordenar y hacer Task 5/6 antes. Recomendado: hacer 5 y 6 antes de 4.

- [ ] **Paso 1: Test que falla.** `src/layout/__tests__/Layout.test.jsx`:
```jsx
import { render, screen } from '@testing-library/react'
import { MemoryRouter, Routes, Route } from 'react-router-dom'
import Layout from '../Layout'

test('Layout renderiza chrome y el outlet una sola vez', () => {
  render(
    <MemoryRouter initialEntries={['/']}>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<div>PAGINA</div>} />
        </Route>
      </Routes>
    </MemoryRouter>
  )
  expect(screen.getByText('PAGINA')).toBeInTheDocument()
  expect(document.querySelectorAll('header.header').length).toBe(1)
  expect(document.querySelectorAll('footer.footer').length).toBe(1)
  expect(document.querySelector('#scrollTopBtn')).toBeTruthy()
})

test('wrapper recibe only-info en rutas de artículo', () => {
  render(
    <MemoryRouter initialEntries={['/blog/x']}>
      <Routes><Route element={<Layout />}><Route path="blog/:slug" element={<div>ART</div>} /></Route></Routes>
    </MemoryRouter>
  )
  expect(document.querySelector('.wrapper.only-info')).toBeTruthy()
})
```
- [ ] **Paso 2:** `npm run test` → FALLA.
- [ ] **Paso 3:** `src/layout/Preloader.jsx`:
```jsx
export default function Preloader() {
  return (
    <div className="preloader">
      <div className="loading"><span></span><span></span><span></span><span></span></div>
    </div>
  )
}
```
- [ ] **Paso 4:** `src/lib/useDocumentTitle.js` — exporta `routeTitle(pathname)` con el mapa de PRD §4.1
  (para `/blog/:slug` y `/servicios/:slug` resolver desde `blogPosts`/`servicesDetail`; si no hay match → `'AFC PRO FIRE'`).
- [ ] **Paso 5:** `src/layout/RouteEffects.jsx`:
```jsx
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { initTheme, destroyTheme } from '../lib/theme'
import { routeTitle } from '../lib/useDocumentTitle'

export default function RouteEffects() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
    const pre = document.querySelector('.preloader')
    if (pre) pre.style.display = 'none'
    document.title = routeTitle(pathname)
    destroyTheme()
    const id = window.setTimeout(initTheme, 60)
    return () => window.clearTimeout(id)
  }, [pathname])
  return null
}
```
- [ ] **Paso 6:** `src/layout/Layout.jsx`:
```jsx
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Preloader from './Preloader'
import RouteEffects from './RouteEffects'

export default function Layout() {
  const { pathname } = useLocation()
  const onlyInfo = pathname.startsWith('/blog/')
  return (
    <div className={`wrapper${onlyInfo ? ' only-info' : ''}`}>
      <Preloader />
      <Navbar />
      <RouteEffects />
      <Outlet />
      <Footer />
      <button id="scrollTopBtn"><i className="fas fa-long-arrow-alt-up"></i></button>
    </div>
  )
}
```
- [ ] **Paso 7:** `npm run test` → PASS.
- [ ] **Paso 8:** `git add -A && git commit -m "Añade Layout con rutas anidadas + RouteEffects (scroll/preloader/title/theme)"`

---

## Task 5: `Navbar.jsx` + `data/navLinks.js`

**Files:**
- Create: `src/data/navLinks.js`
- Rewrite: `src/components/Navbar.jsx`
- Create: `src/components/__tests__/Navbar.test.jsx`

**Interfaces — Produces:** `mainNav`, `services`, `footerServices` (arrays con `{to,label}`).

- [ ] **Paso 1: Test que falla.** `src/components/__tests__/Navbar.test.jsx`:
```jsx
import { render, screen, within } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Navbar from '../Navbar'

const setup = (path = '/') =>
  render(<MemoryRouter initialEntries={[path]}><Navbar /></MemoryRouter>)

test('tiene los items principales', () => {
  setup()
  for (const label of ['Inicio', 'Servicios', 'Proyectos', 'Quienes somos', 'Blog', 'Contacto'])
    expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
})

test('dropdown de servicios: 6 enlaces con rutas /servicios/*', () => {
  setup()
  const menu = document.querySelector('.dropdown-menu')
  const links = within(menu).getAllByRole('link')
  expect(links).toHaveLength(6)
  expect(links[0]).toHaveAttribute('href', '/servicios/diseno-ingenieria')
})

test('marca active la ruta actual', () => {
  setup('/proyectos')
  expect(screen.getByRole('link', { name: 'Proyectos' })).toHaveClass('active')
})

test('logo enlaza a home y botón asesoría es externo', () => {
  setup()
  expect(document.querySelector('.navbar-brand')).toHaveAttribute('href', '/')
  expect(screen.getByRole('link', { name: /Asesoría/ })).toHaveAttribute('href', 'https://wa.link/j2cd22')
})
```
- [ ] **Paso 2:** `npm run test` → FALLA.
- [ ] **Paso 3:** Crear `src/data/navLinks.js` (contenido de TDD §8.1; textos EXACTOS del dropdown de `index.html`).
- [ ] **Paso 4:** Reescribir `Navbar.jsx` con el markup EXACTO de `<header class="header header-layout1">`
  de `index.html` líneas 117–171:
  - `navbar-brand` `<Link to="/">` con `logo.png`.
  - `navbar-toggler` con `<span className="menu-lines"><span/></span>`.
  - `#mainNavigation > .navbar-nav` mapeando `mainNav`; el item "Servicios" es `.nav__item.has-dropdown`
    con `<Link to="/servicios">`, `<button className="dropdown-toggle" data-toggle="dropdown">` y
    `<ul className="dropdown-menu">` mapeando `services`.
  - Clase del enlace: `nav__item-link` + `active` si `to === pathname` (para el item Servicios,
    activo también si `pathname.startsWith('/servicios')`).
  - `close-mobile-menu`, `contact__number` (`tel:+573116456726`, texto "311 645 6726"),
    `navbar-actions` con `<a href="https://wa.link/j2cd22" className="btn btn__primary">`.
  - Conservar `d-none d-xl-flex`, `d-block d-lg-none`, etc.
- [ ] **Paso 5:** `npm run test` → PASS.
- [ ] **Paso 6:** `git add -A && git commit -m "Navbar fiel a index.html + data/navLinks"`

---

## Task 6: `Footer.jsx`

**Files:**
- Rewrite: `src/components/Footer.jsx`
- Create: `src/components/__tests__/Footer.test.jsx`

**Interfaces — Consumes:** `footerServices` de `navLinks.js`.

- [ ] **Paso 1: Test que falla.** `src/components/__tests__/Footer.test.jsx`:
```jsx
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Footer from '../Footer'

const setup = () => render(<MemoryRouter><Footer /></MemoryRouter>)

test('widgets y enlaces clave', () => {
  setup()
  expect(screen.getByText('Contacto')).toBeInTheDocument()
  expect(screen.getByText('Documentos')).toBeInTheDocument()
  expect(screen.getByRole('link', { name: /Directrices del Sistema Integrado de Gestión/ }))
    .toHaveAttribute('href', '/assets/images/GES-DO-01-Directrices del SIG.pdf')
  expect(screen.getByRole('link', { name: /Descargar PDF/ }))
    .toHaveAttribute('href', '/assets/images/brochureAfcProfire.pdf')
  expect(screen.getByText(/© 2026 AFC Pro Fire/)).toBeInTheDocument()
})

test('enlaces internos usan rutas React', () => {
  setup()
  expect(screen.getByRole('link', { name: 'Quienes somos' })).toHaveAttribute('href', '/quienes-somos')
})
```
- [ ] **Paso 2:** `npm run test` → FALLA.
- [ ] **Paso 3:** Reescribir `Footer.jsx` con el markup EXACTO de `<footer class="footer">` de
  `index.html` líneas 543–637, **incluyendo** el bloque `<h6>Documentos</h6>` dentro del 2º widget.
  Internos → `<Link>`; brochure/SIG → `<a>` (`download` en el brochure); redes → `<a target="_blank" rel="noopener noreferrer">`.
  Copyright "© 2026 AFC Pro Fire, Todos los derechos reservados." + `<a href="https://api.whatsapp.com/send?phone=573155516839">Hecho por: AndresVd</a>`.
- [ ] **Paso 4:** `npm run test` → PASS.
- [ ] **Paso 5:** `git add -A && git commit -m "Footer fiel a index.html (incluye widget Documentos)"`

---

## Task 7: `ContactForm.jsx` (asesoría — template_l61hkol)

**Files:**
- Rewrite: `src/components/ContactForm.jsx`
- Create: `src/components/__tests__/ContactForm.test.jsx`

**Interfaces — Produces:** `<ContactForm variant?="home"|"service" />`. Envía `sendForm('service_433wpss','template_l61hkol', form, 'yPAstTbHDQ-GCT7Lm')`.

- [ ] **Paso 1: Test que falla.** `src/components/__tests__/ContactForm.test.jsx`:
```jsx
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import emailjs from '@emailjs/browser'
import ContactForm from '../ContactForm'

test('campos del form de asesoría', () => {
  render(<ContactForm />)
  expect(screen.getByPlaceholderText('Nombre')).toBeRequired()
  expect(screen.getByPlaceholderText('Correo')).toHaveAttribute('type', 'email')
  expect(screen.getByPlaceholderText('Celular')).not.toBeRequired()
  expect(screen.getByPlaceholderText('Dirección')).toBeRequired()
  expect(screen.getAllByRole('radio')).toHaveLength(3)
})

test('envío válido llama a EmailJS con los IDs correctos', async () => {
  const user = userEvent.setup()
  render(<ContactForm />)
  await user.type(screen.getByPlaceholderText('Nombre'), 'Ana')
  await user.type(screen.getByPlaceholderText('Correo'), 'ana@test.com')
  await user.type(screen.getByPlaceholderText('Dirección'), 'Calle 1')
  await user.click(screen.getByRole('button', { name: /Enviar correo/ }))
  expect(emailjs.sendForm).toHaveBeenCalledWith(
    'service_433wpss', 'template_l61hkol', expect.anything(), 'yPAstTbHDQ-GCT7Lm'
  )
  expect(await screen.findByText(/Gracias/)).toBeInTheDocument()
})

test('email inválido no envía y marca error', async () => {
  const user = userEvent.setup()
  emailjs.sendForm.mockClear()
  render(<ContactForm />)
  await user.type(screen.getByPlaceholderText('Nombre'), 'Ana')
  await user.type(screen.getByPlaceholderText('Correo'), 'no-es-email')
  await user.type(screen.getByPlaceholderText('Dirección'), 'Calle 1')
  await user.click(screen.getByRole('button', { name: /Enviar correo/ }))
  expect(emailjs.sendForm).not.toHaveBeenCalled()
  expect(screen.getByText(/no es válido/i)).toBeInTheDocument()
})
```
- [ ] **Paso 2:** `npm run test` → FALLA.
- [ ] **Paso 3:** Reescribir `ContactForm.jsx`. Markup del `<form id="contactForm">` de `index.html`
  (`.contact-panel > form > .row` con `col-12` título "Asesoría", 4 inputs en `col-sm-6`, bloque
  "Medio de contacto" con 3 `label.label-radio` + `<button type="submit" className="btn btn__secondary btn__block">`
  + `<div className="contact-result">`). Lógica de TDD §7.3:
  - `formRef`, estado `loading`, `result`, `pref` (default `'Todos'`).
  - `onSubmit`: `preventDefault`; validar requeridos (marca `is-invalid`) + email regex; si falla,
    render `<div className="alert alert-danger">…</div>` en `.contact-result` y `return`.
  - Si ok: `setLoading(true)`, botón "Enviando…", `await emailjs.sendForm(...)`, éxito →
    `alert-success` "✅ ¡Gracias!…" + `formRef.current.reset()` + `setPref('Todos')`; error → `alert-danger`.
  - `import emailjs from '@emailjs/browser'`.
- [ ] **Paso 4:** `npm run test` → PASS.
- [ ] **Paso 5:** `git add -A && git commit -m "ContactForm (asesoría) con EmailJS y validación cliente"`

---

## Task 8: `ContactFormPQRS.jsx` (contacto — template_0rq3a9q)

**Files:**
- Create: `src/components/ContactFormPQRS.jsx`
- Create: `src/components/__tests__/ContactFormPQRS.test.jsx`

- [ ] **Paso 1: Test que falla.** Aserciones:
  - Campos: `Nombre`, `Correo` (type email), `Celular` (required), `<select name="contact_pref">`
    con opciones Correo/WhatsApp/Llamada, `textarea` "Mensaje" (required).
  - Envío válido (nombre≥2, email válido, teléfono `3001234567`, medio `Correo`, mensaje ≥10 chars)
    → `emailjs.sendForm('service_433wpss','template_0rq3a9q', ...)` llamado.
  - Mensaje de 3 chars → no envía, muestra "al menos 10 caracteres".
```jsx
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import emailjs from '@emailjs/browser'
import ContactFormPQRS from '../ContactFormPQRS'

test('PQRS: envío válido usa template_0rq3a9q', async () => {
  const user = userEvent.setup()
  render(<ContactFormPQRS />)
  await user.type(screen.getByPlaceholderText('Nombre'), 'Ana Perez')
  await user.type(screen.getByPlaceholderText('Correo'), 'ana@test.com')
  await user.type(screen.getByPlaceholderText('Celular'), '3001234567')
  await user.selectOptions(screen.getByRole('combobox'), 'Correo')
  await user.type(screen.getByPlaceholderText('Mensaje'), 'Necesito una cotización pronto')
  await user.click(screen.getByRole('button', { name: /Enviar/ }))
  expect(emailjs.sendForm).toHaveBeenCalledWith(
    'service_433wpss', 'template_0rq3a9q', expect.anything(), 'yPAstTbHDQ-GCT7Lm'
  )
})
```
- [ ] **Paso 2:** `npm run test` → FALLA.
- [ ] **Paso 3:** Implementar con markup de `<form id="contactFormEmailJS">` de `contacto.html`
  (líneas ~120–190) y validaciones portadas del `<script>` (líneas ~309–400): `EMAIL_RE`,
  `PHONE_RE=/^[0-9+\-\s()]{7,20}$/`, nombre≥2, medio requerido, mensaje≥10; lista de errores en `#contactResult`.
- [ ] **Paso 4:** `npm run test` → PASS.
- [ ] **Paso 5:** `git add -A && git commit -m "ContactFormPQRS (contacto) con EmailJS y validación"`

---

## Task 9: Datos de páginas — `services.js`, `servicesDetail.js`, `projects.js`

**Files:**
- Create: `src/data/services.js`, `src/data/servicesDetail.js`, `src/data/projects.js`
- Create: `src/data/__tests__/data.test.js`

- [ ] **Paso 1: Test que falla.** `src/data/__tests__/data.test.js`:
```js
import { services } from '../services'
import { servicesDetail } from '../servicesDetail'
import { galleryImages, galleryVideos } from '../projects'

test('services: 7 con slug único y rutas /servicios/*', () => {
  expect(services).toHaveLength(7)
  const slugs = services.map(s => s.slug)
  expect(new Set(slugs).size).toBe(7)
  expect(services.find(s => s.slug === 'diseno-ingenieria').to).toBe('/servicios/diseno-ingenieria')
})

test('servicesDetail: 7 registros, cada uno con title/metaTitle/blocks', () => {
  expect(servicesDetail).toHaveLength(7)
  for (const s of servicesDetail) {
    expect(s.slug && s.title && s.metaTitle).toBeTruthy()
    expect(Array.isArray(s.blocks)).toBe(true)
  }
  expect(servicesDetail.find(s => s.slug === 'diseno-ingenieria').blocks.length).toBe(7)
})

test('projects: 19 imágenes y 2 vídeos, en el orden del original', () => {
  expect(galleryImages).toHaveLength(19)
  expect(galleryVideos).toHaveLength(2)
  expect(galleryImages[0]).toContain('instalacion-1.png')
})
```
- [ ] **Paso 2:** `npm run test` → FALLA.
- [ ] **Paso 3:** `services.js` — 7 registros con `{ slug, to, img, cardHome:{title,descHtml},
  cardServicios:{title,descHtml}, group }`. `cardHome.*` de `index.html` líneas 303–416;
  `cardServicios.*` de `servicios.html` líneas 873–993. `group`: 'principal' (4) / 'complementaria'
  (diagnostico, transferencia-conocimiento) para Home; en Servicios el agrupador es por título de
  sección ("1. Protección…" = primeros 4 + ¿diseño?, ver el HTML; "2. Asesorías…" = diagnóstico + conceptualización).
- [ ] **Paso 4:** `servicesDetail.js` — 7 registros (forma TDD §7.6). Transcribir de:
  `diseno-Ingenieria.html` (85–284), `instalacion.html` (557–645), `mantenimiento.html` (1017–1113),
  `auditoria.html` (86–197), `diagnostico.html` (85–190), `conceptualizacion.html` (84–176),
  `transferenciaConocimiento.html` (85–183). `metaTitle` de `_meta.json`. `bannerImg` con la ruta
  literal del HTML (rota en varias — no corregir).
- [ ] **Paso 5:** `projects.js` — `galleryImages` (19: `instalacion-1..5`, `sistema-1..5`, 9 fotos
  `proyectos/WhatsApp Image …`) y `galleryVideos` (2 `proyectos/WhatsApp Video …`), orden EXACTO de
  `proyectos.html` líneas 190–380.
- [ ] **Paso 6:** `npm run test` → PASS.
- [ ] **Paso 7:** `git add -A && git commit -m "Datos: services, servicesDetail, projects"`

---

## Task 10: `data/blogPosts.js` reconstruido desde blog1..12.html

**Files:**
- Rewrite: `src/data/blogPosts.js`
- Create: `src/data/__tests__/blogPosts.test.js`

**Tabla slug ↔ fuente (fijar en este orden — el de aparición en `blog.html`):**

| # en `blog.html` | slug | fuente | título |
|---|---|---|---|
| 1 | `incendios-en-hospitales` | `blog12.html` | Incendios en Hospitales: El Riesgo Invisible |
| 2 | `codigos-y-normas-de-alarmas` | `blog11.html` | Guía Fundamental: ¿Quién es quién en los Códigos y Normas de Alarmas de Incendio? |
| 3 | `tragedia-en-los-alpes` | `blog10.html` | Tragedia en los Alpes: Lecciones de Seguridad Humana |
| 4 | `mantenimiento-de-redes-contra-incendio` | `blog9.html` | ¿Tu edificio está protegido realmente? |
| 5 | `primeros-auxilios-en-quemaduras` | `blog8.html` | Primeros Auxilios en Quemaduras: Guía de Actuación |
| 6 | `preguntas-frecuentes-faq` | `blog7.html` | Preguntas Frecuentes (FAQ) |
| 7 | `desmintiendo-mitos-comunes` | `blog6.html` | Desmintiendo Mitos Comunes |
| 8 | `que-puedes-hacer-tu` | `blog5.html` | ¿Qué Puedes Hacer Tú? |
| 9 | `la-sinergia-de-la-seguridad` | `blog4.html` | La sinergia de la seguridad |
| 10 | `tipos-de-proteccion` | `blog3.html` | Tus aliados contra el fuego: tipos de protección |
| 11 | `triangulo-del-fuego` | `blog2.html` | Triángulo del Fuego y clases de incendio |
| 12 | `proteccion-contra-incendios` | `blog1.html` | ¿Por qué la protección contra incendios es vital para ti? |

> Verificar los títulos/fechas/imágenes contra cada `blogN.html` real al transcribir (el listado de
> `blog.html` tiene textos abreviados y algunos enlaces cruzados — usar como referencia de orden y
> de tarjeta, pero el cuerpo y meta vienen del `blogN.html` destino de su botón "Ver blog").

- [ ] **Paso 1: Test que falla.** `src/data/__tests__/blogPosts.test.js`:
```js
import { blogPosts } from '../blogPosts'

test('12 artículos con slug único, fuente, título y cuerpo', () => {
  expect(blogPosts).toHaveLength(12)
  expect(new Set(blogPosts.map(p => p.slug)).size).toBe(12)
  for (const p of blogPosts) {
    expect(p.slug).toMatch(/^[a-z0-9-]+$/)
    expect(p.source).toMatch(/^blog\d{1,2}\.html$/)
    expect(p.title.length).toBeGreaterThan(3)
    expect(p.image).toMatch(/^\/assets\/images\/blog\/grid\//)
    expect(p.bodyHtml).toContain('<p>')
    expect(Array.isArray(p.categories)).toBe(true)
  }
})

test('el primero del listado es Incendios en Hospitales (blog12)', () => {
  expect(blogPosts[0].slug).toBe('incendios-en-hospitales')
  expect(blogPosts[0].source).toBe('blog12.html')
})
```
- [ ] **Paso 2:** `npm run test` → FALLA.
- [ ] **Paso 3:** Leer los 12 `blogN.html`. Por cada uno, extraer de `<div class="post__desc" itemprop="articleBody">`
  el HTML interno completo (párrafos, `h2`, `ul/ol`), `title` (`<h1 class="post__title">`), `date` +
  `datetime`, imagen (`.post__img img@src`), categorías (`.post__cat`), `description` (`_meta.json` `meta.blog-N`),
  y opcionalmente `jsonLd`. Construir el array en el orden de la tabla.
- [ ] **Paso 4:** `npm run test` → PASS.
- [ ] **Paso 5:** `git add -A && git commit -m "Reconstruye blogPosts.js desde blog1..12.html (contenido real)"`

---

## Task 11: CSS co-ubicado de páginas

**Files:**
- Create: `src/styles/home.css`, `src/styles/quienes-somos.css`, `src/styles/proyectos.css`, `src/styles/blog-single.css`

- [ ] **Paso 1:** Copiar EXACTO el contenido de cada bloque `<style>`:
  - `home.css` ← `<style>` de `index.html` (líneas 23–106: `.hero-video`, `#heroVideo`, `.hero-overlay`,
    `.slide__body`, `.features-layout2 .feature-card*`, media queries).
  - `quienes-somos.css` ← `<style>` de `quienes-somos.html` (`<head>`).
  - `proyectos.css` ← `<style>` de `proyectos.html` (`<head>`: `.page-title-layout1 .pagetitle__heading`,
    `.video-wrapper`, `.video-play-btn`, `.playing`, etc.).
  - `blog-single.css` ← `<style>` de `blog1.html` (`.blog-single .container{max-width:900px}`,
    `.only-info .to-remove{display:none}`, `.post__body` azul, etc.). Verificar que `blog2..12.html`
    tienen el mismo bloque; si alguno difiere, unir con comentario `/* blogN extra */`.
- [ ] **Paso 2:** `npm run build` (no rompe; los CSS aún no se importan).
- [ ] **Paso 3:** `git add -A && git commit -m "CSS co-ubicado extraído de los <style> por página"`

---

## Task 12: `App.jsx` con rutas anidadas + NotFound + páginas stub

**Files:**
- Rewrite: `src/App.jsx`
- Create: `src/pages/NotFound.jsx`
- Create temporales: stubs de `Home/Servicios/ServiceDetail/Proyectos/QuienesSomos/Contacto/Blog/BlogPost` que rendericen `<h1>` con el nombre (se reemplazan en Tasks 13–20)
- Create: `src/__tests__/routing.test.jsx`

- [ ] **Paso 1: Test que falla.** `src/__tests__/routing.test.jsx`:
```jsx
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { AppRoutes } from '../App' // exportar las rutas sin BrowserRouter para poder testear

const at = (path) => render(<MemoryRouter initialEntries={[path]}><AppRoutes /></MemoryRouter>)

test.each([
  ['/', 'home'],
  ['/servicios', 'servicios'],
  ['/servicios/instalacion', 'service-detail'],
  ['/proyectos', 'proyectos'],
  ['/quienes-somos', 'quienes-somos'],
  ['/contacto', 'contacto'],
  ['/blog', 'blog'],
  ['/blog/triangulo-del-fuego', 'blog-post'],
])('%s monta dentro del Layout', (path, testid) => {
  at(path)
  expect(document.querySelector('header.header')).toBeTruthy()
  expect(screen.getByTestId(testid)).toBeInTheDocument()
})

test('ruta desconocida → NotFound', () => {
  at('/no-existe')
  expect(screen.getByTestId('notfound')).toBeInTheDocument()
})
```
- [ ] **Paso 2:** `npm run test` → FALLA.
- [ ] **Paso 3:** Reescribir `App.jsx`: exportar `AppRoutes` (`<Routes>…` de TDD §9, cada página con
  `data-testid`) y `default App` = `<BrowserRouter><AppRoutes/></BrowserRouter>`. Stubs con
  `data-testid`. `ServiceDetail` stub: si `useParams().slug` no está en `servicesDetail` → `<NotFound/>`.
- [ ] **Paso 4:** `NotFound.jsx`: `<section>` con `data-testid="notfound"`, h1 "Página no encontrada", `<Link to="/">`.
- [ ] **Paso 5:** `npm run test` → PASS. `npm run build` → OK.
- [ ] **Paso 6:** `git add -A && git commit -m "App.jsx: rutas anidadas bajo Layout + NotFound + stubs"`

---

## Task 13: `Home.jsx`

**Files:** Rewrite `src/pages/Home.jsx`; Create `src/pages/__tests__/Home.test.jsx`.
**Fuente:** `index.html` líneas 173–540 (hero-video → contact-layout2 → services-layout2 → about-layout1 → features-layout2).
**Consumes:** `ContactForm` (variant home), `services.js`, `src/styles/home.css`.

**Transcripción:**
- `import '../styles/home.css'` al inicio.
- **Quitar** header, footer, preloader, `#scrollTopBtn` (los pone `Layout`).
- Sección `hero-video`: `<section className="hero-video">` con `<video id="heroVideo" muted playsInline loop autoPlay preload="auto">` + `<source src="/assets/images/banners/afc-profire.mp4#t=0.001" type="video/mp4" />`, `.hero-overlay`, y el `.container` con `slide__subtitle`/`slide__title` "AFC PRO FIRE"/`slide__desc` "“Sembrando seguridad, cosechando el futuro”." + 2 botones (`Link to="/servicios"` "Ver servicios" + `<a href="https://wa.link/j2cd22">` "Asesoría").
  - `useEffect` con el autoplay robusto del `<script>` de `index.html` (líneas 648–670): set props, `play().catch()`, reintento en `click`/`touchstart` una vez, quitar `poster` en `playing`. Cleanup de listeners.
- Sección `contact-layout2 pb-80`: `bg-img banners/2.jpg` + col izq con `<p className="heading__desc font-weight-bold color-gray mb-0">Porque vamos más allá…</p>` + col der `<ContactForm variant="home" />` (mismo `#contactForm`).
- Sección `services-layout2 pt-120`: `bg-img backgrounds/5.jpg`, `<h3 className="heading__title" style={{color:'#ef7d00'}}>Conozca nuestros servicios…</h3>` + `<p>` intro; **2 carruseles** `.slick-carousel.carousel-arrows-light` con `data-slick={JSON.stringify({...})}` idénticos a los del original (4/4 y 3/3 responsive); slides desde `services.js` (`cardHome`) — primer carrusel: diseño/instalación/mantenimiento/gestión; segundo: "Líneas complementarias" `<h5>` + diagnóstico/capacitación. Cada slide = `.service-item > .service__img img + .service__body (h4 service__title color #004062, p service__desc color #1b1a1a, Link btn__secondary btn__outlined btn__custom "Ver más")`. Botón final `<a href="wa.link">` "Asesoría".
- Sección `about-layout1` (`id="about"`): `heading__layout2` "AFC PRO FIRE" + `video-banner-layout2` (`gallery/portada-video.png` + `video/1.jpg` + `<a className="video__btn video__btn-white popup-video" href="/assets/images/gallery/video-afc.mp4">` con `video__player` + `<span className="video__btn-title">Ver el video</span>`) + `about__text` (`text__icon i.icon-green-energy3`, 2 `<p>`, `Link to="/servicios"` "Asesoría").
- Sección `features-layout2 pt-120`: col izq (`heading__subtitle` "Nuestros clientes lo confirman" + `heading__title` "Hemos ejecutado diversos proyectos" + `<p>` + `<a href="wa.link">` "Cotizar ya") + col der `.row` con 4 `figure.feature-card > img` (`gallery/instalacion-1.png`, `instalacion-2.png`, `instalacion-3.png`, `sistema-3.png`).

- [ ] **Paso 1:** Test `Home.test.jsx` (montar dentro de `<Layout>` con `MemoryRouter`):
```jsx
import { render, screen, within } from '@testing-library/react'
import { MemoryRouter, Routes, Route } from 'react-router-dom'
import Layout from '../../layout/Layout'
import Home from '../Home'

const setup = () => render(
  <MemoryRouter initialEntries={['/']}>
    <Routes><Route element={<Layout />}><Route index element={<Home />} /></Route></Routes>
  </MemoryRouter>
)

test('hero', () => {
  setup()
  expect(screen.getByRole('heading', { name: 'AFC PRO FIRE', level: 2 })).toBeInTheDocument()
  expect(screen.getByText('“Sembrando seguridad, cosechando el futuro”.')).toBeInTheDocument()
  expect(document.querySelector('video#heroVideo source')).toHaveAttribute('src', expect.stringContaining('afc-profire.mp4'))
})
test('carrusel de servicios con enlaces a detalle', () => {
  setup()
  expect(screen.getByRole('heading', { name: /Conozca nuestros servicios/ })).toBeInTheDocument()
  expect(screen.getAllByRole('link', { name: /Ver más/ }).length).toBe(6)
  expect(document.querySelectorAll('.slick-carousel[data-slick]').length).toBe(2)
})
test('about y features', () => {
  setup()
  expect(document.querySelector('a.popup-video')).toHaveAttribute('href', '/assets/images/gallery/video-afc.mp4')
  expect(screen.getByRole('heading', { name: 'Hemos ejecutado diversos proyectos' })).toBeInTheDocument()
  expect(document.querySelectorAll('.feature-card img').length).toBe(4)
})
```
- [ ] **Paso 2:** `npm run test` → FALLA.
- [ ] **Paso 3:** Implementar `Home.jsx` según la transcripción de arriba.
- [ ] **Paso 4:** `npm run test` → PASS. `npm run build` → OK.
- [ ] **Paso 5:** `git add -A && git commit -m "Home fiel a index.html"`

---

## Task 14: `Servicios.jsx`

**Files:** Rewrite `src/pages/Servicios.jsx`; Create test.
**Fuente:** `servicios.html` líneas 837–1227 (page-title layout1 → services-layout1 → features-layout2 `#302f2f` → contact-layout2 pb-0).
**Consumes:** `services.js` (`cardServicios`), `PageTitle`, `ServiceContactCTA` **o** el bloque contact-layout2 con `heading` (versión de servicios.html: subtítulo "Prevención que salva vidas" + título "Innovación y seguridad…" + 3 fancybox "Prevención responsable / Soluciones a la medida / Desempeño verificable").

**Transcripción:**
- `PageTitle variant="layout2"` `bg=page-titles/12.jpg` heading "NUESTROS SERVICIOS" + `<a href="#careers" className="scroll-down"><i className="icon-arrow-down"/></a>`.
- `services-layout1 pt-120 pb-90`: `heading` con `<h2 className="heading__subtitle" style={{color:'#ef7d00'}}>Enfocados en ser mucho más…</h2>`; luego `<h3 className="service-section-title">1. Protección contra incendios:</h3>` + 4 `service-item` (col-lg-4) diseño/instalación/mantenimiento/gestión con `service__desc` de listas `</br>` (usar `<br/>`); luego `<h3 className="service-section-title">2. Asesorías Especializadas: “Conoce y Protege”</h3>` + 2 `service-item` diagnóstico + conceptualización. Cada uno con `Link` "Ver más" a `/servicios/<slug>`.
- `features-layout2 pt-120` con `style={{backgroundColor:'#302f2f'}}`: col izq (`heading__subtitle` "Prevención que salva vidas" + `heading__title` "Soluciones integrales de protección contra incendios" + 2 `<p>` + `<a href="wa.link">` "Cotizar ya") + col der `.row` con 6 `feature-item` (icon + title + desc, con los `style` inline del original; el 6º es `feature-item feature-item-custom` con `<br>` en el título).
- `contact-layout2 pb-0 bg-overlay bg-overlay-primary-gradient`: `bg-img banners/2.jpg` + col izq `heading-layout2 heading-light` (subtítulo/título/desc del original) + `.row.fancybox-light` con 3 `fancybox-item` (biosphere2 "Prevención responsable", tube "Soluciones a la medida", electric-charge "Desempeño verificable") + col der `<ContactForm variant="service" />`.

- [ ] **Paso 1:** Test:
```jsx
test('Servicios: título, 2 secciones y 6 tarjetas', () => {
  setup() // monta <Servicios/> dentro de <Layout>
  expect(screen.getByRole('heading', { name: 'NUESTROS SERVICIOS' })).toBeInTheDocument()
  expect(screen.getByText('1. Protección contra incendios:')).toBeInTheDocument()
  expect(screen.getByText(/2\. Asesorías Especializadas/)).toBeInTheDocument()
  expect(screen.getAllByRole('link', { name: /Ver más/ })).toHaveLength(6)
  expect(screen.getByRole('link', { name: /Ver más/, }).closest('a')).toHaveAttribute('href', '/servicios/diseno-ingenieria')
})
test('bloque de contacto con form de asesoría', () => {
  setup()
  expect(screen.getByPlaceholderText('Dirección')).toBeInTheDocument()
  expect(document.querySelectorAll('.fancybox-item').length).toBe(3)
})
```
- [ ] **Paso 2–5:** test falla → implementar → `npm run test` + `npm run build` → commit
  `"Servicios fiel a servicios.html"`.

---

## Task 15: `PageTitle.jsx` + `ServiceContactCTA.jsx` + `ServiceDetailLayout.jsx` + `ServiceDetail.jsx` (7 rutas)

**Files:**
- Create: `src/components/PageTitle.jsx`, `src/components/ServiceContactCTA.jsx`, `src/components/ServiceDetailLayout.jsx`
- Rewrite: `src/pages/ServiceDetail.jsx`
- Create: `src/pages/__tests__/ServiceDetail.test.jsx`

**Consumes:** `servicesDetail.js`, `ContactForm`.
**Fuente:** `diseno-Ingenieria.html`, `instalacion.html`, `mantenimiento.html`, `auditoria.html`, `diagnostico.html`, `conceptualizacion.html`, `transferenciaConocimiento.html` (secciones `page-title-layout2` + `text-content-section` + `contact-layout2 pb-0`).

- `PageTitle` (props de TDD §7.5).
- `ServiceContactCTA` = bloque `contact-layout2 pb-0` común a las 7 (subtítulo "Prevención que salva vidas", título "Protegemos personas, activos y continuidad operativa.", desc "Agenda una asesoría…", 3 fancybox "Cumplimiento NFPA / Soluciones a la medida / Excelente desempeño", `<ContactForm variant="service" />`).
- `ServiceDetailLayout({ rec })`:
  - `PageTitle variant="layout2"` `bg={rec.bannerImg}` `heading={rec.title}` `desc={rec.desc}` `actions`=(`<a href="wa.link" className="btn btn__primary mr-30">Solicitar asesoría</a>` + `<Link to="/quienes-somos" className="btn btn__white">Más sobre AFC</Link>`).
  - `<section className="text-content-section pb-90"><div className="container"><div className="row"><div className="col-lg-12">`:
    - `text__block mb-30`: `<h5 className="text__block-title">Visión General</h5>` + `<p className="text__block-desc" dangerouslySetInnerHTML={{__html: rec.intro}}/>` (el intro lleva `<strong>`).
    - si `rec.galleryImg`: `<div className="row mb-40"><div className="col-sm-12"><div className="gallery-item"><img src={rec.galleryImg} alt="galería"/></div></div></div>`.
    - `rec.blocks.map` → `text__block mb-30` (último `mb-0`) con `h5.text__block-title` + `p.text__block-desc` (dangerouslySetInnerHTML para respetar `<sub>` en CO₂).
    - si `rec.benefits.length`: `<div className="row features-layout3 mt-40">` con `col-sm-4 > feature-item > feature__icon i.{icon} + h4.feature__title + (p.feature__desc si desc)`.
  - `<ServiceContactCTA />`.
- `ServiceDetail.jsx`: `const rec = servicesDetail.find(s => s.slug === useParams().slug)`; `if (!rec) return <NotFound/>`; `return <ServiceDetailLayout rec={rec} />`. Añade `data-testid="service-detail"`.

- [ ] **Paso 1:** Test `ServiceDetail.test.jsx`:
```jsx
import { servicesDetail } from '../../data/servicesDetail'
// helper renderAt('/servicios/:slug', ...) montando dentro de <Layout>

test.each(servicesDetail.map(s => s.slug))('ruta /servicios/%s renderiza título y CTA', (slug) => {
  const rec = servicesDetail.find(s => s.slug === slug)
  renderServiceDetail(slug)
  expect(screen.getByRole('heading', { name: rec.title, level: 1 })).toBeInTheDocument()
  expect(screen.getByRole('link', { name: /Más sobre AFC/ })).toHaveAttribute('href', '/quienes-somos')
  expect(screen.getByText('Visión General')).toBeInTheDocument()
  expect(screen.getByText('Cumplimiento NFPA')).toBeInTheDocument() // fancybox del CTA
  expect(screen.getByPlaceholderText('Dirección')).toBeInTheDocument() // ContactForm asesoría
})

test('diseno-ingenieria tiene 7 bloques de contenido', () => {
  renderServiceDetail('diseno-ingenieria')
  expect(screen.getByText('Sistemas de Rociadores Automáticos')).toBeInTheDocument()
  expect(screen.getByText('Cálculo y Especificación')).toBeInTheDocument()
})

test('slug inválido → NotFound', () => {
  renderServiceDetail('no-existe')
  expect(screen.getByTestId('notfound')).toBeInTheDocument()
})
```
- [ ] **Paso 2–5:** falla → implementar → `npm run test` + `npm run build` → commit
  `"Páginas de servicio: ServiceDetailLayout + 7 rutas fieles a los .html"`.

---

## Task 16: `QuienesSomos.jsx`

**Files:** Rewrite `src/pages/QuienesSomos.jsx`; Create `src/components/LocalVideo.jsx`; Create test.
**Fuente:** `quienes-somos.html` líneas 337–475 + sus 2 `<script>` (486–520 popup-gallery, 522–545 vídeo local).
**Consumes:** `src/styles/quienes-somos.css`, `LocalVideo` (mode cover).

**Transcripción:**
- `import '../styles/quienes-somos.css'`.
- Sección 1 `page-title hero-min bg-overlay bg-overlay-2 bg-parallax`: `bg-img page-titles/incendio.jpg` (ruta rota, se mantiene) + `<h1 className="pagetitle__heading mb-10">Protección Contra Incendios en Colombia</h1>` + `<p className="pagetitle__desc mb-0">Sistemas integrales de seguridad • Diseño • Instalación • Mantenimiento</p>` + `<a href="wa.link" className="btn btn__primary">Solicitar asesoría gratuita</a>`.
- Sección 2 `section-pad` (`.container.text-narrow`): `<h2 style={{textAlign:'center'}}>Seguridad que inspira confianza</h2>` + `<p>` con `<strong>` (usar dangerouslySetInnerHTML o JSX con `<strong>`).
- Sección 3 `section-pad` (`paddingTop:0`): `text-narrow` "Conoce cómo trabajamos" + `<LocalVideo mode="cover" poster="/assets/images/gallery/portadaSebastian.png" src="/assets/images/gallery/video-afc-profire.mp4" />` reproduciendo el markup `video-section-wrapper > video-container#videoBox` (portada `video-thumbnail`, overlay `#video-overlay` con `video__btn#play-video-btn` + `video__player i.fa-play` + `video__btn-title`, `video-close-btn#close-video-btn`, `<video id="afc-video" controls playsInline preload="metadata" poster>` + source). La lógica de play/close vive en `LocalVideo` (portar el `<script>` `(function(){ const box=... })()`).
- Sección 4 `section-pad` (`backgroundColor:'#f8f9fa'`): `text-narrow` "Proyectos que respaldan nuestra experiencia" + `<div className="slick-carousel mini-carousel gallery-slider" data-slick='...'>` con 10 `<div className="gallery-card"><a className="popup-gallery" href={img}><img src={img}/></a></div>` (instalacion-1..5, sistema-1..5) + `<Link to="/proyectos" className="btn btn__primary">Ver todos los proyectos</Link>`. El `data-slick` se copia LITERAL del original (con sus `prevArrow`/`nextArrow` escapados).
- Sección 5 `section-pad` `text-narrow` centrado: `<h2>¿Necesitas proteger tu empresa o proyecto?</h2>` + `<p>` + `<a href="wa.link" className="btn btn__primary">Contactar ahora</a>`.
- El popup `.popup-gallery` lo arma `theme.js` (ya cubierto en Task 2, config de `quienes-somos.html`).

- [ ] **Paso 1:** Test:
```jsx
test('QuienesSomos: hero, video local y carrusel', () => {
  setup()
  expect(screen.getByRole('heading', { name: 'Protección Contra Incendios en Colombia', level: 1 })).toBeInTheDocument()
  expect(screen.getByText('Seguridad que inspira confianza')).toBeInTheDocument()
  expect(document.querySelector('#afc-video source')).toHaveAttribute('src', expect.stringContaining('video-afc-profire.mp4'))
  expect(document.querySelector('.gallery-slider[data-slick]')).toBeTruthy()
  expect(document.querySelectorAll('.gallery-card').length).toBe(10)
  expect(screen.getByRole('link', { name: /Ver todos los proyectos/ })).toHaveAttribute('href', '/proyectos')
})
test('LocalVideo: click en play arranca el vídeo', async () => {
  const play = vi.spyOn(window.HTMLMediaElement.prototype, 'play').mockResolvedValue()
  setup()
  await userEvent.click(screen.getByLabelText('Reproducir video'))
  expect(play).toHaveBeenCalled()
})
```
- [ ] **Paso 2–5:** falla → implementar `LocalVideo` + página → `npm run test` + `npm run build` →
  commit `"QuienesSomos + LocalVideo fieles a quienes-somos.html"`.

---

## Task 17: `Proyectos.jsx`

**Files:** Rewrite `src/pages/Proyectos.jsx`; Create test.
**Fuente:** `proyectos.html` líneas 162–470 + `<script>` de `.video-wrapper` (480–498).
**Consumes:** `projects.js`, `src/styles/proyectos.css`, `PageTitle`, `LocalVideo` (mode inline).

**Transcripción:**
- `import '../styles/proyectos.css'`.
- `PageTitle variant="layout1"` `bg=page-titles/banner-proyectos.png` heading "Proyectos Exitosos" + breadcrumb (`Inicio` `Link to="/"` / `Proyectos` active) + `<a href="#gallery" className="scroll-down">`.
- `<section id="gallery" className="gallery pt-60 pb-60"><div className="container"><div className="row">`:
  - `projects.galleryImages.map` → `<div className="col-sm-6 col-md-4"><div className="gallery-item"><a className="popup-gallery-item" href={encodeURI(src)}><img src={encodeURI(src)} alt={`Proyecto ${i+1}`}/></a></div></div>` (los `alt` del original: "Proyecto 1..5", "Sistema 1..5", "Proyecto" para las fotos WhatsApp — replicar).
  - `projects.galleryVideos.map` → `<div className="col-sm-12 col-md-6"><div className="gallery-item"><LocalVideo mode="inline" src={encodeURI(v)} /></div></div>` reproduciendo `.video-wrapper > video[preload=metadata] + .video-play-btn i.fa-play`; `LocalVideo mode="inline"` porta el `<script>`: al primer click `video.controls=true; video.play(); wrapper.classList.add('playing')`; `pause`/`ended` quitan `playing`.
- El lightbox `.popup-gallery-item` lo arma `theme.js` (Task 2).

- [ ] **Paso 1:** Test:
```jsx
test('Proyectos: 19 imágenes de galería + 2 vídeos', () => {
  setup()
  expect(screen.getByRole('heading', { name: 'Proyectos Exitosos' })).toBeInTheDocument()
  expect(document.querySelectorAll('a.popup-gallery-item').length).toBe(19)
  expect(document.querySelectorAll('#gallery .video-wrapper').length).toBe(2)
  expect(document.querySelector('a.popup-gallery-item').getAttribute('href')).toContain('instalacion-1.png')
  // nombres con espacios codificados
  expect(document.querySelectorAll('a.popup-gallery-item')[10].getAttribute('href')).toContain('%20')
})
```
- [ ] **Paso 2–5:** falla → implementar → `npm run test` + `npm run build` → commit
  `"Proyectos fiel a proyectos.html (galería + vídeos)"`.

---

## Task 18: `Contacto.jsx`

**Files:** Rewrite `src/pages/Contacto.jsx`; Create test.
**Fuente:** `contacto.html` líneas 83–235.
**Consumes:** `ContactFormPQRS`.

**Transcripción:**
- `<section className="google-map py-0">` con el `<iframe>` de Google Maps embed EXACTO (misma URL `src`, `height="500" width="100%" style={{border:0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"`).
- `<section className="contact-layout1 pb-90"><div className="container"><div className="row"><div className="col-12"><div className="contact-panel p-0 box-shadow-none">`:
  - `<div className="contact__panel-info mb-30" style={{backgroundColor:'#ef7d00'}}>` con 3 `contact-info-box`:
    - Dirección: "Calle 34 sur 45-04 - Envigado, Antioquia".
    - Contacto: Email `<a href="mailto:andres.cruz@afcprofire.com" style={{color:'#004062'}}>` + WhatsApp `<a href="https://wa.me/573116456726" target="_blank" rel="noopener" style={{color:'#004062'}}>+57 311 645 6726</a>`.
    - Horario: "Lunes a Viernes" / "8 am to 5 pm".
    - `<a href="https://wa.link/j2cd22" target="_blank" rel="noopener" className="btn btn__primary"><i className="fab fa-whatsapp"/><span>Asesoría</span></a>`.
  - `<ContactFormPQRS />` (renderiza el `<form id="contactFormEmailJS" className="contact__panel-form mb-30">`).

- [ ] **Paso 1:** Test:
```jsx
test('Contacto: mapa, datos y formulario PQRS', () => {
  setup()
  expect(document.querySelector('.google-map iframe')).toHaveAttribute('src', expect.stringContaining('google.com/maps/embed'))
  expect(screen.getByText(/Calle 34 sur 45-04/)).toBeInTheDocument()
  expect(screen.getByRole('link', { name: /andres.cruz@afcprofire.com/ })).toHaveAttribute('href', 'mailto:andres.cruz@afcprofire.com')
  expect(screen.getByPlaceholderText('Mensaje')).toBeInTheDocument()
  expect(screen.getByRole('combobox')).toBeInTheDocument()
})
```
- [ ] **Paso 2–5:** falla → implementar → `npm run test` + `npm run build` → commit
  `"Contacto fiel a contacto.html (mapa + PQRS)"`.

---

## Task 19: `Blog.jsx` (listado)

**Files:** Rewrite `src/pages/Blog.jsx`; Create test.
**Fuente:** `blog.html` líneas 133–500 (page-title-layout1 + `post-grid` con 12 `post-item` + posible paginación).
**Consumes:** `blogPosts.js`, `PageTitle`.

**Transcripción:**
- `PageTitle variant="layout1"` `bg=page-titles/11.jpg` + breadcrumb (`Inicio` `Link to="/"` / `Blog` active) + `<h1 className="pagetitle__heading mb-0">Blog de Protección Contra Incendios: Tu Guía Esencial</h1>` + `scroll-down`.
- `<section className="post-grid"><div className="container"><div className="row">`: `blogPosts.map` (mismo orden que `blog.html`) → `<div className="col-sm-12 col-md-6 col-lg-4"><div className="post-item">`:
  - `.post__img`: `<Link to={`/blog/${post.slug}`}><img src={post.image} alt="post image"/></Link>` + `<span className="post__date">{post.date}</span>`.
  - `.post__body`: `.post__meta` (`.post__cat` con `post.categories.map(c => <a href="#">{c}</a>)` + `<a className="post__author" href="#">AFC Pro Fire</a>`), `<h4 className="post__title"><Link to={`/blog/${post.slug}`}>{post.title}</Link></h4>`, `<p className="post__desc">{post.excerpt}</p>`, `<Link to={`/blog/${post.slug}`} className="btn btn__custom"><i className="icon-arrow-right"/><span>Ver blog</span></Link>`.
  - **Nota fidelidad:** en `blog.html` los `<h4>` y la imagen del listado a veces apuntan a `blogN.html` distinto del botón; en React todos los enlaces de una tarjeta van al mismo `post.slug` (el destino de "Ver blog" del original). Documentado en PRD §8 — se toma el destino del botón como canónico.
- Si `blog.html` tiene bloque de paginación (`.pagination` tras la grid, revisar líneas ~480–500):
  reproducirlo estáticamente (1 página) o, si son ≤12 posts, omitir si el original no lo muestra
  funcional. Decidir al leer el HTML; por defecto: replicar el markup de paginación deshabilitado.

- [ ] **Paso 1:** Test:
```jsx
test('Blog: título y 12 tarjetas enlazando a /blog/:slug', () => {
  setup()
  expect(screen.getByRole('heading', { name: /Blog de Protección Contra Incendios/ })).toBeInTheDocument()
  expect(document.querySelectorAll('.post-item').length).toBe(12)
  const first = document.querySelector('.post-item .post__title a')
  expect(first).toHaveAttribute('href', '/blog/incendios-en-hospitales')
  expect(screen.getAllByRole('link', { name: /Ver blog/ })).toHaveLength(12)
})
```
- [ ] **Paso 2–5:** falla → implementar → `npm run test` + `npm run build` → commit
  `"Blog (listado) fiel a blog.html"`.

---

## Task 20: `BlogPost.jsx` (`/blog/:slug`)

**Files:** Rewrite `src/pages/BlogPost.jsx`; Create test.
**Fuente:** `blog1.html`…`blog12.html` (sección `blog blog-single` + wrapper `only-info`).
**Consumes:** `blogPosts.js`, `src/styles/blog-single.css`.

**Transcripción:**
- `import '../styles/blog-single.css'`.
- `const post = blogPosts.find(p => p.slug === useParams().slug)`; si no → `<NotFound/>`.
- `<section className="blog blog-single pt-10 pb-40"><div className="container"><div className="row"><article className="col-12" itemScope itemType="https://schema.org/Article"><div className="post-item mb-0">`:
  - `.post__img`: `<img src={post.image} alt={post.title} loading="lazy" width="1280" height="720"/>`.
  - `.post__body`:
    - `.post__meta`: `<div className="post__cat">{post.categories.join(' • ')}</div>` + `<time className="post__date ml-10" dateTime={post.dateTime}>{post.date}</time>`.
    - `<h1 className="post__title" itemProp="headline">{post.title}</h1>`.
    - `<div className="post__desc" itemProp="articleBody" dangerouslySetInnerHTML={{__html: post.bodyHtml}} />`.
- (Opcional) inyectar `post.jsonLd` con un `<script type="application/ld+json">` — sólo si se decide; no aporta a la vista.
- El `Layout` ya pone `.wrapper.only-info` para rutas `/blog/*` (Task 4).
- **Sin** botón "Volver al Blog" — el original de `blog1.html` no lo tiene ("SIN CTAS"). Verificar
  en cada `blogN.html`; si alguno lo tuviera, replicarlo sólo en ese.

- [ ] **Paso 1:** Test:
```jsx
import { blogPosts } from '../../data/blogPosts'

test.each(blogPosts.map(p => p.slug))('/blog/%s renderiza el artículo', (slug) => {
  const post = blogPosts.find(p => p.slug === slug)
  renderBlogPost(slug) // monta dentro de <Layout>, ruta 'blog/:slug'
  expect(screen.getByRole('heading', { name: post.title, level: 1 })).toBeInTheDocument()
  expect(document.querySelector('.blog-single .post__desc').innerHTML).toContain('<p>')
  expect(document.querySelector('.wrapper.only-info')).toBeTruthy()
})

test('slug inválido → NotFound', () => {
  renderBlogPost('no-existe')
  expect(screen.getByTestId('notfound')).toBeInTheDocument()
})
```
- [ ] **Paso 2–5:** falla → implementar → `npm run test` + `npm run build` → commit
  `"BlogPost (:slug) fiel a blog1..12.html"`.

---

## Task 21: Limpieza de duplicados

**Files (delete):**
- `src/content/` (carpeta entera)
- `src/pages/ServicePages.jsx`
- `src/pages/Instalacion.jsx`, `Mantenimiento.jsx`, `Auditoria.jsx`, `Diagnostico.jsx`, `DisenoIngenieria.jsx`, `TransferenciaConocimiento.jsx`, `Conceptualizacion.jsx`
- `src/pages/BlogPost1.jsx`, `BlogPost2.jsx`, `BlogPost3.jsx`, `BlogPost4.jsx`
- `src/components/ServicePage.jsx`
- `src/components/ScrollToTop.jsx`

- [ ] **Paso 1:** `git grep -n "ServicePages\|ScrollToTop\|BlogPost1\|content/" src` → confirmar que
  nada en el código vivo los importa (sólo tests propios ya migrados). Si algún import queda, corregirlo.
- [ ] **Paso 2:** Borrar los archivos/carpeta listados.
- [ ] **Paso 3:** `npm run test` → PASS (suite completa). `npm run build` → OK.
- [ ] **Paso 4:** Actualizar `README.md` del proyecto: rutas nuevas (`/servicios/:slug`, `/blog/:slug`),
  estructura (`layout/`, `lib/theme.js`, `data/`), nota "no se usa `main.js`", cómo correr tests.
- [ ] **Paso 5:** `git add -A && git commit -m "Elimina páginas/componentes duplicados y scaffold src/content"`

---

## Task 22: Verificación final

- [ ] **Paso 1:** `npm run build` → sin errores ni warnings de assets/imports.
- [ ] **Paso 2:** `npm run test` → todos los archivos en verde. Anotar nº de tests.
- [ ] **Paso 3:** `npm run dev` y recorrer el **Anexo B del TDD** (checklist de revisión visual) para
  las 15 rutas + 3 artículos de muestra (`/blog/triangulo-del-fuego`, `/blog/primeros-auxilios-en-quemaduras`,
  `/blog/incendios-en-hospitales`), con el `.html` original al lado.
- [ ] **Paso 4:** Verificar navegación SPA: Home → Servicios → un servicio → Proyectos (lightbox) →
  QuienesSomos (carrusel + vídeo) → volver a Home; confirmar que carruseles y popups siguen vivos.
- [ ] **Paso 5:** Verificar `document.title` en 5 rutas distintas.
- [ ] **Paso 6:** Rellenar el checklist y anotar cualquier "arreglo opcional" de PRD §8 pendiente de decisión.
- [ ] **Paso 7:** `git add -A && git commit -m "Verificación final: build + tests + checklist visual"`
- [ ] **Paso 8:** (si se aprueba) fusionar `reconstruccion-fiel` → `main`.

---

## Auto-revisión del plan (writing-plans §Self-Review)

**Cobertura de la spec (PRD):**
- RF-1 fidelidad → Tasks 13–20 (transcripción 1:1 por página). ✔
- RF-2 plugins re-init → Task 2 (`theme.js`) + Task 4 (`RouteEffects`). ✔
- RF-3 hero vídeo → Task 13. ✔
- RF-4 form asesoría → Task 7; usado en Tasks 13/14/15. ✔
- RF-5 form PQRS → Task 8; usado en Task 18. ✔
- RF-6 galería/lightbox/vídeos → Tasks 2 (magnific), 16 (`LocalVideo` cover), 17 (`LocalVideo` inline). ✔
- RF-7 blog → Tasks 10 (datos), 19 (listado), 20 (artículo). ✔
- RF-8 navegación → Tasks 5 (Navbar), 6 (Footer). ✔
- RF-9 al cambiar de ruta → Task 4 (`RouteEffects`: scroll, preloader, título, theme). ✔
- RNF-1 build → pasos `npm run build` en Tasks 3, 12–21, 22. ✔
- RNF-2 tests → un smoke test por Task de página + infra Task 1. ✔
- RNF-3 revisión visual → Task 22 + Anexo B TDD. ✔
- RNF-4 assets → Global Constraints + PRD §8 (no se copian; rotas se replican). ✔
- RNF-5 DRY → Task 21 (limpieza). ✔
- RNF-6 sin deps runtime nuevas → Task 1 sólo devDeps. ✔
- Rutas y títulos (PRD §4.1) → Task 12 (rutas) + Task 4 (`routeTitle`). ✔

**Consistencia de nombres:** `initTheme`/`destroyTheme` (Tasks 2, 4). `routeTitle` (Task 4).
`ContactForm` prop `variant` (Tasks 7, 13, 14, 15). `servicesDetail` con `slug` (Tasks 9, 15).
`blogPosts` con `slug`/`source`/`bodyHtml` (Tasks 10, 19, 20). `AppRoutes` export (Task 12, usado en tests).
`data-testid`: `home`, `servicios`, `service-detail`, `proyectos`, `quienes-somos`, `contacto`,
`blog`, `blog-post`, `notfound` (Task 12; los tests de páginas usan roles/headings, no testid).

**Decisiones abiertas para el ejecutor (marcadas en su Task):**
- Task 5: ¿rutas de servicio anidadas `/servicios/:slug` (por defecto) o planas `/diseno-ingenieria`?
- Task 19: paginación del blog — replicar markup deshabilitado (por defecto) vs omitir.
- PRD §8: "arreglos opcionales" de imágenes rotas — sólo con aprobación del usuario.
