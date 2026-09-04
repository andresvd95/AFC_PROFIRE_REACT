# TDD — Diseño técnico de afcprofire-react

Documento de diseño técnico que acompaña al [PRD](./PRD.md) y al [PLAN](./PLAN.md).
Fuente de verdad del contenido: `../afcprofire/*.html`.

---

## 1. Stack

| Capa | Tecnología | Notas |
|---|---|---|
| Bundler / dev server | Vite 5 | ya instalado |
| UI | React 18 + `react-dom` | ya instalado |
| Router | `react-router-dom` 6 | rutas anidadas bajo un `Layout` |
| Email | `@emailjs/browser` 3 | `emailjs.sendForm` |
| CSS del tema | `assets/css/libraries.css` + `assets/css/style.css` | **intactos**, se cargan desde `index.html` |
| jQuery + plugins del tema | `assets/js/jquery-3.5.1.min.js` + `assets/js/plugins.js` | globales, cargados en `index.html`; se orquestan desde `src/lib/theme.js` |
| Tests | Vitest + `@testing-library/react` + `@testing-library/jest-dom` + `jsdom` + `@testing-library/user-event` | **nuevo** (devDependencies) |

No se añade TypeScript, Tailwind, Redux, Helmet ni SSR. El `document.title` se gestiona con un hook propio.

## 2. Principio de arquitectura

> **El CSS y los plugins jQuery del tema son intocables. React sólo produce el mismo DOM que
> producía cada `.html`, y `theme.js` vuelve a "encender" los plugins después de cada render de ruta.**

Tres consecuencias de diseño:

1. **Layout con rutas anidadas.** `Layout` monta `Preloader + Navbar + <Outlet/> + Footer + #scrollTopBtn`
   una sola vez. Cada página es sólo su `<main>`/secciones. Se acaba la repetición de header/footer.
2. **`theme.js` idempotente.** `initTheme()` debe poder llamarse muchas veces sin duplicar
   carruseles ni listeners. Antes de re-inicializar, `destroyTheme()` deshace lo que dejó estado
   en el DOM (slick) y quita listeners globales (scroll).
3. **Contenido dirigido por datos.** Las 7 páginas de servicio, el listado de blog, los 12
   artículos, los enlaces de nav y la galería de proyectos salen de `src/data/*.js`, no de JSX repetido.

## 3. Estructura de archivos destino

