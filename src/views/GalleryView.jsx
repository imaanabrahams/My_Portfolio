import PageHero from '../components/PageHero.jsx'
import GallerySection from '../components/GallerySection.jsx'

export default function GalleryView() {
  return (
    <div>
      <PageHero
        title="Gallery"
        subtitle="A snapshot of the interests and hobbies that keep me curious outside the code editor."
      />
      <GallerySection />
    </div>
  )
}
