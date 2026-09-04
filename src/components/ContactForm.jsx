import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'

const SERVICE_ID = 'service_433wpss'
const TEMPLATE_ID = 'template_l61hkol'
const PUBLIC_KEY = 'yPAstTbHDQ-GCT7Lm'

export default function ContactForm({ title = 'Asesoría' }) {
  const formRef = useRef(null)
  const [status, setStatus] = useState(null) // 'success' | 'error' | null
  const [loading, setLoading] = useState(false)
  const [contactPref, setContactPref] = useState('Todos')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus(null)

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      setStatus('success')
      formRef.current.reset()
      setContactPref('Todos')
    } catch (err) {
      console.error(err)
      setStatus('error')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="contact-panel">
      <form ref={formRef} onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-12">
            <h4 className="contact-panel__title" style={{ color: '#004062' }}>{title}</h4>
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
              {['Todos', 'Correo', 'Celular'].map((opt) => (
                <label key={opt} className="label-radio mr-30">
                  {opt}
                  <input
                    type="radio"
                    name="contact_pref"
                    value={opt}
                    checked={contactPref === opt}
                    onChange={() => setContactPref(opt)}
                  />
                  <span className="radio-indicator"></span>
                </label>
              ))}
            </div>

            <button type="submit" className="btn btn__secondary btn__block" disabled={loading}>
              <i className="fas fa-paper-plane"></i>
              <span>{loading ? 'Enviando…' : 'Enviar correo'}</span>
            </button>

            {status === 'success' && (
              <div className="alert alert-success mt-10">✅ ¡Gracias! Tu mensaje fue enviado correctamente.</div>
            )}
            {status === 'error' && (
              <div className="alert alert-danger mt-10">❌ Error al enviar. Intenta más tarde.</div>
            )}
          </div>
        </div>
      </form>
    </div>
  )
}
