import Reveal from './Reveal.jsx'
import '../styles/AboutSection.css'

export default function AboutSection() {
  return (
    <section id="about" className="about-section section">
      <div className="container">
        <Reveal className="section-head">
          <span className="section-kicker">The person behind the pixels</span>
          <h2 className="section-title">Who I am</h2>
        </Reveal>

        <div className="about-grid">
          <Reveal className="about-copy">
            <p className="about-lead">
              My name is Imaan Abrahams. I'm an aspiring full-stack web developer
              who came to tech after years in sales and hospitality — two fields
              that taught me how to listen, solve problems and create experiences
              people remember.
            </p>
            <p>
              That people-first approach shapes the way I build. I'm drawn to
              interactive websites and applications that feel personal, useful
              and a little unexpected, and I love exploring new tools to bring
              those ideas to life.
            </p>
            <p>
              I also have a strong interest in cybersecurity and enjoy learning
              how systems are protected against digital threats. Technology and
              creativity go hand in hand for me, and I aim to bring both to
              everything I make.
            </p>
            <p>
              I'm currently pursuing a career in web development, approaching
              every project with care, curiosity and a focus on meaningful
              impact — while continuing to learn and grow along the way.
            </p>
          </Reveal>

          <Reveal className="about-portrait" delay={140}>
            <img
              src="./gallery/profile.jpg"
              alt="Imaan Abrahams"
              loading="lazy"
            />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
