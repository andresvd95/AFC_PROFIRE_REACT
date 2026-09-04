import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

// Formulario general de asesoría. Fiel a <form id="contactForm"> de index.html.
// Envía con EmailJS -> service_433wpss / template_l61hkol.
const SERVICE_ID = 'service_433wpss'
const TEMPLATE_ID = 'template_l61hkol'
const PUBLIC_KEY = 'yPAstTbHDQ-GCT7Lm'

const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email).toLowerCase())

export default function ContactForm() {
  const formRef = useRef(null)
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState(null) // { type: 'success' | 'danger', msg }

  const clearInvalid = (e) => {
    if (e.target.matches('[required]')) e.target.classList.remove('is-invalid')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setResult(null)
    const form = formRef.current

    const required = form.querySelectorAll('input[required], textarea[required], select[required]')
    let hasEmpty = false
    required.forEach((el) => {
      if (!el.value || el.value.trim() === '') {
        el.classList.add('is-invalid')
        hasEmpty = true
      }
    })
    if (hasEmpty) {
      setResult({ type: 'danger', msg: 'Por favor completa todos los campos obligatorios.' })
      return
    }

    const emailInput = form.querySelector('input[name="user_email"]')
    if (emailInput && !isValidEmail(emailInput.value.trim())) {
      emailInput.classList.add('is-invalid')
      setResult({ type: 'danger', msg: 'El correo no es válido.' })
      return
    }

    setLoading(true)
    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form, PUBLIC_KEY)
      setResult({ type: 'success', msg: '✅ ¡Gracias! Tu mensaje fue enviado correctamente.' })
      form.reset()
    } catch (err) {
      setResult({
        type: 'danger',
        msg: '❌ Error al enviar: ' + (err?.text || 'Intenta más tarde'),
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="contact-panel">
      <form id="contactForm" ref={formRef} onSubmit={handleSubmit} onInput={clearInvalid} noValidate>
        <div className="row">
          <div className="col-12">
            <h4 className="contact-panel__title" style={{ color: '#004062' }}>
              Asesoría
            </h4>
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
              <label className="label-radio mr-30">
                Todos
                <input type="radio" name="contact_pref" value="Todos" defaultChecked />
                <span className="radio-indicator"></span>
              </label>
              <label className="label-radio mr-30">
                Correo
                <input type="radio" name="contact_pref" value="Correo" />
                <span className="radio-indicator"></span>
              </label>
              <label className="label-radio">
                Celular
                <input type="radio" name="contact_pref" value="Celular" />
                <span className="radio-indicator"></span>
              </label>
            </div>

            <button type="submit" className="btn btn__secondary btn__block" disabled={loading}>
              <i className="fas fa-paper-plane"></i>
              <span>{loading ? 'Enviando…' : 'Enviar correo'}</span>
            </button>
            <div className="contact-result">
              {result && <div className={`alert alert-${result.type}`}>{result.msg}</div>}
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}
