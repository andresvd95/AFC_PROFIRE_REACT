import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

export default function Auditoria() {
  return (
    <div className="wrapper">

      <div className="preloader">
        <div className="loading"><span></span><span></span><span></span><span></span></div>
      </div>


      <header className="header header-layout1">
        <nav className="navbar navbar-expand-lg sticky-navbar">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              <img src="/assets/images/logo/logo.png" className="logo" alt="logo" />
            </a>
            <button className="navbar-toggler" type="button">
              <span className="menu-lines"><span></span></span>
            </button>
            <div className="collapse navbar-collapse" id="mainNavigation">
              <ul className="navbar-nav">
                <li className="nav__item has-dropdown"><a href="/" className="nav__item-link active">Inicio</a></li>
                <li className="nav__item has-dropdown">
                  <a href="/servicios" className="nav__item-link">Servicios</a>
                  <button className="dropdown-toggle" data-toggle="dropdown"></button>
                  <ul className="dropdown-menu">
                    <li className="nav__item"><a href="/diseno-ingenieria" className="nav__item-link">Diseño e Ingeniería</a>
                    </li>
                    <li className="nav__item"><a href="/instalacion" className="nav__item-link">Instalación y Puesta en
                      Marcha</a></li>
                    <li className="nav__item"><a href="/mantenimiento" className="nav__item-link">Mantenimiento Preventivo y
                      Correctivo</a></li>
                    <li className="nav__item"><a href="/auditoria" className="nav__item-link">Gestión de Riesgos y Auditoría
                      Integral</a></li>
                    <li className="nav__item"><a href="/diagnostico" className="nav__item-link">Diagnóstico y Análisis de
                      Requerimientos</a></li>
                    <li className="nav__item"><a href="/transferencia-conocimiento" className="nav__item-link">Capacitación y
                      Transferencia del Conocimiento
                    </a></li>
                  </ul>
                </li>
                <li className="nav__item"><a href="/proyectos" className="nav__item-link">Proyectos</a></li>
                <li className="nav__item"><a href="/quienes-somos" className="nav__item-link">Quienes somos</a></li>
                <li className="nav__item has-dropdown">
                  <a href="/blog" className="nav__item-link">Blog</a>
                </li>
                <li className="nav__item"><a href="/contacto" className="nav__item-link">Contacto</a></li>
              </ul>
              <button className="close-mobile-menu d-block d-lg-none"><i className="fas fa-times"></i></button>
            </div>
            <div className="contact__number d-none d-xl-flex align-items-center">
              <i className="icon-phone"></i>
              <a href="tel:+573116456726">311 645 6726</a>
            </div>
            <ul className="navbar-actions d-none d-xl-flex align-items-center list-unstyled mb-0">
              <li>
                <a href="https://wa.link/j2cd22" className="btn btn__primary">
                  <span>Asesoría</span>
                  <i className="icon-arrow-right"></i>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>


      <section className="page-title page-title-layout2 bg-overlay bg-overlay-2 bg-parallax">
        <div className="bg-img"><img src="/assets/images/page-titles/incendio.jpg" alt="Gestión de Riesgos & Auditoría" /></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1 className="pagetitle__heading mb-0">Gestión de Riesgos &amp; Auditoría Integral</h1>
              <p className="pagetitle__desc">
                Evaluamos el riesgo, diseñamos planes de emergencia y contingencia, auditamos sistemas existentes
                e intervenimos la correcta implementación para asegurar cumplimiento y efectividad.
              </p>
              <div className="d-flex align-items-center mt-30">
                <a href="https://wa.link/j2cd22" className="btn btn__primary mr-30"><i className="icon-arrow-right"></i><span>Solicitar asesoría</span></a>
                <a href="/quienes-somos" className="btn btn__white">Más sobre AFC</a>
              </div>
            </div>
          </div>
        </div>

      </section>


      <section className="text-content-section pb-90">
        <div className="container">
          <div className="row">

            <div className="col-lg-12">

              <div className="text__block mb-30">
                <h5 className="text__block-title">Visión General</h5>
                <p className="text__block-desc">
                  En <strong>AFC Pro Fire</strong> gestionamos el riesgo de incendio de forma integral:
                  identificamos escenarios, medimos su impacto en personas y activos, verificamos la eficacia de los
                  controles y guiamos mejoras priorizadas con foco en continuidad operativa y cumplimiento normativo.
                </p>
              </div>


              <div className="row mb-40">
                <div className="col-sm-12">
                  <div className="gallery-item">
                    <img src="/assets/images/services/gestion.png" alt="galería" />
                  </div>
                </div>
              </div>
            </div>


            <div className="text__block mb-30">
              <h5 className="text__block-title">Evaluación de Riesgos</h5>
              <p className="text__block-desc">
                Identificación y análisis de amenazas, vulnerabilidades y niveles de exposición para definir medidas de control y recomendaciones técnicas según el tipo de operación.
              </p>
            </div>

            <div className="text__block mb-30">
              <h5 className="text__block-title">Planes de Emergencia y Contingencia</h5>
              <p className="text__block-desc">
                Elaboración y actualización de planes de respuesta ante emergencias, con protocolos, rutas de evacuación, roles, recursos y procedimientos para escenarios críticos.
              </p>
            </div>

            <div className="text__block mb-30">
              <h5 className="text__block-title">Auditoría de Sistemas de Protección Contra Incendio</h5>
              <p className="text__block-desc">
                Revisión técnica del estado y desempeño de los sistemas instalados, verificando cumplimiento normativo, condiciones operativas y oportunidades de mejora.
              </p>
            </div>

            <div className="text__block mb-0">
              <h5 className="text__block-title">Interventoría de Implementación</h5>
              <p className="text__block-desc">
                Supervisión independiente de la ejecución del proyecto para asegurar calidad, trazabilidad y cumplimiento de especificaciones, cronograma y normas aplicables.
              </p>
            </div>


            <div className="row features-layout3 mt-40">
              <div className="col-sm-4">
                <div className="feature-item">
                  <div className="feature__icon"><i className="icon-shield-check"></i></div>
                  <h4 className="feature__title">Cumplimiento</h4>
                  <p className="feature__desc">Mejoras alineadas a normativa y políticas HSE.</p>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="feature-item">
                  <div className="feature__icon"><i className="icon-file"></i></div>
                  <h4 className="feature__title">Trazabilidad</h4>
                  <p className="feature__desc">Reportes y evidencias listas para auditorías.</p>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="feature-item">
                  <div className="feature__icon"><i className="icon-piggy-bank"></i></div>
                  <h4 className="feature__title">Optimización</h4>
                  <p className="feature__desc">Prioridad a CAPEX/OPEX con mayor impacto.</p>
                </div>
              </div>
            </div>


          </div>
        </div>
      </section>


      <section className="contact-layout2 pb-0 bg-overlay bg-overlay-primary-gradient">
        <div className="bg-img"><img src="/assets/images/banners/2.jpg" alt="" /></div>
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <div className="col-inner">
                <div className="heading-layout2 heading-light mb-60">
                  <h2 className="heading__subtitle">Prevención que salva vidas</h2>
                  <h3 className="heading__title">Protegemos personas, activos y continuidad operativa.</h3>
                  <p className="heading__desc">Agenda una asesoría con nuestro equipo y recibe un plan a la medida de tu riesgo.</p>
                </div>
                <div className="row fancybox-light">
                  <div className="col-sm-4">
                    <div className="fancybox-item">
                      <div className="fancybox__icon"><i className="icon-biosphere2"></i></div>
                      <h4 className="fancybox__title mb-0">Cumplimiento NFPA</h4>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="fancybox-item">
                      <div className="fancybox__icon"><i className="icon-tube"></i></div>
                      <h4 className="fancybox__title mb-0">Soluciones a la medida</h4>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="fancybox-item">
                      <div className="fancybox__icon"><i className="icon-electric-charge"></i></div>
                      <h4 className="fancybox__title mb-0">Excelente desempeño</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>


            <div className="col-xl-6">
              <div className="contact-panel">
                <form id="contactForm">
                  <div className="row">
                    <div className="col-12">
                      <h4 className="contact-panel__title" style={{ "color": "#004062" }}>Asesoría</h4>
                    </div>

                    <div className="col-sm-6">
                      <div className="form-group">
                        <input type="text" className="form-control" placeholder="Nombre" name="user_name" required />
                      </div>
                    </div>

                    <div className="col-sm-6">
                      <div className="form-group">
                        <input type="email" className="form-control" placeholder="Correo" name="user_email" required />
                      </div>
                    </div>

                    <div className="col-sm-6">
                      <div className="form-group">
                        <input type="text" className="form-control" placeholder="Celular" name="user_phone" />
                      </div>
                    </div>

                    <div className="col-sm-6">
                      <div className="form-group">
                        <input type="text" className="form-control" placeholder="Dirección" name="user_address" required />
                      </div>
                    </div>

                    <div className="col-12">
                      <span className="font-weight-bold color-heading d-block mb-15 mt-10">Medio de contacto</span>
                      <div className="d-flex">
                        <label className="label-radio mr-30">Todos
                          <input type="radio" name="contact_pref" value="Todos" checked />
                          <span className="radio-indicator"></span>
                        </label>
                        <label className="label-radio mr-30">Correo
                          <input type="radio" name="contact_pref" value="Correo" />
                          <span className="radio-indicator"></span>
                        </label>
                        <label className="label-radio">Celular
                          <input type="radio" name="contact_pref" value="Celular" />
                          <span className="radio-indicator"></span>
                        </label>
                      </div>

                      <button type="submit" className="btn btn__secondary btn__block">
                        <i className="fas fa-paper-plane"></i><span>Enviar correo</span>
                      </button>
                      <div className="contact-result"></div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
