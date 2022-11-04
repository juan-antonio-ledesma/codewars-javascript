# [Matrix Addition](https://www.codewars.com/kata/526233aefd4764272800036f) · 6 kyu

```javascript
const flatArray = array => array.reduce((a, b) => a.concat(b))

const chunkArray = (array, chunkSize) => {
  const arrayChunked = []

  while (array.length) {
    arrayChunked.push(array.splice(0, chunkSize))
  }

  return arrayChunked
}

const matrixAddition = (matrixA, matrixB) => {
  const matrixAFlatted = flatArray(matrixA)
  const matrixBFlatted = flatArray(matrixB)

  const sumOfFlattedArrays = matrixAFlatted.map((number, index) => {
    return number + matrixBFlatted[index]
  })

  return chunkArray(sumOfFlattedArrays, matrixA.length)
}
```
