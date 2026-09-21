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
  background: linear-gradient(135deg, var(--rose), var(--rose-deep));
  color: white;
  text-align: center;
  padding: 2rem;
  font-weight: 600;
  box-shadow: 0 -4px 15px rgba(0, 0, 0, 0.1);
  margin-top: auto;
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
}

.footer-links a:hover {
  opacity: 1;
  transform: translateY(-2px);
}

@media (max-width: 480px) {
  .footer {
    font-size: 0.9rem;
  }
}
</style>