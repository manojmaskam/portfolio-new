import { config } from '../data/config'

// Reveal-on-hover link: the label slides up and a duplicate slides in from below.
function HoverLink({ text }) {
  return (
    <div className="hover-link" data-cursor="disable">
      <div className="hover-in">{text} <div>{text}</div></div>
    </div>
  )
}

export default function Navbar() {
  // Smooth-scroll to a section, letting Lenis (window.__lenis) drive it on desktop.
  const go = (e, id) => {
    e.preventDefault()
    const target = document.querySelector(id)
    if (!target) return
    if (window.__lenis) window.__lenis.scrollTo(target, { offset: 0, duration: 1.5 })
    else target.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <div className="header">
        <a href="/#" className="navbar-title" data-cursor="disable">{config.monogram}</a>
        <a href={`mailto:${config.contact.email}`} className="navbar-connect" data-cursor="disable">{config.contact.email}</a>
        <ul>
          <li><a href="#about" onClick={(e) => go(e, '#about')}><HoverLink text="ABOUT" /></a></li>
          <li><a href="#work" onClick={(e) => go(e, '#work')}><HoverLink text="WORK" /></a></li>
          <li><a href="#contact" onClick={(e) => go(e, '#contact')}><HoverLink text="CONTACT" /></a></li>
        </ul>
      </div>
      <div className="nav-fade" />
    </>
  )
}
