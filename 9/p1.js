const fs = require('fs')
const input = fs.readFileSync('./input.txt')
  .toString()
  .split('\n')
  .map(v => parseInt(v))

/* --- EVERYTHING ABOVE THIS LINE IS GENERAL SETUP --- */

const PREAMBLE = 25

let lowerBound = 0,
    upperBound = PREAMBLE

while (upperBound < input.length) {
  const seen = {},
        target = input[upperBound]

  for (let i = lowerBound; i < upperBound; i++) {
    if (seen[target - input[i]]) break
    if (i === upperBound - 1) return console.log('OUTPUT:', target, 'is invalid')

    seen[input[i]] = true
  }

  lowerBound++
  upperBound++
}