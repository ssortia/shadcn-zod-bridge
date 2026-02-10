import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Button } from '../Button'

describe('Button', () => {
  it('renders button with correct text', () => {
    render(<Button />)
    
    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
    expect(button).toHaveTextContent('Hello')
  })

  it('renders as a button element', () => {
    render(<Button />)
    
    const button = screen.getByRole('button')
    expect(button.tagName).toBe('BUTTON')
  })
})