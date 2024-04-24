import { appBaseConfig, lineBaseConfig, pointBaseConfig } from '@/configs/appBaseConfig'

export const helpLinePointsConfig = {
  ...pointBaseConfig,
  stroke: '#fff',
  fill: '#fff',
}

export const helpLineConfig = {
  ...lineBaseConfig,
  stroke: '#fff',
  x: appBaseConfig.x,
  y: appBaseConfig.y,
  points: [
    0, 0,
    appBaseConfig.radius, 0,
  ]
}

export const helpLineTextConfig = {
  width: 50,
  height: 20,
  fill: '#fff',
  align: 'center',
}