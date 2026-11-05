<script setup>
const year = new Date().getFullYear()
</script>

<template>
  <footer class="footer">
    <p>&copy; {{ year }} Imaan Abrahams | Full-Stack Web Developer</p>
  </footer>
</template>

<style scoped>
.footer {
  background: linear-gradient(120deg, #ffffff, var(--pink), var(--lavender), var(--sage));
  background-size: 300% 300%;
  color: var(--on-accent);
  border-top: 2px dashed var(--rose-deep);
  text-align: center;
  padding: 2rem;
  padding-right: calc(2rem + env(safe-area-inset-right, 0px));
  padding-bottom: calc(2rem + env(safe-area-inset-bottom, 0px));
  padding-left: calc(2rem + env(safe-area-inset-left, 0px));
  font-weight: 600;
  box-shadow: 0 -4px 15px rgba(0, 0, 0, 0.1);
  margin-top: auto;
  animation: footerDrift 22s ease-in-out infinite;
}

@keyframes footerDrift {
  0%,
  100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

@media (max-width: 480px) {
  .footer {
    font-size: 0.9rem;
    padding: 1.5rem 1rem;
    padding-bottom: calc(1.5rem + env(safe-area-inset-bottom, 0px));
  }
}
</style>
