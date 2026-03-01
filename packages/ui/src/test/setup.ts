import '@testing-library/jest-dom'
import { cleanup } from '@testing-library/react'
import { afterEach } from 'vitest'

// Polyfill ResizeObserver for Radix UI components in jsdom
globalThis.ResizeObserver = class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}

// Polyfill scrollIntoView for cmdk (Command component) in jsdom
Element.prototype.scrollIntoView = () => {}

// Cleanup after each test case
afterEach(() => {
  cleanup()
})