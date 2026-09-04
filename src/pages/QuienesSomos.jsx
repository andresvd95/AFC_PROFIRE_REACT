import { Link } from 'react-router-dom'

export default function QuienesSomos() {
  return (
    <div className="wrapper">


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


      <section className="page-title hero-min bg-overlay bg-overlay-2 bg-parallax">
        <div className="bg-img">
          <img src="/assets/images/page-titles/incendio.jpg" alt="AFC Pro Fire - Colombia" />
        </div>
        <div className="container">
          <h1 className="pagetitle__heading mb-10">Protección Contra Incendios en Colombia</h1>
          <p className="pagetitle__desc mb-0">Sistemas integrales de seguridad • Diseño • Instalación • Mantenimiento</p>
          <div className="mt-25">
            <a href="https://wa.link/j2cd22" className="btn btn__primary">
              <i className="icon-arrow-right"></i><span>Solicitar asesoría gratuita</span>
            </a>
          </div>
        </div>
      </section>


      <section className="section-pad">
        <div className="container text-narrow">
          <h2 className="mb-20" style={{ "textAlign": "center" }}>Seguridad que inspira confianza</h2>
          <p className="mb-0" style={{ "fontSize": "1.1rem", "lineHeight": "1.8" }}>
            En <strong>AFC Pro Fire</strong> no solo diseñamos sistemas contra incendios, protegemos vidas y patrimonios.
            Con más de <strong>una década de experiencia</strong>, combinamos innovación tecnológica,
            ingeniería de precisión y un compromiso inquebrantable con la seguridad de tu operación.
          </p>
        </div>
      </section>


      <section className="section-pad" style={{ "paddingTop": "0" }}>
        <div className="container">
          <div className="text-narrow mb-40" style={{ "textAlign": "center" }}>
            <h3 className="mb-10">Conoce cómo trabajamos</h3>
            <p>Descubre nuestros proyectos, metodología y el equipo experto que hace posible cada instalación.</p>
          </div>

          <div className="video-section-wrapper">
            <div className="video-container" id="videoBox">


              <img src="/assets/images/gallery/portadaSebastian.png" alt="Video AFC Pro Fire" className="video-thumbnail" />


              <div className="video-overlay" id="video-overlay">
                <button className="video__btn" id="play-video-btn" type="button" aria-label="Reproducir video">
                  <div className="video__player">
                    <i className="fa fa-play"></i>
                  </div>
                </button>
                <span className="video__btn-title">Ver el video</span>
              </div>


              <button className="video-close-btn" id="close-video-btn" type="button" aria-label="Cerrar video">
                <i className="fas fa-times"></i>
              </button>


              <video id="afc-video" controls playsinline preload="metadata"
                poster="assets/images/gallery/portadaSebastian.png">
                <source src="/assets/images/gallery/video-afc-profire.mp4" type="video/mp4" />
                Tu navegador no soporta este video.
              </video>

            </div>
          </div>
        </div>
      </section>


      <section className="section-pad" style={{ "backgroundColor": "#f8f9fa" }}>
        <div className="container">
          <div className="text-narrow mb-40" style={{ "textAlign": "center" }}>
            <h3 className="mb-10" style={{ "color": "#1a1a1a" }}>Proyectos que respaldan nuestra experiencia</h3>
            <p style={{ "color": "#333" }}>Hemos implementado sistemas de protección contra incendios en industrias, comercios,
              hospitales y edificaciones de todo tipo.</p>
          </div>

          <div className="slick-carousel mini-carousel gallery-slider" data-slick='{
            "slidesToShow": 4,
            "slidesToScroll": 1,
            "arrows": true,
            "dots": true,
            "autoplay": true,
            "autoplaySpeed": 3000,
            "speed": 600,
            "cssEase": "ease",
            "prevArrow": "<button type=\"button\" className=\"slick-prev slick-arrow\"><i className=\"fas fa-chevron-left\"></i></button>",
            "nextArrow": "<button type=\"button\" className=\"slick-next slick-arrow\"><i className=\"fas fa-chevron-right\"></i></button>",
            "responsive": [
              {"breakpoint": 1200, "settings": {"slidesToShow": 3}},
              {"breakpoint": 992,  "settings": {"slidesToShow": 2}},
              {"breakpoint": 575,  "settings": {"slidesToShow": 1}}
            ]
          }'>

            <div className="gallery-card"><a className="popup-gallery" href="/assets/images/gallery/instalacion-1.png"><img
              src="/assets/images/gallery/instalacion-1.png" alt="Instalación 1" /></a></div>
            <div className="gallery-card"><a className="popup-gallery" href="/assets/images/gallery/instalacion-2.png"><img
              src="/assets/images/gallery/instalacion-2.png" alt="Instalación 2" /></a></div>
            <div className="gallery-card"><a className="popup-gallery" href="/assets/images/gallery/instalacion-3.png"><img
              src="/assets/images/gallery/instalacion-3.png" alt="Instalación 3" /></a></div>
            <div className="gallery-card"><a className="popup-gallery" href="/assets/images/gallery/instalacion-4.png"><img
              src="/assets/images/gallery/instalacion-4.png" alt="Instalación 4" /></a></div>
            <div className="gallery-card"><a className="popup-gallery" href="/assets/images/gallery/instalacion-5.png"><img
              src="/assets/images/gallery/instalacion-5.png" alt="Instalación 5" /></a></div>

            <div className="gallery-card"><a className="popup-gallery" href="/assets/images/gallery/sistema-1.png"><img
              src="/assets/images/gallery/sistema-1.png" alt="Sistema 1" /></a></div>
            <div className="gallery-card"><a className="popup-gallery" href="/assets/images/gallery/sistema-2.png"><img
              src="/assets/images/gallery/sistema-2.png" alt="Sistema 2" /></a></div>
            <div className="gallery-card"><a className="popup-gallery" href="/assets/images/gallery/sistema-3.png"><img
              src="/assets/images/gallery/sistema-3.png" alt="Sistema 3" /></a></div>
            <div className="gallery-card"><a className="popup-gallery" href="/assets/images/gallery/sistema-4.png"><img
              src="/assets/images/gallery/sistema-4.png" alt="Sistema 4" /></a></div>
            <div className="gallery-card"><a className="popup-gallery" href="/assets/images/gallery/sistema-5.png"><img
              src="/assets/images/gallery/sistema-5.png" alt="Sistema 5" /></a></div>

          </div>

          <div style={{ "textAlign": "center", "marginTop": "40px" }}>
            <a href="/proyectos" className="btn btn__primary">
              <span>Ver todos los proyectos</span>
              <i className="icon-arrow-right"></i>
            </a>
          </div>
        </div>
      </section>


      <section className="section-pad">
        <div className="container text-narrow" style={{ "textAlign": "center" }}>
          <h2 className="mb-20">¿Necesitas proteger tu empresa o proyecto?</h2>
          <p className="mb-30" style={{ "fontSize": "1.1rem" }}>
            Nuestro equipo de expertos está listo para diseñar la solución perfecta para ti.
            Agenda una asesoría gratuita y descubre cómo podemos ayudarte.
          </p>
          <a href="https://wa.link/j2cd22" className="btn btn__primary" style={{ "padding": "15px 35px", "fontSize": "1.1rem" }}>
            <i className="icon-arrow-right"></i><span>Contactar ahora</span>
          </a>
          <p className="mt-20" style={{ "color": "#666", "fontSize": "0.95rem" }}>
            También puedes llamarnos al <a href="tel:+573116456726" style={{ "color": "#ef7d00", "fontWeight": "600" }}>311 645
              6726</a>
          </p>
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
                    <a href="https://wa.link/j2cd22" target="_blank" rel="noopener noreferrer"
                      style={{ "color": "#ef7d00" }}>311
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
                      <li><a href="/diseno-ingenieria">Diseño e Ingeniería</a></li>
                      <li><a href="/instalacion">Instalación y Puesta en Marcha</a></li>
                      <li><a href="/mantenimiento">Mantenimiento</a></li>
                      <li><a href="/auditoria">Auditoría Integral</a></li>
                      <li><a href="/diagnostico">Diagnóstico</a></li>
                    </ul>
                  </nav>
                </div>
              </div>

              <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 footer-widget footer-widget-align-right">
                <h6 className="footer-widget-title">Brochure de servicios</h6>
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
