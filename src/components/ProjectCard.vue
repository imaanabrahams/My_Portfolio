<script setup>
import { openProject } from '../composables/useProject.js'

const props = defineProps({
  project: {
    type: Object,
    required: true,
  },
})

const onKey = (event) => {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault()
    openProject(props.project)
  }
}
</script>

<template>
  <article
    class="project-card zoom-in"
    role="button"
    tabindex="0"
    :aria-label="`Open details for ${project.title}`"
    @click="openProject(project)"
    @keydown="onKey"
  >
    <div v-if="project.screenshot" class="card-media">
      <img
        :src="project.screenshot"
        :alt="`${project.title} screenshot`"
        loading="lazy"
      />
      <span v-if="project.featured" class="card-badge">Featured</span>
      <span class="card-open">View Details</span>
    </div>

    <div v-else class="card-icon">{{ project.icon }}</div>

    <div class="card-body">
      <h3>{{ project.title }}</h3>
      <p class="card-tagline">{{ project.tagline }}</p>
      <p class="card-description">{{ project.description }}</p>

      <div class="card-tech">
        <span v-for="tech in project.technologies.slice(0, 5)" :key="tech" class="tech-chip">
          {{ tech }}
        </span>
        <span v-if="project.technologies.length > 5" class="tech-more">
          +{{ project.technologies.length - 5 }}
        </span>
      </div>

      <div class="card-actions">
        <a
          v-if="project.demoUrl"
          :href="project.demoUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="btn"
          @click.stop
        >
          Live Demo
        </a>
        <a
          :href="project.githubUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="btn-secondary"
          @click.stop
        >
          GitHub
        </a>
        <button class="card-details" @click.stop="openProject(project)">
          Details →
        </button>
      </div>
    </div>
  </article>
</template>

<style scoped>
.project-card {
  background: var(--surface);
  border-radius: 20px;
  box-shadow: var(--card-shadow);
  transition: var(--transition);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  cursor: pointer;
}

.project-card:hover,
.project-card:focus-visible {
  transform: translateY(-10px);
  box-shadow: var(--card-shadow-hover);
}

.card-media {
  position: relative;
  overflow: hidden;
  border-radius: 20px 20px 0 0;
  aspect-ratio: 16 / 9;
  background: linear-gradient(135deg, var(--pink), var(--sage));
}

.card-media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
  transition: transform 0.5s ease;
}

.project-card:hover .card-media img {
  transform: scale(1.05);
}

.card-badge {
  position: absolute;
  top: 1rem;
  left: 1rem;
  background: var(--rose);
  color: white;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  padding: 0.35rem 0.8rem;
  border-radius: 20px;
  box-shadow: 0 4px 12px var(--glow);
}

.card-open {
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  background: rgba(15, 10, 18, 0.6);
  color: white;
  font-size: 0.8rem;
  font-weight: 700;
  padding: 0.4rem 0.9rem;
  border-radius: 20px;
  opacity: 0;
  transform: translateY(8px);
  transition: var(--transition);
  backdrop-filter: blur(4px);
}

.project-card:hover .card-open,
.project-card:focus-visible .card-open {
  opacity: 1;
  transform: translateY(0);
}

.card-icon {
  font-size: 3.5rem;
  padding: 1.5rem;
  margin: 1rem;
  border-radius: 20px;
  background: linear-gradient(135deg, var(--pink), var(--sage));
  width: fit-content;
  animation: float 3s ease-in-out infinite;
}

.card-body {
  padding: 1.5rem 2rem 2rem;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.card-body h3 {
  color: var(--dark);
  margin-bottom: 0.4rem;
  font-size: 1.5rem;
}

.card-tagline {
  color: var(--rose);
  font-weight: 700;
  margin-bottom: 0.8rem;
  font-size: 0.95rem;
}

.card-description {
  color: var(--text-muted);
  line-height: 1.7;
  margin-bottom: 1rem;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.card-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.tech-chip {
  background: linear-gradient(135deg, rgba(255, 139, 171, 0.12), rgba(200, 213, 185, 0.12));
  color: var(--rose);
  padding: 0.4rem 0.9rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
}

.tech-more {
  color: var(--text-muted);
  font-weight: 700;
  font-size: 0.85rem;
  align-self: center;
}

.card-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  align-items: center;
  margin-top: auto;
}

.card-details {
  background: transparent;
  border: none;
  color: var(--rose);
  font-family: inherit;
  font-weight: 700;
  font-size: 0.95rem;
  cursor: pointer;
  padding: 0.4rem 0.2rem;
  transition: var(--transition);
}

.card-details:hover {
  color: var(--dark);
  transform: translateX(5px);
}

@media (max-width: 480px) {
  .card-body {
    padding: 1.25rem 1.25rem 1.5rem;
  }

  .card-actions .btn,
  .card-actions .btn-secondary {
    flex: 1;
    padding: 10px 16px;
  }
}
</style>