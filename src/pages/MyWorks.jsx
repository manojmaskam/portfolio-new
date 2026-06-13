import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { config } from '../data/config'
import { ArrowOut } from '../lib/icons'

// Full projects page (route: /myworks).
export default function MyWorks() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <main className="main-body myworks">
      <div className="myworks-inner section-container">
        <Link to="/" className="myworks-back" data-cursor="disable">← Back to Home</Link>
        <h1 className="myworks-title">A collection of my<br />projects &amp; creations</h1>

        <div className="myworks-grid">
          {config.projects.map((p, i) => (
            <article className="pcard" key={p.id}>
              <div className="pcard-top">
                <span className="pcard-num">{String(i + 1).padStart(2, '0')}</span>
                <span className="pcard-cat">{p.category}</span>
              </div>
              <img className="pcard-img" src={p.image} alt={p.title} loading="lazy" />
              <h3>{p.title} <ArrowOut /></h3>
              <p>{p.description}</p>
              <div className="pcard-tech">
                {p.technologies.split(',').map((t) => <span key={t}>{t.trim()}</span>)}
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  )
}
