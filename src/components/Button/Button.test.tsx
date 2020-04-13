import React from 'react'
import { screen, render } from '@testing-library/react'
import Button from './Button'

describe('Button', () => {
  test('should render the component', () => {
    render(<Button variant="primary">Hi</Button>)
    expect(screen.getByText(/hi/i)).toBeInTheDocument()
  })

  test('should create a snaphot', () => {
    const { asFragment } = render(<Button variant="primary">Hi</Button>)
    expect(asFragment()).toMatchSnapshot()
  })
})
