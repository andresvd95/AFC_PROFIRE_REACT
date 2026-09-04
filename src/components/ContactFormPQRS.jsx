import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

// Formulario de la página de contacto (PQRS). Fiel a <form id="contactFormEmailJS">
// de contacto.html. Envía con EmailJS -> service_433wpss / template_0rq3a9q.
const SERVICE_ID = 'service_433wpss'
const TEMPLATE_ID = 'template_0rq3a9q'
const PUBLIC_KEY = 'yPAstTbHDQ-GCT7Lm'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i
const PHONE_RE = /^[0-9+\-\s()]{7,20}$/

export default function ContactFormPQRS() {
  const formRef = useRef(null)
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState(null) // { type, msgs: [] } | { type, html }

  const fieldById = (id) => formRef.current.querySelector(`#${id}`)

  const clearErrors = () => {
    setResult(null)
    ;['contact-name', 'contact-email', 'contact-phone', 'contact-pref', 'contact-message'].forEach((id) => {
      const el = fieldById(id)
      if (el) {
        el.classList.remove('is-invalid')
        el.removeAttribute('aria-invalid')
      }
    })
  }

  const markInvalid = (id) => {
    const el = fieldById(id)
    if (el) {
      el.classList.add('is-invalid')
      el.setAttribute('aria-invalid', 'true')
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    clearErrors()

    const name = fieldById('contact-name').value.trim()
    const email = fieldById('contact-email').value.trim()
    const phone = fieldById('contact-phone').value.trim()
    const pref = fieldById('contact-pref').value
    const msg = fieldById('contact-message').value.trim()

    const messages = []
    if (!name || name.length < 2) {
      markInvalid('contact-name')
      messages.push('Nombre es obligatorio.')
    }
    if (!email || !EMAIL_RE.test(email)) {
      markInvalid('contact-email')
      messages.push('Ingresa un correo válido.')
    }
    if (!phone || !PHONE_RE.test(phone)) {
      markInvalid('contact-phone')
      messages.push('Ingresa un teléfono válido (7 a 20 caracteres, puede incluir + - () y espacios).')
    }
    if (!pref) {
      markInvalid('contact-pref')
      messages.push('Selecciona el medio de contacto.')
    }
    if (!msg || msg.length < 10) {
      markInvalid('contact-message')
      messages.push('El mensaje debe tener al menos 10 caracteres.')
    }

    if (messages.length) {
      setResult({ type: 'danger', msgs: messages })
      return
    }

    setLoading(true)
    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      setResult({ type: 'success', msgs: ['✅ ¡Gracias! Tu mensaje fue enviado correctamente.'] })
      formRef.current.reset()
    } catch (err) {
      setResult({ type: 'danger', msgs: ['❌ Error al enviar: ' + (err?.text || 'Intenta más tarde')] })
    } finally {
      setLoading(false)
    }
  }

  return (
    <form
      id="contactFormEmailJS"
      className="contact__panel-form"
      ref={formRef}
      onSubmit={handleSubmit}
      noValidate
    >
      <div className="row">
        <div className="col-sm-12">
          <h4 className="contact__panel-title" style={{ color: '#004062' }}>
            Contáctanos / Deja tu PQRS
          </h4>
        </div>

        <div className="col-sm-6 col-md-6 col-lg-6">
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Nombre" id="contact-name" name="user_name" required />
          </div>
        </div>
        <div className="col-sm-6 col-md-6 col-lg-6">
          <div className="form-group">
            <input type="email" className="form-control" placeholder="Correo" id="contact-email" name="user_email" required />
          </div>
        </div>
        <div className="col-sm-6 col-md-6 col-lg-6">
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Celular" id="contact-phone" name="user_phone" required />
          </div>
        </div>
        <div className="col-sm-6 col-md-6 col-lg-6">
          <div className="form-group">
            <select className="form-control" id="contact-pref" name="contact_pref" required defaultValue="">
              <option value="" disabled>
                Selecciona medio de contacto
              </option>
              <option value="Correo">Correo</option>
              <option value="WhatsApp">WhatsApp</option>
              <option value="Llamada">Llamada</option>
            </select>
          </div>
        </div>

        <div className="col-sm-12 col-md-12 col-lg-12">
          <div className="form-group">
            <textarea
              className="form-control"
              placeholder="Mensaje"
              id="contact-message"
              name="user_message"
              rows="4"
              required
            ></textarea>
          </div>
        </div>

        <div className="col-sm-12 col-md-12 col-lg-12">
          <button type="submit" id="contactSubmitBtn" className="btn btn__secondary" disabled={loading}>
            <i className="fas fa-paper-plane"></i>
            <span>{loading ? 'Enviando…' : 'Enviar'}</span>
          </button>
          <div className="contact-result" id="contactResult" style={{ marginTop: 12 }}>
            {result && (
              <div className={`alert alert-${result.type}`} role="alert">
                {result.msgs.length > 1 ? (
                  <>
                    Por favor corrige:
                    <br />
                    {result.msgs.map((m, i) => (
                      <span key={i}>
                        • {m}
                        <br />
                      </span>
                    ))}
                  </>
                ) : (
                  result.msgs[0]
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </form>
  )
}
