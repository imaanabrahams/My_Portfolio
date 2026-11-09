import '../styles/SiteFooter.css'

export default function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <p>&copy; {year} Imaan Abrahams | Full-Stack Web Developer</p>
    </footer>
  )
}
