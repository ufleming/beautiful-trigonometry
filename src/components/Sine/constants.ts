import { themeColors } from '@/configs/theme'
import { lineBaseConfig, pointBaseConfig } from '@/configs/appBaseConfig'
import { KeyWord } from '@/configs/KeyWord'

export const sinLinePointsConfig = {
  ...pointBaseConfig,
  stroke: themeColors.sinColor,
  fill: themeColors.sinColor,
}

export const sinLineConfig = {
  ...lineBaseConfig,
  stroke: themeColors.sinColor,
}

export const sinLineTextConfig = {
  text: KeyWord.Sine,
  width: 25,
  height: 20,
  fill: themeColors.sinColor,
  align: 'center',
}