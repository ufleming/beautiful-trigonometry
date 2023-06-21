import type { CircleConfig } from 'konva/lib/shapes/Circle'
import type { LineConfig } from 'konva/lib/shapes/Line'
import type { LocationCoordinates } from 'types'

export type LineWithBulletConfig = {
  lineConfig: LineConfig
  bulletConfig: CircleConfig
}

export type LineWithBulletProps = {
  directedP: LocationCoordinates
  objectsConfig: LineWithBulletConfig
}
