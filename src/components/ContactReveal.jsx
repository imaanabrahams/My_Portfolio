import '../styles/ContactReveal.css'

export default function ContactReveal() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer-reveal" aria-label="Footer">
      <img
        className="footer-gif"
        src="./lazycat-landscape-hd.webp"
        alt=""
        aria-hidden="true"
      />

      <div className="footer-inner">
        <p className="footer-thanks">thank you</p>

        <p className="footer-copy">
          &copy; {year} Imaan Abrahams &middot; Full-Stack Web Developer
        </p>
      </div>
    </footer>
  )
}
