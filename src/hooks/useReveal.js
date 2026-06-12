import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// Scroll-reveals every element matching `selector` inside the returned ref,
// fading and rising them in with a stagger as they enter the viewport.
export function useReveal(selector = '[data-reveal]', opts = {}) {
  const scope = useRef(null)
  useEffect(() => {
    const ctx = gsap.context(() => {
      const els = gsap.utils.toArray(selector)
      els.forEach((el) => {
        gsap.from(el, {
          y: opts.y ?? 60,
          autoAlpha: 0,
          duration: opts.duration ?? 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: opts.start ?? 'top 85%',
            toggleActions: 'play none none none',
          },
        })
      })
    }, scope)
    return () => ctx.revert()
  }, [selector])
  return scope
}
