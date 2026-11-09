import { Link } from 'react-router-dom'
import HeroSection from '../components/HeroSection.jsx'
import Reveal from '../components/Reveal.jsx'
import '../styles/HomeView.css'

const quests = [
  {
    to: '/about',
    icon: '📖',
    title: 'Origin Story',
    level: 'Level 1',
    text: 'Discover where the journey began and how I found my way into tech.',
  },
  {
    to: '/skills',
    icon: '⚡',
    title: 'Power-Ups',
    level: 'Level 2',
    text: 'Explore the tools and technologies I use to build for the web.',
  },
  {
    to: '/projects',
    icon: '🚀',
    title: 'Completed Quests',
    level: 'Level 3',
    text: 'See the full-stack projects, experiments and exercises I have shipped.',
  },
  {
    to: '/certifications',
    icon: '🏆',
    title: 'Achievements',
    level: 'Level 4',
    text: 'Unlocked Cisco Networking Academy certifications and skill progress.',
  },
  {
    to: '/gallery',
    icon: '🎨',
    title: 'Side Quests',
    level: 'Level 5',
    text: 'A glimpse of the interests and hobbies that keep me curious.',
  },
  {
    to: '/contact',
    icon: '🤝',
    title: 'Co-op Mode',
    level: 'Level 6',
    text: 'Ready to team up? Send a message and let us build something great.',
  },
]

export default function HomeView() {
  return (
    <div className="home-view">
      <HeroSection />

      <section className="quest-map section">
        <Reveal className="quest-heading">
          <span className="game-label">SELECT YOUR NEXT LEVEL</span>
          <h2 className="section-title">Quest Map</h2>
          <div className="section-title-underline"></div>
          <p className="quest-intro">
            Pick a path to explore. Every page is its own level.
          </p>
        </Reveal>

        <div className="quest-grid">
          {quests.map((quest, i) => (
            <Reveal
              as={Link}
              key={quest.to}
              to={quest.to}
              className="quest-card"
              delay={(i % 3) * 90}
            >
              <span className="quest-icon" aria-hidden="true">{quest.icon}</span>
              <span className="quest-level">{quest.level}</span>
              <h3>{quest.title}</h3>
              <p>{quest.text}</p>
              <span className="quest-cta">Enter level &rarr;</span>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  )
}
