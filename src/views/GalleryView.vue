<script setup>
import PageHero from '../components/PageHero.vue'
import GallerySection from '../components/GallerySection.vue'
import PageAnimal from '../components/PageAnimal.vue'
</script>

<template>
  <PageAnimal animal="🦋">
    <PageHero
      title="Gallery"
      subtitle="A snapshot of the interests and hobbies that keep me curious outside the code editor."
    />
    <GallerySection />
  </PageAnimal>
</template>
