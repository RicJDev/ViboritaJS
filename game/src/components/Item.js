function defaultCallback(x, y) {
  x = Math.floor(Math.random() * 30)
  y = Math.floor(Math.random() * 30)

  return { x, y }
}

// Un item es un alimento que provoca que la serpiente crezca.

class Item {
  position = { x: 10, y: 20 }
  isGeneretable = true

  color = '#970'
  gridValue = 6

  /**
   * Funcion para generar un nuevo Item. Se le puede pasar un callback para determinar las condiciones en las que se genera el nuevo Item.
   *
   * Por defecto tiene este callback:
   * ```js
   * (x, y) => {
   * x = Math.floor(Math.random() * 30)
   * y = Math.floor(Math.random() * 30)
   *
   * return { x, y }
   * }
   * ```
   * @param {(x: number, y: number) => { x: number, y: number }} callback
   */
  generate(callback = defaultCallback) {
    if (this.isGeneretable) {
      this.isGeneretable = false

      const { x, y } = callback(this.position.x, this.position.y) || this.position

      this.position.x = x
      this.position.y = y
    }
  }
}

export { Item }
