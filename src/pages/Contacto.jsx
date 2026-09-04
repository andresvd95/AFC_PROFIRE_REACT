import { Link } from 'react-router-dom'

export default function Contacto() {
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
                  <li className="nav__item"><a href="diseno-Ingenieria.html" className="nav__item-link">Diseño e Ingeniería</a>
                  </li>
                  <li className="nav__item"><a href="instalacion.html" className="nav__item-link">Instalación y Puesta en
                      Marcha</a></li>
                  <li className="nav__item"><a href="mantenimiento.html" className="nav__item-link">Mantenimiento Preventivo y
                      Correctivo</a></li>
                  <li className="nav__item"><a href="auditoria.html" className="nav__item-link">Gestión de Riesgos y Auditoría
                      Integral</a></li>
                  <li className="nav__item"><a href="diagnostico.html" className="nav__item-link">Diagnóstico y Análisis de
                      Requerimientos</a></li>
                  <li className="nav__item"><a href="transferenciaConocimiento.html" className="nav__item-link">Capacitación y
                      Transferencia del Conocimiento
                    </a></li>
                </ul>
              </li>
              <li className="nav__item"><a href="proyectos.html" className="nav__item-link">Proyectos</a></li>
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

    
    <section className="google-map py-0">
      <iframe frameborder="0" height="500" width="100%"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.6865819826776!2d-75.58840289999999!3d6.1727012000000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e468303a3f922df%3A0x29ef38efe83f832!2sCl.%2034%20Sur%20%2345-4%2C%20Zona%202%2C%20Envigado%2C%20Antioquia!5e0!3m2!1ses!2sco!4v1754968796957!5m2!1ses!2sco"
        style={{"border": "0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </section>

    
    <section className="contact-layout1 pb-90">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="contact-panel p-0 box-shadow-none">
              <div className="contact__panel-info mb-30" style={{"backgroundColor": "#ef7d00"}}>
                <div className="contact-info-box">
                  <h4 className="contact__info-box-title">Dirección</h4>
                  <ul className="contact__info-list list-unstyled">
                    <li>Calle 34 sur 45-04 - Envigado, Antioquia</li>
                  </ul>
                </div>
                <div className="contact-info-box">
                  <h4 className="contact__info-box-title">Contacto</h4>
                  <ul className="contact__info-list list-unstyled">
                    <li>Email: <a href="/cdn-cgi/l/email-protection#06676862746375286574737c46676065767469606f74632865696b" style={{"color": "#004062"}}><span className="__cf_email__" data-cfemail="12737c766077613c716067685273747162607d747b60773c717d7f">[email&#160;protected]</span></a></li>
                    <li>WhatsApp: <a href="https://wa.me/573116456726" target="_blank" rel="noopener" style={{"color": "#004062"}}>+57 311 645 6726</a></li>
                  </ul>
                </div>
                <div className="contact-info-box">
                  <h4 className="contact__info-box-title">Horario de atención</h4>
                  <ul className="contact__info-list list-unstyled">
                    <li>Lunes a Viernes</li>
                    <li>8 am to 5 pm</li>
                  </ul>
                </div>
                <a href="https://wa.link/j2cd22" target="_blank" rel="noopener" className="btn btn__primary">
                  <i className="fab fa-whatsapp"></i>
                  <span>Asesoría</span>
                </a>
              </div>

              
              <form id="contactFormEmailJS" className="contact__panel-form mb-30" novalidate>
                <div className="row">
                  <div className="col-sm-12">
                    <h4 className="contact__panel-title" style={{"color": "#004062"}}>Contáctanos</h4>
                  </div>

                  
                  <div className="col-sm-6 col-md-6 col-lg-6">
                    <div className="form-group">
                      <input type="text" className="form-control" placeholder="Nombre" id="contact-name"
                             name="user_name" required />
                    </div>
                  </div>

                  
                  <div className="col-sm-6 col-md-6 col-lg-6">
                    <div className="form-group">
                      <input type="email" className="form-control" placeholder="Correo" id="contact-email"
                             name="user_email" required />
                    </div>
                  </div>

                  
                  <div className="col-sm-6 col-md-6 col-lg-6">
                    <div className="form-group">
                      <input type="text" className="form-control" placeholder="Celular" id="contact-phone"
                             name="user_phone" required />
                    </div>
                  </div>

                  
                  <div className="col-sm-6 col-md-6 col-lg-6">
                    <div className="form-group">
                      <select className="form-control" id="contact-pref" name="contact_pref" required>
                        <option value="" selected disabled>Selecciona medio de contacto</option>
                        <option value="Correo">Correo</option>
                        <option value="WhatsApp">WhatsApp</option>
                        <option value="Llamada">Llamada</option>
                      </select>
                    </div>
                  </div>

                  
                  <div className="col-sm-12 col-md-12 col-lg-12">
                    <div className="form-group">
                      <textarea className="form-control" placeholder="Mensaje"
                                id="contact-message" name="user_message" rows="4" required></textarea>
                    </div>
                  </div>

                  
                  <div className="col-sm-12 col-md-12 col-lg-12">
                    <button type="submit" id="contactSubmitBtn" className="btn btn__secondary">
                      <i className="fas fa-paper-plane"></i>
                      <span>Enviar</span>
                    </button>
                    <div className="contact-result" id="contactResult" style={{"marginTop": "12px"}}></div>
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
                <div className="contact__number d-flex align-items-center mb-30" style={{"color": "#ef7d00"}}>
                  <i className="icon-phone" style={{"color": "#ef7d00"}}></i>
                  <a href="https://wa.link/j2cd22" target="_blank" rel="noopener noreferrer" style={{"color": "#ef7d00"}}>311 645 6726</a>
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
                    <li><a href="diseno-Ingenieria.html">Diseño e Ingeniería de Sistemas Contra Incendios</a></li>
                    <li><a href="instalacion.html">Instalación y Puesta en Marcha</a></li>
                    <li><a href="mantenimiento.html">Mantenimiento Preventivo y Correctivo</a></li>
                    <li><a href="auditoria.html">Gestión de Riesgos y Auditoría Integral</a></li>
                    <li><a href="diagnostico.html">Diagnóstico y Análisis de Requerimientos</a></li>
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
