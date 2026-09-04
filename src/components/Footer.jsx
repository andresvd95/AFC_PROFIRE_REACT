import { Link } from 'react-router-dom'
import { footerServices, footerPages } from '../data/navLinks'

// Fiel a <footer class="footer"> de index.html (incluye el sub-widget "Documentos").
export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-primary">
        <div className="container">
          <div className="row">
            {/* Contacto */}
            <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 footer-widget footer-widget-contact">
              <h6 className="footer-widget-title">Contacto</h6>
              <div className="footer-widget-content">
                <p className="mb-20">Si tienes alguna duda o necesitas ayuda, no dudes en contactarnos.</p>
                <div className="contact__number d-flex align-items-center mb-30" style={{ color: '#ef7d00' }}>
                  <i className="icon-phone" style={{ color: '#ef7d00' }}></i>
                  <a
                    href="https://wa.link/j2cd22"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: '#ef7d00' }}
                  >
                    311 645 6726
                  </a>
                </div>
                <p className="mb-20">Envigado - Antioquia</p>
                <Link to="/contacto" className="btn__location">
                  <i className="icon-location"></i>
                  <span>Dirección</span>
                </Link>
              </div>
            </div>

            {/* Páginas + Documentos */}
            <div className="col-6 col-sm-6 col-md-6 col-lg-2 col-xl-2 footer-widget footer-widget-nav">
              <h6 className="footer-widget-title">Páginas</h6>
              <div className="footer-widget-content">
                <nav>
                  <ul className="list-unstyled">
                    {footerPages.map((p) => (
                      <li key={p.to}>
                        <Link to={p.to}>{p.label}</Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>

              <h6 className="footer-widget-title">Documentos</h6>
              <div className="footer-widget-content">
                <nav>
                  <ul className="list-unstyled">
                    <li>
                      <a
                        href="/assets/images/GES-DO-01-Directrices del SIG.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Directrices del Sistema Integrado de Gestión
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>

            {/* Servicios */}
            <div className="col-6 col-sm-6 col-md-6 col-lg-2 col-xl-2 footer-widget footer-widget-nav">
              <h6 className="footer-widget-title">Servicios</h6>
              <div className="footer-widget-content">
                <nav>
                  <ul className="list-unstyled">
                    {footerServices.map((s) => (
                      <li key={s.to}>
                        <Link to={s.to}>{s.label}</Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </div>

            {/* Brochure + redes */}
            <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 footer-widget footer-widget-align-right">
              <h6 className="footer-widget-title">Brochcure de servicios</h6>
              <div className="footer-widget-content">
                <a
                  href="/assets/images/brochureAfcProfire.pdf"
                  className="btn btn__primary-style2 btn__download mb-60"
                  style={{ backgroundColor: '#ef7d00' }}
                  download="Brochure_AFC_Pro_Fire.pdf"
                  type="application/pdf"
                >
                  <i className="icon-download"></i>
                  <span>Descargar PDF</span>
                </a>
                <ul className="social-icons list-unstyled">
                  <li>
                    <a href="https://www.facebook.com/profile.php?id=61580542290588" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-facebook-f" style={{ backgroundColor: '#ef7d00' }}></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/afc.profire/" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-instagram" style={{ backgroundColor: '#ef7d00' }}></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.youtube.com/@AFCPROFIRE" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-youtube" style={{ backgroundColor: '#ef7d00' }}></i>
                    </a>
                  </li>
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
                <span className="color-gray">&copy; 2026 AFC Pro Fire, Todos los derechos reservados.</span>{' '}
                <a href="https://api.whatsapp.com/send?phone=573155516839" style={{ color: '#ef7d00' }}>
                  Hecho por: AndresVd
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
