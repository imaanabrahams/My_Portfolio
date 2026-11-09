# Imaan Abrahams — Portfolio (React)

A responsive, game-inspired portfolio built with **React + Vite**. Home, About, Skills, Projects, Certifications, Gallery and Contact each have their own route. Projects and Certifications are separate pages, with a quest map linking between them.

🔗 **Live site:** [https://imaanabrahams.github.io/My_Portfolio/](https://imaanabrahams.github.io/My_Portfolio/)

---

## Tech Stack

- **React 18** + **Vite 6**
- **React Router** (`HashRouter`) with hash-based navigation for GitHub Pages
- Component-level CSS driven by global CSS custom properties (rose / sage / pink)

## Features

- 🌓 **Dark theme** — applied pre-paint to avoid a flash of the wrong theme, with a rose/sage accent palette
- ✨ **Scroll-reveal animations** — IntersectionObserver-driven `useReveal` hook / `<Reveal>` component with staggered cards
- 🔍 **Project modals** — click any project card for full details, features, tech and links (ESC / overlay to close)
- 🖼️ **Gallery lightbox** — click an image to enlarge it with prev/next navigation and keyboard support
- 💌 **Contact form** — live per-field validation, sending state, success panel, and a pre-filled email fallback if online delivery fails
- 📊 **Animated skill counters** — percentages count up as bars fill on scroll
- 📱 **Mobile-first responsive layout** — fluid type scale via `clamp()`, overflow-safe grids, and breakpoints at 1024 / 768 / 480 / 360px
- 🍔 **Mobile hamburger menu** — dismisses on link tap, outside tap, `Esc` or resize back to desktop; locks background scroll while open
- 📲 **Touch-first interactions** — 44px minimum tap targets, `viewport-fit=cover` with safe-area insets, no hover-only affordances, `dvh/svh` viewports so mobile browser chrome can't clip content
- 🎮 **Quest map navigation** — each portfolio section is a separate level, with pixel-style cards and badges in the existing rose / sage palette
- 🧭 Floating back-to-top button
- ♿ **Accessibility** — `focus-visible` states, `aria` labels/roles, skip link, `prefers-reduced-motion` support, and WCAG AA contrast (4.5:1) on body text, muted text, surfaces and buttons

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
├── main.jsx                 # React bootstrap (HashRouter + ProjectProvider)
├── App.jsx                  # Shared shell, loader, back-to-top, and route outlet
├── router/
│   └── AppRoutes.jsx        # Hash-based page routes + document title handling
├── views/                   # Home, About, Skills, Projects, Certifications, Gallery, Contact
├── style.css                # Theme tokens, animations, reveal + shared styles
├── context/
│   └── ProjectContext.jsx   # Shared project-modal state
├── hooks/
│   ├── useReveal.js         # IntersectionObserver scroll-reveal hook
│   └── useTheme.js          # Theme init + theme-color meta
├── styles/                  # Component stylesheets
├── data/
│   ├── content.js           # Timeline, skills, gallery, learning status
│   └── projects.js          # Featured + learning project data
└── components/
    ├── Reveal.jsx           # Wrapper that applies the scroll-reveal hook
    ├── SiteLoader.jsx       # Welcome / loading animation
    ├── NavBar.jsx           # Sticky nav, mobile hamburger
    ├── HeroSection.jsx      # Typewriter hero, animated blobs, stats
    ├── TimelineSection.jsx  # My Journey timeline
    ├── GallerySection.jsx   # Interest gallery + lightbox
    ├── SkillsSection.jsx    # Skill groups
    ├── ProjectsSection.jsx  # Completed (featured) projects grid
    ├── ProjectCard.jsx      # Reusable card (click to open modal)
    ├── ProjectModal.jsx     # Portal modal with project details
    ├── LearningSection.jsx  # Learning journey + exercise projects
    ├── AboutSection.jsx     # Who I am / interests
    ├── ContactSection.jsx   # Formspree form + contact links
    ├── PageHero.jsx         # Shared page heading
    └── SiteFooter.jsx
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
