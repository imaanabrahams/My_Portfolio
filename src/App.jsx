import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import AppRoutes from './router/AppRoutes.jsx'
import { initTheme } from './hooks/useTheme.js'
import SiteLoader from './components/SiteLoader.jsx'
import NavBar from './components/NavBar.jsx'
import SiteFooter from './components/SiteFooter.jsx'
import ProjectModal from './components/ProjectModal.jsx'

export default function App() {
  const [loading, setLoading] = useState(true)
  const [progress, setProgress] = useState(0)
  const [showTop, setShowTop] = useState(false)
  const location = useLocation()

  useEffect(() => {
    initTheme()

    const onScroll = () => {
      const scrollTop = window.scrollY
      const height = document.documentElement.scrollHeight - window.innerHeight
      setProgress(height > 0 ? Math.min(100, (scrollTop / height) * 100) : 0)
      setShowTop(scrollTop > 600)
    }

    document.addEventListener('scroll', onScroll, { passive: true })
    onScroll()

    const timer = window.setTimeout(() => {
      setLoading(false)
    }, 1500)

    return () => {
      document.removeEventListener('scroll', onScroll)
      window.clearTimeout(timer)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <a href="#main" className="skip-link">Skip to content</a>
      <div className="scroll-progress" style={{ width: `${progress}%` }} />

      {loading ? (
        <SiteLoader />
      ) : (
        <div>
          <NavBar />
          <main key={location.pathname} id="main" className="game-page page-transition">
            <AppRoutes />
          </main>
          <SiteFooter />
          <button
            className={`to-top${showTop ? ' is-visible' : ''}`}
            aria-label="Back to top"
            onClick={scrollToTop}
          >
            ↑
          </button>
          <ProjectModal />
        </div>
      )}
    </>
  )
}
