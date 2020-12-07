const fs = require('fs')
const input = fs.readFileSync('./input.txt')
  .toString()
  .split('\n')

/* --- EVERYTHING ABOVE THIS LINE IS GENERAL SETUP --- */

const types = input
  .map(rule => {
    return rule
      .replace(/(contain|,|\.)/g, '')
      .split(/bags|bag/g)
      .filter(str => str.length)
      .map((str, i) => {
        if (i === 0) return str
        return (/(\d)(.+)/g).exec(str)
      })
    }
  )
  .map(([type, ...contents]) => {
    const cleanContents = contents
      .map(bag => {
        if (!bag) return

        const color = bag[2].replace(/\s/g, ''),
              count = parseInt(bag[1])

        return [color, count]
      })
      .filter(v => v)
      .reduce((prev, cur) => {
        return [...prev, cur]
      }, [])
    return [type.replace(/\s/g, ''), cleanContents]
  })

const index = {}
for (let [t, c] of types) {
  index[t] = c
}

function deepContents (color, map) {
  const contents = map[color]
  if (!contents || !contents.length) return 1

  return contents
    .map(([color, count]) => deepContents(color, map) * count)
    .reduce((prev, cur) => prev + cur, 1)
}

const count = deepContents('shinygold', index) - 1
console.log('OUTPUT:', count)