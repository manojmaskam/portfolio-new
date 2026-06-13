import { Suspense, useRef, useEffect, Component } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'
import { config } from '../data/config'

// --- Tunables: tweak these to frame your avatar nicely ---
const MODEL_Y = -1.4 // vertical offset (lower = shows more of upper body)
const MODEL_SCALE = 1.25
const CAM = { position: [0, 0, 4.2], fov: 28 }

function AvatarModel({ url }) {
  const { scene } = useGLTF(url)
  const group = useRef()
  const mouse = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const onMove = (e) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  // Idle float + subtle mouse-follow, like the reference character.
  useFrame((state) => {
    const g = group.current
    if (!g) return
    const t = state.clock.elapsedTime
    g.rotation.y = THREE.MathUtils.lerp(g.rotation.y, mouse.current.x * 0.35, 0.06)
    g.rotation.x = THREE.MathUtils.lerp(g.rotation.x, -mouse.current.y * 0.12, 0.06)
    g.position.y = MODEL_Y + Math.sin(t * 1.2) * 0.03
  })

  return <primitive ref={group} object={scene} position={[0, MODEL_Y, 0]} scale={MODEL_SCALE} />
}

function Scene({ url }) {
  return (
    <Canvas camera={CAM} style={{ pointerEvents: 'none' }} gl={{ alpha: true, antialias: true }} dpr={[1, 2]}>
      <ambientLight intensity={0.9} />
      <directionalLight position={[3, 6, 4]} intensity={1.4} />
      <directionalLight position={[-4, 2, -2]} intensity={0.4} />
      <pointLight position={[-3, 2, 3]} intensity={3} color="#c2a4ff" />
      <Suspense fallback={null}>
        <AvatarModel url={url} />
      </Suspense>
    </Canvas>
  )
}

// If the .glb fails to load (bad URL, network, unsupported compression),
// quietly render the photo fallback instead of crashing the page.
class Boundary extends Component {
  constructor(p) { super(p); this.state = { err: false } }
  static getDerivedStateFromError() { return { err: true } }
  componentDidCatch(e) { console.warn('Avatar3D failed, using photo fallback:', e?.message) }
  render() { return this.state.err ? this.props.fallback : this.props.children }
}

export default function Avatar3D({ fallback }) {
  if (!config.avatarUrl) return fallback
  return (
    <Boundary fallback={fallback}>
      <Scene url={config.avatarUrl} />
    </Boundary>
  )
}

if (config.avatarUrl) useGLTF.preload(config.avatarUrl)
