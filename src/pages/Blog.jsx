import { Link } from 'react-router-dom'

export default function Blog() {
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

    
    <section className="page-title page-title-layout1 bg-overlay bg-overlay-2 bg-parallax">
      <div className="bg-img"><img src="/assets/images/page-titles/11.jpg" alt="background" /></div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb justify-content-center mb-0">
                <li className="breadcrumb-item"><a href="#">Inicio</a></li>
                <li className="breadcrumb-item active" aria-current="page">Blog</li>
              </ol>
            </nav>
            <h1 className="pagetitle__heading mb-0">Blog de Protección Contra Incendios: Tu Guía Esencial</h1>
            <a href="#careers" className="scroll-down">
              <i className="icon-arrow-down"></i>
            </a>
          </div>
        </div>
      </div>
    </section>

    
    <section className="post-grid">
      <div className="container">
        <div className="row">
          
          <div className="col-sm-12 col-md-6 col-lg-4">
            <div className="post-item">
              <div className="post__img">
                <a href="blog9.html"><img src="/assets/images/blog/grid/blog10.png" alt="post image" /></a>
                <span className="post__date">Feb 1, 2026</span>
              </div>
              <div className="post__body">
                <div className="post__meta d-flex align-items-center">
                  <div className="post__cat"><a href="#">Prevención</a><a href="#">Incendios</a></div>
                  <a className="post__author" href="#">AFC Pro Fire</a>
                </div>
                <h4 className="post__title"><a href="#">Guía Fundamental: ¿Quién es quién en los Códigos y Normas de Alarmas
                    de Incendio?</a></h4>
                <p className="post__desc">Diseñar o instalar un sistema de alarma no es solo un engranaje...</p>
                <a href="blog11.html" className="btn btn__custom"><i className="icon-arrow-right"></i><span>Ver blog</span></a>
              </div>
            </div>
          </div>
          
          <div className="col-sm-12 col-md-6 col-lg-4">
            <div className="post-item">
              <div className="post__img">
                <a href="blog9.html"><img src="/assets/images/blog/grid/barIncendio.png" alt="post image" /></a>
                <span className="post__date">Ene 17, 2026</span>
              </div>
              <div className="post__body">
                <div className="post__meta d-flex align-items-center">
                  <div className="post__cat"><a href="#">Prevención</a><a href="#">Incendios</a></div>
                  <a className="post__author" href="#">AFC Pro Fire</a>
                </div>
                <h4 className="post__title"><a href="#">Tragedia en los Alpes: Lecciones de Seguridad</a></h4>
                <p className="post__desc">El pasado 1 de enero de 2026, lo que debía ser una celebración de Año Nuevo en el
                  bar Le Constellation (Suiza)...</p>
                <a href="blog10.html" className="btn btn__custom"><i className="icon-arrow-right"></i><span>Ver blog</span></a>
              </div>
            </div>
          </div>
          
          <div className="col-sm-12 col-md-6 col-lg-4">
            <div className="post-item">
              <div className="post__img">
                <a href="blog9.html"><img src="/assets/images/blog/grid/proteccionEdificios.png" alt="post image" /></a>
                <span className="post__date">Ene 08, 2026</span>
              </div>
              <div className="post__body">
                <div className="post__meta d-flex align-items-center">
                  <div className="post__cat"><a href="#">Prevención</a><a href="#">Incendios</a></div>
                  <a className="post__author" href="#">AFC Pro Fire</a>
                </div>
                <h4 className="post__title"><a href="#">¿Tu edificio está protegido realmente? La importancia del
                    mantenimiento de redes contra incendios</a></h4>
                <p className="post__desc">Tener hidrantes y rociadores no basta: sin mantenimiento hay falsa seguridad,
                  riesgo legal...</p>
                <a href="blog9.html" className="btn btn__custom"><i className="icon-arrow-right"></i><span>Ver blog</span></a>
              </div>
            </div>
          </div>
          
          <div className="col-sm-12 col-md-6 col-lg-4">
            <div className="post-item">
              <div className="post__img">
                <a href="blog7.html"><img src="/assets/images/blog/grid/quemaduras.png" alt="post image" /></a>
                <span className="post__date">Oct 29, 2025</span>
              </div>
              <div className="post__body">
                <div className="post__meta d-flex align-items-center">
                  <div className="post__cat"><a href="#">Prevención</a><a href="#">Incendios</a></div>
                  <a className="post__author" href="#">AFC Pro Fire</a>
                </div>
                <h4 className="post__title"><a href="#">Primeros Auxilios en Quemaduras: Guía de Actuación</a></h4>
                <p className="post__desc">REACCIONAR CORRECTAMENTE HACE LA DIFERENCIA
                  En una emergencia por quemaduras, los minutos iniciales son decisivos....</p>
                <a href="blog8.html" className="btn btn__custom"><i className="icon-arrow-right"></i><span>Ver blog</span></a>
              </div>
            </div>
          </div>
          
          <div className="col-sm-12 col-md-6 col-lg-4">
            <div className="post-item">
              <div className="post__img">
                <a href="blog7.html"><img src="/assets/images/blog/grid/preguntas.png" alt="post image" /></a>
                <span className="post__date">Sep 20, 2025</span>
              </div>
              <div className="post__body">
                <div className="post__meta d-flex align-items-center">
                  <div className="post__cat"><a href="#">Prevención</a><a href="#">Incendios</a></div>
                  <a className="post__author" href="#">AFC Pro Fire</a>
                </div>
                <h4 className="post__title"><a href="#">Preguntas Frecuentes (FAQ)</a></h4>
                <p className="post__desc">Respuestas claras a las dudas más comunes sobre detectores, extintores y
                  evacuación...</p>
                <a href="blog7.html" className="btn btn__custom"><i className="icon-arrow-right"></i><span>Ver blog</span></a>
              </div>
            </div>
          </div>
          
          <div className="col-sm-12 col-md-6 col-lg-4">
            <div className="post-item">
              <div className="post__img">
                <a href="blog6.html"><img src="/assets/images/blog/grid/incendios.png" alt="post image" /></a>
                <span className="post__date">Sep 9, 2025</span>
              </div>
              <div className="post__body">
                <div className="post__meta d-flex align-items-center">
                  <div className="post__cat"><a href="#">Prevención</a><a href="#">Incendios</a></div>
                  <a className="post__author" href="#">AFC Pro Fire</a>
                </div>
                <h4 className="post__title"><a href="#">Desmintiendo Mitos Comunes</a></h4>
                <p className="post__desc">El fuego pequeño no siempre se extingue solo. Descubre los mitos que pueden costar
                  vidas...</p>
                <a href="blog6.html" className="btn btn__custom"><i className="icon-arrow-right"></i><span>Ver blog</span></a>
              </div>
            </div>
          </div>
          
          <div className="col-sm-12 col-md-6 col-lg-4">
            <div className="post-item">
              <div className="post__img">
                <a href="blog5.html"><img src="/assets/images/blog/grid/seguridad.png" alt="post image" /></a>
                <span className="post__date">Sep 2, 2025</span>
              </div>
              <div className="post__body">
                <div className="post__meta d-flex align-items-center">
                  <div className="post__cat"><a href="#">Prevención</a><a href="#">Incendios</a></div>
                  <a className="post__author" href="#">AFC Pro Fire</a>
                </div>
                <h4 className="post__title"><a href="#">¿Qué Puedes Hacer Tú?</a></h4>
                <p className="post__desc">Consejos prácticos en casa y oficina: detectores, extintores, planes de
                  evacuación...</p>
                <a href="blog5.html" className="btn btn__custom"><i className="icon-arrow-right"></i><span>Ver blog</span></a>
              </div>
            </div>
          </div>
          
          <div className="col-sm-12 col-md-6 col-lg-4">
            <div className="post-item">
              <div className="post__img">
                <a href="/blog/4"><img src="/assets/images/blog/grid/integracion.png" alt="post image" /></a>
                <span className="post__date">Ago 30, 2025</span>
              </div>
              <div className="post__body">
                <div className="post__meta d-flex align-items-center">
                  <div className="post__cat"><a href="#">Prevención</a><a href="#">Incendios</a></div>
                  <a className="post__author" href="#">AFC Pro Fire</a>
                </div>
                <h4 className="post__title"><a href="#">La Sinergia de la Seguridad</a></h4>
                <p className="post__desc">Así trabajan juntos detectores, alarmas, rociadores y evacuación para salvar
                  vidas...</p>
                <a href="/blog/4" className="btn btn__custom"><i className="icon-arrow-right"></i><span>Ver blog</span></a>
              </div>
            </div>
          </div>
          
          <div className="col-sm-12 col-md-6 col-lg-4">
            <div className="post-item">
              <div className="post__img">
                <a href="/blog/3"><img src="/assets/images/blog/grid/prevencion.png" alt="post image" /></a>
                <span className="post__date">Ago 28, 2025</span>
              </div>
              <div className="post__body">
                <div className="post__meta d-flex align-items-center">
                  <div className="post__cat"><a href="#">Prevención</a><a href="#">Incendios</a></div>
                  <a className="post__author" href="#">AFC Pro Fire</a>
                </div>
                <h4 className="post__title"><a href="#">Tipos de Protección</a></h4>
                <p className="post__desc">Protección activa: detectores, alarmas, rociadores. Protección pasiva: barreras,
                  sellos...</p>
                <a href="/blog/3" className="btn btn__custom"><i className="icon-arrow-right"></i><span>Ver blog</span></a>
              </div>
            </div>
          </div>
          
          <div className="col-sm-12 col-md-6 col-lg-4">
            <div className="post-item">
              <div className="post__img">
                <a href="/blog/2"><img src="/assets/images/blog/grid/trianguloDeFuego.png" alt="post image" /></a>
                <span className="post__date">Ago 25, 2025</span>
              </div>
              <div className="post__body">
                <div className="post__meta d-flex align-items-center">
                  <div className="post__cat"><a href="#">Prevención</a><a href="#">Incendios</a></div>
                  <a className="post__author" href="#">AFC Pro Fire</a>
                </div>
                <h4 className="post__title"><a href="#">Lo Básico del Fuego</a></h4>
                <p className="post__desc">El triángulo del fuego: combustible, oxígeno y calor. Romperlo es clave para
                  apagarlo...</p>
                <a href="/blog/2" className="btn btn__custom"><i className="icon-arrow-right"></i><span>Ver blog</span></a>
              </div>
            </div>
          </div>
          
          <div className="col-sm-12 col-md-6 col-lg-4">
            <div className="post-item">
              <div className="post__img">
                <a href="/blog/1"><img src="/assets/images/blog/grid/incendioCasa.png" alt="post image" /></a>
                <span className="post__date">Ago 20, 2025</span>
              </div>
              <div className="post__body">
                <div className="post__meta d-flex align-items-center">
                  <div className="post__cat"><a href="#">Prevención</a><a href="#">Incendios</a></div>
                  <a className="post__author" href="#">AFC Pro Fire</a>
                </div>
                <h4 className="post__title"><a href="#">¿Por qué es Vital?</a></h4>
                <p className="post__desc">Proteger vidas y bienes depende de sistemas instalados y mantenidos
                  correctamente...</p>
                <a href="/blog/1" className="btn btn__custom"><i className="icon-arrow-right"></i><span>Ver blog</span></a>
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
                <div className="contact__number d-flex align-items-center mb-30" style={{"color": "#ef7d00"}}>
                  <i className="icon-phone" style={{"color": "#ef7d00"}}></i>
                  <a href="https://wa.link/j2cd22" target="_blank" rel="noopener noreferrer" style={{"color": "#ef7d00"}}>311
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
                  style={{"backgroundColor": "#ef7d00"}} download="Brochure_AFC_Pro_Fire.pdf" type="application/pdf">
                  <i className="icon-download"></i>
                  <span>Descargar PDF</span>
                </a>
                <ul className="social-icons list-unstyled">
                  <li><a href="https://www.facebook.com/profile.php?id=61580542290588" target="_blank"><i
                        className="fab fa-facebook-f" style={{"backgroundColor": "#ef7d00"}}></i></a></li>
                  <li><a href="https://www.instagram.com/afc.profire/" target="_blank"><i className="fab fa-instagram"
                        style={{"backgroundColor": "#ef7d00"}}></i></a></li>
                  <li><a href="https://www.youtube.com/@AFCPROFIRE" target="_blank"><i className="fab fa-youtube"
                        style={{"backgroundColor": "#ef7d00"}}></i></a></li>
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
                <a href="https://api.whatsapp.com/send?phone=573155516839" style={{"color": "#ef7d00"}}>Hecho por:
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
