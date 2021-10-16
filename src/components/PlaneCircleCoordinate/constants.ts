import { themeColors } from 'configs/theme'
import { appBaseConfig } from 'configs/appBaseConfig'

export const planeOffset = 15

export const planeCircleConfig = {
  strokeWidth: 8,
  x: appBaseConfig.x,
  y: appBaseConfig.y,
  stroke: '#999',
  radius: appBaseConfig.radius,
}

export const planeArrowLineConfig = {
  strokeWidth: 1,
  stroke: themeColors.plane,
}

export const planeArrowConfig = {
  pointerLength: 10,
  pointerWidth: 8,
  fill: themeColors.plane,
}
