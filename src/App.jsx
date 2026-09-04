import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Layout from './layout/Layout'
import Home from './pages/Home'
import Servicios from './pages/Servicios'
import ServiceDetail from './pages/ServiceDetail'
import Proyectos from './pages/Proyectos'
import QuienesSomos from './pages/QuienesSomos'
import Contacto from './pages/Contacto'
import Proveedores from './pages/Proveedores'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'
import NotFound from './pages/NotFound'

// Rutas sin BrowserRouter, para poder testearlas con MemoryRouter.
export function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="servicios" element={<Servicios />} />
        <Route path="servicios/:slug" element={<ServiceDetail />} />
        <Route path="proyectos" element={<Proyectos />} />
        <Route path="quienes-somos" element={<QuienesSomos />} />
        <Route path="contacto" element={<Contacto />} />
        <Route path="proveedores" element={<Proveedores />} />
        <Route path="blog" element={<Blog />} />
        <Route path="blog/:slug" element={<BlogPost />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}
