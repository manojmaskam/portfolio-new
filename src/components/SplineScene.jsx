import { Suspense, lazy, Component } from 'react'
import { config } from '../data/config'

// Spline renders an interactive 3D scene from a .splinecode URL. Lazy-loaded so
// the heavy runtime only ships when a scene is actually configured.
const Spline = lazy(() => import('@splinetool/react-spline'))

// If the scene URL is missing/unreachable, render the provided fallback.
class Boundary extends Component {
  constructor(p) { super(p); this.state = { err: false } }
  static getDerivedStateFromError() { return { err: true } }
  componentDidCatch(e) { console.warn('Spline failed, using fallback:', e?.message) }
  render() { return this.state.err ? this.props.fallback : this.props.children }
}

export default function SplineScene({ fallback }) {
  if (!config.splineUrl) return fallback
  return (
    <Boundary fallback={fallback}>
      <Suspense fallback={fallback}>
        <Spline scene={config.splineUrl} style={{ width: '100%', height: '100%' }} />
      </Suspense>
    </Boundary>
  )
}
