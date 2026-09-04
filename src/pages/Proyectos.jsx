import { Link } from 'react-router-dom'

export default function Proyectos() {
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
              <li className="nav__item"><a href="/" className="nav__item-link">Inicio</a></li>

              <li className="nav__item has-dropdown">
                <a href="/servicios" className="nav__item-link">Servicios</a>
                <button className="dropdown-toggle" data-toggle="dropdown"></button>
                <ul className="dropdown-menu">
                  <li className="nav__item"><a href="/diseno-ingenieria" className="nav__item-link">Diseño e Ingeniería</a></li>
                  <li className="nav__item"><a href="/instalacion" className="nav__item-link">Instalación y Puesta en Marcha</a></li>
                  <li className="nav__item"><a href="/mantenimiento" className="nav__item-link">Mantenimiento</a></li>
                  <li className="nav__item"><a href="/auditoria" className="nav__item-link">Gestión de Riesgos</a></li>
                  <li className="nav__item"><a href="/diagnostico" className="nav__item-link">Diagnóstico</a></li>
                  <li className="nav__item"><a href="/transferencia-conocimiento" className="nav__item-link">Capacitación</a></li>
                </ul>
              </li>

              <li className="nav__item"><a href="/proyectos" className="nav__item-link active">Proyectos</a></li>
              <li className="nav__item"><a href="/quienes-somos" className="nav__item-link">Quienes Somos</a></li>
              <li className="nav__item"><a href="/blog" className="nav__item-link">Blog</a></li>
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
      <div className="bg-img">
        <img src="/assets/images/page-titles/banner-proyectos.png" alt="Proyectos Exitosos" />
      </div>

      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <h1 className="pagetitle__heading">Proyectos Exitosos</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb justify-content-center">
                <li className="breadcrumb-item"><a href="/">Inicio</a></li>
                <li className="breadcrumb-item active">Proyectos</li>
              </ol>
            </nav>
            <a href="#gallery" className="scroll-down"><i className="icon-arrow-down"></i></a>
          </div>
        </div>
      </div>
    </section>

    
    <section id="gallery" className="gallery pt-60 pb-60">
      <div className="container">
        <div className="row">

          
          

          <div className="col-sm-6 col-md-4">
            <div className="gallery-item">
              <a className="popup-gallery-item" href="/assets/images/gallery/instalacion-1.png">
                <img src="/assets/images/gallery/instalacion-1.png" alt="Proyecto 1" />
              </a>
            </div>
          </div>

          <div className="col-sm-6 col-md-4">
            <div className="gallery-item">
              <a className="popup-gallery-item" href="/assets/images/gallery/instalacion-2.png">
                <img src="/assets/images/gallery/instalacion-2.png" alt="Proyecto 2" />
              </a>
            </div>
          </div>

          <div className="col-sm-6 col-md-4">
            <div className="gallery-item">
              <a className="popup-gallery-item" href="/assets/images/gallery/instalacion-3.png">
                <img src="/assets/images/gallery/instalacion-3.png" alt="Proyecto 3" />
              </a>
            </div>
          </div>

          <div className="col-sm-6 col-md-4">
            <div className="gallery-item">
              <a className="popup-gallery-item" href="/assets/images/gallery/instalacion-4.png">
                <img src="/assets/images/gallery/instalacion-4.png" alt="Proyecto 4" />
              </a>
            </div>
          </div>

          
          <div className="col-sm-6 col-md-4">
            <div className="gallery-item">
              <a className="popup-gallery-item" href="/assets/images/gallery/instalacion-5.png">
                <img src="/assets/images/gallery/instalacion-5.png" alt="Proyecto 5" />
              </a>
            </div>
          </div>

          <div className="col-sm-6 col-md-4">
            <div className="gallery-item">
              <a className="popup-gallery-item" href="/assets/images/gallery/sistema-1.png">
                <img src="/assets/images/gallery/sistema-1.png" alt="Sistema 1" />
              </a>
            </div>
          </div>

          <div className="col-sm-6 col-md-4">
            <div className="gallery-item">
              <a className="popup-gallery-item" href="/assets/images/gallery/sistema-2.png">
                <img src="/assets/images/gallery/sistema-2.png" alt="Sistema 2" />
              </a>
            </div>
          </div>

          <div className="col-sm-6 col-md-4">
            <div className="gallery-item">
              <a className="popup-gallery-item" href="/assets/images/gallery/sistema-3.png">
                <img src="/assets/images/gallery/sistema-3.png" alt="Sistema 3" />
              </a>
            </div>
          </div>

          <div className="col-sm-6 col-md-4">
            <div className="gallery-item">
              <a className="popup-gallery-item" href="/assets/images/gallery/sistema-4.png">
                <img src="/assets/images/gallery/sistema-4.png" alt="Sistema 4" />
              </a>
            </div>
          </div>

          <div className="col-sm-6 col-md-4">
            <div className="gallery-item">
              <a className="popup-gallery-item" href="/assets/images/gallery/sistema-5.png">
                <img src="/assets/images/gallery/sistema-5.png" alt="Sistema 5" />
              </a>
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
                <p className="mb-20">Si necesitas ayuda, estamos para acompañarte.</p>
                <div className="contact__number d-flex align-items-center mb-30" style={{"color": "#ef7d00"}}>
                  <i className="icon-phone"></i>
                  <a href="https://wa.link/j2cd22" style={{"color": "#ef7d00"}}>311 645 6726</a>
                </div>
                <p className="mb-20">Envigado - Antioquia</p>
                <a href="/contacto" className="btn__location">
                  <i className="icon-location"></i>
                  <span>Dirección</span>
                </a>
              </div>
            </div>

            <div className="col-6 col-md-6 col-lg-2 col-xl-2 footer-widget footer-widget-nav">
              <h6 className="footer-widget-title">Páginas</h6>
              <ul className="list-unstyled">
                <li><a href="/quienes-somos">Quienes somos</a></li>
                <li><a href="/blog">Blog</a></li>
                <li><a href="/contacto">Contacto</a></li>
              </ul>
            </div>

            <div className="col-6 col-md-6 col-lg-2 col-xl-2 footer-widget footer-widget-nav">
              <h6 className="footer-widget-title">Servicios</h6>
              <ul className="list-unstyled">
                <li><a href="/diseno-ingenieria">Diseño e Ingeniería</a></li>
                <li><a href="/instalacion">Instalación</a></li>
                <li><a href="/mantenimiento">Mantenimiento</a></li>
                <li><a href="/auditoria">Gestión de Riesgos</a></li>
                <li><a href="/diagnostico">Diagnóstico</a></li>
              </ul>
            </div>

            <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 footer-widget footer-widget-align-right">
              <h6 className="footer-widget-title">Brochure de servicios</h6>
              <a href="/assets/images/brochureAfcProfire.pdf" className="btn btn__primary-style2 btn__download mb-60" style={{"backgroundColor": "#ef7d00"}} download>
                <i className="icon-download"></i><span>Descargar PDF</span>
              </a>
              <ul className="social-icons list-unstyled">
                <li><a href="https://www.facebook.com/profile.php?id=61580542290588"><i className="fab fa-facebook-f"></i></a></li>
                <li><a href="https://www.instagram.com/afc.profire/"><i className="fab fa-instagram"></i></a></li>
                <li><a href="https://www.youtube.com/@AFCPROFIRE"><i className="fab fa-youtube"></i></a></li>
              </ul>
            </div>

          </div>
        </div>
      </div>

      <div className="footer-copyrights">
        <div className="container">
          <div className="row">
            <div className="col-12 d-flex justify-content-between">
              <p className="mb-0">
                <span className="color-gray">&copy; 2025 AFC Pro Fire. Todos los derechos reservados.</span>
                <a href="https://api.whatsapp.com/send?phone=573155516839" style={{"color": "#ef7d00"}}>Hecho por AndresVd</a>
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
