<script setup>
import { timelineItems } from '../data/content.js'
</script>

<template>
  <section id="timeline" class="timeline-section section">
    <h2 class="section-title">My Journey</h2>
    <div class="section-title-underline"></div>

    <div class="timeline">
      <div
        v-for="(item, index) in timelineItems"
        :key="item.title"
        class="timeline-item"
        v-reveal="index * 90"
      >
        <div class="timeline-dot"></div>
        <h3>{{ item.title }}</h3>
        <p>{{ item.text }}</p>
        <span class="timeline-index">{{ String(index + 1).padStart(2, '0') }}</span>
      </div>
    </div>
  </section>
</template>

<style scoped>
.timeline-section {
  background: var(--section-strip);
}

.timeline {
  max-width: 900px;
  margin: auto;
  position: relative;
  padding: 2rem 0;
}

.timeline::before {
  content: "";
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 3px;
  background: linear-gradient(to bottom, var(--rose), var(--sage));
  transform: translateX(-50%);
}

.timeline-item {
  background: var(--surface);
  padding: 2rem;
  border-radius: 15px;
  box-shadow: var(--card-shadow);
  position: relative;
  transition: var(--transition);
  margin-bottom: 3rem;
}

.timeline-item:nth-child(odd) {
  margin-left: 0;
  margin-right: 52%;
}

.timeline-item:nth-child(even) {
  margin-left: 52%;
  margin-right: 0;
}

.timeline-item:hover {
  transform: translateY(-10px);
  box-shadow: 0 8px 30px rgba(255, 139, 171, 0.3);
}

.timeline-item h3 {
  color: var(--rose);
  margin-bottom: 1rem;
  font-size: 1.5rem;
  transition: var(--transition);
}

.timeline-item:hover h3 {
  transform: translateX(4px);
}

.timeline-item p {
  color: var(--text-muted);
  line-height: 1.8;
}

.timeline-dot {
  position: absolute;
  width: 15px;
  height: 15px;
  background: var(--rose);
  border: 3px solid var(--surface);
  border-radius: 50%;
  left: 50%;
  top: 22px;
  transform: translateX(-50%);
  box-shadow: 0 0 0 4px rgba(255, 139, 171, 0.2);
  z-index: 1;
}

.timeline-dot::after {
  content: "";
  position: absolute;
  inset: -8px;
  border-radius: 50%;
  border: 2px solid var(--rose);
  opacity: 0;
  animation: dotPing 2.4s cubic-bezier(0, 0, 0.2, 1) infinite;
}

.timeline-item:nth-child(even) .timeline-dot::after {
  animation-delay: 1.2s;
}

@keyframes dotPing {
  0% {
    opacity: 0.8;
    transform: scale(0.4);
  }
  80%,
  100% {
    opacity: 0;
    transform: scale(1.6);
  }
}

.timeline-index {
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  font-size: 2rem;
  font-weight: 700;
  color: rgba(255, 139, 171, 0.15);
  line-height: 1;
}

@media (max-width: 768px) {
  .timeline::before {
    display: none;
  }

  .timeline-item:nth-child(odd),
  .timeline-item:nth-child(even) {
    margin-left: 0;
    margin-right: 0;
  }

  .timeline-dot {
    display: none;
  }
}
</style>