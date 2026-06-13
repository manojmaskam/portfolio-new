import { config } from '../data/config'

// Large year label: "Present" -> NOW, "2025 - x" -> 2025, else the value.
const yearLabel = (period) =>
  period.includes('Present') ? 'NOW' : period.includes(' - ') ? period.split(' - ')[0] : period

export default function Career() {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>My career <span>&amp;</span><br /> experience</h2>
        <div className="career-info">
          <div className="career-timeline"><div className="career-dot" /></div>
          {config.experiences.map((exp, i) => (
            <div className="career-info-box" key={i}>
              <div className="career-info-in">
                <div className="career-role">
                  <h4>{exp.position}</h4>
                  <h5>{exp.company}</h5>
                </div>
                <h3>{yearLabel(exp.period)}</h3>
              </div>
              <p>{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
