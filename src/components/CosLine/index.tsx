import React from 'react'
import { Circle, Line } from 'react-konva'
import { appBaseConfig } from 'configs/appBaseConfig'
import { themeColors } from 'configs/theme'
import { cosLineConfig, cosPointsConfig } from './constants'
import type { CosLineProps } from './types'

export const CosLine = ({ P, cosP }: CosLineProps) => (
  <>
    <Line {...cosLineConfig} points={[cosP.x, cosP.y, P.x, P.y]} stroke={themeColors.baseGray(.6)}/>
    <Line {...cosLineConfig} points={[appBaseConfig.x, appBaseConfig.y, P.x, appBaseConfig.y]} strokeWidth={4}/>
    <Circle {...cosPointsConfig} y={cosP.y} x={cosP.x}/>
  </>
)
