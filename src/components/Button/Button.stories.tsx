import React, { FunctionComponent } from 'react'
import Button from './Button'
import { action } from '@storybook/addon-actions'

export default {
  title: 'Components|Button',
  component: Button,
}

export const primary: FunctionComponent = () => (
  <Button variant="primary" onClick={action('Clicked')}>
    Hi
  </Button>
)

export const secondary: FunctionComponent = () => (
  <Button variant="secondary" onClick={action('Clicked')}>
    Hi
  </Button>
)
