export class Level {
  #items

  constructor({ snake, apple, obstacles }) {
    this.#items = [snake, apple, obstacles]
    this.observers = []
  }

  update() {
    for (const observer of this.observers) {
      observer.update(...this.#items)
    }
  }
}
