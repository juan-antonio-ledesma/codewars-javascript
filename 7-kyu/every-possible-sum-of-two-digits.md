<h1>Every possible sum of two digits <sup><sup>7 Kyu</sup></sup></h1>

<sup>
  <a href="https://www.codewars.com/kata/5b4e474305f04bea11000148">
    <strong>LINK TO THE KATA</strong>
  </a> - <code>ALGORITHMS</code>
</sup>

## Description

Given a long number, return all the possible sum of two digits of it.

For example, 12345: all possible sum of two digits from that number are:

```
[ 1 + 2, 1 + 3, 1 + 4, 1 + 5, 2 + 3, 2 + 4, 2 + 5, 3 + 4, 3 + 5, 4 + 5 ]
```

Therefore the result must be:

```
[ 3, 4, 5, 6, 5, 6, 7, 7, 8, 9 ]
```

## Solution

```javascript
const digits = num => {
  const digits = num
    .toString()
    .split('')
    .map(character => Number(character))
  const digitsLength = digits.length
  const result = []

  for (let i = 0; i < digitsLength; i++) {
    const currentNumber = digits[0]
    digits.shift()
    let sumArray = digits.map(number => number + currentNumber)
    result.push(sumArray)
  }

  return result.reduce((a, b) => a.concat(b))
}
```
