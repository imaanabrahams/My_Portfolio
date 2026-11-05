<script setup>
import PageHero from '../components/PageHero.vue'
import CertificationsSection from '../components/CertificationsSection.vue'
import PageAnimal from '../components/PageAnimal.vue'
</script>

<template>
  <PageAnimal animal="🦉">
    <PageHero
      title="Certifications"
      subtitle="Unlocked credentials and the learning path behind them."
    />
    <CertificationsSection />
  </PageAnimal>
</template>
