import Reveal from './Reveal.jsx'
import { certifications, badges } from '../data/certifications.js'
import '../styles/CertificationsSection.css'

const sortedCertifications = [...certifications].sort(
  (a, b) => new Date(a.date) - new Date(b.date),
)

export default function CertificationsSection() {
  return (
    <section id="certifications" className="certifications-section section section--soft">
      <div className="container">
        <Reveal className="section-head">
          <span className="section-kicker">Proof of practice</span>
          <h2 className="section-title">Certifications</h2>
          <p className="section-lead">
            Courses and credentials completed through Cisco Networking Academy,
            Coursera and SCRUMstudy — the paper trail of a curious mind.
          </p>
        </Reveal>

        <div className="cert-grid">
          {sortedCertifications.map((cert, i) => (
            <Reveal as="article" key={cert.id} className="cert-card" delay={(i % 3) * 90}>
              <a
                href={cert.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="cert-preview"
                aria-label={`View ${cert.title} certificate`}
              >
                <img src={cert.image} alt={`${cert.title} certificate`} loading="eager" />
                <span className="cert-preview-open">View certificate ↗</span>
              </a>
              <div className="cert-body">
                <h3>{cert.title}</h3>
                <p className="cert-issuer">
                  {cert.issuer} &middot; {cert.provider}
                </p>
                <div className="cert-meta">
                  <span>{cert.date}</span>
                  <span className="cert-id">ID: {cert.certId}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="badges-head">
          <h3>Digital badges</h3>
          <p>Open badges earned along the way — compact proof of a skill learned.</p>
        </Reveal>

        <div className="badge-grid">
          {badges.map((badge) => (
            <Reveal
              as="a"
              key={badge.id}
              className="badge-card"
              href={badge.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${badge.title} badge details`}
            >
              <img src={badge.image} alt={`${badge.title} badge`} loading="lazy" />
              <div className="badge-info">
                <h4>{badge.title}</h4>
                <p className="badge-issuer">{badge.issuer}</p>
                <p className="badge-meta">
                  {badge.provider} &middot; {badge.date}
                </p>
              </div>
              <span className="badge-open" aria-hidden="true">↗</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
