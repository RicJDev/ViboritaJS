const MOVEMENTS = {
  up: (elementPosition) => elementPosition.y--,
  down: (elementPosition) => elementPosition.y++,
  left: (elementPosition) => elementPosition.x--,
  right: (elementPosition) => elementPosition.x++,
  none: () => {},
}

export { MOVEMENTS }