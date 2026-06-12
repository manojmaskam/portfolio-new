import { Suspense, lazy, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { avatarState } from './avatarState'
import ErrorBoundary from '../components/ErrorBoundary'

gsap.registerPlugin(ScrollTrigger)

const AvatarCanvas = lazy(() => import('./AvatarCanvas'))

// Fixed canvas that sits behind the Hero + What-I-Do block. A single
// ScrollTrigger spanning that block writes progress (0..1) into avatarState,
// and fades the whole stage out as the user leaves the zone.
export default function AvatarStage({ start, zoneId = 'avatar-zone' }) {
  const stage = useRef(null)

  useEffect(() => {
    if (!start) return
    const zone = document.getElementById(zoneId)
    if (!zone) return

    const st = ScrollTrigger.create({
      trigger: zone,
      start: 'top top',
      end: 'bottom bottom',
      onUpdate: (self) => {
        avatarState.scroll = self.progress
      },
    })

    // Fade the stage out over the last section of the zone.
    const fade = ScrollTrigger.create({
      trigger: zone,
      start: 'bottom 75%',
      end: 'bottom 25%',
      scrub: true,
      onUpdate: (self) => {
        if (stage.current) stage.current.style.opacity = String(1 - self.progress)
      },
    })

    return () => {
      st.kill()
      fade.kill()
    }
  }, [start, zoneId])

  return (
    <div className="avatar-stage" ref={stage} aria-hidden="true">
      {start && (
        <ErrorBoundary fallback={null}>
          <Suspense fallback={null}>
            <AvatarCanvas />
          </Suspense>
        </ErrorBoundary>
      )}
    </div>
  )
}
