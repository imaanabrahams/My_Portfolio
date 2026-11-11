import { useState } from 'react'
import Reveal from './Reveal.jsx'
import '../styles/ContactSection.css'

const EMAIL = 'imaanabrahams15@gmail.com'

export default function ContactSection() {
  const [copied, setCopied] = useState(false)

  const mailtoHref = `mailto:${EMAIL}?subject=${encodeURIComponent('Hello Imaan')}`

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
                >
                  →
                </a>
              </li>
              <li className="contact-item">
                <span className="contact-icon">📄</span>
                <div>
                  <span className="contact-label">Resume</span>
                  <a
                    href="./Imaan_Abrahams_CV.pdf"
                    download="Imaan_Abrahams_CV.pdf"
                  >
                    Download my CV
                  </a>
                </div>
                <a
                  className="contact-arrow"
                  href="./Imaan_Abrahams_CV.pdf"
                  download="Imaan_Abrahams_CV.pdf"
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
