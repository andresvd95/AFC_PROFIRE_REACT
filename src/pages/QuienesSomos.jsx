import { Link } from 'react-router-dom'
import '../styles/quienes-somos.css'
import LocalVideo from '../components/LocalVideo'
import { aboutGallery } from '../data/projects'

const GALLERY_SLICK = JSON.stringify({
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: true,
  dots: true,
  autoplay: true,
  autoplaySpeed: 3000,
  speed: 600,
  cssEase: 'ease',
  prevArrow: '<button type="button" class="slick-prev slick-arrow"><i class="fas fa-chevron-left"></i></button>',
  nextArrow: '<button type="button" class="slick-next slick-arrow"><i class="fas fa-chevron-right"></i></button>',
  responsive: [
    { breakpoint: 1200, settings: { slidesToShow: 3 } },
    { breakpoint: 992, settings: { slidesToShow: 2 } },
    { breakpoint: 575, settings: { slidesToShow: 1 } },
  ],
})

export default function QuienesSomos() {
  return (
    <>
      {/* 1. HERO */}
      <section className="page-title hero-min bg-overlay bg-overlay-2 bg-parallax">
        <div className="bg-img">
          <img src="/assets/images/page-titles/incendio.jpg" alt="AFC Pro Fire - Colombia" />
        </div>
        <div className="container">
          <h1 className="pagetitle__heading mb-10">Protección Contra Incendios en Colombia</h1>
          <p className="pagetitle__desc mb-0">
            Sistemas integrales de seguridad • Diseño • Instalación • Mantenimiento
          </p>
          <div className="mt-25">
            <a href="https://wa.link/j2cd22" className="btn btn__primary">
              <i className="icon-arrow-right"></i>
              <span>Solicitar asesoría gratuita</span>
            </a>
          </div>
        </div>
      </section>

      {/* 2. PROPUESTA DE VALOR */}
      <section className="section-pad">
        <div className="container text-narrow">
          <h2 className="mb-20" style={{ textAlign: 'center' }}>
            Seguridad que inspira confianza
          </h2>
          <p className="mb-0" style={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
            En <strong>AFC Pro Fire</strong> no solo diseñamos sistemas contra incendios, protegemos vidas y patrimonios.
            Con más de <strong>una década de experiencia</strong>, combinamos innovación tecnológica, ingeniería de
            precisión y un compromiso inquebrantable con la seguridad de tu operación.
          </p>
        </div>
      </section>

      {/* 3. VIDEO LOCAL */}
      <section className="section-pad" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="text-narrow mb-40" style={{ textAlign: 'center' }}>
            <h3 className="mb-10">Conoce cómo trabajamos</h3>
            <p>Descubre nuestros proyectos, metodología y el equipo experto que hace posible cada instalación.</p>
          </div>

          <LocalVideo
            mode="cover"
            poster="/assets/images/gallery/portadaSebastian.png"
            src="/assets/images/gallery/video-afc-profire.mp4"
          />
        </div>
      </section>

      {/* 4. GALERÍA */}
      <section className="section-pad" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container">
          <div className="text-narrow mb-40" style={{ textAlign: 'center' }}>
            <h3 className="mb-10" style={{ color: '#1a1a1a' }}>
              Proyectos que respaldan nuestra experiencia
            </h3>
            <p style={{ color: '#333' }}>
              Hemos implementado sistemas de protección contra incendios en industrias, comercios, hospitales y
              edificaciones de todo tipo.
            </p>
          </div>

          <div className="slick-carousel mini-carousel gallery-slider" data-slick={GALLERY_SLICK}>
            {aboutGallery.map((img) => (
              <div key={img.src} className="gallery-card">
                <a className="popup-gallery" href={img.src}>
                  <img src={img.src} alt={img.alt} />
                </a>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: 40 }}>
            <Link to="/proyectos" className="btn btn__primary">
              <span>Ver todos los proyectos</span>
              <i className="icon-arrow-right"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* 5. CTA FINAL */}
      <section className="section-pad">
        <div className="container text-narrow" style={{ textAlign: 'center' }}>
          <h2 className="mb-20">¿Necesitas proteger tu empresa o proyecto?</h2>
          <p className="mb-30" style={{ fontSize: '1.1rem' }}>
            Nuestro equipo de expertos está listo para diseñar la solución perfecta para ti. Agenda una asesoría gratuita
            y descubre cómo podemos ayudarte.
          </p>
          <a href="https://wa.link/j2cd22" className="btn btn__primary" style={{ padding: '15px 35px', fontSize: '1.1rem' }}>
            <i className="icon-arrow-right"></i>
            <span>Contactar ahora</span>
          </a>
        </div>
      </section>
    </>
  )
}
