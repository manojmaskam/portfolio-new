import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from './SplitText'

gsap.registerPlugin(ScrollTrigger)

// ---- Entrance: reveal the hero text once the loader finishes ----
export function runEntrance() {
  const main = document.getElementsByTagName('main')[0]
  if (main) main.classList.add('main-active')
  gsap.to('body', { backgroundColor: '#0b080c', duration: .5, delay: 1 })

  const heroTargets = ['.landing-info h3', '.landing-intro h2', '.landing-intro h1']
    .flatMap((s) => Array.from(document.querySelectorAll(s)))
  const split = new SplitText(heroTargets, { type: 'chars,lines' })
  gsap.fromTo(
    split.chars,
    { opacity: 0, y: 80, filter: 'blur(5px)' },
    { opacity: 1, duration: 1.2, filter: 'blur(0px)', ease: 'power3.inOut', y: 0, stagger: .025, delay: .3 }
  )

  const roleSplit = new SplitText('.landing-h2-info', { type: 'chars,lines', linesClass: 'split-h2' })
  gsap.fromTo(
    roleSplit.chars,
    { opacity: 0, y: 80, filter: 'blur(5px)' },
    { opacity: 1, duration: 1.2, filter: 'blur(0px)', ease: 'power3.inOut', y: 0, stagger: .025, delay: .3 }
  )
  gsap.fromTo('.landing-info-h2', { opacity: 0, y: 30 }, { opacity: 1, duration: 1.2, ease: 'power1.inOut', y: 0, delay: .8 })
  gsap.fromTo(['.header', '.icons-section', '.nav-fade'], { opacity: 0 }, { opacity: 1, duration: 1.2, ease: 'power1.inOut', delay: .1 })
}

// ---- Scroll: split-text reveal for every .title and .para ----
export function runTextReveal() {
  if (window.innerWidth < 900) {
    document.querySelectorAll('.para, .title').forEach((el) => (el.style.opacity = 1))
    return
  }
  const start = window.innerWidth <= 1024 ? 'top 60%' : '20% 60%'
  const toggle = 'play pause resume reverse'

  document.querySelectorAll('.para').forEach((el) => {
    el.classList.add('visible')
    const split = new SplitText(el, { type: 'lines,words', linesClass: 'split-line' })
    gsap.fromTo(split.words, { autoAlpha: 0, y: 80 }, {
      autoAlpha: 1, duration: 1, ease: 'power3.out', y: 0, stagger: .02,
      scrollTrigger: { trigger: el.parentElement?.parentElement, toggleActions: toggle, start },
    })
  })

  document.querySelectorAll('.title').forEach((el) => {
    const split = new SplitText(el, { type: 'chars,lines', linesClass: 'split-line' })
    gsap.fromTo(split.chars, { autoAlpha: 0, y: 80, rotate: 10 }, {
      autoAlpha: 1, duration: .8, ease: 'power2.inOut', y: 0, rotate: 0, stagger: .03,
      scrollTrigger: { trigger: el.parentElement?.parentElement, toggleActions: toggle, start },
    })
  })
}

// ---- Scroll: career timeline draw-in ----
export function runCareer() {
  const tl = gsap.timeline({
    scrollTrigger: { trigger: '.career-section', start: 'top 50%', end: 'bottom 30%', scrub: 1.5, invalidateOnRefresh: true },
  })
  tl.fromTo('.career-timeline', { maxHeight: '0%' }, { maxHeight: '100%', duration: 1, ease: 'none' }, 0)
    .fromTo('.career-timeline', { opacity: 0 }, { opacity: 1, duration: .2 }, 0)
    .fromTo('.career-info-box', { opacity: 0 }, { opacity: 1, stagger: .1, duration: .5 }, 0)
    .fromTo('.career-dot', { animationIterationCount: 'infinite' }, { animationIterationCount: '1', delay: .3, duration: .1 }, 0)
  if (window.innerWidth > 1024) tl.fromTo('.career-section', { y: 0 }, { y: '20%', duration: .5, delay: .2 }, 0)
}

// ---- Scroll: hero photo "travels" up and fades as you scroll past the hero ----
// Mimics the reference's fixed-but-scroll-driven character motion.
export function runHeroTravel() {
  const photo = document.querySelector('.landing-photo')
  if (!photo || window.innerWidth < 1025) return
  gsap.fromTo(
    photo,
    { xPercent: -50, yPercent: 0, autoAlpha: 1 },
    {
      xPercent: -50, yPercent: -55, autoAlpha: 0, ease: 'none',
      scrollTrigger: { trigger: '#landingDiv', start: 'top top', end: '+=130%', scrub: true, invalidateOnRefresh: true },
    }
  )
}

// ---- Scroll: horizontal pinned works ----
export function runWork() {
  if (window.innerWidth <= 768) return
  let distance = 0
  const boxes = document.getElementsByClassName('work-box')
  if (boxes.length === 0) return
  const containerLeft = document.querySelector('.work-container').getBoundingClientRect().left
  const first = boxes[0].getBoundingClientRect()
  const parentWidth = boxes[0].parentElement.getBoundingClientRect().width
  const pad = parseInt(window.getComputedStyle(boxes[0]).padding) / 2
  distance = first.width * boxes.length - (containerLeft + parentWidth) + pad

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.work-section', start: 'top top', end: `+=${distance}`,
      scrub: 1, pin: true, pinSpacing: true, anticipatePin: 1, id: 'work', invalidateOnRefresh: true,
    },
  })
  tl.to('.work-flex', { x: -distance, ease: 'none' })
  ScrollTrigger.refresh()
}

// Run all scroll animations after the DOM has settled.
export function initScrollAnimations() {
  ScrollTrigger.getAll().forEach((t) => t.kill())
  runHeroTravel()
  runTextReveal()
  runCareer()
  runWork()
  ScrollTrigger.refresh()
}
