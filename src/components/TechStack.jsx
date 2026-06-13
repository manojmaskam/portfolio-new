import { techStack } from '../data/config'

// Tech-stack "pyramid": rows of glassy icon tiles that light up on hover.
export default function TechStack() {
  return (
    <div className="techstack-new">
      <div className="techstack-bg" />
      <div className="techstack-content">
        <h2>Tech Stack</h2>
        <div className="techstack-pyramid">
          {techStack.map((row, i) => (
            <div className="techstack-row" key={i}>
              {row.map((item, j) => (
                <a className="techstack-item" href={item.url} target="_blank" rel="noopener noreferrer"
                   title={item.name} data-cursor="disable" key={j}>
                  <img src={item.icon} alt={item.name} loading="lazy" />
                  <span>{item.name}</span>
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
