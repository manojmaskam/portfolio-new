import { Component } from 'react'

// Generic boundary: if children throw (incl. a failed lazy/dynamic import on a
// flaky connection), render `fallback` instead of crashing the whole app.
export default class ErrorBoundary extends Component {
  constructor(p) {
    super(p)
    this.state = { failed: false }
  }
  static getDerivedStateFromError() {
    return { failed: true }
  }
  componentDidCatch(err) {
    if (import.meta.env.DEV) console.warn('[ErrorBoundary]', err?.message || err)
  }
  render() {
    if (this.state.failed) return this.props.fallback ?? null
    return this.props.children
  }
}
