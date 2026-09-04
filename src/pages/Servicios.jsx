import { Link } from 'react-router-dom'
import PageTitle from '../components/PageTitle'
import ContactForm from '../components/ContactForm'
import { bgCover } from '../lib/bg'
import { serviciosGroup1, serviciosGroup2 } from '../data/services'

const TITLE_STYLE = { color: '#004062' }
const DESC_STYLE = { color: '#1b1a1a' }
const FEATURE_TITLE_STYLE = { color: '#004062', margin: 0, padding: '10px 14px' }
const FEATURE_DESC_STYLE = { color: '#1b1a1a', margin: 0, padding: '10px 14px' }

function ServiceCard({ s }) {
  return (
    <div className="col-sm-12 col-md-6 col-lg-4">
      <div className="service-item">
        <div className="service__img">
          <img src={s.img} alt="service" loading="lazy" />
        </div>
        <div className="service__body">
          <h4 className="service__title" style={TITLE_STYLE}>
            {s.servicios.title}
          </h4>
          <p className="service__desc" style={DESC_STYLE} dangerouslySetInnerHTML={{ __html: s.servicios.descHtml }} />
          <Link to={s.to} className="btn btn__secondary btn__outlined btn__custom">
            <span>Ver más</span>
            <i className="icon-arrow-right"></i>
          </Link>
        </div>
      </div>
    </div>
  )
}

const FEATURES = [
  {
    icon: 'icon-hydro-power3',
    title: 'Diseño e Ingeniería',
    descHtml: 'Diseñamos sistemas a la medida con rociadores, detección, agentes, bombeo y cálculo hidráulico <br /><br /><br /><br />',
  },
  {
    icon: 'icon-biosphere',
    title: 'Instalación & Puesta en Marcha',
    descHtml:
      'Instalamos y supervisamos subsistemas; realizamos pruebas funcionales e hidrostáticas y comisionamos con protocolos y actas de entrega.<br /><br />',
  },
  {
    icon: 'icon-eco-house',
    title: 'Mantenimiento',
    descHtml:
      'Planes preventivos y correctivos, inspecciones y pruebas NFPA, más atención de emergencias para asegurar máxima disponibilidad.',
  },
  {
    icon: 'icon-energy2',
    title: 'Gestión de Riesgos & Auditoría',
    descHtml:
      'Evaluamos instalaciones, construimos matriz de riesgo y hacemos planes y auditorías para cerrar brechas y elevar la protección. clients',
  },
  {
    icon: 'icon-electric-car',
    title: 'Diagnóstico de Requerimientos',
    descHtml:
      'Levantamiento en sitio y entrevistas para entender procesos, detectar brechas y definir un alcance alineado a normativa y presupuesto.',
  },
]

