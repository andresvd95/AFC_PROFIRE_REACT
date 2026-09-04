import { Link } from 'react-router-dom'

export default function BlogPost3() {
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
                <img src="/assets/images/blog/grid/prevencion.png"
                     alt="Sistemas de protección contra incendios: activa y pasiva"
                     loading="lazy" width="1280" height="720" />
              </div>
              <div className="post__body">
                <div className="post__meta d-flex align-items-center">
                  <div className="post__cat"><span>Prevención</span> • <span>Sistemas</span></div>
                  <time className="post__date ml-10" datetime="2025-08-26">Ago 26, 2025</time>
                </div>

                <h1 className="post__title" itemprop="headline">Tus aliados contra el fuego: tipos de protección</h1>

                <div className="post__desc" itemprop="articleBody">
                  <p>La seguridad contra incendios se organiza en dos grandes grupos que <strong>trabajan en conjunto</strong>: la <strong>protección activa</strong>, que <em>detecta, alerta y combate</em> el fuego, y la <strong>protección pasiva</strong>, que <em>contiene y ralentiza</em> su propagación para ganar tiempo de evacuación y respuesta.</p>

                  <h2>Protección activa: los sistemas que actúan</h2>
                  <ul>
                    <li><strong>Detectores de humo y calor:</strong> los “oídos y nariz” del sistema. Identifican humo o aumentos bruscos de temperatura y activan la alarma: tu <em>primera línea de defensa</em>.</li>
                    <li><strong>Alarmas contra incendios:</strong> bocinas, estrobos o mensajes de voz que <em>avisan a todos</em> para evacuar con rapidez.</li>
                    <li><strong>Extintores:</strong> equipos portátiles (agua, polvo químico seco, CO₂). Úsalos <em>solo</em> si sabes cómo y la situación es segura. Recuerda <strong>P.A.S.S.</strong> (<em>Pull, Aim, Squeeze, Sweep</em>) o <em>Jalar, Apuntar, Apretar, Barrer</em>.</li>
                    <li><strong>Sistemas de rociadores (sprinklers):</strong> “duchas” automáticas que se activan por calor. Normalmente <em>solo</em> descarga el rociador cercano al incendio, reduciendo daños por agua y controlando el fuego con alta eficacia.</li>
                    <li><strong>Sistemas de agentes limpios/gases:</strong> ideales para <em>salas de servidores</em> o <em>archivos</em>; sofocan el fuego sin dañar equipos ni documentos.</li>
                  </ul>

                  <h2>Protección pasiva: las barreras de contención</h2>
                  <ul>
                    <li><strong>Puertas cortafuegos:</strong> resisten el fuego por un tiempo determinado y <em>sectorizan</em> para impedir el paso de llamas y humo.</li>
                    <li><strong>Sellos cortafuegos:</strong> materiales especiales que tapan huecos en paso de <em>cables</em> y <em>tuberías</em>, evitando que el fuego “viaje” entre compartimentos.</li>
                    <li><strong>Materiales resistentes al fuego:</strong> muros, techos y elementos estructurales diseñados para soportar calor por más tiempo.</li>
                    <li><strong>Rutas de evacuación y señalización:</strong> pasillos, escaleras y salidas de emergencia <em>claramente señalizadas</em> y libres de obstáculos.</li>
                  </ul>

                  <h2>Activa vs. Pasiva: ¿en qué se diferencian?</h2>
                  <table className="compare-table" role="table" aria-label="Comparación entre protección activa y pasiva">
                    <thead>
                      <tr>
                        <th scope="col">Característica</th>
                        <th scope="col">Protección Activa</th>
                        <th scope="col">Protección Pasiva</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><strong>Propósito</strong></td>
                        <td>Detectar, alertar y combatir el incendio.</td>
                        <td>Contener el fuego y el humo; ganar tiempo.</td>
                      </tr>
                      <tr>
                        <td><strong>Se activa por</strong></td>
                        <td>Calor, humo o intervención humana.</td>
                        <td>Está integrada al edificio; funciona “en silencio”.</td>
                      </tr>
                      <tr>
                        <td><strong>Ejemplos</strong></td>
                        <td>Detectores, alarmas, extintores, rociadores, agentes limpios.</td>
                        <td>Puertas y sellos cortafuego, materiales RF, señalización y rutas.</td>
                      </tr>
                      <tr>
                        <td><strong>Beneficio clave</strong></td>
                        <td>Respuesta inmediata para controlar o extinguir.</td>
                        <td>Limitar propagación y facilitar evacuación segura.</td>
                      </tr>
                    </tbody>
                  </table>
                  <p className="note">La máxima protección se logra combinando <strong>ambos tipos</strong> según riesgo, ocupación y normativas aplicables.</p>

                  <h2>Buenas prácticas esenciales</h2>
                  <ul>
                    <li>Mantén detectores, alarmas, bombas y rociadores con <em>mantenimiento periódico</em>.</li>
                    <li>No obstruyas puertas y <em>rutas de evacuación</em>; verifica señalización visible.</li>
                    <li>Ubica extintores accesibles, señalizados y con <em>carga vigente</em>.</li>
                    <li>Capacita al personal en uso de extintores y <em>procedimientos de evacuación</em>.</li>
                    <li>Inspecciona sellos cortafuego tras instalaciones de cables/tuberías.</li>
                  </ul>

                  
                  <p className="note">¿Te perdiste los anteriores? Lee también: <a href="blog-triangulo-del-fuego.html">“Entendiendo al enemigo: lo básico del fuego”</a>.</p>
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
