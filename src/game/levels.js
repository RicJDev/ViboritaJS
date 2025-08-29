import { Snake } from '../components/Snake.js'
import { Apple } from '../components/Apple.js'
import { Level } from './Level.js'
import { obstacles } from './obstacles.js'

export const levels = Array.from({ length: obstacles.length }, (_, i) => {
  return new Level({
    apple: new Apple(),
    snake: new Snake(),
    obstacles: obstacles[i],
  })
})
