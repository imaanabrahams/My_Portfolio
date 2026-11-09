import PageHero from '../components/PageHero.jsx'
import ProjectsSection from '../components/ProjectsSection.jsx'
import LearningSection from '../components/LearningSection.jsx'

export default function ProjectsView() {
  return (
    <div>
      <PageHero
        title="Projects"
        subtitle="Full-stack builds, front-end experiments and learning exercises — all shipped and ready to explore."
      />
      <ProjectsSection />
      <LearningSection />
    </div>
  )
}
