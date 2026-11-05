<script setup>
import PageHero from '../components/PageHero.vue'
import ContactSection from '../components/ContactSection.vue'
import PageAnimal from '../components/PageAnimal.vue'
</script>

<template>
  <PageAnimal animal="🐬">
    <PageHero
      title="Contact"
      subtitle="Have a project, role or quest in mind? Send a message and let's team up."
    />
    <ContactSection />
  </PageAnimal>
</template>
