import { Link } from 'react-router-dom'

export default function Home() {
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


      <section className="hero-video">
        <video id="heroVideo" muted playsinline webkit-playsinline x5-playsinline autoplay loop preload="auto"
          poster="assets/images/banners/afc-poster.jpg">
          <source src="/assets/images/banners/afc-profire.mp4#t=0.001" type="video/mp4" />
        </video>
        <div className="hero-overlay"></div>

        <div className="container">
          <div className="row">
            <div className="col-xl-8">
              <div className="slide__body">
                <span className="slide__subtitle" style={{ "color": "#FFFFFF" }}>Sistemas contra incendios</span>
                <h2 className="slide__title">AFC PRO FIRE</h2>
                <p className="slide__desc">“Sembrando seguridad, cosechando el futuro”.</p>
                <div className="d-flex">
                  <a href="/servicios" className="btn btn__primary mr-30">
                    <i className="icon-arrow-right"></i><span>Ver servicios</span>
                  </a>
                  <a href="https://wa.link/j2cd22" className="btn btn__white">Asesoría</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="contact-layout2 pb-80 bg-overlay bg-overlay-primary-gradient">
        <div className="bg-img"><img src="/assets/images/banners/2.jpg" alt="" /></div>
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
              <div className="col-inner">
                <div className="heading-layout2 heading-light mb-60">
                  <p className="heading__desc font-weight-bold color-gray mb-0">
                    Porque vamos más allá de entregar sistemas de protección contra incendio, nuestro propósito superior
                    es contribuir a la construcción de un futuro más seguro, protegiendo lo invaluable con ingenio,
                    compromiso y soluciones que exceden expectativas.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
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


      <section className="services-layout2 pt-120">
        <div className="bg-img"><img src="/assets/images/backgrounds/5.jpg" alt="background" /></div>
        <div className="container">
          <div className="row mb-40">
            <div className="col-12">
              <h3 className="heading__title" style={{ "color": "#ef7d00" }}>Conozca nuestros servicios de sistemas de protección contra
                incendios</h3>
            </div>
            <div className="col-lg-12 mx-auto">
              <p className="heading__desc font-weight-bold color-gray mb-0">
                En AFC Pro Fire diseñamos, instalamos y mantenemos sistemas contra incendios a la medida de tu riesgo y
                operación. Te acompañamos desde el diagnóstico hasta la puesta en marcha, auditoría y mejora continua para
                proteger vidas, activos y la continuidad de tu negocio.
              </p>
            </div>
          </div>

          <div className="row mb-30">
            <div className="col-12">
              <div className="slick-carousel carousel-arrows-light"
                data-slick='{"slidesToShow":4,"slidesToScroll":4,"arrows":true,"dots":true,"responsive":[{"breakpoint":992,"settings":{"slidesToShow":2,"slidesToScroll":2}},{"breakpoint":767,"settings":{"slidesToShow":1,"slidesToScroll":1}}]}'>
                <div className="service-item">
                  <div className="service__img">
                    <img src="/assets/images/services/diseño.png" alt="Diseño e ingeniería de sistemas contra incendio"
                      loading="lazy" />
                  </div>
                  <div className="service__body">
                    <h4 className="service__title" style={{ "color": "#004062" }}>Diseño e ingeniería de sistemas contra incendio</h4>
                    <p className="service__desc" style={{ "color": "#1b1a1a" }}>Rociadores, detección y alarma, agentes limpios, CO₂,
                      espuma, bombeo y cálculo hidráulico NFPA.</p>
                    <a href="/diseno-ingenieria" className="btn btn__secondary btn__outlined btn__custom">
                      <span>Ver más</span><i className="icon-arrow-right"></i>
                    </a>
                  </div>
                </div>

                <div className="service-item">
                  <div className="service__img">
                    <img src="/assets/images/services/instalacion.png" alt="Instalación y puesta en marcha" loading="lazy" />
                  </div>
                  <div className="service__body">
                    <h4 className="service__title" style={{ "color": "#004062" }}>Instalación y puesta en marcha</h4>
                    <p className="service__desc" style={{ "color": "#1b1a1a" }}>Montaje, supervisión certificada, pruebas funcionales e
                      hidrostáticas y actas de entrega.</p><br /><br />
                    <a href="/instalacion" className="btn btn__secondary btn__outlined btn__custom">
                      <span>Ver más</span><i className="icon-arrow-right"></i>
                    </a>
                  </div>
                </div>

                <div className="service-item">
                  <div className="service__img">
                    <img src="/assets/images/services/mantenimiento.png" alt="Mantenimiento preventivo y correctivo"
                      loading="lazy" />
                  </div>
                  <div className="service__body">
                    <h4 className="service__title" style={{ "color": "#004062" }}>Mantenimiento preventivo y correctivo</h4>
                    <p className="service__desc" style={{ "color": "#1b1a1a" }}>Planes NFPA 25, NFPA 72, inspecciones, pruebas, y
                      reparaciones.</p><br />
                    <a href="/mantenimiento" className="btn btn__secondary btn__outlined btn__custom">
                      <span>Ver más</span><i className="icon-arrow-right"></i>
                    </a>
                  </div>
                </div>

                <div className="service-item">
                  <div className="service__img">
                    <img src="/assets/images/services/gestion.png" alt="Gestión de riesgos y auditoría integral"
                      loading="lazy" />
                  </div>
                  <div className="service__body">
                    <h4 className="service__title" style={{ "color": "#004062" }}>Gestión de riesgos y auditoría integral</h4>
                    <p className="service__desc" style={{ "color": "#1b1a1a" }}>Evaluación de riesgos, planes de emergencia y
                      contingencia, auditoría e interventoría.</p><br /><br />
                    <a href="/auditoria" className="btn btn__secondary btn__outlined btn__custom">
                      <span>Ver más</span><i className="icon-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row mb-20">
            <div className="col-12">
              <h5 className="mb-20" style={{ "color": "#ef7d00" }}>Líneas complementarias</h5>
            </div>
            <div className="col-12">
              <div className="slick-carousel carousel-arrows-light"
                data-slick='{"slidesToShow":3,"slidesToScroll":3,"arrows":true,"dots":true,"responsive":[{"breakpoint":992,"settings":{"slidesToShow":2,"slidesToScroll":2}},{"breakpoint":767,"settings":{"slidesToShow":1,"slidesToScroll":1}}]}'>
                <div className="service-item">
                  <div className="service__img">
                    <img src="/assets/images/services/diagnostico.png" alt="Diagnóstico y análisis de requerimientos"
                      loading="lazy" />
                  </div>
                  <div className="service__body">
                    <h4 className="service__title" style={{ "color": "#004062" }}>Diagnóstico y análisis de requerimientos</h4>
                    <p className="service__desc" style={{ "color": "#1b1a1a" }}>Entrevistas, levantamiento en sitio, análisis de
                      brechas y definición de alcance.</p>
                    <a href="/diagnostico" className="btn btn__secondary btn__outlined btn__custom">
                      <span>Ver más</span><i className="icon-arrow-right"></i>
                    </a>
                  </div>
                </div>


                <div className="service-item">
                  <div className="service__img">
                    <img src="/assets/images/services/capacitacion.png" alt="Capacitación y transferencia del conocimiento"
                      loading="lazy" />
                  </div>
                  <div className="service__body">
                    <h4 className="service__title" style={{ "color": "#004062" }}>Capacitación y transferencia del conocimiento</h4>
                    <p className="service__desc" style={{ "color": "#1b1a1a" }}>Programas de formación operativa, mantenimiento y
                      respuesta a emergencias.</p>
                    <a href="/transferencia-conocimiento" className="btn btn__secondary btn__outlined btn__custom">
                      <span>Ver más</span><i className="icon-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-30">
            <div className="col-12">
              <a href="https://wa.link/j2cd22" className="btn btn__secondary">
                <i className="icon-arrow-right"></i><span>Asesoría</span>
              </a>
            </div>
          </div>

        </div>
      </section>


      <section id="about" className="about-layout1">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-7 offset-lg-1">
              <div className="heading__layout2 mb-60">
                <h3 className="heading__title">AFC PRO FIRE</h3>
              </div>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-sm-12 col-md-12 col-lg-6">
              <div className="video-banner-layout2">
                <img src="/assets/images/gallery/portada-video.png" alt="about" className="w-100" />
                <div className="video-has-img">
                  <img src="/assets/images/video/1.jpg" alt="video" />


                  <a className="video__btn video__btn-white popup-video"
                    href="/assets/images/gallery/video-afc.mp4"
                    rel="noopener">
                    <div className="video__player"><i className="fa fa-play"></i></div>
                  </a>

                  <span className="video__btn-title">Ver el video</span>
                </div>
              </div>

            </div>
            <div className="col-sm-12 col-md-12 col-lg-5">
              <div className="about__text">
                <div className="text__icon"><i className="icon-green-energy3"></i></div>
                <p className="heading__desc font-weight-medium mb-30">
                  Somos AFC Pro Fire, para nosotros la prevención y la seguridad no deben ser consideradas como una
                  opción, sino como un derecho fundamental para todos, desarrollamos nuestros proyectos impulsados por una
                  filosofía que integra innovación, integridad y un compromiso inquebrantable con la seguridad humana.
                </p>
                <p className="heading__desc mb-20">
                  Esta filosofía nos guía en cada decisión y acción, asegurando que AFC PROFESSIONAL FIRE, no solo
                  construya sistemas contra incendio, sino que también construya un legado de seguridad y confianza.
                </p>
                <div className="d-flex align-items-center mt-30">
                  <a href="/servicios" className="btn btn__secondary mr-30">
                    <i className="icon-arrow-right"></i> <span>Asesoría</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="features-layout2 pt-120">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-5">
              <h2 className="heading__subtitle" style={{ "color": "#ef7d00" }}>Nuestros clientes lo confirman</h2>
              <h3 className="heading__title">Hemos ejecutado diversos proyectos</h3>
              <p className="heading__desc mb-30">
                Hemos ejecutado diversos proyectos en la industria, logística y edificios comerciales, integrando
                rociadores,
                detección, bombeo, espuma y agentes limpios. Cada obra se entrega con pruebas y puesta en marcha,
                documentación y capacitación.
              </p>
              <a href="https://wa.link/j2cd22" className="btn btn__secondary">
                <i className="fab fa-whatsapp"></i>
                <span>Cotizar ya</span>
              </a>
            </div>

            <div className="col-sm-12 col-md-12 col-lg-6 offset-lg-1">
              <div className="row">

                <div className="col-sm-6">
                  <figure className="feature-card">
                    <img src="/assets/images/gallery/instalacion-1.png"
                      alt="Proyecto: diseño e ingeniería de sistemas contra incendio" />
                  </figure>
                </div>


                <div className="col-sm-6">
                  <figure className="feature-card">
                    <img src="/assets/images/gallery/instalacion-2.png"
                      alt="Proyecto: instalación y puesta en marcha de sistemas contra incendio" />
                  </figure>
                </div>


                <div className="col-sm-6">
                  <figure className="feature-card">
                    <img src="/assets/images/gallery/instalacion-3.png"
                      alt="Proyecto: diagnóstico y análisis de requerimientos" />
                  </figure>
                </div>

                <div className="col-sm-6">
                  <figure className="feature-card">
                    <img src="/assets/images/gallery/sistema-3.png"
                      alt="Proyecto: diagnóstico y análisis de requerimientos" />
                  </figure>
                </div>

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
                  <a href="/assets/images/brochureAfcProfire.pdf" className="btn btn__primary-style2 btn__download mb-60"
                    style={{ "backgroundColor": "#ef7d00" }} download="Brochure_AFC_Pro_Fire.pdf" type="application/pdf">
                    <i className="icon-download"></i>
                    <span>Descargar PDF</span>
                  </a>
                  <ul className="social-icons list-unstyled">
                    <li><a href="https://www.facebook.com/profile.php?id=61580542290588" target="_blank"><i
                      className="fab fa-facebook-f" style={{ "backgroundColor": "#ef7d00" }}></i></a></li>
                    <li><a href="https://www.instagram.com/afc.profire/" target="_blank"><i className="fab fa-instagram"
                      style={{ "backgroundColor": "#ef7d00" }}></i></a></li>
                    <li><a href="https://www.youtube.com/@AFCPROFIRE" target="_blank"><i className="fab fa-youtube"
                      style={{ "backgroundColor": "#ef7d00" }}></i></a></li>
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
                  <a href="https://api.whatsapp.com/send?phone=573155516839" style={{ "color": "#ef7d00" }}>Hecho por:
                    AndresVd</a>
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
