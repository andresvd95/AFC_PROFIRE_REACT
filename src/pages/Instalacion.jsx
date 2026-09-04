import { Link } from 'react-router-dom'

export default function Instalacion() {
  return (
    <div className="wrapper">

      <div className="preloader">
        <div className="loading"><span></span><span></span><span></span><span></span></div>
      </div>


      <header className="header header-layout1">
        <nav className="navbar navbar-expand-lg sticky-navbar">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              <img src="/assets/images/logo/logo.png" className="logo" alt="logo" />
            </a>
            <button className="navbar-toggler" type="button">
              <span className="menu-lines"><span></span></span>
            </button>
            <div className="collapse navbar-collapse" id="mainNavigation">
              <ul className="navbar-nav">
                <li className="nav__item has-dropdown"><a href="/" className="nav__item-link active">Inicio</a></li>
                <li className="nav__item has-dropdown">
                  <a href="/servicios" className="nav__item-link">Servicios</a>
                  <button className="dropdown-toggle" data-toggle="dropdown"></button>
                  <ul className="dropdown-menu">
                    <li className="nav__item"><a href="/diseno-ingenieria" className="nav__item-link">Diseño e Ingeniería</a>
                    </li>
                    <li className="nav__item"><a href="/instalacion" className="nav__item-link">Instalación y Puesta en
                      Marcha</a></li>
                    <li className="nav__item"><a href="/mantenimiento" className="nav__item-link">Mantenimiento Preventivo y
                      Correctivo</a></li>
                    <li className="nav__item"><a href="/auditoria" className="nav__item-link">Gestión de Riesgos y Auditoría
                      Integral</a></li>
                    <li className="nav__item"><a href="/diagnostico" className="nav__item-link">Diagnóstico y Análisis de
                      Requerimientos</a></li>
                    <li className="nav__item"><a href="/transferencia-conocimiento" className="nav__item-link">Capacitación y
                      Transferencia del Conocimiento
                    </a></li>
                  </ul>
                </li>
                <li className="nav__item"><a href="/proyectos" className="nav__item-link">Proyectos</a></li>
                <li className="nav__item"><a href="/quienes-somos" className="nav__item-link">Quienes somos</a></li>
                <li className="nav__item has-dropdown">
                  <a href="/blog" className="nav__item-link">Blog</a>
                </li>
                <li className="nav__item"><a href="/contacto" className="nav__item-link">Contacto</a></li>
              </ul>
              <button className="close-mobile-menu d-block d-lg-none"><i className="fas fa-times"></i></button>
            </div>
            <div className="contact__number d-none d-xl-flex align-items-center">
              <i className="icon-phone"></i>
              <a href="tel:+573116456726">311 645 6726</a>
            </div>
            <ul className="navbar-actions d-none d-xl-flex align-items-center list-unstyled mb-0">
              <li>
                <a href="https://wa.link/j2cd22" className="btn btn__primary">
                  <span>Asesoría</span>
                  <i className="icon-arrow-right"></i>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>


      <section className="page-title page-title-layout2 bg-overlay bg-overlay-2 bg-parallax">
        <div className="bg-img"><img src="/assets/images/page-titles/incendio.jpg" alt="Instalación y Puesta en Marcha" /></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1 className="pagetitle__heading mb-0">Instalación &amp; Puesta en Marcha</h1>
              <p className="pagetitle__desc">
                Supervisamos y ejecutamos proyectos de instalación de sistemas contra incendios, realizando las pruebas
                y la puesta en servicio de todos los subsistemas para entregar una operación confiable desde el día uno.
              </p>
              <div className="d-flex align-items-center mt-30">
                <a href="https://wa.link/j2cd22" className="btn btn__primary mr-30"><i className="icon-arrow-right"></i><span>Solicitar asesoría</span></a>
                <a href="/quienes-somos" className="btn btn__white">Más sobre AFC</a>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="text-content-section pb-90">
        <div className="container">
          <div className="row">

            <div className="col-lg-12">

              <div className="text__block mb-30">
                <h5 className="text__block-title">Visión General</h5>
                <p className="text__block-desc">
                  En <strong>AFC Pro Fire</strong> ejecutamos la instalación de sistemas contra incendios con
                  supervisión experta, control de calidad y cumplimiento normativo. Cerramos el ciclo con pruebas integrales
                  y comisionamiento para asegurar que cada componente funcione como fue diseñado.
                </p>
              </div>


              <div className="row mb-40">
                <div className="col-sm-12">
                  <div className="gallery-item"><img src="/assets/images/services/instalacion.png" alt="galería" /></div>
                </div>
              </div>


              <div className="text__block mb-30">
                <h5 className="text__block-title">Supervisión y Ejecución de Proyectos de Instalación</h5>
                <p className="text__block-desc">
                  Acompañamiento técnico integral durante la ejecución del proyecto, garantizando que la instalación se realice conforme a planos, especificaciones y normativas aplicables.
                </p>
              </div>

              <div className="text__block mb-0">
                <h5 className="text__block-title">Pruebas y Puesta en Servicio de Todos los Sistemas</h5>
                <p className="text__block-desc">
                  Realización de pruebas funcionales, operativas y de desempeño para asegurar que todos los sistemas contra incendio funcionen correctamente antes de su entrega final.
                </p>
              </div>


              <div className="row features-layout3 mt-40">
                <div className="col-sm-4">
                  <div className="feature-item">
                    <div className="feature__icon"><i className="icon-shield-check"></i></div>
                    <h4 className="feature__title">Cumplimiento</h4>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="feature-item">
                    <div className="feature__icon"><i className="icon-clock2"></i></div>
                    <h4 className="feature__title">Arranque Seguro</h4>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="feature-item">
                    <div className="feature__icon"><i className="icon-file"></i></div>
                    <h4 className="feature__title">Entrega Formal</h4>
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
            <div className="col-xl-6">
              <div className="col-inner">
                <div className="heading-layout2 heading-light mb-60">
                  <h2 className="heading__subtitle">Prevención que salva vidas</h2>
                  <h3 className="heading__title">Protegemos personas, activos y continuidad operativa.</h3>
                  <p className="heading__desc">Agenda una asesoría con nuestro equipo y recibe un plan a la medida de tu riesgo.</p>
                </div>
                <div className="row fancybox-light">
                  <div className="col-sm-4"><div className="fancybox-item"><div className="fancybox__icon"><i className="icon-biosphere2"></i></div><h4 className="fancybox__title mb-0">Cumplimiento NFPA</h4></div></div>
                  <div className="col-sm-4"><div className="fancybox-item"><div className="fancybox__icon"><i className="icon-tube"></i></div><h4 className="fancybox__title mb-0">Soluciones a la medida</h4></div></div>
                  <div className="col-sm-4"><div className="fancybox-item"><div className="fancybox__icon"><i className="icon-electric-charge"></i></div><h4 className="fancybox__title mb-0">Excelente desempeño</h4></div></div>
                </div>
              </div>
            </div>


            <div className="col-xl-6">
              <div className="contact-panel">
                <form id="contactForm">
                  <div className="row">
                    <div className="col-12">
                      <h4 className="contact-panel__title" style={{ "color": "#004062" }}>Asesoría</h4>
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
                          <input type="radio" name="contact_pref" value="Todos" checked />
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
                  <div className="contact__number d-flex align-items-center mb-30" style={{ "color": "#ef7d00" }}>
                    <i className="icon-phone" style={{ "color": "#ef7d00" }}></i>
                    <a href="https://wa.link/j2cd22" target="_blank" rel="noopener noreferrer" style={{ "color": "#ef7d00" }}>311
                      645 6726</a>
                  </div>
                  <p className="mb-20">Envigado - Antioquia</p>
                  <a href="/contacto" className="btn__location">
                    <i className="icon-location"></i>
                    <span>Dirección</span>
                  </a>
                </div>
              </div>

              <div className="col-6 col-sm-6 col-md-6 col-lg-2 col-xl-2 footer-widget footer-widget-nav">
                <h6 className="footer-widget-title">Páginas</h6>
                <div className="footer-widget-content">
                  <nav>
                    <ul className="list-unstyled">
                      <li><a href="/quienes-somos">Quienes somos</a></li>
                      <li><a href="/blog">Blog</a></li>
                      <li><a href="/contacto">Contacto</a></li>
                    </ul>
                  </nav>
                </div>
              </div>

              <div className="col-6 col-sm-6 col-md-6 col-lg-2 col-xl-2 footer-widget footer-widget-nav">
                <h6 className="footer-widget-title">Servicios</h6>
                <div className="footer-widget-content">
                  <nav>
                    <ul className="list-unstyled">
                      <li><a href="/diseno-ingenieria">Diseño e Ingeniería de Sistemas Contra Incendios</a></li>
                      <li><a href="/instalacion">Instalación y Puesta en Marcha</a></li>
                      <li><a href="/mantenimiento">Mantenimiento Preventivo y Correctivo</a></li>
                      <li><a href="/auditoria">Gestión de Riesgos y Auditoría Integral</a></li>
                      <li><a href="/diagnostico">Diagnóstico y Análisis de Requerimientos</a></li>
                    </ul>
                  </nav>
                </div>
              </div>

              <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 footer-widget footer-widget-align-right">
                <h6 className="footer-widget-title">Brochcure de servicios</h6>
                <div className="footer-widget-content">
                  <a href="/assets/images/brochureAfcProfire.pdf"
                    className="btn btn__primary-style2 btn__download mb-60"
                    style={{ "backgroundColor": "#ef7d00" }}
                    download="Brochure_AFC_Pro_Fire.pdf"
                    type="application/pdf">
                    <i className="icon-download"></i>
                    <span>Descargar PDF</span>
                  </a>
                  <ul className="social-icons list-unstyled">
                    <li><a href="https://www.facebook.com/profile.php?id=61580542290588" target="_blank"><i className="fab fa-facebook-f" style={{ "backgroundColor": "#ef7d00" }}></i></a></li>
                    <li><a href="https://www.instagram.com/afc.profire/" target="_blank"><i className="fab fa-instagram" style={{ "backgroundColor": "#ef7d00" }}></i></a></li>
                    <li><a href="https://www.youtube.com/@AFCPROFIRE" target="_blank"><i className="fab fa-youtube" style={{ "backgroundColor": "#ef7d00" }}></i></a></li>
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
                  <a href="https://api.whatsapp.com/send?phone=573155516839" style={{ "color": "#ef7d00" }}>Hecho por: AndresVd</a>
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
