<h1>Merge two arrays <sup><sup>7 Kyu</sup></sup></h1>

<sup>
  <a href="https://www.codewars.com/kata/583af10620dda4da270000c5">
    <strong>LINK TO THE KATA</strong>
  </a> - <code>FUNDAMENTALS</code> <code>ARRAYS</code>
</sup>

## Description

Write a function that combines two arrays by alternatingly taking elements from each array in turn.

Examples:

```
[a, b, c, d, e], [1, 2, 3, 4, 5] becomes  [a, 1, b, 2, c, 3, d, 4, e, 5]

[1, 2, 3], [a, b, c, d, e, f] becomes [1, a, 2, b, 3, c, d, e, f]
```

Points:

1. The arrays may be of different lengths, with at least one character/digit.
2. One array will be of string characters (in lower case, a-z), a second of integers (all positive starting at 1).

## Solution

```javascript
const mergeArrays = (a, b) => {
  const result = []
  const biggerArrayLength = a.length >= b.length ? a.length : b.length

  for (let i = 0; i < biggerArrayLength; i++) {
    if (a[i] !== undefined) result.push(a[i])
    if (b[i] !== undefined) result.push(b[i])
  }

  return result
}
```
