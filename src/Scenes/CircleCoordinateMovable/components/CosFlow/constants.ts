import { themeColors } from 'configs/theme'
import { lineBaseConfig, pointBaseConfig } from 'configs/appBaseConfig'
import type { LineWithBulletConfig } from 'components/LineWithBullet/types'

const cosColor = themeColors.cosColor()

export const cosLineConfigBase: LineWithBulletConfig = {
  lineConfig: {
    ...lineBaseConfig,
    stroke: cosColor,
    strokeWidth: 4,
  },
  bulletConfig: {
    ...pointBaseConfig,
    stroke: cosColor,
    fill: cosColor,
  }
}

export const reflectCosLineConfig = {
  ...cosLineConfigBase.lineConfig,
  stroke: themeColors.baseGray(.7),
  strokeWidth: 1,
}
