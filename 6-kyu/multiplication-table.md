<h1>Multiplication table <sup><sup>6 Kyu</sup></sup></h1>

<sup>
  <a href="https://www.codewars.com/kata/534d2f5b5371ecf8d2000a08">
    <strong>LINK TO THE KATA</strong>
  </a> - <code>ARRAYS</code> <code>FUNDAMENTALS</code>
</sup>

## Description

Your task, is to create N×N multiplication table, of size provided in parameter.

For example, when given `size` is 3:

```
1 2 3
2 4 6
3 6 9
```

For the given example, the return value should be:

```
[[1,2,3],[2,4,6],[3,6,9]]
```

## Solution

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
