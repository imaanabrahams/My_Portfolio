import ProjectCard from './ProjectCard.jsx'
import Reveal from './Reveal.jsx'
import { learningProjects } from '../data/projects.js'
import '../styles/LearningSection.css'

export default function LearningSection() {
  return (
    <section className="learning-section section">
      <Reveal className="learning-heading">
        <span className="game-label">SIDE QUESTS</span>
        <h2 className="section-title">Learning Projects</h2>
        <div className="section-title-underline"></div>
      </Reveal>

      <div className="learning-grid">
        {learningProjects.map((project, i) => (
          <Reveal key={project.id} delay={(i % 6) * 80}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </section>
  )
}
