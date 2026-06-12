import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { avatarState } from './avatarState'

// A low-poly desk + glowing monitor + keyboard, built from primitives.
// Fades/scales in as the user scrolls into the "work" phase (scroll -> 1),
// mirroring the reference where the avatar sits down at a pink-lit monitor.
export default function Desk() {
  const group = useRef()

  useFrame(() => {
    if (!group.current) return
    const p = avatarState.scroll
    const show = Math.max(0, (p - 0.45) / 0.55) // appears in the second half
    group.current.visible = show > 0.01
    const s = 0.6 + show * 0.4
    group.current.scale.setScalar(s)
    group.current.position.y = -1.15 + (1 - show) * -0.6
    group.current.traverse((o) => {
      if (o.material) {
        o.material.transparent = true
        o.material.opacity = show
      }
    })
  })

  return (
    <group ref={group} position={[0, -1.15, 0.35]}>
      {/* desk top */}
      <mesh position={[0, 0, 0]} castShadow>
        <boxGeometry args={[2.6, 0.08, 1.1]} />
        <meshStandardMaterial color="#d9d4e6" roughness={0.6} metalness={0.1} />
      </mesh>
      {/* legs */}
      {[
        [-1.15, -0.5, 0.45],
        [1.15, -0.5, 0.45],
        [-1.15, -0.5, -0.45],
        [1.15, -0.5, -0.45],
      ].map((pos, i) => (
        <mesh key={i} position={pos}>
          <boxGeometry args={[0.07, 1, 0.07]} />
          <meshStandardMaterial color="#c9c4d6" roughness={0.7} />
        </mesh>
      ))}
      {/* monitor */}
      <group position={[0.35, 0.55, -0.1]}>
        <mesh>
          <boxGeometry args={[1.15, 0.72, 0.06]} />
          <meshStandardMaterial color="#1a1a22" roughness={0.4} />
        </mesh>
        <mesh position={[0, 0, 0.04]}>
          <planeGeometry args={[1.02, 0.6]} />
          <meshStandardMaterial
            color="#ff3d7f"
            emissive="#ff3d7f"
            emissiveIntensity={1.6}
            toneMapped={false}
          />
        </mesh>
        <mesh position={[0, -0.5, 0]}>
          <boxGeometry args={[0.12, 0.3, 0.08]} />
          <meshStandardMaterial color="#1a1a22" />
        </mesh>
      </group>
      {/* keyboard */}
      <mesh position={[-0.15, 0.06, 0.3]} rotation={[-0.05, 0, 0]}>
        <boxGeometry args={[0.95, 0.04, 0.32]} />
        <meshStandardMaterial color="#e8e4f0" roughness={0.5} />
      </mesh>
    </group>
  )
}
