import { themeColors } from 'configs/theme'
import { lineBaseConfig, pointBaseConfig } from 'configs/appBaseConfig'
import type { LineWithBulletConfig } from 'components/LineWithBullet/types'

const sinColor = themeColors.sinColor()

export const sinLineConfigBase: LineWithBulletConfig = {
  lineConfig: {
    ...lineBaseConfig,
    stroke: sinColor,
    strokeWidth: 4,
  },
  bulletConfig: {
    ...pointBaseConfig,
    stroke: sinColor,
    fill: sinColor,
  }
}

export const reflectSinLineConfig = {
  ...sinLineConfigBase.lineConfig,
  stroke: themeColors.baseGray(.7),
  strokeWidth: 1,
}
