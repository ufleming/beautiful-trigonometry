import { appBaseConfig } from '@/configs/appBaseConfig'

export const angleArchCircleBaseConfig = {
  x: appBaseConfig.x,
  y: appBaseConfig.y,
}

export const angleArchConfig = {
  ...angleArchCircleBaseConfig,
  innerRadius: appBaseConfig.radius / 15,
  outerRadius: appBaseConfig.radius / 22,
  clockwise: true,
  fill: '#fff',
}