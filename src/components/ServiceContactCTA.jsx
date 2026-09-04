import ContactForm from './ContactForm'

// Bloque <section class="contact-layout2 pb-0 ..."> común a las 7 páginas de servicio.
// Fiel a diseno-Ingenieria.html / instalacion.html / etc.
export default function ServiceContactCTA() {
  const fancy = [
    { icon: 'icon-biosphere2', label: 'Cumplimiento NFPA' },
    { icon: 'icon-tube', label: 'Soluciones a la medida' },
    { icon: 'icon-electric-charge', label: 'Excelente desempeño' },
  ]

  return (
    <section className="contact-layout2 pb-0 bg-overlay bg-overlay-primary-gradient">
      <div className="bg-img">
        <img src="/assets/images/banners/2.jpg" alt="" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xl-6">
            <div className="col-inner">
              <div className="heading-layout2 heading-light mb-60">
                <h2 className="heading__subtitle">Prevención que salva vidas</h2>
                <h3 className="heading__title">Protegemos personas, activos y continuidad operativa.</h3>
                <p className="heading__desc">
                  Agenda una asesoría con nuestro equipo y recibe un plan a la medida de tu riesgo.
                </p>
              </div>
              <div className="row fancybox-light">
                {fancy.map((f) => (
                  <div key={f.icon} className="col-sm-4">
                    <div className="fancybox-item">
                      <div className="fancybox__icon">
                        <i className={f.icon}></i>
                      </div>
                      <h4 className="fancybox__title mb-0">{f.label}</h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="col-xl-6">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}
