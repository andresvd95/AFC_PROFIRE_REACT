import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { initTheme, destroyTheme } from '../lib/theme'
import { routeTitle } from '../lib/useDocumentTitle'
import { blogPosts } from '../data/blogPosts'

// Efectos por cambio de ruta: scroll arriba, oculta preloader, fija título,
// y re-inicializa los plugins jQuery del tema (destroy anterior -> init nuevo).
export default function RouteEffects() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
    const pre = document.querySelector('.preloader')
    if (pre) pre.style.display = 'none'
    document.title = routeTitle(pathname, { blogPosts })

    destroyTheme()
    const id = window.setTimeout(initTheme, 60)
    return () => window.clearTimeout(id)
  }, [pathname])

  return null
}
