import { Link } from 'react-router-dom'

export default function BlogPost4() {
  return (
<div className="wrapper only-info">
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
    
    
    <section className="blog blog-single pt-10 pb-40">
      <div className="container">
        <div className="row">
          <article className="col-12" itemscope itemtype="https://schema.org/Article">
            <div className="post-item mb-0">
              <div className="post__img">
                <img src="/assets/images/blog/grid/integracion.png"
                     alt="Integración de sistemas contra incendios trabajando en conjunto"
                     loading="lazy" width="1280" height="720" />
              </div>
              <div className="post__body">
                <div className="post__meta d-flex align-items-center">
                  <div className="post__cat"><span>Prevención</span> • <span>Integración</span></div>
                  <time className="post__date ml-10" datetime="2025-08-26">Ago 26, 2025</time>
                </div>

                <h1 className="post__title" itemprop="headline">La sinergia de la seguridad: cómo los sistemas trabajan juntos</h1>

                <div className="post__desc" itemprop="articleBody">
                  <p>Imagina una <strong>orquesta</strong> donde cada instrumento tiene su función, pero todos tocan en armonía. Así trabajan <strong>detección</strong>, <strong>alerta</strong>, <strong>supresión/contención</strong> y <strong>evacuación</strong> en un sistema de protección contra incendios bien diseñado.</p>

                  <div className="steps" aria-label="Flujo coordinado de respuesta ante incendios">
                    <div className="step">
                      <h3>1) Detección</h3>
                      <p>Un <strong>detector</strong> percibe humo o calor. Esta señal inicia el resto de acciones de forma automática o supervisada.</p>
                    </div>
                    <div className="step">
                      <h3>2) Alerta</h3>
                      <p>La <strong>alarma</strong> se activa para avisar a todas las personas presentes: bocinas, estrobos o mensajes de voz indican evacuar.</p>
                    </div>
                    <div className="step">
                      <h3>3) Supresión / Contención</h3>
                      <p>Si el fuego crece, se activan <strong>rociadores</strong> o se emplean <strong>extintores</strong> cuando es seguro. En paralelo, la <strong>protección pasiva</strong> (puertas y sellos cortafuego, materiales RF) <em>sectoriza</em> el incendio y limita el humo.</p>
                    </div>
                    <div className="step">
                      <h3>4) Evacuación</h3>
                      <p>Las personas siguen <strong>rutas de evacuación</strong> señalizadas hacia puntos seguros, apoyadas por iluminación y señalética visibles.</p>
                    </div>
                  </div>

                  <h2>Mantenimiento: el director de la orquesta</h2>
                  <p>Para que esta “orquesta” funcione cuando más la necesitas, el <strong>mantenimiento regular</strong> es crucial. Un sistema inoperante equivale a no tener protección.</p>
                  <ul>
                    <li><strong>Pruebas periódicas</strong> de detectores, alarmas, paneles y comunicación con monitoreo.</li>
                    <li><strong>Inspecciones</strong> de bombas, válvulas, presiones y pruebas de flujo en rociadores.</li>
                    <li><strong>Verificación</strong> de puertas/sellos cortafuego y reposición de integridad tras obras.</li>
                    <li><strong>Señalización</strong> e iluminación de emergencia funcionales y visibles.</li>
                    <li><strong>Capacitación</strong> y simulacros para que todos sepan cómo actuar.</li>
                  </ul>

                  <p className="note">La <strong>sinergia</strong> entre componentes activos y pasivos, sumada a una adecuada operación y mantenimiento, maximiza la protección de <em>vidas, activos y continuidad</em> del negocio.</p>
                </div>
              </div>
            </div>
          </article>
          
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
                <a href="/assets/images/brochureAfcProfire.pdf"
                className="btn btn__primary-style2 btn__download mb-60"
                style={{"backgroundColor": "#ef7d00"}}
                download="Brochure_AFC_Pro_Fire.pdf"
                type="application/pdf">
                <i className="icon-download"></i>
                <span>Descargar PDF</span>
             </a>
                <ul className="social-icons list-unstyled">
                  <li><a href="https://www.facebook.com/profile.php?id=61580542290588" target="_blank"><i className="fab fa-facebook-f" style={{"backgroundColor": "#ef7d00"}}></i></a></li>
                  <li><a href="https://www.instagram.com/afc.profire/" target="_blank"><i className="fab fa-instagram" style={{"backgroundColor": "#ef7d00"}}></i></a></li>
                  <li><a href="https://www.youtube.com/@AFCPROFIRE" target="_blank"><i className="fab fa-youtube" style={{"backgroundColor": "#ef7d00"}}></i></a></li>
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
                <a href="https://api.whatsapp.com/send?phone=573155516839" style={{"color": "#ef7d00"}}>Hecho por: AndresVd</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>

    <button id="scrollTopBtn" aria-label="Volver arriba"><i className="fas fa-long-arrow-alt-up"></i></button>
  </div>
  )
}
