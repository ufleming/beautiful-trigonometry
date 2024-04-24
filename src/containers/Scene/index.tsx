import { Layer, Stage } from 'react-konva'
import { appBaseConfig } from '@/configs/appBaseConfig'
import { useWindowSize } from '@/hooks/useWindowSize'
import { Cosine, Sine, PlaneCircleCoordinate } from "@/components"
import { AlphaLine } from "@/components/PlaneCircleCoordinate/components/AlphaLine"
import { AngleArch } from "@/components/PlaneCircleCoordinate/components/AngleArch"
import { useVariables } from '@/hooks/useVariables'
import { useAlphaAngle } from '@/hooks/useAlphaAngle'

const { radius, x, y } = appBaseConfig

export const Scene = () => {
  const [windowWidth, windowHeight] = useWindowSize()
  const alphaAngle = useAlphaAngle()
  const P = useVariables(radius, x, y)
  const cosP = useVariables(radius, x, y, 'y')
  const sinP = useVariables(radius, x, y, 'x')

  return (
    <Stage width={windowWidth} height={windowHeight}>
      <Layer>
        <PlaneCircleCoordinate/>
      </Layer>
      <Layer>
        <Sine.CircleCoordinate P={P} sinP={sinP} />
      </Layer>
      <Layer>
        <Cosine.CircleCoordinate P={P} cosP={cosP} />
      </Layer>
      <Layer>
        <AngleArch alphaAngle={alphaAngle} />
      </Layer>
      <Layer>
        <AlphaLine P={P} alphaAngle={alphaAngle}/>
      </Layer>
    </Stage>
  )
}
