# PRD — Reconstrucción de afcprofire.com en React

**Producto:** Sitio web corporativo de AFC Pro Fire (sistemas de protección contra incendios).
**Proyecto:** `afcprofire-react/` — port fiel del sitio estático `afcprofire/` a React + Vite.
**Fecha:** 2026-09-03
**Estado:** Aprobado para planear. Ejecución pendiente de revisión del plan.

---

## 1. Objetivo

Reproducir el sitio HTML/CSS/jQuery existente (`../afcprofire/`) como una SPA React con enrutado
cliente, **manteniendo fidelidad visual y funcional 1:1** con el original, y eliminando la
duplicación de código actual del proyecto React (header/footer repetidos, páginas de servicio y
de blog duplicadas, contenido de blog reescrito que no coincide con el original).

La fuente de verdad es el HTML original en `../afcprofire/`. Donde la versión React actual
difiera del HTML original, **manda el HTML original**.

## 2. Contexto y estado actual

| Aspecto | Original (`afcprofire/`) | React actual (`afcprofire-react/`) |
|---|---|---|
| Render | 1 archivo HTML por página, jQuery + `main.js` | Vite + React 18 + React Router v6 |
| Header/Footer | Repetidos en cada `.html` | Repetidos inline en cada página **y** existen `Navbar.jsx`/`Footer.jsx` sin usar en `Home` |
| Páginas de servicio | 7 `.html` (`diseno-Ingenieria`, `instalacion`, `mantenimiento`, `auditoria`, `diagnostico`, `transferenciaConocimiento`, `conceptualizacion`) | Duplicadas: `ServicePages.jsx` (funciones) **+** `Instalacion.jsx`, `Mantenimiento.jsx`, … sueltas. Simplificadas respecto al original. |
| Blog | `blog.html` + `blog1.html`…`blog12.html` (contenido real, cada uno con `<style>` y `JSON-LD` propios) | `Blog.jsx` + `BlogPost1..4.jsx` + `BlogPost.jsx` genérico + `data/blogPosts.js` **con textos reescritos que NO coinciden con el original** |
| Plugins del tema | `main.js` los inicializa una vez al cargar | `index.html` carga `main.js` (corre antes de que React pinte y no re-inicializa al navegar) |
| Assets | `afcprofire/assets/` | `public/assets/` — **ya contiene todas las imágenes, JS, fuentes y PDFs necesarios** |

## 3. Usuarios y navegadores

- Público: clientes potenciales (industria, comercio, hospitales, edificaciones) en Colombia.
- Idioma: español (Colombia). Sin i18n.
- Navegadores objetivo: últimas 2 versiones de Chrome, Edge, Firefox, Safari; iOS Safari y Chrome Android.
- El sitio usa Bootstrap-grid del tema; el breakpoint principal del menú es `992px`.

## 4. Alcance

### 4.1 En alcance — páginas a portar (15 rutas + 12 artículos)

| # | Ruta React | Página | Fuente HTML | `<title>` (de `_meta.json`) |
|---|---|---|---|---|
| 1 | `/` | Inicio | `index.html` | AFC PRO FIRE - Expertos en sistemas contra incendios |
| 2 | `/servicios` | Servicios | `servicios.html` | SERVICIOS - AFC PRO FIRE |
| 3 | `/servicios/diseno-ingenieria` | Diseño e Ingeniería | `diseno-Ingenieria.html` | AFC Pro Fire \| Diseño e Ingeniería de Sistemas Contra Incendios |
| 4 | `/servicios/instalacion` | Instalación y Puesta en Marcha | `instalacion.html` | AFC Pro Fire \| Instalación & Puesta en Marcha |
| 5 | `/servicios/mantenimiento` | Mantenimiento Preventivo y Correctivo | `mantenimiento.html` | AFC Pro Fire \| Mantenimiento Preventivo y Correctivo |
| 6 | `/servicios/auditoria` | Gestión de Riesgos y Auditoría Integral | `auditoria.html` | AFC Pro Fire \| Gestión de Riesgos & Auditoría Integral |
| 7 | `/servicios/diagnostico` | Diagnóstico y Análisis de Requerimientos | `diagnostico.html` | AFC Pro Fire \| Diagnóstico y Análisis de Requerimientos |
| 8 | `/servicios/transferencia-conocimiento` | Capacitación y Transferencia del Conocimiento | `transferenciaConocimiento.html` | AFC Professional Fire \| Capacitación y Transferencia del Conocimiento |
| 9 | `/servicios/conceptualizacion` | Conceptualización y Diseño de Soluciones | `conceptualizacion.html` | AFC Professional Fire \| Conceptualización y Diseño de Soluciones |
| 10 | `/proyectos` | Galería de Proyectos | `proyectos.html` | AFC PRO FIRE - Galería de Proyectos |
| 11 | `/quienes-somos` | Quiénes Somos | `quienes-somos.html` | AFC Professional Fire \| Colombia |
| 12 | `/contacto` | Contacto | `contacto.html` | AFC PRO FIRE - CONTACTO |
| 13 | `/blog` | Blog (listado) | `blog.html` | AFC PRO FIRE - BLOG |
| 14 | `/blog/:slug` | Artículo | `blog1.html`…`blog12.html` | ver `_meta.json` `blog-1`…`blog-12` |
| 15 | `*` | 404 | — (no existe en el original) | AFC PRO FIRE |

