import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'

// Slowly rotating starfield for ambient depth behind the avatar.
export default function Particles({ count = 260 }) {
  const ref = useRef()
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const r = 5 + (i % 50) * 0.05
      const theta = i * 2.399963
      const phi = Math.acos(1 - (2 * (i + 0.5)) / count)
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta)
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      arr[i * 3 + 2] = r * Math.cos(phi) - 2
    }
    return arr
  }, [count])

  useFrame((state) => {
    if (ref.current) ref.current.rotation.y = state.clock.getElapsedTime() * 0.03
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.02} color="#9a8cff" transparent opacity={0.6} sizeAttenuation />
    </points>
  )
}
