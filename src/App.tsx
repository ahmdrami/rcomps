import React, { lazy, useEffect, useState, Suspense } from 'react'
import Parallax from './components/Parallax/Parallax'
import { ThemeProvider } from 'theme-ui'
import theme from './theme'
import { Router } from '@reach/router'
import Home from './components/Home/Home'
import routes from './routes'

const importComponent = (path: string) =>
  lazy(() => import(`./components/${path}/${path}`))

function App() {
  const [views, setViews] = useState<Promise<any>[]>([])

  useEffect(() => {
    async function loadViews() {
      const componentPromises: Promise<any>[] = routes.map(async (route) => {
        const View = await importComponent(route.name)
        console.log(View)
        return <View key={route.name} path={`/${route.name}`} />
      })
      Promise.all(componentPromises).then(setViews)
      console.log(componentPromises, setViews, 'componentPromises')
    }
    loadViews()
    console.log(views, 'VIEWS')
  }, [])

  return (
    <ThemeProvider theme={theme}>
      {/* <Router> */}
        <Suspense fallback="loading">{views}</Suspense>
        {/* <Home path="/" />
        <Parallax path="/parallax" /> */}
      {/* </Router> */}
    </ThemeProvider>
  )
}

export default App
