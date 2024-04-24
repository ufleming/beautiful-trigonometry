import React from 'react'
import { Arrow, Line } from 'react-konva'
import {
  planeCircleConfig,
  planeArrowConfig,
  planeArrowLineConfig,
  planeOffset,
} from '../constants'

export const CosArrow = () => {
  const { radius, x, y } = planeCircleConfig
  const { pointerLength } = planeArrowConfig
  const arrowStart = y - radius - planeOffset
  const arrowHeight = (radius * 2) + (planeOffset * 2)
  const arrowEnd = arrowStart - pointerLength / 2

  return (
    <>
      <Line
        {...planeArrowLineConfig}
        x={x}
        y={arrowStart}
        points={[0, 0, 0, arrowHeight]}
      />
      <Arrow {...planeArrowConfig} points={[x, y, x, arrowEnd]} />
    </>
  )
}