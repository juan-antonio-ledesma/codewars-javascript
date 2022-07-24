# [Every possible sum of two digits - 7 kyu](https://www.codewars.com/kata/5b4e474305f04bea11000148)

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
