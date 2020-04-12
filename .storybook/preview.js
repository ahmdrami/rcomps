import React from 'react'
import { addDecorator } from '@storybook/react'
import { withA11y } from '@storybook/addon-a11y'
import { ThemeProvider } from 'theme-ui'
import theme from '../src/theme'

addDecorator(withA11y)
addDecorator((story) => <ThemeProvider theme={theme}>{story()}</ThemeProvider>)
