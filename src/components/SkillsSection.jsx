import Reveal from './Reveal.jsx'
import { skills, learningStatus } from '../data/content.js'
import '../styles/SkillsSection.css'

const statusLabels = {
  completed: 'Completed',
  learning: 'Learning',
  exploring: 'Exploring',
  ongoing: 'Ongoing',
}

export default function SkillsSection() {
  return (
    <section id="skills" className="skills-section section">
      <div className="container">
        <Reveal className="section-head">
          <span className="section-kicker">Tools of the trade</span>
          <h2 className="section-title">Skills</h2>
          <p className="section-lead">
            The languages, frameworks and platforms I use to build for the web —
            and the ones I am actively levelling up right now.
          </p>
        </Reveal>

        <div className="skills-grid">
          {skills.map((group, i) => (
            <Reveal as="article" key={group.category} className="skill-group" delay={(i % 3) * 90}>
              <h3>{group.category}</h3>
              <p>{group.description}</p>
              <ul className="skill-list">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        <Reveal className="learning-status" delay={120}>
          <div className="learning-status-head">
            <h3>Learning journey</h3>
            <span className="learning-live">
              <span className="learning-live-dot" aria-hidden="true"></span>
              Always learning
            </span>
          </div>
          <ul className="status-list">
            {learningStatus.map((item) => (
              <li key={item.skill} className="status-row">
                <span className="status-skill">{item.skill}</span>
                <span className={`status status--${item.status}`}>
                  {statusLabels[item.status]}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
