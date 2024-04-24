import { appBaseConfig } from '@/configs/appBaseConfig'

export const angleArcCircleBaseConfig = {
  x: appBaseConfig.x,
  y: appBaseConfig.y,
}

export const angleArcConfig = {
  ...angleArcCircleBaseConfig,
  innerRadius: appBaseConfig.radius / 15,
  outerRadius: appBaseConfig.radius / 22,
  clockwise: true,
  fill: '#fff',
}