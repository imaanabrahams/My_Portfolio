import PageHero from '../components/PageHero.jsx'
import SkillsSection from '../components/SkillsSection.jsx'

export default function SkillsView() {
  return (
    <div>
      <PageHero
        title="Skills"
        subtitle="The tools, languages and technologies I use to turn ideas into working products."
      />
      <SkillsSection />
    </div>
  )
}
