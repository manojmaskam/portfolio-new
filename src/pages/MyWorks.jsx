import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { projects } from '../data/profile'
import { useReveal } from '../hooks/useReveal'
import { ArrowLeft } from '../components/icons'

// Full projects page (route: /myworks). Real projects + clearly-marked
// placeholders for you to fill in. Cards have a pointer-following glow.
export default function MyWorks() {
  const scope = useReveal('[data-reveal]', { y: 40 })

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect()
    e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`)
    e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`)
  }

  return (
    <main className="myworks" ref={scope}>
      <div className="container">
        <Link to="/" className="back-btn" data-reveal>
          <ArrowLeft /> Back to Home
        </Link>

        <span className="section-label" data-reveal>
          All Projects
        </span>
        <h1 className="section-title" data-reveal>
          A collection of my<br />
          projects &amp; creations
        </h1>
        <p className="text-dim" data-reveal style={{ marginTop: 18, maxWidth: 560 }}>
          Explore everything I've built — from AI and computer-vision systems to
          full-stack applications. Cards marked <em>WIP</em> are placeholders to
          be filled in.
        </p>

        <div className="myworks-grid">
          {projects.map((p, i) => (
            <article
              className={`pcard ${p.real ? '' : 'placeholder'}`}
              data-reveal
              key={p.title}
              onMouseMove={onMove}
              data-cursor
            >
              <div className="pcard-top">
                <span className="pcard-num">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="pcard-cat">{p.category}</span>
              </div>
              <h3>
                {p.title}
                <span className="yr">{p.year}</span>
                {!p.real && <span className="w-badge">WIP</span>}
              </h3>
              <p>{p.description}</p>
              <div className="pcard-tech">
                {p.technologies.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  )
}
