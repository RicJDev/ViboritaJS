/**
 * @module Entities
 */

/**
 * Pixel
 *
 * Representa un píxel individual en la cuadrícula del juego.
 * Un píxel tiene un color y unas coordenadas (x, y) que indican su posición en la cuadrícula.
 */
export class Pixel {
  /**@type {string} */
  color;
  /**@type {{x: number, y: number}} */
  coords = { x, y };

  /**
   * Crea una nueva instancia de Pixel.
   *
   * @param {string} color - El color del píxel.
   * @param {{x: number, y: number}} coords - Objeto con las propiedades `x` e `y` que definen la posición.
   */
  constructor(color, coords) {
    this.color = color;
    this.coords = coords;
  }
}
