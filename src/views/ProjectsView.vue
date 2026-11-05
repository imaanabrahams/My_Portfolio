<script setup>
import PageHero from '../components/PageHero.vue'
import ProjectsSection from '../components/ProjectsSection.vue'
import LearningSection from '../components/LearningSection.vue'
import PageAnimal from '../components/PageAnimal.vue'
</script>

<template>
  <PageAnimal animal="🐨">
    <PageHero
      title="Projects"
      subtitle="Full-stack builds, front-end experiments and learning exercises — all shipped and ready to explore."
    />
    <ProjectsSection />
    <LearningSection />
  </PageAnimal>
</template>
