import { Link } from 'react-router-dom'
import { config } from '../data/config'
import { ArrowOut } from '../lib/icons'

// Horizontally-pinned project showcase (first 5 projects + a "see all" card).
// The horizontal scroll is wired up in lib/animations.js (runWork).
export default function Work() {
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>My <span>Work</span></h2>
        <div className="work-flex">
          {config.projects.slice(0, 5).map((p, i) => (
            <div className="work-box" key={p.id}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{i + 1}</h3>
                  <div>
                    <h4>{p.title}</h4>
                    <p>{p.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{p.technologies}</p>
              </div>
              <div className="work-image">
                <a className="work-image-in" href="#work" data-cursor="disable">
                  <div className="work-link"><ArrowOut /></div>
                  <img src={p.image} alt={p.title} />
                </a>
              </div>
            </div>
          ))}
          <div className="work-box work-box-cta">
            <div className="see-all-works">
              <h3>Want to see more?</h3>
              <p>Explore all of my projects and creations</p>
              <Link to="/myworks" className="see-all-btn" data-cursor="disable">See All Works →</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
