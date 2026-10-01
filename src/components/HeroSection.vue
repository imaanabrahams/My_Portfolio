<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const phrases = [
  'Full-Stack Web Developer',
  'Vue.js Enthusiast',
  'Cybersecurity Explorer',
  'UI/UX Designer',
  'Problem Solver',
]

const typed = ref('')
let phraseIndex = 0
let charIndex = 0
let state = 'typing' // typing | holding | deleting
let acc = 0
let lastFrame = 0
let rafId = null

const TYPE_SPEED = 40
const DELETE_SPEED = 26
const HOLD_TIME = 1400

const loop = (timestamp) => {
  rafId = requestAnimationFrame(loop)
  const dt = Math.min(timestamp - lastFrame, 100)
  lastFrame = timestamp
  acc += dt

  const current = phrases[phraseIndex]

  if (state === 'typing') {
    const steps = Math.floor(acc / TYPE_SPEED)
    if (steps > 0) {
      acc %= TYPE_SPEED
      charIndex = Math.min(charIndex + steps, current.length)
      typed.value = current.slice(0, charIndex)
      if (charIndex === current.length) {
        state = 'holding'
        acc = 0
      }
    }
  } else if (state === 'holding') {
    if (acc >= HOLD_TIME) {
      state = 'deleting'
      acc = 0
    }
  } else {
    const steps = Math.floor(acc / DELETE_SPEED)
    if (steps > 0) {
      acc %= DELETE_SPEED
      charIndex = Math.max(charIndex - steps, 0)
      typed.value = current.slice(0, charIndex)
      if (charIndex === 0) {
        state = 'typing'
        acc = 0
        phraseIndex = (phraseIndex + 1) % phrases.length
      }
    }
  }
}

onMounted(() => {
  lastFrame = performance.now()
  rafId = requestAnimationFrame(loop)
})

onUnmounted(() => {
  if (rafId) cancelAnimationFrame(rafId)
})
</script>

<template>
  <section class="hero" id="hero">
    <div class="hero-blobs" aria-hidden="true">
      <span class="blob blob-1"></span>
      <span class="blob blob-2"></span>
      <span class="blob blob-3"></span>
    </div>

    <div class="hero-content">
      <p v-reveal="60" class="hero-greeting">Hello World 👋 I'm</p>
      <h2 v-reveal="120" class="fade-in">
        <span class="name">Imaan Abrahams</span>
      </h2>
      <h3 v-reveal="200" class="typing">
        <span class="typed-text">{{ typed }}</span>
        <span class="typewriter-cursor" aria-hidden="true">|</span>
      </h3>
      <p v-reveal="280" class="hero-sub">
        Building modern, secure and thoughtful web experiences — one project at a time.
      </p>

      <div class="hero-stats" v-reveal="360">
        <div class="stat">
          <span class="stat-number">3+</span>
          <span class="stat-label">Full-Stack Projects</span>
        </div>
        <div class="stat">
          <span class="stat-number">8+</span>
          <span class="stat-label">Learning Tracks</span>
        </div>
        <div class="stat">
          <span class="stat-number">10+</span>
          <span class="stat-label">Tech Tools</span>
        </div>
      </div>

      <div class="hero-buttons" v-reveal="440">
        <a href="#projects" class="btn">View My Projects</a>
        <a href="#contact" class="btn-secondary">Get In Touch</a>
        <a href="./ImaanAbrahams-CV.pdf" download class="btn-ghost">Download CV</a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  min-height: var(--vh);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 5rem 2rem 4rem;
  padding-right: calc(2rem + env(safe-area-inset-right, 0px));
  padding-left: calc(2rem + env(safe-area-inset-left, 0px));
  position: relative;
  overflow: hidden;
  background:
    radial-gradient(circle at 20% 20%, var(--blob-1), transparent 45%),
    radial-gradient(circle at 80% 30%, var(--blob-2), transparent 45%),
    radial-gradient(circle at 60% 85%, var(--blob-3), transparent 45%),
    linear-gradient(135deg, var(--bg-grad-1), var(--bg-grad-2));
}

.hero-blobs {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(70px);
  opacity: 0.6;
  animation: drift 18s ease-in-out infinite;
}

.blob-1 {
  width: 340px;
  height: 340px;
  top: -60px;
  left: -80px;
  background: var(--blob-1);
}

.blob-2 {
  width: 280px;
  height: 280px;
  bottom: -40px;
  right: -60px;
  animation-delay: -6s;
  background: var(--blob-2);
}

