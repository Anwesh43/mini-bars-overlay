import {useState, useEffect} from 'react'
import {sinify, divideScale} from './utils'

export const useAnimatedScale = (scGap = 0.02, delay = 20) => {
  const [scale, setScale] = useState(0)
  const [animated, setAnimated] = useState(false)
  return {
    scale, 
    start() {
      if (!animated) {
        setAnimated(true)
        let currScale = scale 
        const interval = setInterval(() => {
          currScale += scGap 
          setScale(currScale)
          if (scale > 1) {
            setScale(0)
            setAnimated(false)
            clearInterval(interval)
          }
        }, delay)
      }
    }
  }
}

export const useDimension = () => {
  const [w, setW] = useState(window.innerWidth)
  const [h, setH] = useState(window.innerHeight)
  useEffect(() => {
    window.onresize = () => {
      setW(window.innerWidth)
      setH(window.innerHeight)
    }
    return () => {
      window.onresize = () => {
      
      }
    }
  })
}

export const useStyle = (w, h, scale, n) => {
  const gap = w / n 
  const position = 'absolute'
  const fixedBackground = 'green'
  const dynamicBackground = 'indigo'
  const fixedHeight = `${gap}px`
  return {
    getFixedBlockStyle() {
      const width = `${w}px`
      const height = fixedHeight 
      const background = fixedBackground 
      const top = `${0}px`
      const left = `${0}px`
      return {position, left, top, width, height, background};
    },
  
    getDynamicBlockStyle(i) {
      const sfi = sinify(divideScale(scale, i, n))
      const height = `${gap * sfi}px`
      const top = `${0}px`
      const left = `${gap * i}px`
      const width = `${gap}px`
      const background = dynamicBackground 
      return {position, left, top, width, height, background}
    }
  }
}