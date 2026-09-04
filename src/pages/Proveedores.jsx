import '../styles/proveedores.css'
import PageTitle from '../components/PageTitle'
import { proveedorDocs } from '../data/proveedores'

export default function Proveedores() {
  return (
    <>
      <PageTitle
        variant="layout1"
        bg="/assets/images/page-titles/12.jpg"
        heading="Proveedores"
        breadcrumb={[{ label: 'Inicio', to: '/' }, { label: 'Proveedores' }]}
        colClass="col-12 text-center"
      />

      <section className="proveedores-section pt-90 pb-90" data-testid="proveedores">
        <div className="container">
          <div className="row mb-50">
            <div className="col-lg-8 mx-auto text-center">
              <p className="heading__desc">
                Si deseas ser proveedor de AFC Pro Fire o actualizar tus datos, descarga aquí los formatos de nuestro
                Sistema de Gestión de Compras.
              </p>
            </div>
          </div>

          <div className="row proveedores-cards">
            {proveedorDocs.map((d) => (
              <div key={d.key} className="col-sm-12 col-md-6 col-lg-4">
                <article className="proveedor-card">
                  <div className="proveedor-card__icon">
                    <i className={d.icon}></i>
                  </div>
                  <span className="proveedor-card__ext">{d.ext}</span>
                  <h4 className="proveedor-card__title">{d.title}</h4>
                  <p className="proveedor-card__desc">{d.desc}</p>
                  <a
                    className="btn btn__primary proveedor-card__btn"
                    href={d.href}
                    download={d.filename}
                  >
                    <i className="icon-download"></i>
                    <span>Descargar {d.ext}</span>
                  </a>
                  <span className="proveedor-card__size">{d.sizeLabel}</span>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
