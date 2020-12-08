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

let store = {},
    logS = {}

function log (key) {
  if (!logS[key]) logS[key] = 0
  logS[key]++
  return logS[key]
}

function reset () {
  store = {}
  logS = {}
}

function call (i, arr) {
  if (log(i) > 1) {
    return false
  }

  const [ verb, val ] = arr[i].split(' ')

  const fn = VERBS[verb]
  const next = fn(val, i, store)

  if (!arr[next]) {
    console.log('TERMINATED:', store)
    return true
  }

  return call(next, arr)
}

function copy (arr) {
  const cpy = []
  for (let v of arr) {
    cpy.push(v)
  }
  return cpy
}

const jmps = input
  .map((val, i) => [ val, i ])
  .filter(([val]) => val.indexOf('jmp') === 0)
  .map(([_, i]) => i)

for (let i = 0, len = jmps.length; i < len; i++) {
  reset()

  const arr = copy(input)
  arr[jmps[i]] = 'nop 0'

  if (call(0, arr)) return
}