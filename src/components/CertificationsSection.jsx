import Reveal from './Reveal.jsx'
import { certifications } from '../data/certifications.js'
import { learningStatus } from '../data/content.js'
import '../styles/CertificationsSection.css'

const statusLabels = {
  completed: '✓ Completed',
  learning: '📚 Learning',
  exploring: '🔍 Exploring',
  ongoing: '🔄 Ongoing',
}

export default function CertificationsSection() {
  return (
    <section id="certifications" className="certifications-section section">
      <div className="certifications">
        <div className="cert-grid">
          {certifications.map((cert, i) => (
            <Reveal as="article" key={cert.id} className="cert-card" delay={(i % 3) * 100}>
              <a
                href={cert.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="cert-preview"
                aria-label={`View ${cert.title} certificate`}
              >
                <img src={cert.image} alt={`${cert.title} certificate`} loading="lazy" />
              </a>
              <div className="cert-body">
                <h4>{cert.title}</h4>
                <p className="cert-issuer">{cert.issuer} &middot; {cert.provider}</p>
                <p className="cert-date">Completed {cert.date}</p>
                <p className="cert-id">Cert ID: {cert.certId}</p>
                {cert.verifyUrl && (
                  <a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cert-verification-link"
                  >
                    Verify Credential
                  </a>
                )}
                <a
                  href={cert.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cert-link"
                >
                  View Certificate
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="learning-status">
        <span className="game-label">SKILL TREE</span>
        <h2 className="section-title">Learning Journey</h2>
        <div className="section-title-underline"></div>
        <div className="learning-table">
          <table>
            <thead>
              <tr>
                <th>Skill</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {learningStatus.map((item) => (
                <tr key={item.skill}>
                  <td>{item.skill}</td>
                  <td>
                    <span className={`status ${item.status}`}>
                      {statusLabels[item.status]}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
