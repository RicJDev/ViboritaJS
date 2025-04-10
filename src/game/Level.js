export class Level {
  constructor({ apple, snake, obstacles }) {
    this.apple = apple
    this.snake = snake
    this.obstacles = obstacles

    this.elements = [this.obstacles, this.apple, this.snake]
  }
}
