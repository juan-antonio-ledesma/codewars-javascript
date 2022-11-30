# [Tribonacci Sequence](https://www.codewars.com/kata/556deca17c58da83c00002db) · 6 kyu

```javascript
const getSumArrayNumbers = array => {
  return array.reduce((acc, curr) => acc + curr)
}

const tribonacci = (signature, n) => {
  if (n === 0) return []

  const signatureLength = signature.length

  if (signatureLength >= n) {
    return signature.slice(0, n)
  }

  const sequence = [...signature]

  for (let index = signatureLength; index < n; index++) {
    const currentNumber = getSumArrayNumbers(
      sequence.slice(index - signatureLength, index),
    )

    sequence.push(currentNumber)
  }

  return sequence
}
```
