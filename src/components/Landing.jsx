import { config } from '../data/config'
import Avatar3D from './Avatar3D'
import SplineScene from './SplineScene'

// Hero visual priority: Spline scene (config.splineUrl) > Ready Player Me
// avatar (config.avatarUrl) > glowing portrait /public/images/me.svg.
export default function Landing() {
  const parts = config.developer.fullName.split(' ')
  const first = parts[0] || config.developer.name
  const last = parts.slice(1).join(' ')

  return (
    <div className="landing-section" id="landingDiv">
      <div className="landing-circle1" />
      <div className="landing-circle2" />
      <div className="landing-container">
        <div className="landing-intro">
          <h2>Hello! I'm</h2>
          <h1>{first.toUpperCase()} <br />{last && <span>{last.toUpperCase()}</span>}</h1>
        </div>

        <div className="landing-info">
          <h3>An</h3>
          <h2 className="landing-info-h2"><div className="landing-h2-1">AI Engineer</div></h2>
          <h2><div className="landing-h2-info">Full-Stack Developer</div></h2>
        </div>

        <div className="mobile-photo">
          <img src="/images/me.svg" alt={config.developer.fullName} />
        </div>
      </div>

      <div className={`landing-photo ${config.splineUrl ? 'landing-photo--spline' : ''}`}>
        <div className="character-rim" />
        {config.splineUrl
          ? <SplineScene fallback={<img src="/images/me.svg" alt={config.developer.fullName} />} />
          : <Avatar3D fallback={<img src="/images/me.svg" alt={config.developer.fullName} />} />}
      </div>
    </div>
  )
}
