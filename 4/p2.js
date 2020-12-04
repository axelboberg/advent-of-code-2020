const fs = require('fs')

const RULES = [
  { key: 'byr', fn: v => parseInt(v) >= 1920 && v <= 2002 },
  { key: 'iyr', fn: v => v >= 2010 && v <= 2020 },
  { key: 'eyr', fn: v => v >= 2020 && v <= 2030 },
  { key: 'hgt', fn: v => {
    const res = v.match(/^(\d*)(cm|in)$/)
    if (!res) return

    if (res[2] === 'cm') {
      return res[1] >= 150 && res[1] <= 193
    }
    return res[1] >= 59 && res[1] <= 76
    }
  },
  { key: 'hcl', fn: v => /^#(\d|\w){6}$/.test(v) },
  { key: 'ecl', fn: v => [ 'amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth' ].includes(v)},
  { key: 'pid', fn: v => v.length === 9 }
]

const passports = fs.readFileSync('./input.txt')
  .toString()
  .split(/^\n/gm)

function validate (str, rules = RULES) {
  const index = {}

  str
    .split('\n').join(' ')
    .split(' ')
    .map(p => p.split(':'))
    .forEach(([key, val]) => index[key] = val)

  for (let { key, fn } of rules) {
    if (!index[key] || !fn(index[key])) return false
  }
  return true
}

let c = 0
for (let passport of passports) {
  c += validate(passport)
}

console.log('OUTPUT:', c)