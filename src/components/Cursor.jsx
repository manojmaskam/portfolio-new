import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

// Trailing blob cursor that shrinks over [data-cursor="disable"] and
// stretches over [data-cursor="icons"]. Ported from the reference.
export default function Cursor() {
  const ref = useRef(null)

  useEffect(() => {
    let stuck = false
    const el = ref.current
    const mouse = { x: 0, y: 0 }
    const pos = { x: 0, y: 0 }

    const onMove = (e) => { mouse.x = e.clientX; mouse.y = e.clientY }
    document.addEventListener('mousemove', onMove)

    const raf = () => {
      if (!stuck) {
        const speed = 6
        pos.x += (mouse.x - pos.x) / speed
        pos.y += (mouse.y - pos.y) / speed
        gsap.to(el, { x: pos.x, y: pos.y, duration: .1 })
      }
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    const handlers = []
    document.querySelectorAll('[data-cursor]').forEach((node) => {
      const over = (e) => {
        const rect = e.currentTarget.getBoundingClientRect()
        if (node.dataset.cursor === 'icons') {
          el.classList.add('cursor-icons')
          gsap.to(el, { x: rect.left, y: rect.top, duration: .1 })
          el.style.setProperty('--cursorH', `${rect.height}px`)
          stuck = true
        }
        if (node.dataset.cursor === 'disable') el.classList.add('cursor-disable')
      }
      const out = () => { el.classList.remove('cursor-disable', 'cursor-icons'); stuck = false }
      node.addEventListener('mouseover', over)
      node.addEventListener('mouseout', out)
      handlers.push([node, over, out])
    })

    return () => {
      document.removeEventListener('mousemove', onMove)
      handlers.forEach(([node, over, out]) => {
        node.removeEventListener('mouseover', over)
        node.removeEventListener('mouseout', out)
      })
    }
  }, [])

  return <div className="cursor-main" ref={ref} />
}
