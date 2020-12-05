const fs = require('fs')
const input = fs.readFileSync('./input.txt')
  .toString()
  .split('\n')

/* --- EVERYTHING ABOVE THIS LINE IS GENERAL SETUP --- */

const seats = []
input.forEach(seat => {
  const id = parseInt(seat.replace(/F|L/g, 0).replace(/B|R/g, 1), 2)
  seats[id] = id
})

seats.some((_, i) => (!seats[i+1] && (console.log('OUTPUT:', i+1) || 1)))