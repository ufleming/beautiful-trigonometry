import React from 'react'
import { Circle, Line, Text } from 'react-konva'
import { appBaseConfig } from '@/configs/appBaseConfig'
import { sinLineConfig, sinLinePointsConfig, sinLineTextConfig } from './constants'
import type { SinLineProps } from './types'

export const SinLine = ({ P, sinP }: SinLineProps) => {
  const textWidth = sinLineTextConfig.width
  const { textX, textY } = {
    textX: (sinP.x - textWidth / 2),
    textY: sinP.y / 2 + P.y / 2,
  }

  return (
    <>
      <Line {...sinLineConfig} points={[sinP.x, sinP.y, P.x, P.y]} />
      <Text { ...sinLineTextConfig } x={textX} y={textY} />

      <Line {...sinLineConfig} points={[appBaseConfig.x, appBaseConfig.y, appBaseConfig.x, P.y]} />
      <Text { ...sinLineTextConfig } x={appBaseConfig.x - textWidth / 2} y={textY} />

      <Circle { ...sinLinePointsConfig } y={sinP.y} x={sinP.x}/>
    </>
  )
}
