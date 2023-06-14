import React from 'react'
import { Line, Text } from 'react-konva'
import type { LineConfig } from 'konva/lib/shapes/Line'
import type { TextConfig } from 'konva/lib/shapes/Text'
import { themeColors } from 'configs/theme'
import { KeyWord } from 'configs/KeyWord'
import * as constants from '../constants'

const { radius, x, y } = constants.planeCircleConfig
const arrowStart = y - radius - constants.planeOffset
const lineHeight = (radius * 2) + (constants.planeOffset * 2)

const lineConfig: LineConfig = {
  ...constants.planeGuideLineConfig,
  stroke: themeColors.sinColor(.6),
}

export const sinLineTextConfig: TextConfig = {
  text: KeyWord.Sine,
  width: 16,
  height: 10,
  fill: themeColors.sinColor(),
  align: 'center',
}

export const SinGuide = () => (
  <>
    <Line
      {...lineConfig}
      x={x}
      y={arrowStart}
      points={[0, 0, 0, lineHeight]}
    />
    <Text
      {...sinLineTextConfig}
      x={x - sinLineTextConfig.width / 2}
      y={arrowStart - sinLineTextConfig.height * 2}
    />
  </>
)
