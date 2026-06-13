import { useEffect, useRef } from 'react'
import { config } from '../data/config'

// "WHAT I DO" — two stacked cards (AI dev / Full-stack) that expand on hover.
// On touch devices, tapping a card toggles it open.
export default function WhatIDo() {
  const refs = useRef([])
  const set = (el, i) => (refs.current[i] = el)

  useEffect(() => {
    const isTouch = window.matchMedia('(hover: none)').matches
    if (!isTouch) return
    const nodes = refs.current.filter(Boolean)
    const onTap = (e) => toggle(e.currentTarget)
    nodes.forEach((n) => { n.classList.remove('what-noTouch'); n.addEventListener('click', onTap) })
    return () => nodes.forEach((n) => n.removeEventListener('click', onTap))
  }, [])

  const cards = [config.skills.develop, config.skills.design]

  return (
    <div className="whatIDO">
      <div className="what-box">
        <h2>W<span className="hat-h2">HAT</span><div> I<span className="do-h2"> DO</span></div></h2>
      </div>
      <div className="what-box">
        <div className="what-box-in">
          <div className="what-border2">
            <svg width="100%">
              <line x1="0" y1="0" x2="0" y2="100%" stroke="white" strokeWidth="2" strokeDasharray="7,7" />
              <line x1="100%" y1="0" x2="100%" y2="100%" stroke="white" strokeWidth="2" strokeDasharray="7,7" />
            </svg>
          </div>

          {cards.map((card, i) => (
            <div className="what-content what-noTouch" ref={(el) => set(el, i)} key={i}>
              <div className="what-border1">
                <svg height="100%">
                  {i === 0 && <line x1="0" y1="0" x2="100%" y2="0" stroke="white" strokeWidth="2" strokeDasharray="6,6" />}
                  <line x1="0" y1="100%" x2="100%" y2="100%" stroke="white" strokeWidth="2" strokeDasharray="6,6" />
                </svg>
              </div>
              <div className="what-corner" />
              <div className="what-content-in">
                <h3>{card.title}</h3>
                <h4>{card.description}</h4>
                <p>{card.details}</p>
                <h5>Skillset &amp; tools</h5>
                <div className="what-content-flex">
                  {card.tools.map((t, j) => <div className="what-tags" key={j}>{t}</div>)}
                </div>
                <div className="what-arrow" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function toggle(el) {
  el.classList.toggle('what-content-active')
  el.classList.remove('what-sibling')
  if (el.parentElement) {
    Array.from(el.parentElement.children).forEach((sib) => {
      if (sib !== el && sib.classList.contains('what-content')) {
        sib.classList.remove('what-content-active')
        sib.classList.toggle('what-sibling')
      }
    })
  }
}
