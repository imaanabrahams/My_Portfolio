<script setup>
import PageHero from '../components/PageHero.vue'
import SkillsSection from '../components/SkillsSection.vue'
import PageAnimal from '../components/PageAnimal.vue'
</script>

<template>
  <PageAnimal animal="🦁">
    <PageHero
      title="Skills"
      subtitle="The tools, languages and technologies I use to turn ideas into working products."
    />
    <SkillsSection />
  </PageAnimal>
</template>
