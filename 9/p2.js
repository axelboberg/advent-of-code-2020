const fs = require('fs')
const input = fs.readFileSync('./input.txt')
  .toString()
  .split('\n')
  .map(v => parseInt(v))

/* --- EVERYTHING ABOVE THIS LINE IS GENERAL SETUP --- */

const PREAMBLE = 25

let lowerBound = 0,
    upperBound = PREAMBLE

outer: while (upperBound < input.length) {
  const seen = {},
        target = input[upperBound]

  for (let i = lowerBound; i < upperBound; i++) {
    if (seen[target - input[i]]) break
    if (i === upperBound - 1) break outer

    seen[input[i]] = true
  }

  lowerBound++
  upperBound++
}

for (let i = upperBound - 1; i > 0; i--) {
  let remain = input[upperBound],
      current = i,
      largest = 0,
      smallest = remain

  while (remain > 0) {
    const val = input[current]
    remain -= val
    current--

    if (largest < val) largest = val
    if (smallest > val) smallest = val
  }

  if (remain === 0) console.log('OUTPUT:', largest + smallest)
}