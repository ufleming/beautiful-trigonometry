import React from 'react'
import { Layer, Stage } from 'react-konva'
import { PlaneCircleCoordinate } from 'Scenes/PlaneCircleCoordinate'
import { useWindowSize } from 'hooks/useWindowSize'
import { CircleCoordinateMovable } from '../CircleCoordinateMovable'

export const Scene = () => {
  const [windowWidth, windowHeight] = useWindowSize()

  return (
    <Stage width={windowWidth} height={windowHeight}>
      <Layer>
        <PlaneCircleCoordinate/>
      </Layer>
      <Layer>
        <CircleCoordinateMovable />
      </Layer>
    </Stage>
  )
}
