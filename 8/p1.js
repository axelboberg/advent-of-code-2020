const fs = require('fs')
const input = fs.readFileSync('./input.txt')
  .toString()
  .split('\n')

/* --- EVERYTHING ABOVE THIS LINE IS GENERAL SETUP --- */

const VERBS = {
  'acc': (val, i, store) => {
    if (!store.accumulator) store.accumulator = 0
    store.accumulator += parseInt(val)
    return i + 1
  },
  'jmp': (val, i, store) => {
    return i + parseInt(val)
  },
  'nop': (val, i, store) => {
    return i + 1
  }
}

const store = {},
      logS = {}

function log (key) {
  if (!logS[key]) logS[key] = 0
  logS[key]++
  return logS[key]
}

function call (i, arr) {
  if (log(i) > 1) {
    console.log('INFINITE LOOP:', store)
    return
  }

  const [ verb, val ] = arr[i].split(' ')

  const fn = VERBS[verb]
  return call(fn(val, i, store), arr)
}

call(0, input)