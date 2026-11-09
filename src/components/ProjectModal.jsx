import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { useProject } from '../context/ProjectContext.jsx'
import '../styles/ProjectModal.css'

export default function ProjectModal() {
  const { activeProject, closeProject } = useProject()
  const el = useRef(null)

  useEffect(() => {
    if (!activeProject) return

    const onKey = (event) => {
      if (event.key === 'Escape') closeProject()
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    const frame = requestAnimationFrame(() => el.current?.focus())

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKey)
      cancelAnimationFrame(frame)
    }
  }, [activeProject, closeProject])

  if (!activeProject) return null

  return createPortal(
    <div
      ref={el}
      className="modal-backdrop"
      role="dialog"
      aria-modal="true"
      aria-label="Project details"
      tabIndex={-1}
      onClick={(event) => {
        if (event.target === event.currentTarget) closeProject()
      }}
    >
      <div className="modal-card" onClick={(event) => event.stopPropagation()}>
        <button className="modal-close" aria-label="Close" onClick={closeProject}>×</button>

        {activeProject.screenshot ? (
          <div className="modal-media">
            <img
              src={activeProject.screenshot}
              alt={`${activeProject.title} screenshot`}
              loading="lazy"
            />
            {activeProject.featured && <span className="modal-badge">Featured Project</span>}
          </div>
        ) : (
          <div className="modal-icon">{activeProject.icon}</div>
        )}

        <div className="modal-body">
          <div className="modal-head">
            <h3>{activeProject.title}</h3>
            {activeProject.tagline && (
              <span className="modal-tagline">{activeProject.tagline}</span>
            )}
          </div>

          <p className="modal-description">{activeProject.description}</p>

          {activeProject.features && activeProject.features.length > 0 && (
            <ul className="modal-features">
              {activeProject.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          )}

          {activeProject.demoLogin && (
            <p className="modal-demo-login">
              Demo login: <code>{activeProject.demoLogin}</code>
            </p>
          )}

          <div className="modal-tech">
            {activeProject.technologies.map((tech) => (
              <span key={tech} className="tech-chip">{tech}</span>
            ))}
          </div>

          <div className="modal-actions">
            {activeProject.demoUrl && (
              <a
                href={activeProject.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
              >
                Live Demo
              </a>
            )}
            <a
              href={activeProject.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              GitHub
            </a>
            {activeProject.repoLinks?.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="modal-link"
              >
                {link.label} →
              </a>
            ))}
            <button type="button" className="modal-close-bottom" onClick={closeProject}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.body
  )
}
