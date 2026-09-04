import { Link } from 'react-router-dom'

export default function Servicios() {
  return (
    <div className="wrapper">
      <div className="preloader">
        <div className="loading"><span></span><span></span><span></span><span></span></div>
      </div>

      <header className="header header-layout1">
        <nav className="navbar navbar-expand-lg sticky-navbar">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              <img src="/assets/images/logo/logo.png" className="logo" alt="logo" />
            </Link>
            <button className="navbar-toggler" type="button">
              <span className="menu-lines"><span></span></span>
            </button>
            <div className="collapse navbar-collapse" id="mainNavigation">
              <ul className="navbar-nav">
                <li className="nav__item has-dropdown"><Link to="/" className="nav__item-link active">Inicio</Link></li>
                <li className="nav__item has-dropdown">
                  <Link to="/servicios" className="nav__item-link">Servicios</Link>
                  <button className="dropdown-toggle" data-toggle="dropdown"></button>
                  <ul className="dropdown-menu">
                    <li className="nav__item"><Link to="/diseno-ingenieria" className="nav__item-link">Diseño e Ingeniería</Link>
                    </li>
                    <li className="nav__item"><Link to="/instalacion" className="nav__item-link">Instalación y Puesta en
                      Marcha</Link></li>
                    <li className="nav__item"><Link to="/mantenimiento" className="nav__item-link">Mantenimiento Preventivo y
                      Correctivo</Link></li>
                    <li className="nav__item"><Link to="/auditoria" className="nav__item-link">Gestión de Riesgos y Auditoría
                      Integral</Link></li>
                    <li className="nav__item"><Link to="/diagnostico" className="nav__item-link">Diagnóstico y Análisis de
                      Requerimientos</Link></li>
                    <li className="nav__item"><Link to="/transferencia-conocimiento" className="nav__item-link">Capacitación y
                      Transferencia del Conocimiento
                    </Link></li>
                  </ul>
                </li>
                <li className="nav__item"><Link to="/proyectos" className="nav__item-link">Proyectos</Link></li>
                <li className="nav__item"><Link to="/quienes-somos" className="nav__item-link">Quienes somos</Link></li>
                <li className="nav__item has-dropdown">
                  <Link to="/blog" className="nav__item-link">Blog</Link>
                </li>
                <li className="nav__item"><Link to="/contacto" className="nav__item-link">Contacto</Link></li>
              </ul>
              <button className="close-mobile-menu d-block d-lg-none"><i className="fas fa-times"></i></button>
            </div>
            <div className="contact__number d-none d-xl-flex align-items-center">
              <i className="icon-phone"></i>
              <a href="tel:+573116456726">311 645 6726</a>
            </div>
            <ul className="navbar-actions d-none d-xl-flex align-items-center list-unstyled mb-0">
              <li>
                <a href="https://wa.link/j2cd22" target="_blank" rel="noopener noreferrer" className="btn btn__primary">
                  <span>Asesoría</span>
                  <i className="icon-arrow-right"></i>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      <section className="page-title page-title-layout2 bg-overlay bg-overlay-2 bg-parallax">
        <div className="bg-img"><img src="/assets/images/page-titles/12.jpg" alt="background" /></div>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className="pagetitle__heading mb-0">NUESTROS SERVICIOS</h1>
              <a href="#careers" className="scroll-down">
                <i className="icon-arrow-down"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="services-layout1 pt-120 pb-90">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-6 offset-lg-12">
              <div className="heading mb-50">
                <h2 className="heading__subtitle" style={{ color: "#ef7d00" }}>Enfocados en ser mucho más que un proveedor. nuestra propuesta de valor se
                  centra en ofrecerle una solución integral y un acompañamiento constante en su seguridad.</h2>
              </div>
            </div>
          </div>
          <div className="row">

            <div className="col-12 mb-4">
              <h3 className="service-section-title">1. Protección contra incendios:</h3>
            </div>

            <div className="col-sm-12 col-md-6 col-lg-4">
              <div className="service-item">
                <div className="service__img">
                  <img src="/assets/images/services/diseño.png" alt="service" loading="lazy" />
                </div>
                <div className="service__body">
                  <h4 className="service__title" style={{ color: "#004062" }}>Diseño e Ingeniería de Sistemas Contra Incendios:</h4>
                  <p className="service__desc" style={{ color: "#1b1a1a" }}>
                    Sistemas de rociadores automáticos. <br />
                    Sistemas de detección y alarma de incendios. <br />
                    Sistemas de extinción con agentes limpios. <br />
                    Sistemas de extinción con CO2. <br />
                    Sistemas de espuma. <br />
                    Sistemas de bombeo contra incendio. <br />
                    Cálculo de los sistemas y especificación de equipos. <br />
                  </p>
                  <Link to="/diseno-ingenieria" className="btn btn__secondary btn__outlined btn__custom">
                    <span>Ver más</span>
                    <i className="icon-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-sm-12 col-md-6 col-lg-4">
              <div className="service-item">
                <div className="service__img">
                  <img src="/assets/images/services/instalacion.png" alt="service" loading="lazy" />
                </div>
                <div className="service__body">
                  <h4 className="service__title" style={{ color: "#004062" }}>Instalación y Puesta en Marcha:</h4>
                  <p className="service__desc" style={{ color: "#1b1a1a" }}>Supervisión y ejecución de proyectos de instalación. <br />
                    Pruebas y puesta en servicio de todos los sistemas.<br /><br /><br /><br /><br /><br /></p>
                  <Link to="/instalacion" className="btn btn__secondary btn__outlined btn__custom">
                    <span>Ver más</span>
                    <i className="icon-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-sm-12 col-md-6 col-lg-4">
              <div className="service-item">
                <div className="service__img">
                  <img src="/assets/images/services/mantenimiento.png" alt="service" loading="lazy" />
                </div>
                <div className="service__body">
                  <h4 className="service__title" style={{ color: "#004062" }}>Mantenimiento Preventivo y Correctivo:</h4>
                  <p className="service__desc" style={{ color: "#1b1a1a" }}>Programas de mantenimiento adaptados a las necesidades del cliente.<br />
                    Inspecciones periódicas, pruebas y reparaciones.<br />
                    Atención de emergencias.<br /><br /><br /><br /></p>
                  <Link to="/mantenimiento" className="btn btn__secondary btn__outlined btn__custom">
                    <span>Ver más</span>
                    <i className="icon-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-sm-12 col-md-6 col-lg-4">
              <div className="service-item">
                <div className="service__img">
                  <img src="/assets/images/services/gestion.png" alt="service" loading="lazy" />
                </div>
                <div className="service__body">
                  <h4 className="service__title" style={{ color: "#004062" }}>Gestión de Riesgos y Auditoría Integral</h4>
                  <p className="service__desc" style={{ color: "#1b1a1a" }}>Evaluación de riesgos.<br />
                    Elaboración de planes de emergencia y contingencia.<br />
                    Auditoría de Sistemas de Protección Contra Incendio existentes.<br />
                    Interventoría de implementación de Sistemas de Protección Contra Incendio.<br /><br /></p>
                  <Link to="/auditoria" className="btn btn__secondary btn__outlined btn__custom">
                    <span>Ver más</span>
                    <i className="icon-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>


            <div className="col-12 mb-4 mt-4">
              <h3 className="service-section-title">2. Asesorías Especializadas: “Conoce y Protege”</h3>
            </div>

            <div className="col-sm-12 col-md-6 col-lg-4">
              <div className="service-item">
                <div className="service__img">
                  <img src="/assets/images/services/diagnostico.png" alt="service" loading="lazy" />
                </div>
                <div className="service__body">
                  <h4 className="service__title" style={{ color: "#004062" }}>Diagnóstico y Análisis de Requerimientos:</h4>
                  <p className="service__desc" style={{ color: "#1b1a1a" }}>Entrevistas y levantamiento de información detallado.<br />
                    Análisis de brechas y oportunidades.                  <br />
                    Identificación de los desafíos técnicos y operativos.<br /><br /><br /></p>
                  <Link to="/diagnostico" className="btn btn__secondary btn__outlined btn__custom">
                    <span>Ver más</span>
                    <i className="icon-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4">
              <div className="service-item">
                <div className="service__img">
                  <img src="/assets/images/services/conceptualizacion.png" alt="service" loading="lazy" />
                </div>
                <div className="service__body">
                  <h4 className="service__title" style={{ color: "#004062" }}>Conceptualización y Diseño de Soluciones:</h4>
                  <p className="service__desc" style={{ color: "#1b1a1a" }}>Desarrollo de propuestas técnicas y económicas.<br />
                    Estudios de viabilidad y rentabilidad.  <br />
                    Modelado y simulación de escenarios.<br /><br /><br /><br /></p>
                  <Link to="/conceptualizacion" className="btn btn__secondary btn__outlined btn__custom">
                    <span>Ver más</span>
                    <i className="icon-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="features-layout2 pt-120" style={{ backgroundColor: "#302f2f" }}>
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-5">
              <h2 className="heading__subtitle" style={{ color: "#ef7d00" }}>Prevención que salva vidas</h2>
              <h3 className="heading__title">Soluciones integrales de protección contra incendios</h3>
              <p className="heading__desc mb-30">En los últimos años, la mayor exigencia normativa y la complejidad operativa
                han hecho imprescindible contar con capacidades especializadas en protección contra incendios. Diseñar,
                instalar y mantener sistemas confiables exige ingeniería certificada, proveedores calificados y una
                inversión planificada para asegurar disponibilidad, desempeño y cumplimiento de estándares</p>
              <p className="heading__desc mb-40">Estos factores representan un reto directo para la continuidad del negocio.
                En AFC Pro Fire te acompañamos de principio a fin: diagnóstico de riesgo, ingeniería, instalación, puesta
                en marcha, mantenimiento y auditorías, de modo que tu operación esté protegida 24/7 y con evidencia de
                cumplimiento.</p>
              <a href="https://wa.link/j2cd22" target="_blank" rel="noopener noreferrer" className="btn btn__secondary">
                <i className="fab fa-whatsapp"></i>
                <span>Cotizar ya</span>
              </a>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6 offset-lg-1">
              <div className="row">

                <div className="col-sm-6">
                  <div className="feature-item">
                    <div className="feature__icon">
                      <i className="icon-hydro-power3"></i>
                    </div>
                    <h4 className="feature__title" style={{ color: "#004062", margin: "0", padding: "10px 14px" }}>Diseño e Ingeniería</h4>
                    <p className="feature__desc" style={{ color: "#1b1a1a", margin: "0", padding: "10px 14px" }}>Diseñamos sistemas a la medida con rociadores, detección, agentes, bombeo y cálculo hidráulico <br /><br /><br /><br />
                    </p>
                  </div>
                </div>

                <div className="col-sm-6">
                  <div className="feature-item">
                    <div className="feature__icon">
                      <i className="icon-biosphere"></i>
                    </div>
                    <h4 className="feature__title" style={{ color: "#004062", margin: "0", padding: "10px 14px" }}>Instalación & Puesta en Marcha</h4>
                    <p className="feature__desc" style={{ color: "#1b1a1a", margin: "0", padding: "10px 14px" }}>Instalamos y supervisamos subsistemas; realizamos pruebas funcionales e hidrostáticas y comisionamos con protocolos y actas de entrega.<br /><br />
                    </p>
                  </div>
                </div>

                <div className="col-sm-6">
                  <div className="feature-item">
                    <div className="feature__icon">
                      <i className="icon-eco-house"></i>
                    </div>
                    <h4 className="feature__title" style={{ color: "#004062", margin: "0", padding: "10px 14px" }}>Mantenimiento</h4>
                    <p className="feature__desc" style={{ color: "#1b1a1a", margin: "0", padding: "10px 14px" }}>Planes preventivos y correctivos, inspecciones y pruebas NFPA, más atención de emergencias para asegurar máxima disponibilidad.
                    </p>
                  </div>
                </div>

                <div className="col-sm-6">
                  <div className="feature-item">
                    <div className="feature__icon">
                      <i className="icon-energy2"></i>
                    </div>
                    <h4 className="feature__title" style={{ color: "#004062", margin: "0", padding: "10px 14px" }}>Gestión de Riesgos & Auditoría</h4>
                    <p className="feature__desc" style={{ color: "#1b1a1a", margin: "0", padding: "10px 14px" }}>Evaluamos instalaciones, construimos matriz de riesgo y hacemos planes y auditorías para cerrar brechas y elevar la protección.
                      clients
                    </p>
                  </div>
                </div>

                <div className="col-sm-6">
                  <div className="feature-item">
                    <div className="feature__icon">
                      <i className="icon-electric-car"></i>
                    </div>
                    <h4 className="feature__title" style={{ color: "#004062", margin: "0", padding: "10px 14px" }}>Diagnóstico de Requerimientos</h4>
                    <p className="feature__desc" style={{ color: "#1b1a1a", margin: "0", padding: "10px 14px" }}>Levantamiento en sitio y entrevistas para entender procesos, detectar brechas y definir un alcance alineado a normativa y presupuesto.
                    </p>
                  </div>
                </div>

                <div className="col-sm-6">
                  <div className="feature-item feature-item-custom">
                    <div className="feature__icon">
                      <i className="icon-wind-socket"></i>
                    </div>
                    <h4 className="feature__title">Conceptualización de <br /> Soluciones</h4>
                    <p className="feature__desc">Propuestas técnico-económicas con estudios de viabilidad<br /><br /><br /></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="contact-layout2 pb-0 bg-overlay bg-overlay-primary-gradient">
        <div className="bg-img"><img src="/assets/images/banners/2.jpg" alt="" /></div>
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
              <div className="col-inner">
                <div className="heading-layout2 heading-light mb-60">
                  <h2 className="heading__subtitle">Prevención que salva vidas</h2>
                  <h3 className="heading__title">Innovación y seguridad contra incendios que protegen lo que más importa
                  </h3>
                  <p className="heading__desc">Somos AFC Pro Fire. Creemos que la prevención y la seguridad no son
                    opcionales, sino un derecho fundamental. Diseñamos e implementamos sistemas contra incendio guiados
                    por una filosofía de innovación, integridad y compromiso inquebrantable con la seguridad humana.
                    Nuestro objetivo es construir no solo sistemas confiables, sino también un legado de seguridad y
                    confianza para tu organización.
                  </p>
                </div>
                <div className="row fancybox-light">

                  <div className="col-sm-4">
                    <div className="fancybox-item">
                      <div className="fancybox__icon">
                        <i className="icon-biosphere2"></i>
                      </div>
                      <div className="fancybox__content">
                        <h4 className="fancybox__title mb-0">Prevención responsable</h4>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-4">
                    <div className="fancybox-item">
                      <div className="fancybox__icon">
                        <i className="icon-tube"></i>
                      </div>
                      <div className="fancybox__content">
                        <h4 className="fancybox__title mb-0">Soluciones a la medida</h4>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-4">
                    <div className="fancybox-item">
                      <div className="fancybox__icon">
                        <i className="icon-electric-charge"></i>
                      </div>
                      <div className="fancybox__content">
                        <h4 className="fancybox__title mb-0">Desempeño verificable</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>


            <div className="col-xl-6">
              <div className="contact-panel">
                <form id="contactForm">
                  <div className="row">
                    <div className="col-12">
                      <h4 className="contact-panel__title" style={{ color: "#004062" }}>Asesoría</h4>
                    </div>

                    <div className="col-sm-6">
                      <div className="form-group">
                        <input type="text" className="form-control" placeholder="Nombre" name="user_name" required />
                      </div>
                    </div>

                    <div className="col-sm-6">
                      <div className="form-group">
                        <input type="email" className="form-control" placeholder="Correo" name="user_email" required />
                      </div>
                    </div>

                    <div className="col-sm-6">
                      <div className="form-group">
                        <input type="text" className="form-control" placeholder="Celular" name="user_phone" />
                      </div>
                    </div>

                    <div className="col-sm-6">
                      <div className="form-group">
                        <input type="text" className="form-control" placeholder="Dirección" name="user_address" required />
                      </div>
                    </div>

                    <div className="col-12">
                      <span className="font-weight-bold color-heading d-block mb-15 mt-10">Medio de contacto</span>
                      <div className="d-flex">
                        <label className="label-radio mr-30">Todos
                          <input type="radio" name="contact_pref" value="Todos" defaultChecked />
                          <span className="radio-indicator"></span>
                        </label>
                        <label className="label-radio mr-30">Correo
                          <input type="radio" name="contact_pref" value="Correo" />
                          <span className="radio-indicator"></span>
                        </label>
                        <label className="label-radio">Celular
                          <input type="radio" name="contact_pref" value="Celular" />
                          <span className="radio-indicator"></span>
                        </label>
                      </div>

                      <button type="submit" className="btn btn__secondary btn__block">
                        <i className="fas fa-paper-plane"></i><span>Enviar correo</span>
                      </button>
                      <div className="contact-result"></div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>


      <footer className="footer">
        <div className="footer-primary">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 footer-widget footer-widget-contact">
                <h6 className="footer-widget-title">Contacto</h6>
                <div className="footer-widget-content">
                  <p className="mb-20">Si tienes alguna duda o necesitas ayuda, no dudes en contactarnos.</p>
                  <div className="contact__number d-flex align-items-center mb-30" style={{ color: "#ef7d00" }}>
                    <i className="icon-phone" style={{ color: "#ef7d00" }}></i>
                    <a href="https://wa.link/j2cd22" target="_blank" rel="noopener noreferrer" style={{ color: "#ef7d00" }}>311
                      645 6726</a>
                  </div>
                  <p className="mb-20">Envigado - Antioquia</p>
                  <Link to="/contacto" className="btn__location">
                    <i className="icon-location"></i>
                    <span>Dirección</span>
                  </Link>
                </div>
              </div>

              <div className="col-6 col-sm-6 col-md-6 col-lg-2 col-xl-2 footer-widget footer-widget-nav">
                <h6 className="footer-widget-title">Páginas</h6>
                <div className="footer-widget-content">
                  <nav>
                    <ul className="list-unstyled">
                      <li><Link to="/quienes-somos">Quienes somos</Link></li>
                      <li><Link to="/blog">Blog</Link></li>
                      <li><Link to="/contacto">Contacto</Link></li>
                    </ul>
                  </nav>
                </div>
              </div>

              <div className="col-6 col-sm-6 col-md-6 col-lg-2 col-xl-2 footer-widget footer-widget-nav">
                <h6 className="footer-widget-title">Servicios</h6>
                <div className="footer-widget-content">
                  <nav>
                    <ul className="list-unstyled">
                      <li><Link to="/diseno-ingenieria">Diseño e Ingeniería de Sistemas Contra Incendios</Link></li>
                      <li><Link to="/instalacion">Instalación y Puesta en Marcha</Link></li>
                      <li><Link to="/mantenimiento">Mantenimiento Preventivo y Correctivo</Link></li>
                      <li><Link to="/auditoria">Gestión de Riesgos y Auditoría Integral</Link></li>
                      <li><Link to="/diagnostico">Diagnóstico y Análisis de Requerimientos</Link></li>
                    </ul>
                  </nav>
                </div>
              </div>

              <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 footer-widget footer-widget-align-right">
                <h6 className="footer-widget-title">Brochure de servicios</h6>
                <div className="footer-widget-content">
                  <a href="/assets/images/brochureAfcProfire.pdf"
                    className="btn btn__primary-style2 btn__download mb-60"
                    style={{ backgroundColor: "#ef7d00" }}
                    download="Brochure_AFC_Pro_Fire.pdf"
                    type="application/pdf">
                    <i className="icon-download"></i>
                    <span>Descargar PDF</span>
                  </a>
                  <ul className="social-icons list-unstyled">
                    <li><a href="https://www.facebook.com/profile.php?id=61580542290588" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f" style={{ backgroundColor: "#ef7d00" }}></i></a></li>
                    <li><a href="https://www.instagram.com/afc.profire/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram" style={{ backgroundColor: "#ef7d00" }}></i></a></li>
                    <li><a href="https://www.youtube.com/@AFCPROFIRE" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube" style={{ backgroundColor: "#ef7d00" }}></i></a></li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </div>

        <div className="footer-copyrights">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-12 d-flex justify-content-between">
                <p className="mb-0">
                  <span className="color-gray">&copy; 2025 AFC Pro Fire, Todos los derechos reservados.</span>
                  <a href="https://api.whatsapp.com/send?phone=573155516839" target="_blank" rel="noopener noreferrer" style={{ color: "#ef7d00" }}>Hecho por: AndresVd</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <button id="scrollTopBtn"><i className="fas fa-long-arrow-alt-up"></i></button>

    </div>
  )
}