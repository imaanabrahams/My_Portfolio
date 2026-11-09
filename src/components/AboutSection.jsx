import Reveal from './Reveal.jsx'
import '../styles/AboutSection.css'

const interests = [
  '🎨 Web Development',
  '🔐 Cybersecurity',
  '🖨️ 3D Printing & Maker Culture',
  '💻 Technology',
  '✨ Creative Design',
  '👩‍🍳 Personal Chef',
  '🌿 Gardening',
  '📚 Continuous Learning',
]

export default function AboutSection() {
  return (
    <section id="about" className="about-section section">
      <div className="about-content">
        <Reveal className="about-card">
          <h3>Who Am I?</h3>
          <p>
            My name is Imaan Abrahams. I am an aspiring Web Developer with a
            passion for technology, creativity and learning. I am dedicated to
            building my skills and creating projects that make a positive impact.
          </p>
          <p>
            I have a strong interest in cybersecurity and enjoy learning how
            systems are protected against cyber threats. I am also fascinated by the world of 3D printing and maker culture, and I enjoy exploring new technologies and tools that allow me to bring my ideas to life.
          </p>
          <p>
            I am also a creative individual who enjoys exploring design and
            innovation in my projects. I believe that technology and creativity go
            hand in hand, and I strive to bring a unique perspective to my work.
          </p>
          <p>
            I am currently pursuing a career in Web Development, and I approach
            each project with a focus on quality, innovation and meaningful
            impact. My goal is to contribute thoughtful, well-crafted solutions to
            the tech community while continuing to learn and grow.
          </p>
        </Reveal>

        <Reveal className="about-card" delay={150}>
          <h3>My Interests</h3>
          <ul className="interests-list">
            {interests.map((interest) => (
              <li key={interest}>{interest}</li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
