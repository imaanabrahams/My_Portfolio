<template>
  <section id="about" class="about-section section">
    <h2 class="section-title">About Me</h2>
    <div class="section-title-underline"></div>

    <div class="about-content">
      <div class="about-card" v-reveal>
        <h3>Who Am I?</h3>
        <p>
          My name is Imaan Abrahams. I am an aspiring Web Developer with a passion
          for technology, creativity and learning. I am dedicated to building my
          skills and creating projects that make a positive impact.
        </p>
        <p>
          I have a strong interest in cybersecurity and enjoy learning how systems
          are protected against cyber threats.
        </p>
        <p>
          At 19, I was diagnosed with Stage 4 Endometriosis and underwent surgery.
          The experience taught me resilience, determination and the importance of
          perseverance. Technology became an important outlet for me, helping me
          focus on building skills and creating opportunities for my future.
        </p>
        <p>
          I am currently pursuing a career in Web Development and am excited to
          continue learning and growing in this field. I am committed to creating
          innovative and impactful projects that contribute to the tech community.
        </p>
      </div>

      <div class="about-card" v-reveal="150">
        <h3>My Interests</h3>
        <ul class="interests-list">
          <li>🎨 Web Development</li>
          <li>🔐 Cybersecurity</li>
          <li>🖨️ 3D Printing &amp; Maker Culture</li>
          <li>💻 Technology</li>
          <li>✨ Creative Design</li>
          <li>👩‍🍳 Personal Chef</li>
          <li>🌿 Gardening</li>
          <li>📚 Continuous Learning</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-section {
  background: var(--section-strip);
}

.about-content {
  max-width: 1000px;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.about-card {
  background: var(--surface);
  padding: 2rem;
  border-radius: 15px;
  box-shadow: var(--card-shadow);
  transition: var(--transition);
  border-top: 4px solid var(--rose);
}

.about-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 8px 30px rgba(255, 139, 171, 0.3);
}

.about-card h3 {
  color: var(--rose);
  margin-bottom: 1rem;
  font-size: 1.4rem;
}

.about-card p {
  color: var(--text-muted);
  line-height: 1.8;
  margin-bottom: 0.8rem;
}

.interests-list {
  list-style: none;
  padding: 0;
}

.interests-list li {
  padding: 0.8rem 0;
  color: var(--dark);
  font-weight: 500;
  border-bottom: 1px solid var(--border);
  transition: var(--transition);
}

.interests-list li:last-child {
  border-bottom: none;
}

.interests-list li:hover {
  color: var(--rose);
  padding-left: 10px;
}

@media (max-width: 768px) {
  .about-content {
    grid-template-columns: 1fr;
  }
}
</style>