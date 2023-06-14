const defColors = {
  sinColor: (alpha = 1) => `rgba(128, 255, 128, ${ alpha })`,
  cosColor: (alpha = 1) => `rgba(70, 198, 255, ${ alpha })`,
  baseGray: (alpha = 1) => `rgba(153, 153, 153, ${ alpha })`,
}

export const themeColors = {
  ...defColors,
  circle: '#000',
  plane: '#000',
  helpers: '#000',
}
