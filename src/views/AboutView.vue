<script setup>
import PageHero from '../components/PageHero.vue'
import AboutSection from '../components/AboutSection.vue'
import TimelineSection from '../components/TimelineSection.vue'
</script>

<template>
  <div>
    <PageHero
      badge="Level 1 · Origin Story"
      title="About Me"
      subtitle="The player behind the portfolio: where I started, what I love building, and how I keep levelling up."
    />
    <AboutSection />
    <TimelineSection />
  </div>
</template>
