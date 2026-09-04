import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="page-title" data-testid="notfound" style={{ padding: '120px 0', textAlign: 'center' }}>
      <div className="container">
        <h1 className="pagetitle__heading">Página no encontrada</h1>
        <p className="pagetitle__desc mb-30">La página que buscas no existe o fue movida.</p>
        <Link to="/" className="btn btn__primary">
          <i className="icon-arrow-right"></i>
          <span>Ir al inicio</span>
        </Link>
      </div>
    </section>
  )
}
