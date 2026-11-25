import { useRef, useState } from 'react'
import Reveal from './Reveal.jsx'
import '../styles/ContactSection.css'

const EMAIL = 'imaanabrahams15@gmail.com'
const PHONE = '+27 611351411'
const PHONE_HREF = 'tel:+27611151411'
const CV_FILE = 'ImaanAbrahams_CV.pdf'

export default function ContactSection() {
  const [copied, setCopied] = useState(null)
  const copyTimer = useRef(null)

  const mailtoHref = `mailto:${EMAIL}?subject=${encodeURIComponent('Hello Imaan')}`

  const downloadCv = async (event) => {
    event.preventDefault()
    const cvUrl = new URL(CV_FILE, document.baseURI).href

    try {
      const response = await fetch(cvUrl)
      if (!response.ok) throw new Error(`CV request failed: ${response.status}`)

      const blob = await response.blob()
      const blobUrl = URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = blobUrl
      link.download = CV_FILE
      document.body.appendChild(link)
      link.click()
      link.remove()
      window.setTimeout(() => URL.revokeObjectURL(blobUrl), 1000)
    } catch {
      window.open(cvUrl, '_blank', 'noopener,noreferrer')
    }
  }

  const copyToClipboard = async (value, type) => {
    try {
      await navigator.clipboard.writeText(value)
      setCopied(type)
      window.clearTimeout(copyTimer.current)
      copyTimer.current = window.setTimeout(() => {
        setCopied(null)
      }, 2000)
    } catch {
      /* clipboard unavailable (non-secure context) */
    }
  }

  return (
    <section id="contact" className="contact-section">
      <div className="contact-surface">
        <div className="container">
          <Reveal className="section-head">
            <span className="section-kicker">Say hello</span>
            <h2 className="section-title">Ways to contact</h2>
            <p className="section-lead">
              Pick whatever feels easiest. I usually reply within a day.
            </p>
          </Reveal>

          <Reveal className="contact-panel">
            <ul className="contact-list">
              <li className="contact-item">
                <span className="contact-icon">📧</span>
                <div>
                  <span className="contact-label">Email</span>
                  <a href={mailtoHref}>{EMAIL}</a>
                </div>
                <button
                  className={`quick-copy${copied === 'email' ? ' copied' : ''}`}
                  aria-label={`Copy ${EMAIL}`}
                  onClick={() => copyToClipboard(EMAIL, 'email')}
                >
                  {copied === 'email' ? 'Copied!' : 'Copy'}
                </button>
              </li>
              <li className="contact-item">
                <span className="contact-icon">📱</span>
                <div>
                  <span className="contact-label">Phone</span>
                  <a href={PHONE_HREF}>{PHONE}</a>
                </div>
                <button
                  className={`quick-copy${copied === 'phone' ? ' copied' : ''}`}
                  aria-label={`Copy ${PHONE}`}
                  onClick={() => copyToClipboard(PHONE, 'phone')}
                >
                  {copied === 'phone' ? 'Copied!' : 'Copy'}
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
                >
                  →
                </a>
              </li>
              <li className="contact-item">
                <span className="contact-icon">📄</span>
                <div>
                  <span className="contact-label">Resume</span>
                  <a
                    href={`./${CV_FILE}`}
                    download={CV_FILE}
                    onClick={downloadCv}
                  >
                    Download my CV
                  </a>
                </div>
                <a
                  className="contact-arrow"
                  href={`./${CV_FILE}`}
                  download={CV_FILE}
                  onClick={downloadCv}
                  aria-label="Download resume"
                >
                  ↓
                </a>
              </li>
              <li className="contact-item">
                <span className="contact-icon">🐙</span>
                <div>
                  <span className="contact-label">GitHub</span>
                  <a
                    href="https://github.com/imaanabrahams"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    imaanabrahams
                  </a>
                </div>
                <a
                  className="contact-arrow"
                  href="https://github.com/imaanabrahams"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open GitHub"
                >
                  →
                </a>
              </li>
            </ul>
          </Reveal>
        </div>
      </div>
      <div className="contact-fade" aria-hidden="true"></div>
    </section>
  )
}
