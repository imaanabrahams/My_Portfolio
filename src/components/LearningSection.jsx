import ProjectCard from './ProjectCard.jsx'
import Reveal from './Reveal.jsx'
import { learningProjects } from '../data/projects.js'
import '../styles/LearningSection.css'

export default function LearningSection() {
  return (
    <section id="learning" className="learning-section section">
      <div className="container container--wide">
        <Reveal className="section-head">
          <span className="section-kicker">Practice makes progress</span>
          <h2 className="section-title">Learning projects</h2>
          <p className="section-lead">
            Exercises, experiments and coursework that keep the skills sharp —
            from Vue components to Node APIs and SQL schemas.
          </p>
        </Reveal>

        <div className="learning-grid">
          {learningProjects.map((project, i) => (
            <Reveal key={project.id} delay={(i % 4) * 80}>
              <ProjectCard project={project} variant="compact" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
