<script setup>
const year = new Date().getFullYear()
</script>

<template>
  <footer class="footer">
    <p>&copy; {{ year }} Imaan Abrahams | Aspiring Web Developer &amp; Cybersecurity Enthusiast</p>
    <p class="footer-links">
      <a href="https://github.com/imaanabrahams" target="_blank" rel="noopener noreferrer">GitHub</a>
      <a href="https://www.linkedin.com/in/imaanabrahams8" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      <a href="./ImaanAbrahams-CV.pdf" download>Download CV</a>
    </p>
  </footer>
</template>

<style scoped>
.footer {
  background: linear-gradient(135deg, var(--rose), var(--sage), var(--rose-deep), var(--rose));
  background-size: 300% 300%;
  color: white;
  text-align: center;
  padding: 2rem;
  font-weight: 600;
  box-shadow: 0 -4px 15px rgba(0, 0, 0, 0.1);
  margin-top: auto;
  animation: footerDrift 12s ease infinite;
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

.footer-links {
  margin-top: 0.75rem;
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.footer-links a {
  color: white;
  text-decoration: none;
  opacity: 0.9;
  transition: var(--transition);
  display: inline-block;
}

.footer-links a:hover {
  opacity: 1;
  transform: translateY(-2px);
  animation: linkWobble 0.4s ease;
}

@keyframes linkWobble {
  0%,
  100% {
    transform: translateY(-2px) rotate(0deg);
  }
  50% {
    transform: translateY(-2px) rotate(4deg);
  }
}

@media (max-width: 480px) {
  .footer {
    font-size: 0.9rem;
  }
}
</style>