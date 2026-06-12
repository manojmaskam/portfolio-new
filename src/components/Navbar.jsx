import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { profile, contact, socials } from '../data/profile'
import { iconByKey } from './icons'

const links = [
  { label: 'ABOUT', id: 'about' },
  { label: 'WORK', id: 'work' },
  { label: 'CONTACT', id: 'contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const go = (id) => {
    setOpen(false)
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: id } })
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-inner">
        <button className="nav-logo" onClick={() => go('top')} aria-label="Home">
          {profile.initials}
        </button>

        <a className="nav-email" href={`mailto:${contact.email}`} data-cursor>
          {contact.email}
        </a>

        <nav className={`nav-links ${open ? 'open' : ''}`}>
          {links.map((l) => (
            <a key={l.id} onClick={() => go(l.id)} role="button" tabIndex={0}>
              {l.label}
            </a>
          ))}
          <div className="nav-socials">
            {socials.map((s) => {
              const Icon = iconByKey[s.key]
              return (
                <a
                  key={s.key}
                  href={s.url}
                  target={s.url.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  aria-label={s.label}
                  onClick={() => setOpen(false)}
                >
                  {Icon ? <Icon /> : s.label[0]}
                </a>
              )
            })}
          </div>
        </nav>

        <button
          className={`nav-toggle ${open ? 'open' : ''}`}
          onClick={() => setOpen((o) => !o)}
          aria-label="Menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}
