const fs = require('fs')

const SLOPE_X = 3
const SLOPE_Y = 1

const input = fs.readFileSync('./input.txt')
  .toString()
  .split('\n')

function isTree (x, y, map) {
  return map[y][x % map[y].length] === '#'
}

let x = 0,
    y = 0,
    c = 0

while (y < input.length - SLOPE_Y) {
  x += SLOPE_X
  y += SLOPE_Y
  c += isTree(x, y, input)
}
console.log('OUTPUT:', c)