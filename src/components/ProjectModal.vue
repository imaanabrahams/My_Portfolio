<script setup>
import { ref, watch, onBeforeUnmount } from 'vue'
import { activeProject, closeProject } from '../composables/useProject.js'

const el = ref(null)

const onKey = (e) => {
  if (e.key === 'Escape') closeProject()
}

let previousOverflow = ''

watch(
  activeProject,
  (project) => {
    if (project) {
      previousOverflow = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', onKey)
      requestAnimationFrame(() => el.value?.focus())
    } else {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKey)
    }
  }
)

onBeforeUnmount(() => {
  window.removeEventListener('keydown', onKey)
})
</script>

<template>
  <Teleport to="body">
    <div
      v-if="activeProject"
      ref="el"
      class="modal-backdrop"
      role="dialog"
      aria-modal="true"
      aria-label="Project details"
      tabindex="-1"
      @click.self="closeProject"
    >
      <div class="modal-card" v-if="activeProject" @click.stop>
        <button class="modal-close" aria-label="Close" @click="closeProject">×</button>

        <div v-if="activeProject.screenshot" class="modal-media">
          <img :src="activeProject.screenshot" :alt="`${activeProject.title} screenshot`" />
          <span v-if="activeProject.featured" class="modal-badge">Featured Project</span>
        </div>
        <div v-else class="modal-icon">{{ activeProject.icon }}</div>

        <div class="modal-body">
          <div class="modal-head">
            <h3>{{ activeProject.title }}</h3>
            <span v-if="activeProject.tagline" class="modal-tagline">{{ activeProject.tagline }}</span>
          </div>

          <p class="modal-description">{{ activeProject.description }}</p>

          <ul v-if="activeProject.features && activeProject.features.length" class="modal-features">
            <li v-for="feature in activeProject.features" :key="feature">{{ feature }}</li>
          </ul>

          <p
            v-if="activeProject.demoLogin"
            class="modal-demo-login"
          >
            Demo login: <code>{{ activeProject.demoLogin }}</code>
          </p>

          <div class="modal-tech">
            <span v-for="tech in activeProject.technologies" :key="tech" class="tech-chip">
              {{ tech }}
            </span>
          </div>

          <div class="modal-actions">
            <a
              v-if="activeProject.demoUrl"
              :href="activeProject.demoUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="btn"
            >
              Live Demo
            </a>
            <a
              :href="activeProject.githubUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="btn-secondary"
            >
              GitHub
            </a>
            <a
              v-for="link in activeProject.repoLinks"
              :key="link.url"
              :href="link.url"
              target="_blank"
              rel="noopener noreferrer"
              class="modal-link"
            >
              {{ link.label }} →
            </a>
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
.modal-card {
  background: var(--surface);
  border-radius: 20px;
  width: min(720px, 100%);
  max-height: 88vh;
  overflow-y: auto;
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.4);
  position: relative;
  animation: zoomIn 0.28s ease-out;
}

.modal-close {
  position: absolute;
  top: 0.8rem;
  right: 0.8rem;
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 50%;
  background: rgba(15, 10, 18, 0.55);
  color: white;
  font-size: 1.5rem;
  line-height: 1;
  cursor: pointer;
  z-index: 5;
  transition: var(--transition);
}

.modal-close:hover {
  background: var(--rose);
  transform: rotate(90deg);
}

.modal-media {
  position: relative;
  aspect-ratio: 16 / 9;
  background: linear-gradient(135deg, var(--pink), var(--sage));
}

.modal-media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
}

.modal-badge {
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
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

.modal-icon {
  font-size: 4rem;
  padding: 2rem;
  background: linear-gradient(135deg, var(--pink), var(--sage));
  text-align: center;
}

.modal-body {
  padding: 1.75rem 2rem 2rem;
}

.modal-head h3 {
  font-size: 1.8rem;
  color: var(--dark);
  margin-bottom: 0.3rem;
}

.modal-tagline {
  color: var(--rose);
  font-weight: 700;
  font-size: 0.95rem;
}

.modal-description {
  color: var(--text-muted);
  line-height: 1.75;
  margin: 1rem 0;
}

.modal-features {
  list-style: none;
  margin-bottom: 1rem;
  padding-left: 0;
}

.modal-features li {
  color: var(--dark);
  padding: 0.35rem 0 0.35rem 1.4rem;
  position: relative;
  font-size: 0.95rem;
  line-height: 1.5;
}

.modal-features li::before {
  content: "✓";
  position: absolute;
  left: 0;
  color: var(--rose);
  font-weight: 700;
}

.modal-demo-login {
  background: var(--pink);
  color: var(--dark);
  padding: 0.5rem 1rem;
  border-radius: 10px;
  font-size: 0.9rem;
  margin-bottom: 1rem;
  width: fit-content;
}

.modal-demo-login code {
  font-weight: 700;
  color: var(--rose);
}

.modal-tech {
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

.modal-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  align-items: center;
}

.modal-link {
  color: var(--rose);
  text-decoration: none;
  font-weight: 700;
  transition: var(--transition);
  font-size: 0.95rem;
}

.modal-link:hover {
  color: var(--dark);
  transform: translateX(5px);
}

@media (max-width: 480px) {
  .modal-body {
    padding: 1.25rem 1.25rem 1.5rem;
  }

  .modal-actions .btn,
  .modal-actions .btn-secondary {
    flex: 1;
    padding: 10px 16px;
  }
}
</style>