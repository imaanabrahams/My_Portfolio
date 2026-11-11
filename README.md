# Imaan Abrahams — Portfolio (React)

A responsive, single-page portfolio built with **React + Vite**, styled after a modern Framer portfolio: cream surfaces, pink accents, oversized display type, scroll-linked imagery and sticky stacked cards.

🔗 **Live site:** [https://imaanabrahams.github.io/My_Portfolio/](https://imaanabrahams.github.io/My_Portfolio/)

---

## Tech Stack

- **React 18** + **Vite 6**
- Single page with anchor navigation (no router) — ideal for GitHub Pages
- Component-level CSS driven by global CSS custom properties
- Fonts: Sora / Poppins / Inter (Google Fonts)

## Features

- 🎨 **Design system** — cream `#fffcf5` surfaces, hot pink `#ff2f92` accents, deep pink `#d60072` for text/buttons, 2px near-black borders and 32px card radii
- 🪪 **Boxed hero intro** — a draggable profile card with a gentle float, over a soft scroll-fade hero
- 🃏 **Sticky stacked project cards** — featured projects pin and stack as you scroll, each opening a detail modal
- 🩷 **Fixed reveal footer** — the page masks over a pink "Thank you" footer that fades in at the end of the page
- ✨ **Scroll-reveal animations** — IntersectionObserver-driven `useReveal` hook / `<Reveal>` component with staggered cards
- 🖼️ **Gallery lightbox** — click an image to enlarge it with prev/next navigation and keyboard support
- 📬 **Ways to contact** — email with one-click copy, LinkedIn, GitHub and a résumé download
- 📱 **Mobile-first responsive layout** — fluid type scale via `clamp()` and breakpoints at 1200 / 1024 / 810 / 560px
- 🍔 **Mobile hamburger menu** — full-screen menu that dismisses on link tap, `Esc` or resize back to desktop; locks background scroll while open
- 📲 **Touch-first interactions** — 44px minimum tap targets, `viewport-fit=cover` with safe-area insets, `dvh/svh` viewports so mobile browser chrome can't clip content
- ♿ **Accessibility** — `focus-visible` states, `aria` labels/roles, skip link, `prefers-reduced-motion` support, and WCAG AA contrast on body text, muted text, surfaces and buttons

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
├── main.jsx                 # React bootstrap (ProjectProvider + App)
├── App.jsx                  # Loader gate, one-page composition, footer reveal
├── style.css                # Design tokens, shared utilities, reveal + modal backdrop
├── context/
│   └── ProjectContext.jsx   # Shared project-modal state
├── hooks/
│   └── useReveal.js         # IntersectionObserver scroll-reveal hook
├── styles/                  # Component stylesheets
├── data/
│   ├── content.js           # Timeline, skills, gallery, learning status
│   ├── projects.js          # Featured + learning project data
│   └── certifications.js    # Certification data
└── components/
    ├── Reveal.jsx           # Wrapper that applies the scroll-reveal hook
    ├── SiteLoader.jsx       # Loading screen
    ├── NavBar.jsx           # Fixed nav, mobile hamburger
    ├── HeroSection.jsx      # Boxed profile intro (draggable card)
    ├── AboutSection.jsx     # Teaser banner + about detail / interests
    ├── TimelineSection.jsx  # My Journey timeline
    ├── SkillsSection.jsx    # Skill cards + learning status
    ├── ProjectsSection.jsx  # Sticky heading + stacked project cards
    ├── ProjectCard.jsx      # Stacked card + compact mini card
    ├── ProjectModal.jsx     # Portal modal with project details
    ├── LearningSection.jsx  # Learning journey + exercise projects
    ├── CertificationsSection.jsx
    ├── GallerySection.jsx   # Interest gallery + lightbox
    ├── ContactSection.jsx   # Ways to contact + résumé download
    ├── ContactReveal.jsx    # Fixed pink "Thank you" footer revealed at page end
    └── ArrowIcon.jsx
```

`public/` holds the CV, certificates, gallery and project images, and favicons. `npm run build` writes the production site to the ignored `dist/` folder. Generated bundles and duplicate copies of public assets are kept off `main`; GitHub Pages is published from the `gh-pages` branch.

## Projects Featured

| Project | Type | Links |
| --- | --- | --- |
| **RePrint** | Full-stack e-commerce (Vue 3 + Express + MySQL) | [Demo](https://reprint-production-d6d7.up.railway.app) · [Frontend](https://github.com/imaanabrahams/RePrint) · [API](https://github.com/imaanabrahams/RePrint-API) |
| **Modern Tech Solutions — HR System** | Full-stack HR app (Express + SQLite + JWT) | [Demo](https://imaanabrahams.github.io/Modern_Tech_Solutions/) · [Repo](https://github.com/imaanabrahams/Modern_Tech_Solutions) |
| **TutorConnect** | Collaborative front-end platform | [Demo](https://imaanabrahams.github.io/Tutor_Connect/) · [Repo](https://github.com/imaanabrahams/Tutor_Connect) |

Plus learning/exercise projects across Vue.js, Node.js, JavaScript, Python, PHP, MySQL, HTML/CSS and cybersecurity.

## Notes

- The separate Vercel deployment of RePrint (`reprint-kappa.vercel.app`) needs its `VITE_API_URL` build variable updated to the live API domain `https://reprint-api-production-e854.up.railway.app` to load real data.

## License

© 2026 Imaan Abrahams. Personal portfolio.
