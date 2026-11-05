<script setup>
import { skills } from '../data/content.js'
</script>

<template>
  <section class="skills-section section">
    <div class="skills-container">
      <article
        v-for="(group, i) in skills"
        :key="group.category"
        class="skill-group"
        v-reveal="i * 90"
      >
        <h3>{{ group.category }}</h3>
        <p>{{ group.description }}</p>
        <ul class="skill-list">
          <li v-for="item in group.items" :key="item">{{ item }}</li>
        </ul>
      </article>
    </div>
  </section>
</template>

<style scoped>
.skills-container {
  max-width: 1000px;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.25rem;
}

.skill-group {
  padding: 1.35rem;
  background: var(--surface);
  border: 2px dashed var(--dark);
  border-radius: 14px;
  box-shadow: 4px 4px 0 var(--dark);
  transition: var(--transition);
}

.skill-group:hover {
  transform: translate(-3px, -3px);
  box-shadow: 8px 8px 0 var(--dark);
}

.skill-group h3 {
  margin-bottom: 0.35rem;
  font-size: 1.2rem;
  color: var(--dark);
}

.skill-group p {
  margin-bottom: 0.85rem;
  color: var(--text-muted);
  line-height: 1.5;
}

.skill-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.55rem;
  list-style: none;
}

.skill-list li {
  padding: 0.4rem 0.7rem;
  border: 1px solid var(--border);
  border-radius: 999px;
  background: var(--pink);
  color: var(--dark);
  font-size: 0.95rem;
}

@media (max-width: 600px) {
  .skills-container {
    grid-template-columns: 1fr;
    max-width: 440px;
    width: 90%;
  }

  .skill-group {
    padding: 0.95rem;
  }

  .skill-group h3 {
    font-size: 1.1rem;
  }
}
</style>
