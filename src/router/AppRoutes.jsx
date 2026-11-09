import { useEffect } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import HomeView from '../views/HomeView.jsx'
import AboutView from '../views/AboutView.jsx'
import SkillsView from '../views/SkillsView.jsx'
import ProjectsView from '../views/ProjectsView.jsx'
import CertificationsView from '../views/CertificationsView.jsx'
import GalleryView from '../views/GalleryView.jsx'
import ContactView from '../views/ContactView.jsx'

const titles = {
  '/': 'Home',
  '/about': 'About',
  '/skills': 'Skills',
  '/projects': 'Projects',
  '/certifications': 'Certifications',
  '/gallery': 'Gallery',
  '/contact': 'Contact',
}

export default function AppRoutes() {
  const location = useLocation()

  useEffect(() => {
    const base = 'Imaan Abrahams | Portfolio'
    const title = titles[location.pathname]
    document.title = title ? `${title} | ${base}` : base
    window.scrollTo({ top: 0 })
  }, [location.pathname])

  return (
    <Routes>
      <Route path="/" element={<HomeView />} />
      <Route path="/about" element={<AboutView />} />
      <Route path="/skills" element={<SkillsView />} />
      <Route path="/projects" element={<ProjectsView />} />
      <Route path="/certifications" element={<CertificationsView />} />
      <Route path="/gallery" element={<GalleryView />} />
      <Route path="/contact" element={<ContactView />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
