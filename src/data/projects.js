// Galería de /proyectos — orden EXACTO de proyectos.html.
// Los nombres con espacios se codifican con encodeURI() al construir la URL.

const P = '/assets/images/gallery/'
const PR = '/assets/images/proyectos/'

export const galleryImages = [
  { src: `${P}instalacion-1.png`, alt: 'Proyecto 1' },
  { src: `${P}instalacion-2.png`, alt: 'Proyecto 2' },
  { src: `${P}instalacion-3.png`, alt: 'Proyecto 3' },
  { src: `${P}instalacion-4.png`, alt: 'Proyecto 4' },
  { src: `${P}instalacion-5.png`, alt: 'Proyecto 5' },
  { src: `${P}sistema-1.png`, alt: 'Sistema 1' },
  { src: `${P}sistema-2.png`, alt: 'Sistema 2' },
  { src: `${P}sistema-3.png`, alt: 'Sistema 3' },
  { src: `${P}sistema-4.png`, alt: 'Sistema 4' },
  { src: `${P}sistema-5.png`, alt: 'Sistema 5' },
  { src: `${PR}WhatsApp Image 2026-04-27 at 10.08.52.jpeg`, alt: 'Proyecto' },
  { src: `${PR}WhatsApp Image 2026-04-27 at 11.15.41.jpeg`, alt: 'Proyecto' },
  { src: `${PR}WhatsApp Image 2026-04-28 at 12.33.46.jpeg`, alt: 'Proyecto' },
  { src: `${PR}WhatsApp Image 2026-04-28 at 12.33.46 (1).jpeg`, alt: 'Proyecto' },
  { src: `${PR}WhatsApp Image 2026-04-28 at 12.33.47.jpeg`, alt: 'Proyecto' },
  { src: `${PR}WhatsApp Image 2026-04-28 at 12.35.28.jpeg`, alt: 'Proyecto' },
  { src: `${PR}WhatsApp Image 2026-04-28 at 12.36.36.jpeg`, alt: 'Proyecto' },
  { src: `${PR}WhatsApp Image 2026-04-28 at 12.39.03.jpeg`, alt: 'Proyecto' },
  { src: `${PR}WhatsApp Image 2026-04-29 at 08.26.12.jpeg`, alt: 'Proyecto' },
  // ---- Fotos nuevas (rvpendientesafc, ago 2026) ----
  { src: `${PR}rvp-01.jpeg`, alt: 'Proyecto' },
  { src: `${PR}rvp-02.jpeg`, alt: 'Proyecto' },
  { src: `${PR}rvp-03.jpeg`, alt: 'Proyecto' },
  { src: `${PR}rvp-04.jpeg`, alt: 'Proyecto' },
  { src: `${PR}rvp-05.jpeg`, alt: 'Proyecto' },
  { src: `${PR}rvp-06.jpeg`, alt: 'Proyecto' },
  { src: `${PR}rvp-07.jpeg`, alt: 'Proyecto' },
  { src: `${PR}rvp-08.jpeg`, alt: 'Proyecto' },
]

export const galleryVideos = [
  `${PR}WhatsApp Video 2026-04-28 at 12.33.51.mp4`,
  `${PR}WhatsApp Video 2026-04-28 at 12.34.59.mp4`,
  // ---- Vídeos nuevos (rvpendientesafc, ago 2026) ----
  `${PR}rvp-video-01.mp4`,
  `${PR}rvp-video-02.mp4`,
]

// Galería reducida usada en el carrusel de quienes-somos.html (10 imágenes).
export const aboutGallery = [
  { src: `${P}instalacion-1.png`, alt: 'Instalación 1' },
  { src: `${P}instalacion-2.png`, alt: 'Instalación 2' },
  { src: `${P}instalacion-3.png`, alt: 'Instalación 3' },
  { src: `${P}instalacion-4.png`, alt: 'Instalación 4' },
  { src: `${P}instalacion-5.png`, alt: 'Instalación 5' },
  { src: `${P}sistema-1.png`, alt: 'Sistema 1' },
  { src: `${P}sistema-2.png`, alt: 'Sistema 2' },
  { src: `${P}sistema-3.png`, alt: 'Sistema 3' },
  { src: `${P}sistema-4.png`, alt: 'Sistema 4' },
  { src: `${P}sistema-5.png`, alt: 'Sistema 5' },
]
