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
  position: absolute;
  z-index: 1;
  top: 0.5rem;
  right: max(calc((100vw - 900px) / 2 + 1.5rem), 1.5rem);
  font-size: 2rem;
  line-height: 1;
  transform: translateY(-120%);
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
