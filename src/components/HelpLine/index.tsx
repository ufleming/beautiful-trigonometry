import React from 'react'
import { Circle, Line, Text } from 'react-konva'
import { appBaseConfig } from 'configs/appBaseConfig'
import { KeyWord } from 'configs/KeyWord'
import { helpLineConfig, helpLinePointsConfig } from 'components/HelpLine/constants'
import { helpLineTextConfig } from './constants'
import type { HelperLineProps } from './types'

export const HelpLine = ({ P, alphaAngle }: HelperLineProps) => {
  const angle = Math.abs(alphaAngle)

  return (
    <>
      <Line {...helpLineConfig} rotation={alphaAngle} />
      <Text
        { ...helpLineTextConfig }
        x={appBaseConfig.x + 20}
        y={appBaseConfig.y - 20}
        text={`${KeyWord.alpha} = ${angle}${KeyWord.deg}`}
      />
      <Circle {...helpLinePointsConfig} y={P.y} x={P.x} />
    </>
  )
}
