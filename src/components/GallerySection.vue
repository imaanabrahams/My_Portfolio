<script setup>
import { ref, watch, onMounted, onUnmounted } from 'vue'
import { galleryItems } from '../data/content.js'

const lightbox = ref(false)
const index = ref(0)

const item = () => galleryItems[index.value]

const open = (i) => {
  index.value = i
  lightbox.value = true
}

const close = () => {
  lightbox.value = false
}

const prev = () => {
  index.value = (index.value - 1 + galleryItems.length) % galleryItems.length
}

const next = () => {
  index.value = (index.value + 1) % galleryItems.length
}

const onKey = (event) => {
  if (!lightbox.value) return
  if (event.key === 'Escape') close()
  if (event.key === 'ArrowLeft') prev()
  if (event.key === 'ArrowRight') next()
}

let previousOverflow = ''

watch(lightbox, (open) => {
  if (open) {
    previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = previousOverflow
  }
})

onMounted(() => {
  window.addEventListener('keydown', onKey)
})

onUnmounted(() => {
  window.removeEventListener('keydown', onKey)
  document.body.style.overflow = previousOverflow
})
</script>

<template>
  <section class="gallery-section section">
    <h2 class="section-title">Interest Gallery</h2>
    <div class="section-title-underline"></div>

    <div class="gallery-grid">
      <button
        v-for="(item, i) in galleryItems"
        :key="item.alt"
        class="gallery-item"
        v-reveal="200"
        :aria-label="`Open ${item.label} image`"
        @click="open(i)"
      >
        <img
          :src="item.src"
          :alt="item.alt"
          loading="lazy"
          class="gallery-img"
        />
        <div class="gallery-overlay">
          <span class="gallery-zoom">🔍</span>
          <h3>{{ item.label }}</h3>
        </div>
      </button>
    </div>

    <Teleport to="body">
      <div
        v-if="lightbox"
        class="modal-backdrop lightbox"
        role="dialog"
        aria-modal="true"
        aria-label="Image lightbox"
        @click.self="close"
      >
        <button class="lightbox-nav prev" aria-label="Previous image" @click="prev">‹</button>

        <figure class="lightbox-content" @click.stop>
          <img :src="item().src" :alt="item().alt" />
          <figcaption>
            <h3>{{ item().label }}</h3>
            <span>{{ index + 1 }} / {{ galleryItems.length }}</span>
          </figcaption>
        </figure>

        <button class="lightbox-nav next" aria-label="Next image" @click="next">›</button>
        <button class="lightbox-close" aria-label="Close" @click="close">×</button>
      </div>
    </Teleport>
  </section>
</template>

<style scoped>
.gallery-section {
  background: var(--section-strip);
}

.gallery-grid {
  max-width: 1200px;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.gallery-item {
  position: relative;
  overflow: hidden;
  border: none;
  border-radius: 20px;
  box-shadow: var(--card-shadow);
  transition: var(--transition);
  height: 300px;
  cursor: pointer;
  background: var(--surface);
  padding: 0;
  font-family: inherit;
}

.gallery-item:hover,
.gallery-item:focus-visible {
  transform: translateY(-15px) scale(1.02);
  box-shadow: var(--card-shadow-hover);
}

.gallery-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  border-radius: 20px;
  transition: var(--transition);
}

.gallery-item:hover .gallery-img {
  transform: scale(1.1);
  filter: brightness(0.75);
}

.gallery-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(255, 139, 171, 0.85), rgba(200, 213, 185, 0.85));
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  opacity: 0;
  transition: var(--transition);
  border-radius: 20px;
}

.gallery-item:hover .gallery-overlay,
.gallery-item:focus-visible .gallery-overlay {
  opacity: 1;
}

.gallery-zoom {
  font-size: 1.8rem;
  transform: scale(1);
  transition: var(--transition);
}

.gallery-item:hover .gallery-zoom {
  transform: scale(1.2) rotate(10deg);
}

.gallery-overlay h3 {
  color: white;
  font-size: 1.4rem;
  text-align: center;
  font-weight: 700;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
}

/* Lightbox */
.lightbox {
  display: flex;
  align-items: center;
  gap: 1.2rem;
}

.lightbox-content {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
}

.lightbox-content img {
  max-height: 78vh;
  max-width: 100%;
  border-radius: 14px;
  object-fit: contain;
  box-shadow: 0 16px 60px rgba(0, 0, 0, 0.5);
  animation: zoomIn 0.28s ease-out;
}

.lightbox-content figcaption {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  margin-top: 1rem;
  gap: 0.2rem;
}

.lightbox-content h3 {
  font-size: 1.2rem;
}

.lightbox-content figcaption span {
  font-size: 0.85rem;
  opacity: 0.75;
}

.lightbox-nav {
  width: 52px;
  height: 52px;
  border: none;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.15);
  color: white;
  font-size: 2.2rem;
  line-height: 1;
  cursor: pointer;
  transition: var(--transition);
  flex-shrink: 0;
}

.lightbox-nav:hover {
  background: var(--rose);
}

.lightbox-close {
  position: absolute;
  top: 1.2rem;
  right: 1.2rem;
  width: 44px;
  height: 44px;
  border: none;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.15);
  color: white;
  font-size: 1.6rem;
  line-height: 1;
  cursor: pointer;
  transition: var(--transition);
}

.lightbox-close:hover {
  background: var(--rose);
  transform: rotate(90deg);
}

@media (max-width: 768px) {
  .gallery-grid {
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    gap: 1rem;
  }

  .gallery-item {
    height: 200px;
  }

  .gallery-overlay {
    opacity: 1;
    background: linear-gradient(135deg, rgba(255, 139, 171, 0.55), rgba(200, 213, 185, 0.55));
  }

  .gallery-zoom {
    display: none;
  }

  .lightbox {
    gap: 0.4rem;
  }

  .lightbox-nav {
    width: 40px;
    height: 40px;
    font-size: 1.6rem;
  }

  .lightbox-close {
    width: 40px;
    height: 40px;
  }
}
</style>