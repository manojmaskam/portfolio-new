import { profile, education } from '../data/profile'
import { useReveal } from '../hooks/useReveal'

const stats = [
  { n: '5+', l: 'AI / ML Projects' },
  { n: '15+', l: 'Technologies' },
  { n: '2024', l: 'B.Tech, CSE' },
]

export default function About() {
  const scope = useReveal('[data-reveal]')
  return (
    <section className="section about" id="about" ref={scope}>
      <div className="container">
        <span className="section-label" data-reveal>
          About Me
        </span>
        <div className="about-grid">
          <p className="about-lead" data-reveal>
            I build <em>intelligent systems</em> and <em>modern web apps</em> —
            bridging machine learning and full-stack engineering.
          </p>
          <div className="about-body">
            {profile.about.map((p, i) => (
              <p key={i} data-reveal>
                {p}
              </p>
            ))}
            <div className="about-stats" data-reveal>
              {stats.map((s) => (
                <div className="stat" key={s.l}>
                  <b>{s.n}</b>
                  <span>{s.l}</span>
                </div>
              ))}
            </div>
            <p data-reveal style={{ marginTop: 28, color: 'var(--text-faint)' }}>
              {education.degree} · {education.school} · {education.date}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
