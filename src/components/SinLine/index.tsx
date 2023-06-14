import React from 'react'
import { Circle, Line } from 'react-konva'
import { appBaseConfig } from 'configs/appBaseConfig'
import { themeColors } from 'configs/theme'
import { sinLineConfig, sinLinePointsConfig } from './constants'
import type { SinLineProps } from './types'

export const SinLine = ({ P, sinP }: SinLineProps) => (
  <>
    <Line {...sinLineConfig} points={[sinP.x, sinP.y, P.x, P.y]} stroke={themeColors.baseGray(.6)} />
    <Line {...sinLineConfig} points={[appBaseConfig.x, appBaseConfig.y, appBaseConfig.x, P.y]} strokeWidth={4}/>
    <Circle { ...sinLinePointsConfig } y={sinP.y} x={sinP.x}/>
  </>
)
