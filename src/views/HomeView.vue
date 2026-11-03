<script setup>
import { RouterLink } from 'vue-router'
import HeroSection from '../components/HeroSection.vue'

const quests = [
  {
    to: '/about',
    icon: '📖',
    title: 'Origin Story',
    level: 'Level 1',
    text: 'Discover where the journey began and how I found my way into tech.',
  },
  {
    to: '/skills',
    icon: '⚡',
    title: 'Power-Ups',
    level: 'Level 2',
    text: 'Explore the tools and technologies I use to build for the web.',
  },
  {
    to: '/projects',
    icon: '🚀',
    title: 'Completed Quests',
    level: 'Level 3',
    text: 'See the full-stack projects, experiments and exercises I have shipped.',
  },
  {
    to: '/certifications',
    icon: '🏆',
    title: 'Achievements',
    level: 'Level 4',
    text: 'Unlocked Cisco Networking Academy certifications and skill progress.',
  },
  {
    to: '/gallery',
    icon: '🎨',
    title: 'Side Quests',
    level: 'Level 5',
    text: 'A glimpse of the interests and hobbies that keep me curious.',
  },
  {
    to: '/contact',
    icon: '🤝',
    title: 'Co-op Mode',
    level: 'Level 6',
    text: 'Ready to team up? Send a message and let us build something great.',
  },
]
</script>

<template>
  <div class="home-view">
    <HeroSection />

    <section class="quest-map section">
      <div class="quest-heading" v-reveal>
        <span class="game-label">SELECT YOUR NEXT LEVEL</span>
        <h2 class="section-title">Quest Map</h2>
        <div class="section-title-underline"></div>
        <p class="quest-intro">
          Pick a path to explore. Every page is its own level.
        </p>
      </div>

      <div class="quest-grid">
        <RouterLink
          v-for="(quest, i) in quests"
          :key="quest.to"
          :to="quest.to"
          class="quest-card"
          v-reveal="(i % 3) * 90"
        >
          <span class="quest-icon" aria-hidden="true">{{ quest.icon }}</span>
          <span class="quest-level">{{ quest.level }}</span>
          <h3>{{ quest.title }}</h3>
          <p>{{ quest.text }}</p>
          <span class="quest-cta">Enter level &rarr;</span>
        </RouterLink>
      </div>
    </section>
  </div>
</template>

<style scoped>
.quest-map {
  background: var(--section-strip);
}

.quest-heading {
  max-width: 720px;
  margin: 0 auto 3rem;
  text-align: center;
}

.quest-intro {
  color: var(--text-muted);
  font-size: 1.05rem;
}

.quest-grid {
  max-width: 1200px;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(300px, 100%), 1fr));
  gap: 2rem;
}

.quest-card {
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 1.75rem 1.5rem;
  background: var(--surface);
  border: 2px solid var(--dark);
  box-shadow: 5px 5px 0 var(--dark);
  border-radius: 10px;
  text-decoration: none;
  color: var(--dark);
  transition: var(--transition);
}

.quest-card:hover,
.quest-card:focus-visible {
  transform: translate(-3px, -3px);
  box-shadow: 8px 8px 0 var(--dark);
}

.quest-icon {
  font-size: 2rem;
  line-height: 1;
  margin-bottom: 0.75rem;
}

.quest-level {
  font-family: 'Press Start 2P', 'Courier New', monospace;
  font-size: 0.55rem;
  letter-spacing: 0.06em;
  color: var(--sage-deep);
  margin-bottom: 0.75rem;
}

.quest-card h3 {
  font-size: 1.35rem;
  margin-bottom: 0.5rem;
  color: var(--dark);
}

.quest-card p {
  color: var(--text-muted);
  line-height: 1.65;
  margin-bottom: 1.25rem;
}

.quest-cta {
  margin-top: auto;
  font-weight: 700;
  color: var(--rose-deep);
}

@media (max-width: 768px) {
  .quest-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.25rem;
  }
}

@media (max-width: 560px) {
  .quest-grid {
    grid-template-columns: 1fr;
  }
}
</style>
