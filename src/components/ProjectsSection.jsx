import ProjectCard from './ProjectCard.jsx'
import { featuredProjects } from '../data/projects.js'
import '../styles/ProjectsSection.css'

export default function ProjectsSection() {
  return (
    <section id="work" className="work-section section section--soft">
      <div className="work-layout container container--wide">
        <header className="work-heading">
          <span className="section-kicker">Selected work</span>
          <h2 className="section-title">Projects</h2>
          <p className="work-note">
            Three full-stack builds. Open any card to explore the story, the stack
            and the live demo.
          </p>
        </header>

        <div className="work-cards">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} variant="stack" index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
