import { useEffect, useRef, useState } from 'react'
import { config } from '../data/config'

// Intro loading screen: counts to 100%, flips to "Welcome", then the black
// pill expands to fill the screen and calls onDone() to start the site.
export default function Loader({ onDone }) {
  const [percent, setPercent] = useState(0)
  const [complete, setComplete] = useState(false)
  const [clicked, setClicked] = useState(false)
  const wrapRef = useRef(null)

  // Fake-load to 100%, then run the completion -> expand -> done sequence.
  // A single self-contained effect avoids dependency races under StrictMode.
  const doneRef = useRef(onDone)
  doneRef.current = onDone
  useEffect(() => {
    const timers = []
    let n = 0
    const id = setInterval(() => {
      n += Math.max(1, Math.round(Math.random() * 6))
      if (n >= 100) {
        n = 100
        setPercent(100)
        clearInterval(id)
        timers.push(setTimeout(() => setComplete(true), 500))
        timers.push(setTimeout(() => setClicked(true), 1400))
        timers.push(setTimeout(() => doneRef.current(), 2300))
        return
      }
      setPercent(n)
    }, 90)
    return () => { clearInterval(id); timers.forEach(clearTimeout) }
  }, [])

  const onMouseMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect()
    e.currentTarget.style.setProperty('--mouse-x', `${e.clientX - r.left}px`)
    e.currentTarget.style.setProperty('--mouse-y', `${e.clientY - r.top}px`)
  }

  return (
    <>
      <div className="loading-header">
        <a href="/#" className="loader-title" data-cursor="disable">{config.developer.fullName.replace(/\s+/g, '')}</a>
        <div className={`loaderGame ${clicked ? 'loader-out' : ''}`}>
          <div className="loaderGame-container">
            <div className="loaderGame-in">
              {Array.from({ length: 27 }).map((_, i) => <div className="loaderGame-line" key={i} />)}
            </div>
            <div className="loaderGame-ball" />
          </div>
        </div>
      </div>

      <div className="loading-screen">
        <div className="loading-marquee">
          <div className="loading-marquee-track">
            {Array.from({ length: 6 }).map((_, i) => (
              <span key={i}>AI Engineer</span>
            ))}
            {Array.from({ length: 6 }).map((_, i) => (
              <span key={`b${i}`}>Full-Stack Developer</span>
            ))}
          </div>
        </div>

        <div className={`loading-wrap ${clicked ? 'loading-clicked' : ''}`} ref={wrapRef} onMouseMove={onMouseMove}>
          <div className="loading-hover" />
          <div className={`loading-button ${complete ? 'loading-complete' : ''}`}>
            <div className="loading-container">
              <div className="loading-content">
                <div className="loading-content-in">Loading <span>{percent}%</span></div>
              </div>
              <div className="loading-box" />
            </div>
            <div className="loading-content2"><span>Welcome</span></div>
          </div>
        </div>
      </div>
    </>
  )
}
