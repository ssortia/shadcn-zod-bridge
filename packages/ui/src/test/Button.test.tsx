import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Button } from '../Button'

describe('Button', () => {
  it('renders button with correct text', () => {
    render(<Button>Click me</Button>)

    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
    expect(button).toHaveTextContent('Click me')
  })

  it('renders as a button element', () => {
    render(<Button>Test</Button>)

    const button = screen.getByRole('button')
    expect(button.tagName).toBe('BUTTON')
  })

  it('applies variant classes', () => {
    render(<Button variant="destructive">Delete</Button>)

    const button = screen.getByRole('button')
    expect(button).toHaveClass('bg-destructive')
  })
})
