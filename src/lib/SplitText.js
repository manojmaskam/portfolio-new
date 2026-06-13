// Lightweight text splitter, ported from the reference site.
// Wraps each char / word / line in spans so GSAP can animate them individually.
export class SplitText {
  constructor(target, options) {
    this.chars = []
    this.words = []
    this.lines = []
    this.elements = []
    this.originalHTML = new Map()

    const type = options?.type || 'chars,words,lines'
    const linesClass = options?.linesClass || 'split-line'

    let els
    if (typeof target === 'string') els = Array.from(document.querySelectorAll(target))
    else if (target instanceof NodeList) els = Array.from(target)
    else if (Array.isArray(target)) els = target
    else els = [target]

    this.elements = els
    els.forEach((el) => {
      this.originalHTML.set(el, el.innerHTML)
      if (type.includes('chars') && type.includes('words')) {
        this.splitWords(el)
        this.splitCharsFromWords(el)
      } else if (type.includes('chars')) {
        this.splitChars(el)
      } else if (type.includes('words')) {
        this.splitWords(el)
      }
      if (type.includes('lines')) this.splitLines(el, linesClass)
    })
  }

  splitChars(el) {
    const chars = (el.textContent || '').split('')
    el.innerHTML = chars
      .map((c) =>
        c === ' '
          ? '<span class="split-char"> </span>'
          : c === '\n'
          ? '<br>'
          : `<span class="split-char">${c}</span>`
      )
      .join('')
    this.chars.push(...Array.from(el.querySelectorAll('.split-char')))
  }

  splitWords(el) {
    const words = (el.textContent || '').split(/(\s+)/)
    el.innerHTML = words
      .map((w) => (w.trim().length === 0 ? w : `<span class="split-word">${w}</span>`))
      .join('')
    this.words.push(...Array.from(el.querySelectorAll('.split-word')))
  }

  splitCharsFromWords(el) {
    el.querySelectorAll('.split-word').forEach((word) => {
      const chars = (word.textContent || '').split('')
      word.innerHTML = chars.map((c) => `<span class="split-char">${c}</span>`).join('')
      this.chars.push(...Array.from(word.querySelectorAll('.split-char')))
    })
  }

  splitLines(el, linesClass) {
    requestAnimationFrame(() => {
      const items = el.querySelectorAll('.split-word, .split-char')
      if (items.length === 0) return
      let current = []
      const lines = []
      let top = 0
      items.forEach((item) => {
        const rect = item.getBoundingClientRect()
        if (top === 0) top = rect.top
        if (Math.abs(rect.top - top) > 5) {
          if (current.length > 0) lines.push([...current])
          current = [item]
          top = rect.top
        } else current.push(item)
      })
      if (current.length > 0) lines.push(current)
      lines.forEach((line) => {
        if (line.length === 0) return
        const span = document.createElement('span')
        span.className = linesClass
        span.style.display = 'block'
        const first = line[0]
        first.parentNode?.insertBefore(span, first)
        line.forEach((item) => {
          if (item.parentNode === span.parentNode) span.appendChild(item)
        })
      })
      this.lines.push(...Array.from(el.querySelectorAll(`.${linesClass}`)))
    })
  }

  revert() {
    this.elements.forEach((el) => {
      const html = this.originalHTML.get(el)
      if (html !== undefined) el.innerHTML = html
    })
    this.chars = []
    this.words = []
    this.lines = []
    this.originalHTML.clear()
  }
}