```
afcprofire-react/
├── index.html                     # MODIFICADO (ver §4)
├── vite.config.js                 # MODIFICADO: + bloque test (vitest)
├── package.json                   # MODIFICADO: + scripts test, + devDeps
├── docs/
│   ├── PRD.md  TDD.md  PLAN.md
├── public/assets/**               # SIN CAMBIOS (ya está completo)
└── src/
    ├── main.jsx                   # sin cambios
    ├── App.jsx                    # REESCRITO: rutas anidadas bajo <Layout>
    ├── setupTests.js              # NUEVO: matchers + mocks globales (jQuery, emailjs)
    ├── lib/
    │   ├── theme.js               # NUEVO: initTheme() / destroyTheme()
    │   └── useDocumentTitle.js    # NUEVO: hook título por ruta
    ├── layout/
    │   ├── Layout.jsx             # NUEVO: chrome común + <Outlet/>
    │   ├── Preloader.jsx          # NUEVO
    │   └── RouteEffects.jsx       # NUEVO: scroll-top + preloader off + initTheme + título
    ├── components/
    │   ├── Navbar.jsx             # REESCRITO fiel a index.html
    │   ├── Footer.jsx             # REESCRITO fiel a index.html (incluye widget "Documentos")
    │   ├── ContactForm.jsx        # REESCRITO: form asesoría (template_l61hkol)
    │   ├── ContactFormPQRS.jsx    # NUEVO: form contacto (template_0rq3a9q)
    │   ├── PageTitle.jsx          # NUEVO: <section class="page-title …"> reutilizable
    │   ├── ServiceDetailLayout.jsx# NUEVO: plantilla de las páginas de servicio
    │   ├── ServiceContactCTA.jsx  # NUEVO: bloque contact-layout2 + fancybox-light + ContactForm
    │   ├── Lightbox.jsx           # NUEVO (opcional): wrapper declarativo de .popup-gallery-item
    │   └── LocalVideo.jsx         # NUEVO: <video> con overlay play/cerrar (quienes-somos, proyectos)
    ├── data/
    │   ├── navLinks.js            # NUEVO
    │   ├── services.js            # NUEVO: 7 servicios (tarjetas de /servicios y /)
    │   ├── servicesDetail.js      # NUEVO: contenido de las 7 páginas de detalle
    │   ├── projects.js            # NUEVO: imágenes + vídeos de /proyectos
    │   └── blogPosts.js           # REESCRITO desde blog1..12.html
    ├── pages/
    │   ├── Home.jsx               # REESCRITO fiel a index.html
    │   ├── Servicios.jsx          # REESCRITO fiel a servicios.html
    │   ├── ServiceDetail.jsx      # NUEVO: 1 componente, 7 rutas (param :slug o 7 wrappers)
    │   ├── Proyectos.jsx          # REESCRITO fiel a proyectos.html
    │   ├── QuienesSomos.jsx       # REESCRITO fiel a quienes-somos.html
    │   ├── Contacto.jsx           # REESCRITO fiel a contacto.html
    │   ├── Blog.jsx               # REESCRITO fiel a blog.html
    │   ├── BlogPost.jsx           # REESCRITO: :slug desde blogPosts.js
    │   └── NotFound.jsx           # NUEVO
    └── styles/
        ├── home.css              # NUEVO: <style> del hero-video de index.html
        ├── quienes-somos.css     # NUEVO: <style> de quienes-somos.html
        ├── proyectos.css         # NUEVO: <style> de proyectos.html
        └── blog-single.css       # NUEVO: unión de los <style> de blog1..12.html (son equivalentes)

# SE ELIMINAN:
#   src/content/**              (scaffold de extracción, ya no se usa)
#   src/pages/ServicePages.jsx
#   src/pages/Instalacion.jsx  Mantenimiento.jsx  Auditoria.jsx  Diagnostico.jsx
#   src/pages/DisenoIngenieria.jsx  TransferenciaConocimiento.jsx  Conceptualizacion.jsx
#   src/pages/BlogPost1.jsx  BlogPost2.jsx  BlogPost3.jsx  BlogPost4.jsx
#   src/components/ServicePage.jsx
#   src/components/ScrollToTop.jsx   (su lógica pasa a RouteEffects.jsx)
```

## 4. `index.html`

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="AFC PROFIRE - Expertos en sistemas contraincendios" />
    <link rel="icon" href="/assets/images/favicon/favicon.png" />
    <title>AFC PRO FIRE</title>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Rubik:400,500,600,700%7cRoboto:400,500,700&display=swap" />
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.3/css/all.css" />
    <link rel="stylesheet" href="/assets/css/libraries.css" />
    <link rel="stylesheet" href="/assets/css/style.css" />
  </head>
  <body>
    <div id="root"></div>
    <!-- jQuery + plugins ANTES del bundle para que window.$ exista cuando theme.js corra -->
    <script src="/assets/js/jquery-3.5.1.min.js"></script>
    <script src="/assets/js/plugins.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

Cambios vs el `index.html` actual del proyecto React:
- **Se elimina `<script src="/assets/js/main.js">`** — su lógica vive en `src/lib/theme.js`.
- jQuery y `plugins.js` se mueven **antes** del módulo del bundle (hoy están después) para que
  `window.jQuery` esté disponible cuando React llame a `initTheme()`.
- El `emailjs.init(...)` global se elimina: `ContactForm`/`ContactFormPQRS` importan
  `@emailjs/browser` y pasan la Public Key en `sendForm` (4º argumento) — no dependen del SDK global.
  El `<script>` del CDN de EmailJS se deja sólo por paridad con el original; puede quitarse sin efecto.

## 5. `src/lib/theme.js`

API:

```js
export function initTheme() { /* idempotente: llamar en cada cambio de ruta */ }
export function destroyTheme() { /* limpia slick + listeners globales antes del próximo initTheme */ }
```

Reglas de implementación:

- **Guardas:** si `window.jQuery` no existe (entorno de test), ambas funciones hacen `return` sin lanzar.
- **`.bg-img`:** puerto exacto del bloque de `main.js` — por cada `.bg-img > img`, fija
  `background-image/size/position` en el padre, le añade `.bg-img`, y **quita** el `<img>`.
  Como React puede volver a montar el `<img>`, la operación debe ser idempotente (si el padre ya
  tiene `background-image`, no repetir; buscar `img` hijo cada vez).
