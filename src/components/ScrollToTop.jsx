import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    // Quitar preloader al montar cada página
    const preloader = document.querySelector('.preloader')
    if (preloader) {
      preloader.style.display = 'none'
    }
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}
