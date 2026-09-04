import { Link } from 'react-router-dom'

export default function BlogPost2() {
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

            
            <div className="post__img">
              <img src="/assets/images/blog/grid/trianguloDeFuego.png"
                   alt="Triangulo de fuego"
                   loading="lazy" width="1280" height="720" />
            </div>

            <div className="post-item mb-0">
              <div className="post__body">

                <div className="post__meta d-flex align-items-center">
                  <div className="post__cat"><span>Prevención</span> • <span>Seguridad</span></div>
                  <time className="post__date ml-10" datetime="2025-08-25">Ago 25, 2025</time>
                </div>

                <h1 className="post__title" itemprop="headline">Triángulo del Fuego y clases de incendio</h1>

                
                <div className="triangle-wrap" aria-hidden="false">
                  <svg viewBox="0 0 600 520" role="img" aria-label="Triángulo del Fuego: Combustible, Oxígeno y Calor (con logo AFC PRO FIRE)">
                    <polygon points="300,40 560,480 40,480"
                             fill="none" stroke="#004062" stroke-width="6"></polygon>
                    <text x="300" y="30" text-anchor="middle" font-size="20" fill="#004062">OXÍGENO</text>
                    <text x="85" y="505" text-anchor="middle" font-size="20" fill="#004062">COMBUSTIBLE</text>
                    <text x="515" y="505" text-anchor="middle" font-size="20" fill="#004062">CALOR</text>
                    <line x1="300" y1="60"   x2="300" y2="90"  stroke="#004062" stroke-width="3"></line>
                    <line x1="80"  y1="470"  x2="110" y2="440" stroke="#004062" stroke-width="3"></line>
                    <line x1="520" y1="470"  x2="490" y2="440" stroke="#004062" stroke-width="3"></line>
                    <image href="/assets/images/logo/logo.png"
                           x="240" y="200" width="120" height="120"
                           preserveAspectRatio="xMidYMid meet" />
                  </svg>
                </div>
                

                <div className="post__desc" itemprop="articleBody">
                  <p>Para protegernos, primero debemos entender qué es el fuego. Imagina un <strong>Triángulo del Fuego</strong>: <em>combustible</em>, <em>oxígeno</em> y <em>calor</em>. Si <strong>eliminas uno</strong> de estos elementos, el fuego <strong>no puede iniciarse</strong> o se <strong>apaga</strong>. Nuestros sistemas de protección trabajan precisamente para <strong>romper este triángulo</strong>.</p>

                  <h2>Elementos del Triángulo</h2>
                  <ul>
                    <li><strong>Combustible:</strong> algo que pueda quemarse (madera, tela, gasolina, papel, etc.).</li>
                    <li><strong>Oxígeno:</strong> el aire que respiramos y que alimenta las llamas.</li>
                    <li><strong>Calor:</strong> la energía necesaria para iniciar la combustión (una chispa, una llama, una resistencia eléctrica).</li>
                  </ul>

                  <h2>Clases de incendio</h2>
                  <table className="fire-table">
                    <thead>
                      <tr>
                        <th>Clase</th>
                        <th>Combustible</th>
                        <th>Ejemplos</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td><strong>A</strong></td><td>Materiales comunes</td><td>Madera, papel, tela</td></tr>
                      <tr><td><strong>B</strong></td><td>Líquidos inflamables</td><td>Gasolina, aceites, pinturas</td></tr>
                      <tr><td><strong>C</strong></td><td>Equipos eléctricos</td><td>Enchufes, cables, aparatos</td></tr>
                      <tr><td><strong>D</strong></td><td>Metales combustibles</td><td>Magnesio, titanio, potasio</td></tr>
                      <tr><td><strong>K</strong></td><td>Aceites y grasas de cocina</td><td>Cocinas industriales</td></tr>
                    </tbody>
                  </table>

                  <p className="note">Conocer estas clases es fundamental: no todos los extintores sirven para todo tipo de fuego.</p>
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

    <button id="scrollTopBtn"><i className="fas fa-long-arrow-alt-up"></i></button>
  </div>
  )
}
