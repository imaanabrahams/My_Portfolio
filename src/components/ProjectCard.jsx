import { useProject } from '../context/ProjectContext.jsx'
import '../styles/ProjectCard.css'

export default function ProjectCard({ project }) {
  const { openProject } = useProject()

  const onKey = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      openProject(project)
    }
  }

  return (
    <article
      className="project-card zoom-in"
      role="button"
      tabIndex={0}
      aria-label={`Open details for ${project.title}`}
      onClick={() => openProject(project)}
      onKeyDown={onKey}
    >
      <span className="animal-peek" aria-hidden="true">{project.hoverAnimal}</span>

      {project.screenshot ? (
        <div className="card-media">
          <img
            src={project.screenshot}
            alt={`${project.title} screenshot`}
            loading="lazy"
          />
          {project.featured && <span className="card-badge">Featured</span>}
          <span className="card-open">View Details</span>
        </div>
      ) : (
        <div className="card-icon">{project.icon}</div>
      )}

      <div className="card-body">
        <h3>{project.title}</h3>
        <p className="card-tagline">{project.tagline}</p>
        <p className="card-description">{project.description}</p>

        <div className="card-tech">
          {project.technologies.slice(0, 5).map((tech) => (
            <span key={tech} className="tech-chip">{tech}</span>
          ))}
          {project.technologies.length > 5 && (
            <span className="tech-more">+{project.technologies.length - 5}</span>
          )}
        </div>

        <div className="card-actions">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
              onClick={(event) => event.stopPropagation()}
            >
              Live Demo
            </a>
          )}
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
            onClick={(event) => event.stopPropagation()}
          >
            GitHub
          </a>
          <button
            className="card-details"
            onClick={(event) => {
              event.stopPropagation()
              openProject(project)
            }}
          >
            Details →
          </button>
        </div>
      </div>
    </article>
  )
}
