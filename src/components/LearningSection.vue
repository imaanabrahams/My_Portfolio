<script setup>
import ProjectCard from './ProjectCard.vue'
import { learningProjects } from '../data/projects.js'
</script>

<template>
  <section class="learning-section section">
    <div class="learning-heading" v-reveal>
      <span class="game-label">SIDE QUESTS</span>
      <h2 class="section-title">Learning Projects</h2>
      <div class="section-title-underline"></div>
    </div>

    <div class="learning-grid">
      <div
        v-for="(project, i) in learningProjects"
        :key="project.id"
        v-reveal="(i % 6) * 80"
      >
        <ProjectCard :project="project" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.learning-section {
  background: var(--section-strip);
}

.learning-heading {
  text-align: center;
  margin-bottom: 2.5rem;
}

.learning-grid {
  max-width: 1200px;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(320px, 100%), 1fr));
  gap: 2rem;
}

.learning-grid > div {
  display: flex;
}

.learning-grid .project-card {
  width: 100%;
  flex: 1;
}

@media (max-width: 768px) {
  .learning-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.25rem;
  }
}

@media (max-width: 480px) {
  .learning-grid {
    gap: 1rem;
  }
}
</style>
