import React, { memo } from 'react'
import { CosGuide } from './components/CosGuide'
import { SinGuide } from './components/SinGuide'
import MainCircle from './components/MainCircle'

const PlaneCircleCoordinateComponent = () => (
  <>
    <SinGuide />
    <CosGuide />
    <MainCircle />
  </>
)

export const PlaneCircleCoordinate = memo(PlaneCircleCoordinateComponent)
