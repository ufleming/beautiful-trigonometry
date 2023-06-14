import React, { memo } from 'react'
import { Arc } from 'react-konva'
import { appBaseConfig } from 'configs/appBaseConfig'
import { themeColors } from 'configs/theme'

const archConfig = {
  x: appBaseConfig.x,
  y: appBaseConfig.y,
  innerRadius: appBaseConfig.radius - 4,
  outerRadius: appBaseConfig.radius + 4,
  fill: themeColors.baseGray(.6),
  clockwise: true,
}

const breakAngles = [0, 30, 45, 60, 120, 135, 150, 210, 225, 240, 300, 315, 330, 360]
const gap = 1

const MainCircle = () => (
  <>
    {breakAngles.map((currentItem, index) => {
      if (index === breakAngles.length - 1) return null

      const nextItem = breakAngles[index + 1]
      const nextAngle = nextItem ? nextItem : currentItem
      const currentAngle = -(nextAngle - currentItem - gap)
      const rotationDeg = -currentItem

      return <Arc {...archConfig} angle={currentAngle} rotation={rotationDeg} key={currentItem}/>
    })}
  </>
)

export default memo(MainCircle)
