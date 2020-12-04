const fs = require('fs')

const REQUIRED_KEYS = [ 'byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid' ]

const passports = fs.readFileSync('./input.txt')
  .toString()
  .split(/^\n/gm)

function validate (str, requiredKeys = REQUIRED_KEYS) {
  for (let key of requiredKeys) {
    if (str.indexOf(key + ':') === -1) return false
  }
  return true
}

let c = 0
for (let passport of passports) {
  c += validate(passport)
}

console.log('OUTPUT:', c)