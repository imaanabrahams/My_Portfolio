import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import '../styles/NavBar.css'

const links = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/skills', label: 'Skills' },
  { path: '/projects', label: 'Projects' },
  { path: '/certifications', label: 'Certifications' },
  { path: '/gallery', label: 'Gallery' },
  { path: '/contact', label: 'Contact' },
]

const MOBILE_QUERY = '(max-width: 768px)'

export default function NavBar() {
  const location = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const previousOverflow = useRef('')

  const isActive = (path) =>
    path === '/' ? location.pathname === '/' : location.pathname.startsWith(path)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)
    }
    document.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => document.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  useEffect(() => {
    const onKey = (event) => {
      if (event.key === 'Escape' && menuOpen) setMenuOpen(false)
    }
    const onPointerDown = (event) => {
      if (!menuOpen) return
      if (!event.target.closest('.nav-container')) setMenuOpen(false)
    }
    const onResize = () => {
      if (menuOpen && !window.matchMedia(MOBILE_QUERY).matches) {
        setMenuOpen(false)
      }
    }
    document.addEventListener('keydown', onKey)
    document.addEventListener('pointerdown', onPointerDown)
    window.addEventListener('resize', onResize)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('pointerdown', onPointerDown)
      window.removeEventListener('resize', onResize)
    }
  }, [menuOpen])

  // Freeze the page behind the dropdown so a stray touch cannot scroll it away.
  useEffect(() => {
    if (menuOpen) {
      previousOverflow.current = document.body.style.overflow
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = previousOverflow.current
    }
  }, [menuOpen])

  useEffect(() => {
    return () => {
      document.body.style.overflow = previousOverflow.current
    }
  }, [])

  return (
    <header className={`navbar${scrolled ? ' is-scrolled' : ''}`} id="navbar">
      <nav className="nav-container" aria-label="Main navigation">
        <div className="nav-logo">
          <Link to="/" aria-label="Back to home" onClick={() => setMenuOpen(false)}>
            <h1>IA ؛༊</h1>
          </Link>
        </div>

        <ul className={`nav-menu${menuOpen ? ' open' : ''}`}>
          {links.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                className={`nav-link${isActive(link.path) ? ' active' : ''}`}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="nav-tools">
          <button
            className={`hamburger${menuOpen ? ' open' : ''}`}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>
    </header>
  )
}
