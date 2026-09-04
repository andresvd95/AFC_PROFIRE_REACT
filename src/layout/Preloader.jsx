import { useEffect, useRef } from 'react'
import '../styles/preloader.css'

// Preloader del tema + logo AFC centrado. Se ve hasta que la ventana termina de
// cargar (o ~800 ms después) y luego se desvanece. En navegación SPA ya está
// oculto y así permanece.
export default function Preloader() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    let t
    const hide = () => {
      t = window.setTimeout(() => el.classList.add('preloader--hidden'), 800)
    }
    if (document.readyState === 'complete') hide()
    else window.addEventListener('load', hide, { once: true })
    return () => {
      window.clearTimeout(t)
      window.removeEventListener('load', hide)
    }
  }, [])

  return (
    <div className="preloader" ref={ref}>
      <div className="loading">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <img className="preloader__logo" src="/assets/images/logo/logo.png" alt="AFC Pro Fire" />
      </div>
    </div>
  )
}
