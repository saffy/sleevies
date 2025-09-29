import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import App from './App'

describe('App', () => {
  it('renders the Sleevies heading', () => {
    render(<App />)
    expect(screen.getByText('Sleevies')).toBeInTheDocument()
  })

  it('renders the get started button', () => {
    render(<App />)
    expect(screen.getByText('Get Started')).toBeInTheDocument()
  })

  it('displays the tagline', () => {
    render(<App />)
    expect(screen.getByText(/Create beautiful, printable sewing patterns/)).toBeInTheDocument()
  })
})