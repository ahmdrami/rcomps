import React from 'react'
import Parallax from './components/Parallax/Parallax'
import { ThemeProvider } from 'theme-ui'
import theme from './theme'
function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Parallax></Parallax>
      </div>
    </ThemeProvider>
  )
}

export default App
