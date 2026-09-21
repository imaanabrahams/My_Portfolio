<script setup>
import ProjectCard from './ProjectCard.vue'
import { learningProjects } from '../data/projects.js'
import { learningStatus } from '../data/content.js'

const statusLabels = {
  completed: '✓ Completed',
  learning: '📚 Learning',
  exploring: '🔍 Exploring',
  ongoing: '🔄 Ongoing',
}
</script>

<template>
  <section class="learning-section">
    <h2 class="section-title">Learning Projects &amp; Exercises</h2>
    <div class="section-title-underline"></div>

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
      <ProjectCard
        v-for="project in learningProjects"
        :key="project.id"
        :project="project"
      />
    </div>
  </section>
</template>

<style scoped>
.learning-section {
  padding: 4rem 2rem;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.5),
    rgba(255, 181, 167, 0.2)
  );
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
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

table {
  width: 100%;
  border-collapse: collapse;
  background: white;
  overflow: hidden;
}

table thead {
  background: linear-gradient(135deg, var(--rose), var(--rose-deep));
  color: white;
}

table th {
  padding: 1.2rem;
  text-align: left;
  font-weight: 700;
}

table td {
  padding: 1rem 1.2rem;
  border-bottom: 1px solid #e0e0e0;
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
  background: #95d5b2;
  color: white;
}

.status.learning {
  background: #ffd6e8;
  color: var(--dark);
}

.status.exploring {
  background: #ffb5a7;
  color: white;
}

.learning-grid {
  max-width: 1200px;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
}

@media (max-width: 768px) {
  table {
    font-size: 0.9rem;
  }

  table th,
  table td {
    padding: 0.8rem;
  }
}

@media (max-width: 480px) {
  .learning-grid {
    grid-template-columns: 1fr;
  }
}
</style>