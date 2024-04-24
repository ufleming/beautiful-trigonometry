import { Circle, Line, Text } from 'react-konva'
import { appBaseConfig } from '@/configs/appBaseConfig'
import { helpLineConfig } from '@/components/PlaneCircleCoordinate/components/AlphaLine/constants'
import { cosLineConfig, cosLineTextConfig, cosPointsConfig } from '../../constants'
import type { CosLineProps } from '../../types'

export const CosineCircleCoordinate = ({ P, cosP }: CosLineProps) => {
  const textWidth = cosLineTextConfig.width
  const textX = (cosP.x / 2 + P.x / 2) - textWidth / 2

  return (
    <>
      <Line {...cosLineConfig} stroke={helpLineConfig.stroke} opacity={.3} points={[cosP.x, cosP.y, P.x, P.y]} />

      <Line {...cosLineConfig} points={[appBaseConfig.x, appBaseConfig.y, P.x, appBaseConfig.y]} />
      <Text {...cosLineTextConfig} x={textX} y={appBaseConfig.y} />

      <Circle {...cosPointsConfig} y={cosP.y} x={cosP.x}/>
    </>
  )
}
