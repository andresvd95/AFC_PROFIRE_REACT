import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import '../styles/home.css'
import ContactForm from '../components/ContactForm'
import { bgCover } from '../lib/bg'
import { homeServicesMain, homeServicesComplementary } from '../data/services'

const CAROUSEL_1 = JSON.stringify({
  slidesToShow: 4,
  slidesToScroll: 4,
  arrows: true,
  dots: true,
  responsive: [
    { breakpoint: 992, settings: { slidesToShow: 2, slidesToScroll: 2 } },
    { breakpoint: 767, settings: { slidesToShow: 1, slidesToScroll: 1 } },
  ],
})
const CAROUSEL_2 = JSON.stringify({
  slidesToShow: 3,
  slidesToScroll: 3,
  arrows: true,
  dots: true,
  responsive: [
    { breakpoint: 992, settings: { slidesToShow: 2, slidesToScroll: 2 } },
    { breakpoint: 767, settings: { slidesToShow: 1, slidesToScroll: 1 } },
  ],
})

function ServiceSlide({ s }) {
  return (
    <div className="service-item">
      <div className="service__img">
        <img src={s.img} alt={s.home.title} loading="lazy" />
      </div>
      <div className="service__body">
        <h4 className="service__title" style={{ color: '#004062' }}>
          {s.home.title}
        </h4>
        <p className="service__desc" style={{ color: '#1b1a1a' }} dangerouslySetInnerHTML={{ __html: s.home.descHtml }} />
        <Link to={s.to} className="btn btn__secondary btn__outlined btn__custom">
          <span>Ver más</span>
          <i className="icon-arrow-right"></i>
        </Link>
      </div>
    </div>
  )
}

