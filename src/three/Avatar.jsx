import { useEffect, useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'
import { avatarState } from './avatarState'

// Loads a Ready Player Me (or any humanoid GLTF) avatar and brings it to life:
//  - converts the default A-pose to arms-down via static bone rotations
//  - tracks the cursor with the head/neck/spine (eased)
//  - subtle idle breathing
//  - leans + lowers toward the desk as the user scrolls ("sitting to work")
export default function Avatar({ url }) {
  const { scene } = useGLTF(url)
  const root = useRef()

  // Clone so HMR / multiple mounts don't fight over one graph.
  const model = useMemo(() => {
    const c = scene.clone(true)
    c.traverse((o) => {
      if (o.isMesh) {
        o.castShadow = true
        o.frustumCulled = false
        if (o.material) o.material.envMapIntensity = 1.1
      }
    })
    return c
  }, [scene])

  const bones = useRef({})

  useEffect(() => {
    const get = (n) => model.getObjectByName(n)
    bones.current = {
      head: get('Head'),
      neck: get('Neck'),
      spine: get('Spine') || get('Spine1'),
      hips: get('Hips'),
      lArm: get('LeftArm'),
      rArm: get('RightArm'),
      lFore: get('LeftForeArm'),
      rFore: get('RightForeArm'),
    }
    // Pose correction: bring arms down to the sides (A-pose -> rest).
    const { lArm, rArm, lFore, rFore } = bones.current
    if (lArm) lArm.rotation.z += 1.05
    if (rArm) rArm.rotation.z -= 1.05
    if (lFore) lFore.rotation.z += 0.18
    if (rFore) rFore.rotation.z -= 0.18
    // store rest rotations for head/neck/spine
    ;['head', 'neck', 'spine'].forEach((k) => {
      const b = bones.current[k]
      if (b) b.userData.rest = b.rotation.clone()
    })
  }, [model])

  const tmp = useMemo(() => ({ tx: 0, ty: 0 }), [])

  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime()
    const p = avatarState.scroll
    const { head, neck, spine } = bones.current

    // Ease pointer target; reduce influence as we scroll into "work" mode.
    const influence = 1 - Math.min(1, p * 1.4)
    const targetX = avatarState.px * 0.5 * influence
    const targetY = avatarState.py * 0.35 * influence
    tmp.tx += (targetX - tmp.tx) * Math.min(1, delta * 6)
    tmp.ty += (targetY - tmp.ty) * Math.min(1, delta * 6)

    const breathe = Math.sin(t * 1.2) * 0.025

    if (head && head.userData.rest) {
      head.rotation.y = head.userData.rest.y + tmp.tx * 1.1
      head.rotation.x = head.userData.rest.x + tmp.ty * 0.8 + breathe * 0.3
    }
    if (neck && neck.userData.rest) {
      neck.rotation.y = neck.userData.rest.y + tmp.tx * 0.5
      neck.rotation.x = neck.userData.rest.x + tmp.ty * 0.3
    }
    if (spine && spine.userData.rest) {
      spine.rotation.y = spine.userData.rest.y + tmp.tx * 0.25
      // lean forward toward the desk as p -> 1
      spine.rotation.x = spine.userData.rest.x + breathe + p * 0.28
    }

    if (root.current) {
      // Turn slightly and lower as if sitting to the desk.
      root.current.rotation.y = THREE.MathUtils.lerp(0, -0.18, p)
      root.current.position.y = -0.95 - p * 0.15
    }
  })

  return (
    <group ref={root} position={[0, -0.95, 0]}>
      <primitive object={model} />
    </group>
  )
}
