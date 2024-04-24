import { Circle, Line, Text } from 'react-konva'
import { appBaseConfig } from '@/configs/appBaseConfig'
import { helpLineConfig } from '@/components/PlaneCircleCoordinate/components/AlphaLine/constants'
import { sinLineConfig, sinLinePointsConfig, sinLineTextConfig } from '../../constants'
import type { SinLineProps } from '../../types'

export const SineCircleCoordinate = ({ P, sinP }: SinLineProps) => {
  const textWidth = sinLineTextConfig.width
  const textY = sinP.y / 2 + P.y / 2

  return (
    <>
      <Line {...sinLineConfig} stroke={helpLineConfig.stroke} opacity={.3} points={[sinP.x, sinP.y, P.x, P.y]} />

      <Line {...sinLineConfig} points={[appBaseConfig.x, appBaseConfig.y, appBaseConfig.x, P.y]} />
      <Text { ...sinLineTextConfig } x={appBaseConfig.x - textWidth / 2} y={textY} />

      <Circle { ...sinLinePointsConfig } y={sinP.y} x={sinP.x}/>
    </>
  )
}
