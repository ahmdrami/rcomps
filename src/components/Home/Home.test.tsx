import React from 'react'
import { render, screen } from '@testing-library/react'
import Home from './Home'
describe('Home', () => {
  test('should render the compnent', () => {
    render(<Home />)
    expect(screen.getByText(/home/i)).toBeInTheDocument()
  })
})
