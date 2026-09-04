import { Link, useLocation } from 'react-router-dom'
import { mainNav, services } from '../data/navLinks'

// Fiel a <header class="header header-layout1"> de index.html.
export default function Navbar() {
  const { pathname } = useLocation()

  const isActive = (to) => {
    if (to === '/') return pathname === '/'
    if (to === '/servicios') return pathname === '/servicios' || pathname.startsWith('/servicios/')
    return pathname === to
  }
  const linkClass = (to) => `nav__item-link${isActive(to) ? ' active' : ''}`

  return (
    <header className="header header-layout1">
      <nav className="navbar navbar-expand-lg sticky-navbar">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src="/assets/images/logo/logo.png" className="logo" alt="logo" />
          </Link>
          <button className="navbar-toggler" type="button">
            <span className="menu-lines">
              <span></span>
            </span>
          </button>

          <div className="collapse navbar-collapse" id="mainNavigation">
            <ul className="navbar-nav">
              {mainNav.map((item) =>
                item.dropdown === 'services' ? (
                  <li key={item.to} className="nav__item has-dropdown">
                    <Link to={item.to} className={linkClass(item.to)}>
                      {item.label}
                    </Link>
                    <button className="dropdown-toggle" data-toggle="dropdown"></button>
                    <ul className="dropdown-menu">
                      {services.map((s) => (
                        <li key={s.to} className="nav__item">
                          <Link to={s.to} className="nav__item-link">
                            {s.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                ) : (
                  <li key={item.to} className="nav__item has-dropdown">
                    <Link to={item.to} className={linkClass(item.to)}>
                      {item.label}
                    </Link>
                  </li>
                )
              )}
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
