import Reveal from './Reveal.jsx'
import { timelineItems } from '../data/content.js'
import '../styles/TimelineSection.css'

export default function TimelineSection() {
  return (
    <section id="journey" className="timeline-section section section--soft">
      <div className="container">
        <Reveal className="section-head">
          <span className="section-kicker">The road so far</span>
          <h2 className="section-title">My journey</h2>
        </Reveal>

        <div className="timeline">
          {timelineItems.map((item, index) => (
            <Reveal key={item.title} className="timeline-item" delay={(index % 3) * 100}>
              <span className="timeline-index">{String(index + 1).padStart(2, '0')}</span>
              <div className="timeline-body">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
