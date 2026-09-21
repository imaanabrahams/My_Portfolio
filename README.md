# Imaan Abrahams — Portfolio (Vue.js)

A responsive single-page portfolio rebuilt with **Vue 3 + Vite**, showcasing my journey, skills and completed projects.

🔗 **Live site:** [https://imaanabrahams.github.io/My_Portfolio/](https://imaanabrahams.github.io/My_Portfolio/)

---

## Tech Stack

- **Vue 3** (`<script setup>` SFCs) + **Vite 6**
- Vanilla JavaScript (no router needed — single-page scroll sections)
- Scoped CSS with the original brand palette (rose / sage / pink)

## Features

- 🌓 **Dark / light theme** — persists in `localStorage`, respects system preference
- ✨ **Scroll-reveal animations** — IntersectionObserver-driven `v-reveal` directive with staggered cards
- 🔍 **Project modals** — click any project card for full details, features, tech and links (ESC / overlay to close)
- 🖼️ **Gallery lightbox** — click an image to enlarge it with prev/next navigation and keyboard support
- 💌 **Contact form** — live per-field validation, sending state, success panel, and a pre-filled email fallback if online delivery fails
- 📊 **Animated skill counters** — percentages count up as bars fill on scroll
- 🧭 **Scroll progress bar** + floating back-to-top button
- 📱 **Mobile hamburger menu** with animated toggle
- ♿ **Accessibility** — `focus-visible` states, `aria` labels/roles, skip link, `prefers-reduced-motion` support

## Getting Started

```bash
npm install
npm run dev       # dev server with HMR
npm run build     # production build to dist/
npm run preview   # preview the production build
```

## Project Structure

```
src/
├── main.js                  # Vue bootstrap (registers v-reveal directive)
├── App.vue                  # Section assembly + loader, progress bar, back-to-top
├── style.css                # Theme tokens, animations, reveal + shared styles
├── directives/
│   └── reveal.js            # IntersectionObserver scroll-reveal directive
├── composables/
│   ├── useTheme.js          # Dark/light theme + localStorage persistence
│   └── useProject.js        # Shared project-modal state
├── data/
│   ├── content.js           # Timeline, skills, gallery, learning status
│   └── projects.js          # Featured + learning project data
└── components/
    ├── SiteLoader.vue       # Welcome / loading animation
    ├── NavBar.vue           # Sticky nav, theme toggle, mobile hamburger
    ├── HeroSection.vue      # Typewriter hero, animated blobs, stats
    ├── TimelineSection.vue  # My Journey timeline
    ├── GallerySection.vue   # Interest gallery + lightbox
    ├── SkillsSection.vue    # Animated skill bars + counters
    ├── ProjectsSection.vue  # Completed (featured) projects
    ├── ProjectCard.vue      # Reusable card (click to open modal)
    ├── ProjectModal.vue     # Teleport modal with project details
    ├── LearningSection.vue  # Learning journey + exercise projects
    ├── AboutSection.vue     # Who I am / interests
    ├── ContactSection.vue   # Formspree form + contact links
    └── SiteFooter.vue
```

`public/` holds the CV download, favicon, and project screenshots.

## Projects Featured

| Project | Type | Links |
| --- | --- | --- |
| **RePrint** | Full-stack e-commerce (Vue 3 + Express + MySQL) | [Demo](https://reprint-production-d6d7.up.railway.app) · [Frontend](https://github.com/imaanabrahams/RePrint) · [API](https://github.com/imaanabrahams/RePrint-API) |
| **Modern Tech Solutions — HR System** | Full-stack HR app (Express + SQLite + JWT) | [Demo](https://imaanabrahams.github.io/Modern_Tech_Solutions/) · [Repo](https://github.com/imaanabrahams/Modern_Tech_Solutions) |
| **TutorConnect** | Collaborative front-end platform | [Demo](https://imaanabrahams.github.io/Tutor_Connect/) · [Repo](https://github.com/imaanabrahams/Tutor_Connect) |

Plus learning/exercise projects across Vue.js, Node.js, JavaScript, Python, PHP, MySQL, HTML/CSS and cybersecurity.

## Notes

- The contact form posts to Formspree with client-side validation.
- The separate Vercel deployment of RePrint (`reprint-kappa.vercel.app`) needs its `VITE_API_URL` build variable updated to the live API domain `https://reprint-api-production-e854.up.railway.app` to load real data.

## License

© 2026 Imaan Abrahams. Personal portfolio.