import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { profile } from '../data/profile'

// Brief intro overlay: counts to 100, fills a bar, then slides away.
export default function Loader({ onDone }) {
  const root = useRef(null)
  const barFill = useRef(null)
  const [count, setCount] = useState(0)

  useEffect(() => {
    const obj = { v: 0 }
    const tl = gsap.timeline()
    tl.to(obj, {
      v: 100,
      duration: 1.4,
      ease: 'power2.inOut',
      onUpdate: () => setCount(Math.round(obj.v)),
    })
    tl.to(barFill.current, { width: '100%', duration: 1.4, ease: 'power2.inOut' }, 0)
    tl.to(root.current, {
      yPercent: -100,
      duration: 0.8,
      ease: 'power3.inOut',
      delay: 0.15,
      onComplete: onDone,
    })
    return () => tl.kill()
  }, [onDone])

  return (
    <div className="loader" ref={root}>
      <div className="loader-inner">
        <div className="loader-name">{profile.name}</div>
        <div className="loader-count">{count}%</div>
        <div className="loader-bar">
          <i ref={barFill} />
        </div>
      </div>
    </div>
  )
}
