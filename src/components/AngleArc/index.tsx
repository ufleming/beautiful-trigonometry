import React from 'react'
import { Arc, Circle } from 'react-konva'
import { angleArcConfig, angleArcCircleBaseConfig } from './constants'
import { AngleArcProps } from './types'

export const AngleArc = ({ alphaAngle }: AngleArcProps) => {
  const angle = Math.abs(alphaAngle)

  return (
    <>
      <Circle {...angleArcCircleBaseConfig} radius={20} fill="#000" opacity={.4} />
      <Arc { ...angleArcConfig } angle={ -angle }/>
    </>
  )
}
