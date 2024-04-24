import React from 'react'
import { Circle, Line, Text } from 'react-konva'
import { sinLineTextConfig } from '@/components/SinLine/constants'
import { appBaseConfig } from '@/configs/appBaseConfig'
import { cosLineConfig, cosLineTextConfig, cosPointsConfig } from './constants'
import type { CosLineProps } from './types'

export const CosLine = ({ P, cosP }: CosLineProps) => {
  const textHeight = sinLineTextConfig.height
  const textWidth = sinLineTextConfig.width
  const { textX, textY } = {
    textX: (cosP.x / 2 + P.x / 2) - textWidth / 2,
    textY: (cosP.y - textHeight / 2),
  }

  return (
    <>
      <Line {...cosLineConfig} points={[cosP.x, cosP.y, P.x, P.y]} />
      <Text {...cosLineTextConfig} x={textX} y={textY} />

      <Line {...cosLineConfig} points={[appBaseConfig.x, appBaseConfig.y, P.x, appBaseConfig.y]} />
      <Text {...cosLineTextConfig} x={textX} y={appBaseConfig.y} />

      <Circle {...cosPointsConfig} y={cosP.y} x={cosP.x}/>
    </>
  )
}
