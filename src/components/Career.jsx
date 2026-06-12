import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { career } from '../data/profile'

gsap.registerPlugin(ScrollTrigger)

// 3-column timeline: role | big year | description, with a central vertical
// line that fills (and a glowing dot that travels) as the user scrolls.
export default function Career() {
  const root = useRef(null)
  const fill = useRef(null)
  const dot = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(fill.current, {
        height: '100%',
        ease: 'none',
        scrollTrigger: {
          trigger: '.tl3-track',
          start: 'top 60%',
          end: 'bottom 70%',
          scrub: true,
          onUpdate: (self) => {
            if (dot.current) dot.current.style.top = `${self.progress * 100}%`
          },
        },
      })
      gsap.utils.toArray('.tl3-row').forEach((row) => {
        gsap.from(row, {
          autoAlpha: 0,
          y: 40,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: { trigger: row, start: 'top 82%', toggleActions: 'play none none none' },
        })
      })
    }, root)
    return () => ctx.revert()
  }, [])

  return (
    <section className="section career" id="career" ref={root}>
      <div className="container">
        <span className="section-label">My Career</span>
        <h2 className="section-title">
          My career &amp;<br />
          <span className="grad">experience</span>
        </h2>

        <div className="tl3-track">
          <div className="tl3-line">
            <span className="tl3-fill" ref={fill} />
            <span className="tl3-dot" ref={dot} />
          </div>

          {career.map((c, i) => (
            <div className="tl3-row" key={i}>
              <div className="tl3-role">
                <h3>{c.role}</h3>
                <span className="tl3-sub">{c.sub}</span>
              </div>
              <div className="tl3-year">{c.year}</div>
              <p className="tl3-desc">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
