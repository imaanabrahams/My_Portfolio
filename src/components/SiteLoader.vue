<script setup>
import { onMounted, ref } from 'vue'

const hidden = ref(false)

onMounted(() => {
  window.setTimeout(() => {
    hidden.value = true
  }, 1900)
})
</script>

<template>
  <section class="loader" :class="{ 'is-hidden': hidden }" aria-hidden="true">
    <div class="heart"></div>
    <h1>Welcome to My Journey</h1>
  </section>
</template>

<style scoped>
.loader {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, var(--light-bg), var(--pink));
  position: relative;
  transition:
    opacity 0.6s ease,
    visibility 0.6s ease;
}

.loader.is-hidden {
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
}

.heart {
  width: 100px;
  height: 100px;
  background: var(--rose);
  transform: rotate(45deg);
  animation: pulse 1.2s infinite;
  margin-bottom: 20px;
  border-radius: 20px;
}

.loader h1 {
  color: var(--dark);
  font-size: 2rem;
  animation: bounce 2s infinite;
}

@media (max-width: 480px) {
  .loader h1 {
    font-size: 1.4rem;
    padding: 0 1rem;
    text-align: center;
  }

  .heart {
    width: 80px;
    height: 80px;
  }
}
</style>