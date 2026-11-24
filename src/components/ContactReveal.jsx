import { useEffect, useRef } from 'react'
import '../styles/ContactReveal.css'

const KEYBOARD_STEP = 24

export default function ContactReveal() {
  const year = new Date().getFullYear()
  const catRef = useRef(null)

  useEffect(() => {
    const cat = catRef.current
    if (!cat) return undefined
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined

    let x = 0
    let y = 0
    let startX = 0
    let startY = 0
    let startOffsetX = 0
    let startOffsetY = 0
    let dragging = false

    const clamp = (value, min, max) => Math.min(max, Math.max(min, value))

    const limits = () => ({
      maxX: Math.max(0, (window.innerWidth - cat.offsetWidth) / 2),
      maxY: Math.max(0, (window.innerHeight - cat.offsetHeight) / 2),
    })

    const apply = () => {
      cat.style.setProperty('--cat-x', `${x}px`)
      cat.style.setProperty('--cat-y', `${y}px`)
    }

    const handlePointerDown = (event) => {
      dragging = true
      startX = event.clientX
      startY = event.clientY
      startOffsetX = x
      startOffsetY = y
      cat.setPointerCapture(event.pointerId)
      cat.classList.add('is-dragging')
    }

    const handlePointerMove = (event) => {
      if (!dragging) return
      const { maxX, maxY } = limits()
      x = clamp(startOffsetX + event.clientX - startX, -maxX, maxX)
      y = clamp(startOffsetY + event.clientY - startY, -maxY, maxY)
      apply()
    }

    const endDrag = (event) => {
      if (!dragging) return
      dragging = false
      cat.classList.remove('is-dragging')
      if (cat.hasPointerCapture(event.pointerId)) {
        cat.releasePointerCapture(event.pointerId)
      }
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
      x = clamp(x + move[0], -maxX, maxX)
      y = clamp(y + move[1], -maxY, maxY)
      apply()
    }

    const handleResize = () => {
      const { maxX, maxY } = limits()
      x = clamp(x, -maxX, maxX)
      y = clamp(y, -maxY, maxY)
      apply()
    }

    cat.addEventListener('pointerdown', handlePointerDown)
    cat.addEventListener('pointermove', handlePointerMove)
    cat.addEventListener('pointerup', endDrag)
    cat.addEventListener('pointercancel', endDrag)
    cat.addEventListener('keydown', handleKeyDown)
    window.addEventListener('resize', handleResize)

    return () => {
      cat.removeEventListener('pointerdown', handlePointerDown)
      cat.removeEventListener('pointermove', handlePointerMove)
      cat.removeEventListener('pointerup', endDrag)
      cat.removeEventListener('pointercancel', endDrag)
      cat.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <footer className="footer-reveal" aria-label="Footer">
      <img
        ref={catRef}
        className="footer-cat"
        src="./jumpingluna-cat.webp"
        role="img"
        aria-label="Drag Luna around, or move her with the arrow keys"
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
