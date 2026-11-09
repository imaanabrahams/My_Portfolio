import Reveal from './Reveal.jsx'
import { timelineItems } from '../data/content.js'
import '../styles/TimelineSection.css'

export default function TimelineSection() {
  return (
    <section id="timeline" className="timeline-section section">
      <h2 className="section-title">My Journey</h2>
      <div className="section-title-underline"></div>

      <div className="timeline">
        {timelineItems.map((item, index) => (
          <Reveal key={item.title} className="timeline-item" delay={index * 90}>
            <div className="timeline-dot"></div>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
            <span className="timeline-index">{String(index + 1).padStart(2, '0')}</span>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
