<script setup>
import ProjectCard from './ProjectCard.vue'
import { featuredProjects } from '../data/projects.js'
</script>

<template>
  <section id="projects" class="projects-section">
    <h2 class="section-title">Completed Projects</h2>
    <div class="section-title-underline"></div>

    <div class="project-grid">
      <ProjectCard
        v-for="project in featuredProjects"
        :key="project.id"
        :project="project"
      />
    </div>
  </section>
</template>

<style scoped>
.projects-section {
  padding: 4rem 2rem;
  background: linear-gradient(
    135deg,
    rgba(255, 214, 232, 0.3),
    rgba(248, 255, 245, 0.3)
  );
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