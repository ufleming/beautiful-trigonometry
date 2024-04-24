import React from 'react'
import { Circle } from 'react-konva'
import { themeColors } from '@/configs/theme'
import { CosArrow } from '@/components/PlaneCircleCoordinate/components/CosArrow'
import { planeCircleConfig } from './constants'
import { SinArrow } from './components/SinArrow'

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
      <SinArrow />
      <CosArrow />
      {zeroPoint()}
    </>
  )
}
