import { Arc, Circle } from 'react-konva'
import { angleArchConfig, angleArchCircleBaseConfig } from './constants'
import type { AngleArchProps } from './types'

export const AngleArch = ({ alphaAngle }: AngleArchProps) => {
  const angle = Math.abs(alphaAngle)

  return (
    <>
      <Circle {...angleArchCircleBaseConfig} radius={20} fill="#000" opacity={.4} />
      <Arc { ...angleArchConfig } angle={ -angle }/>
    </>
  )
}
