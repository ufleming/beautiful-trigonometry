import React from 'react'
import { Layer, Stage } from 'react-konva'
import { PlaneCircleCoordinate } from '@/components/PlaneCircleCoordinate'
import { appBaseConfig } from '@/configs/appBaseConfig'
import { useWindowSize } from '@/hooks/useWindowSize'
import { SinLine } from "@/components/SinLine"
import { CosLine } from "@/components/CosLine"
import { HelpLine } from "@/components/HelpLine"
import { AngleArc } from "@/components/AngleArc"
import { useVariables } from '@/hooks/useVariables'
import { useAlphaAngle } from '@/hooks/useAlphaAngle'

const { radius, x, y } = appBaseConfig

export const Scene = () => {
  const [windowWidth, windowHeight] = useWindowSize()
  const alphaAngle = useAlphaAngle()
  const P = useVariables(radius, x, y)
  const cosP = useVariables(radius, x, y, 'x')
  const sinP = useVariables(radius, x, y, 'y')

  return (
    <Stage width={windowWidth} height={windowHeight}>
      <Layer>
        <PlaneCircleCoordinate/>
      </Layer>
      <Layer>
        <SinLine P={P} sinP={sinP} />
      </Layer>
      <Layer>
        <CosLine P={P} cosP={cosP} />
      </Layer>
      <Layer>
        <AngleArc alphaAngle={alphaAngle} />
      </Layer>
      <Layer>
        <HelpLine P={P} alphaAngle={alphaAngle} />
      </Layer>
    </Stage>
  )
}
