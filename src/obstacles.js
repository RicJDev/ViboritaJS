import { ObstaclesCollection } from './components/ObstaclesCollection.js'

export const obstacles = [
  // Level 1
  new ObstaclesCollection()
  .addRow({ x: 8, y: 6, size: 15 })
  .addRow({ x: 8, y: 22, size: 15 }),

  // Level 2
  new ObstaclesCollection()
  .addColumn({ x: 6, y: 8, size: 15 })
  .addColumn({ x: 22, y: 8, size: 15 }),

  // Level 3
  new ObstaclesCollection()
  .addColumn({ x: 15, y: 5, size: 20 })
  .addRow({ x: 6, y: 15, size: 20 })
  .addPoint({ x: 10, y: 10 })
  .addPoint({ x: 10, y: 20 })
  .addPoint({ x: 20, y: 20 })
  .addPoint({ x: 20, y: 10 }),
]
