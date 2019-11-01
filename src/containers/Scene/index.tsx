import React from 'react';
import { Stage, Layer } from 'react-konva';
import { PlaneCircleCoordinate } from 'components/PlaneCircleCoordinate';
import { SinusLine } from 'components/SinusLine';

import { useWindowSize } from 'hooks/useWindowSize';

export const Scene = () => {
  const [windowWidth, windowHeight] = useWindowSize();

  return (
    <Stage width={windowWidth} height={windowHeight}>
      <Layer>
        <PlaneCircleCoordinate />
        <SinusLine />
      </Layer>
    </Stage>
  );
};