- **Slick:** antes de `.slick('unslick')` comprobar `.hasClass('slick-initialized')`. En
  `destroyTheme()` recorrer `.slick-initialized` y hacer `unslick`. En `initTheme()` volver a
  `.slick(...)` leyendo `data-slick` (Slick lo hace solo con `$('.slick-carousel').slick()` si el
  elemento declara `data-slick`; los que tienen opciones fijas — `.slider-with-navs`, `.slider-nav`,
  `.gallery-slider` — se inicializan con el objeto de opciones portado de `main.js` /
  `quienes-somos.html`).
- **Magnific:** `.popup-video` (config iframe+patterns de `main.js`; para `.mp4` locales Magnific
  usa `type:'inline'`/`iframe` → replicar el `type:'iframe'` del original que funciona con
  `srcAction:'iframe_src'`), `.popup-gallery-item` y `.popup-gallery` (config galería de
  `main.js` y de `quienes-somos.html` respectivamente). Re-armar en cada `initTheme` es barato;
  Magnific no duplica handlers si se llama sobre el mismo set, pero para seguridad usar delegación:
  `$(document).off('.mfpAfc').on('click.mfpAfc', '.popup-video', …)` **o** llamar
  `.magnificPopup('close')` en `destroyTheme`.
- **Listeners de `window` (scroll):** sticky navbar y scroll-top. Registrarlos con namespace
  jQuery (`.on('scroll.afcTheme', …)`) y en `destroyTheme()` hacer `$(window).off('.afcTheme')`.
  Alternativa sin jQuery: `AbortController` + `addEventListener`, guardando el controller en
  módulo. Cualquiera de las dos, pero **una sola** fuente de listeners.
- **Menú móvil / acordeones / filtro de carrusel:** delegación desde `document` con namespace,
  igual criterio.
- `counterUp` y `niceSelect`: llamar sólo si el plugin existe (`$.fn.counterUp`, `$.fn.niceSelect`);
  `niceSelect` envuelve `<select>` — al re-inicializar, destruir el wrapper previo
  (`$('select').niceSelect('destroy')`) para no acumular.

`RouteEffects.jsx` (montado dentro del `Layout`, escucha `useLocation`):

```jsx
useEffect(() => {
  window.scrollTo(0, 0);
  document.querySelector('.preloader')?.style.setProperty('display', 'none');
  destroyTheme();
  const id = window.setTimeout(initTheme, 60); // deja pintar el DOM de la nueva ruta
  return () => window.clearTimeout(id);
}, [pathname]);
```

## 6. Layout y título

- `Layout.jsx`: `<div className="wrapper"> <Preloader/> <Navbar/> <RouteEffects/> <Outlet/> <Footer/> <button id="scrollTopBtn">…</button> </div>`.
  - **Excepción `only-info`:** los artículos de blog usan `<div class="wrapper only-info">`. Se
    resuelve con `useOutletContext` o con una ruta que pase `wrapperClass="only-info"` al Layout,
    o el `BlogPost` añade `document.querySelector('.wrapper').classList.add('only-info')` en
    `useEffect` y lo quita al desmontar. Se elige la vía del `className` condicional en `Layout`
    leyendo `useLocation().pathname.startsWith('/blog/')`.
- `useDocumentTitle.js`: mapa `ruta → título` (tabla PRD §4.1). Para `/blog/:slug`, título desde
  `blogPosts.find(...).title` (prefijo `BLOG AFC PRO FIRE — …`). Se llama desde cada página o,
  mejor, desde `RouteEffects` con un lookup centralizado.

## 7. Componentes clave

### 7.1 `Navbar.jsx`
- Estructura EXACTA de `<header class="header header-layout1">` de `index.html` (marca, toggler,
  `#mainNavigation`, `contact__number`, `navbar-actions`).
- `data-toggle="dropdown"` y `.has-dropdown` se conservan como clases (el CSS del tema hace el
  hover en desktop). El `<button class="dropdown-toggle">` se conserva.
