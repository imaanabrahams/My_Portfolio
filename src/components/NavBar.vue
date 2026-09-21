<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const links = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

const active = ref('hero')
const scrolled = ref(false)

const onScroll = () => {
  scrolled.value = window.scrollY > 40
  let current = 'hero'
  for (const { id } of links) {
    const el = document.getElementById(id)
    if (el && window.scrollY >= el.offsetTop - 140) {
      current = id
    }
  }
  active.value = current
}

const scrollTo = (event, id) => {
  event.preventDefault()
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
    <nav class="nav-container">
      <div class="nav-logo">
        <h1>IA ؛༊</h1>
      </div>
      <ul class="nav-menu">
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
    </nav>
  </header>
</template>

<style scoped>
.navbar {
  position: sticky;
  top: 0;
  background: linear-gradient(135deg, var(--rose), var(--rose-deep));
  padding: 1rem 0;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
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
}

.nav-logo h1 {
  color: white;
  font-size: 1.8rem;
  letter-spacing: 2px;
  font-weight: 700;
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

@media (max-width: 768px) {
  .nav-menu {
    gap: 1rem;
    font-size: 0.9rem;
  }
}

@media (max-width: 480px) {
  .nav-container {
    padding: 0 1rem;
  }

  .nav-logo h1 {
    font-size: 1.4rem;
  }

  .nav-menu {
    gap: 0.5rem;
  }

  .nav-link {
    font-size: 0.9rem;
  }
}
</style>