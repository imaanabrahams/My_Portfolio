import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import Reveal from './Reveal.jsx'
import ArrowIcon from './ArrowIcon.jsx'
import { galleryItems } from '../data/content.js'
import '../styles/GallerySection.css'

function GalleryItem({ item, index, onOpen }) {
  return (
    <Reveal
      as="button"
      className="gallery-item"
      delay={(index % 3) * 100}
      aria-label={`Open ${item.label} image`}
      onClick={() => onOpen(index)}
    >
      <img src={item.src} alt={item.alt} loading="eager" className="gallery-img" />
      <div className="gallery-overlay">
        <span className="gallery-label">{item.label}</span>
        <span className="gallery-arrow" aria-hidden="true">
          <ArrowIcon size={20} />
        </span>
      </div>
    </Reveal>
  )
}

export default function GallerySection() {
  const [lightbox, setLightbox] = useState(false)
  const [index, setIndex] = useState(0)

  const item = galleryItems[index]

  const open = (i) => {
    setIndex(i)
    setLightbox(true)
  }

  const close = () => {
    setLightbox(false)
  }

  const prev = () => {
    setIndex((i) => (i - 1 + galleryItems.length) % galleryItems.length)
  }

  const next = () => {
    setIndex((i) => (i + 1) % galleryItems.length)
  }

  useEffect(() => {
    if (!lightbox) return

    const onKey = (event) => {
      if (event.key === 'Escape') setLightbox(false)
      if (event.key === 'ArrowLeft') prev()
      if (event.key === 'ArrowRight') next()
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)

    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = previousOverflow
    }
  }, [lightbox])

  return (
    <section id="gallery" className="gallery-section section">
      <div className="container container--wide">
        <Reveal className="section-head">
          <span className="section-kicker">Side quests</span>
          <h2 className="section-title">Gallery</h2>
          <p className="section-lead">
            The interests and hobbies that keep me curious outside of code.
          </p>
        </Reveal>

        <div className="gallery-grid">
          {galleryItems.map((galleryItem, i) => (
            <GalleryItem key={galleryItem.alt} item={galleryItem} index={i} onOpen={open} />
          ))}
        </div>
      </div>

      {lightbox &&
        createPortal(
          <div
            className="modal-backdrop lightbox"
            role="dialog"
            aria-modal="true"
            aria-label="Image lightbox"
            onClick={(event) => {
              if (event.target === event.currentTarget) close()
            }}
          >
            <button className="lightbox-nav prev" aria-label="Previous image" onClick={prev}>‹</button>

            <figure className="lightbox-content" onClick={(event) => event.stopPropagation()}>
              <img src={item.src} alt={item.alt} />
              <figcaption>
                <h3>{item.label}</h3>
                <span>{index + 1} / {galleryItems.length}</span>
              </figcaption>
            </figure>

            <button className="lightbox-nav next" aria-label="Next image" onClick={next}>›</button>
            <button className="lightbox-close" aria-label="Close" onClick={close}>×</button>
          </div>,
          document.body
        )}
    </section>
  )
}
