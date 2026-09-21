<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { skills } from '../data/content.js'

const visible = ref(false)
const barEl = ref(null)

const onScroll = () => {
  if (barEl.value) {
    const rect = barEl.value.getBoundingClientRect()
    if (rect.top < window.innerHeight - 60) {
      visible.value = true
      document.removeEventListener('scroll', onScroll)
    }
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
  <section class="skills-section">
    <h2 class="section-title">My Skills</h2>
    <div class="section-title-underline"></div>

    <div ref="barEl" class="skills-container">
      <div v-for="skill in skills" :key="skill.label" class="skill">
        <div class="skill-header">
          <p>{{ skill.label }}</p>
          <span class="skill-percent">{{ skill.percent }}%</span>
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
.skills-section {
  padding: 4rem 2rem;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.5),
    rgba(200, 213, 185, 0.2)
  );
}

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
}

.bar {
  background: #e0e0e0;
  height: 12px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);
}

.progress {
  height: 100%;
  border-radius: 20px;
  box-shadow: 0 0 10px rgba(255, 139, 171, 0.6);
}

@media (max-width: 480px) {
  .skill {
    margin-bottom: 1.5rem;
  }
}
</style>