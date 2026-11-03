<script setup>
import ProjectCard from './ProjectCard.vue'
import { learningProjects } from '../data/projects.js'
import { learningStatus } from '../data/content.js'
import { certifications } from '../data/certifications.js'

const statusLabels = {
  completed: '✓ Completed',
  learning: '📚 Learning',
  exploring: '🔍 Exploring',
  ongoing: '🔄 Ongoing',
}
</script>

<template>
  <section id="learning" class="learning-section section">
    <h2 class="section-title">Projects &amp; Certifications</h2>
    <div class="section-title-underline"></div>

    <div class="certifications">
      <h3>Certifications</h3>
      <div class="cert-grid">
        <article
          v-for="(cert, i) in certifications"
          :key="cert.id"
          class="cert-card"
          v-reveal="(i % 3) * 100"
        >
          <a
            :href="cert.pdf"
            target="_blank"
            rel="noopener noreferrer"
            class="cert-preview"
            :aria-label="`View ${cert.title} certificate`"
          >
            <img :src="cert.image" :alt="`${cert.title} certificate`" loading="lazy" />
          </a>
          <div class="cert-body">
            <h4>{{ cert.title }}</h4>
            <p class="cert-issuer">{{ cert.issuer }} &middot; {{ cert.provider }}</p>
            <p class="cert-date">Completed {{ cert.date }}</p>
            <p class="cert-id">Cert ID: {{ cert.certId }}</p>
            <a
              :href="cert.pdf"
              target="_blank"
              rel="noopener noreferrer"
              class="cert-link"
            >
              View Certificate
            </a>
          </div>
        </article>
      </div>
    </div>

    <div class="learning-status">
      <h3>Learning Journey</h3>
      <div class="learning-table">
        <table>
          <thead>
            <tr>
              <th>Skill</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in learningStatus" :key="item.skill">
              <td>{{ item.skill }}</td>
              <td>
                <span class="status" :class="item.status">
                  {{ statusLabels[item.status] }}
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="learning-grid">
      <div
        v-for="(project, i) in learningProjects"
        :key="project.id"
        v-reveal="(i % 6) * 80"
      >
        <ProjectCard :project="project" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.learning-section {
  background: var(--section-strip);
}

.certifications {
  max-width: 1200px;
  margin: 0 auto 4rem;
}

.certifications > h3 {
  color: var(--rose);
  font-size: 1.4rem;
  margin-bottom: 1.5rem;
  text-align: center;
}

.cert-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(320px, 100%), 1fr));
  gap: 2rem;
}

.cert-card {
  display: flex;
  flex-direction: column;
  background: var(--surface);
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: var(--transition);
}

.cert-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.18);
}

.cert-preview {
  display: block;
  aspect-ratio: 93 / 63;
  overflow: hidden;
  background: #fff;
}

.cert-preview img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.4s ease;
}

.cert-card:hover .cert-preview img {
  transform: scale(1.03);
}

.cert-body {
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 1.25rem;
  text-align: left;
}

.cert-body h4 {
  color: var(--dark);
  font-size: 1.15rem;
  margin-bottom: 0.4rem;
}

.cert-issuer {
  color: var(--rose);
  font-weight: 600;
  font-size: 0.95rem;
  margin-bottom: 0.25rem;
}

.cert-date {
  color: var(--text-muted);
  font-size: 0.9rem;
  margin-bottom: 0.35rem;
}

.cert-id {
  color: var(--text-muted);
  font-size: 0.75rem;
  word-break: break-all;
  margin-bottom: 1rem;
}

.cert-link {
  margin-top: auto;
  align-self: flex-start;
  display: inline-flex;
  align-items: center;
  min-height: var(--tap);
  padding: 0.55rem 1.1rem;
  border-radius: 999px;
  background: linear-gradient(135deg, var(--rose), var(--rose-deep));
  color: var(--on-accent);
  font-weight: 600;
  text-decoration: none;
  transition: var(--transition);
}

.cert-link:hover {
  transform: translateY(-2px);
  opacity: 0.92;
}

.learning-status {
  max-width: 700px;
  margin: 0 auto 4rem;
  text-align: center;
}

.learning-status h3 {
  color: var(--rose);
  font-size: 1.4rem;
  margin-bottom: 1.5rem;
}

.learning-table {
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  overscroll-behavior-x: contain;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

table {
  width: 100%;
  min-width: 260px;
  border-collapse: collapse;
  background: var(--surface);
  overflow: hidden;
}

table thead {
  background: linear-gradient(135deg, var(--rose), var(--rose-deep));
  color: var(--on-accent);
}

table th {
  padding: 1.2rem;
  text-align: left;
  font-weight: 700;
}

table td {
  padding: 1rem 1.2rem;
  border-bottom: 1px solid var(--border);
  color: var(--dark);
  text-align: left;
}

table tr:last-child td {
  border-bottom: none;
}

table tbody tr:hover {
  background: rgba(255, 139, 171, 0.05);
}

.status {
  display: inline-block;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-weight: 600;
  font-size: 0.9rem;
  white-space: nowrap;
}

.status.completed {
  background: #57a773;
  color: var(--on-accent);
}

.status.learning {
  background: var(--pink);
  color: #54203a;
}

.status.exploring {
  background: #e88a6f;
  color: var(--on-accent);
}

.learning-grid {
  max-width: 1200px;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(320px, 100%), 1fr));
  gap: 2rem;
}

.learning-grid > div {
  display: flex;
}

.learning-grid .project-card {
  width: 100%;
  flex: 1;
}

@media (max-width: 768px) {
  .learning-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.25rem;
  }

  .cert-grid {
    gap: 1.25rem;
  }

  .learning-status {
    margin-bottom: 3rem;
  }

  table {
    font-size: 0.9rem;
  }

  table th {
    padding: 0.8rem;
  }

  table td {
    padding: 0.7rem 0.8rem;
  }

  .status {
    padding: 0.4rem 0.7rem;
    font-size: 0.8rem;
  }
}

@media (max-width: 480px) {
  .learning-grid {
    gap: 1rem;
  }
}
</style>