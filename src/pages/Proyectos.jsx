import { Link } from 'react-router-dom'
import '../styles/proyectos.css'
import LocalVideo from '../components/LocalVideo'
import { galleryImages, galleryVideos } from '../data/projects'

export default function Proyectos() {
  return (
    <>
      {/* PAGE TITLE */}
      <section className="page-title page-title-layout1 bg-overlay bg-overlay-2 bg-parallax">
        <div className="bg-img">
          <img src="/assets/images/page-titles/banner-proyectos.png" alt="Proyectos Exitosos" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h1 className="pagetitle__heading">Proyectos Exitosos</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center">
                  <li className="breadcrumb-item">
                    <Link to="/">Inicio</Link>
                  </li>
                  <li className="breadcrumb-item active">Proyectos</li>
                </ol>
              </nav>
              <a href="#gallery" className="scroll-down">
                <i className="icon-arrow-down"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* GALERÍA */}
      <section id="gallery" className="gallery pt-60 pb-60">
        <div className="container">
          <div className="row">
            {galleryImages.map((img, i) => (
              <div key={img.src} className="col-sm-6 col-md-4">
                <div className="gallery-item">
                  <a className="popup-gallery-item" href={encodeURI(img.src)}>
                    <img src={encodeURI(img.src)} alt={img.alt || `Proyecto ${i + 1}`} />
                  </a>
                </div>
              </div>
            ))}

            {galleryVideos.map((src) => (
              <div key={src} className="col-sm-12 col-md-6">
                <div className="gallery-item">
                  <LocalVideo mode="inline" src={src} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
