<script setup>
defineProps({
  project: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <article class="project-card zoom-in">
    <div v-if="project.screenshot" class="card-media">
      <img
        :src="project.screenshot"
        :alt="`${project.title} screenshot`"
        loading="lazy"
      />
      <span v-if="project.featured" class="card-badge">Featured</span>
    </div>

    <div v-else class="card-icon">{{ project.icon }}</div>

    <div class="card-body">
      <h3>{{ project.title }}</h3>
      <p class="card-tagline">{{ project.tagline }}</p>
      <p class="card-description">{{ project.description }}</p>

      <ul v-if="project.features && project.features.length" class="card-features">
        <li v-for="feature in project.features" :key="feature">{{ feature }}</li>
      </ul>

      <p
        v-if="project.demoLogin"
        class="card-demo-login"
      >
        Demo login: <code>{{ project.demoLogin }}</code>
      </p>

      <div class="card-tech">
        <span v-for="tech in project.technologies" :key="tech" class="tech-chip">
          {{ tech }}
        </span>
      </div>

      <div class="card-actions">
        <a
          v-if="project.demoUrl"
          :href="project.demoUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="btn"
        >
          Live Demo
        </a>
        <a
          :href="project.githubUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="btn-secondary"
        >
          GitHub
        </a>
        <a
          v-for="link in project.repoLinks"
          :key="link.url"
          :href="link.url"
          target="_blank"
          rel="noopener noreferrer"
          class="card-link"
        >
          {{ link.label }} →
        </a>
      </div>
    </div>
  </article>
</template>

<style scoped>
.project-card {
  background: white;
  border-radius: 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: var(--transition);
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.project-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 12px 40px rgba(255, 139, 171, 0.3);
}

.card-media {
  position: relative;
  overflow: hidden;
  border-radius: 20px 20px 0 0;
  aspect-ratio: 16 / 10;
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
  right: 1rem;
  background: var(--rose);
  color: white;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  padding: 0.35rem 0.8rem;
  border-radius: 20px;
  box-shadow: 0 4px 12px rgba(255, 139, 171, 0.5);
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
  color: #666;
  line-height: 1.7;
  margin-bottom: 1rem;
}

.card-features {
  list-style: none;
  margin-bottom: 1rem;
  padding-left: 0;
}

.card-features li {
  color: var(--dark);
  padding: 0.35rem 0;
  padding-left: 1.4rem;
  position: relative;
  font-size: 0.95rem;
  line-height: 1.5;
}

.card-features li::before {
  content: "✓";
  position: absolute;
  left: 0;
  color: var(--rose);
  font-weight: 700;
}

.card-demo-login {
  background: var(--pink);
  color: var(--dark);
  padding: 0.5rem 1rem;
  border-radius: 10px;
  font-size: 0.9rem;
  margin-bottom: 1rem;
  width: fit-content;
}

.card-demo-login code {
  font-weight: 700;
  color: var(--rose);
}

.card-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.tech-chip {
  background: linear-gradient(
    135deg,
    rgba(255, 139, 171, 0.1),
    rgba(200, 213, 185, 0.1)
  );
  color: var(--rose);
  padding: 0.4rem 0.9rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
}

.card-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  align-items: center;
  margin-top: auto;
}

.card-link {
  color: var(--rose);
  text-decoration: none;
  font-weight: 700;
  transition: var(--transition);
  font-size: 0.95rem;
}

.card-link:hover {
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