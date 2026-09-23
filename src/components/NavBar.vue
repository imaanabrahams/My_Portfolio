<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useTheme } from '../composables/useTheme.js'

const links = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

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

onMounted(() => {
  document.addEventListener('scroll', onScroll, { passive: true })
  onScroll()
})

onUnmounted(() => {
  document.removeEventListener('scroll', onScroll)
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
          :aria-label="theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'"
          :title="theme === 'dark' ? 'Light mode' : 'Dark mode'"
          @click="toggleTheme"
        >
          <span class="theme-icon">{{ theme === 'dark' ? '☀️' : '🌙' }}</span>
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
  padding: 0 2rem;
  gap: 1rem;
}

.nav-logo a {
  text-decoration: none;
}

.nav-logo h1 {
  color: white;
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
  color: white;
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
  background: white;
  transition: width 0.3s ease;
}

.nav-link:hover::after {
  width: 100%;
}

.nav-link:hover {
  transform: translateY(-3px);
}

.nav-link.active {
  color: white;
  border-bottom: 3px solid white;
  padding-bottom: 5px;
}

.nav-tools {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.theme-toggle {
  width: 42px;
  height: 42px;
  border: none;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  cursor: pointer;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: var(--transition);
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
  gap: 5px;
  width: 42px;
  height: 42px;
  border: none;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  cursor: pointer;
  padding: 0 10px;
}

.hamburger span {
  display: block;
  height: 3px;
  border-radius: 3px;
  background: white;
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

@media (max-width: 768px) {
  .hamburger {
    display: flex;
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
    overflow: hidden;
    transition: max-height 0.35s ease;
    border-radius: 0 0 16px 16px;
  }

  .nav-menu.open {
    max-height: 320px;
    box-shadow: 0 12px 28px rgba(0, 0, 0, 0.25);
  }

  .nav-menu li {
    text-align: center;
  }

  .nav-link {
    display: block;
    padding: 1rem;
    border-top: 1px solid rgba(255, 255, 255, 0.25);
  }

  .nav-link.active {
    border-bottom: none;
  }
}

@media (max-width: 480px) {
  .nav-container {
    padding: 0 1rem;
  }

  .nav-logo h1 {
    font-size: 1.4rem;
  }
}
</style>