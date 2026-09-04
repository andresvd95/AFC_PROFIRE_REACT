import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'

import Home from './pages/Home'
import Servicios from './pages/Servicios'
import Instalacion from './pages/Instalacion'
import Mantenimiento from './pages/Mantenimiento'
import Auditoria from './pages/Auditoria'
import Diagnostico from './pages/Diagnostico'
import DisenoIngenieria from './pages/DisenoIngenieria'
import TransferenciaConocimiento from './pages/TransferenciaConocimiento'
import Proyectos from './pages/Proyectos'
import QuienesSomos from './pages/QuienesSomos'
import Blog from './pages/Blog'
import BlogPost1 from './pages/BlogPost1'
import BlogPost2 from './pages/BlogPost2'
import BlogPost3 from './pages/BlogPost3'
import BlogPost4 from './pages/BlogPost4'
import Contacto from './pages/Contacto'
import Conceptualizacion from './pages/Conceptualizacion'

function RouteWatcher() {
  const location = useLocation()
  useEffect(() => {
    // Hide preloader
    const preloader = document.querySelector('.preloader')
    if (preloader) preloader.style.display = 'none'
    // Scroll to top
    window.scrollTo(0, 0)
    // Re-init jQuery theme plugins
    const timer = setTimeout(() => {
      if (typeof window.themeInit === 'function') {
        window.themeInit()
      }
    }, 100)
    return () => clearTimeout(timer)
  }, [location])
  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <RouteWatcher />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/instalacion" element={<Instalacion />} />
        <Route path="/mantenimiento" element={<Mantenimiento />} />
        <Route path="/auditoria" element={<Auditoria />} />
        <Route path="/diagnostico" element={<Diagnostico />} />
        <Route path="/diseno-ingenieria" element={<DisenoIngenieria />} />
        <Route path="/transferencia-conocimiento" element={<TransferenciaConocimiento />} />
        <Route path="/proyectos" element={<Proyectos />} />
        <Route path="/quienes-somos" element={<QuienesSomos />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/1" element={<BlogPost1 />} />
        <Route path="/blog/2" element={<BlogPost2 />} />
        <Route path="/blog/3" element={<BlogPost3 />} />
        <Route path="/blog/4" element={<BlogPost4 />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/conceptualizacion" element={<Conceptualizacion />} />
      </Routes>
    </BrowserRouter>
  )
}
