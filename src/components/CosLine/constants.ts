import type { CircleConfig } from 'konva/lib/shapes/Circle'
import type { LineConfig } from 'konva/lib/shapes/Line'
import { themeColors } from 'configs/theme'
import { lineBaseConfig, pointBaseConfig } from 'configs/appBaseConfig'

export const cosPointsConfig: CircleConfig = {
  ...pointBaseConfig,
  stroke: themeColors.cosColor(),
  fill: themeColors.cosColor(),
}

export const cosLineConfig: LineConfig = {
  ...lineBaseConfig,
  stroke: themeColors.cosColor(),
}
