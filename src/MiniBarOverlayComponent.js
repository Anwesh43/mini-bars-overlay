import MiniBarOverlay from './MiniBarOverlay'
import React from 'react'
import {useAnimatedScale, useDimension} from './hooks'

const MiniBarOverlayComponent = ({n}) => {
  const {w, h} = useDimension()
  const {scale, start} = useAnimatedScale(0.02 / n, 20)
  return (<div>
      <MiniBarOverlay w = {w} h = {h} scale = {scale} n = {n}></MiniBarOverlay>
    </div>)
}

export default MiniBarOverlayComponent 

