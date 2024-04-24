import { useState } from 'react'
import { appBaseConfig } from '@/configs/appBaseConfig'

export const useAlphaAngle = (): number => {
  const [alphaAngle, changeAlphaAngle] = useState(appBaseConfig.alphaAngleStart)

  setTimeout(
    () => changeAlphaAngle((alphaAngle - 1) % appBaseConfig.alphaAngleEnd),
    appBaseConfig.globalUpdateSpeed
  )

  return alphaAngle
}