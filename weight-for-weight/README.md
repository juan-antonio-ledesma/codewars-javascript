# [Weight for weight - 5 kyu](https://www.codewars.com/kata/55c6126177c9441a570000cc)

```javascript
const sumOfDigits = strNum => {
  return strNum.split('').reduce((acc, cur) => acc + Number(cur), 0)
}

const orderWeight = str => {
  const numbers = str.split(' ')

  const pairs = []
  numbers.forEach(strNum => {
    pairs.push({ sum: sumOfDigits(strNum), stringNumber: strNum })
  })

  const orderedPairs = pairs.sort((a, b) => {
    return a.sum === b.sum
      ? a.stringNumber.localeCompare(b.stringNumber)
      : a.sum - b.sum
  })

  const result = []
  orderedPairs.forEach(item => {
    result.push(item.stringNumber)
  })

  return result.join(' ')
}
```
