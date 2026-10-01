<script setup>
import { ref, watch, onMounted, onUnmounted } from 'vue'
import { useTheme } from '../composables/useTheme.js'

const links = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

const MOBILE_QUERY = '(max-width: 768px)'

const active = ref('hero')
const scrolled = ref(false)
const menuOpen = ref(false)
const { theme, toggleTheme } = useTheme()

const onScroll = () => {
  scrolled.value = window.scrollY > 40
  let current = 'hero'
  for (const { id } of links) {
    const el = document.getElementById(id)
    if (el && window.scrollY >= el.offsetTop - 160) {
      current = id
    }
  }
  active.value = current
}

const scrollTo = (event, id) => {
  event.preventDefault()
  menuOpen.value = false
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}

const onKey = (event) => {
  if (event.key === 'Escape' && menuOpen.value) menuOpen.value = false
}

const onPointerDown = (event) => {
  if (!menuOpen.value) return
  if (!event.target.closest('.nav-container')) menuOpen.value = false
}

const onResize = () => {
  if (menuOpen.value && !window.matchMedia(MOBILE_QUERY).matches) {
    menuOpen.value = false
  }
}

// Freeze the page behind the dropdown so a stray touch cannot scroll it away.
let previousOverflow = ''
watch(menuOpen, (open) => {
  if (open) {
    previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = previousOverflow
  }
})

onMounted(() => {
  document.addEventListener('scroll', onScroll, { passive: true })
  document.addEventListener('keydown', onKey)
  document.addEventListener('pointerdown', onPointerDown)
  window.addEventListener('resize', onResize)
  onScroll()
})

onUnmounted(() => {
  document.removeEventListener('scroll', onScroll)
  document.removeEventListener('keydown', onKey)
  document.removeEventListener('pointerdown', onPointerDown)
  window.removeEventListener('resize', onResize)
  document.body.style.overflow = previousOverflow
})
</script>

<template>
  <header class="navbar" :class="{ 'is-scrolled': scrolled }" id="navbar">
    <nav class="nav-container" aria-label="Main navigation">
      <div class="nav-logo">
        <a href="#hero" @click="scrollTo($event, 'hero')" aria-label="Back to top">
          <h1>IA ؛༊</h1>
        </a>
      </div>

      <ul class="nav-menu" :class="{ open: menuOpen }">
        <li v-for="{ id, label } in links" :key="id">
          <a
            :href="`#${id}`"
            class="nav-link"
            :class="{ active: active === id }"
            @click="scrollTo($event, id)"
          >
            {{ label }}
          </a>
        </li>
      </ul>

      <div class="nav-tools">
        <button
          class="theme-toggle"
          :aria-label="
            theme === 'dark'
              ? 'Dark mode active. Switch to light mode.'
              : 'Light mode active. Switch to dark mode.'
          "
          :title="theme === 'dark' ? 'Dark mode' : 'Light mode'"
          @click="toggleTheme"
        >
          <span class="theme-icon">{{ theme === 'dark' ? '🌙' : '☀️' }}</span>
        </button>
        <button
          class="hamburger"
          :class="{ open: menuOpen }"
          :aria-label="menuOpen ? 'Close menu' : 'Open menu'"
          :aria-expanded="menuOpen"
          @click="menuOpen = !menuOpen"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  </header>
</template>

<style scoped>
.navbar {
  position: sticky;
  top: 0;
  background: linear-gradient(135deg, var(--rose), var(--rose-deep));
  padding: 0.85rem 0;
  padding-top: calc(0.85rem + env(safe-area-inset-top, 0px));
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.12);
  z-index: 1000;
  animation: slideIn 0.6s ease-out;
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  padding: 0 calc(2rem + env(safe-area-inset-right, 0px)) 0
    calc(2rem + env(safe-area-inset-left, 0px));
}

.nav-logo a {
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  min-height: var(--tap);
}

.nav-logo h1 {
  color: var(--on-accent);
  font-size: 1.8rem;
  letter-spacing: 2px;
  font-weight: 700;
  transition: var(--transition);
}

.nav-logo h1:hover {
  transform: scale(1.06);
}

.nav-menu {
  display: flex;
  list-style: none;
  gap: 2rem;
}

.nav-link {
  color: var(--on-accent);
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  transition: var(--transition);
  position: relative;
  cursor: pointer;
}

.nav-link::after {
  content: "";
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--on-accent);
  transition: width 0.3s ease;
}

.nav-link:hover::after {
  width: 100%;
}

.nav-link:hover {
  transform: translateY(-3px);
}

.nav-link.active {
  color: var(--on-accent);
  border-bottom: 3px solid var(--on-accent);
  padding-bottom: 5px;
}

.nav-tools {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.theme-toggle {
  width: var(--tap);
  height: var(--tap);
  border: none;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  cursor: pointer;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: var(--transition);
  touch-action: manipulation;
}

.theme-toggle:hover {
  background: rgba(255, 255, 255, 0.4);
  transform: rotate(20deg);
}

.theme-toggle:active .theme-icon {
  animation: iconPop 0.4s ease;
}

@keyframes iconPop {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.6) rotate(15deg);
  }
  100% {
    transform: scale(1);
  }
}

.theme-icon {
  display: inline-block;
}

.hamburger {
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  width: var(--tap);
  height: var(--tap);
  border: none;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  cursor: pointer;
  touch-action: manipulation;
}

.hamburger span {
  display: block;
  width: 20px;
  height: 3px;
  border-radius: 3px;
  background: var(--on-accent);
  transition: var(--transition);
}

.hamburger.open span:nth-child(1) {
  transform: translateY(8px) rotate(45deg);
}

.hamburger.open span:nth-child(2) {
  opacity: 0;
}

.hamburger.open span:nth-child(3) {
  transform: translateY(-8px) rotate(-45deg);
}

@media (max-width: 900px) {
  .nav-menu {
    gap: 1.25rem;
  }
}

@media (max-width: 768px) {
  .hamburger {
    display: flex;
  }

  .nav-container {
    padding: 0 calc(1.1rem + env(safe-area-inset-right, 0px)) 0
      calc(1.1rem + env(safe-area-inset-left, 0px));
  }

  .nav-menu {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    flex-direction: column;
    gap: 0;
    background: linear-gradient(135deg, var(--rose), var(--rose-deep));
    padding: 0;
    max-height: 0;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    overscroll-behavior: contain;
    transition: max-height 0.35s ease;
    border-radius: 0 0 16px 16px;
  }

  .nav-menu.open {
    max-height: 60vh;
    box-shadow: 0 12px 28px rgba(0, 0, 0, 0.25);
  }

  .nav-menu li {
    text-align: center;
  }

  .nav-menu li:first-child .nav-link {
    border-top: none;
  }

  .nav-link {
    display: flex;
    justify-content: center;
    padding: 0 1rem;
    min-height: var(--tap);
    border-top: 1px solid rgba(255, 255, 255, 0.25);
  }

  .nav-link::after {
    display: none;
  }

  .nav-link:hover {
    transform: none;
  }

  .nav-link.active {
    border-bottom: none;
    background: rgba(255, 255, 255, 0.18);
    font-weight: 700;
  }
}

@media (max-width: 480px) {
  .nav-container {
    padding: 0 calc(0.85rem + env(safe-area-inset-right, 0px)) 0
      calc(0.85rem + env(safe-area-inset-left, 0px));
  }

  .nav-logo h1 {
    font-size: 1.6rem;
    letter-spacing: 1px;
  }

  .navbar {
    padding: 0.6rem 0;
  }
}
</style>