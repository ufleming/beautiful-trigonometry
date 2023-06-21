import React from 'react'
import { Line } from 'react-konva'
import { useVariables } from 'hooks/useVariables'
import { appBaseConfig } from 'configs/appBaseConfig'
import { LineWithBullet } from "components/LineWithBullet"
import type { LineWithBulletConfig } from 'components/LineWithBullet/types'
import { cosLineConfigBase, reflectCosLineConfig } from './constants'

const { radius, x, y } = appBaseConfig

export const CosFlow = () => {
  const P = useVariables(radius, x, y)
  const cosP = useVariables(radius, x, y, 'y')

  const cosLineConfig: LineWithBulletConfig = {
    ...cosLineConfigBase,
    lineConfig: {
      ...cosLineConfigBase.lineConfig,
      points: [appBaseConfig.x, appBaseConfig.y, P.x, appBaseConfig.y]
    }
  }

  return (
    <>
      <Line {...reflectCosLineConfig} points={[cosP.x, cosP.y, P.x, P.y]}/>
      <LineWithBullet directedP={cosP} objectsConfig={cosLineConfig} />
    </>
  )
}