- `<a href="x.html">` → `<Link to="/…">`. El item cuya ruta == `pathname` recibe `active`.
- Enlaces del dropdown = `data/navLinks.js#services` (6 items, textos idénticos al original).
- El logo enlaza a `/`. Teléfono `tel:+573116456726`. Botón "Asesoría" → `https://wa.link/j2cd22` (`<a>` externo, no `Link`).

### 7.2 `Footer.jsx`
- Estructura EXACTA del `<footer class="footer">` de `index.html` **incluyendo** el segundo
  bloque del 2º widget: `<h6>Documentos</h6>` con enlace a
  `/assets/images/GES-DO-01-Directrices del SIG.pdf` (`target="_blank"`).
- Enlaces internos → `<Link>`; PDFs y redes → `<a>` con `download` / `target="_blank" rel="noopener noreferrer"`.
- Textos de color naranja se mantienen vía `style={{ color: '#ef7d00' }}` como en el original.

### 7.3 `ContactForm.jsx` (asesoría — `template_l61hkol`)
- Markup del `<form id="contactForm">` de `index.html` (`.contact-panel > form > .row`).
- `useRef` al form; `emailjs.sendForm('service_433wpss','template_l61hkol', ref.current, 'yPAstTbHDQ-GCT7Lm')`.
- Estado: `loading`, `result` (`{type:'success'|'danger', msg}`), y control de radios
  (`contact_pref`, default 'Todos'). Validación: requeridos + email regex `/^[^\s@]+@[^\s@]+\.[^\s@]+$/`.
  Añade/quita `is-invalid` en `onInput`. Render de `.contact-result` con el `<div class="alert …">`.
- Prop `variant`: `'home'` (sólo el form) vs `'service'` (idéntico; el bloque de encabezado
  `heading-layout2` + `fancybox-light` lo pone `ServiceContactCTA`, no el form).
- **No** usa el `emailjs` global; importa el paquete. El SDK global del `index.html` es sólo paridad.

### 7.4 `ContactFormPQRS.jsx` (contacto — `template_0rq3a9q`)
- Markup del `<form id="contactFormEmailJS">` de `contacto.html` (name/email/phone/select/textarea).
- Validaciones portadas del `<script>` de `contacto.html`:
  `EMAIL_RE=/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i`, `PHONE_RE=/^[0-9+\-\s()]{7,20}$/`, nombre ≥2, mensaje ≥10.
- Lista de errores en `#contactResult` como en el original; `sendForm(SERVICE_ID,'template_0rq3a9q',...)`.

### 7.5 `PageTitle.jsx`
Props: `variant` (`'layout1'|'layout2'|'hero-min'`), `bg` (ruta img), `heading`, `desc?`,
`breadcrumb?` (array), `actions?` (nodos), `scrollDownHref?`.
Renderiza `<section class="page-title page-title-layoutN bg-overlay bg-overlay-2 bg-parallax">` con
`<div class="bg-img"><img src=bg></div>` (que `theme.js` convierte en fondo).

### 7.6 `ServiceDetailLayout.jsx`
Recibe un registro de `servicesDetail.js`:
```js
{
  slug, title, metaTitle, desc,                 // desc = <p class="pagetitle__desc"> (puede faltar en diseno-ingenieria)
  bannerImg,                                     // p.ej. '/assets/images/page-titles/incendio.jpg' (roto en el original)
  intro,                                         // texto del primer text__block "Visión General"
  galleryImg,                                    // '/assets/images/services/diseño.png' etc.
  blocks: [{ title, html }],                     // los text__block siguientes
  benefits: [{ icon, title, desc? }],            // features-layout3 (puede estar vacío)
}
```
Estructura de salida = EXACTA de `diseno-Ingenieria.html` / `instalacion.html` / etc.:
`PageTitle(layout2)` → `<section class="text-content-section pb-90">` con `text__block` +
`gallery-item` + `features-layout3` → `<ServiceContactCTA/>`.
Diferencias reales entre las 7 páginas (todas capturadas como datos):
- `diseno-Ingenieria`: sin `pagetitle__desc`; 7 bloques; galería dentro de un `.row.mb-40`; sin `features-layout3`.
- `instalacion`: con desc; 2 bloques; 3 benefits (sin `desc`).
- `mantenimiento`: con desc; 3 bloques; 2 benefits (con `desc`).
- `auditoria`, `diagnostico`, `conceptualizacion`, `transferencia-conocimiento`: con desc; N bloques; benefits variables. Se transcriben 1:1 de su `.html`.

