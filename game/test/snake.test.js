import { Snake } from '../src/components/snake.js'

const charlie = new Snake()

for (let i = 0; i < 50; i++) {
  charlie.move()

  console.log(charlie.head.x)
}
