import React from 'react'
import { Line, Text } from 'react-konva'
import type { LineConfig } from 'konva/lib/shapes/Line'
import type { TextConfig } from 'konva/lib/shapes/Text'
import { themeColors } from 'configs/theme'
import { KeyWord } from 'configs/KeyWord'
import * as constants from '../constants'

const { radius, x, y } = constants.planeCircleConfig
const arrowStart = x - radius - constants.planeOffset
const lineWidth = (radius * 2) + (constants.planeOffset * 2)

const lineConfig: LineConfig = {
  ...constants.planeGuideLineConfig,
  stroke: themeColors.cosColor(.6),
}

export const cosLineTextConfig: TextConfig = {
  text: KeyWord.Cosine,
  width: 20,
  height: 10,
  fill: themeColors.cosColor(),
  align: 'center',
}

export const CosGuide = () => (
  <>
    <Line
      {...lineConfig}
      x={arrowStart}
      y={y}
      points={[0, 0, lineWidth, 0]}
    />
    <Text
      {...cosLineTextConfig}
      x={lineWidth + cosLineTextConfig.width * 2}
      y={y - cosLineTextConfig.height / 2}
    />
  </>
)
