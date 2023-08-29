<h1>Roman Numerals Encoder <sup><sup>6 Kyu</sup></sup></h1>

<sup>
  <a href="https://www.codewars.com/kata/51b62bf6a9c58071c600001b">
    <strong>LINK TO THE KATA</strong>
  </a> - <code>ALGORITHMS</code>
</sup>

## Description

Create a function taking a positive integer between 1 and 3999 (both included) as its parameter and returning a string containing the Roman Numeral representation of that integer.

Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero. In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 2008 is written as 2000=MM, 8=VIII; or MMVIII. 1666 uses each Roman symbol in descending order: MDCLXVI.

Example:

```javascript
solution(1000) // should return 'M'
```

Help:

```
Symbol    Value
I          1
V          5
X          10
L          50
C          100
D          500
M          1,000
```

Remember that there can't be more than 3 identical symbols in a row.

More about roman numerals - http://en.wikipedia.org/wiki/Roman_numerals

## Solutions

```javascript
const romanNumerals = [
  { value: 1000, symbol: 'M' },
  { value: 900, symbol: 'CM' },
  { value: 500, symbol: 'D' },
  { value: 400, symbol: 'CD' },
  { value: 100, symbol: 'C' },
  { value: 90, symbol: 'XC' },
  { value: 50, symbol: 'L' },
  { value: 40, symbol: 'XL' },
  { value: 10, symbol: 'X' },
  { value: 9, symbol: 'IX' },
  { value: 5, symbol: 'V' },
  { value: 4, symbol: 'IV' },
  { value: 1, symbol: 'I' },
]

const solution = number => {
  let result = ''

  for (const numeral of romanNumerals) {
    while (number >= numeral.value) {
      result += numeral.symbol
      number -= numeral.value
    }
  }

  return result
}
```

---

```javascript
const table = {
  thousands: {
    1: 'M',
    2: 'MM',
    3: 'MMM',
  },
  hundreds: {
    1: 'C',
    2: 'CC',
    3: 'CCC',
    4: 'CD',
    5: 'D',
    6: 'DC',
    7: 'DCC',
    8: 'DCCC',
    9: 'CM',
  },
  tens: {
    1: 'X',
    2: 'XX',
    3: 'XXX',
    4: 'XL',
    5: 'L',
    6: 'LX',
    7: 'LXX',
    8: 'LXXX',
    9: 'XC',
  },
  units: {
    1: 'I',
    2: 'II',
    3: 'III',
    4: 'IV',
    5: 'V',
    6: 'VI',
    7: 'VII',
    8: 'VIII',
    9: 'IX',
  },
}

const solution = number => {
  let result = ''

  const splitedNumber = String(number).split('')
  const splitedNumberLength = splitedNumber.length

  if (splitedNumberLength === 4) {
    result += table.thousands[splitedNumber[0]] || ''
    result += table.hundreds[splitedNumber[1]] || ''
    result += table.tens[splitedNumber[2]] || ''
    result += table.units[splitedNumber[3]] || ''
  }
  if (splitedNumberLength === 3) {
    result += table.hundreds[splitedNumber[0]] || ''
    result += table.tens[splitedNumber[1]] || ''
    result += table.units[splitedNumber[2]] || ''
  }
  if (splitedNumberLength === 2) {
    result += table.tens[splitedNumber[0]] || ''
    result += table.units[splitedNumber[1]] || ''
  }
  if (splitedNumberLength === 1) {
    result += table.units[splitedNumber[0]] || ''
  }

  return result
}
```
