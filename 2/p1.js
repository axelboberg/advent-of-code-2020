const fs = require('fs')

const input = fs.readFileSync('./input.txt')
  .toString()
  .split('\n')

function parseLine (str) {
  const [ 
    limits,
    char,
    pass
  ] = str.split(' ')

  const [ min, max ] = limits.split('-').map(v => parseInt(v))

  return {
    max,
    min,
    char: char.substring(0, char.length - 1),
    pass
  }
}

function validate (max, min, char, str) {
  let count = 0
  for (let c of str) {
    if (c === char) count++
  }
  return count <= max && count >= min
}

let valid = 0
for (let line of input) {
  const { max, min, char, pass } = parseLine(line)
  if (validate(max, min, char, pass)) valid++
}

console.log('OUTPUT:', valid)