import React from 'react'
import {useStyle} from './hooks'

const Block = ({style}) => {
  return <div style = {style}>
    </div>
}

const getDynamicBlocks = (n, style) => {
  const blocks = []
  for (let i = 0; i < n; i++) {
    blocks.push(<Block key = {`dynamic_block_${i}`} style = {style(i)}/>)
  }
  return blocks 
}

const MiniBarOverlay = ({w, h, scale, n, onClick}) => {
  const {getFixedBlockStyle, getDynamicBlockStyle} = useStyle(w, h, scale, n)
  return <div onClick = {onClick}>
      <Block style = {getFixedBlockStyle()}/>
      {getDynamicBlocks(n, getDynamicBlockStyle)}
    </div>
}

export default MiniBarOverlay