<script setup>
import { ref, onMounted } from 'vue'
import SiteLoader from './components/SiteLoader.vue'
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import TimelineSection from './components/TimelineSection.vue'
import GallerySection from './components/GallerySection.vue'
import SkillsSection from './components/SkillsSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import LearningSection from './components/LearningSection.vue'
import AboutSection from './components/AboutSection.vue'
import ContactSection from './components/ContactSection.vue'
import SiteFooter from './components/SiteFooter.vue'

const loading = ref(true)

onMounted(() => {
  window.setTimeout(() => {
    loading.value = false
  }, 2200)
})
</script>

<template>
  <SiteLoader v-if="loading" />
  <div v-else>
    <NavBar />
    <main>
      <HeroSection />
      <TimelineSection />
      <GallerySection />
      <SkillsSection />
      <ProjectsSection />
      <LearningSection />
      <AboutSection />
      <ContactSection />
    </main>
    <SiteFooter />
  </div>
</template>