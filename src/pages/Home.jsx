import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Landing from '../components/Landing'
import About from '../components/About'
import WhatIDo from '../components/WhatIDo'
import Career from '../components/Career'
import Work from '../components/Work'
import TechStack from '../components/TechStack'
import CTA from '../components/CTA'
import Contact from '../components/Contact'
import { initScrollAnimations, runEntrance } from '../lib/animations'

export default function Home({ started }) {
  const location = useLocation()

  // Initialise scroll-driven animations once the loader is done and the DOM
  // is painted. Re-run on resize so pinned/horizontal sections recompute.
  useEffect(() => {
    if (!started) return
    try { runEntrance() } catch (e) { console.error('entrance failed', e) }
    // Build triggers after paint, then again after everything (images/fonts)
    // has loaded so pin/horizontal positions are measured accurately.
    const t = setTimeout(() => initScrollAnimations(), 600)
    const onLoad = () => initScrollAnimations()
    const onResize = () => initScrollAnimations()
    window.addEventListener('load', onLoad)
    window.addEventListener('resize', onResize)
    return () => {
      clearTimeout(t)
      window.removeEventListener('load', onLoad)
      window.removeEventListener('resize', onResize)
    }
  }, [started])

  // Returning from /myworks with a target section -> scroll to it.
  useEffect(() => {
    const target = location.state?.scrollTo
    if (target) requestAnimationFrame(() => document.getElementById(target)?.scrollIntoView({ behavior: 'smooth' }))
  }, [location.state])

  return (
    <main className="main-body">
      <Landing />
      <About />
      <WhatIDo />
      <Career />
      <Work />
      <TechStack />
      <CTA />
      <Contact />
    </main>
  )
}
