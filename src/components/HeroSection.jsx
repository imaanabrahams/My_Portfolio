import '../styles/HeroSection.css'

export default function HeroSection() {
  return (
    <section className="hero" id="home">
      <div className="hero-stage">
        <h1 className="sr-only">
          Imaan Abrahams — Aspiring Full-Stack Web Developer and Cybersecurity
          Enthusiast
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
              An aspiring full-stack web developer who loves turning ideas into
              thoughtful, interactive experiences.
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
