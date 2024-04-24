import { Circle, Line, Text } from 'react-konva'
import { appBaseConfig } from '@/configs/appBaseConfig'
import { KeyWord } from '@/configs/KeyWord'
import { useVariables } from '@/hooks/useVariables'
import { helpLineConfig, helpLinePointsConfig, helpLineTextConfig } from './constants'
import type { HelperLineProps } from './types'

const { radius, x, y } = appBaseConfig

export const AlphaLine = ({ P, alphaAngle }: HelperLineProps) => {
  const { x: textX, y: textY } = useVariables(radius * 1.1, x, y)
  const angle = Math.abs(alphaAngle)

  return (
    <>
      <Line {...helpLineConfig} rotation={alphaAngle} />
      <Text
        { ...helpLineTextConfig }
        x={textX - 20}
        y={textY - 5}
        text={`${KeyWord.alpha} = ${angle}${KeyWord.deg}`}
      />
      <Circle {...helpLinePointsConfig} y={P.y} x={P.x} />
    </>
  )
}
