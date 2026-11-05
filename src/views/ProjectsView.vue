<script setup>
import PageHero from '../components/PageHero.vue'
import ProjectsSection from '../components/ProjectsSection.vue'
import LearningSection from '../components/LearningSection.vue'
</script>

<template>
  <div>
    <PageHero
      animal="🐨"
      title="Projects"
      subtitle="Full-stack builds, front-end experiments and learning exercises — all shipped and ready to explore."
    />
    <ProjectsSection />
    <LearningSection />
  </div>
</template>
