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

  const [ p1, p2 ] = limits.split('-').map(v => parseInt(v))

  return {
    p1,
    p2,
    char: char.substring(0, char.length - 1),
    pass
  }
}

function validate (p1, p2, char, str) {
  const p1T = str[p1 - 1] === char
  const p2T = str[p2 - 1] === char
  return p1T ^ p2T
}

let valid = 0
for (let line of input) {
  const { p1, p2, char, pass } = parseLine(line)
  if (validate(p1, p2, char, pass)) valid++
}

console.log('OUTPUT:', valid)