import { useProject } from '../context/ProjectContext.jsx'
import ArrowIcon from './ArrowIcon.jsx'
import '../styles/ProjectCard.css'

export default function ProjectCard({ project, variant = 'stack', index = 0 }) {
  const { openProject } = useProject()

  const onKey = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      openProject(project)
    }
  }

  if (variant === 'compact') {
    return (
      <article className="mini-card">
        <div className="mini-top">
          <span className="mini-icon" aria-hidden="true">{project.icon}</span>
          <button
            className="mini-open"
            aria-label={`Open details for ${project.title}`}
            onClick={() => openProject(project)}
          >
            <ArrowIcon size={20} />
          </button>
        </div>
        <h3>{project.title}</h3>
        <p className="mini-tagline">{project.tagline}</p>
        <div className="mini-tech">
          {project.technologies.slice(0, 4).map((tech) => (
            <span key={tech} className="tech-chip">{tech}</span>
          ))}
        </div>
        <div className="mini-links">
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              GitHub ↗
            </a>
          )}
          {project.demoUrl && (
            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
              Live demo ↗
            </a>
          )}
        </div>
      </article>
    )
  }

  return (
    <article
      className="stack-card"
      style={{ '--stack-index': index }}
      role="button"
      tabIndex={0}
      aria-label={`Open details for ${project.title}`}
      onClick={() => openProject(project)}
      onKeyDown={onKey}
    >
      <div className="stack-media">
        <img
          src={project.screenshot}
          alt={`${project.title} screenshot`}
          loading="eager"
        />
        {project.featured && <span className="stack-badge">Featured</span>}
      </div>

      <div className="stack-body">
        <div className="stack-head">
          <span className="stack-year">{project.year}</span>
          <h3>{project.title}</h3>
          <p className="stack-tagline">{project.tagline}</p>
        </div>

        <p className="stack-desc">{project.description}</p>

        <div className="stack-tech">
          {project.technologies.slice(0, 5).map((tech) => (
            <span key={tech} className="tech-chip">{tech}</span>
          ))}
          {project.technologies.length > 5 && (
            <span className="stack-more">+{project.technologies.length - 5} more</span>
          )}
        </div>

        <div className="stack-actions">
          <div className="stack-links">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(event) => event.stopPropagation()}
              >
                Live demo ↗
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(event) => event.stopPropagation()}
              >
                GitHub ↗
              </a>
            )}
          </div>
          <span className="stack-cta">
            View project
            <ArrowIcon size={26} />
          </span>
        </div>
      </div>
    </article>
  )
}