> **Nota de rutas:** El original enlaza los servicios como `diseno-Ingenieria.html` (planos, sin
> prefijo). En React se agrupan bajo `/servicios/…` para reflejar la jerarquía del menú. Esto es
> una decisión de estructura, no de contenido; los textos de enlace no cambian. Si se prefiere
> mantener rutas planas (`/diseno-ingenieria`, …) es un cambio de una línea por ruta en `App.jsx`
> y en `data/navLinks.js` — decidir en Task 5 del plan.

### 4.2 Fuera de alcance

- Páginas demo del tema no enlazadas desde la navegación: `services-single-service.html`,
  `blog-single-post.html`, `test-slider.html`, `indexContruccion.html`, `index copy.html`,
  `auditoria.html` sólo se usa como fuente de la página 6 (su nombre de menú es "Gestión de Riesgos").
- Backend PHP (`assets/php/**`, PHPMailer). El envío de correo es 100% cliente vía EmailJS.
- Fuentes SCSS (`assets/scss/**`). Se usa el CSS ya compilado (`libraries.css`, `style.css`).
- Google Maps JS API (`assets/js/google-map.js`); Contacto usa un `<iframe>` de Google Maps embed (igual que el original).
- SEO server-side / SSR / prerender, sitemap, i18n, panel de administración, blog dinámico/CMS.
- Rediseño, cambios de copy, cambios de paleta, mejoras de accesibilidad más allá de lo que ya trae el original.

## 5. Requisitos funcionales

### RF-1 — Fidelidad de maquetación
Cada página renderiza el **mismo árbol de secciones, clases CSS, textos, imágenes y enlaces** que
su HTML fuente. Se permite y se requiere:
- `<a href="x.html">` internos → `<Link to="/x">` de React Router (mismo texto visible).
- `class` → `className`; `style="a:b"` → `style={{ a: 'b' }}`; atributos JSX (`for`→`htmlFor`, etc.).
- Header, footer, preloader y botón "scroll-top" dejan de estar en cada página: los aporta el `Layout`.
- Los `<script>` inline de cada página se reimplementan (ver RF-2…RF-6). No se carga `main.js`.
- Los bloques `<style>` propios de una página (p. ej. `quienes-somos.html`, `proyectos.html`,
  `blog1..12.html`, el `<style>` del hero-video en `index.html`) se conservan **exactos**,
  como CSS co-ubicado importado por esa página.

### RF-2 — Plugins del tema re-inicializables al navegar
Existe `src/lib/theme.js` que reimplementa la lógica de `assets/js/main.js` como `initTheme()` /
`destroyTheme()`, ejecutados en cada cambio de ruta. Debe cubrir:
- Slick carousel (`.slick-carousel[data-slick]`, `.slider-with-navs`/`.slider-nav`) — con destroy/unslick previo para evitar duplicados al re-montar.
- Magnific Popup: `.popup-video` (iframe/vídeo), `.popup-gallery-item` y `.popup-gallery` (galería de imágenes).
- `.bg-img > img` → `background-image` en el padre (usado por casi todos los `page-title` y varias secciones).
- Navbar sticky (`.sticky-navbar` → `.is-sticky` tras 200px de scroll, sólo ≥992px).
- Menú móvil (`.navbar-toggler` abre, `.close-mobile-menu` cierra `.menu-opened`).
- Botón scroll-top (`#scrollTopBtn` → `.actived` tras 700px; click hace scroll suave a 0).
- Acordeones (`.accordion__item-header` → `.opened` en el item, quita a hermanos).
- `counterUp` sobre `.counter`; `niceSelect` sobre `select`.
- Filtro de carrusel por `data-value` (`#slick-filter-buttons`) si la página lo usa.
- **No** es necesario portar: `mixItUp` (ninguna página portada lo usa — `proyectos.html` es galería simple), range slider (`#rangeSlider`), search popup, cart popup, `contactForm.validate()` de jQuery (lo sustituye el form React).

