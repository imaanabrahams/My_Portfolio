import ProjectCard from './ProjectCard.jsx'
import Reveal from './Reveal.jsx'
import { featuredProjects } from '../data/projects.js'
import '../styles/ProjectsSection.css'

export default function ProjectsSection() {
  return (
    <section id="projects" className="projects-section section">
      <div className="project-grid">
        {featuredProjects.map((project, i) => (
          <Reveal key={project.id} delay={i * 150}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </section>
  )
}
