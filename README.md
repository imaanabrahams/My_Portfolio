# Imaan Abrahams — Portfolio (Vue.js)

A responsive single-page portfolio rebuilt with **Vue 3 + Vite**, showcasing my journey, skills and completed projects.

🔗 **Live site:** [https://imaanabrahams.github.io/My_Portfolio/](https://imaanabrahams.github.io/My_Portfolio/)

---

## Tech Stack

- **Vue 3** (`<script setup>` SFCs) + **Vite 6**
- Vanilla JavaScript (no router needed — single-page scroll sections)
- Scoped CSS with the original brand palette (rose / sage / pink)

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
├── main.js                  # Vue bootstrap
├── App.vue                  # Section assembly + loader state
├── style.css                # Global tokens, animations, shared styles
├── data/
│   ├── content.js           # Timeline, skills, gallery, learning status
│   └── projects.js          # Featured + learning project data
└── components/
    ├── SiteLoader.vue       # Welcome / loading animation
    ├── NavBar.vue           # Sticky nav + active-section highlighting
    ├── HeroSection.vue      # Typewriter hero + CV download
    ├── TimelineSection.vue  # My Journey timeline
    ├── GallerySection.vue   # Interest gallery
    ├── SkillsSection.vue    # Animated skill bars
    ├── ProjectsSection.vue  # Completed (featured) projects
    ├── ProjectCard.vue      # Reusable project card
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