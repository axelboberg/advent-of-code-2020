const fs = require('fs')

const TARGET = 2020

const input = fs.readFileSync('./input.txt')
  .toString()
  .split('\n')

const index = {}
for (let n of input) {
  index[n] = true
}

for (let i = 0, len = input.length; i < len; i++) {
  const a = parseInt(input[i])

  for (let j = 0; j < len; j++) {
    if (j === i) continue

    const b = parseInt(input[j])
    const c = 2020 - a - b

    if (!index[c]) continue

    console.log('OUTPUT:', a * b * c)
    return
  }
}