import PageHero from '../components/PageHero.jsx'
import CertificationsSection from '../components/CertificationsSection.jsx'

export default function CertificationsView() {
  return (
    <div>
      <PageHero
        title="Certifications"
        subtitle="Unlocked credentials and the learning path behind them."
      />
      <CertificationsSection />
    </div>
  )
}
