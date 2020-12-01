const fs = require('fs')

const TARGET = 2020

const input = fs.readFileSync('./input.txt')
  .toString()
  .split('\n')

const index = {}
for (let n of input) {
  index[n] = true
}

for (let n of input) {
  const a = parseInt(n)
  const b = 2020 - a

  if (!index[b]) continue
  console.log('OUTPUT:', a * b)
  return
}