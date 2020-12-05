const fs = require('fs')
const input = fs.readFileSync('./input.txt')
  .toString()
  .split('\n')

/* --- EVERYTHING ABOVE THIS LINE IS GENERAL SETUP --- */

function binToDec (input = [], zero = 0) {
  let val = 0
  for (let i = input.length; i >= 0; i--) {
    if (input[i] === zero) continue
    val += Math.pow(2, input.length - i - 1)
  }
  return Math.floor(val)
}

const seats = []
for (let seat of input) {
  const row = seat.substring(0, 7).split(''),
        col = seat.substr(7).split('')

  const id = binToDec(row, 'F') * 8 + binToDec(col, 'L')
  seats[id] = id
}

for (let seat in seats) {
  const next = parseInt(seat) + 1
  if (!seats[next]) return console.log('OUTPUT:', next)
}