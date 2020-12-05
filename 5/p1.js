const fs = require('fs')
const input = fs.readFileSync('./input.txt')
  .toString()
  .split('\n')

/* --- EVERYTHING ABOVE THIS LINE IS GENERAL SETUP --- */

let highest = 0
for (let seat of input) {
  const id = parseInt(seat.replace(/F|L/g, 0).replace(/B|R/g, 1), 2)
  if (highest < id) highest = id
}

console.log('OUTPUT:', highest)