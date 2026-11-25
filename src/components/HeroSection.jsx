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
            poster="./cherryblossomtrees-poster.webp"
            aria-label="Animated cherry blossom tree in bloom"
            width={1280}
            height={848}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          >
            <source src="./cherryblossomtrees.mp4" type="video/mp4" />
          </video>

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
