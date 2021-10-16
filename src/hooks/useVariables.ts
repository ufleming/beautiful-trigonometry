import { useAlphaAngle } from 'hooks/useAlphaAngle'

export const useVariables = (radius: number, x: number, y: number, freeze?: 'x' | 'y') => {
  const alphaAngle = useAlphaAngle()
  const alphaRadian = alphaAngle * Math.PI / 180
  const cosAlphaRadius = radius * Math.cos(alphaRadian)
  const sinAlphaRadius = radius * Math.sin(alphaRadian)

  return {
    x: freeze && freeze === 'x' ? x : x + cosAlphaRadius,
    y: freeze && freeze === 'y' ? y : y + sinAlphaRadius,
  }
}