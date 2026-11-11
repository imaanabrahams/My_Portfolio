import { useEffect, useRef, useState } from 'react'
import '../styles/NavBar.css'

const links = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#work', label: 'Work' },
  { href: '#certifications', label: 'Certifications' },
]

const leftLinks = links.slice(0, 2)
const rightLinks = links.slice(2)

const socials = [
  { href: 'https://www.linkedin.com/in/imaanabrahams8', label: 'LinkedIn' },
  { href: 'https://github.com/imaanabrahams', label: 'GitHub' },
  { href: 'mailto:imaanabrahams15@gmail.com', label: 'Email' },
]

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const previousOverflow = useRef('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    document.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => document.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onKey = (event) => {
      if (event.key === 'Escape' && menuOpen) setMenuOpen(false)
    }
    const onResize = () => {
      if (menuOpen && !window.matchMedia('(max-width: 810px)').matches) {
        setMenuOpen(false)
      }
    }
    document.addEventListener('keydown', onKey)
    window.addEventListener('resize', onResize)
    return () => {
      document.removeEventListener('keydown', onKey)
      window.removeEventListener('resize', onResize)
    }
  }, [menuOpen])

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
    <header className={`navbar${scrolled ? ' is-scrolled' : ''}`}>
      <nav className="nav-bar" aria-label="Main navigation">
        <ul className="nav-links nav-links--left">
          {leftLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="nav-link">{link.label}</a>
            </li>
          ))}
        </ul>

        <a href="#home" className="nav-logo" aria-label="Imaan Abrahams — back to top">
          IA ؛༊
        </a>

        <ul className="nav-links nav-links--right">
          {rightLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="nav-link">{link.label}</a>
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

      <div className={`mobile-menu${menuOpen ? ' open' : ''}`} aria-hidden={!menuOpen}>
        <ul className="mobile-links">
          {links.map((link, i) => (
            <li key={link.href} style={{ transitionDelay: `${menuOpen ? 90 + i * 55 : 0}ms` }}>
              <a href={link.href} onClick={() => setMenuOpen(false)}>{link.label}</a>
            </li>
          ))}
          <li style={{ transitionDelay: `${menuOpen ? 90 + links.length * 55 : 0}ms` }}>
            <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          </li>
        </ul>
        <ul className="mobile-socials">
          {socials.map((social, i) => (
            <li key={social.href} style={{ transitionDelay: `${menuOpen ? 380 + i * 55 : 0}ms` }}>
              <a
                href={social.href}
                target={social.href.startsWith('http') ? '_blank' : undefined}
                rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              >
                {social.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}
