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
  /** @type {string} El color del píxel en formato CSS (por ejemplo, '#ff0000', 'red'). */
  color

  /** @type {{x: number, y: number}} Las coordenadas del píxel dentro de la cuadrícula. */
  coords = { x, y } // Nota: En la implementación actual, se crea un nuevo objeto a partir de x e y.

  /**
   * Crea una nueva instancia de Pixel.
   *
   * @param {string} color - El color del píxel.
   * @param {{x: number, y: number}} coords - Objeto con las propiedades `x` e `y` que definen la posición.
   */
  constructor(color, coords) {
    this.color = color
    this.coords = coords // Asigna el objeto recibido (o en el código original se usa { x, y }).
  }
}