export default function Servicios() {
  return (
    <>
      <PageTitle
        variant="layout2"
        bg="/assets/images/page-titles/12.jpg"
        heading="NUESTROS SERVICIOS"
        scrollDownHref="#careers"
      />

      {/* Services Layout 1 */}
      <section className="services-layout1 pt-120 pb-90">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-6 offset-lg-12">
              <div className="heading mb-50">
                <h2 className="heading__subtitle" style={{ color: '#ef7d00' }}>
                  Enfocados en ser mucho más que un proveedor. nuestra propuesta de valor se centra en ofrecerle una
                  solución integral y un acompañamiento constante en su seguridad.
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 mb-4">
              <h3 className="service-section-title">1. Protección contra incendios:</h3>
            </div>
            {serviciosGroup1.map((s) => (
              <ServiceCard key={s.slug} s={s} />
            ))}

            <div className="col-12 mb-4 mt-4">
              <h3 className="service-section-title">2. Asesorías Especializadas: “Conoce y Protege”</h3>
            </div>
            {serviciosGroup2.map((s) => (
              <ServiceCard key={s.slug} s={s} />
            ))}
          </div>
        </div>
      </section>

      {/* Features Layout 2 */}
      <section className="features-layout2 pt-120" style={{ backgroundColor: '#302f2f' }}>
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-5">
              <h2 className="heading__subtitle" style={{ color: '#ef7d00' }}>
                Prevención que salva vidas
              </h2>
              <h3 className="heading__title">Soluciones integrales de protección contra incendios</h3>
              <p className="heading__desc mb-30">
                En los últimos años, la mayor exigencia normativa y la complejidad operativa han hecho imprescindible
                contar con capacidades especializadas en protección contra incendios. Diseñar, instalar y mantener
                sistemas confiables exige ingeniería certificada, proveedores calificados y una inversión planificada
                para asegurar disponibilidad, desempeño y cumplimiento de estándares
              </p>
              <p className="heading__desc mb-40">
                Estos factores representan un reto directo para la continuidad del negocio. En AFC Pro Fire te
                acompañamos de principio a fin: diagnóstico de riesgo, ingeniería, instalación, puesta en marcha,
                mantenimiento y auditorías, de modo que tu operación esté protegida 24/7 y con evidencia de cumplimiento.
              </p>
              <a href="https://wa.link/j2cd22" className="btn btn__secondary">
                <i className="fab fa-whatsapp"></i>
                <span>Cotizar ya</span>
              </a>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6 offset-lg-1">
              <div className="row">
                {FEATURES.map((f) => (
                  <div key={f.icon} className="col-sm-6">
                    <div className="feature-item">
                      <div className="feature__icon">
                        <i className={f.icon}></i>
                      </div>
                      <h4 className="feature__title" style={FEATURE_TITLE_STYLE}>
                        {f.title}
                      </h4>
                      <p
                        className="feature__desc"
                        style={FEATURE_DESC_STYLE}
                        dangerouslySetInnerHTML={{ __html: f.descHtml }}
                      />
                    </div>
                  </div>
                ))}
                <div className="col-sm-6">
                  <div className="feature-item feature-item-custom">
                    <div className="feature__icon">
                      <i className="icon-wind-socket"></i>
                    </div>
                    <h4 className="feature__title">
                      Conceptualización de <br /> Soluciones
                    </h4>
                    <p className="feature__desc">
                      Propuestas técnico-económicas con estudios de viabilidad
                      <br />
                      <br />
                      <br />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section
        className="contact-layout2 pb-0 bg-overlay bg-overlay-primary-gradient"
        style={bgCover('/assets/images/banners/2.jpg')}
      >
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
              <div className="col-inner">
                <div className="heading-layout2 heading-light mb-60">
                  <h2 className="heading__subtitle">Prevención que salva vidas</h2>
                  <h3 className="heading__title">
                    Innovación y seguridad contra incendios que protegen lo que más importa
                  </h3>
                  <p className="heading__desc">
                    Somos AFC Pro Fire. Creemos que la prevención y la seguridad no son opcionales, sino un derecho
                    fundamental. Diseñamos e implementamos sistemas contra incendio guiados por una filosofía de
                    innovación, integridad y compromiso inquebrantable con la seguridad humana. Nuestro objetivo es
                    construir no solo sistemas confiables, sino también un legado de seguridad y confianza para tu
                    organización.
                  </p>
                </div>
                <div className="row fancybox-light">
                  {[
                    { icon: 'icon-biosphere2', label: 'Prevención responsable' },
                    { icon: 'icon-tube', label: 'Soluciones a la medida' },
                    { icon: 'icon-electric-charge', label: 'Desempeño verificable' },
                  ].map((f) => (
                    <div key={f.icon} className="col-sm-4">
                      <div className="fancybox-item">
                        <div className="fancybox__icon">
                          <i className={f.icon}></i>
                        </div>
                        <div className="fancybox__content">
                          <h4 className="fancybox__title mb-0">{f.label}</h4>
                        </div>
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
    </>
  )
}
