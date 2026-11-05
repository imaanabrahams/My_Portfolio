<script setup>
defineProps({
  animal: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div class="page-animal-shell">
    <span class="page-animal" aria-hidden="true">{{ animal }}</span>
    <slot />
  </div>
</template>

<style scoped>
.page-animal-shell {
  position: relative;
  isolation: isolate;
}

.page-animal {
  position: fixed;
  z-index: 20;
  right: calc(1.25rem + env(safe-area-inset-right, 0px));
  bottom: calc(1rem + env(safe-area-inset-bottom, 0px));
  font-size: 2.5rem;
  line-height: 1;
  transform: translateY(150%);
  transition: transform 0.35s cubic-bezier(0.2, 0.75, 0.25, 1);
  pointer-events: none;
}

.page-animal-shell:hover .page-animal,
.page-animal-shell:focus-within .page-animal {
  transform: translateY(0);
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
