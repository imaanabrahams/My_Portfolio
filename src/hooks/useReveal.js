import { useLayoutEffect, useRef } from 'react'

const observer = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible')
        observer.unobserve(entry.target)
      }
    }
  },
  { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
)

export function useReveal(delay, direction) {
  const ref = useRef(null)

  useLayoutEffect(() => {
    const el = ref.current
    if (!el) return

    el.classList.add('reveal')
    if (direction) el.dataset.direction = direction
    if (typeof delay === 'number') {
      el.style.transitionDelay = `${delay}ms`
    }
    observer.observe(el)

    return () => {
      observer.unobserve(el)
    }
  }, [delay, direction])

  return ref
}
