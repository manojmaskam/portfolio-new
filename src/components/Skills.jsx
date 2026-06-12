import { useRef } from 'react'
import { skills } from '../data/profile'
import { useReveal } from '../hooks/useReveal'

// Grid of brand logos (via simpleicons CDN) with a cursor-following glow.
// A failed logo gracefully swaps to a monogram tile.
export default function Skills() {
  const scope = useReveal('[data-reveal]', { y: 30 })
  const gridRef = useRef(null)

  const onMove = (e) => {
    const g = gridRef.current
    if (!g) return
    const r = g.getBoundingClientRect()
    g.style.setProperty('--gx', `${e.clientX - r.left}px`)
    g.style.setProperty('--gy', `${e.clientY - r.top}px`)
  }

  return (
    <section className="section skills" id="skills" ref={scope}>
      <div className="container">
        <span className="section-label" data-reveal>
          Skillset &amp; Tools
        </span>
        <h2 className="section-title" data-reveal>
          Tools &amp; technologies
        </h2>

        <div className="skills-grid" ref={gridRef} onMouseMove={onMove} data-reveal>
          <span className="skills-glow" />
          {skills.map((s) => (
            <div className="skill-tile" key={s.name} data-cursor>
              <img
                src={`https://cdn.simpleicons.org/${s.slug}`}
                alt={s.name}
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.style.display = 'none'
                  e.currentTarget.nextSibling.style.display = 'grid'
                }}
              />
              <span className="skill-mono" style={{ display: 'none' }}>
                {s.name.slice(0, 2)}
              </span>
              <span className="skill-name">{s.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
