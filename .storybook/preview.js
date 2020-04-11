import React from 'react'
import { addDecorator } from '@storybook/react'
import { ThemeProvider } from 'theme-ui'
import theme from '../src/theme'

addDecorator((story) => (
  <ThemeProvider theme={theme}>
    {story()}
  </ThemeProvider>
))
