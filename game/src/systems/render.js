function render(level) {
  const { grid, colors } = level

  const blockSize = 15

  const canvas = document.querySelector('canvas')
  canvas.height = grid.length * blockSize
  canvas.width = grid[0].length * blockSize

  const context = canvas.getContext('2d')
  context.scale(blockSize, blockSize)

  grid.forEach((row, y) => {
    row.forEach((value, x) => {
      context.fillStyle = colors[value] || colors[0]

      context.fillRect(x, y, 1, 1)
    })
  })
}

export { render }
