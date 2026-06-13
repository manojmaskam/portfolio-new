import { useEffect } from 'react'
import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// Smooth scrolling driven by Lenis, synced to GSAP's ticker. ScrollTrigger is
// updated every frame (not only on Lenis events) so scroll-driven animations
// track the real scroll position no matter what drives it (wheel, drag,
// keyboard, programmatic). Exposes the instance on window.__lenis so the navbar
// can drive anchor scrolls.
export function useLenis() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.7,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      wheelMultiplier: 1.7,
      touchMultiplier: 2,
      smoothWheel: true,
    })

    window.__lenis = lenis
    lenis.on('scroll', ScrollTrigger.update)

    const raf = (time) => {
      lenis.raf(time * 1000)
      ScrollTrigger.update() // belt-and-suspenders: keep triggers in sync every frame
    }
    gsap.ticker.add(raf)
    gsap.ticker.lagSmoothing(0)

    return () => {
      gsap.ticker.remove(raf)
      lenis.destroy()
      window.__lenis = null
    }
  }, [])
}