### RF-3 — Hero con vídeo (Inicio)
`/` muestra `<video>` de fondo (`assets/images/banners/afc-profire.mp4`), `muted/loop/playsInline/autoplay`,
con reintento de `play()` tras primer `click`/`touchstart` (equivalente al `<script>` de autoplay robusto
de `index.html`). Overlay oscuro encima, contenido (`AFC PRO FIRE`, subtítulo, lema, 2 botones) delante.

### RF-4 — Formulario general de asesoría (EmailJS)
Aparece en Inicio, Servicios y las 7 páginas de servicio. Campos: `user_name*`, `user_email*`,
`user_phone`, `user_address*`, radios `contact_pref` (Todos/Correo/Celular, "Todos" por defecto).
- Envía con `emailjs.sendForm('service_433wpss', 'template_l61hkol', form)` (Public Key `yPAstTbHDQ-GCT7Lm`).
- Validación cliente: requeridos no vacíos + formato de email; marca `.is-invalid`; mensajes en
  `.contact-result` (`alert-danger` / `alert-success`); deshabilita el botón mientras envía ("Enviando…").
- Al éxito: mensaje de éxito y `form.reset()`.

### RF-5 — Formulario PQRS (Contacto)
`/contacto` tiene un formulario **distinto**: `user_name*`, `user_email*`, `user_phone*`,
`<select> contact_pref*` (Correo/WhatsApp/Llamada), `user_message*` (textarea).
- Envía con `emailjs.sendForm('service_433wpss', 'template_0rq3a9q', form)`.
- Validación cliente equivalente al `<script>` de `contacto.html`: nombre ≥2, email regex,
  teléfono regex `^[0-9+\-\s()]{7,20}$`, medio requerido, mensaje ≥10; lista de errores en `#contactResult`.

### RF-6 — Galería / lightbox y vídeos locales
- `/proyectos`: grid de imágenes `.gallery-item > a.popup-gallery-item` (lightbox Magnific con
  navegación entre imágenes) + 2 `.video-wrapper` con `<video>` y botón de play que activa
  `controls`+`play()` (equivalente al `<script>` de `proyectos.html`).
- `/quienes-somos`: carrusel Slick `.gallery-slider` con `data-slick`, lightbox `.popup-gallery`, y
  un vídeo local con portada/overlay/cerrar (`#videoBox`, `#afc-video`) — equivalente a sus 2 `<script>`.
- `/` (sección About): `.popup-video` abre `assets/images/gallery/video-afc.mp4` en Magnific.

### RF-7 — Blog
- `/blog`: replica exactamente el grid de 12 `.post-item` de `blog.html` — misma imagen, fecha,
  categorías, título, extracto y destino de "Ver blog" que el original (incluidas sus
  inconsistencias de enlace: el listado apunta a `blogN.html` según el HTML fuente, se traduce a `/blog/:slug`).
- `/blog/:slug`: 12 artículos, cada uno con el cuerpo **real** de `blogN.html`
  (párrafos, `<h2>`, `<ul>/<ol>`), su imagen, fecha y meta de categoría; wrapper `.wrapper.only-info`
  y `.blog.blog-single`; se conserva el `<style>` propio de cada `blogN.html`.
- `data/blogPosts.js` se **reconstruye desde `blog1.html`…`blog12.html`** (el actual está reescrito y no sirve).
- Slugs: derivados del tema de cada artículo (p. ej. `proteccion-contra-incendios`,
  `triangulo-del-fuego`, …); se fija la tabla `slug ↔ blogN.html` en el plan (Task 10).

### RF-8 — Navegación
- `Navbar` con: Inicio, Servicios (con dropdown de 6 servicios: los mismos textos y en el mismo
  orden que `index.html`; el dropdown **no** incluye Conceptualización, igual que el original),
  Proyectos, Quiénes somos, Blog, Contacto. Teléfono `311 645 6726` (`tel:`) y botón "Asesoría"
  (`https://wa.link/j2cd22`) visibles ≥`xl`.
