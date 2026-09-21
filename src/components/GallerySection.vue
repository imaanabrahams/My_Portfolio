<script setup>
import { galleryItems } from '../data/content.js'
</script>

<template>
  <section class="gallery-section">
    <h2 class="section-title">Interest Gallery</h2>
    <div class="section-title-underline"></div>

    <div class="gallery-grid">
      <div v-for="item in galleryItems" :key="item.alt" class="gallery-item">
        <img
          :src="item.src"
          :alt="item.alt"
          loading="lazy"
          class="gallery-img"
        />
        <div class="gallery-overlay">
          <h3>{{ item.label }}</h3>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.gallery-section {
  padding: 4rem 2rem;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.5),
    rgba(255, 214, 232, 0.3)
  );
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
  border-radius: 20px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  transition: var(--transition);
  height: 300px;
  cursor: pointer;
  background: white;
}

.gallery-item:hover {
  transform: translateY(-15px) scale(1.02);
  box-shadow: 0 15px 40px rgba(255, 139, 171, 0.4);
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
  filter: brightness(0.8);
}

.gallery-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    135deg,
    rgba(255, 139, 171, 0.8),
    rgba(200, 213, 185, 0.8)
  );
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: var(--transition);
  border-radius: 20px;
}

.gallery-item:hover .gallery-overlay {
  opacity: 1;
}

.gallery-overlay h3 {
  color: white;
  font-size: 1.5rem;
  text-align: center;
  font-weight: 700;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
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
    background: linear-gradient(
      135deg,
      rgba(255, 139, 171, 0.55),
      rgba(200, 213, 185, 0.55)
    );
  }
}
</style>