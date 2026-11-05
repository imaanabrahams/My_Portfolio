<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    default: '',
  },
  animal: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <section class="page-hero" v-reveal>
    <span class="page-animal" aria-hidden="true">{{ animal }}</span>
    <h1 class="page-title">{{ title }}</h1>
    <div class="page-underline" aria-hidden="true"></div>
    <p v-if="subtitle" class="page-subtitle">{{ subtitle }}</p>
  </section>
</template>

<style scoped>
.page-hero {
  position: relative;
  isolation: isolate;
  max-width: 900px;
  margin: 2rem auto 1rem;
  padding: 3rem 2rem 2rem;
  text-align: center;
  background: var(--surface);
  border: 2px dashed var(--dark);
  border-radius: 20px;
  box-shadow: 6px 6px 0 var(--dark);
}

.page-animal {
  position: absolute;
  z-index: -1;
  top: -1.65rem;
  right: 1.5rem;
  font-size: 2rem;
  line-height: 1;
  transform: translateY(100%);
  transition: transform 0.35s cubic-bezier(0.2, 0.75, 0.25, 1);
  pointer-events: none;
}

.page-hero:hover .page-animal {
  transform: translateY(0);
}

.page-title {
  font-size: clamp(1.8rem, 5vw, 3rem);
  line-height: 1.2;
  color: var(--dark);
}

.page-underline {
  width: 90px;
  height: 8px;
  margin: 1rem auto;
  background: repeating-linear-gradient(
    90deg,
    var(--rose-deep) 0 8px,
    var(--lavender) 8px 16px,
    var(--sage) 16px 24px,
    transparent 24px 28px
  );
  border: 0;
}

.page-subtitle {
  max-width: 640px;
  margin: 0 auto;
  color: var(--text-muted);
  font-size: clamp(1rem, 2.5vw, 1.15rem);
}

@media (max-width: 480px) {
  .page-hero {
    margin: 1rem 1rem 0;
    padding: 2rem 1rem 1.5rem;
  }
}

@media (hover: none) {
  .page-animal {
    display: none;
  }
}

@media (prefers-reduced-motion: reduce) {
  .page-animal {
    transition: none;
  }
}
</style>
