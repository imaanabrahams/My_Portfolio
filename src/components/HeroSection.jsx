import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Reveal from './Reveal.jsx'
import '../styles/HeroSection.css'

const CV_URL = 'https://docs.google.com/document/d/1HC3SW84Tw-13qk110TKF36Pa_cspSIgCRWPjJqxAXmo/export?format=pdf'

const phrases = [
  'Full-Stack Web Developer',
  'Vue.js Enthusiast',
  'Cybersecurity Explorer',
  'UI/UX Designer',
  'Problem Solver',
]

export default function HeroSection() {
  const [typed, setTyped] = useState('')
  const stateRef = useRef({
    phraseIndex: 0,
    charIndex: 0,
    state: 'typing',
    acc: 0,
    lastFrame: 0,
  })
  const rafRef = useRef(null)

  useEffect(() => {
    const s = stateRef.current
    const TYPE_SPEED = 40
    const DELETE_SPEED = 26
    const HOLD_TIME = 1400

    s.lastFrame = performance.now()

    const loop = (timestamp) => {
      rafRef.current = requestAnimationFrame(loop)
      const dt = Math.min(timestamp - s.lastFrame, 100)
      s.lastFrame = timestamp
      s.acc += dt

      const current = phrases[s.phraseIndex]

      if (s.state === 'typing') {
        const steps = Math.floor(s.acc / TYPE_SPEED)
        if (steps > 0) {
          s.acc %= TYPE_SPEED
          s.charIndex = Math.min(s.charIndex + steps, current.length)
          setTyped(current.slice(0, s.charIndex))
          if (s.charIndex === current.length) {
            s.state = 'holding'
            s.acc = 0
          }
        }
      } else if (s.state === 'holding') {
        if (s.acc >= HOLD_TIME) {
          s.state = 'deleting'
          s.acc = 0
        }
      } else {
        const steps = Math.floor(s.acc / DELETE_SPEED)
        if (steps > 0) {
          s.acc %= DELETE_SPEED
          s.charIndex = Math.max(s.charIndex - steps, 0)
          setTyped(current.slice(0, s.charIndex))
          if (s.charIndex === 0) {
            s.state = 'typing'
            s.acc = 0
            s.phraseIndex = (s.phraseIndex + 1) % phrases.length
          }
        }
      }
    }

    rafRef.current = requestAnimationFrame(loop)

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <section className="hero" id="hero">
      <div className="hero-blobs" aria-hidden="true">
        <span className="blob blob-1"></span>
        <span className="blob blob-2"></span>
        <span className="blob blob-3"></span>
      </div>

      <div className="hero-content">
        <Reveal as="p" delay={60} className="hero-greeting">Hello World 👋 I'm</Reveal>
        <Reveal as="h1" delay={120} className="fade-in">
          <span className="name">Imaan Abrahams</span>
        </Reveal>
        <Reveal as="h3" delay={200} className="typing">
          <span className="typed-text">{typed}</span>
          <span className="typewriter-cursor" aria-hidden="true">|</span>
        </Reveal>
        <Reveal as="p" delay={280} className="hero-sub">
          Building modern, secure and thoughtful web experiences — one project at a time.
        </Reveal>

        <Reveal className="hero-stats" delay={360}>
          <div className="stat">
            <span className="stat-number">3+</span>
            <span className="stat-label">Full-Stack Projects</span>
          </div>
          <div className="stat">
            <span className="stat-number">8+</span>
            <span className="stat-label">Learning Tracks</span>
          </div>
          <div className="stat">
            <span className="stat-number">10+</span>
            <span className="stat-label">Tech Tools</span>
          </div>
        </Reveal>

        <Reveal className="hero-buttons" delay={440}>
          <Link to="/projects" className="btn">View My Projects</Link>
          <Link to="/contact" className="btn-secondary">Get In Touch</Link>
          <a href={CV_URL} className="btn-ghost">Download CV</a>
        </Reveal>
      </div>
    </section>
  )
}
