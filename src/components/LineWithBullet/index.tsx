import React from 'react'
import { Circle, Line } from 'react-konva'
import type { LineWithBulletProps } from './types'

export const LineWithBullet = (props: LineWithBulletProps) => {
  const { directedP, objectsConfig } = props
  const { lineConfig, bulletConfig } = objectsConfig

  return (
    <>
      <Line {...lineConfig}/>
      <Circle {...bulletConfig} y={directedP.y} x={directedP.x}/>
    </>
  )
}