### 7.7 `ServiceContactCTA.jsx`
Bloque `<section class="contact-layout2 pb-0 bg-overlay bg-overlay-primary-gradient">` de las
páginas de servicio: `bg-img banners/2.jpg` + columna izquierda (`heading-layout2 heading-light`
"Prevención que salva vidas" / "Protegemos personas, activos y continuidad operativa." + 3
`fancybox-item`: Cumplimiento NFPA / Soluciones a la medida / Excelente desempeño) + columna
derecha `<ContactForm variant="service" />`.

### 7.8 `LocalVideo.jsx`
Portada + overlay con botón play + botón cerrar + `<video controls playsInline>`; estado
`playing`. Cubre el patrón de `quienes-somos.html` (`#videoBox`) y el de `proyectos.html`
(`.video-wrapper`, sin portada, activa `controls` al primer click). Prop `mode: 'cover' | 'inline'`.

## 8. Datos

### 8.1 `navLinks.js`
```js
export const mainNav = [
  { to: '/', label: 'Inicio' },
  { to: '/servicios', label: 'Servicios', children: 'services' },
  { to: '/proyectos', label: 'Proyectos' },
  { to: '/quienes-somos', label: 'Quienes somos' },
  { to: '/blog', label: 'Blog' },
  { to: '/contacto', label: 'Contacto' },
];
export const services = [ // orden y textos EXACTOS del dropdown de index.html (6 — sin Conceptualización)
  { to: '/servicios/diseno-ingenieria', label: 'Diseño e Ingeniería' },
  { to: '/servicios/instalacion', label: 'Instalación y Puesta en Marcha' },
  { to: '/servicios/mantenimiento', label: 'Mantenimiento Preventivo y Correctivo' },
  { to: '/servicios/auditoria', label: 'Gestión de Riesgos y Auditoría Integral' },
  { to: '/servicios/diagnostico', label: 'Diagnóstico y Análisis de Requerimientos' },
  { to: '/servicios/transferencia-conocimiento', label: 'Capacitación y Transferencia del Conocimiento' },
];
export const footerServices = [ /* 5 enlaces del footer, textos largos del original */ ];
```

### 8.2 `services.js`
Tarjetas de `/` (2 carruseles: 4 + 2) y de `/servicios` (grid 6 + títulos de sección
"1. Protección contra incendios:" y "2. Asesorías Especializadas: …"). Campos:
`{ key, img, title, descHtml, to, group: 'principal'|'complementaria' }`. Los textos difieren
entre Home y Servicios (Home usa frases cortas; Servicios usa listas con `</br>`), así que:
`services.js` guarda ambos: `cardHome` y `cardServicios`.

### 8.3 `servicesDetail.js`
Array de 7 registros con la forma de §7.6, transcritos de los 7 `.html`. Incluye `metaTitle`
(de `_meta.json`) y `bannerImg` (con la ruta rota tal cual).

### 8.4 `projects.js`
```js
export const galleryImages = [ // orden EXACTO de proyectos.html
  '/assets/images/gallery/instalacion-1.png', … 'instalacion-5.png',
  '/assets/images/gallery/sistema-1.png', … 'sistema-5.png',
  '/assets/images/proyectos/WhatsApp Image 2026-04-27 at 10.08.52.jpeg', … (9 fotos)
];
export const galleryVideos = [
  '/assets/images/proyectos/WhatsApp Video 2026-04-28 at 12.33.51.mp4',
  '/assets/images/proyectos/WhatsApp Video 2026-04-28 at 12.34.59.mp4',
];
```
Los espacios en los nombres se codifican con `encodeURI` al construir `src`/`href` (el original usa `%20`).

