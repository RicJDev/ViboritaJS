export class Entity {
  /**@type {string} */
  color
  /**@type {{x: number, y: number}} */
  coords = { x, y }

  /**
   *
   * @param {string} color
   * @param {{x: number, y: number}} coords
   */
  constructor(color, coords) {
    this.color = color
    this.coords = coords
  }
}
