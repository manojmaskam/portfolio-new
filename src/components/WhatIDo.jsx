import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { services } from '../data/profile'

gsap.registerPlugin(ScrollTrigger)

// The avatar (in AvatarStage behind) stays put while these service cards reveal
// on the right, decorated with scanner corner-brackets — as in the reference.
export default function WhatIDo() {
  const root = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.wid-watermark', {
        xPercent: -8,
        opacity: 0,
        ease: 'none',
        scrollTrigger: { trigger: root.current, start: 'top 70%', end: 'top 20%', scrub: true },
      })
      gsap.utils.toArray('.wid-card').forEach((card) => {
        gsap.from(card, {
          x: 60,
          autoAlpha: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: { trigger: card, start: 'top 85%', toggleActions: 'play none none none' },
        })
      })
    }, root)
    return () => ctx.revert()
  }, [])

  return (
    <section className="whatido" id="whatido" ref={root}>
      <h2 className="wid-watermark">WHAT I DO</h2>
      <div className="container wid-inner">
        <div className="wid-cards">
          {services.map((s) => (
            <article className="wid-card" key={s.title} data-cursor>
              <span className="corner tl" />
              <span className="corner tr" />
              <span className="corner bl" />
              <span className="corner br" />
              <h3>{s.title}</h3>
              <p className="wid-sub">{s.sub}</p>
              <p className="wid-body">{s.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
