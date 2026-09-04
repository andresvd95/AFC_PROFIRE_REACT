import Navbar from './Navbar'
import Footer from './Footer'
import ContactForm from './ContactForm'

/**
 * Generic service page layout.
 *
 * Props:
 *  - title: string  (page heading)
 *  - subtitle: string  (pagetitle desc)
 *  - bannerImg: string  (path inside /assets/images/)
 *  - serviceImg: string  (path inside /assets/images/)
 *  - sections: [{ heading, text }]
 *  - benefits: [{ icon, label }]
 */
export default function ServicePage({ title, subtitle, bannerImg, serviceImg, sections = [], benefits = [] }) {
  return (
    <div className="wrapper">

      <Navbar />

      {/* Hero banner */}
      <section className="page-title page-title-layout2 bg-overlay bg-overlay-2 bg-parallax">
        <div className="bg-img">
          <img src={bannerImg || '/assets/images/page-titles/incendio.jpg'} alt={title} />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1 className="pagetitle__heading mb-0">{title}</h1>
              {subtitle && <p className="pagetitle__desc">{subtitle}</p>}
              <div className="d-flex align-items-center mt-30">
                <a href="https://wa.link/j2cd22" className="btn btn__primary mr-30">
                  <i className="icon-arrow-right"></i><span>Solicitar asesoría</span>
                </a>
                <a href="/quienes-somos" className="btn btn__white">Más sobre AFC</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="text-content-section pb-90">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">

              {serviceImg && (
                <div className="row mb-40">
                  <div className="col-sm-12">
                    <div className="gallery-item">
                      <img src={serviceImg} alt={title} style={{ width: '100%', borderRadius: 8 }} />
                    </div>
                  </div>
                </div>
              )}

              {sections.map((s, i) => (
                <div key={i} className="text__block mb-30">
                  <h5 className="text__block-title">{s.heading}</h5>
                  <p className="text__block-desc">{s.text}</p>
                </div>
              ))}

              {benefits.length > 0 && (
                <div className="row features-layout3 mt-40">
                  {benefits.map((b) => (
                    <div key={b.label} className="col-sm-4">
                      <div className="feature-item">
                        <div className="feature__icon"><i className={b.icon}></i></div>
                        <h4 className="feature__title">{b.label}</h4>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="contact-layout2 pb-0 bg-overlay bg-overlay-primary-gradient">
        <div className="bg-img"><img src="/assets/images/banners/2.jpg" alt="" /></div>
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <div className="col-inner">
                <div className="heading-layout2 heading-light mb-60">
                  <h2 className="heading__subtitle">Prevención que salva vidas</h2>
                  <h3 className="heading__title">Protegemos personas, activos y continuidad operativa.</h3>
                  <p className="heading__desc">
                    Agenda una asesoría con nuestro equipo y recibe un plan a la medida de tu riesgo.
                  </p>
                </div>
                <div className="row fancybox-light">
                  {[['icon-biosphere2', 'Cumplimiento NFPA'], ['icon-tube', 'Soluciones a la medida'], ['icon-electric-charge', 'Excelente desempeño']].map(([icon, label]) => (
                    <div key={icon} className="col-sm-4">
                      <div className="fancybox-item">
                        <div className="fancybox__icon"><i className={icon}></i></div>
                        <div className="fancybox__content"><h4 className="fancybox__title mb-0">{label}</h4></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <button id="scrollTopBtn"><i className="fas fa-long-arrow-alt-up"></i></button>
    </div>
  )
}
