import PageHero from '../components/PageHero.jsx'
import AboutSection from '../components/AboutSection.jsx'
import TimelineSection from '../components/TimelineSection.jsx'

export default function AboutView() {
  return (
    <div>
      <PageHero
        title="About Me"
        subtitle="The player behind the portfolio: where I started, what I love building, and how I keep levelling up."
      />
      <AboutSection />
      <TimelineSection />
    </div>
  )
}
