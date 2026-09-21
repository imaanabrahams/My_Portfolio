<script setup>
import ProjectCard from './ProjectCard.vue'
import { featuredProjects } from '../data/projects.js'
</script>

<template>
  <section id="projects" class="projects-section section">
    <h2 class="section-title">Completed Projects</h2>
    <div class="section-title-underline"></div>

    <div class="project-grid">
      <div
        v-for="(project, i) in featuredProjects"
        :key="project.id"
        v-reveal="i * 150"
      >
        <ProjectCard :project="project" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.projects-section {
  background: var(--section-strip);
}

.project-grid {
  max-width: 1200px;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  gap: 2rem;
}

@media (max-width: 480px) {
  .project-grid {
    grid-template-columns: 1fr;
  }
}
</style>