import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { profile } from '../data/profile'

// Text overlay for the hero. The 3D avatar sits behind it (AvatarStage).
// Name sits on the left; the rotating role label sits on the right.
export default function Hero({ start }) {
  const root = useRef(null)
  const [roleIdx, setRoleIdx] = useState(0)

  useEffect(() => {
    if (!start) return
    const ctx = gsap.context(() => {
      gsap.from('[data-hero-anim]', {
        yPercent: 110,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        stagger: 0.08,
        delay: 0.1,
      })
    }, root)
    return () => ctx.revert()
  }, [start])

  useEffect(() => {
    const id = setInterval(
      () => setRoleIdx((i) => (i + 1) % profile.roles.length),
      2200
    )
    return () => clearInterval(id)
  }, [])

  return (
    <section className="hero" id="top" ref={root}>
      <div className="container hero-inner">
        <div className="hero-left">
          <div className="reveal-line">
            <p className="hero-hi" data-hero-anim>
              Hello! I'm
            </p>
          </div>
          <h1 className="hero-name">
            <span className="reveal-line">
              <span data-hero-anim>Maskam</span>
            </span>
            <span className="reveal-line">
              <span data-hero-anim>Manoj Kumar</span>
            </span>
          </h1>
        </div>

        <div className="hero-right" data-hero-anim>
          <span className="hero-an">An</span>
          <span className="hero-role">{profile.roles[roleIdx]}</span>
        </div>
      </div>

      <div className="hero-scroll">
        <span className="mouse" />
        Scroll to explore
      </div>
    </section>
  )
}
