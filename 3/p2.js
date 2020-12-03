const fs = require('fs')

const SLOPES = [
  [1, 1],
  [3, 1],
  [5, 1],
  [7, 1],
  [1, 2]
]

const input = fs.readFileSync('./input.txt')
  .toString()
  .split('\n')

function isTree (x, y, map) {
  return map[y][x % map[y].length] === '#'
}

let res = []

for (let slope of SLOPES) {
  let x = 0,
      y = 0,
      c = 0

  while (y < input.length - slope[1]) {
    x += slope[0]
    y += slope[1]
    c += isTree(x, y, input)
  }

  res.push(c)
}

const product = res.reduce((prev, cur) => prev ? prev * cur : cur)
console.log('OUTPUT:', product)