import { Component, Suspense, lazy } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, ContactShadows } from '@react-three/drei'
import { profile } from '../data/profile'
import Blob from './Blob'
import Desk from './Desk'
import Particles from './Particles'

const Avatar = lazy(() => import('./Avatar'))

// If the avatar GLB fails (bad URL, offline, CORS), fall back to the Blob so the
// hero is never broken.
class AvatarBoundary extends Component {
  constructor(p) {
    super(p)
    this.state = { failed: false }
  }
  static getDerivedStateFromError() {
    return { failed: true }
  }
  render() {
    if (this.state.failed) return <Blob />
    return this.props.children
  }
}

// Fixed full-viewport canvas living behind the Hero + What-I-Do sections.
// Particles + key lighting + the avatar/desk. The stage's opacity is faded out
// by CSS once the user scrolls past What-I-Do (class toggled on the parent).
export default function AvatarCanvas() {
  const hasAvatar = Boolean(profile.avatarUrl)
  return (
    <Canvas
      className="avatar-canvas"
      dpr={[1, 1.8]}
      shadows
      camera={{ position: [0, 0.15, 4.2], fov: 38 }}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
    >
      <ambientLight intensity={0.55} />
      <directionalLight position={[3, 5, 4]} intensity={1.4} castShadow />
      <pointLight position={[-4, 1, 2]} intensity={2.2} color="#7c5cff" />
      <pointLight position={[4, 0, 3]} intensity={1.8} color="#ff3d7f" />
      <spotLight position={[0, 6, 2]} angle={0.5} penumbra={1} intensity={1.2} color="#19e6c4" />

      <Suspense fallback={null}>
        <AvatarBoundary>
          {hasAvatar ? <Avatar url={profile.avatarUrl} /> : <Blob />}
        </AvatarBoundary>
        <Desk />
        <Particles />
        <ContactShadows position={[0, -1.95, 0]} opacity={0.5} scale={8} blur={2.6} far={4} color="#000000" />
        <Environment preset="city" />
      </Suspense>
    </Canvas>
  )
}
