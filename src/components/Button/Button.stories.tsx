import React from 'react'
import { action } from '@storybook/addon-actions'
import { select, withKnobs } from '@storybook/addon-knobs'
import StyledButton from './Button'

export default {
  title: 'Component|StyledButton',
  component: StyledButton,
  decorators: [withKnobs],
}

export const Secondary = () => (
  <StyledButton
    variant={select('Variant', ['primary', 'secondary'], 'primary')}
    onClick={action('click')}
  >
    Styled Button
  </StyledButton>
)
