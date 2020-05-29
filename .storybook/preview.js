import React from 'react'
import { addDecorator, addParameters } from '@storybook/react'
import { withA11y } from '@storybook/addon-a11y'
import { ThemeProvider } from 'theme-ui'
import theme from '../src/theme'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';



addParameters({
  viewport: {
    defaultViewport: INITIAL_VIEWPORTS,
  },
});
addDecorator(withA11y)
addDecorator((story) => <ThemeProvider theme={theme}>{story()}</ThemeProvider>)
