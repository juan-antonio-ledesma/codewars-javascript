# [Multiplication table - 6 kyu](https://www.codewars.com/kata/534d2f5b5371ecf8d2000a08)

```javascript
const getArrayOfNumbers = (number, multiplier) => {
  const result = []

  for (let i = 1; i <= number; i++) {
    result.push(i * multiplier)
  }

  return result
}

const multiplicationTable = size => {
  const arrayWrapper = Array(size).fill([])

  const resultArray = arrayWrapper.map((subArray, index) => {
    return getArrayOfNumbers(size, index + 1)
  })

  return resultArray
}
```
