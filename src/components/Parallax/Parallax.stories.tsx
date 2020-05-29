import React, { FunctionComponent } from 'react'
import Parallax from './Parallax'

export default {
  title: 'Components|Parallax',
  component: Parallax,
}

export const Default: FunctionComponent = () => (
  <Parallax
    image="https://images.unsplash.com/photo-1494029722188-672a328c4989?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2191&q=80"
    title="Hot air baloons"
  />
)
