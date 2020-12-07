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
        if (!bag) return false
        return bag[2].replace(/\s/g, '')
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

function deepContains (outer, col, map) {
  const contents = map[outer]
  if (!contents || !contents.length) return false
  if (contents.includes(col)) return true

  return contents.some(v => {
    return deepContains(v, col, map)
  })
}

const contains = Object.keys(index)
  .filter(v => deepContains(v, 'shinygold', index))

console.log('OUTPUT:', contains)