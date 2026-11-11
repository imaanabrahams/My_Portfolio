import '../styles/ContactReveal.css'

export default function ContactReveal() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer-reveal" aria-label="Footer">
      <div className="footer-inner">
        <p className="footer-thanks">Thank you</p>

        <p className="footer-copy">
          &copy; {year} Imaan Abrahams &middot; Full-Stack Web Developer
        </p>
      </div>
    </footer>
  )
}
