// Documentos descargables de la página /proveedores.
// Los archivos viven en public/assets/docs/. Las miniaturas de los PDF se
// generan con scripts/build-doc-previews.mjs y viven en docs/previews/.

export const proveedorDocs = [
  {
    key: 'gestion-compras',
    title: 'Procedimiento de Gestión de Compras',
    desc: 'Lineamientos de AFC Pro Fire para la selección, evaluación y contratación de proveedores.',
    filename: 'CCL-PR-02 Procedimiento de Gestión de Compras.pdf',
    href: '/assets/docs/CCL-PR-02-Procedimiento-Gestion-Compras.pdf',
    preview: '/assets/docs/previews/gestion-compras.png',
    ext: 'PDF',
    sizeLabel: '291 KB',
    icon: 'fas fa-file-pdf',
  },
  {
    key: 'inscripcion',
    title: 'Formulario de Inscripción de Proveedores',
    desc: 'Diligéncialo para registrarte como proveedor de AFC Pro Fire. Formato Excel (CCL-FO-05).',
    filename: 'CCL-FO-05 Formulario de Inscripción de Proveedores.xlsx',
    href: '/assets/docs/CCL-FO-05-Formulario-Inscripcion-Proveedores.xlsx',
    preview: null,
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
    preview: '/assets/docs/previews/actualizacion-datos.png',
    ext: 'PDF',
    sizeLabel: '200 KB',
    icon: 'fas fa-file-pdf',
  },
]