.blob-3 {
  width: 220px;
  height: 220px;
  top: 60%;
  left: 55%;
  animation-delay: -12s;
  background: var(--blob-3);
}

.hero-content {
  max-width: 820px;
  width: 100%;
  position: relative;
  z-index: 1;
  /* Frosted panel: the pink page is too light for saturated text to hit AA
     on its own, so the copy sits on a near-white surface instead. */
  padding: 2.5rem 2rem;
  border-radius: 28px;
  background: var(--hero-panel);
  border: 1px solid var(--hero-panel-border);
  box-shadow: 0 18px 50px rgba(43, 15, 28, 0.18);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
}

.hero-greeting {
  font-size: clamp(1.15rem, 3.8vw, 1.3rem);
  color: var(--text-muted);
  margin-bottom: 0.4rem;
  letter-spacing: 1px;
}

.hero-content h2 {
  font-size: clamp(2.4rem, 8.5vw, 4.2rem);
  margin-bottom: 1rem;
  letter-spacing: -1px;
  white-space: normal;
}

/* Vivid crimson -> violet gradient; reads as colour while staying AA
   on the frosted panel behind it. */
.name {
  background: linear-gradient(120deg, var(--hero-accent), var(--hero-deep));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.typing {
  font-size: clamp(1.3rem, 4.6vw, 1.9rem);
  color: var(--hero-accent);
  min-height: 56px;
  font-weight: 700;
  letter-spacing: 0.5px;
}

.typed-text::selection {
  -webkit-text-fill-color: currentColor;
}

.typewriter-cursor {
  color: var(--hero-deep);
  animation: blink 1s step-start infinite;
  font-weight: 400;
}

.hero-sub {
  font-size: clamp(1.05rem, 3.4vw, 1.15rem);
  color: var(--text-muted);
  margin: 1.5rem auto 2.5rem;
  max-width: 560px;
}

.hero-stats {
  display: flex;
  justify-content: center;
  gap: 2.5rem;
  flex-wrap: wrap;
  margin-bottom: 2.5rem;
}

.stat {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.stat-number {
  font-size: 2.25rem;
  font-weight: 800;
  background: linear-gradient(140deg, var(--hero-accent), var(--hero-deep));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.stat-label {
  font-size: 0.9rem;
  color: var(--text-muted);
  margin-top: 0.2rem;
  font-weight: 600;
}

.hero-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.btn-ghost {
  display: inline-block;
  padding: 12px 30px;
  min-height: var(--tap);
  border-radius: 50px;
  text-decoration: none;
  font-weight: 700;
  font-size: 1rem;
  transition: var(--transition);
  cursor: pointer;
  border: 2px solid var(--border);
  color: var(--dark);
  background: transparent;
  touch-action: manipulation;
}

.btn-ghost:hover {
  border-color: var(--rose);
  color: var(--rose);
  transform: translateY(-3px);
}

@media (max-width: 768px) {
  .hero {
    padding: 4.5rem 2rem 3.5rem;
    padding-right: calc(2rem + env(safe-area-inset-right, 0px));
    padding-left: calc(2rem + env(safe-area-inset-left, 0px));
  }

  .hero-content {
    padding: 2rem 1.5rem;
    border-radius: 22px;
  }

  .typing {
    min-height: 2.6em;
  }

  .hero-sub {
    margin: 1.25rem auto 2rem;
  }

  .hero-stats {
    gap: 1.5rem 1.75rem;
    margin-bottom: 2rem;
  }

  /* Blur radius drives fill-rate on mobile GPUs — dial it back to keep
     scrolling smooth on lower-end phones. */
  .blob {
    filter: blur(46px);
    opacity: 0.5;
  }

  .blob-1 {
    width: 240px;
    height: 240px;
  }

  .blob-2 {
    width: 200px;
    height: 200px;
  }

  .blob-3 {
    width: 160px;
    height: 160px;
  }
}

@media (max-width: 480px) {
  .hero {
    padding: 4rem 1.5rem 3rem;
    padding-right: calc(1.5rem + env(safe-area-inset-right, 0px));
    padding-left: calc(1.5rem + env(safe-area-inset-left, 0px));
  }

  .hero-content {
    padding: 1.75rem 1.15rem;
    border-radius: 18px;
  }

  .hero-stats {
    gap: 1.75rem 1.5rem;
  }

  .stat-number {
    font-size: 1.75rem;
  }

  .stat-label {
    font-size: 0.85rem;
    max-width: 8rem;
  }

  .hero-buttons {
    gap: 1rem;
  }
}

@media (hover: none) {
  .btn-ghost:hover {
    transform: none;
  }
}
</style>