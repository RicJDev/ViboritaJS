/**
 * @module Game
 */

import { Pixel } from '../entities/Pixel'

export class Screen {
  /** @private @type {HTMLCanvasElement} */
  #canvas

  /** @private @type {CanvasRenderingContext2D} */
  #context

  /**
   * Crea una nueva instancia de Screen.
   *
   * @param {HTMLCanvasElement} canvas - El elemento canvas al que se adjuntará la pantalla.
   * @param {Object} [options] - Opciones de configuración.
   * @param {number} [options.side=30] - Número de celdas de la cuadrícula por lado (crea una cuadrícula de lado x lado).
   * @param {number} [options.blockSize=15] - Tamaño de cada celda de la cuadrícula en píxeles.
   * @param {string} [options.background='#001010'] - Color de fondo CSS del canvas.
   */
  constructor(canvas, options = { side: 30, blockSize: 15, background: '#001010' }) {
    this.side = options.side
    this.blockSize = options.blockSize
    this.#canvas = canvas
    this.#canvas.style.background = options.background
    this.#canvas.height = this.side * this.blockSize
    this.#canvas.width = this.side * this.blockSize
    this.#context = this.#canvas.getContext('2d')
    this.#context.scale(this.blockSize, this.blockSize)
  }

  /**
   * Actualiza la pantalla limpiándola y luego dibujando los elementos proporcionados.
   * Cada elemento se dibuja como un cuadrado relleno en sus coordenadas de cuadrícula.
   *
   * @param {...Pixel} elements - Uno o más elementos para renderizar en la cuadrícula.
   */
  update(...elements) {
    this.clear()

    for (const { coords, color } of elements) {
      this.#context.fillStyle = color
      this.#context.fillRect(coords.x, coords.y, 1, 1)
    }
  }

  /**
   * Limpia todo el canvas, eliminando todo el contenido dibujado.
   * El color de fondo permanece sin cambios.
   */
  clear() {
    this.#context.clearRect(0, 0, this.#canvas.width, this.#canvas.height)
  }

  /**
   * Obtiene el color de fondo actual del canvas.
   *
   * @returns {string} El color de fondo CSS.
   */
  get background() {
    return this.#canvas.style.background
  }

  /**
   * Establece el color de fondo del canvas.
   *
   * @param {string} background - El nuevo color de fondo CSS.
   */
  set background(background) {
    this.#canvas.style.background = background
  }
}
