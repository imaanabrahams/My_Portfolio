<script setup>
import { ref } from 'vue'

const form = ref({ name: '', email: '', message: '' })
const submitted = ref(false)
const error = ref('')

const validate = () => {
  if (!form.value.name.trim()) return 'Please enter your name.'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.value.email)) {
    return 'Please enter a valid email address.'
  }
  if (form.value.message.trim().length < 10) {
    return 'Please write a message of at least 10 characters.'
  }
  return ''
}

const submit = async () => {
  error.value = ''
  const validationError = validate()
  if (validationError) {
    error.value = validationError
    return
  }
  try {
    const response = await fetch('https://formspree.io/f/mbdeyken', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form.value),
    })
    if (!response.ok) throw new Error('Request failed')
    submitted.value = true
  } catch (e) {
    error.value = 'Something went wrong. Please email me directly at imaanabrahams15@gmail.com.'
  }
}
</script>

<template>
  <section id="contact" class="contact-section">
    <h2 class="section-title">Get In Touch</h2>
    <div class="section-title-underline"></div>

    <div class="contact-container">
      <form class="contact-form slide-in" @submit.prevent="submit" novalidate>
        <div class="form-group">
          <label for="name">Name</label>
          <input id="name" v-model.trim="form.name" type="text" name="name" required />
        </div>

        <div class="form-group">
          <label for="email">Email</label>
          <input id="email" v-model.trim="form.email" type="email" name="email" required />
        </div>

        <div class="form-group">
          <label for="message">Message</label>
          <textarea id="message" v-model.trim="form.message" name="message" rows="6" required></textarea>
        </div>

        <p v-if="error" class="form-error" role="alert">{{ error }}</p>
        <p v-if="submitted" class="form-success" role="status">
          Thank you! Your message has been sent. I'll get back to you soon.
        </p>

        <button type="submit" class="btn" :disabled="submitted">
          {{ submitted ? 'Message Sent ✓' : 'Send Message' }}
        </button>
      </form>

      <div class="contact-info slide-in">
        <h3>Other Ways to Connect</h3>
        <p>Feel free to reach out through your preferred method:</p>
        <ul class="contact-list">
          <li>
            📧 Email:
            <a href="mailto:imaanabrahams15@gmail.com">imaanabrahams15@gmail.com</a>
          </li>
          <li>
            💼 LinkedIn:
            <a
              href="https://www.linkedin.com/in/imaanabrahams8"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.linkedin.com/in/imaanabrahams8
            </a>
          </li>
          <li>
            🐙 GitHub:
            <a
              href="https://github.com/imaanabrahams"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/imaanabrahams
            </a>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact-section {
  padding: 4rem 2rem;
  background: linear-gradient(
    135deg,
    rgba(200, 213, 185, 0.2),
    rgba(255, 214, 232, 0.2)
  );
}

.contact-container {
  max-width: 1000px;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
}

.contact-form {
  background: white;
  padding: 2.5rem;
  border-radius: 15px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  color: var(--dark);
  font-weight: 600;
  font-size: 1rem;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 0.8rem;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  font-family: "Times New Roman", Times, serif;
  font-size: 1rem;
  color: var(--dark);
  transition: var(--transition);
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--rose);
  box-shadow: 0 0 0 3px rgba(255, 139, 171, 0.1);
}

.form-error {
  color: #c0392b;
  background: #fdecea;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  margin-bottom: 1rem;
  font-size: 0.95rem;
}

.form-success {
  color: #2e7d32;
  background: #e8f5e9;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  margin-bottom: 1rem;
  font-size: 0.95rem;
}

.contact-form button {
  width: 100%;
  padding: 0.8rem;
}

.contact-form button:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.contact-info {
  background: white;
  padding: 2.5rem;
  border-radius: 15px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}

.contact-info h3 {
  color: var(--rose);
  margin-bottom: 1rem;
  font-size: 1.3rem;
}

.contact-info p {
  color: var(--dark);
  margin-bottom: 1.5rem;
  line-height: 1.8;
}

.contact-list {
  list-style: none;
  padding: 0;
}

.contact-list li {
  padding: 0.8rem 0;
  color: var(--dark);
  border-bottom: 1px solid #e0e0e0;
  transition: var(--transition);
  word-break: break-word;
}

.contact-list li:last-child {
  border-bottom: none;
}

.contact-list li:hover {
  color: var(--rose);
  padding-left: 10px;
}

.contact-list a {
  color: var(--rose);
  text-decoration: none;
  font-weight: 600;
}

.contact-list a:hover {
  text-decoration: underline;
}

@media (max-width: 768px) {
  .contact-container {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}
</style>