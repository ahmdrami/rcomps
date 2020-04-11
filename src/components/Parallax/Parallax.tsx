/** @jsx jsx */
import { jsx, Grid, Styled } from 'theme-ui'
import { useRef } from 'react'
import gsap from 'gsap'

const Parallax: React.FunctionComponent = () => {
  const rootEl = useRef(null)
  const onMouseOver = (event: any) => {
    event.preventDefault()
    const rx = event.currentTarget.offsetWidth
    const ry = event.currentTarget.offsetHeight

    const x = event.pageX - event.currentTarget.offsetLeft
    const y = event.pageY - event.currentTarget.offsetTop

    const newX = x - rx / 2
    const newY = y - ry / 2

    event.currentTarget.childNodes.forEach((node: any, index: number) => {
      return (
        index === 0 &&
        gsap.to(node, {
          x: 1 - newX * 0.02,
          y: 1 - newY * 0.02,
        })
      )
    })
  }

  return (
    <Grid
      ref={rootEl}
      onMouseMove={onMouseOver}
      gap={0}
      sx={{ height: '100%' }}
    >
      <Styled.h1
        sx={{
          gridRow: 1,
          gridColumn: 1,
          alignSelf: 'center',
          justifySelf: 'center',
          zIndex: 1,
          color: 'white',
          fontSize: 96,
        }}
      >
        HOT AIR BALLOONS
      </Styled.h1>
      <div sx={{ gridRow: 1, gridColumn: 1 }}>
        <img
          sx={{ height: '100vh', width: '100%', objectFit: 'cover' }}
          src="/static/images/balloons.jpg"
          alt="Balloons"
        />
      </div>
    </Grid>
  )
}

export default Parallax
