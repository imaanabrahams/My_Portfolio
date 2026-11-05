<script setup>
import PageHero from '../components/PageHero.vue'
import AboutSection from '../components/AboutSection.vue'
import TimelineSection from '../components/TimelineSection.vue'
import PageAnimal from '../components/PageAnimal.vue'
</script>

<template>
  <PageAnimal animal="🦊">
    <PageHero
      title="About Me"
      subtitle="The player behind the portfolio: where I started, what I love building, and how I keep levelling up."
    />
    <AboutSection />
    <TimelineSection />
  </PageAnimal>
</template>
