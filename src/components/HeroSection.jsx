import '../styles/HeroSection.css'

export default function HeroSection() {
  return (
    <section className="hero" id="home">
      <div className="hero-stage">
        <h1 className="sr-only">
          Imaan Abrahams — Full-Stack Website Developer
        </h1>

        <div className="hero-media">
          <img
            className="hero-gif"
            src="./cherryblossomtree.gif"
            alt="Animated cherry blossom tree in bloom"
            loading="eager"
            fetchPriority="high"
          />

          <div className="hero-copy">
            <span className="section-kicker">Hello, I&rsquo;m Imaan</span>
            <p className="hero-line">
              Full-Stack Web Developer
            </p>
            <p className="hero-sub">
              Based in South Africa · Open to junior developer roles and
              collaborative projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
