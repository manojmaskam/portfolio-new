// Tiny shared signal read inside the R3F render loop. ScrollTrigger and the
// pointer listener write here; the Avatar reads it every frame. Kept outside
// React state on purpose — this updates ~60fps and must not re-render.
export const avatarState = {
  scroll: 0, // 0 at hero top -> 1 at end of "What I Do"
  px: 0, // pointer x, normalized -1..1
  py: 0, // pointer y, normalized -1..1
}

if (typeof window !== 'undefined') {
  window.addEventListener('pointermove', (e) => {
    avatarState.px = (e.clientX / window.innerWidth) * 2 - 1
    avatarState.py = (e.clientY / window.innerHeight) * 2 - 1
  })
}
