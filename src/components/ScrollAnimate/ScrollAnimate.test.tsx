import React from 'react'
import { screen, render } from '@testing-library/react'
import ScrollAnimate from './ScrollAnimate'

describe('ScrollAnimate', () => {
  test('should create a snaphot', () => {
    const { asFragment } = render(<ScrollAnimate>Hi</ScrollAnimate>)
    expect(asFragment()).toMatchSnapshot()
  })
})
