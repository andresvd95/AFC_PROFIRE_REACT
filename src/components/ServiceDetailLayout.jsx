import { Link } from 'react-router-dom'
import PageTitle from './PageTitle'
import ServiceContactCTA from './ServiceContactCTA'

// Plantilla de las 7 páginas de detalle de servicio.
// Fiel a la estructura de diseno-Ingenieria.html, instalacion.html, etc.:
//   page-title-layout2  ->  section.text-content-section  ->  contact-layout2 (CTA)
export default function ServiceDetailLayout({ rec }) {
  const blockStyle = rec.blocksInGalleryRow ? { display: 'block', width: '100%', clear: 'both' } : undefined

  const Blocks = () =>
    rec.blocks.map((b, i) => (
      <div
        key={b.title}
        className={`text__block ${i === rec.blocks.length - 1 && !rec.benefits.length ? 'mb-0' : 'mb-30'}`}
        style={blockStyle}
      >
        <h5 className="text__block-title" dangerouslySetInnerHTML={{ __html: b.title }} />
        {b.html ? <p className="text__block-desc" dangerouslySetInnerHTML={{ __html: b.html }} /> : null}
      </div>
    ))

  return (
    <>
      <PageTitle
        variant="layout2"
        colClass="col-lg-12"
        bg={rec.bannerImg}
        bgAlt={rec.bannerAlt}
        heading={rec.title}
        desc={rec.desc || undefined}
        actions={
          <>
            <a href="https://wa.link/j2cd22" className="btn btn__primary mr-30">
              <i className="icon-arrow-right"></i>
              <span>Solicitar asesoría</span>
            </a>
            <Link to="/quienes-somos" className="btn btn__white">
              Más sobre AFC
            </Link>
          </>
        }
      />

      <section className="text-content-section pb-90">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="text__block mb-30">
                <h5 className="text__block-title">Visión General</h5>
                <p className="text__block-desc" dangerouslySetInnerHTML={{ __html: rec.intro }} />
              </div>

              {rec.galleryImg && rec.blocksInGalleryRow ? (
                <div className="row mb-40">
                  <div className="col-sm-12">
                    <div className="gallery-item">
                      <img src={rec.galleryImg} alt="galería" className={rec.galleryImgClass} />
                    </div>
                  </div>
                  <Blocks />
                </div>
              ) : (
                <>
                  {rec.galleryImg && (
                    <div className="row mb-40">
                      <div className="col-sm-12">
                        <div className="gallery-item">
                          <img src={rec.galleryImg} alt="galería" className={rec.galleryImgClass} />
                        </div>
                      </div>
                    </div>
                  )}
                  <Blocks />
                </>
              )}

              {rec.benefits.length > 0 && (
                <div className="row features-layout3 mt-40">
                  {rec.benefits.map((b) => (
                    <div key={b.title} className="col-sm-4">
                      <div className="feature-item">
                        <div className="feature__icon">
                          <i className={b.icon}></i>
                        </div>
                        <h4 className="feature__title">{b.title}</h4>
                        {b.desc && <p className="feature__desc">{b.desc}</p>}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <ServiceContactCTA />
    </>
  )
}
