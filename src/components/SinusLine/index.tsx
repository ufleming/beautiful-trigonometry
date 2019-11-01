import React from 'react';
import { Circle, Line, Text, Arc } from 'react-konva';
import { useAlphaAngle } from 'hooks/useAlphaAngle';
import { config } from 'config';

const { radius, x, y, alphaAngleEnd } = config;
const pointsDefaultProps = {
  strokeWidth: 1,
  radius: 1,
  stroke: '#f00',
  fill: '#f00',
  scale: { x: 2, y: 2 },
};
const helpLineDefaultProps = {
  stroke: '#2E2EFF',
  strokeWidth: 2,
  x: 0,
  y: 0,
};

const useSinVariables = (radius: number, x: number, y: number, freeze?: 'x' | 'y') => {
  const alphaAngle = useAlphaAngle();
  const alphaRadian = alphaAngle * Math.PI / 180;
  const cosAlphaRadius = radius * Math.cos(alphaRadian);
  const sinAlphaRadius = radius * Math.sin(alphaRadian);

  return {
    x: freeze && freeze === 'x' ? x : x + cosAlphaRadius,
    y: freeze && freeze === 'y' ? y : y + sinAlphaRadius,
  };
};

export const SinusLine = () => {
  const alphaAngle = useAlphaAngle();
  const P = useSinVariables(radius, x, y);
  const sinP = useSinVariables(radius, x, y, 'y');
  const cosP = useSinVariables(radius, x, y, 'x');
  const angleTextPos = useSinVariables(radius * 1.1, x, y);
  const angle = Math.abs(alphaAngle);
  // const angleProgress = (angle / alphaAngleEnd) * 100;

  return (
    <>
      <>
        <Line
          {...helpLineDefaultProps}
          x={x}
          y={y}
          points={[
            0, 0,
            radius, 0
          ]}
          rotation={alphaAngle}
          stroke="#000"
        />
        <Text
          width={40}
          height={20}
          x={angleTextPos.x - 20}
          y={angleTextPos.y - 5}
          text={`${angle}°`}
          fill="#000"
          align="center"
        />
        <Circle {...pointsDefaultProps} y={P.y} x={P.x}/>
        <Arc angle={-angle} innerRadius={20} outerRadius={21} x={x} y={y} fill="#000" clockwise={true}/>
      </>

      <>
        <Line
          {...helpLineDefaultProps}
          points={[
            cosP.x, cosP.y,
            P.x, P.y
          ]}
          stroke="#00F"
        />
        <Text
          width={40}
          height={20}
          x={cosP.x}
          y={cosP.y}
          text={'cos'}
          fill="#00F"
          align="center"
        />
        <Circle {...pointsDefaultProps} y={cosP.y} x={cosP.x}/>
      </>

      <>
        <Line
          {...helpLineDefaultProps}
          points={[
            sinP.x, sinP.y,
            P.x, P.y
          ]}
          stroke="#f00"
        />
        <Text
          width={40}
          height={20}
          x={sinP.x}
          y={sinP.y}
          text={'sin'}
          fill="#F00"
          align="center"
        />
        <Circle {...pointsDefaultProps} y={sinP.y} x={sinP.x}/>
      </>
    </>
  );
};
