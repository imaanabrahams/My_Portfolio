import { useEffect, useState } from 'react'
import '../styles/BackToTop.css'

export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const updateVisibility = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', updateVisibility, { passive: true })
    updateVisibility()

    return () => window.removeEventListener('scroll', updateVisibility)
  }, [])

  return (
    <a
      className={`back-to-top${visible ? ' is-visible' : ''}`}
      href="#home"
      tabIndex={visible ? 0 : -1}
      aria-hidden={!visible}
    >
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path
          d="M12 19V5m-7 7 7-7 7 7"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span>Back to top</span>
    </a>
  )
}
