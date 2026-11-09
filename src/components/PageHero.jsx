import Reveal from './Reveal.jsx'
import '../styles/PageHero.css'

export default function PageHero({ title, subtitle = '' }) {
  return (
    <Reveal as="section" className="page-hero">
      <h1 className="page-title">{title}</h1>
      <div className="page-underline" aria-hidden="true"></div>
      {subtitle && <p className="page-subtitle">{subtitle}</p>}
    </Reveal>
  )
}
