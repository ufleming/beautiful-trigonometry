import type { CircleConfig } from 'konva/lib/shapes/Circle'
import type { LineConfig } from 'konva/lib/shapes/Line'
import { themeColors } from 'configs/theme'
import { appBaseConfig } from 'configs/appBaseConfig'

export const planeOffset = 15

export const planeCircleConfig: CircleConfig = {
  x: appBaseConfig.x,
  y: appBaseConfig.y,
  radius: appBaseConfig.radius,
}

export const planeGuideLineConfig: LineConfig = {
  strokeWidth: 1,
  fill: themeColors.plane,
}
