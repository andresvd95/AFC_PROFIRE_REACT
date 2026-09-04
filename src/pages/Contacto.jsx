import '../styles/contacto.css'
import ContactFormPQRS from '../components/ContactFormPQRS'

const MAP_SRC =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.6865819826776!2d-75.58840289999999!3d6.1727012000000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e468303a3f922df%3A0x29ef38efe83f832!2sCl.%2034%20Sur%20%2345-4%2C%20Zona%202%2C%20Envigado%2C%20Antioquia!5e0!3m2!1ses!2sco!4v1754968796957!5m2!1ses!2sco'

export default function Contacto() {
  return (
    <>
      {/* Google Map */}
      <section className="google-map py-0">
        <iframe
          title="Ubicación AFC Pro Fire"
          frameBorder="0"
          height="500"
          width="100%"
          src={MAP_SRC}
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>

      {/* Contact layout 1 */}
      <section className="contact-layout1 pb-90">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="contact-panel p-0 box-shadow-none">
                <div className="contact__panel-info" style={{ backgroundColor: '#ef7d00' }}>
                  <div className="contact-info-box">
                    <h4 className="contact__info-box-title">Dirección</h4>
                    <ul className="contact__info-list list-unstyled">
                      <li>Calle 34 sur 45-04 - Envigado, Antioquia</li>
                    </ul>
                  </div>
                  <div className="contact-info-box">
                    <h4 className="contact__info-box-title">Contacto</h4>
                    <ul className="contact__info-list list-unstyled">
                      <li>
                        Email:{' '}
                        <a href="mailto:andres.cruz@afcprofire.com" style={{ color: '#004062' }}>
                          andres.cruz@afcprofire.com
                        </a>
                      </li>
                      <li>
                        WhatsApp:{' '}
                        <a
                          href="https://wa.me/573116456726"
                          target="_blank"
                          rel="noopener"
                          style={{ color: '#004062' }}
                        >
                          +57 311 645 6726
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="contact-info-box">
                    <h4 className="contact__info-box-title">Horario de atención</h4>
                    <ul className="contact__info-list list-unstyled">
                      <li>Lunes a Viernes</li>
                      <li>8 am to 5 pm</li>
                    </ul>
                  </div>
                  <a
                    href="https://wa.link/j2cd22"
                    target="_blank"
                    rel="noopener"
                    className="btn btn__primary"
                  >
                    <i className="fab fa-whatsapp"></i>
                    <span>Asesoría</span>
                  </a>
                </div>

                <ContactFormPQRS />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
