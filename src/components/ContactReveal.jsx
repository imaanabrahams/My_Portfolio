import { useEffect, useRef } from 'react'
import '../styles/ContactReveal.css'

const KEYBOARD_STEP = 24

export default function ContactReveal() {
  const year = new Date().getFullYear()
  const videoRef = useRef(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return undefined
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
      maxX: Math.max(0, (window.innerWidth - video.offsetWidth) / 2),
      maxY: Math.max(0, (window.innerHeight - video.offsetHeight) / 2),
    })

    const apply = () => {
      video.style.setProperty('--cat-x', `${x}px`)
      video.style.setProperty('--cat-y', `${y}px`)
    }

    const handlePointerDown = (event) => {
      dragging = true
      startX = event.clientX
      startY = event.clientY
      startOffsetX = x
      startOffsetY = y
      video.setPointerCapture(event.pointerId)
      video.classList.add('is-dragging')
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
      video.classList.remove('is-dragging')
      if (video.hasPointerCapture(event.pointerId)) {
        video.releasePointerCapture(event.pointerId)
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

    video.addEventListener('pointerdown', handlePointerDown)
    video.addEventListener('pointermove', handlePointerMove)
    video.addEventListener('pointerup', endDrag)
    video.addEventListener('pointercancel', endDrag)
    video.addEventListener('keydown', handleKeyDown)
    window.addEventListener('resize', handleResize)

    return () => {
      video.removeEventListener('pointerdown', handlePointerDown)
      video.removeEventListener('pointermove', handlePointerMove)
      video.removeEventListener('pointerup', endDrag)
      video.removeEventListener('pointercancel', endDrag)
      video.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <footer className="footer-reveal" aria-label="Footer">
      <video
        ref={videoRef}
        className="footer-gif"
        src="./jumpingluna.mp4"
        poster="./jumpingluna-poster.webp"
        role="img"
        aria-label="Drag the Luna animation around, or move it with the arrow keys"
        tabIndex={0}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
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
