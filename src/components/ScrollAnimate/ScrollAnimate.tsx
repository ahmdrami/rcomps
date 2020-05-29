import React, { FunctionComponent, useRef, useEffect, useState } from 'react'
import { ScrollAnimateProps } from './ScrollAnimate.model'
import gsap from 'gsap'
import { Box } from 'theme-ui'

let scrollPercent

const ScrollAnimate: FunctionComponent<ScrollAnimateProps> = ({ children }) => {
  const eleRef = useRef(null)

  const [latestKnownScrollY, setLatestKnownScrollY] = useState(0)
  const [ticking, setTicking] = useState(false)
  const action = gsap.timeline({ paused: true })

  function onScroll() {
    setLatestKnownScrollY(window.scrollY)
    requestTick()
  }
  function update() {
    // reset the tick so we can
    // capture the next onScroll
    setTicking(false)
    // console.log(window.scrollY)
    scrollPercent = window.scrollY / window.innerHeight
    gsap.to(action, {time: scrollPercent});

    // action.tweenTo(scrollPercent)
    // console.log(scrollPercent)

    var progressAction = scrollPercent * 1.05 // factor x

    // if (latestKnownScrollY > lastScrollTop) {
    //   // downscroll
    //   TweenLite.to(action, 0, {
    //     progress: progressAction,
    //     ease: Power0.easeNone,
    //   })
    // } else {
    //   TweenLite.to(action, 0, {
    //     progress: progressAction,
    //     ease: Power0.easeNone,
    //   })
    // }

    // lastScrollTop = latestKnownScrollY
    // console.log(scrollDistance)
  }

  function requestTick() {
    if (!ticking) {
      requestAnimationFrame(update)
    }
    setTicking(true)
  }
  useEffect(() => {
    action.to(eleRef.current, { y: 1500, duration: 1 })
    // console.log(action.totalDuration())
    // .to(eleRef.current, { y: 500 })
    // .to(eleRef.current, { y: 700 })
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', onScroll)
  }, [])
  return (
    <Box sx={{ height: '2500px', width: '100%' }}>
      <Box
        ref={eleRef}
        sx={{
          width: '100px',
          height: '100px',
          borderRadius: '999px',
          bg: 'red',
        }}
      ></Box>
    </Box>
  )
}

export default ScrollAnimate
