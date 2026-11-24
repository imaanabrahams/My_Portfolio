import { useEffect, useRef } from 'react'
import '../styles/ContactReveal.css'

const KEYBOARD_STEP = 24
const FOLLOW_EASE = 0.14

export default function ContactReveal() {
  const year = new Date().getFullYear()
  const catRef = useRef(null)

  useEffect(() => {
    const cat = catRef.current
    if (!cat) return undefined
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined

    let x = 0
    let y = 0
    let targetX = 0
    let targetY = 0
    let frame = 0

    const clamp = (value, min, max) => Math.min(max, Math.max(min, value))

    const limits = () => ({
      maxX: Math.max(0, (window.innerWidth - cat.offsetWidth) / 2),
      maxY: Math.max(0, (window.innerHeight - cat.offsetHeight) / 2),
    })

    const apply = () => {
      cat.style.setProperty('--cat-x', `${x}px`)
      cat.style.setProperty('--cat-y', `${y}px`)
    }

    const tick = () => {
      x += (targetX - x) * FOLLOW_EASE
      y += (targetY - y) * FOLLOW_EASE

      if (Math.abs(targetX - x) < 0.5 && Math.abs(targetY - y) < 0.5) {
        x = targetX
        y = targetY
        frame = 0
      } else {
        frame = window.requestAnimationFrame(tick)
      }

      apply()
    }

    const schedule = () => {
      if (!frame) frame = window.requestAnimationFrame(tick)
    }

    const handlePointerMove = (event) => {
      const { maxX, maxY } = limits()
      targetX = clamp(event.clientX - window.innerWidth / 2, -maxX, maxX)
      targetY = clamp(event.clientY - window.innerHeight / 2, -maxY, maxY)
      schedule()
    }

    const handleKeyDown = (event) => {
      const { maxX, maxY } = limits()
      const moves = {
        ArrowLeft: [-KEYBOARD_STEP, 0],
        ArrowRight: [KEYBOARD_STEP, 0],
        ArrowUp: [0, -KEYBOARD_STEP],
        ArrowDown: [0, KEYBOARD_STEP],
      }
      const move = moves[event.key]
      if (!move) return

      event.preventDefault()
      targetX = clamp(targetX + move[0], -maxX, maxX)
      targetY = clamp(targetY + move[1], -maxY, maxY)
      schedule()
    }

    const handleResize = () => {
      const { maxX, maxY } = limits()
      targetX = clamp(targetX, -maxX, maxX)
      targetY = clamp(targetY, -maxY, maxY)
      x = clamp(x, -maxX, maxX)
      y = clamp(y, -maxY, maxY)
      apply()
    }

    window.addEventListener('pointermove', handlePointerMove, { passive: true })
    window.addEventListener('resize', handleResize)
    cat.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('pointermove', handlePointerMove)
      window.removeEventListener('resize', handleResize)
      cat.removeEventListener('keydown', handleKeyDown)
      if (frame) window.cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <footer className="footer-reveal" aria-label="Footer">
      <img
        ref={catRef}
        className="footer-cat"
        src="./jumpingluna-cat.apng"
        role="img"
        aria-label="Luna follows your cursor, or use the arrow keys to move her"
        tabIndex={0}
        loading="eager"
      />

      <div className="footer-inner">
        <p className="footer-thanks">thank you</p>

        <p className="footer-copy">
          &copy; {year} Imaan Abrahams &middot; Full-Stack Web Developer
        </p>
      </div>
    </footer>
  )
}
