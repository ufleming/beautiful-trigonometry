import { useState } from 'react';
import { config } from 'config';

export const useAlphaAngle = (): number => {
  const [alphaAngle, changeAlphaAngle] = useState(config.alphaAngleStart);

  setTimeout(
    () => changeAlphaAngle((alphaAngle - 1) % config.alphaAngleEnd),
    config.globalUpdateSpeed
  );

  return alphaAngle;
};