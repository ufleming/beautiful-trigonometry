import React from 'react'
import { Arrow, Line } from 'react-konva'
import { useWindowSize } from 'hooks/useWindowSize'
import {
  planeCircleConfig,
  planeArrowConfig,
  planeArrowLineConfig,
  planeOffset,
} from '../constants'

export const SinArrow = () => {
  const [windowWidth] = useWindowSize()
  const { radius, x, y } = planeCircleConfig
  const { pointerWidth } = planeArrowConfig
  const arrowStart = x - radius - planeOffset
  const arrowWidth = (radius * 2) + (planeOffset * 2)
  const arrowEnd = arrowStart + arrowWidth + pointerWidth / 2

  return (
    <>
      <Line
        {...planeArrowLineConfig}
        x={arrowStart}
        y={y}
        points={[0, 0, arrowWidth, 0]}
      />
      <Arrow {...planeArrowConfig} points={[arrowEnd, y]} />

      <Line
        {...planeArrowLineConfig}
        dash={[10, 10]}
        x={arrowEnd}
        y={y}
        points={[0, 0, windowWidth - arrowEnd, 0]}
      />
    </>
  )
}