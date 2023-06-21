import React from 'react'
import { Line } from 'react-konva'
import { useVariables } from 'hooks/useVariables'
import { appBaseConfig } from 'configs/appBaseConfig'
import { LineWithBullet } from "components/LineWithBullet"
import type { LineWithBulletConfig } from 'components/LineWithBullet/types'
import { sinLineConfigBase, reflectSinLineConfig } from './constants'

const { radius, x, y } = appBaseConfig

export const SinFlow = () => {
  const P = useVariables(radius, x, y)
  const sinP = useVariables(radius, x, y, 'x')

  const cosLineConfig: LineWithBulletConfig = {
    ...sinLineConfigBase,
    lineConfig: {
      ...sinLineConfigBase.lineConfig,
      points: [appBaseConfig.x, appBaseConfig.y, appBaseConfig.x, P.y]
    }
  }

  return (
    <>
      <Line {...reflectSinLineConfig} points={[sinP.x, sinP.y, P.x, P.y]}/>
      <LineWithBullet directedP={sinP} objectsConfig={cosLineConfig} />
    </>
  )
}
