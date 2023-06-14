import type { LineConfig } from 'konva/lib/shapes/Line'
import type { CircleConfig } from 'konva/lib/shapes/Circle'

export const lineBaseConfig: LineConfig = {
  strokeWidth: 2,
  x: 0,
  y: 0,
}

export const pointBaseConfig: CircleConfig = {
  strokeWidth: 4,
  radius: 1,
  scale: { x: 2, y: 2 },
}

export const appBaseConfig = {
  globalUpdateSpeed: 25,
  alphaAngleStart: 0,
  alphaAngleEnd: 360,

  radius: 200,
  x: 250,
  y: 250,
}
