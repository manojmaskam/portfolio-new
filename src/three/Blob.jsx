import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Float, Icosahedron, MeshDistortMaterial } from '@react-three/drei'
import { avatarState } from './avatarState'

// Fallback hero object shown if the avatar GLB fails to load.
export default function Blob() {
  const mesh = useRef()
  useFrame((state) => {
    if (!mesh.current) return
    const t = state.clock.getElapsedTime()
    mesh.current.rotation.x = t * 0.12
    mesh.current.rotation.y = t * 0.16
    const px = avatarState.px * 0.5
    const py = -avatarState.py * 0.5
    mesh.current.position.x += (px - mesh.current.position.x) * 0.05
    mesh.current.position.y += (py - mesh.current.position.y) * 0.05
  })
  return (
    <Float speed={1.4} rotationIntensity={0.6} floatIntensity={1.1}>
      <Icosahedron ref={mesh} args={[1.25, 12]}>
        <MeshDistortMaterial
          color="#7c5cff"
          emissive="#19e6c4"
          emissiveIntensity={0.2}
          roughness={0.15}
          metalness={0.6}
          distort={0.4}
          speed={1.6}
        />
      </Icosahedron>
    </Float>
  )
}
