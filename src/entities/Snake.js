import { Entity } from './Entity'

export class Snake extends Entity {
  move() {
    this.position++
  }
}
