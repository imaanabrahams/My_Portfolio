<template>
  <section id="about" class="about-section section">
    <h2 class="section-title">About Me</h2>
    <div class="section-title-underline"></div>

    <div class="about-content">
      <div class="about-card" v-reveal>
        <h3>Who Am I?</h3>
        <p>
          My name is Imaan Abrahams. I am an aspiring Web Developer with a
          passion for technology, creativity and learning. I am dedicated to
          building my skills and creating projects that make a positive impact.
        </p>
        <p>
          I have a strong interest in cybersecurity and enjoy learning how
          systems are protected against cyber threats. I am also fascinated by the world of 3D printing and maker culture, and I enjoy exploring new technologies and tools that allow me to bring my ideas to life.
        </p>
        <p>
          I am also a creative individual who enjoys exploring design and
          innovation in my projects. I believe that technology and creativity go
          hand in hand, and I strive to bring a unique perspective to my work. 
        </p>
        <p>
          I am currently pursuing a career in Web Development, and I approach
          each project with a focus on quality, innovation and meaningful
          impact. My goal is to contribute thoughtful, well-crafted solutions to
          the tech community while continuing to learn and grow.
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
  opacity: 0;
}

.about-card:nth-of-type(2).reveal.is-visible .interests-list li {
  animation: interestIn 0.5s cubic-bezier(0.22, 0.61, 0.36, 1) forwards;
  animation-delay: calc(var(--i, 0) * 0.08s);
}

.interests-list li:nth-child(1) { --i: 1; }
.interests-list li:nth-child(2) { --i: 2; }
.interests-list li:nth-child(3) { --i: 3; }
.interests-list li:nth-child(4) { --i: 4; }
.interests-list li:nth-child(5) { --i: 5; }
.interests-list li:nth-child(6) { --i: 6; }
.interests-list li:nth-child(7) { --i: 7; }
.interests-list li:nth-child(8) { --i: 8; }

@keyframes interestIn {
  0% {
    opacity: 0;
    transform: translateX(-18px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

.interests-list li:last-child {
  border-bottom: none;
}

.interests-list li:hover {
  color: var(--rose);
  padding-left: 10px;
  animation: interestWiggle 0.35s ease;
}

@keyframes interestWiggle {
  0%,
  100% {
    transform: translateX(0);
  }
  25% {
    transform: translateX(-4px);
  }
  75% {
    transform: translateX(4px);
  }
}

@media (max-width: 768px) {
  .about-content {
    grid-template-columns: 1fr;
  }
}
</style>
