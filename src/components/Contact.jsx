import { contact, profile } from '../data/profile'
import { useReveal } from '../hooks/useReveal'
import { ArrowUpRight } from './icons'

const socialLinks = [
  { label: 'GitHub', url: contact.github },
  { label: 'LinkedIn', url: contact.linkedin },
  { label: 'Twitter', url: contact.twitter },
  { label: 'Email', url: `mailto:${contact.email}` },
]

// Footer-style contact: giant name + 3 columns (Email/Location, Social, Credit).
export default function Contact() {
  const scope = useReveal('[data-reveal]', { y: 36 })
  return (
    <section className="section contact" id="contact" ref={scope}>
      <div
        className="glow"
        style={{ width: 520, height: 520, background: 'var(--accent)', left: '50%', top: '10%', transform: 'translateX(-50%)', opacity: 0.16 }}
      />
      <div className="container">
        <p className="contact-pre" data-reveal>
          Have a project in mind? Let's build it.
        </p>
        <h2 className="contact-name" data-reveal>
          {profile.shortName}
        </h2>

        <div className="contact-grid">
          <div className="contact-col" data-reveal>
            <span className="contact-col-h">Email</span>
            <a href={`mailto:${contact.email}`} data-cursor>
              {contact.email}
            </a>
            <span className="contact-col-h" style={{ marginTop: 22 }}>
              Location
            </span>
            <span className="text-dim">{contact.location}</span>
          </div>

          <div className="contact-col" data-reveal>
            <span className="contact-col-h">Social</span>
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.url}
                target={s.url.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                className="contact-social-link"
                data-cursor
              >
                {s.label} <ArrowUpRight />
              </a>
            ))}
          </div>

          <div className="contact-col" data-reveal>
            <span className="contact-col-h">Designed &amp; Developed by</span>
            <span className="accent" style={{ fontWeight: 600 }}>
              {profile.name}
            </span>
            <span className="text-dim" style={{ marginTop: 16 }}>
              © 2026 — Built from scratch with React, Three.js &amp; GSAP.
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
