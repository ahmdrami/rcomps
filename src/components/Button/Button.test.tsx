import React from 'react'
import { screen, render } from '@testing-library/react'
import StyledButton from './Button'

describe('Button', () => {
  test('should render', () => {
    render(<StyledButton variant="primary">Hi</StyledButton>)
    expect(screen.getByText(/hi/i)).toBeInTheDocument()
  })
})
