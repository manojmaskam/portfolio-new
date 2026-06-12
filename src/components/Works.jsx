import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { projects } from '../data/profile'
import { ArrowUpRight } from './icons'

gsap.registerPlugin(ScrollTrigger)

// Horizontal-scrolling project gallery: the section pins and the card track
// pans sideways with vertical scroll, as in the reference.
export default function Works() {
  const root = useRef(null)
  const track = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const t = track.current
      const getScroll = () => -(t.scrollWidth - window.innerWidth + 80)
      const tween = gsap.to(t, {
        x: getScroll,
        ease: 'none',
        scrollTrigger: {
          trigger: root.current,
          start: 'top top',
          end: () => `+=${t.scrollWidth - window.innerWidth + 80}`,
          scrub: 1,
          pin: true,
          invalidateOnRefresh: true,
          anticipatePin: 1,
        },
      })
      return () => tween.kill()
    }, root)
    return () => ctx.revert()
  }, [])

  return (
    <section className="works" id="work" ref={root}>
      <div className="works-track" ref={track}>
        <div className="works-intro">
          <span className="section-label">Selected Work</span>
          <h2 className="section-title">
            My <span className="grad">Work</span>
          </h2>
          <p className="text-dim">A collection of things I've designed and built. Scroll →</p>
          <Link to="/myworks" className="cta cta-ghost" data-cursor>
            See All Works <ArrowUpRight />
          </Link>
        </div>

        {projects.map((p, i) => (
          <Link
            to="/myworks"
            className={`work-card ${p.real ? '' : 'is-wip'}`}
            key={p.title}
            data-cursor
          >
            <div className="work-card-top">
              <span className="work-num">{String(i + 1).padStart(2, '0')}</span>
              <span className="work-meta">
                <strong>{p.title}</strong>
                <em>{p.category}</em>
              </span>
            </div>
            <div
              className="work-thumb"
              style={{
                background: `linear-gradient(135deg, ${p.tint[0]}, ${p.tint[1]})`,
              }}
            >
              <span className="work-thumb-name">{p.title}</span>
              {!p.real && <span className="w-badge">WIP</span>}
            </div>
            <div className="work-card-tech">
              <span className="tech-label">Tools &amp; features</span>
              <p>{p.technologies.join(' · ')}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
