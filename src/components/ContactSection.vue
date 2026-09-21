<script setup>
import { reactive, ref, computed } from 'vue'

const form = reactive({ name: '', email: '', message: '' })
const errors = reactive({ name: '', email: '', message: '' })
const touched = reactive({ name: false, email: false, message: false })
const status = ref('idle') // idle | sending | success | error
const errorText = ref('')
const copied = ref(false)

const EMAIL = 'imaanabrahams15@gmail.com'

const emailOk = computed(() => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
const messageOk = computed(() => form.message.trim().length >= 10)

const validateField = (field) => {
  if (field === 'name' || field === 'all') {
    errors.name = form.name.trim() ? '' : 'Please enter your name.'
  }
  if (field === 'email' || field === 'all') {
    errors.email = form.email.trim()
      ? emailOk.value
        ? ''
        : 'Please enter a valid email address.'
      : 'Please enter your email.'
  }
  if (field === 'message' || field === 'all') {
    errors.message = form.message.trim()
      ? messageOk.value
        ? ''
        : 'Your message should be at least 10 characters.'
      : 'Please write a message.'
  }
}

const onBlur = (field) => {
  touched[field] = true
  validateField(field)
}

const mailtoHref = computed(() => {
  const subject = encodeURIComponent(`Portfolio enquiry from ${form.name || 'your website'}`)
  const body = encodeURIComponent(`${form.message}\n\n— ${form.name}${form.email ? ` (${form.email})` : ''}`)
  return `mailto:${EMAIL}?subject=${subject}&body=${body}`
})

const copyEmail = async () => {
  try {
    await navigator.clipboard.writeText(EMAIL)
    copied.value = true
    window.setTimeout(() => {
      copied.value = false
    }, 2000)
  } catch {
    /* clipboard unavailable (non-secure context) */
  }
}

const submit = async () => {
  validateField('all')
  touched.name = touched.email = touched.message = true
  if (errors.name || errors.email || errors.message) return

  status.value = 'sending'
  try {
    const response = await fetch('https://formspree.io/f/mbdeyken', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        _subject: `Portfolio enquiry from ${form.name}`,
        name: form.name,
        email: form.email,
        message: form.message,
      }),
    })
    if (!response.ok) throw new Error(`Formspree responded ${response.status}`)
    status.value = 'success'
  } catch (e) {
    status.value = 'error'
    errorText.value = 'The message could not be delivered online. Please use the email fallback below.'
  }
}

const resetForm = () => {
  form.name = ''
  form.email = ''
  form.message = ''
  touched.name = touched.email = touched.message = false
  status.value = 'idle'
}
</script>

<template>
  <section id="contact" class="contact-section section">
    <h2 class="section-title">Get In Touch</h2>
    <div class="section-title-underline"></div>

    <div class="contact-container" v-reveal>
      <form class="contact-form" @submit.prevent="submit" novalidate>
        <div class="form-group">
          <label for="name">Name</label>
          <input
            id="name"
            v-model.trim="form.name"
            type="text"
            name="name"
            required
            :aria-invalid="touched.name && !!errors.name"
            @blur="onBlur('name')"
          />
          <p v-if="touched.name && errors.name" class="field-error" role="alert">{{ errors.name }}</p>
        </div>

        <div class="form-group">
          <label for="email">Email</label>
          <input
            id="email"
            v-model.trim="form.email"
            type="email"
            name="email"
            required
            :aria-invalid="touched.email && !!errors.email"
            @blur="onBlur('email')"
          />
          <p v-if="touched.email && errors.email" class="field-error" role="alert">{{ errors.email }}</p>
        </div>

        <div class="form-group">
          <label for="message">Message</label>
          <textarea
            id="message"
            v-model.trim="form.message"
            name="message"
            rows="6"
            required
            :aria-invalid="touched.message && !!errors.message"
            @blur="onBlur('message')"
          ></textarea>
          <p v-if="touched.message && errors.message" class="field-error" role="alert">{{ errors.message }}</p>
        </div>

        <div v-if="status === 'success'" class="form-success" role="status">
          <p>
            Thank you {{ form.name || 'so much' }}! Your message has been sent. I'll get back to you soon. 💌
          </p>
          <button type="button" class="btn-secondary btn-reset" @click="resetForm">
            Send another message
          </button>
        </div>

        <div v-else-if="status === 'error'" class="form-error" role="alert">
          <p>{{ errorText }}</p>
          <a :href="mailtoHref">✉️ Email me directly instead</a>
        </div>

        <template v-if="status === 'idle' || status === 'sending'">
          <button type="submit" class="btn" :disabled="status === 'sending'">
            <span v-if="status === 'sending'">Sending…</span>
            <span v-else>Send Message</span>
          </button>
          <p class="form-hint">
            Prefer email? <a :href="mailtoHref">{{ EMAIL }}</a>
          </p>
        </template>
      </form>

      <aside class="contact-info">
        <h3>Other Ways to Connect</h3>
        <p>I usually reply within a day — pick whatever feels easiest for you.</p>
        <ul class="contact-list">
          <li class="contact-item">
            <span class="contact-icon">📧</span>
            <div>
              <span class="contact-label">Email</span>
              <a :href="mailtoHref">{{ EMAIL }}</a>
            </div>
            <button
              class="quick-copy"
              :class="{ copied }"
              :aria-label="`Copy ${EMAIL}`"
              @click="copyEmail"
            >
              {{ copied ? 'Copied!' : 'Copy' }}
            </button>
          </li>
          <li class="contact-item">
            <span class="contact-icon">💼</span>
            <div>
              <span class="contact-label">LinkedIn</span>
              <a
                href="https://www.linkedin.com/in/imaanabrahams8"
                target="_blank"
                rel="noopener noreferrer"
              >
                imaanabrahams8
              </a>
            </div>
            <a
              class="contact-arrow"
              href="https://www.linkedin.com/in/imaanabrahams8"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open LinkedIn"
            >→</a>
          </li>
          <li class="contact-item">
            <span class="contact-icon">🐙</span>
            <div>
              <span class="contact-label">GitHub</span>
              <a href="https://github.com/imaanabrahams" target="_blank" rel="noopener noreferrer">
                imaanabrahams
              </a>
            </div>
            <a
              class="contact-arrow"
              href="https://github.com/imaanabrahams"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open GitHub"
            >→</a>
          </li>
        </ul>
      </aside>
    </div>
  </section>
