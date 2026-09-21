<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useTheme } from './composables/useTheme.js'
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
import ProjectModal from './components/ProjectModal.vue'

const loading = ref(true)
const progress = ref(0)
const showTop = ref(false)
const { initTheme } = useTheme()

const onScroll = () => {
  const scrollTop = window.scrollY
  const height = document.documentElement.scrollHeight - window.innerHeight
  progress.value = height > 0 ? Math.min(100, (scrollTop / height) * 100) : 0
  showTop.value = scrollTop > 600
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  initTheme()
  document.addEventListener('scroll', onScroll, { passive: true })
  onScroll()
  window.setTimeout(() => {
    loading.value = false
  }, 1500)
})

onUnmounted(() => {
  document.removeEventListener('scroll', onScroll)
})
</script>

<template>
  <a href="#hero" class="skip-link">Skip to content</a>
  <div class="scroll-progress" :style="{ width: `${progress}%` }"></div>

  <SiteLoader v-if="loading" />
  <div v-else>
    <NavBar />
    <main id="main">
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
    <button
      class="to-top"
      :class="{ 'is-visible': showTop }"
      aria-label="Back to top"
      @click="scrollToTop"
    >
      ↑
    </button>
    <ProjectModal />
  </div>
</template>