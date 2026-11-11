import Reveal from './Reveal.jsx'
import ArrowIcon from './ArrowIcon.jsx'
import '../styles/AboutSection.css'

const interests = [
  { icon: '🎨', label: 'Web Development' },
  { icon: '🔐', label: 'Cybersecurity' },
  { icon: '🖨️', label: '3D Printing & Maker Culture' },
  { icon: '💻', label: 'Technology' },
  { icon: '✨', label: 'Creative Design' },
  { icon: '👩‍🍳', label: 'Personal Chef' },
  { icon: '🌿', label: 'Gardening' },
  { icon: '📚', label: 'Continuous Learning' },
]

export default function AboutSection() {
  return (
    <>
      <section className="about-teaser section section--soft" aria-label="Introduction">
        <div className="container">
          <Reveal className="teaser-banner">
            <div className="teaser-photo">
              <img
                src="./gallery/profile.jpg"
                alt="Imaan Abrahams"
                loading="eager"
                fetchPriority="high"
              />
            </div>
            <div className="teaser-copy">
              <span className="section-kicker">Hello, I&rsquo;m Imaan</span>
              <p className="teaser-line">
                An aspiring full-stack web developer with a love for security,
                design and making things that feel thoughtful.
              </p>
              <p className="teaser-sub">
                Based in South Africa · Open to junior developer roles and
                collaborative projects.
              </p>
            </div>
          </Reveal>

          <Reveal className="teaser-more" delay={140}>
            <a href="#about" className="about-more">
              More about me
              <ArrowIcon size={44} />
            </a>
          </Reveal>
        </div>
      </section>

      <section id="about" className="about-section section">
        <div className="container">
          <Reveal className="section-head">
            <span className="section-kicker">The person behind the pixels</span>
            <h2 className="section-title">Who I am</h2>
          </Reveal>

          <div className="about-grid">
            <Reveal className="about-copy">
              <p className="about-lead">
                My name is Imaan Abrahams. I am an aspiring Web Developer with a
                passion for technology, creativity and learning. I am dedicated to
                building my skills and creating projects that make a positive
                impact.
              </p>
              <p>
                I have a strong interest in cybersecurity and enjoy learning how
                systems are protected against cyber threats. I enjoy
                exploring new technologies and tools that allow me to bring my
                ideas to life.
              </p>
              <p>
                I am also a creative individual who enjoys exploring design and
                innovation in my projects. I believe that technology and
                creativity go hand in hand, and I strive to bring a unique
                perspective to my work.
              </p>
              <p>
                I am currently pursuing a career in Web Development, and I
                approach each project with a focus on quality, innovation and
                meaningful impact. My goal is to contribute thoughtful,
                well-crafted solutions to the tech community while continuing to
                learn and grow.
              </p>
            </Reveal>

            <Reveal className="about-interests" delay={140}>
              <h3 className="about-interests-title">Things I love</h3>
              <ul className="interests-list">
                {interests.map((interest) => (
                  <li key={interest.label}>
                    <span aria-hidden="true">{interest.icon}</span>
                    {interest.label}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}
