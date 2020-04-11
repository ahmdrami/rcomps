import React from 'react'
import { screen, render } from '@testing-library/react'
import CButton from './Button'
describe('Button', () => {
  test('should render', () => {
    render(<CButton>Hi</CButton>)
    expect(screen.getByText(/hi/i)).toBeInTheDocument()
  })
})
