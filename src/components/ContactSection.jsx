import { useState } from 'react'
import Reveal from './Reveal.jsx'
import '../styles/ContactSection.css'

const EMAIL = 'imaanabrahams15@gmail.com'
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/moeeoyow'

const emailOk = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
const messageOk = (value) => value.trim().length >= 10

const getErrors = (values) => ({
  name: values.name.trim() ? '' : 'Please enter your name.',
  email: values.email.trim()
    ? emailOk(values.email)
      ? ''
      : 'Please enter a valid email address.'
    : 'Please enter your email.',
  message: values.message.trim()
    ? messageOk(values.message)
      ? ''
      : 'Your message should be at least 10 characters.'
    : 'Please write a message.',
})

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({ name: '', email: '', message: '' })
  const [touched, setTouched] = useState({ name: false, email: false, message: false })
  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const [errorText, setErrorText] = useState('')
  const [copied, setCopied] = useState(false)

  const updateField = (field) => (event) => {
    const value = event.target.value
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  const validateField = (field) => {
    const next = getErrors(form)
    setErrors((prev) => (field === 'all' ? next : { ...prev, [field]: next[field] }))
  }

  const onBlur = (field) => {
    setTouched((prev) => ({ ...prev, [field]: true }))
    validateField(field)
  }

  const mailtoHref = `mailto:${EMAIL}?subject=${encodeURIComponent(
    `Portfolio enquiry from ${form.name || 'your website'}`
  )}&body=${encodeURIComponent(
    `${form.message}\n\n— ${form.name}${form.email ? ` (${form.email})` : ''}`
  )}`

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL)
      setCopied(true)
      window.setTimeout(() => {
        setCopied(false)
      }, 2000)
    } catch {
      /* clipboard unavailable (non-secure context) */
    }
  }

  const submit = async (event) => {
    event.preventDefault()
    const next = getErrors(form)
    setErrors(next)
    setTouched({ name: true, email: true, message: true })
    if (next.name || next.email || next.message) return

    setStatus('sending')
    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          _subject: `Portfolio enquiry from ${form.name}`,
          _replyto: form.email,
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      })
      if (!response.ok) throw new Error(`Formspree responded ${response.status}`)
      setStatus('success')
    } catch {
      setStatus('error')
      setErrorText('The message could not be delivered online. Please use the email fallback below.')
    }
  }

  const resetForm = () => {
    setForm({ name: '', email: '', message: '' })
    setTouched({ name: false, email: false, message: false })
    setStatus('idle')
  }

  return (
    <section id="contact" className="contact-section section">
      <Reveal className="contact-container">
        <form className="contact-form" onSubmit={submit} noValidate>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              value={form.name}
              onChange={updateField('name')}
              type="text"
              name="name"
              required
              aria-invalid={touched.name && !!errors.name}
              onBlur={() => onBlur('name')}
            />
            {touched.name && errors.name && (
              <p className="field-error" role="alert">{errors.name}</p>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              value={form.email}
              onChange={updateField('email')}
              type="email"
              name="email"
              required
              aria-invalid={touched.email && !!errors.email}
              onBlur={() => onBlur('email')}
            />
            {touched.email && errors.email && (
              <p className="field-error" role="alert">{errors.email}</p>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              value={form.message}
              onChange={updateField('message')}
              name="message"
              rows="6"
              required
              aria-invalid={touched.message && !!errors.message}
              onBlur={() => onBlur('message')}
            ></textarea>
            {touched.message && errors.message && (
              <p className="field-error" role="alert">{errors.message}</p>
            )}
          </div>

          {status === 'success' && (
            <div className="form-success" role="status">
              <p>
                Thank you {form.name || 'so much'}! Your message has been sent. I'll get back to you soon. 💌
              </p>
              <button type="button" className="btn-secondary btn-reset" onClick={resetForm}>
                Send another message
              </button>
            </div>
          )}

          {status === 'error' && (
            <div className="form-error" role="alert">
              <p>{errorText}</p>
              <a href={mailtoHref}>✉️ Email me directly instead</a>
            </div>
          )}

          {(status === 'idle' || status === 'sending') && (
            <>
              <button type="submit" className="btn" disabled={status === 'sending'}>
                <span>{status === 'sending' ? 'Sending…' : 'Send Message'}</span>
              </button>
              <p className="form-hint">
                Prefer email? <a href={mailtoHref}>{EMAIL}</a>
              </p>
            </>
          )}
        </form>

        <aside className="contact-info">
          <h3>Other Ways to Connect</h3>
          <p>I usually reply within a day — pick whatever feels easiest for you.</p>
          <ul className="contact-list">
            <li className="contact-item">
              <span className="contact-icon">📧</span>
              <div>
                <span className="contact-label">Email</span>
                <a href={mailtoHref}>{EMAIL}</a>
              </div>
              <button
                className={`quick-copy${copied ? ' copied' : ''}`}
                aria-label={`Copy ${EMAIL}`}
                onClick={copyEmail}
              >
                {copied ? 'Copied!' : 'Copy'}
              </button>
            </li>
            <li className="contact-item">
              <span className="contact-icon">💼</span>
              <div>
                <span className="contact-label">LinkedIn</span>
                <a
                  href="https://www.linkedin.com/in/imaanabrahams8"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  imaanabrahams8
                </a>
              </div>
              <a
                className="contact-arrow"
                href="https://www.linkedin.com/in/imaanabrahams8"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open LinkedIn"
              >→</a>
            </li>
            <li className="contact-item">
              <span className="contact-icon">🐙</span>
              <div>
                <span className="contact-label">GitHub</span>
                <a href="https://github.com/imaanabrahams" target="_blank" rel="noopener noreferrer">
                  imaanabrahams
                </a>
              </div>
              <a
                className="contact-arrow"
                href="https://github.com/imaanabrahams"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open GitHub"
              >→</a>
            </li>
          </ul>
        </aside>
      </Reveal>
    </section>
  )
}
