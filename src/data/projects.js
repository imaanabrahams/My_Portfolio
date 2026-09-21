export const featuredProjects = [
  {
    id: 'reprint',
    title: 'RePrint',
    tagline: 'Full-Stack 3D Printing E-Commerce Studio',
    icon: '🖨️',
    featured: true,
    year: 2026,
    description:
      'A complete e-commerce platform for a custom 3D printing studio. Customers can browse and filter the product catalogue, manage a cart and wishlist, request custom designs and register an account. Staff and admins get dedicated portals covering dashboards, orders, inventory, print queue, team and HR.',
    features: [
      'Vue 3 SPA with Vue Router and Pinia state management',
      'JWT-based authentication for customers, staff and admins',
      'Shopping cart, wishlist and product filtering by category',
      'Custom design request flow and consultation booking',
      'Separate Express + MySQL REST API (RePrint-API)',
      'ZAR currency formatting and responsive layouts',
    ],
    technologies: ['Vue 3', 'Vite', 'Vue Router', 'Pinia', 'JavaScript', 'CSS', 'Node.js', 'Express', 'MySQL', 'JWT'],
    screenshot: 'projects/reprint-home.png',
    demoUrl: 'https://reprint-production-d6d7.up.railway.app',
    githubUrl: 'https://github.com/imaanabrahams/RePrint',
    repoLinks: [
      { label: 'Frontend Repo', url: 'https://github.com/imaanabrahams/RePrint' },
      { label: 'Backend Repo', url: 'https://github.com/imaanabrahams/RePrint-API' },
    ],
  },
  {
    id: 'modern-tech',
    title: 'Modern Tech Solutions — HR System',
    tagline: 'Full-Stack HR Application with Express + SQLite',
    icon: '🏢',
    featured: true,
    year: 2026,
    description:
      'A combined full-stack HR application pairing the polished Modern Tech Solutions front-end UI with an Express + SQLite backend using JWT authentication and full CRUD operations. The SQLite database is created and seeded automatically so the app is ready to use immediately.',
    features: [
      'Express REST API backed by a seeded SQLite database',
      'JWT authentication with a demo admin login',
      'Full CRUD operations for employees, shifts and inventory',
      'Clean vanilla JavaScript front end integrated with the API',
      'Original brand styling and design retained end-to-end',
    ],
    technologies: ['JavaScript', 'Node.js', 'Express', 'SQLite', 'JWT', 'HTML5', 'CSS3'],
    screenshot: 'projects/modern-tech-home.png',
    demoUrl: 'https://imaanabrahams.github.io/Modern_Tech_Solutions/',
    githubUrl: 'https://github.com/imaanabrahams/Modern_Tech_Solutions',
    repoLinks: [
      { label: 'GitHub Repo', url: 'https://github.com/imaanabrahams/Modern_Tech_Solutions' },
    ],
    demoLogin: 'admin / admin123',
  },
  {
    id: 'tutor-connect',
    title: 'TutorConnect',
    tagline: 'Collaborative Tutor-Student Platform',
    icon: '🎓',
    featured: true,
    year: 2026,
    description:
      'A collaborative team project building a modern, responsive tutoring platform that connects students with qualified tutors. Students can explore tutoring services, search for tutors, discover available subjects and contact the team for support — all in a clean, accessible interface.',
    features: [
      'Responsive, mobile-first design across all pages',
      'Tutor search and discovery features',
      'Subject and service overview sections',
      'Contact team integration for enquiries',
      'Built collaboratively as a team project',
    ],
    technologies: ['HTML5', 'CSS3', 'JavaScript'],
    screenshot: 'projects/tutor-connect-home.png',
    demoUrl: 'https://imaanabrahams.github.io/Tutor_Connect/',
    githubUrl: 'https://github.com/imaanabrahams/Tutor_Connect',
    repoLinks: [
      { label: 'GitHub Repo', url: 'https://github.com/imaanabrahams/Tutor_Connect' },
    ],
  },
]

export const learningProjects = [
  {
    id: 'vue-exercises',
    title: 'Vue.js Exercises',
    tagline: 'Components, Props, Slots and Events',
    icon: '🟢',
    description:
      'A hands-on set of Vue 3 exercises covering components, props and slots, template data, methods, events and reusable component patterns completed as part of the Vue.js curriculum.',
    technologies: ['Vue 3', 'JavaScript', 'HTML', 'CSS'],
    githubUrl: 'https://github.com/imaanabrahams/VueJs',
  },
  {
    id: 'node-exercises',
    title: 'Node.js & Back-End Exercises',
    tagline: 'Server-Side JavaScript Foundations',
    icon: '⚙️',
    description:
      'Server-side exercises working toward back-end development with Node.js — modules, Express routing and API foundations built through structured weekly practice.',
    technologies: ['Node.js', 'Express', 'JavaScript'],
    githubUrl: 'https://github.com/imaanabrahams/NodeJS',
  },
  {
    id: 'js-exercises',
    title: 'JavaScript Exercises',
    tagline: 'Functions, Promises and Error Handling',
    icon: '💻',
    description:
      'A collection of JavaScript practice covering functions, objects, promises, async/await and error handling — the problem-solving foundation of my web development journey.',
    technologies: ['JavaScript'],
    githubUrl: 'https://github.com/imaanabrahams/JavaScript',
  },
  {
    id: 'python-foundation',
    title: 'Python — Foundation Module',
    tagline: 'Core Programming and Mini Builds',
    icon: '🐍',
    description:
      'Python programs from my software engineering foundation module — from core concepts exercises to self-contained builds like a product showcase, image gallery helper and animations.',
    technologies: ['Python'],
    githubUrl: 'https://github.com/imaanabrahams/Foundation-Module',
  },
  {
    id: 'php-databases',
    title: 'PHP & MySQL Projects',
    tagline: 'PHP Fundamentals and Database Schemas',
    icon: '🐘',
    description:
      'PHP fundamentals and real database schemas (pick_n_steal, shopleft, moderntech) — bridging the gap between front-end pages and server-side data using PHP and MySQL.',
    technologies: ['PHP', 'MySQL', 'SQL'],
    githubUrl: 'https://github.com/imaanabrahams/PHP',
  },
  {
    id: 'mysql-exercises',
    title: 'MySQL Database Exercises',
    tagline: 'Schema Design and SQL Practice',
    icon: '🗄️',
    description:
      'Database design and SQL practice — creating relational schemas, running queries and learning how data is stored and retrieved for modern web applications.',
    technologies: ['MySQL', 'SQL'],
    githubUrl: 'https://github.com/imaanabrahams/MySQL',
  },
  {
    id: 'html-css',
    title: 'HTML & CSS Builds',
    tagline: 'Responsive Layouts and Creative Styling',
    icon: '🎨',
    description:
      'Foundational front-end projects in pure HTML and CSS — responsive layouts, flexbox and grid design and creative styling experiments that started my developer journey.',
    technologies: ['HTML5', 'CSS3'],
    githubUrl: 'https://github.com/imaanabrahams/HTML',
    repoLinks: [
      { label: 'HTML Repo', url: 'https://github.com/imaanabrahams/HTML' },
      { label: 'CSS Repo', url: 'https://github.com/imaanabrahams/CSS' },
    ],
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity Focus',
    tagline: 'Research, Digital Safety and Security Concepts',
    icon: '🔐',
    description:
      'An ongoing research track exploring security concepts and digital safety — how systems are protected against threats, JWT authentication, secure API design and best practices for a safer digital environment.',
    technologies: ['Cybersecurity', 'Security Concepts', 'Best Practices'],
    githubUrl: 'https://github.com/imaanabrahams',
  },
]