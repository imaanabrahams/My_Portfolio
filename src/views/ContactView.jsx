import PageHero from '../components/PageHero.jsx'
import ContactSection from '../components/ContactSection.jsx'

export default function ContactView() {
  return (
    <div>
      <PageHero
        title="Contact"
        subtitle="Have a project, role or quest in mind? Send a message and let's team up."
      />
      <ContactSection />
    </div>
  )
}
