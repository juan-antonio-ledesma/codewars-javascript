# [Matrix Addition - 6 kyu](https://www.codewars.com/kata/526233aefd4764272800036f)

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
