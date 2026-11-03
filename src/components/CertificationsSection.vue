<script setup>
import { certifications } from '../data/certifications.js'
import { learningStatus } from '../data/content.js'

const statusLabels = {
  completed: '✓ Completed',
  learning: '📚 Learning',
  exploring: '🔍 Exploring',
  ongoing: '🔄 Ongoing',
}
</script>

<template>
  <section id="certifications" class="certifications-section section">
    <div class="certifications">
      <div class="cert-heading" v-reveal>
        <span class="game-label">ACHIEVEMENTS UNLOCKED</span>
        <h2 class="section-title">Cisco Certifications</h2>
        <div class="section-title-underline"></div>
      </div>

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
      <span class="game-label">SKILL TREE</span>
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
  </section>
</template>

<style scoped>
.certifications-section {
  background: var(--section-strip);
}

.certifications {
  max-width: 1200px;
  margin: 0 auto 4rem;
}

.cert-heading {
  text-align: center;
  margin-bottom: 2.5rem;
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
  border: 2px solid var(--dark);
  border-radius: 10px;
  box-shadow: 5px 5px 0 var(--dark);
  overflow: hidden;
  transition: var(--transition);
}

.cert-card:hover {
  transform: translate(-3px, -3px);
  box-shadow: 8px 8px 0 var(--dark);
}

.cert-preview {
  display: block;
  aspect-ratio: 93 / 63;
  overflow: hidden;
  background: #fff;
  border-bottom: 2px solid var(--dark);
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
  color: var(--rose-ink);
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
  border-radius: 6px;
  background: var(--rose);
  border: 2px solid var(--dark);
  box-shadow: 3px 3px 0 var(--dark);
  color: var(--on-accent);
  font-weight: 700;
  text-decoration: none;
  transition: var(--transition);
}

.cert-link:hover {
  transform: translate(-2px, -2px);
  box-shadow: 5px 5px 0 var(--dark);
}

.learning-status {
  max-width: 700px;
  margin: 0 auto;
  text-align: center;
}

.learning-status > h3 {
  color: var(--dark);
  font-size: 1.4rem;
  margin: 0.75rem 0 1.5rem;
}

.learning-table {
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  overscroll-behavior-x: contain;
  border: 2px solid var(--dark);
  border-radius: 10px;
  box-shadow: 5px 5px 0 var(--dark);
  background: var(--surface);
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
  border: 1px solid rgba(0, 0, 0, 0.15);
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

@media (max-width: 768px) {
  .cert-grid {
    gap: 1.25rem;
  }

  .learning-status {
    margin-bottom: 0;
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
</style>
