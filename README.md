# AFC Pro Fire — Proyecto React (Vite)

Conversión completa del sitio HTML/CSS a **React + Vite** con **React Router v6**.

---

## 📁 Estructura del proyecto

```
afcprofire-react/
├── index.html                  ← Entry HTML (carga CSS del tema y jQuery)
├── vite.config.js
├── package.json
├── public/
│   └── assets/                 ← ⚠️ COPIA AQUÍ tus assets del proyecto HTML
│       ├── css/
│       │   ├── libraries.css
│       │   └── style.css
│       ├── js/
│       │   ├── jquery-3.5.1.min.js
│       │   ├── plugins.js
│       │   └── main.js
│       └── images/             ← Todas las imágenes (logo, banners, gallery, etc.)
└── src/
    ├── main.jsx
    ├── App.jsx                 ← Router principal
    ├── components/
    │   ├── Navbar.jsx
    │   ├── Footer.jsx
    │   ├── ContactForm.jsx     ← Formulario reutilizable con EmailJS
    │   ├── ServicePage.jsx     ← Layout genérico para páginas de servicios
    │   └── ScrollToTop.jsx
    ├── pages/
    │   ├── Home.jsx
    │   ├── Servicios.jsx
    │   ├── ServicePages.jsx    ← Exporta todos los sub-servicios
    │   ├── Instalacion.jsx
    │   ├── Mantenimiento.jsx
    │   ├── Auditoria.jsx
    │   ├── Diagnostico.jsx
    │   ├── DisenoIngenieria.jsx
    │   ├── TransferenciaConocimiento.jsx
    │   ├── Conceptualizacion.jsx
    │   ├── Proyectos.jsx
    │   ├── QuienesSomos.jsx
    │   ├── Blog.jsx
    │   ├── BlogPost.jsx
    │   └── Contacto.jsx
    └── data/
        └── blogPosts.js        ← Contenido de todos los artículos del blog
```

---

## 🚀 Instalación y uso

### 1. Instalar dependencias
```bash
npm install
```

### 2. Copiar assets del proyecto HTML original
Copia la carpeta `assets/` de tu proyecto HTML dentro de `public/`:
```
public/assets/css/libraries.css
public/assets/css/style.css
public/assets/js/jquery-3.5.1.min.js
public/assets/js/plugins.js
public/assets/js/main.js
public/assets/images/...  (logo, banners, gallery, services, etc.)
```

### 3. Ejecutar en modo desarrollo
```bash
npm run dev
```

### 4. Compilar para producción
```bash
npm run build
```
Los archivos compilados quedan en la carpeta `dist/`.

---

## 🗺️ Rutas del sitio

| URL | Página |
|-----|--------|
| `/` | Inicio |
| `/servicios` | Servicios |
| `/diseno-ingenieria` | Diseño e Ingeniería |
| `/instalacion` | Instalación y Puesta en Marcha |
| `/mantenimiento` | Mantenimiento |
| `/auditoria` | Gestión de Riesgos |
| `/diagnostico` | Diagnóstico |
| `/transferencia-conocimiento` | Capacitación |
| `/conceptualizacion` | Conceptualización |
| `/proyectos` | Galería de Proyectos |
| `/quienes-somos` | Quiénes Somos |
| `/blog` | Blog (listado) |
| `/blog/:id` | Artículo individual |
| `/contacto` | Contacto |

---

## ✉️ EmailJS

El formulario usa EmailJS con las mismas credenciales del proyecto original:
- **Public Key:** `yPAstTbHDQ-GCT7Lm`
- **Service ID:** `service_433wpss`
- **Template formulario general:** `template_l61hkol`
- **Template página de contacto:** `template_0rq3a9q`

Si necesitas cambiarlos, edita `src/components/ContactForm.jsx` y `src/pages/Contacto.jsx`.

---

## 📝 Notas importantes

- Los CSS del tema (`libraries.css`, `style.css`) y jQuery se cargan desde `index.html` para mantener compatibilidad total con el diseño original.
- Los plugins del tema (slick carousel, magnific popup, etc.) siguen funcionando porque jQuery y `plugins.js` se cargan globalmente.
- Para agregar nuevos artículos al blog, edita `src/data/blogPosts.js`.
- Para agregar nuevas páginas de servicio, copia el patrón de `ServicePages.jsx` y agrega la ruta en `App.jsx`.