### 8.5 `blogPosts.js` — reconstruido
```js
export const blogPosts = [
  {
    slug: 'proteccion-contra-incendios',     // ver tabla en PLAN Task 10
    source: 'blog1.html',
    title: '¿Por qué la protección contra incendios es vital para ti?',
    metaTitle: 'BLOG AFC PRO FIRE — ¿Por qué la protección contra incendios es vital para ti?',
    description: '…',                          // de _meta.json meta.blog-1
    date: 'Ago 25, 2025',
    dateTime: '2025-08-25',
    image: '/assets/images/blog/grid/incendioCasa.png',
    categories: ['Prevención', 'Incendios'],
    bodyHtml: `<p>…</p><h2>…</h2><ul>…</ul>`,  // cuerpo EXACTO de <div class="post__desc"> de blogN.html
    jsonLd: { … },                            // opcional: el <script type="application/ld+json"> del original
  },
  … 12 en total, en el orden en que aparecen en blog.html (post 1 … post 12)
];
```
`bodyHtml` se renderiza con `dangerouslySetInnerHTML`. Es contenido propio, estático y de
confianza (viene del repo), no entrada de usuario.

## 9. Rutas (`App.jsx`)

```jsx
<BrowserRouter>
  <Routes>
    <Route element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="servicios" element={<Servicios />} />
      <Route path="servicios/:slug" element={<ServiceDetail />} />   {/* valida slug ∈ servicesDetail */}
      <Route path="proyectos" element={<Proyectos />} />
      <Route path="quienes-somos" element={<QuienesSomos />} />
      <Route path="contacto" element={<Contacto />} />
      <Route path="blog" element={<Blog />} />
      <Route path="blog/:slug" element={<BlogPost />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  </Routes>
</BrowserRouter>
```
`ServiceDetail` hace `const rec = servicesDetail.find(s => s.slug === slug)`; si no existe → `<NotFound/>`.
`vite.config.js` no necesita `base`; para deploy en subcarpeta se ajustaría `base` + `<BrowserRouter basename>`.

## 10. Testing

### 10.1 Configuración
`vite.config.js`:
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
`package.json` scripts: `"test": "vitest run"`, `"test:watch": "vitest"`.
devDependencies: `vitest`, `@testing-library/react`, `@testing-library/jest-dom`,
`@testing-library/user-event`, `jsdom`.

### 10.2 `src/setupTests.js`
```js
import '@testing-library/jest-dom/vitest'
import { vi } from 'vitest'

// jQuery/plugins no existen en jsdom → theme.js debe hacer no-op. Confirmamos que window.jQuery es undefined.
// (no se mockea jQuery; theme.js tiene guardas)

// EmailJS: se mockea el módulo para no hacer red en tests
vi.mock('@emailjs/browser', () => ({
  default: { sendForm: vi.fn(() => Promise.resolve({ status: 200, text: 'OK' })), init: vi.fn() },
  sendForm: vi.fn(() => Promise.resolve({ status: 200, text: 'OK' })),
  init: vi.fn(),
}))

// jsdom no implementa scrollTo
window.scrollTo = vi.fn()
```

### 10.3 Patrón de smoke test por página
`src/pages/__tests__/<Page>.test.jsx`:
```jsx
import { render, screen } from '@testing-library/react'
import { MemoryRouter, Routes, Route } from 'react-router-dom'
import Layout from '../../layout/Layout'
import Home from '../Home'

function renderAt(path, ui, routePath) {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <Routes><Route element={<Layout />}><Route path={routePath} element={ui} /></Route></Routes>
    </MemoryRouter>
  )
}

test('Home monta y muestra el hero y secciones clave', () => {
  renderAt('/', <Home />, '/')
  expect(screen.getByRole('heading', { name: 'AFC PRO FIRE', level: 2 })).toBeInTheDocument()
  expect(screen.getByText('“Sembrando seguridad, cosechando el futuro”.')).toBeInTheDocument()
  expect(document.querySelector('video#heroVideo')).toBeTruthy()
  expect(screen.getAllByRole('link', { name: /Asesoría/i }).length).toBeGreaterThan(0)
})
```
Cada Task del PLAN define las aserciones concretas ("criterios de aceptación") de su página.

### 10.4 Qué NO testean los smoke tests
Comportamiento de Slick/Magnific/sticky (necesitan jQuery real + layout); eso se valida en la
revisión manual (RNF-3). Los tests sólo garantizan: monta sin throw, DOM/props correctos,
enlaces con `to` correcto, y que el submit del form llama al mock de EmailJS con los IDs correctos.

## 11. Riesgos técnicos y mitigación