export default function Home() {
  const videoRef = useRef(null)

  // Autoplay robusto del vídeo del HERO (equivalente al <script> de index.html).
  useEffect(() => {
    const v = videoRef.current
    if (!v) return
    const ensure = () => {
      v.muted = true
      v.setAttribute('muted', '')
      v.playsInline = true
      v.setAttribute('playsinline', '')
      v.setAttribute('webkit-playsinline', '')
      v.setAttribute('x5-playsinline', '')
      v.autoplay = true
      v.loop = true
    }
    const tryPlay = () => {
      ensure()
      const p = v.play()
      if (p && p.catch) p.catch(() => {})
    }
    const onFirstInteract = () => {
      tryPlay()
      document.removeEventListener('click', onFirstInteract)
      document.removeEventListener('touchstart', onFirstInteract)
    }
    const onPlaying = () => v.removeAttribute('poster')

    tryPlay()
    document.addEventListener('click', onFirstInteract, { once: true })
    document.addEventListener('touchstart', onFirstInteract, { once: true })
    v.addEventListener('playing', onPlaying, { once: true })

    return () => {
      document.removeEventListener('click', onFirstInteract)
      document.removeEventListener('touchstart', onFirstInteract)
      v.removeEventListener('playing', onPlaying)
    }
  }, [])

  return (
    <>
      {/* ========================= HERO con VIDEO =========================== */}
      <section className="hero-video">
        <video
          id="heroVideo"
          ref={videoRef}
          muted
          playsInline
          autoPlay
          loop
          preload="auto"
          poster="/assets/images/banners/afc-poster.jpg"
        >
          <source src="/assets/images/banners/afc-profire.mp4#t=0.001" type="video/mp4" />
        </video>
        <div className="hero-overlay"></div>

        <div className="container">
          <div className="row">
            <div className="col-xl-8">
              <div className="slide__body">
                <span className="slide__subtitle" style={{ color: '#FFFFFF' }}>
                  Sistemas contra incendios
                </span>
                <h2 className="slide__title">AFC PRO FIRE</h2>
                <p className="slide__desc">“Sembrando seguridad, cosechando el futuro”.</p>
                <div className="d-flex">
                  <Link to="/servicios" className="btn btn__primary mr-30">
                    <i className="icon-arrow-right"></i>
                    <span>Ver servicios</span>
                  </Link>
                  <a href="https://wa.link/j2cd22" className="btn btn__white">
                    Asesoría
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================== formulario ============================= */}
      <section
        className="contact-layout2 pb-80 bg-overlay bg-overlay-primary-gradient"
        style={bgCover('/assets/images/banners/2.jpg')}
      >
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
              <div className="col-inner">
                <div className="heading-layout2 heading-light mb-60">
                  <p className="heading__desc font-weight-bold color-gray mb-0">
                    Porque vamos más allá de entregar sistemas de protección contra incendio, nuestro propósito superior
                    es contribuir a la construcción de un futuro más seguro, protegiendo lo invaluable con ingenio,
                    compromiso y soluciones que exceden expectativas.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* ====================== services Layout 2 ========================= */}
      <section className="services-layout2 pt-120" style={bgCover('/assets/images/backgrounds/5.jpg')}>
        <div className="container">
          <div className="row mb-40">
            <div className="col-12">
              <h3 className="heading__title" style={{ color: '#ef7d00' }}>
                Conozca nuestros servicios de sistemas de protección contra incendios
              </h3>
            </div>
            <div className="col-lg-12 mx-auto">
              <p className="heading__desc font-weight-bold color-gray mb-0">
                En AFC Pro Fire diseñamos, instalamos y mantenemos sistemas contra incendios a la medida de tu riesgo y
                operación. Te acompañamos desde el diagnóstico hasta la puesta en marcha, auditoría y mejora continua para
                proteger vidas, activos y la continuidad de tu negocio.
              </p>
            </div>
          </div>

          <div className="row mb-30">
            <div className="col-12">
              <div className="slick-carousel carousel-arrows-light" data-slick={CAROUSEL_1}>
                {homeServicesMain.map((s) => (
                  <ServiceSlide key={s.slug} s={s} />
                ))}
              </div>
            </div>
          </div>

          <div className="row mb-20">
            <div className="col-12">
              <h5 className="mb-20" style={{ color: '#ef7d00' }}>
                Líneas complementarias
              </h5>
            </div>
            <div className="col-12">
              <div className="slick-carousel carousel-arrows-light" data-slick={CAROUSEL_2}>
                {homeServicesComplementary.map((s) => (
                  <ServiceSlide key={s.slug} s={s} />
                ))}
              </div>
            </div>
          </div>

          <div className="row mt-30">
            <div className="col-12">
              <a href="https://wa.link/j2cd22" className="btn btn__secondary">
                <i className="icon-arrow-right"></i>
                <span>Asesoría</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================== About Layout 1 =========================== */}
      <section id="about" className="about-layout1">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-7 offset-lg-1">
              <div className="heading__layout2 mb-60">
                <h3 className="heading__title">AFC PRO FIRE</h3>
              </div>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-sm-12 col-md-12 col-lg-6">
              <div className="video-banner-layout2">
                <img src="/assets/images/gallery/portada-video.png" alt="about" className="w-100" />
                <div className="video-has-img">
                  <img src="/assets/images/video/1.jpg" alt="video" />
                  <a
                    className="video__btn video__btn-white popup-video"
                    href="/assets/images/gallery/video-afc.mp4"
                    rel="noopener"
                  >
                    <div className="video__player">
                      <i className="fa fa-play"></i>
                    </div>
                  </a>
                  <span className="video__btn-title">Ver el video</span>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-5">
              <div className="about__text">
                <div className="text__icon">
                  <i className="icon-green-energy3"></i>
                </div>
                <p className="heading__desc font-weight-medium mb-30">
                  Somos AFC Pro Fire, para nosotros la prevención y la seguridad no deben ser consideradas como una
                  opción, sino como un derecho fundamental para todos, desarrollamos nuestros proyectos impulsados por una
                  filosofía que integra innovación, integridad y un compromiso inquebrantable con la seguridad humana.
                </p>
                <p className="heading__desc mb-20">
                  Esta filosofía nos guía en cada decisión y acción, asegurando que AFC PROFESSIONAL FIRE, no solo
                  construya sistemas contra incendio, sino que también construya un legado de seguridad y confianza.
                </p>
                <div className="d-flex align-items-center mt-30">
                  <Link to="/servicios" className="btn btn__secondary mr-30">
                    <i className="icon-arrow-right"></i> <span>Asesoría</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================== Features Layout 2 (SOLO IMAGEN) ========================= */}
      <section className="features-layout2 pt-120">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-5">
              <h2 className="heading__subtitle" style={{ color: '#ef7d00' }}>
                Nuestros clientes lo confirman
              </h2>
              <h3 className="heading__title">Hemos ejecutado diversos proyectos</h3>
              <p className="heading__desc mb-30">
                Hemos ejecutado diversos proyectos en la industria, logística y edificios comerciales, integrando
                rociadores, detección, bombeo, espuma y agentes limpios. Cada obra se entrega con pruebas y puesta en
                marcha, documentación y capacitación.
              </p>
              <a href="https://wa.link/j2cd22" className="btn btn__secondary">
                <i className="fab fa-whatsapp"></i>
                <span>Cotizar ya</span>
              </a>
            </div>

            <div className="col-sm-12 col-md-12 col-lg-6 offset-lg-1">
              <div className="row">
                {[
                  {
                    src: '/assets/images/gallery/instalacion-1.png',
                    alt: 'Proyecto: diseño e ingeniería de sistemas contra incendio',
                  },
                  {
                    src: '/assets/images/gallery/instalacion-2.png',
                    alt: 'Proyecto: instalación y puesta en marcha de sistemas contra incendio',
                  },
                  {
                    src: '/assets/images/gallery/instalacion-3.png',
                    alt: 'Proyecto: diagnóstico y análisis de requerimientos',
                  },
                  {
                    src: '/assets/images/gallery/sistema-3.png',
                    alt: 'Proyecto: diagnóstico y análisis de requerimientos',
                  },
                ].map((img) => (
                  <div key={img.src} className="col-sm-6">
                    <figure className="feature-card">
                      <img src={img.src} alt={img.alt} />
                    </figure>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