- `Footer` con 4 widgets: Contacto (WhatsApp, "Envigado - Antioquia", botón Dirección→`/contacto`),
  Páginas + **Documentos** (enlace a `assets/images/GES-DO-01-Directrices del SIG.pdf`), Servicios
  (5 enlaces), Brochure (`assets/images/brochureAfcProfire.pdf`, `download`) + redes (Facebook,
  Instagram, YouTube). Línea de copyright "© 2026 AFC Pro Fire…" + "Hecho por: AndresVd".
- Enlace activo: la ruta actual recibe `active` en su `nav__item-link` (el original lo tiene
  hardcodeado como `active` en "Inicio" en todas las páginas; en React se calcula por `pathname`).

### RF-9 — Al cambiar de ruta
Scroll a `(0,0)`, se oculta el preloader, se re-ejecuta `initTheme()` (tras `destroyTheme()` del
anterior), y se actualiza `document.title` según la tabla de la §4.1.

## 6. Requisitos no funcionales

- **RNF-1 Build:** `npm run build` termina sin errores ni warnings de Rollup por imports/rutas rotas.
- **RNF-2 Tests:** `npm run test` (Vitest + React Testing Library + jsdom) en verde. Un *smoke test*
  por ruta: la página monta sin lanzar, y contiene textos/enlaces clave definidos en los criterios
  de aceptación de cada Task. EmailJS y jQuery/plugins se mockean en el entorno de test.
- **RNF-3 Sin regresión visual:** revisión manual página por página en `npm run dev` contra el
  `.html` original abierto en paralelo (hero-video, carruseles, popups, formularios, iconos
  icomoon, responsive a 375 / 768 / 1200 / 1440).
- **RNF-4 Paridad de assets:** todas las rutas de imagen/vídeo/PDF resuelven a un archivo existente
  en `public/assets/`, **salvo** las que ya están rotas en el original (ver §8).
- **RNF-5 DRY:** un solo `Navbar`, un solo `Footer`, un solo `Layout`, una sola plantilla de
  página de servicio, un solo componente de artículo. Cero páginas/branches duplicados tras la limpieza.
- **RNF-6 Sin dependencias nuevas** salvo las de test (`vitest`, `@testing-library/react`,
  `@testing-library/jest-dom`, `jsdom`, `@testing-library/user-event`). Runtime sigue en
  Vite + React 18 + React Router 6 + `@emailjs/browser`.

## 7. Criterios de aceptación globales

1. Las 15 rutas + los 12 artículos cargan y renderizan sin error de consola atribuible al port.
2. Navegar entre páginas (SPA) reinicia correctamente carruseles y popups (no se duplican slides,
   los `.bg-img` siguen aplicando fondo, el sticky navbar y el scroll-top siguen funcionando).
3. El formulario de asesoría y el de PQRS envían con `emailjs.sendForm` usando los IDs/templates
   correctos y muestran feedback de éxito/error.
4. `Navbar`/`Footer` aparecen una sola vez por página y todos sus enlaces internos usan `<Link>`.
5. `git grep` no encuentra `src/content/`, `ServicePages.jsx`, `BlogPost1..4.jsx`, ni páginas de
   servicio sueltas duplicadas tras la Task de limpieza.
6. `npm run build` y `npm run test` pasan; checklist de revisión visual (§ TDD Anexo B) firmado.
8. `document.title` corresponde a la tabla de la §4.1 en cada ruta.

## 8. Incidencias conocidas del original (se replican tal cual, salvo aprobación de arreglo)

| Ref rota en el original | Dónde | Acción por defecto |
|---|---|---|
| `assets/images/page-titles/incendio.jpg` | hero de las 6 páginas de servicio + `quienes-somos.html` | Se replica la referencia (imagen rota / sin fondo, igual que hoy). Arreglo opcional: mapear a `page-titles/12.jpg`. |
| `assets/images/page-titles/capacitacion.jpg` | hero de `transferenciaConocimiento.html` | Ídem. Arreglo opcional: `page-titles/10.jpg`. |
| `assets/images/banners/afc-poster.jpg` | `poster` del hero-video en `index.html` | Se replica (sin poster). Arreglo opcional: `gallery/portada-video.png`. |
| Enlaces cruzados del grid en `blog.html` | p. ej. la tarjeta "post 1" muestra imagen de un artículo y "Ver blog" lleva a otro | Se replica **exactamente** el destino que tiene cada tarjeta en el HTML fuente. |
| `lang="en"` en `servicios.html` y `blog-*.html` | `<html>` | Irrelevante en SPA; `index.html` de React queda en `lang="es"`. |

Cualquier "arreglo opcional" de esta tabla se aplica **sólo si el usuario lo aprueba**; el plan lo
deja como paso marcado `[ ] (opcional)`.
