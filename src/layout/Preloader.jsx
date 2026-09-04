import { useEffect, useRef } from 'react'
import '../styles/preloader.css'

// Preloader del tema. Se ve hasta que la ventana termina de cargar (o ~800 ms
// después) y luego se desvanece. En navegación SPA ya está oculto y así permanece.
export default function Preloader() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    let t
    const done = () => el.classList.add('preloader--hidden')
    const hide = () => {
      t = window.setTimeout(done, 800)
    }
    if (document.readyState === 'complete') hide()
    else window.addEventListener('load', hide, { once: true })
    const cap = window.setTimeout(done, 3500)
    return () => {
      window.clearTimeout(t)
      window.clearTimeout(cap)
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
      </div>
    </div>
  )
}
