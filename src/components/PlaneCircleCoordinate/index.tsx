import { Circle } from 'react-konva'
import { themeColors } from '@/configs/theme'
import { ArrowAxisY } from '@/components/PlaneCircleCoordinate/components/ArrowAxisY'
import { planeCircleConfig } from './constants'
import { ArrowAxisX } from './components/ArrowAxisX'

export const PlaneCircleCoordinate = () => {
  const zeroPoint = () => (
    <>
      <Circle {...planeCircleConfig} radius={2} fill={themeColors.helpers} strokeWidth={2}/>
      <Circle {...planeCircleConfig} />
    </>
  )

  return (
    <>
      <Circle {...planeCircleConfig} />
      <ArrowAxisX />
      <ArrowAxisY />
      {zeroPoint()}
    </>
  )
}
