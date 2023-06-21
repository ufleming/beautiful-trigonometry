import React from 'react'
import { appBaseConfig } from 'configs/appBaseConfig'
import { HelpLine } from "components/HelpLine"
import { useVariables } from 'hooks/useVariables'
import { useAlphaAngle } from 'hooks/useAlphaAngle'
import { SinFlow } from './components/SinFlow'
import { CosFlow } from './components/CosFlow'

const { radius, x, y } = appBaseConfig

export const CircleCoordinateMovable = () => {
  const alphaAngle = useAlphaAngle()
  const P = useVariables(radius, x, y)

  return (
    <>
      <SinFlow />
      <CosFlow />

      <HelpLine P={P} alphaAngle={alphaAngle} />
    </>
  )
}
