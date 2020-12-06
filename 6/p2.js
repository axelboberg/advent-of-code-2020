const fs = require('fs')
const input = fs.readFileSync('./input.txt')
  .toString()
  .split(/^\n/gm)

/* --- EVERYTHING ABOVE THIS LINE IS GENERAL SETUP --- */

const sum = input 
  .map(g => {
    const index = {},
          people = g.split('\n')
                    .filter(v => v.length)

    people.map(p => 
      p.split('')
       .forEach(k => index[k] = index[k] == undefined ? 1 : index[k] + 1)
    )
    
    return Object.values(index).filter(v => v === people.length).length
  })
  .reduce((prev, cur) => (prev || 0) + cur)

console.log('OUTPUT:', sum)