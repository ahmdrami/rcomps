import React from 'react'
import { Button } from 'theme-ui'
import { action } from '@storybook/addon-actions'
import { select, withKnobs } from '@storybook/addon-knobs'

export default {
  title: 'Component|Button',
  component: Button,
  decorators: [withKnobs],
}

export const Default = () => (
  <Button onClick={action('click')}>Primary Button</Button>
)
export const Secondary = () => (
  <Button
    variant={select('Variant', ['primary', 'secondary'], 'primary')}
    onClick={action('click')}
  >
    Secondary Button
  </Button>
)