| Riesgo | Mitigación |
|---|---|
| Slick duplica slides al navegar (React re-monta el DOM y `main.js` ya había "slickeado" el nodo viejo) | `destroyTheme()` hace `unslick` de todo `.slick-initialized` **antes** de que React monte la nueva ruta no aplica — el nodo ya no existe; la clave es NO cargar `main.js` y que `initTheme` corra **después** del render (setTimeout 60ms) y sea idempotente. |
| `theme.js` corre antes de que el `<Outlet>` pinte → no encuentra `.slick-carousel` | `RouteEffects` usa `setTimeout` tras el commit; si hiciera falta, `requestAnimationFrame` doble. |
| `.bg-img` deja de aplicar fondo tras navegar (React re-inserta el `<img>` que `main.js` había borrado) | `initTheme` re-procesa `.bg-img` en cada ruta; operación idempotente. |
| Magnific/vídeo `.mp4` en `.popup-video` (el patrón del tema es para YouTube) | En Home el original ya usa `.popup-video` con `href="…video-afc.mp4"` y `type:'iframe'`; se replica igual. Si no reprodujera bien, alternativa: `LocalVideo mode="cover"`. Decidir en revisión visual. |
| `document.title` no cambia en SPA | `useDocumentTitle` / lookup en `RouteEffects`. |
| Nombres de archivo con espacios (`/assets/images/proyectos/WhatsApp Image ….jpeg`) | `encodeURI()` al construir la URL; Vite sirve `public/` tal cual. |
| Imágenes rotas del original (`page-titles/incendio.jpg`) hacen "fallar" la revisión visual | Documentado en PRD §8; por defecto se replica el fallo; arreglo opcional aprobado por el usuario. |
| `react-router` v6: rutas relativas anidadas | Usar rutas sin `/` inicial dentro del `<Route element={<Layout/>}>` como en §9. |

## 12. Anexos

### Anexo A — Mapa `main.js` → `theme.js`
| Sección `main.js` | ¿Se porta? | Dónde |
|---|---|---|
| 01 Pre Loading (`setTimeout remove .preloader`) | Sí (como `display:none` en `RouteEffects`) | RouteEffects |
| 02 Mobile Menu | Sí | theme.js (delegación) |
| 03 Sticky Navbar | Sí | theme.js (scroll listener con namespace) |
| 04 Search Popup | No (no usado) | — |
| 05/06 Scroll Top Button | Sí | theme.js |
| 07 `.bg-img` → background | Sí | theme.js (idempotente) |
| 08 Acordeones | Sí | theme.js |
| 09 Load More (`.loadMoreportfolio`) | No (no usado) | — |
| 10 Slick Carousel (+ slider-with-navs/nav, filtro) | Sí | theme.js |
| 11 Popup Video / Popup Gallery | Sí | theme.js |
| 12 counterUp | Sí (si el plugin existe) | theme.js |
| 13 niceSelect | Sí (con destroy previo) | theme.js |
| 14 portfolio mixItUp | No (proyectos.html no lo usa) | — |
| 15 Range Slider | No | — |
| `contactForm.validate()` (jQuery Validate + AJAX a PHP) | No | Lo sustituyen `ContactForm` / `ContactFormPQRS` (EmailJS) |

### Anexo B — Checklist de revisión visual (RNF-3), por página
Para cada ruta, con el `.html` original abierto al lado a 1440 y a 375:
- [ ] Mismo orden de secciones y mismos textos/ះtítulos.
- [ ] Iconos icomoon (`icon-*`) y FontAwesome (`fa*`) se ven.
- [ ] `page-title` con imagen de fondo (o rota igual que el original).
- [ ] Carruseles: nº de slides visible correcto, flechas/dots, responsive.
- [ ] Popups: `.popup-video` abre vídeo; galería abre lightbox y navega.
- [ ] Formularios: validación marca `is-invalid`, `.contact-result` muestra alerta, botón "Enviando…".
- [ ] Navbar: sticky tras 200px, dropdown de servicios en hover (desktop), menú móvil abre/cierra.
- [ ] `#scrollTopBtn` aparece tras 700px y sube suave.
- [ ] Footer completo (4 widgets + Documentos + redes + copyright).
- [ ] Navegar a otra ruta y volver: carruseles/popup siguen funcionando (no duplicados).
- [ ] `document.title` correcto.
