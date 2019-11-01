import React from 'react';
import { Arrow, Circle, Line, Text } from 'react-konva';
import { config } from 'config';

export const PlaneCircleCoordinate = () => {
  const color = '#000';
  const offset = 15;
  const arrowWidth = 8;
  const arrowHeight = 10;
  const { radius, x, y } = config;

  const renderCircle = () => (
    <>
      <Circle strokeWidth={1} radius={2} x={x} y={y} stroke={'#000'} fill={'#000'} />
      <Circle strokeWidth={1} radius={radius} x={x} y={y} stroke={'#000'} />
      <Text y={y + 3} x={x - 12} text={'0'} fontSize={14} />
    </>
  );

  const renderPlane = () => (
    <>
      <Line
        strokeWidth={1}
        x={x - radius - offset}
        y={y}
        points={[
          0, 0,
          radius * 2 + offset * 2, 0
        ]}
        stroke={color}
      />
      <Arrow
        pointerLength={arrowHeight}
        pointerWidth={arrowWidth}
        fill={color}
        points={[x + radius + arrowWidth / 2 + offset, y]}
      />

      <Line
        strokeWidth={1}
        x={x}
        y={y - radius - offset}
        points={[
          0, 0,
          0, radius * 2 + offset * 2
        ]}
        stroke={color}
      />
      <Arrow
        pointerLength={arrowHeight}
        pointerWidth={arrowWidth}
        fill={color}
        points={[
          x, y,
          x, y - radius - arrowHeight / 2 - offset
        ]}
      />
    </>
  );

  return (
    <>
      {renderCircle()}
      {renderPlane()}
    </>
  );
};
