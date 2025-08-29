import { Screen } from './game/screen.js'

document.querySelector('#app').innerHTML = `<canvas class="game"></canvas>`
const screen = new Screen(document.querySelector('.game'))

screen.background = '#329981'
