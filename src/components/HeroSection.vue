<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const phrases = [
  'Building Modern Web Experiences',
  'Crafting Full-Stack Applications',
  'Exploring Cybersecurity',
  'Learning Something New Every Day',
]

const typed = ref('')
let phraseIndex = 0
let charIndex = 0
let deleting = false
let interval = null

const tick = () => {
  const current = phrases[phraseIndex]
  if (!deleting) {
    charIndex += 1
    typed.value = current.slice(0, charIndex)
    if (charIndex === current.length) {
      deleting = true
      window.clearInterval(interval)
      interval = window.setInterval(tick, 2200)
      return
    }
  } else if (deleting) {
    charIndex -= 1
    typed.value = current.slice(0, charIndex)
    if (charIndex === 0) {
      deleting = false
      phraseIndex = (phraseIndex + 1) % phrases.length
    }
  }
}

onMounted(() => {
  interval = window.setInterval(tick, 90)
})

onUnmounted(() => {
  if (interval) window.clearInterval(interval)
})
</script>

<template>
  <section class="hero" id="hero">
    <div class="hero-content">
      <h2 class="fade-in">
        Hello World, I'm <span class="name">Imaan Abrahams</span>
      </h2>
      <h3 class="typing fade-in"><span class="typewriter-cursor">|</span> {{ typed }}</h3>
      <p class="fade-in">
        Full Stack Web Development • Cybersecurity Enthusiast • Passionate Learner
      </p>
      <div class="hero-buttons fade-in">
        <a href="#timeline" class="btn">My Journey</a>
        <a href="./ImaanAbrahams-CV.pdf" download class="btn-secondary">Download CV</a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 2rem;
  background: linear-gradient(
    135deg,
    rgba(255, 211, 227, 0.3),
    rgba(248, 255, 245, 0.3)
  );
}

.hero-content {
  max-width: 800px;
  animation: fadeIn 1s ease-out;
}

.hero-content h2 {
  font-size: 3.5rem;
  margin-bottom: 1rem;
  color: var(--dark);
  letter-spacing: -1px;
  white-space: nowrap;
}

.name {
  color: var(--rose);
  background: linear-gradient(135deg, var(--rose), var(--rose-deep));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.typing {
  font-size: 1.8rem;
  color: var(--rose);
  min-height: 50px;
  font-weight: 600;
}

.typewriter-cursor {
  color: var(--rose);
  animation: bounce 1s infinite;
}

.hero-content > p {
  font-size: 1.2rem;
  color: var(--dark);
  margin: 2rem 0;
}

.hero-buttons {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;
}

@media (max-width: 768px) {
  .hero-content h2 {
    font-size: 2.2rem;
    white-space: normal;
  }

  .typing {
    font-size: 1.3rem;
    min-height: 66px;
  }

  .hero-buttons {
    flex-direction: column;
    gap: 1rem;
  }

  .btn,
  .btn-secondary {
    width: 100%;
  }
}

@media (max-width: 480px) {
  .hero {
    padding: 1rem;
  }

  .hero-content h2 {
    font-size: 1.8rem;
  }

  .typing {
    font-size: 1.1rem;
  }

  .hero-content > p {
    font-size: 1rem;
  }
}
</style>