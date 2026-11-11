import { useEffect, useState } from 'react'
import SiteLoader from './components/SiteLoader.jsx'
import NavBar from './components/NavBar.jsx'
import HeroSection from './components/HeroSection.jsx'
import AboutSection from './components/AboutSection.jsx'
import TimelineSection from './components/TimelineSection.jsx'
import SkillsSection from './components/SkillsSection.jsx'
import ProjectsSection from './components/ProjectsSection.jsx'
import LearningSection from './components/LearningSection.jsx'
import CertificationsSection from './components/CertificationsSection.jsx'
import GallerySection from './components/GallerySection.jsx'
import ContactSection from './components/ContactSection.jsx'
import ContactReveal from './components/ContactReveal.jsx'
import ProjectModal from './components/ProjectModal.jsx'

export default function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 1400)
    return () => window.clearTimeout(timer)
  }, [])

  return (
    <>
      <a href="#main" className="skip-link">Skip to content</a>

      {loading ? (
        <SiteLoader />
      ) : (
        <>
          <div className="page-content">
            <NavBar />
            <main id="main">
              <HeroSection />
              <AboutSection />
              <TimelineSection />
              <SkillsSection />
              <ProjectsSection />
              <LearningSection />
              <CertificationsSection />
              <GallerySection />
              <ContactSection />
            </main>
          </div>

          <ContactReveal />
          <ProjectModal />
        </>
      )}
    </>
  )
}
