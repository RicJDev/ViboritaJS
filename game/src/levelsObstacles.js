import { ObstaclesCollection } from './components.js'

/*-------------------- COLECCIONES DE OBSTACULOS PARA LOS NIVELES ---------------------*/
//-------------------------------------------------------------------------------------//

const _01 = new ObstaclesCollection()

let line = 15,
  x = 8,
  y = 22

for (let i = x; i < x + line; i++) _01.add({ x: i, y: y })

y = 6

for (let i = x; i < x + line; i++) _01.add({ x: i, y: y })

//--------------------------------------------------------------------------------------//

const _02 = new ObstaclesCollection()

// TODO: obstaculos del nivel 2

//--------------------------------------------------------------------------------------//

const _03 = new ObstaclesCollection()

// TODO: obstaculos del nivel 3

//--------------------------------------------------------------------------------------//

export { _01, _02, _03 }
