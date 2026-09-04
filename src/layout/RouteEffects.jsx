import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { initTheme, destroyTheme } from '../lib/theme'
import { routeTitle } from '../lib/useDocumentTitle'
import { blogPosts } from '../data/blogPosts'

// Efectos por cambio de ruta: scroll arriba, título, y re-inicialización de los
// plugins jQuery del tema. Espera a que jQuery + slick estén cargados (los
// <script> de index.html pueden tardar) antes de llamar a initTheme().
// El preloader lo gestiona <Preloader/> (se muestra hasta window.load).
export default function RouteEffects() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = routeTitle(pathname, { blogPosts })

    destroyTheme()

    let id
    let tries = 0
    const tick = () => {
      const $ = window.jQuery
      if ($ && $.fn && $.fn.slick) {
        initTheme()
        return
      }
      if (tries++ < 40) id = window.setTimeout(tick, 75)
    }
    id = window.setTimeout(tick, 30)

    return () => window.clearTimeout(id)
  }, [pathname])

  return null
}
