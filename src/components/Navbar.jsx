import { Link, useLocation } from 'react-router-dom'

const serviceLinks = [
  { to: '/diseno-ingenieria', label: 'Diseño e Ingeniería' },
  { to: '/instalacion', label: 'Instalación y Puesta en Marcha' },
  { to: '/mantenimiento', label: 'Mantenimiento Preventivo y Correctivo' },
  { to: '/auditoria', label: 'Gestión de Riesgos y Auditoría Integral' },
  { to: '/diagnostico', label: 'Diagnóstico y Análisis de Requerimientos' },
  { to: '/transferencia-conocimiento', label: 'Capacitación y Transferencia del Conocimiento' },
]

export default function Navbar() {
  const { pathname } = useLocation()

  const isActive = (to) =>
    pathname === to ? 'nav__item-link active' : 'nav__item-link'

  return (
    <header className="header header-layout1">
      <nav className="navbar navbar-expand-lg sticky-navbar">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src="/assets/images/logo/logo.png" className="logo" alt="logo" />
          </Link>

          <button className="navbar-toggler" type="button">
            <span className="menu-lines"><span></span></span>
          </button>

          <div className="collapse navbar-collapse" id="mainNavigation">
            <ul className="navbar-nav">
              <li className="nav__item">
                <Link to="/" className={isActive('/')}>Inicio</Link>
              </li>

              <li className="nav__item has-dropdown">
                <Link to="/servicios" className={isActive('/servicios')}>Servicios</Link>
                <button className="dropdown-toggle" data-toggle="dropdown"></button>
                <ul className="dropdown-menu">
                  {serviceLinks.map((s) => (
                    <li key={s.to} className="nav__item">
                      <Link to={s.to} className="nav__item-link">{s.label}</Link>
                    </li>
                  ))}
                </ul>
              </li>

              <li className="nav__item">
                <Link to="/proyectos" className={isActive('/proyectos')}>Proyectos</Link>
              </li>
              <li className="nav__item">
                <Link to="/quienes-somos" className={isActive('/quienes-somos')}>Quiénes somos</Link>
              </li>
              <li className="nav__item">
                <Link to="/blog" className={isActive('/blog')}>Blog</Link>
              </li>
              <li className="nav__item">
                <Link to="/contacto" className={isActive('/contacto')}>Contacto</Link>
              </li>
            </ul>

            <button className="close-mobile-menu d-block d-lg-none">
              <i className="fas fa-times"></i>
            </button>
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
  )
}
