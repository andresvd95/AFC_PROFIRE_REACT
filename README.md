# AFC Pro Fire — Sitio web (React + Vite)

Reconstrucción **fiel 1:1** del sitio corporativo estático de AFC Pro Fire
(HTML + CSS + jQuery del tema) como SPA con **React 18 + Vite 5 + React Router 6**.

- **Repositorio:** <https://github.com/andresvd95/AFC_PROFIRE_REACT>
- **Fuente de verdad:** el sitio estático original (`../afcprofire/`). Ante cualquier
  diferencia, manda el HTML original. El CSS del tema (`libraries.css`, `style.css`)
  se usa **sin modificar**.
- **Documentación de diseño:** [`docs/PRD.md`](docs/PRD.md) · [`docs/TDD.md`](docs/TDD.md) · [`docs/PLAN.md`](docs/PLAN.md)

---

## Puesta en marcha

```bash
npm install
npm run dev        # servidor de desarrollo (http://localhost:5173)
npm run build      # build de producción -> dist/
npm run preview    # sirve dist/
npm run test       # tests (Vitest + React Testing Library, jsdom)
npm run test:watch
```

Requisitos: Node 18+ (probado con Node 22).

---

## Cómo funciona

El sitio original inicializaba los plugins de jQuery (slick, magnific-popup, sticky
navbar, etc.) **una sola vez** al cargar la página con `assets/js/main.js`. En una SPA
eso no sirve: al navegar entre rutas el DOM cambia y los plugins hay que re-armarlos.

- **`index.html`** carga las fuentes, `libraries.css`, `style.css`, **jQuery + `plugins.js`**
  y el SDK de EmailJS **antes** del bundle. **No** carga `main.js`.
- **`src/lib/theme.js`** reimplementa `main.js` como `initTheme()` / `destroyTheme()`.
  Sin `window.jQuery` (p. ej. en tests) es un *no-op* seguro.
- **`src/layout/Layout.jsx`** monta el chrome común (preloader, `Navbar`, `Footer`,
  botón scroll-top) una sola vez; cada página es solo su contenido.
- **`src/layout/RouteEffects.jsx`** en cada cambio de ruta: sube el scroll, oculta el
  preloader, fija `document.title` y ejecuta `destroyTheme()` → `initTheme()`.
- Los formularios usan **`@emailjs/browser`** (no dependen del SDK global).

## Estructura

```
src/
├── App.jsx                 Rutas anidadas bajo <Layout>  (export AppRoutes para tests)
├── layout/                 Layout, Preloader, RouteEffects
├── lib/                    theme.js (plugins del tema), useDocumentTitle.js
├── components/             Navbar, Footer, ContactForm, ContactFormPQRS, PageTitle,
│                           ServiceContactCTA, ServiceDetailLayout, LocalVideo
├── data/                   navLinks, services, servicesDetail, projects, blogPosts (generado)
├── pages/                  Home, Servicios, ServiceDetail, Proyectos, QuienesSomos,
│                           Contacto, Blog, BlogPost, NotFound
├── styles/                 CSS co-ubicado extraído de los <style> de cada HTML
└── test/                   helpers de test
public/assets/              CSS/JS del tema, imágenes, fuentes, PDFs, vídeos
scripts/build-blog-data.mjs Generador de src/data/blogPosts.js (ver abajo)
```

## Rutas

| URL | Página | Fuente original |
|-----|--------|-----------------|
| `/` | Inicio | `index.html` |
| `/servicios` | Servicios | `servicios.html` |
| `/servicios/diseno-ingenieria` | Diseño e Ingeniería | `diseno-Ingenieria.html` |
| `/servicios/instalacion` | Instalación & Puesta en Marcha | `instalacion.html` |
| `/servicios/mantenimiento` | Mantenimiento Preventivo y Correctivo | `mantenimiento.html` |
| `/servicios/auditoria` | Gestión de Riesgos & Auditoría | `auditoria.html` |
| `/servicios/diagnostico` | Diagnóstico y Análisis de Requerimientos | `diagnostico.html` |
| `/servicios/transferencia-conocimiento` | Capacitación y Transferencia del Conocimiento | `transferenciaConocimiento.html` |
| `/servicios/conceptualizacion` | Conceptualización y Diseño de Soluciones | `conceptualizacion.html` |
| `/proyectos` | Galería de Proyectos | `proyectos.html` |
| `/quienes-somos` | Quiénes Somos | `quienes-somos.html` |
| `/contacto` | Contacto | `contacto.html` |
| `/proveedores` | Proveedores (3 descargas) | nueva — `public/assets/docs/*` |
| `/blog` | Blog (listado) | `blog.html` |
| `/blog/:slug` | Artículo (12) | `blog1.html` … `blog12.html` |
| `*` | 404 | — |

## EmailJS

| | Service | Template | Uso |
|---|---|---|---|
| Formulario de asesoría | `service_433wpss` | `template_l61hkol` | Home, Servicios y las 7 páginas de servicio |
| Formulario PQRS | `service_433wpss` | `template_0rq3a9q` | Página de Contacto |

Public Key: `yPAstTbHDQ-GCT7Lm` (clave pública de cliente, igual que en el sitio original).

## Blog

`src/data/blogPosts.js` está **generado** a partir de los HTML originales:

```bash
node scripts/build-blog-data.mjs   # requiere ../afcprofire junto a este proyecto
```

Extrae de `blog1.html`…`blog12.html` el cuerpo real de cada artículo (incluidos
tablas, SVG, `<details>`, callouts y su `<style>` propio) y de `blog.html` las
tarjetas del listado (`blogList`). Los slugs y el orden se fijan en el propio script.

## Vistas previas de documentos (Proveedores)

Las miniaturas de la página 1 de los PDF de `/proveedores` viven en
`public/assets/docs/previews/*.png` (versionadas). Para regenerarlas:

```bash
npm i -D pdf-to-img
node scripts/build-doc-previews.mjs
npm rm pdf-to-img
```

## Incidencias heredadas del original (se replican tal cual)

- `assets/images/page-titles/incendio.jpg`, `…/capacitacion.jpg` y
  `assets/images/banners/afc-poster.jpg` no existen en el sitio original; las
  referencias se mantienen (imagen rota / sin póster, igual que hoy).
- El listado de `blog.html` cruza algunos enlaces imagen/título/botón; se toma como
  destino canónico el del botón «Ver blog».

## Tests

`npm run test` — un *smoke test* por ruta y por componente (montan sin fallo, DOM y
enlaces correctos, los formularios llaman a EmailJS con los IDs correctos). EmailJS y
jQuery/plugins se neutralizan en el entorno de test (`src/setupTests.js`).
La fidelidad visual se valida manualmente contra el HTML original (ver
[`docs/TDD.md`](docs/TDD.md), Anexo B).
