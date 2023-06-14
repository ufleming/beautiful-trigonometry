import type { CircleConfig } from 'konva/lib/shapes/Circle'
import type { LineConfig } from 'konva/lib/shapes/Line'
import { themeColors } from 'configs/theme'
import { lineBaseConfig, pointBaseConfig } from 'configs/appBaseConfig'

export const sinLinePointsConfig: CircleConfig = {
  ...pointBaseConfig,
  stroke: themeColors.sinColor(),
  fill: themeColors.sinColor(),
}

export const sinLineConfig: LineConfig = {
  ...lineBaseConfig,
  stroke: themeColors.sinColor(),
}
