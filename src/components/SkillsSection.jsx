import Reveal from './Reveal.jsx'
import { skills } from '../data/content.js'
import '../styles/SkillsSection.css'

export default function SkillsSection() {
  return (
    <section className="skills-section section">
      <div className="skills-container">
        {skills.map((group, i) => (
          <Reveal as="article" key={group.category} className="skill-group" delay={i * 90}>
            <h3>{group.category}</h3>
            <p>{group.description}</p>
            <ul className="skill-list">
              {group.items.map((item, itemIndex) => (
                <li key={item} style={{ '--i': itemIndex }}>{item}</li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
