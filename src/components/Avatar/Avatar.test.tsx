
import React from 'react'
import { screen, render } from '@testing-library/react'
import Avatar from './Avatar'

describe('Avatar', () => {
  test('should render the component', () => {
    render(<Avatar>Hi</Avatar>)
    expect(screen.getByText(/hi/i)).toBeInTheDocument()
  })

  test('should create a snaphot', () => {
    const { asFragment } = render(
      <Avatar>Hi</Avatar>
    )
    expect(asFragment()).toMatchSnapshot()
  })
})
