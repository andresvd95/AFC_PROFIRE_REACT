import { Outlet, useLocation } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Preloader from './Preloader'
import RouteEffects from './RouteEffects'

// Chrome común a todas las páginas. Fiel a <div class="wrapper"> ... </div> del tema.
// Los artículos del blog usan <div class="wrapper only-info"> en el original.
export default function Layout() {
  const { pathname } = useLocation()
  const onlyInfo = pathname.startsWith('/blog/')

  return (
    <div className={`wrapper${onlyInfo ? ' only-info' : ''}`}>
      <Preloader />
      <Navbar />
      <RouteEffects />
      <Outlet />
      <Footer />
      <button id="scrollTopBtn">
        <i className="fas fa-long-arrow-alt-up"></i>
      </button>
    </div>
  )
}
