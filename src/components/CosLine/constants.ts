import { themeColors } from '@/configs/theme'
import { lineBaseConfig, pointBaseConfig } from '@/configs/appBaseConfig'
import { KeyWord } from '@/configs/KeyWord'

export const cosPointsConfig = {
  ...pointBaseConfig,
  stroke: themeColors.cosColor,
  fill: themeColors.cosColor,
}

export const cosLineConfig = {
  ...lineBaseConfig,
  stroke: themeColors.cosColor,
}

export const cosLineTextConfig = {
  text: KeyWord.Cosine,
  width: 40,
  height: 20,
  fill: themeColors.cosColor,
  align: 'center'
}
