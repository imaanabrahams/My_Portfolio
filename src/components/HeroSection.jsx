import '../styles/HeroSection.css'

export default function HeroSection() {
  return (
    <section className="hero" id="home">
      <div className="hero-stage">
        <h1 className="sr-only">
          Imaan Abrahams — Full-Stack Website Developer
        </h1>

        <div className="hero-media">
          <video
            className="hero-gif"
            src="./cherryblossomtree.mp4"
            poster="./cherryblossomtree-poster.webp"
            aria-label="Animated cherry blossom tree in bloom"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          />

          <div className="hero-copy">
            <span className="section-kicker">Hello, I&rsquo;m Imaan</span>
            <p className="hero-line">
              Full-Stack Web Developer
            </p>
            <p className="hero-sub">
              Based in South Africa · Open to software developer roles and
              collaborative projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
