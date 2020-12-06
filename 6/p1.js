const fs = require('fs')
const input = fs.readFileSync('./input.txt')
  .toString()
  .split(/^\n/gm)

/* --- EVERYTHING ABOVE THIS LINE IS GENERAL SETUP --- */

const sum = input 
  .map(g => {
    const index = {}
    g.split('').filter(k => k !== '\n').forEach(k => index[k] = true)
    return Object.keys(index).length
  })
  .reduce((prev, cur) => (prev || 0) + cur)

console.log('OUTPUT:', sum)