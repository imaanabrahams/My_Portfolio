<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { skills } from '../data/content.js'

const visible = ref(false)
const barEl = ref(null)

const displays = skills.map(() => ref(0))

const onScroll = () => {
  if (barEl.value) {
    const rect = barEl.value.getBoundingClientRect()
    if (rect.top < window.innerHeight - 60) {
      visible.value = true
      document.removeEventListener('scroll', onScroll)
    }
  }
}

watch(visible, (isVisible) => {
  if (!isVisible) return
  skills.forEach((skill, i) => {
    const start = performance.now()
    const duration = 1100
    const step = (now) => {
      const progress = Math.min(1, (now - start) / duration)
      const eased = 1 - Math.pow(1 - progress, 3)
      displays[i].value = Math.round(eased * skill.percent)
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  })
})

onMounted(() => {
  document.addEventListener('scroll', onScroll, { passive: true })
  onScroll()
})

onUnmounted(() => {
  document.removeEventListener('scroll', onScroll)
})
</script>

<template>
  <section class="skills-section section">
    <h2 class="section-title">My Skills</h2>
    <div class="section-title-underline"></div>

    <div ref="barEl" class="skills-container">
      <div v-for="(skill, i) in skills" :key="skill.label" class="skill" v-reveal="i * 80">
        <div class="skill-header">
          <p>{{ skill.label }}</p>
          <span class="skill-percent">{{ displays[i].value }}%</span>
        </div>
        <div class="bar">
          <div
            class="progress"
            :style="{
              background: skill.color,
              width: visible ? `${skill.percent}%` : '0%',
              transition: 'width 1.2s ease-out',
            }"
          ></div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.skills-container {
  max-width: 800px;
  margin: auto;
}

.skill {
  margin-bottom: 2.5rem;
}

.skill-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.8rem;
}

.skill-header p {
  font-weight: 700;
  font-size: 1.1rem;
  color: var(--dark);
}

.skill-percent {
  background: var(--rose);
  color: white;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 700;
  min-width: 52px;
  text-align: center;
}

.bar {
  background: var(--border);
  height: 12px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);
}

.progress {
  height: 100%;
  border-radius: 20px;
  box-shadow: 0 0 10px rgba(255, 139, 171, 0.6);
  position: relative;
  overflow: hidden;
}

.progress::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(
    105deg,
    transparent 30%,
    rgba(255, 255, 255, 0.45) 50%,
    transparent 70%
  );
  animation: barShimmer 2.2s linear infinite;
}

@keyframes barShimmer {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

@media (max-width: 480px) {
  .skill {
    margin-bottom: 1.5rem;
  }
}
</style>