</template>

<style scoped>
.contact-container {
  max-width: 1000px;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
}

.contact-form {
  background: var(--surface);
  padding: 2.5rem;
  border-radius: 15px;
  box-shadow: var(--card-shadow);
}

.form-group {
  margin-bottom: 1.25rem;
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
  border: 2px solid var(--border);
  border-radius: 8px;
  font-family: "Times New Roman", Times, serif;
  font-size: 1rem;
  color: var(--dark);
  background: var(--surface-soft);
  transition: var(--transition);
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--rose);
  box-shadow: 0 0 0 3px var(--glow);
}

.field-error {
  color: #e05c4f;
  font-size: 0.85rem;
  margin-top: 0.35rem;
}

.form-error {
  color: #b3463a;
  background: rgba(224, 92, 79, 0.12);
  padding: 0.85rem 1rem;
  border-radius: 8px;
  margin-bottom: 1rem;
  font-size: 0.95rem;
  line-height: 1.6;
}

.form-error a {
  color: var(--rose);
  font-weight: 700;
}

.form-success {
  color: #2e7d32;
  background: rgba(87, 167, 115, 0.16);
  padding: 0.85rem 1rem;
  border-radius: 8px;
  margin-bottom: 1rem;
  font-size: 0.95rem;
  line-height: 1.6;
}

.contact-form .form-success p {
  margin-bottom: 0.2rem;
}

.btn-reset {
  margin-top: 0.75rem;
  padding: 8px 18px;
  font-size: 0.9rem;
}

.contact-form .btn {
  width: 100%;
  padding: 0.8rem;
}

.contact-form .btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.form-hint {
  margin-top: 1rem;
  color: var(--text-muted);
  font-size: 0.9rem;
  text-align: center;
}

.form-hint a {
  color: var(--rose);
  font-weight: 600;
}

.contact-info {
  background: var(--surface);
  padding: 2.5rem;
  border-radius: 15px;
  box-shadow: var(--card-shadow);
}

.contact-info h3 {
  color: var(--rose);
  margin-bottom: 0.8rem;
  font-size: 1.3rem;
}

.contact-info > p {
  color: var(--text-muted);
  margin-bottom: 1.5rem;
  line-height: 1.8;
}

.contact-list {
  list-style: none;
  padding: 0;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 0;
  color: var(--dark);
  border-bottom: 1px solid var(--border);
  transition: var(--transition);
}

.contact-item:last-child {
  border-bottom: none;
}

.contact-item:hover {
  padding-left: 8px;
}

.contact-icon {
  font-size: 1.4rem;
  flex-shrink: 0;
}

.contact-item > div {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
}

.contact-label {
  font-size: 0.8rem;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 1px;
}

.contact-item a {
  color: var(--rose);
  text-decoration: none;
  font-weight: 600;
  word-break: break-word;
}

.contact-item a:hover {
  text-decoration: underline;
}

.quick-copy {
  border: 1px solid var(--border);
  background: transparent;
  color: var(--text-muted);
  font-size: 0.75rem;
  font-weight: 700;
  padding: 0.3rem 0.7rem;
  border-radius: 20px;
  cursor: pointer;
  flex-shrink: 0;
  transition: var(--transition);
}

.quick-copy:hover {
  border-color: var(--rose);
  color: var(--rose);
}

.quick-copy.copied {
  background: var(--sage);
  color: white;
  border-color: var(--sage);
}

.contact-arrow {
  font-size: 1.3rem;
  transition: var(--transition);
}

.contact-arrow:hover {
  transform: translateX(4px);
  text-decoration: none !important;
}

@media (max-width: 768px) {
  .contact-container {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}

@media (max-width: 480px) {
  .contact-form,
  .contact-info {
    padding: 1.5rem;
  }
}
</style>