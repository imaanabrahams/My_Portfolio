<script setup>
defineProps({
  badge: {
    type: String,
    default: 'QUEST LOG',
  },
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <section class="page-hero" v-reveal>
    <span class="page-badge">{{ badge }}</span>
    <h1 class="page-title">{{ title }}</h1>
    <div class="page-underline" aria-hidden="true"></div>
    <p v-if="subtitle" class="page-subtitle">{{ subtitle }}</p>
  </section>
</template>

<style scoped>
.page-hero {
  max-width: 900px;
  margin: 0 auto;
  padding: 3.5rem 2rem 1.5rem;
  text-align: center;
}

.page-badge {
  display: inline-block;
  font-family: 'Press Start 2P', 'Courier New', monospace;
  font-size: 0.62rem;
  line-height: 1.6;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  padding: 0.65rem 0.95rem;
  background: var(--sage);
  color: var(--sage-deep);
  border: 2px solid var(--dark);
  box-shadow: 3px 3px 0 var(--dark);
  margin-bottom: 1.5rem;
}

.page-title {
  font-size: clamp(1.8rem, 5vw, 3rem);
  line-height: 1.2;
  color: var(--dark);
}

.page-underline {
  width: 90px;
  height: 6px;
  margin: 1rem auto;
  background: linear-gradient(90deg, var(--rose), var(--sage));
  border: 2px solid var(--dark);
}

.page-subtitle {
  max-width: 640px;
  margin: 0 auto;
  color: var(--text-muted);
  font-size: clamp(1rem, 2.5vw, 1.15rem);
}

@media (max-width: 480px) {
  .page-hero {
    padding: 2.25rem 1rem 1rem;
  }

  .page-badge {
    font-size: 0.55rem;
  }
}
</style>
