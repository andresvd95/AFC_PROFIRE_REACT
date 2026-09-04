import { Link } from 'react-router-dom'
import { bgCover } from '../lib/bg'

/*
 * <section class="page-title ..."> reutilizable. Fiel a los distintos page-title
 * del tema (layout1 con breadcrumb, layout2 con desc + acciones, hero-min).
 *
 * Props:
 *  - variant: 'layout1' | 'layout2' | 'hero-min'
 *  - bg: ruta de la imagen de fondo (se inserta como <div class="bg-img"><img>)
 *  - bgAlt: alt de esa imagen
 *  - heading: título (h1)
 *  - desc: descripción opcional (<p class="pagetitle__desc">)
 *  - breadcrumb: [{ label, to? }]  (último = activo)
 *  - actions: nodo(s) opcional(es) tras el título
 *  - scrollDownHref: si se pasa, muestra <a class="scroll-down">
 *  - headingClassName: clase extra para el h1 (por defecto 'mb-0')
 */
export default function PageTitle({
  variant = 'layout2',
  bg,
  bgAlt = 'background',
  heading,
  desc,
  breadcrumb,
  actions,
  scrollDownHref,
  headingClassName = 'mb-0',
  colClass = 'col-12',
}) {
  const sectionClass =
    variant === 'hero-min'
      ? 'page-title hero-min bg-overlay bg-overlay-2 bg-parallax'
      : `page-title page-title-${variant} bg-overlay bg-overlay-2 bg-parallax`

  return (
    <section className={sectionClass} style={bg ? bgCover(bg) : undefined}>
      <div className="container">
        <div className="row">
          <div className={colClass}>
            {breadcrumb && (
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center mb-0">
                  {breadcrumb.map((b, i) => {
                    const last = i === breadcrumb.length - 1
                    return (
                      <li
                        key={b.label}
                        className={`breadcrumb-item${last ? ' active' : ''}`}
                        aria-current={last ? 'page' : undefined}
                      >
                        {b.to && !last ? <Link to={b.to}>{b.label}</Link> : b.label}
                      </li>
                    )
                  })}
                </ol>
              </nav>
            )}
            <h1 className={`pagetitle__heading ${headingClassName}`.trim()}>{heading}</h1>
            {desc && <p className="pagetitle__desc" dangerouslySetInnerHTML={{ __html: desc }} />}
            {actions && <div className="d-flex align-items-center mt-30">{actions}</div>}
            {scrollDownHref && (
              <a href={scrollDownHref} className="scroll-down">
                <i className="icon-arrow-down"></i>
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
