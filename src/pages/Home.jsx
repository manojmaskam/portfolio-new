import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Hero from '../components/Hero'
import WhatIDo from '../components/WhatIDo'
import About from '../components/About'
import Career from '../components/Career'
import Works from '../components/Works'
import Skills from '../components/Skills'
import Contact from '../components/Contact'
import AvatarStage from '../three/AvatarStage'

export default function Home({ started }) {
  const location = useLocation()

  // Returning from /myworks with a target section -> scroll to it.
  useEffect(() => {
    const target = location.state?.scrollTo
    if (target) {
      requestAnimationFrame(() => {
        document.getElementById(target)?.scrollIntoView({ behavior: 'smooth' })
      })
    }
  }, [location.state])

  return (
    <main>
      {/* Fixed 3D avatar canvas spans the hero + what-i-do block */}
      <AvatarStage start={started} zoneId="avatar-zone" />

      <div id="avatar-zone">
        <Hero start={started} />
        <WhatIDo />
      </div>

      <About />
      <Career />
      <Works />
      <Skills />
      <Contact />
    </main>
  )
}
